import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Search, Sun, Moon, Menu, X, Bell, ChevronRight } from 'lucide-react';
import { getPassUrl } from '../data/passes';
import { usePasses } from '../context/PassesContext';
import { MountainPass } from '../types';
import './Header.css';

export const Header: React.FC = () => {
  const { passes } = usePasses();
  const [isDark, setIsDark] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSeoAgent, setShowSeoAgent] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Admin / SEO Agent visibility check via query params or localStorage
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('admin') === 'true' || params.get('admin') === '1' || params.get('seo') === 'true' || params.get('seo') === '1') {
      localStorage.setItem('lp_show_seo', 'true');
    } else if (params.get('admin') === 'false' || params.get('seo') === 'false') {
      localStorage.setItem('lp_show_seo', 'false');
    }

    const isSeoVisible = localStorage.getItem('lp_show_seo') === 'true';
    setShowSeoAgent(isSeoVisible);
  }, [location.search]);

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
    ? passes.filter(
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

  const handleSelectPass = (pass: MountainPass) => {
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
            <svg viewBox="0 0 100 100" fill="none" className="mountain-svg">
              <defs>
                <linearGradient id="hdrPeakLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38BDF8" />
                  <stop offset="100%" stopColor="#1D4ED8" />
                </linearGradient>
                <linearGradient id="hdrPeakRight" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60A5FA" />
                  <stop offset="100%" stopColor="#2563EB" />
                </linearGradient>
                <linearGradient id="hdrRoad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38BDF8" />
                  <stop offset="50%" stopColor="#60A5FA" />
                  <stop offset="100%" stopColor="#93C5FD" />
                </linearGradient>
              </defs>
              <path d="M12 76 L44 18 L68 76 Z" fill="url(#hdrPeakLeft)" />
              <path d="M44 18 L52 33 L44 38 L36 33 Z" fill="#F0F9FF" opacity="0.95" />
              <path d="M42 76 L68 28 L88 76 Z" fill="url(#hdrPeakRight)" opacity="0.9" />
              <path d="M68 28 L74 39 L68 43 L62 39 Z" fill="#E0F2FE" opacity="0.9" />
              <path d="M8 78 Q 42 60 92 78" stroke="url(#hdrRoad)" strokeWidth="5" strokeLinecap="round" />
              <path d="M44 70 Q 60 63 76 72" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" strokeLinecap="round" opacity="0.8" />
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
          {showSeoAgent && (
            <NavLink to="/seo-research" className={({ isActive }) => `nav-link seo-agent-link ${isActive ? 'active' : ''}`}>
              ✨ SEO Agent
            </NavLink>
          )}
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
            <Sun size={18} className="theme-icon" />
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
            {showSeoAgent && (
              <NavLink to="/seo-research" className="mobile-nav-link">
                ✨ AI SEO Agent
              </NavLink>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

