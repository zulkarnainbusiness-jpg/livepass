import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { MountainPass } from '../types';
import { passesData } from '../data/passes';

interface PassesContextType {
  passes: MountainPass[];
  isLoading: boolean;
  error: string | null;
  refreshPasses: () => Promise<void>;
}

const PassesContext = createContext<PassesContextType | undefined>(undefined);

function formatRelativeTime(dateStr: string): string {
  if (!dateStr) return 'Unknown';
  const date = new Date(dateStr);
  const diffMs = Date.now() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  
  if (diffMins < 1) return 'Just now';
  if (diffMins === 1) return '1 minute ago';
  if (diffMins < 60) return `${diffMins} minutes ago`;
  
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours === 1) return '1 hour ago';
  if (diffHours < 24) return `${diffHours} hours ago`;
  
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}

export const PassesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [passes, setPasses] = useState<MountainPass[]>(passesData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPasses = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/passes');
      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
      }
      const data = await response.json();
      
      if (data.success && Array.isArray(data.passes)) {
        setPasses((prevPasses) => {
          return prevPasses.map((staticPass) => {
            const dbPass = data.passes.find((p: any) => p.id === staticPass.id);
            if (dbPass) {
              // Merge dynamic data from DB into static pass data
              return {
                ...staticPass,
                status: dbPass.status,
                statusDetail: dbPass.status_reason || staticPass.statusDetail,
                roadCondition: dbPass.status_reason || staticPass.roadCondition,
                chainRequirement: dbPass.restrictions && dbPass.restrictions !== 'None'
                  ? dbPass.restrictions
                  : staticPass.chainRequirement || 'No restrictions reported.',
                lastUpdated: formatRelativeTime(dbPass.last_checked_at || dbPass.last_status_change_at),
                officialSource: dbPass.official_source_url || staticPass.officialSource,
                // Custom properties for detail views
                verification: {
                  status: dbPass.verification_status,
                  confidence: dbPass.confidence,
                  lastCheckedAt: dbPass.last_checked_at,
                  lastStatusChangeAt: dbPass.last_status_change_at,
                  sourcePublishedAt: dbPass.source_published_at,
                  sourceEvidence: dbPass.source_evidence,
                  sourceUrl: dbPass.source_url,
                  authority: dbPass.official_authority
                } as any
              };
            }
            return staticPass;
          });
        });
      } else {
        throw new Error(data.error || 'Failed to parse passes data');
      }
    } catch (err: any) {
      console.warn('Failed to load passes from database, falling back to static local data.', err);
      setError(err.message || 'Error loading live pass database.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPasses();
  }, [fetchPasses]);

  return (
    <PassesContext.Provider value={{ passes, isLoading, error, refreshPasses: fetchPasses }}>
      {children}
    </PassesContext.Provider>
  );
};

export const usePasses = () => {
  const context = useContext(PassesContext);
  if (context === undefined) {
    throw new Error('usePasses must be used within a PassesProvider');
  }
  return context;
};
