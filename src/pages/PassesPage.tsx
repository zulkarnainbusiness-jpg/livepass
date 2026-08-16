import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  MapPin, 
  ChevronRight, 
  ChevronLeft, 
  Layers,
  Compass
} from 'lucide-react';
import { passesData, getPassUrl } from '../data/passes';
import { MountainPass } from '../types';
import { StatusBadge } from '../components/StatusBadge';
import { PassCard } from '../components/PassCard';
import { TrustBar } from '../components/TrustBar';
import { SEOHelper } from '../components/SEOHelper';
import './PassesPage.css';

export const PassesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Read URL query params
  const initialQuery = searchParams.get('q') || '';
  const initialCountry = searchParams.get('country') || 'All Countries';
  const initialState = searchParams.get('state') || 'All States/Provinces';
  const initialStatus = searchParams.get('status') || 'All Status';

  // Filters State
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCountry, setSelectedCountry] = useState(initialCountry);
  const [selectedState, setSelectedState] = useState(initialState);
  const [selectedStatus, setSelectedStatus] = useState(initialStatus);
  const [maxElevation, setMaxElevation] = useState(18000);
  const [sortBy, setSortBy] = useState('name-asc');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Sync params when URL changes
  useEffect(() => {
    if (searchParams.get('q') !== null) setSearchQuery(searchParams.get('q') || '');
    if (searchParams.get('country')) setSelectedCountry(searchParams.get('country') || 'All Countries');
    if (searchParams.get('state')) setSelectedState(searchParams.get('state') || 'All States/Provinces');
    if (searchParams.get('status')) setSelectedStatus(searchParams.get('status') || 'All Status');
  }, [searchParams]);

  // Dynamic filter options
  const countries = useMemo(() => {
    const set = new Set(passesData.map(p => p.country));
    return ['All Countries', ...Array.from(set)];
  }, []);

  const states = useMemo(() => {
    let list = passesData;
    if (selectedCountry !== 'All Countries') {
      list = passesData.filter(p => p.country === selectedCountry);
    }
    const set = new Set(list.map(p => p.state));
    return ['All States/Provinces', ...Array.from(set)];
  }, [selectedCountry]);

  // Filter and sort passes
  const filteredPasses = useMemo(() => {
    return passesData.filter(pass => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = pass.name.toLowerCase().includes(q);
        const matchesState = pass.state.toLowerCase().includes(q);
        const matchesCountry = pass.country.toLowerCase().includes(q);
        const matchesHwy = pass.highway.toLowerCase().includes(q);
        if (!matchesName && !matchesState && !matchesCountry && !matchesHwy) return false;
      }
      if (selectedCountry !== 'All Countries' && pass.country !== selectedCountry) return false;
      if (selectedState !== 'All States/Provinces' && pass.state !== selectedState) return false;
      if (selectedStatus !== 'All Status' && pass.status.toUpperCase() !== selectedStatus.toUpperCase()) return false;
      if (pass.elevationFt > maxElevation) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      if (sortBy === 'elevation-desc') return b.elevationFt - a.elevationFt;
      if (sortBy === 'elevation-asc') return a.elevationFt - b.elevationFt;
      return 0;
    });
  }, [searchQuery, selectedCountry, selectedState, selectedStatus, maxElevation, sortBy]);

  const totalPages = Math.ceil(filteredPasses.length / itemsPerPage) || 1;
  const paginatedPasses = filteredPasses.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCountry('All Countries');
    setSelectedState('All States/Provinces');
    setSelectedStatus('All Status');
    setMaxElevation(18000);
    setSortBy('name-asc');
    setCurrentPage(1);
    setSearchParams({});
  };

  const handlePassClick = (pass: MountainPass) => {
    navigate(getPassUrl(pass));
  };

  return (
    <div className="passes-page-container">
      <SEOHelper
        title="Mountain Passes Directory & Status"
        description="Comprehensive global directory of mountain passes with real-time status, snow conditions, elevations, and road camera feeds."
        canonicalUrl="https://www.livepasswatch.info/passes"
      />

      <div className="app-container">
        {/* Page Title */}
        <div className="page-header-title-section">
          <div className="page-title-banner">
            <span className="title-dash" />
            <h1>MOUNTAIN PASSES DIRECTORY</h1>
            <span className="title-dash" />
          </div>
          <p className="page-header-subtitle">
            Search, filter, and inspect road conditions for mountain passes worldwide.
          </p>
        </div>

        {/* Directory Layout: Sidebar Filters + Main Grid */}
        <div className="passes-directory-layout">
          {/* Filter Sidebar */}
          <aside className="directory-filter-sidebar lp-card">
            <div className="filter-card-header">
              <h3 className="filter-card-title">FILTER PASSES</h3>
              <button onClick={handleClearFilters} className="filter-clear-btn">Clear All</button>
            </div>

            {/* Keyword Search */}
            <div className="form-group">
              <label className="form-label">Search Pass or Highway</label>
              <div className="sidebar-search-wrap">
                <input
                  type="text"
                  placeholder="e.g. Snoqualmie, I-90"
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                  className="form-input"
                />
              </div>
            </div>

            {/* Country */}
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

            {/* State */}
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

            {/* Status */}
            <div className="form-group">
              <label className="form-label">Current Status</label>
              <select
                value={selectedStatus}
                onChange={(e) => { setSelectedStatus(e.target.value); setCurrentPage(1); }}
                className="form-select"
              >
                <option value="All Status">All Statuses</option>
                <option value="OPEN">Open</option>
                <option value="CAUTION">Caution</option>
                <option value="CLOSED">Closed</option>
              </select>
            </div>

            {/* Elevation Slider */}
            <div className="form-group">
              <label className="form-label">Elevation</label>
              <div className="elevation-slider-container">
                <div className="elevation-values">
                  <span>0 ft</span>
                  <span>{maxElevation >= 18000 ? '15,000+ ft' : `${maxElevation.toLocaleString()} ft`}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="18000"
                  step="500"
                  value={maxElevation}
                  onChange={(e) => { setMaxElevation(Number(e.target.value)); setCurrentPage(1); }}
                  className="elevation-slider"
                />
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

          {/* Directory Content Area */}
          <main className="directory-main-content">
            {/* Top Toolbar */}
            <div className="directory-toolbar-bar">
              <div className="toolbar-count-text">
                Showing {filteredPasses.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} to{' '}
                {Math.min(currentPage * itemsPerPage, filteredPasses.length)} of {filteredPasses.length} passes
              </div>

              <div className="toolbar-controls">
                <div className="sort-control">
                  <span>Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="inline-sort-select"
                  >
                    <option value="name-asc">Name (A to Z)</option>
                    <option value="name-desc">Name (Z to A)</option>
                    <option value="elevation-desc">Elevation (Highest)</option>
                    <option value="elevation-asc">Elevation (Lowest)</option>
                  </select>
                </div>

                <div className="view-mode-toggles">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                    aria-label="Grid View"
                  >
                    <Grid size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`view-toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                    aria-label="List View"
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Passes Grid / List */}
            {filteredPasses.length === 0 ? (
              <div className="empty-passes-state lp-card">
                <h3>No mountain passes found</h3>
                <p>Try clearing your search query or adjusting your elevation and country filters.</p>
                <button onClick={handleClearFilters} className="btn btn-primary">Reset Filters</button>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="directory-passes-grid">
                {paginatedPasses.map((pass) => (
                  <PassCard key={pass.id} pass={pass} />
                ))}
              </div>
            ) : (
              <div className="directory-passes-list">
                {paginatedPasses.map((pass) => (
                  <div
                    key={pass.id}
                    onClick={() => handlePassClick(pass)}
                    className="directory-list-item lp-card lp-card-hover"
                  >
                    <img src={pass.image} alt={pass.name} className="list-item-img" />
                    <div className="list-item-info">
                      <div className="list-item-title-row">
                        <h3>{pass.name}</h3>
                        <StatusBadge status={pass.status} />
                      </div>
                      <div className="list-item-sub">
                        <span>📍 {pass.state}, {pass.country}</span>
                        <span>🛣️ {pass.highway}</span>
                        <span>⛰️ {pass.elevationFt.toLocaleString()} ft ({pass.elevationM} m)</span>
                      </div>
                      <p className="list-item-desc">{pass.description}</p>
                    </div>
                    <ChevronRight size={20} className="list-item-arrow" />
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
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
          </main>
        </div>

        {/* Trust Bar */}
        <TrustBar />
      </div>
    </div>
  );
};
