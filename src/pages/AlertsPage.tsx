import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  XCircle, 
  AlertTriangle, 
  Info, 
  CheckCircle2, 
  Bell, 
  MapPin, 
  ChevronRight, 
  ChevronLeft, 
  ShieldCheck, 
  Zap,
  Check
} from 'lucide-react';
import { alertsData, getAlertSummaryCounts } from '../data/alerts';
import { getPassUrl } from '../data/passes';
import { StatusBadge } from '../components/StatusBadge';
import { TrustBar } from '../components/TrustBar';
import { SEOHelper } from '../components/SEOHelper';
import { apiService } from '../services/apiService';
import './AlertsPage.css';

export const AlertsPage: React.FC = () => {
  const navigate = useNavigate();
  const summaryCounts = getAlertSummaryCounts();

  // Filters State
  const [selectedCountry, setSelectedCountry] = useState('All Countries');
  const [selectedState, setSelectedState] = useState('All States/Provinces');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedStatus, setSelectedStatus] = useState('All Statuses');
  const [sortBy, setSortBy] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Subscription state
  const [emailInput, setEmailInput] = useState('');
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);

  // Extract unique countries and states
  const countries = useMemo(() => {
    const set = new Set(alertsData.map(a => a.country));
    return ['All Countries', ...Array.from(set)];
  }, []);

  const states = useMemo(() => {
    let filtered = alertsData;
    if (selectedCountry !== 'All Countries') {
      filtered = alertsData.filter(a => a.country === selectedCountry);
    }
    const set = new Set(filtered.map(a => a.state));
    return ['All States/Provinces', ...Array.from(set)];
  }, [selectedCountry]);

  // Filtered & Sorted Alerts
  const filteredAlerts = useMemo(() => {
    return alertsData.filter(alert => {
      if (selectedCountry !== 'All Countries' && alert.country !== selectedCountry) return false;
      if (selectedState !== 'All States/Provinces' && alert.state !== selectedState) return false;
      if (selectedType !== 'All Types' && alert.type.toLowerCase() !== selectedType.toLowerCase()) return false;
      if (selectedStatus !== 'All Statuses' && alert.status.toUpperCase() !== selectedStatus.toUpperCase()) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === 'severity') {
        const severityRank = { critical: 4, warning: 3, advisory: 2, info: 1 };
        return severityRank[b.severity] - severityRank[a.severity];
      }
      if (sortBy === 'name-asc') return a.passName.localeCompare(b.passName);
      if (sortBy === 'name-desc') return b.passName.localeCompare(a.passName);
      return 0; // Default latest order
    });
  }, [selectedCountry, selectedState, selectedType, selectedStatus, sortBy]);

  const totalPages = Math.ceil(filteredAlerts.length / itemsPerPage) || 1;
  const paginatedAlerts = filteredAlerts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleClearFilters = () => {
    setSelectedCountry('All Countries');
    setSelectedState('All States/Provinces');
    setSelectedType('All Types');
    setSelectedStatus('All Statuses');
    setSortBy('latest');
    setCurrentPage(1);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) return;
    setIsSubscribing(true);
    await apiService.subscribeAlerts(emailInput);
    setIsSubscribing(false);
    setSubscribeSuccess(true);
    setEmailInput('');
    setTimeout(() => setSubscribeSuccess(false), 5000);
  };

  const handleAlertClick = (alert: typeof alertsData[0]) => {
    navigate(getPassUrl(alert));
  };

  return (
    <div className="alerts-page-container">
      <SEOHelper
        title="Pass Alerts, Closures & Travel Advisories"
        description="Real-time mountain pass alerts, road closures, winter weather warnings, and highway clearance reports worldwide."
        canonicalUrl="https://www.livepasswatch.info/alerts"
      />

      <div className="app-container">
        {/* Page Title Banner */}
        <div className="page-header-title-section">
          <div className="page-title-banner">
            <span className="title-dash" />
            <h1>PASS ALERTS</h1>
            <span className="title-dash" />
          </div>
          <p className="page-header-subtitle">Stay informed about closures, advisories, and important updates.</p>
        </div>

        {/* Top Summary Cards */}
        <div className="alerts-summary-grid">
          {/* Closures Card */}
          <div className="summary-stat-card" onClick={() => { setSelectedType('Closure'); setCurrentPage(1); }}>
            <div className="stat-icon-wrapper stat-icon-closed">
              <XCircle size={26} />
            </div>
            <div className="summary-stat-info">
              <div className="summary-stat-number">{summaryCounts.closures}</div>
              <div className="summary-stat-title">Closures</div>
              <div className="summary-stat-sub">Passes closed</div>
            </div>
          </div>

          {/* Warnings Card */}
          <div className="summary-stat-card" onClick={() => { setSelectedType('Warning'); setCurrentPage(1); }}>
            <div className="stat-icon-wrapper stat-icon-caution">
              <AlertTriangle size={26} />
            </div>
            <div className="summary-stat-info">
              <div className="summary-stat-number">{summaryCounts.warnings}</div>
              <div className="summary-stat-title">Warnings</div>
              <div className="summary-stat-sub">Use caution</div>
            </div>
          </div>

          {/* Advisories Card */}
          <div className="summary-stat-card" onClick={() => { setSelectedType('Advisory'); setCurrentPage(1); }}>
            <div className="stat-icon-wrapper stat-icon-advisory">
              <Info size={26} />
            </div>
            <div className="summary-stat-info">
              <div className="summary-stat-number">{summaryCounts.advisories}</div>
              <div className="summary-stat-title">Advisories</div>
              <div className="summary-stat-sub">General updates</div>
            </div>
          </div>

          {/* All Clear Card */}
          <div className="summary-stat-card" onClick={() => { setSelectedType('All Clear'); setCurrentPage(1); }}>
            <div className="stat-icon-wrapper stat-icon-open">
              <CheckCircle2 size={26} />
            </div>
            <div className="summary-stat-info">
              <div className="summary-stat-number">{summaryCounts.allClear}</div>
              <div className="summary-stat-title">All Clear</div>
              <div className="summary-stat-sub">Passes open</div>
            </div>
          </div>

          {/* Get Alerts Instantly CTA */}
          <div className="summary-cta-card">
            <div className="cta-icon-wrapper">
              <Bell size={24} />
            </div>
            <div className="cta-content">
              <div className="cta-title">Get Alerts Instantly</div>
              <div className="cta-desc">Receive real-time updates via email or notifications.</div>
              <button onClick={() => {
                document.getElementById('newsletter-subscribe-section')?.scrollIntoView({ behavior: 'smooth' });
              }} className="btn btn-outline-primary cta-btn">
                Manage Alerts
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Layout: Sidebar Filters + Alert List */}
        <div className="alerts-layout-grid">
          {/* Left Filter Sidebar */}
          <aside className="alerts-filter-sidebar lp-card">
            <div className="filter-card-header">
              <h3 className="filter-card-title">FILTER ALERTS</h3>
              <button onClick={handleClearFilters} className="filter-clear-btn">Clear All</button>
            </div>

            {/* Country Filter */}
            <div className="form-group">
              <label className="form-label">Country</label>
              <select
                value={selectedCountry}
                onChange={(e) => { setSelectedCountry(e.target.value); setCurrentPage(1); }}
                className="form-select"
              >
                {countries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            {/* State/Province Filter */}
            <div className="form-group">
              <label className="form-label">State / Province</label>
              <select
                value={selectedState}
                onChange={(e) => { setSelectedState(e.target.value); setCurrentPage(1); }}
                className="form-select"
              >
                {states.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            {/* Alert Type Filter */}
            <div className="form-group">
              <label className="form-label">Alert Type</label>
              <select
                value={selectedType}
                onChange={(e) => { setSelectedType(e.target.value); setCurrentPage(1); }}
                className="form-select"
              >
                <option value="All Types">All Types</option>
                <option value="Closure">Closure</option>
                <option value="Warning">Warning</option>
                <option value="Advisory">Advisory</option>
                <option value="All Clear">All Clear</option>
              </select>
            </div>

            {/* Status Filter */}
            <div className="form-group">
              <label className="form-label">Status</label>
              <select
                value={selectedStatus}
                onChange={(e) => { setSelectedStatus(e.target.value); setCurrentPage(1); }}
                className="form-select"
              >
                <option value="All Statuses">All Statuses</option>
                <option value="OPEN">Open</option>
                <option value="CAUTION">Caution</option>
                <option value="CLOSED">Closed</option>
              </select>
            </div>

            {/* Sort By Radio Group */}
            <div className="form-group sort-radio-section">
              <label className="form-label">Sort By</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="sortBy"
                    value="latest"
                    checked={sortBy === 'latest'}
                    onChange={(e) => setSortBy(e.target.value)}
                  />
                  <span>Latest Updated</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="sortBy"
                    value="severity"
                    checked={sortBy === 'severity'}
                    onChange={(e) => setSortBy(e.target.value)}
                  />
                  <span>Severity (High to Low)</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="sortBy"
                    value="name-asc"
                    checked={sortBy === 'name-asc'}
                    onChange={(e) => setSortBy(e.target.value)}
                  />
                  <span>A to Z (Pass Name)</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="sortBy"
                    value="name-desc"
                    checked={sortBy === 'name-desc'}
                    onChange={(e) => setSortBy(e.target.value)}
                  />
                  <span>Z to A (Pass Name)</span>
                </label>
              </div>
            </div>

            <div className="filter-actions-col">
              <button onClick={() => setCurrentPage(1)} className="btn btn-primary btn-block">
                Apply Filters
              </button>
              <button onClick={handleClearFilters} className="btn btn-secondary btn-block">
                Reset Filters
              </button>
            </div>
          </aside>

          {/* Right Alert List Section */}
          <main className="alerts-list-main">
            {/* List Header Bar */}
            <div className="alerts-list-header">
              <div className="showing-results-text">
                Showing {filteredAlerts.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} to{' '}
                {Math.min(currentPage * itemsPerPage, filteredAlerts.length)} of {filteredAlerts.length} alerts
              </div>
              <div className="sort-dropdown-inline">
                <span>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="inline-sort-select"
                >
                  <option value="latest">Latest Updated</option>
                  <option value="severity">Severity (High to Low)</option>
                  <option value="name-asc">A to Z</option>
                  <option value="name-desc">Z to A</option>
                </select>
              </div>
            </div>

            {/* Alert Cards List */}
            <div className="alert-cards-wrapper">
              {paginatedAlerts.length === 0 ? (
                <div className="empty-alerts-state lp-card">
                  <Info size={40} className="empty-icon" />
                  <h3>No alerts found matching your criteria</h3>
                  <p>Try resetting your filters or selecting a different country.</p>
                  <button onClick={handleClearFilters} className="btn btn-primary">Reset Filters</button>
                </div>
              ) : (
                paginatedAlerts.map((alert) => {
                  return (
                    <div
                      key={alert.id}
                      className="alert-item-card lp-card lp-card-hover"
                      onClick={() => handleAlertClick(alert)}
                    >
                      {/* Left Severity Icon Box */}
                      <div className={`alert-severity-icon-box box-${alert.type.toLowerCase().replace(/\s+/g, '-')}`}>
                        {alert.type === 'Closure' && <XCircle size={22} />}
                        {alert.type === 'Warning' && <AlertTriangle size={22} />}
                        {alert.type === 'Advisory' && <Info size={22} />}
                        {alert.type === 'All Clear' && <CheckCircle2 size={22} />}
                      </div>

                      {/* Middle Content */}
                      <div className="alert-middle-info">
                        <div className="alert-pass-title-row">
                          <h3 className="alert-pass-name">{alert.passName}</h3>
                        </div>
                        <div className="alert-location-row">
                          <MapPin size={13} className="loc-pin" />
                          <span>{alert.state}, {alert.country}</span>
                        </div>
                        <p className="alert-description-text">{alert.description}</p>
                      </div>

                      {/* Right Meta Column: Badge + Timestamp + Arrow */}
                      <div className="alert-right-meta">
                        <StatusBadge status={alert.type.toUpperCase()} />
                        <span className="alert-timestamp">{alert.timestamp}</span>
                        <ChevronRight size={18} className="alert-chevron" />
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="pagination-container">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="pagination-btn"
                  aria-label="Previous page"
                >
                  <ChevronLeft size={16} />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="pagination-btn"
                  aria-label="Next page"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}

            {/* Newsletter / Instant Alert Subscription Banner */}
            <div id="newsletter-subscribe-section" className="alerts-subscribe-banner lp-card">
              <div className="subscribe-top-row">
                <div className="subscribe-icon-wrap">
                  <Bell size={24} />
                </div>
                <div className="subscribe-text-wrap">
                  <h3 className="subscribe-headline">Never Miss an Important Update</h3>
                  <p className="subscribe-subheadline">
                    Subscribe to get real-time pass alerts and advisories delivered to your inbox.
                  </p>
                </div>

                <form onSubmit={handleSubscribe} className="subscribe-form-wrap">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    required
                    className="subscribe-email-input"
                  />
                  <button type="submit" disabled={isSubscribing} className="btn btn-primary subscribe-submit-btn">
                    {isSubscribing ? 'Subscribing...' : 'Subscribe Now'}
                  </button>
                </form>
              </div>

              {subscribeSuccess && (
                <div className="subscribe-success-msg">
                  <Check size={16} /> You are now subscribed to real-time pass alerts!
                </div>
              )}

              <div className="subscribe-features-row">
                <div className="sub-feature-item">
                  <Zap size={16} className="sub-feat-icon" />
                  <div>
                    <span className="sub-feat-title">Instant Notifications</span>
                    <span className="sub-feat-desc">Get alerts as soon as they're published.</span>
                  </div>
                </div>

                <div className="sub-feature-item">
                  <ShieldCheck size={16} className="sub-feat-icon" />
                  <div>
                    <span className="sub-feat-title">Reliable Information</span>
                    <span className="sub-feat-desc">Directly from official sources and authorities.</span>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Trust Bar */}
        <TrustBar />
      </div>
    </div>
  );
};
