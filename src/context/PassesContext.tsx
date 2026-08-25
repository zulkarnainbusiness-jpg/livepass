import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { MountainPass } from '../types';
import { passesData } from '../data/passes';
import { fetchLatestPassStatuses } from '../services/supabaseClient';

interface PassesContextType {
  passes: MountainPass[];
  isLoading: boolean;
  error: string | null;
  refreshPasses: () => Promise<void>;
}

const PassesContext = createContext<PassesContextType | undefined>(undefined);

function formatRelativeTime(dateStr?: string | null): string {
  if (!dateStr) return 'Recently updated';
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return 'Recently updated';
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
  } catch {
    return 'Recently updated';
  }
}

export const PassesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [passes, setPasses] = useState<MountainPass[]>(passesData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPasses = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      // 1. Fetch live telemetry from Supabase
      const supabaseStatuses = await fetchLatestPassStatuses();

      if (supabaseStatuses.size > 0) {
        setPasses((prevPasses) => {
          return prevPasses.map((staticPass) => {
            const liveRecord = supabaseStatuses.get(staticPass.slug) || supabaseStatuses.get(staticPass.id);
            if (!liveRecord) return staticPass;

            const restrictions = [
              liveRecord.restriction_eastbound ? `EB: ${liveRecord.restriction_eastbound}` : null,
              liveRecord.restriction_westbound ? `WB: ${liveRecord.restriction_westbound}` : null
            ].filter(Boolean).join(' | ');

            const tempF = liveRecord.temperature_f ?? staticPass.weather.tempF;
            const tempC = liveRecord.temperature_f != null 
              ? Math.round((liveRecord.temperature_f - 32) * (5 / 9)) 
              : staticPass.weather.tempC;

            return {
              ...staticPass,
              status: liveRecord.status || staticPass.status,
              statusDetail: liveRecord.road_condition || staticPass.statusDetail,
              roadCondition: liveRecord.road_condition || staticPass.roadCondition,
              chainRequirement: restrictions || staticPass.chainRequirement || 'No restrictions currently active.',
              lastUpdated: formatRelativeTime(liveRecord.official_updated_at || liveRecord.scraped_at),
              officialSource: liveRecord.source || staticPass.officialSource,
              weather: {
                ...staticPass.weather,
                tempF,
                tempC,
                condition: liveRecord.weather_condition || staticPass.weather.condition
              },
              verification: {
                status: 'VERIFIED_OFFICIAL_DOT',
                confidence: liveRecord.source_confidence || 'HIGH',
                lastCheckedAt: liveRecord.scraped_at,
                lastStatusChangeAt: liveRecord.official_updated_at || liveRecord.scraped_at,
                sourceEvidence: liveRecord.road_condition,
                sourceUrl: staticPass.official_source_url,
                authority: liveRecord.source || staticPass.official_authority
              } as any
            };
          });
        });
      }
    } catch (err: any) {
      console.warn('Failed to load passes from Supabase, maintaining static local fallback.', err);
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
