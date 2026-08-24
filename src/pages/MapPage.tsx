import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePasses } from '../context/PassesContext';
import { MapComponent } from '../components/MapComponent';
import { TrustBar } from '../components/TrustBar';
import { SEOHelper } from '../components/SEOHelper';
import './MapPage.css';

export const MapPage: React.FC = () => {
  const { passes } = usePasses();
  const navigate = useNavigate();

  // Filter state
  const [selectedCountry, setSelectedCountry] = useState('All Countries');
  const [selectedState, setSelectedState] = useState('All States/Provinces');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  const [maxElevation, setMaxElevation] = useState<number>(18000);

  // Country & State options
  const countries = useMemo(() => {
    const set = new Set(passes.map(p => p.country));
    return ['All Countries', ...Array.from(set)];
  }, [passes]);

  const states = useMemo(() => {
    let list = passes;
    if (selectedCountry !== 'All Countries') {
      list = passes.filter(p => p.country === selectedCountry);
    }
    const set = new Set(list.map(p => p.state));
    return ['All States/Provinces', ...Array.from(set)];
  }, [selectedCountry, passes]);

  // Filtered Passes
  const filteredPasses = useMemo(() => {
    return passes.filter(pass => {
      if (selectedCountry !== 'All Countries' && pass.country !== selectedCountry) return false;
      if (selectedState !== 'All States/Provinces' && pass.state !== selectedState) return false;
      if (selectedStatus !== 'All Status' && pass.status.toUpperCase() !== selectedStatus.toUpperCase()) return false;
      if (pass.elevationFt > maxElevation) return false;
      return true;
    });
  }, [selectedCountry, selectedState, selectedStatus, maxElevation, passes]);

  const handleClearAll = () => {
    setSelectedCountry('All Countries');
    setSelectedState('All States/Provinces');
    setSelectedStatus('All Status');
    setMaxElevation(18000);
  };

  return (
    <div className="map-page-container">
      <SEOHelper
        title="Interactive Mountain Pass Map & Overview"
        description="Explore live mountain pass status across North America, Europe, the Himalayas, Andes, and Southern Alps with real-time road conditions and webcam markers."
        canonicalUrl="https://www.livepasswatch.info/map"
      />

      <div className="app-container">
        {/* Title Banner */}
        <div className="page-header-title-section">
          <div className="page-title-banner">
            <span className="title-dash" />
            <h1>MAP & PASS OVERVIEW</h1>
            <span className="title-dash" />
          </div>
          <p className="page-header-subtitle">
            Explore mountain passes around the world. Use filters to find the information you need.
          </p>
        </div>

        {/* Map + Filter Panel Layout */}
        <div className="map-page-layout">
          {/* Large Leaflet Map */}
          <div className="map-canvas-container">
            <MapComponent
              passes={filteredPasses}
              height="580px"
              showGlobalClusters={selectedCountry === 'All Countries'}
            />
          </div>

          {/* Right Filter Sidebar */}
          <aside className="map-filter-sidebar lp-card">
            <div className="filter-card-header">
              <h3 className="filter-card-title">FILTER MAP</h3>
              <button onClick={handleClearAll} className="filter-clear-btn">Clear All</button>
            </div>

            {/* Country */}
            <div className="form-group">
              <label className="form-label">Country</label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="form-select"
              >
                {countries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            {/* State/Province */}
            <div className="form-group">
              <label className="form-label">State / Province</label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="form-select"
              >
                {states.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            {/* Status */}
            <div className="form-group">
              <label className="form-label">Status</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="form-select"
              >
                <option value="All Status">All Status</option>
                <option value="OPEN">Open</option>
                <option value="CAUTION">Caution</option>
                <option value="CLOSED">Closed</option>
                <option value="MONITORED">Monitored</option>
              </select>
            </div>

            {/* Elevation Range */}
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
                  onChange={(e) => setMaxElevation(Number(e.target.value))}
                  className="elevation-slider"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="map-filter-actions">
              <button className="btn btn-primary btn-block">
                Apply Filters
              </button>

              <div className="passes-found-badge">
                {filteredPasses.length} Passes Found
              </div>

              <button
                onClick={() => navigate(`/passes?country=${encodeURIComponent(selectedCountry)}&status=${encodeURIComponent(selectedStatus)}`)}
                className="btn btn-secondary btn-block"
              >
                View as List
              </button>
            </div>
          </aside>
        </div>

        {/* Trust Bar */}
        <TrustBar />
      </div>
    </div>
  );
};
