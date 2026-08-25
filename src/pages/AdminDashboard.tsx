import React, { useState, useEffect, useCallback } from 'react';
import { 
  ShieldAlert, 
  Settings, 
  Database, 
  RefreshCw, 
  ListFilter, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  FileText, 
  User, 
  Edit3, 
  Globe 
} from 'lucide-react';
import { StatusBadge } from '../components/StatusBadge';
import { SEOHelper } from '../components/SEOHelper';
import { usePasses } from '../context/PassesContext';
import './AdminDashboard.css';

interface DashboardData {
  stats: {
    total: number;
    open: number;
    closed: number;
    restricted: number;
    seasonalClosure: number;
    temporarilyClosed: number;
    unknown: number;
    needsVerification: number;
    failedChecks: number;
    conflictingSources: number;
    notCheckedRecently: number;
  };
  passes: any[];
  history: any[];
  overrides: any[];
}

export const AdminDashboard: React.FC = () => {
  const { refreshPasses } = usePasses();
  const [adminSecret, setAdminSecret] = useState(() => localStorage.getItem('lp_admin_secret') || '');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  
  // Override Modal/Form State
  const [selectedPass, setSelectedPass] = useState<any | null>(null);
  const [newStatus, setNewStatus] = useState('OPEN');
  const [operator, setOperator] = useState('');
  const [reason, setReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showMessage = (text: string, type: 'success' | 'error') => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 5000);
  };

  const fetchDashboardData = useCallback(async (secretToUse = adminSecret) => {
    if (!secretToUse) return;
    setIsLoading(true);
    setAuthError(null);
    try {
      const response = await fetch(`/api/admin/stats?secret=${encodeURIComponent(secretToUse)}`);
      if (response.status === 401) {
        setIsAuthorized(false);
        throw new Error('Invalid Admin Secret key.');
      }
      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }
      const resData = await response.json();
      if (resData.success) {
        setData(resData);
        setIsAuthorized(true);
        localStorage.setItem('lp_admin_secret', secretToUse);
      } else {
        throw new Error(resData.error || 'Failed to fetch statistics');
      }
    } catch (err: any) {
      console.error(err);
      setAuthError(err.message || 'Connection error.');
    } finally {
      setIsLoading(false);
    }
  }, [adminSecret]);

  useEffect(() => {
    if (adminSecret) {
      fetchDashboardData();
    }
  }, []);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminSecret.trim()) {
      fetchDashboardData(adminSecret.trim());
    }
  };

  // Seed DB trigger
  const handleTriggerSeed = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/admin/seed?secret=${encodeURIComponent(adminSecret)}`, { method: 'POST' });
      const resData = await response.json();
      if (resData.success) {
        showMessage(resData.message, 'success');
        fetchDashboardData();
        refreshPasses();
      } else {
        throw new Error(resData.error || 'Seed command failed.');
      }
    } catch (err: any) {
      showMessage(err.message || 'Seeding failed.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  // Trigger verify all immediately
  const handleTriggerVerifyAll = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/cron/verify?force=true`, { method: 'POST' });
      const resData = await response.json();
      if (resData.success) {
        const stats = resData.stats;
        showMessage(`Processed ${stats.totalFound} passes: ${stats.verifiedCount} verified, ${stats.changedCount} status changes, ${stats.failedCount} failures.`, 'success');
        fetchDashboardData();
        refreshPasses();
      } else {
        throw new Error(resData.error || 'Verification command failed.');
      }
    } catch (err: any) {
      showMessage(err.message || 'Verification job failed.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  // Submit manual override
  const handleOverrideSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPass || !operator.trim() || !reason.trim()) {
      showMessage('Please fill in all override fields.', 'error');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/admin/override?secret=${encodeURIComponent(adminSecret)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          passId: selectedPass.id,
          operator: operator.trim(),
          newStatus,
          reason: reason.trim()
        })
      });
      const resData = await response.json();
      
      if (resData.success) {
        showMessage(resData.message, 'success');
        setSelectedPass(null);
        setOperator('');
        setReason('');
        fetchDashboardData();
        refreshPasses();
      } else {
        throw new Error(resData.error || 'Override failed.');
      }
    } catch (err: any) {
      showMessage(err.message || 'Override command failed.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isAuthorized) {
    return (
      <div className="admin-login-wrapper">
        <div className="admin-login-card lp-card">
          <div className="login-header">
            <ShieldAlert size={36} color="#EF4444" />
            <h2>LivePassWatch Admin Console</h2>
            <p>Access key required for database and privileged operations</p>
          </div>
          <form onSubmit={handleLoginSubmit} className="login-form">
            <input 
              type="password" 
              placeholder="Enter Admin Secret" 
              value={adminSecret} 
              onChange={e => setAdminSecret(e.target.value)}
              className="login-input"
              required 
            />
            {authError && <div className="auth-error-msg">{authError}</div>}
            <button type="submit" className="btn btn-primary login-btn" disabled={isLoading}>
              {isLoading ? 'Verifying...' : 'Authorize Console'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard-container app-container">
      <SEOHelper
        title="Admin Control Dashboard"
        description="Admin console"
        canonicalUrl="https://www.livepasswatch.info/admin"
        noIndex={true}
      />
      {/* Dashboard Heading Banner */}
      <header className="admin-header-row">
        <div>
          <h1 className="admin-main-heading">Control Dashboard</h1>
          <p className="admin-meta-subtitle">Automated pass-status verification, seed execution, and manual audit control</p>
        </div>
        <div className="header-action-group">
          <button className="btn btn-secondary action-pill-btn" onClick={() => fetchDashboardData()} disabled={isLoading}>
            <RefreshCw size={16} className={isLoading ? 'spin' : ''} /> Reload Statistics
          </button>
          <button className="btn btn-secondary action-pill-btn" onClick={handleTriggerSeed} disabled={isLoading}>
            <Database size={16} /> Seed Pass DB
          </button>
          <button className="btn btn-primary action-pill-btn" onClick={handleTriggerVerifyAll} disabled={isLoading}>
            <Globe size={16} /> Trigger Verification (All)
          </button>
        </div>
      </header>

      {/* Global Status Banner Alert */}
      {message && (
        <div className={`admin-notification-toast type-${message.type}`}>
          {message.text}
        </div>
      )}

      {/* 4 Stats Cards Grid */}
      {data && (
        <div className="admin-stats-grid">
          <div className="admin-stat-card lp-card">
            <div className="stat-label">Total Seeded Passes</div>
            <div className="stat-value">{data.stats.total}</div>
            <div className="stat-sub">Configured authorities</div>
          </div>
          <div className="admin-stat-card lp-card">
            <div className="stat-label">Seeded Status Breakdown</div>
            <div className="stat-breakdown-row">
              <span className="status-dot-count"><span className="dot open" /> {data.stats.open} Open</span>
              <span className="status-dot-count"><span className="dot caution" /> {data.stats.restricted} Restricted</span>
              <span className="status-dot-count"><span className="dot closed" /> {data.stats.closed} Closed</span>
            </div>
            <div className="stat-breakdown-row" style={{ marginTop: '8px' }}>
              <span className="status-dot-count"><span className="dot closed" /> {data.stats.seasonalClosure} Seasonal</span>
              <span className="status-dot-count"><span className="dot unknown" /> {data.stats.needsVerification} Unverified</span>
            </div>
          </div>
          <div className="admin-stat-card lp-card">
            <div className="stat-label">Verification Health</div>
            <div className="stat-breakdown-row">
              <span className="status-dot-count text-danger"><AlertTriangle size={14} /> {data.stats.failedChecks} Failed Checks</span>
              <span className="status-dot-count text-warning"><Clock size={14} /> {data.stats.notCheckedRecently} Stale Checks</span>
            </div>
            <div className="stat-sub" style={{ marginTop: '8px' }}>Checks triggered every 6 hours</div>
          </div>
          <div className="admin-stat-card lp-card">
            <div className="stat-label">Conflicts & Overrides</div>
            <div className="stat-breakdown-row">
              <span className="status-dot-count text-danger"><ShieldAlert size={14} /> {data.stats.conflictingSources} Conflicts</span>
              <span className="status-dot-count text-info"><FileText size={14} /> {data.overrides.length} Overrides logged</span>
            </div>
            <div className="stat-sub" style={{ marginTop: '8px' }}>Conflicts flagged for manual review</div>
          </div>
        </div>
      )}

      {/* Manual Override Editor Section */}
      {selectedPass && (
        <section className="override-form-section lp-card">
          <h2 className="section-heading">Apply Status Override: {selectedPass.pass_name}</h2>
          <form onSubmit={handleOverrideSubmit} className="override-form-grid">
            <div className="form-group">
              <label>Select Override Status</label>
              <select value={newStatus} onChange={e => setNewStatus(e.target.value)} className="form-input">
                <option value="OPEN">OPEN (Clean / No Restriction)</option>
                <option value="RESTRICTED">RESTRICTED (Chains/Speed limits)</option>
                <option value="CLOSED">CLOSED (Snow clearance/Safety)</option>
                <option value="SEASONAL_CLOSURE">SEASONAL_CLOSURE (Winter gate closed)</option>
                <option value="TEMPORARILY_CLOSED">TEMPORARILY_CLOSED (Accident/Brief clearance)</option>
                <option value="NEEDS_VERIFICATION">NEEDS_VERIFICATION (Doubtful status)</option>
                <option value="UNKNOWN">UNKNOWN</option>
              </select>
            </div>
            <div className="form-group">
              <label>Operator Name</label>
              <div className="input-with-icon">
                <User size={16} className="input-icon" />
                <input 
                  type="text" 
                  placeholder="e.g. John Doe" 
                  value={operator} 
                  onChange={e => setOperator(e.target.value)} 
                  className="form-input"
                  required 
                />
              </div>
            </div>
            <div className="form-group span-2">
              <label>Override Reason</label>
              <div className="input-with-icon">
                <Edit3 size={16} className="input-icon" />
                <input 
                  type="text" 
                  placeholder="e.g. Official WSDOT Twitter verified reopening at 2 PM" 
                  value={reason} 
                  onChange={e => setReason(e.target.value)} 
                  className="form-input"
                  required 
                />
              </div>
            </div>
            <div className="form-actions span-2">
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Applying override...' : 'Apply Status Override'}
              </button>
              <button type="button" className="btn btn-secondary" onClick={() => setSelectedPass(null)}>
                Cancel
              </button>
            </div>
          </form>
        </section>
      )}

      {/* Main Lists Section */}
      {data && (
        <div className="dashboard-lists-layout">
          {/* Left Column: Passes Table */}
          <div className="passes-table-card lp-card">
            <div className="card-header-row">
              <h3 className="card-heading"><ListFilter size={18} /> Seeded Passes Database</h3>
            </div>
            <div className="table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Pass ID / Name</th>
                    <th>Highway</th>
                    <th>Status</th>
                    <th>Authority</th>
                    <th>Last Checked</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.passes.map((p: any) => (
                    <tr key={p.id}>
                      <td>
                        <div className="pass-name-col">{p.pass_name}</div>
                        <div className="pass-id-sub">{p.id}</div>
                      </td>
                      <td style={{ fontWeight: 500 }}>US WSDOT</td>
                      <td>
                        <StatusBadge status={p.status} size="sm" />
                        {p.verification_status !== 'VERIFIED' && (
                          <div style={{ fontSize: '10px', color: '#EF4444', marginTop: '4px' }}>
                            {p.verification_status}
                          </div>
                        )}
                      </td>
                      <td><a href={p.official_source_url} target="_blank" rel="noopener noreferrer" style={{ color: '#3B82F6', textDecoration: 'underline' }}>{p.official_authority}</a></td>
                      <td style={{ fontSize: '12.5px', color: 'var(--text-secondary)' }}>
                        {p.last_checked_at ? new Date(p.last_checked_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Never'}
                      </td>
                      <td>
                        <button className="btn btn-secondary btn-xs-override" onClick={() => {
                          setSelectedPass(p);
                          setNewStatus(p.status);
                        }}>
                          Override
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: History & Audit Overrides */}
          <div className="dashboard-side-logs">
            {/* Override Audit Logs */}
            <div className="lp-card side-log-card">
              <h3 className="card-heading"><ShieldAlert size={18} /> Manual Override Audit Trail</h3>
              <div className="log-list">
                {data.overrides.length > 0 ? (
                  data.overrides.map((o: any) => (
                    <div key={o.id} className="log-item">
                      <div className="log-time-row">
                        <span className="log-operator"><User size={12} /> {o.operator}</span>
                        <span className="log-time">{new Date(o.timestamp).toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                      </div>
                      <div className="log-message">
                        Overrode <strong>{o.pass_id}</strong> from <span className="txt-status-old">{o.old_status}</span> to <span className="txt-status-new">{o.new_status}</span>
                      </div>
                      <div className="log-reason">"{o.reason}"</div>
                    </div>
                  ))
                ) : (
                  <p className="no-logs-msg">No manual overrides recorded.</p>
                )}
              </div>
            </div>

            {/* Recent Status Updates */}
            <div className="lp-card side-log-card">
              <h3 className="card-heading"><CheckCircle size={18} /> Recent Verified Updates</h3>
              <div className="log-list">
                {data.history.length > 0 ? (
                  data.history.map((h: any) => (
                    <div key={h.id} className="log-item">
                      <div className="log-time-row">
                        <span className="log-pass"><strong>{h.pass_id}</strong></span>
                        <span className="log-time">{new Date(h.timestamp).toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                      </div>
                      <div className="log-message-row">
                        Status: <StatusBadge status={h.status} size="sm" />
                      </div>
                      <div className="log-reason" style={{ marginTop: '4px' }}>"{h.reason}"</div>
                    </div>
                  ))
                ) : (
                  <p className="no-logs-msg">No status changes logged.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
