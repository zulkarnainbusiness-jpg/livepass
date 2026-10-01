import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, CheckCircle2, AlertTriangle, XCircle, Camera, Bell, ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import { usePasses } from '../context/PassesContext';
import { PassCard } from '../components/PassCard';
import { TrustBar } from '../components/TrustBar';
import { SEOHelper } from '../components/SEOHelper';
import './HomePage.css';

export const HomePage: React.FC = () => {
  const { passes } = usePasses();
  const [heroSearch, setHeroSearch] = useState('');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const navigate = useNavigate();

  const stats = {
    open: passes.filter(p => p.status === 'OPEN').length,
    caution: passes.filter(p => p.status === 'CAUTION' || p.status === 'RESTRICTED').length,
    closed: passes.filter(p => p.status === 'CLOSED' || p.status === 'TEMPORARILY_CLOSED' || p.status === 'SEASONAL_CLOSURE').length,
    monitored: passes.filter(p => p.status === 'MONITORED' || (p.cameras && p.cameras.length > 0)).length,
    total: passes.length
  };

  const popularPasses = passes.filter(p => p.isPopular);

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
        "name": "LivePassWatch",
        "url": "https://www.livepasswatch.info/",
        "description": "Global real-time mountain pass tracking, live webcams, snow depth, road conditions, and closures worldwide.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.livepasswatch.info/passes?q={search_term_string}"
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
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Has it snowed in any mountain road passes yet?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "LivePassWatch monitors real-time snowfall, temperature, and automated weather stations across North America, the Alps, and the Himalayas. Check our live pass status cards and cameras to see active snow depths and early-season accumulations."
            }
          },
          {
            "@type": "Question",
            "name": "What is the official mountain pass road closure update source on LivePassWatch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "LivePassWatch syncs directly with verified state and national transportation departments including WSDOT (Washington), ODOT (Oregon), Caltrans (California), CDOT (Colorado), DriveBC (Canada), Swiss Astra / TCS (Switzerland), and the Border Roads Organisation (India)."
            }
          },
          {
            "@type": "Question",
            "name": "Where can I view an interactive peak map today for mountain roads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Visit our Interactive Map page for a global peak map today with roads and mountain passes, elevation profiles, color-coded open/closed status, and live summit camera locations worldwide."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="home-page-container">
      <SEOHelper
        title="Live Mountain Pass Status, Road Conditions & Webcams | LivePassWatch"
        description="Check real-time mountain pass status, live webcams, snow depth, road conditions, and closures worldwide. Know before you go with LivePassWatch."
        keywords="mountain pass, mountain pass road conditions, snoqualmie pass conditions, stevens pass webcam, peak map today, has it snowed in any mountain road passes yet, mountain pass road closure update source, cascade mountain pass conditions, washington mountain pass conditions, live webcams, pass closures, snow depth, highway chain laws, mountain pass weather, LivePassWatch"
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

          {/* 4 Stats Cards Floating in Hero - Rendered as crawlable Links */}
          <div className="hero-stats-grid">
            <Link to="/passes?status=OPEN" className="hero-stat-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="stat-icon-col icon-open">
                <CheckCircle2 size={24} />
              </div>
              <div className="stat-info-col">
                <div className="stat-number">{stats.open}</div>
                <div className="stat-label">Open Passes</div>
              </div>
            </Link>

            <Link to="/passes?status=CAUTION" className="hero-stat-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="stat-icon-col icon-caution">
                <AlertTriangle size={24} />
              </div>
              <div className="stat-info-col">
                <div className="stat-number">{stats.caution}</div>
                <div className="stat-label">Caution</div>
              </div>
            </Link>

            <Link to="/passes?status=CLOSED" className="hero-stat-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="stat-icon-col icon-closed">
                <XCircle size={24} />
              </div>
              <div className="stat-info-col">
                <div className="stat-number">{stats.closed}</div>
                <div className="stat-label">Closed Passes</div>
              </div>
            </Link>

            <Link to="/map" className="hero-stat-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="stat-icon-col icon-monitored">
                <Camera size={24} />
              </div>
              <div className="stat-info-col">
                <div className="stat-number">{stats.monitored}</div>
                <div className="stat-label">Monitored 24/7</div>
              </div>
            </Link>
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
          <Link to="/alerts" className="btn btn-primary banner-action-btn" style={{ textDecoration: 'none', textAlign: 'center' }}>
            Set Up Alerts
          </Link>
        </section>

        {/* Quick Navigation Cards */}
        <section className="home-explorer-grid">
          <Link to="/map" className="explorer-card lp-card lp-card-hover" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="explorer-card-content">
              <span className="explorer-tag">Interactive Tool</span>
              <h3>Peak Map Today &amp; Global Road Map</h3>
              <p>Explore real-time pass markers, cluster overlays, and elevation profiles worldwide.</p>
              <span className="explorer-link">Open Live Map →</span>
            </div>
          </Link>

          <Link to="/resources" className="explorer-card lp-card lp-card-hover" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="explorer-card-content">
              <span className="explorer-tag">Driver Resources</span>
              <h3>Chain Laws &amp; Winter Driving Safety</h3>
              <p>State-by-state tire chain laws, seasonal traction requirements, and mountain safety guides.</p>
              <span className="explorer-link">View Resources →</span>
            </div>
          </Link>
        </section>

        {/* Mountain Pass Travel & Weather Insights */}
        <section className="lp-card" style={{ padding: '2rem', marginBottom: '2.5rem', background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
          <div style={{ marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#1d64f2' }}>
              Travel Knowledge &amp; Live Reports
            </span>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: '0.25rem 0 0.5rem 0' }}>
              Mountain Pass Road Conditions &amp; Weather Insights
            </h2>
            <p style={{ color: '#475569', fontSize: '0.95rem', margin: 0 }}>
              Answers to frequent seasonal travel questions across Cascade, Rocky, Alpine, and Himalayan highway routes.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
            <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.5rem' }}>
                Has it snowed in any mountain road passes yet?
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: '1.5', margin: 0 }}>
                LivePassWatch tracks early season snow flurries and winter storm accumulations at high elevations. Check our live snow depth data, summit temperature sensors, and webcams on major routes like Snoqualmie Pass, Stevens Pass, Donner Pass, and Furka Pass.
              </p>
            </div>

            <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.5rem' }}>
                Official Mountain Pass Road Closure Update Source
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: '1.5', margin: 0 }}>
                All road closures, avalanche mitigation reports, and traction advisories are sourced continuously from verified DOT authorities including WSDOT, ODOT, Caltrans, CDOT, DriveBC, Swiss Astra/TCS, and India’s Border Roads Organisation.
              </p>
            </div>

            <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.5rem' }}>
                Peak Map Today &amp; Roads with Mountain Passes
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: '1.5', margin: 0 }}>
                Looking for a live peak map today? Our global interactive map plots roads with mountain passes worldwide, displaying live weather icons, elevation gain, camera snapshots, and open/closed travel status at a glance.
              </p>
            </div>
          </div>
        </section>

        {/* Trust & Safety Features Bar */}
        <TrustBar />
      </div>
    </div>
  );
};
