import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Globe, 
  MapPin, 
  Mountain, 
  ChevronRight, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle,
  Compass,
  Waves,
  Snowflake
} from 'lucide-react';
import { hierarchyData, HierarchyContinent, HierarchyCountry, HierarchyState } from '../data/hierarchy';
import { StatusBadge } from '../components/StatusBadge';
import { TrustBar } from '../components/TrustBar';
import { SEOHelper } from '../components/SEOHelper';
import './HierarchicalPage.css';

export const HierarchicalPage: React.FC = () => {
  const navigate = useNavigate();

  // Selection states (Default: North America -> United States -> Washington)
  const [selectedContinentId, setSelectedContinentId] = useState('north-america');
  const [selectedCountryId, setSelectedCountryId] = useState('united-states');
  const [selectedStateId, setSelectedStateId] = useState('washington');

  const selectedContinent: HierarchyContinent = hierarchyData.find(c => c.id === selectedContinentId) || hierarchyData[0];
  const countries = selectedContinent.countries || [];

  const selectedCountry: HierarchyCountry = countries.find(c => c.id === selectedCountryId) || countries[0] || { id: '', name: '', code: '', flagEmoji: '', states: [] };
  const states = selectedCountry.states || [];

  const selectedState: HierarchyState = states.find(s => s.id === selectedStateId) || states[0] || { id: '', name: '', passes: [] };
  const passes = selectedState.passes || [];

  const handleContinentClick = (cont: HierarchyContinent) => {
    setSelectedContinentId(cont.id);
    const firstCountry = cont.countries[0];
    if (firstCountry) {
      setSelectedCountryId(firstCountry.id);
      const firstState = firstCountry.states[0];
      setSelectedStateId(firstState ? firstState.id : '');
    } else {
      setSelectedCountryId('');
      setSelectedStateId('');
    }
  };

  const handleCountryClick = (country: HierarchyCountry) => {
    setSelectedCountryId(country.id);
    const firstState = country.states[0];
    setSelectedStateId(firstState ? firstState.id : '');
  };

  const handleStateClick = (state: HierarchyState) => {
    setSelectedStateId(state.id);
  };

  const handlePassClick = (passSlug: string) => {
    navigate(`/passes/${selectedCountry.id}/${selectedState.id}/${passSlug}`);
  };

  const getContinentIcon = (iconName: string) => {
    switch (iconName) {
      case 'globe': return <Globe size={18} />;
      case 'map-pin': return <MapPin size={18} />;
      case 'mountain': return <Mountain size={18} />;
      case 'compass': return <Compass size={18} />;
      case 'waves': return <Waves size={18} />;
      case 'snowflake': return <Snowflake size={18} />;
      default: return <Globe size={18} />;
    }
  };

  return (
    <div className="hierarchical-page-container">
      <SEOHelper
        title="Hierarchical Mountain Pass Navigation"
        description="Browse mountain passes across the globe hierarchically: Continent, Country, State/Province, and Pass."
        canonicalUrl="https://www.livepasswatch.info/hierarchical"
      />

      <div className="app-container">
        {/* Page Title Banner with Step 2 Pill */}
        <div className="page-header-title-section">
          <div className="page-title-banner">
            <span className="step-number-badge">2</span>
            <h1>HIERARCHICAL DROPDOWN NAVIGATION</h1>
          </div>
          <p className="page-header-subtitle">Navigate passes easily using our smart hierarchical menu.</p>
        </div>

        {/* 4-Column Navigation Card */}
        <div className="hierarchical-nav-card lp-card">
          <div className="hierarchical-grid">
            {/* Column 1: Select Continent */}
            <div className="hierarchy-column">
              <div className="hierarchy-col-header">
                <Globe size={18} className="col-header-icon" />
                <span>Select Continent</span>
              </div>
              <div className="hierarchy-items-list">
                {hierarchyData.map(cont => {
                  const isSelected = cont.id === selectedContinentId;
                  return (
                    <button
                      key={cont.id}
                      onClick={() => handleContinentClick(cont)}
                      className={`hierarchy-item-btn ${isSelected ? 'selected' : ''}`}
                    >
                      <div className="item-label-group">
                        <span className="item-icon-wrap">{getContinentIcon(cont.icon)}</span>
                        <span className="item-name">{cont.name}</span>
                      </div>
                      <ChevronRight size={15} className="item-chevron" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Select Country */}
            <div className="hierarchy-column">
              <div className="hierarchy-col-header">
                <span className="col-header-flag">{selectedCountry.flagEmoji || '🏳️'}</span>
                <span>Select Country</span>
              </div>
              <div className="hierarchy-items-list">
                {countries.length === 0 ? (
                  <div className="empty-col-msg">No countries registered</div>
                ) : (
                  countries.map(country => {
                    const isSelected = country.id === selectedCountryId;
                    return (
                      <button
                        key={country.id}
                        onClick={() => handleCountryClick(country)}
                        className={`hierarchy-item-btn ${isSelected ? 'selected' : ''}`}
                      >
                        <div className="item-label-group">
                          <span className="item-flag">{country.flagEmoji}</span>
                          <span className="item-name">{country.name}</span>
                        </div>
                        <ChevronRight size={15} className="item-chevron" />
                      </button>
                    );
                  })
                )}
              </div>
              {countries.length > 0 && (
                <div className="hierarchy-col-footer">
                  <Link to="/passes" className="col-footer-link">
                    View all countries in {selectedContinent.name}
                  </Link>
                </div>
              )}
            </div>

            {/* Column 3: Select State / Province */}
            <div className="hierarchy-column">
              <div className="hierarchy-col-header">
                <MapPin size={18} className="col-header-icon" />
                <span>Select State / Province</span>
              </div>
              <div className="hierarchy-items-list">
                {states.length === 0 ? (
                  <div className="empty-col-msg">No states registered</div>
                ) : (
                  states.map(state => {
                    const isSelected = state.id === selectedStateId;
                    return (
                      <button
                        key={state.id}
                        onClick={() => handleStateClick(state)}
                        className={`hierarchy-item-btn ${isSelected ? 'selected' : ''}`}
                      >
                        <span className="item-name">{state.name}</span>
                        <ChevronRight size={15} className="item-chevron" />
                      </button>
                    );
                  })
                )}
              </div>
              {states.length > 0 && (
                <div className="hierarchy-col-footer">
                  <Link to="/passes" className="col-footer-link">
                    View all states in {selectedCountry.name}
                  </Link>
                </div>
              )}
            </div>

            {/* Column 4: Select Pass */}
            <div className="hierarchy-column">
              <div className="hierarchy-col-header">
                <Mountain size={18} className="col-header-icon" />
                <span>Select Pass</span>
              </div>
              <div className="hierarchy-items-list passes-list-col">
                {passes.length === 0 ? (
                  <div className="empty-col-msg">No mountain passes recorded for this region yet</div>
                ) : (
                  passes.map(pass => {
                    return (
                      <div
                        key={pass.id}
                        onClick={() => handlePassClick(pass.slug)}
                        className="pass-node-item"
                      >
                        <img
                          src={pass.image}
                          alt={pass.name}
                          className="pass-node-thumb"
                        />
                        <div className="pass-node-info">
                          <div className="pass-node-name">{pass.name}</div>
                          <div className="pass-node-meta">
                            {pass.highway} • Elev. {pass.elevationFt.toLocaleString()} ft ({pass.elevationM.toLocaleString()} m)
                          </div>
                        </div>
                        <StatusBadge status={pass.status} />
                      </div>
                    );
                  })
                )}
              </div>
              {passes.length > 0 && (
                <div className="hierarchy-col-footer">
                  <Link to={`/passes?state=${encodeURIComponent(selectedState.name)}`} className="col-footer-link">
                    View all passes in {selectedState.name}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Pass Stats Bar */}
        <div className="hierarchy-stats-bar">
          <div className="h-stat-pill">
            <div className="h-stat-icon-wrap icon-open">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <span className="h-stat-value">3,268</span>
              <span className="h-stat-text">Open Passes</span>
            </div>
          </div>

          <div className="h-stat-divider" />

          <div className="h-stat-pill">
            <div className="h-stat-icon-wrap icon-caution">
              <AlertTriangle size={20} />
            </div>
            <div>
              <span className="h-stat-value">512</span>
              <span className="h-stat-text">Caution Passes</span>
            </div>
          </div>

          <div className="h-stat-divider" />

          <div className="h-stat-pill">
            <div className="h-stat-icon-wrap icon-closed">
              <XCircle size={20} />
            </div>
            <div>
              <span className="h-stat-value">184</span>
              <span className="h-stat-text">Closed Passes</span>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <TrustBar />
      </div>
    </div>
  );
};
