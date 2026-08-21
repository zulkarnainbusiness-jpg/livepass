import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Search, Sun, Moon, Menu, X, Bell, ChevronRight } from 'lucide-react';
import { passesData, getPassUrl } from '../data/passes';
import './Header.css';

export const Header: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Dark mode toggle
  useEffect(() => {
    const savedTheme = localStorage.getItem('lp_theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('lp_theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('lp_theme', 'light');
    }
  };

  // Close search dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  const searchResults = searchQuery.trim()
    ? passesData.filter(
        p =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.highway.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 6)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/passes?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  };

  const handleSelectPass = (pass: typeof passesData[0]) => {
    navigate(getPassUrl(pass));
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <header className="lp-header">
      <div className="app-container header-inner">
        {/* Brand Logo */}
        <NavLink to="/" className="brand-logo-area">
          <div className="brand-logo-icon">
            <svg viewBox="0 0 100 70" fill="none" className="mountain-svg">
              <path d="M12 56L42 12L70 56H12Z" stroke="#3B82F6" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round" />
              <path d="M42 56L68 20L88 56H42Z" stroke="#60A5FA" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round" />
              <path d="M35 24L42 12L49 24L42 20Z" fill="#3B82F6" />
              <path d="M22 56C30 52 40 48 50 49C60 50 70 55 80 56" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
          <div className="brand-text-block">
            <span className="brand-title">LIVEPASSWATCH</span>
            <span className="brand-tagline">Know Before You Go.</span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/passes" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Passes
          </NavLink>
          <NavLink to="/map" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Map
          </NavLink>
          <NavLink to="/alerts" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Alerts
          </NavLink>
          <NavLink to="/resources" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Resources
          </NavLink>
          <NavLink to="/seo-research" className={({ isActive }) => `nav-link seo-agent-link ${isActive ? 'active' : ''}`}>
            ✨ SEO Agent
          </NavLink>
        </nav>

        {/* Header Right Actions */}
        <div className="header-actions">
          {/* Global Search Bar */}
          <div className="header-search-container" ref={searchRef}>
            <form onSubmit={handleSearchSubmit} className="header-search-box">
              <input
                type="text"
                placeholder="Search passes, locations..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                onFocus={() => setIsSearchOpen(true)}
                className="header-search-input"
              />
              <button type="submit" className="header-search-btn" aria-label="Search">
                <Search size={16} />
              </button>
            </form>

            {/* Live Autocomplete Dropdown */}
            {isSearchOpen && searchResults.length > 0 && (
              <div className="search-dropdown-menu">
                <div className="search-dropdown-heading">Mountain Passes</div>
                {searchResults.map((pass) => (
                  <div
                    key={pass.id}
                    className="search-result-item"
                    onClick={() => handleSelectPass(pass)}
                  >
                    <div className="result-main-info">
                      <span className="result-pass-name">{pass.name}</span>
                      <span className="result-pass-sub">
                        {pass.state}, {pass.country} • {pass.highway}
                      </span>
                    </div>
                    <div className="result-badge-col">
                      <span className={`status-badge status-${pass.status}`}>
                        {pass.status}
                      </span>
                      <ChevronRight size={14} className="result-arrow" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle Button */}
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
            {isDark ? <Sun size={18} className="theme-icon" /> : <Sun size={18} className="theme-icon" />}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <div className="mobile-nav-links">
            <NavLink to="/" end className="mobile-nav-link">
              Home
            </NavLink>
            <NavLink to="/passes" className="mobile-nav-link">
              Passes
            </NavLink>
            <NavLink to="/map" className="mobile-nav-link">
              Map
            </NavLink>
            <NavLink to="/alerts" className="mobile-nav-link">
              Alerts
            </NavLink>
            <NavLink to="/hierarchical" className="mobile-nav-link">
              Hierarchical Browse
            </NavLink>
            <NavLink to="/resources" className="mobile-nav-link">
              Resources
            </NavLink>
            <NavLink to="/seo-research" className="mobile-nav-link">
              ✨ AI SEO Agent
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};
