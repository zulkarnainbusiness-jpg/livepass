import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, CheckCircle2, AlertTriangle, XCircle, Camera, Bell, ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import { passesData, getPassStats } from '../data/passes';
import { PassCard } from '../components/PassCard';
import { TrustBar } from '../components/TrustBar';
import { SEOHelper } from '../components/SEOHelper';
import './HomePage.css';

export const HomePage: React.FC = () => {
  const [heroSearch, setHeroSearch] = useState('');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const navigate = useNavigate();
  const stats = getPassStats();

  const popularPasses = passesData.filter(p => p.isPopular);

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSearch.trim()) {
      navigate(`/passes?q=${encodeURIComponent(heroSearch.trim())}`);
    }
  };

  const nextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % Math.max(1, popularPasses.length - 3));
  };

  const prevCarousel = () => {
    setCarouselIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.livepasswatch.info/#website",
        "name": "LIVEPASSWATCH",
        "url": "https://www.livepasswatch.info/",
        "description": "Global real-time mountain pass tracking, alerts, road conditions, and live cameras.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.livepasswatch.info/passes?search={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://www.livepasswatch.info/#organization",
        "name": "LivePassWatch",
        "url": "https://www.livepasswatch.info/",
        "logo": "https://www.livepasswatch.info/mountain-logo.svg",
        "sameAs": []
      }
    ]
  };

  return (
    <div className="home-page-container">
      <SEOHelper
        title="LivePassWatch — Live Mountain Pass Status & Road Conditions"
        description="Check real-time mountain pass status, live webcams, snow depth, closures, and weather advisories worldwide before you travel."
        canonicalUrl="https://www.livepasswatch.info/"
        jsonLd={jsonLdWebsite}
      />

      {/* Hero Section */}
      <section className="home-hero-section">
        <div className="hero-background-overlay" />
        <div className="app-container hero-content-inner">
          <h1 className="hero-main-title">Real-time Mountain Pass Status</h1>
          <p className="hero-sub-title">Check if mountain passes are open and plan your journey with confidence.</p>

          {/* Hero Search Box */}
          <form onSubmit={handleHeroSearch} className="hero-search-form">
            <div className="hero-search-input-wrap">
              <Search size={20} className="hero-search-icon" />
              <input
                type="text"
                placeholder='Search for a pass, e.g., "Snoqualmie Pass"'
                value={heroSearch}
                onChange={(e) => setHeroSearch(e.target.value)}
                className="hero-search-input"
              />
            </div>
            <button type="submit" className="hero-search-btn">
              Search
            </button>
          </form>

          {/* 4 Stats Cards Floating in Hero */}
          <div className="hero-stats-grid">
            <div className="hero-stat-card" onClick={() => navigate('/passes?status=OPEN')}>
              <div className="stat-icon-col icon-open">
                <CheckCircle2 size={24} />
              </div>
              <div className="stat-info-col">
                <div className="stat-number">{stats.open}</div>
                <div className="stat-label">Open Passes</div>
              </div>
            </div>

            <div className="hero-stat-card" onClick={() => navigate('/passes?status=CAUTION')}>
              <div className="stat-icon-col icon-caution">
                <AlertTriangle size={24} />
              </div>
              <div className="stat-info-col">
                <div className="stat-number">{stats.caution}</div>
                <div className="stat-label">Caution</div>
              </div>
            </div>

            <div className="hero-stat-card" onClick={() => navigate('/passes?status=CLOSED')}>
              <div className="stat-icon-col icon-closed">
                <XCircle size={24} />
              </div>
              <div className="stat-info-col">
                <div className="stat-number">{stats.closed}</div>
                <div className="stat-label">Closed Passes</div>
              </div>
            </div>

            <div className="hero-stat-card" onClick={() => navigate('/map')}>
              <div className="stat-icon-col icon-monitored">
                <Camera size={24} />
              </div>
              <div className="stat-info-col">
                <div className="stat-number">{stats.monitored}</div>
                <div className="stat-label">Monitored 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="app-container main-content-wrapper">
        {/* Popular Passes Section */}
        <section className="home-popular-section">
          <div className="section-header-row">
            <h2 className="section-title">Popular Passes</h2>
            <Link to="/passes" className="section-view-all">
              View all passes <ArrowRight size={16} />
            </Link>
          </div>

          <div className="popular-carousel-wrapper">
            {carouselIndex > 0 && (
              <button onClick={prevCarousel} className="carousel-nav-btn btn-prev" aria-label="Previous">
                <ChevronLeft size={20} />
              </button>
            )}

            <div className="popular-passes-grid">
              {popularPasses.slice(carouselIndex, carouselIndex + 4).map((pass) => (
                <PassCard key={pass.id} pass={pass} />
              ))}
            </div>

            {carouselIndex < popularPasses.length - 4 && (
              <button onClick={nextCarousel} className="carousel-nav-btn btn-next" aria-label="Next">
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </section>

        {/* Get Pass Alerts Callout Banner */}
        <section className="home-alerts-banner-card lp-card">
          <div className="alerts-banner-left">
            <div className="banner-bell-icon">
              <Bell size={26} />
            </div>
            <div>
              <h3 className="banner-title">Get Pass Alerts</h3>
              <p className="banner-desc">Receive mobile and email alerts for your favorite passes.</p>
            </div>
          </div>
          <button onClick={() => navigate('/alerts')} className="btn btn-primary banner-action-btn">
            Set Up Alerts
          </button>
        </section>

        {/* Quick Navigation Cards: Map & Hierarchical Explorer */}
        <section className="home-explorer-grid">
          <div className="explorer-card lp-card lp-card-hover" onClick={() => navigate('/map')}>
            <div className="explorer-card-content">
              <span className="explorer-tag">Interactive Tool</span>
              <h3>Global Mountain Pass Map</h3>
              <p>Explore real-time pass markers, cluster overlays, and elevation profiles worldwide.</p>
              <span className="explorer-link">Open Live Map →</span>
            </div>
          </div>

          <div className="explorer-card lp-card lp-card-hover" onClick={() => navigate('/hierarchical')}>
            <div className="explorer-card-content">
              <span className="explorer-tag">Structured Browser</span>
              <h3>Hierarchical Dropdown Navigation</h3>
              <p>Drill down seamlessly from Continent to Country, State/Province, and individual Pass.</p>
              <span className="explorer-link">Browse Hierarchy →</span>
            </div>
          </div>
        </section>

        {/* Trust & Safety Features Bar */}
        <TrustBar />
      </div>
    </div>
  );
};
