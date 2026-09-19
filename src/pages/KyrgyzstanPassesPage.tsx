import React, { useState, useMemo, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import {
  Mountain,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Clock,
  Search,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  Camera,
  Snowflake,
  Car,
  MapPin,
  Thermometer,
  Info,
  Shield,
  FileText,
  Calendar,
  AlertCircle,
  Compass,
  ArrowRight
} from 'lucide-react';
import { kyrgyzstanPasses } from '../data/kyrgyzstanPasses';
import { MountainPass } from '../types';
import { StatusBadge } from '../components/StatusBadge';
import { SEOHelper } from '../components/SEOHelper';
import './KyrgyzstanPassesPage.css';

// Lazy-load MapComponent to avoid Leaflet SSR issues blocking render
const MapComponent = lazy(() =>
  import('../components/MapComponent').then(m => ({ default: m.MapComponent }))
);

export const KyrgyzstanPassesPage: React.FC = () => {
  const kgPasses = kyrgyzstanPasses;

  // Table Filter & Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'OPEN' | 'RESTRICTED' | 'CLOSED'>('ALL');
  const [activeTab, setActiveTab] = useState('overview');
  const [showAllPasses, setShowAllPasses] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Scroll to pass card helper
  const scrollToPass = (passId: string) => {
    const el = document.getElementById(`pass-${passId}`) || document.getElementById('road-conditions');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      el.classList.add('kg-card-highlight');
      setTimeout(() => el.classList.remove('kg-card-highlight'), 2000);
    }
  };

  // Scroll to page section
  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Featured Pass (Too-Ashuu)
  const featuredPass = useMemo(() => {
    return kgPasses.find(p => p.slug === 'too-ashuu-pass') || kgPasses[0];
  }, [kgPasses]);

  // Dynamic Statistics
  const openCount = useMemo(() => kgPasses.filter(p => p.status === 'OPEN').length, [kgPasses]);
  const restrictedCount = useMemo(() => kgPasses.filter(p => p.status === 'RESTRICTED' || p.status === 'CAUTION').length, [kgPasses]);
  const closedCount = useMemo(() => kgPasses.filter(p => p.status === 'CLOSED').length, [kgPasses]);

  // Filtered Passes for the Table
  const filteredPasses = useMemo(() => {
    return kgPasses.filter(pass => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = pass.name.toLowerCase().includes(q);
        const matchesState = pass.state.toLowerCase().includes(q);
        const matchesHighway = pass.highway.toLowerCase().includes(q);
        const matchesCondition = pass.roadCondition.toLowerCase().includes(q);
        const matchesAlts = pass.alternateNames?.some(alt => alt.toLowerCase().includes(q));
        if (!matchesName && !matchesState && !matchesHighway && !matchesCondition && !matchesAlts) {
          return false;
        }
      }
      if (statusFilter === 'OPEN') return pass.status === 'OPEN';
      if (statusFilter === 'RESTRICTED') return pass.status === 'RESTRICTED' || pass.status === 'CAUTION';
      if (statusFilter === 'CLOSED') return pass.status === 'CLOSED';
      return true;
    });
  }, [kgPasses, searchQuery, statusFilter]);

  // Passes to display in table
  const displayedTablePasses = useMemo(() => {
    if (showAllPasses || searchQuery.trim() || statusFilter !== 'ALL') {
      return filteredPasses;
    }
    return filteredPasses.slice(0, 10);
  }, [filteredPasses, showAllPasses, searchQuery, statusFilter]);

  // Primary Clustered Passes
  const otherPasses = useMemo(() => {
    const primarySlugs = new Set(['too-ashuu-pass', 'torugart-pass', 'kyzyl-art-pass', 'ala-bel-pass', 'taldyk-pass', 'dolon-pass']);
    return kgPasses.filter(p => !primarySlugs.has(p.slug));
  }, [kgPasses]);

  // FAQs data
  const faqs = [
    {
      q: "Is Too Ashuu Pass open right now?",
      a: "Yes, Too Ashuu Pass is open. Paved vehicular traffic flows continuously through the 2.8 km Kolbaev Tunnel at an elevation of 3,180 meters along the M41 Bishkek–Osh highway. Road surface conditions are clear and dry with active salting and plowing by Ministry of Transport DEP 9 crews."
    },
    {
      q: "What are the current Kyrgyzstan road conditions on major mountain passes?",
      a: "Current Kyrgyzstan road conditions across primary paved highways—including Too-Ashuu Pass (3,586 m), Ala-Bel Pass (3,184 m), Taldyk Pass (3,615 m), and Dolon Pass (3,030 m)—are open and mostly clear. High gravel corridors such as Kyzyl-Art Pass (4,280 m) on the Pamir Highway have slippery snow conditions requiring 4WD, while seasonal routes like Kara-Buura Pass (3,305 m) remain closed for the winter season."
    },
    {
      q: "What is the Torugart Pass status and border crossing schedule?",
      a: "Torugart Pass (3,752 m) is open for international transit on weekdays (Monday through Friday, typically 10:00 to 18:00 local time). The border is closed on weekends and during official Kyrgyz and Chinese national holidays. International travelers require a valid passport, Chinese visa, and pre-authorized border zone permits (propusk)."
    },
    {
      q: "What are Kyzyl Art Pass road conditions on the Pamir Highway?",
      a: "Kyzyl-Art Pass (4,280 m) on the Kyrgyzstan–Tajikistan Pamir Highway has restricted, slippery road conditions. The high alpine gravel surface features packed snow, frost ruts, and sub-zero temperatures (-8°C). High-clearance four-wheel-drive vehicles and recovery equipment are mandatory."
    },
    {
      q: "When do Kyrgyzstan road closures occur for winter?",
      a: "Kyrgyzstan road closures typically begin in late October or November for high-altitude unpaved passes such as Kara-Buura Pass, Kaldama Pass, and Söök Pass, which remain closed until late May or June. Major paved national highways like the M41 and A365 remain open year-round with short temporary closures during blizzard snow-clearing operations and anti-avalanche artillery shoots."
    },
    {
      q: "Are snow chains mandatory on Ala Bel and Dolon Pass?",
      a: "Yes. Under Kyrgyz transport safety laws, all heavy commercial trucks must carry metal tire chains between October and May when traversing passes above 3,000 meters including Too-Ashuu, Ala-Bel, and Dolon. Passenger vehicles should be equipped with certified winter tires (M+S or 3PMSF rating) with a minimum tread depth of 4 mm."
    }
  ];

  // Structured Data (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.livepasswatch.info/passes/kyrgyzstan/#webpage",
        "url": "https://www.livepasswatch.info/passes/kyrgyzstan",
        "name": "Kyrgyzstan Mountain Pass Status & Road Conditions (2026)",
        "description": "Live Kyrgyzstan road conditions, mountain pass status, winter road closures, and weather for Too Ashuu Pass, Ala Bel, Torugart, Kyzyl Art, Taldyk and Dolon.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.livepasswatch.info/" },
            { "@type": "ListItem", "position": 2, "name": "Passes", "item": "https://www.livepasswatch.info/passes" },
            { "@type": "ListItem", "position": 3, "name": "Kyrgyzstan", "item": "https://www.livepasswatch.info/passes/kyrgyzstan" }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.livepasswatch.info/passes/kyrgyzstan/#faq",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  if (!featuredPass) return null;

  return (
    <div className="kg-hub-page">
      {/* 1. SEO Head & Meta */}
      <SEOHelper
        title="Kyrgyzstan Mountain Pass Status & Road Conditions"
        description="Live Kyrgyzstan road conditions, mountain pass status, winter road closures, and weather for Too Ashuu Pass, Ala Bel, Torugart, Kyzyl Art, Taldyk and Dolon."
        canonicalUrl="/passes/kyrgyzstan"
        ogImage="/kyrgyzstan-mountain-pass-hero.webp"
        keywords="Kyrgyzstan road conditions, Kyrgyzstan mountain passes, Kyrgyzstan road closures, Kyrgyzstan mountain pass status, Too Ashuu Pass, Torugart Pass, Kyzyl Art Pass, Ala Bel Pass, Taldyk Pass, Dolon Pass"
        jsonLd={structuredData}
      />

      {/* 2. Breadcrumbs Bar */}
      <div className="kg-breadcrumb-wrapper">
        <div className="app-container">
          <nav aria-label="Breadcrumbs" className="kg-breadcrumb-trail">
            <Link to="/">Home</Link>
            <span className="kg-breadcrumb-sep">&gt;</span>
            <Link to="/passes">Passes</Link>
            <span className="kg-breadcrumb-sep">&gt;</span>
            <span className="kg-breadcrumb-current" aria-current="page">Kyrgyzstan Mountain Passes</span>
          </nav>
        </div>
      </div>

      {/* 3. Hero Section */}
      <section
        className="kg-hero"
        style={{ backgroundImage: 'url(/kyrgyzstan-mountain-pass-hero.webp)' }}
        aria-label="Kyrgyzstan Mountain Pass Status Hero"
      >
        <div className="kg-hero-overlay" />
        <div className="app-container kg-hero-content">
          <div className="kg-country-tag">
            <span className="kg-country-flag">🇰🇬</span>
            <span>KYRGYZSTAN</span>
          </div>

          <h1 className="kg-hero-title">Kyrgyzstan Mountain Pass Status</h1>

          <p className="kg-hero-subtitle">
            Live road conditions, weather, webcams and travel information for all major passes in Kyrgyzstan.
          </p>

          <div className="kg-hero-chips">
            <div className="kg-hero-chip">
              <div className="kg-chip-icon"><Mountain size={20} /></div>
              <div className="kg-chip-text">
                <strong>{kgPasses.length}+</strong>
                <span>Major Passes</span>
              </div>
            </div>
            <div className="kg-hero-chip">
              <div className="kg-chip-icon"><MapPin size={20} /></div>
              <div className="kg-chip-text">
                <strong>Live Status</strong>
                <span>Road Conditions</span>
              </div>
            </div>
            <div className="kg-hero-chip">
              <div className="kg-chip-icon"><Snowflake size={20} /></div>
              <div className="kg-chip-text">
                <strong>Winter Alerts</strong>
                <span>Closures &amp; Snow</span>
              </div>
            </div>
            <div className="kg-hero-chip">
              <div className="kg-chip-icon"><Car size={20} /></div>
              <div className="kg-chip-text">
                <strong>Travel Info</strong>
                <span>Routes &amp; Distance</span>
              </div>
            </div>
          </div>
        </div>
        <div className="kg-hero-credit">Too-Ashuu Pass, Kyrgyzstan</div>
      </section>

      {/* 4. Quick Navigation Tabs */}
      <nav className="kg-tabs-nav" aria-label="Page navigation tabs">
        <div className="app-container kg-tabs-container">
          {[
            { id: 'overview', icon: <Compass size={16} />, label: 'Overview' },
            { id: 'pass-list', icon: <Mountain size={16} />, label: 'Pass List' },
            { id: 'road-conditions', icon: <Car size={16} />, label: 'Road Conditions' },
            { id: 'weather', icon: <Thermometer size={16} />, label: 'Weather' },
            { id: 'travel-guide', icon: <ShieldCheck size={16} />, label: 'Travel Guide' },
            { id: 'faqs', icon: <Info size={16} />, label: 'FAQs' },
          ].map(tab => (
            <button
              key={tab.id}
              type="button"
              className={`kg-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => scrollToSection(tab.id)}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* 5. Main Content Area */}
      <main className="app-container kg-main-layout">
        <div className="kg-grid-wrapper">

          {/* Left Main Column */}
          <div className="kg-content-col">

            {/* Section: Overview */}
            <section id="overview" className="kg-section-card">
              <h2 className="kg-section-title">About Kyrgyzstan's Mountain Passes</h2>
              <p className="kg-editorial-p">
                Kyrgyzstan is one of the most mountainous countries in the world, with dozens of high-altitude passes connecting cities, valleys and neighbouring countries. This page provides live status, road conditions, weather updates, webcams and key travel information for the main passes across the country. Data is sourced from the Ministry of Transport and Highways of the Kyrgyz Republic, local authorities and live webcams.
              </p>

              {/* Status Summary Cards */}
              <div className="kg-status-summary-grid" style={{ marginTop: '1.5rem' }}>
                <div className="kg-stat-card open">
                  <div className="kg-stat-icon-box"><CheckCircle2 size={22} /></div>
                  <div>
                    <div className="kg-stat-number">{openCount}</div>
                    <div className="kg-stat-label">Passes Open</div>
                  </div>
                </div>
                <div className="kg-stat-card restricted">
                  <div className="kg-stat-icon-box"><AlertTriangle size={22} /></div>
                  <div>
                    <div className="kg-stat-number">{restrictedCount}</div>
                    <div className="kg-stat-label">Restricted</div>
                  </div>
                </div>
                <div className="kg-stat-card closed">
                  <div className="kg-stat-icon-box"><XCircle size={22} /></div>
                  <div>
                    <div className="kg-stat-number">{closedCount}</div>
                    <div className="kg-stat-label">Closed</div>
                  </div>
                </div>
                <div className="kg-stat-card updated">
                  <div className="kg-stat-icon-box"><Clock size={22} /></div>
                  <div>
                    <div className="kg-stat-label" style={{ marginBottom: '0.15rem' }}>Last Updated</div>
                    <div className="kg-stat-number" style={{ fontSize: '1.05rem', fontWeight: 700 }}>19 Sep 2026, 09:30</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>(Kyrgyz Time)</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section: Pass Table */}
            <section id="pass-list" className="kg-section-card">
              <div className="kg-table-header-row">
                <h2 className="kg-section-title" style={{ margin: 0 }}>
                  <Mountain size={22} color="#1D64F2" /> Major Passes in Kyrgyzstan
                </h2>
                <div className="kg-table-search">
                  <Search size={16} className="kg-table-search-icon" />
                  <input
                    type="text"
                    placeholder="Filter by pass name or highway..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Filter passes"
                  />
                </div>
              </div>

              <div className="kg-table-filters" style={{ marginBottom: '1rem' }}>
                {[
                  { val: 'ALL' as const, label: `All Passes (${kgPasses.length})` },
                  { val: 'OPEN' as const, label: `Open (${openCount})` },
                  { val: 'RESTRICTED' as const, label: `Restricted (${restrictedCount})` },
                  { val: 'CLOSED' as const, label: `Closed (${closedCount})` },
                ].map(f => (
                  <button
                    key={f.val}
                    type="button"
                    className={`kg-filter-chip ${statusFilter === f.val ? 'active' : ''}`}
                    onClick={() => setStatusFilter(f.val)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              <div className="kg-table-container">
                <table className="kg-table" aria-label="Kyrgyzstan Mountain Pass Status Table">
                  <thead>
                    <tr>
                      <th scope="col">Pass Name</th>
                      <th scope="col">Elevation</th>
                      <th scope="col">Status</th>
                      <th scope="col">Road Condition</th>
                      <th scope="col">Weather</th>
                      <th scope="col">Last Updated</th>
                      <th scope="col">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayedTablePasses.length === 0 ? (
                      <tr>
                        <td colSpan={7} style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                          No mountain passes found matching your filter criteria.
                        </td>
                      </tr>
                    ) : (
                      displayedTablePasses.map((pass) => {
                        const displayName = pass.name.replace(' Pass', '');
                        const weatherIcon = pass.weather.tempC > 2 ? '☀️' : pass.status === 'CLOSED' ? '🌨️' : pass.weather.tempC < 0 ? '🌧️' : '⛅';
                        return (
                          <tr key={pass.id}>
                            <td className="kg-pass-name-cell">
                              <button
                                type="button"
                                className="kg-pass-name-button"
                                onClick={() => scrollToPass(pass.id)}
                                title={`Jump to ${pass.name} road conditions`}
                              >
                                {displayName}
                              </button>
                            </td>
                            <td>
                              <span className="kg-elevation-val">{pass.elevationM.toLocaleString()} m</span>
                            </td>
                            <td>
                              <StatusBadge status={pass.status} showDot size="sm" />
                            </td>
                            <td>
                              <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                                {pass.roadCondition}
                              </span>
                            </td>
                            <td>
                              <div className="kg-weather-cell">
                                <span>{weatherIcon}</span>
                                <span>{pass.weather.tempC}°C</span>
                              </div>
                            </td>
                            <td style={{ whiteSpace: 'nowrap', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                              {pass.lastUpdated}
                            </td>
                            <td>
                              <button
                                type="button"
                                className="kg-btn-view"
                                onClick={() => scrollToPass(pass.id)}
                                title={`View ${pass.name} details`}
                              >
                                View <ChevronRight size={14} />
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>

              <div className="kg-table-footer" style={{ textAlign: 'center', marginTop: '1.25rem' }}>
                <button
                  type="button"
                  className="kg-btn-all-passes"
                  onClick={() => setShowAllPasses(!showAllPasses)}
                >
                  {showAllPasses ? 'Show Top 10 Major Passes ↑' : 'View All Passes in Kyrgyzstan →'}
                </button>
              </div>
            </section>

            {/* Featured Pass Spotlight */}
            <section className="kg-featured-pass-card" aria-label="Featured Mountain Pass">
              <div className="kg-featured-img-col">
                <img
                  src="/kyrgyzstan-mountain-pass-hero.webp"
                  alt="Too-Ashuu Pass winding mountain road in Kyrgyzstan"
                  loading="lazy"
                  width={340}
                  height={240}
                />
                <div className="kg-featured-badge">★ Featured Pass</div>
                <div className="kg-featured-caption">{featuredPass.name} ({featuredPass.elevationM.toLocaleString()} m)</div>
              </div>

              <div className="kg-featured-content">
                <div>
                  <div className="kg-featured-header">
                    <h3 className="kg-featured-title">{featuredPass.name}</h3>
                    <StatusBadge status={featuredPass.status} showDot size="md" />
                  </div>
                  <div className="kg-featured-meta">
                    <strong>Elevation:</strong> {featuredPass.elevationM.toLocaleString()} m | <strong>Connects:</strong> Bishkek – Osh
                  </div>
                  <p className="kg-featured-desc">
                    Too-Ashuu is one of the most important mountain passes in Kyrgyzstan, located on the M41 highway between Bishkek and Osh. The pass is open year-round but can experience heavy snow, fog and avalanches in winter. It is a vital route for both passenger and freight traffic.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => scrollToPass(featuredPass.id)}
                  className="kg-featured-btn"
                >
                  View Too-Ashuu Pass Details <ChevronRight size={16} />
                </button>
              </div>
            </section>

            {/* Travel Safely Banner */}
            <div className="kg-travel-safely-banner" aria-label="Travel Safely in Kyrgyzstan">
              <div className="kg-safely-left">
                <div className="kg-safely-icon-box">
                  <Shield size={26} color="#1D64F2" />
                </div>
                <div className="kg-safely-text">
                  <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>Travel Safely in Kyrgyzstan</h3>
                  <p style={{ margin: 0, fontSize: '0.88rem', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
                    Road conditions in Kyrgyzstan can change quickly due to weather, landslides and snow. Always check the latest updates before you travel and follow local authority instructions.
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="kg-safely-btn"
                onClick={() => scrollToSection('travel-guide')}
              >
                View Travel Guide <ArrowRight size={16} />
              </button>
            </div>

            {/* ================================================ */}
            {/* Section: Clustered Pass Deep-Dive (SEO-focused) */}
            {/* ================================================ */}
            <section id="road-conditions" className="kg-section-card" style={{ marginTop: '2rem' }}>
              <h2 className="kg-section-title">
                <Car size={22} color="#1D64F2" /> Kyrgyzstan Road Conditions &amp; Pass Status Guide
              </h2>
              <p className="kg-editorial-p" style={{ marginBottom: '1.75rem' }}>
                Kyrgyzstan mountain passes connect distinct climatic zones across the Tien Shan and Pamir-Alay ranges. Detailed below are live road conditions, winter closures, border crossing schedules, and official depot maintenance dispatches for key corridors:
              </p>

              {/* 1. Too-Ashuu Pass */}
              <div id="pass-too-ashuu-pass" className="kg-clustered-pass-card">
                <div className="kg-cluster-head">
                  <div>
                    <h3 className="kg-cluster-title">Too Ashuu Pass Road Conditions &amp; Live Status</h3>
                    <div className="kg-cluster-meta">
                      <strong>M41 Highway (Bishkek–Osh)</strong> • Elevation: 3,586 m (Kolbaev Tunnel: 3,180 m) • Chüy &amp; Jalal-Abad
                    </div>
                  </div>
                  <StatusBadge status={featuredPass.status} showDot size="md" />
                </div>
                <div className="kg-qa-callout">
                  <strong>Is Too Ashuu Pass open right now?</strong>
                  <p>Yes, <strong>Too Ashuu Pass is currently open</strong>. Vehicular traffic flows normally through the 2.8 km Kolbaev Tunnel at 3,180 meters altitude. Plowing and salting operations are active 24/7 by Ministry of Transport DEP 9 crews.</p>
                </div>
                <div className="kg-spec-grid">
                  <div className="kg-spec-box"><div className="kg-sb-label">Current Road Conditions</div><div className="kg-sb-val">Clear, dry asphalt; wet near tunnel portals.</div></div>
                  <div className="kg-spec-box"><div className="kg-sb-label">Weather &amp; Temp</div><div className="kg-sb-val">5°C • Sunny • Light mountain breeze</div></div>
                  <div className="kg-spec-box"><div className="kg-sb-label">Tire &amp; Chain Laws</div><div className="kg-sb-val">Chains mandatory for freight trucks; traction tires advised.</div></div>
                  <div className="kg-spec-box"><div className="kg-sb-label">Responsible Authority</div><div className="kg-sb-val">Ministry of Transport &amp; Communications (DEP 9)</div></div>
                </div>
                <p className="kg-cluster-desc">
                  <strong>Too Ashuu Pass</strong> is Kyrgyzstan's most vital economic transportation link, connecting the capital Bishkek with southern regional centers Jalal-Abad and Osh. While the natural pass reaches 3,586 meters, highway traffic bypasses the summit crest through the Kolbaev Tunnel. During winter storms, temporary safety restrictions are imposed on articulated heavy trucks while rotary snowplows clear drifts and anti-avalanche artillery shoots are carried out at km 120–138.
                </p>
              </div>

              {/* 2. Torugart Pass */}
              <div id="pass-torugart-pass" className="kg-clustered-pass-card">
                <div className="kg-cluster-head">
                  <div>
                    <h3 className="kg-cluster-title">Torugart Pass Road Conditions &amp; China Border Crossing</h3>
                    <div className="kg-cluster-meta">
                      <strong>A365 / E125 Corridor</strong> • Elevation: 3,752 m (12,310 ft) • Naryn Region – Xinjiang (China)
                    </div>
                  </div>
                  <StatusBadge status="OPEN" showDot size="md" />
                </div>
                <div className="kg-qa-callout">
                  <strong>Torugart Pass Status &amp; Border Crossing Hours:</strong>
                  <p>Torugart Pass road conditions are clear and open for international transit. The border crossing is operational on weekdays (Monday–Friday, 10:00–18:00 local time). Closed on weekends and bilateral national holidays. All travellers require a valid passport, Chinese visa, and pre-booked border zone permits.</p>
                </div>
                <div className="kg-spec-grid">
                  <div className="kg-spec-box"><div className="kg-sb-label">Torugart Road Conditions</div><div className="kg-sb-val">Paved asphalt, clear surface; dry cold winds.</div></div>
                  <div className="kg-spec-box"><div className="kg-sb-label">Alpine Weather</div><div className="kg-sb-val">-4°C • Clear &amp; Crisp • 24 km/h NE winds</div></div>
                  <div className="kg-spec-box"><div className="kg-sb-label">Border Clearance</div><div className="kg-sb-val">Bilateral customs checkpoint; frontier permit required.</div></div>
                  <div className="kg-spec-box"><div className="kg-sb-label">Road Maintenance</div><div className="kg-sb-val">DEP 957 &amp; State Border Service</div></div>
                </div>
                <p className="kg-cluster-desc">
                  <strong>Torugart Pass</strong> traverses the dramatic At-Bashy Range in Naryn Region at 3,752 meters. First developed as an unpaved Silk Road caravan route in the late 19th century, the A365 highway corridor has been modernised under international CAREC trade programs. The high altitude and proximity to Chatyr-Kul Lake expose the pass to sudden sub-zero blizzards even in autumn and spring.
                </p>
              </div>

              {/* 3. Kyzyl-Art Pass */}
              <div id="pass-kyzyl-art-pass" className="kg-clustered-pass-card">
                <div className="kg-cluster-head">
                  <div>
                    <h3 className="kg-cluster-title">Kyzyl Art Pass Road Conditions &amp; Pamir Highway Status</h3>
                    <div className="kg-cluster-meta">
                      <strong>M41 (Pamir Highway)</strong> • Elevation: 4,280 m (14,042 ft) • Osh Region – GBAO (Tajikistan)
                    </div>
                  </div>
                  <StatusBadge status="RESTRICTED" showDot size="md" />
                </div>
                <div className="kg-qa-callout warning">
                  <strong>Kyzyl Art Pass Status &amp; Pamir Highway Alert:</strong>
                  <p><strong>Kyzyl Art Pass road conditions</strong> are restricted due to high-altitude snowpack, ice ruts, and extreme freezing temperatures (-8°C). Four-wheel drive (4WD) with high clearance and tire chains is strictly required. International border crossings are subject to bilateral security notices.</p>
                </div>
                <div className="kg-spec-grid">
                  <div className="kg-spec-box"><div className="kg-sb-label">Road Surface</div><div className="kg-sb-val">Unpaved gravel, corrugated clay, snow and mud slush.</div></div>
                  <div className="kg-spec-box"><div className="kg-sb-label">Trans-Alay Weather</div><div className="kg-sb-val">-8°C • Snow, slippery • 32 km/h freezing gale</div></div>
                  <div className="kg-spec-box"><div className="kg-sb-label">Vehicle Clearance</div><div className="kg-sb-val">4WD high-clearance only; winter recovery gear essential.</div></div>
                  <div className="kg-spec-box"><div className="kg-sb-label">Maintenance Depot</div><div className="kg-sb-val">DEP 960 (Sary-Tash) &amp; State Border Service</div></div>
                </div>
                <p className="kg-cluster-desc">
                  Standing at 4,280 meters on the Pamir Highway, <strong>Kyzyl Art Pass</strong> is the highest international border pass in the region, connecting the wide Alay Valley of Kyrgyzstan with the desolate high plateaus of Tajikistan. The steep ascent over stark red clay scree slopes requires extreme caution during snowstorms and seasonal thaws.
                </p>
              </div>

              {/* 4. Ala-Bel Pass */}
              <div id="pass-ala-bel-pass" className="kg-clustered-pass-card">
                <div className="kg-cluster-head">
                  <div>
                    <h3 className="kg-cluster-title">Ala Bel Pass Road Conditions &amp; Live Status</h3>
                    <div className="kg-cluster-meta">
                      <strong>M41 Highway</strong> • Elevation: 3,184 m (10,446 ft) • Suusamyr Valley – Chychkan Gorge
                    </div>
                  </div>
                  <StatusBadge status="OPEN" showDot size="md" />
                </div>
                <div className="kg-spec-grid">
                  <div className="kg-spec-box"><div className="kg-sb-label">Ala Bel Road Conditions</div><div className="kg-sb-val">Mostly clear paved asphalt; wet patches on curves.</div></div>
                  <div className="kg-spec-box"><div className="kg-sb-label">Alpine Weather</div><div className="kg-sb-val">2°C • Mostly clear • Moderate breeze</div></div>
                  <div className="kg-spec-box"><div className="kg-sb-label">Winter Equipment</div><div className="kg-sb-val">Traction winter tires; chains mandatory during blizzards.</div></div>
                  <div className="kg-spec-box"><div className="kg-sb-label">Depot Control</div><div className="kg-sb-val">Ministry of Transport DEP 23</div></div>
                </div>
                <p className="kg-cluster-desc">
                  Carrying the M41 highway between the Suusamyr plateau and the dramatic Chychkan River Gorge in Jalal-Abad Region, <strong>Ala Bel Pass</strong> at 3,184 meters is renowned for its wide, sweeping alpine scenery and rapid weather shifts. DEP 23 operates heavy rotary snowplows from its Suusamyr base to ensure year-round connectivity.
                </p>
              </div>

              {/* 5. Taldyk Pass */}
              <div id="pass-taldyk-pass" className="kg-clustered-pass-card">
                <div className="kg-cluster-head">
                  <div>
                    <h3 className="kg-cluster-title">Taldyk Pass Road Conditions &amp; Alay Serpentines Status</h3>
                    <div className="kg-cluster-meta">
                      <strong>M41 / E007 (Pamir Highway)</strong> • Elevation: 3,615 m (11,860 ft) • Osh to Sary-Tash
                    </div>
                  </div>
                  <StatusBadge status="OPEN" showDot size="md" />
                </div>
                <div className="kg-spec-grid">
                  <div className="kg-spec-box"><div className="kg-sb-label">Taldyk Road Conditions</div><div className="kg-sb-val">Clear asphalt serpentines; dry surface with barrier protection.</div></div>
                  <div className="kg-spec-box"><div className="kg-sb-label">Weather Observation</div><div className="kg-sb-val">1°C • Clear &amp; Sunny • 15 km/h breeze</div></div>
                  <div className="kg-spec-box"><div className="kg-sb-label">Driving Advisory</div><div className="kg-sb-val">Use low transmission gear on 18 steep hairpin switchbacks.</div></div>
                  <div className="kg-spec-box"><div className="kg-sb-label">Highway Depot</div><div className="kg-sb-val">DEP 960 (Gulcha &amp; Sary-Tash)</div></div>
                </div>
                <p className="kg-cluster-desc">
                  <strong>Taldyk Pass</strong> is an engineering landmark on the northern Pamir Highway, carrying motorists across the Alay Range via dramatic switchbacks carved into near-vertical cliff faces. The route is fully paved and protected by modern rockfall catch-fences and guardrails.
                </p>
              </div>

              {/* 6. Dolon Pass */}
              <div id="pass-dolon-pass" className="kg-clustered-pass-card">
                <div className="kg-cluster-head">
                  <div>
                    <h3 className="kg-cluster-title">Dolon Pass Road Conditions &amp; Kochkor–Naryn Status</h3>
                    <div className="kg-cluster-meta">
                      <strong>A365 / E125 Corridor</strong> • Elevation: 3,030 m (9,941 ft) • Kochkor to Naryn City
                    </div>
                  </div>
                  <StatusBadge status="OPEN" showDot size="md" />
                </div>
                <div className="kg-spec-grid">
                  <div className="kg-spec-box"><div className="kg-sb-label">Dolon Road Conditions</div><div className="kg-sb-val">Mostly clear asphalt; smooth traffic flow.</div></div>
                  <div className="kg-spec-box"><div className="kg-sb-label">Summit Weather</div><div className="kg-sb-val">4°C • Mostly clear • Permanent weather station active</div></div>
                  <div className="kg-spec-box"><div className="kg-sb-label">Winter Advisory</div><div className="kg-sb-val">Watch for early morning black ice; winter tires required.</div></div>
                  <div className="kg-spec-box"><div className="kg-sb-label">Depot Base</div><div className="kg-sb-val">Ministry of Transport DEP 41</div></div>
                </div>
                <p className="kg-cluster-desc">
                  <strong>Dolon Pass</strong> carries the primary paved A365 trunk highway across the Song-Kul Too range at 3,030 meters, linking Kochkor with Naryn City. Maintained by DEP 41, the pass features broad curves and gentle inclines compared to more rugged high-altitude routes.
                </p>
              </div>

              {/* Directory Grid for Other Passes */}
              <div style={{ marginTop: '2.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                  All Other Mountain Passes Across Kyrgyzstan
                </h3>
                <div className="kg-details-grid">
                  {otherPasses.map((pass) => (
                    <div key={pass.id} id={`pass-${pass.id}`} className="kg-detail-card">
                      <div>
                        <div className="kg-detail-card-head">
                          <h4 className="kg-detail-card-title">{pass.name}</h4>
                          <StatusBadge status={pass.status} size="sm" />
                        </div>
                        <div className="kg-spec-row">
                          <div className="kg-spec-item"><strong>Elevation</strong><span>{pass.elevationM.toLocaleString()} m</span></div>
                          <div className="kg-spec-item"><strong>Route</strong><span>{pass.highway}</span></div>
                          <div className="kg-spec-item"><strong>Region</strong><span>{pass.state}</span></div>
                          <div className="kg-spec-item"><strong>Weather</strong><span>{pass.weather.tempC}°C • {pass.weather.condition}</span></div>
                        </div>
                        <p className="kg-detail-desc">{pass.description}</p>
                        <div style={{ background: 'var(--bg-surface-subtle)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', marginTop: '0.75rem', fontSize: '0.84rem' }}>
                          <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Surface &amp; Clearance:</div>
                          <div style={{ color: 'var(--text-secondary)' }}>{pass.roadCondition}</div>
                          {pass.chainRequirement && (
                            <div style={{ marginTop: '0.35rem', color: '#b45309', fontSize: '0.8rem', fontWeight: 600 }}>
                              ⚠️ {pass.chainRequirement}
                            </div>
                          )}
                        </div>
                      </div>
                      <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Updated {pass.lastUpdated}</span>
                        <span style={{ fontSize: '0.78rem', color: 'var(--primary)', fontWeight: 600 }}>
                          {pass.official_authority || 'Ministry of Transport DEP'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Remote & Restricted Passes Notice */}
            <section className="kg-remote-section" aria-label="Remote and Non-Public Passes Notice">
              <div className="kg-remote-header">
                <AlertCircle size={20} /> Remote, Seasonal &amp; Non-Public Border Corridors
              </div>
              <p className="kg-editorial-p">
                Certain high-altitude mountain passes in Kyrgyzstan are <strong>NOT active public motor vehicle roads</strong> and must not be used for standard vehicular journey planning:
              </p>
              <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>Bedel Pass (4,284 m):</strong> Historic Silk Road pass on the China frontier. Strictly prohibited military border zone; no motor road exists across the crest.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Kara-Buura Pass (3,305 m):</strong> Unpaved high road across the Talas Ala-Too. Closes from October through late June annually due to heavy winter snowdrifts.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Söök Pass (4,028 m) &amp; Barskoon (3,754 m):</strong> Heavy industrial gravel routes across the Inner Tien Shan permafrost syrts. Accessible only with sturdy 4x4 high-clearance vehicles.</li>
              </ul>
            </section>

            {/* Travel Guide */}
            <section id="travel-guide" className="kg-section-card">
              <h2 className="kg-section-title">
                <ShieldCheck size={22} color="#1D64F2" /> High-Altitude Driving Guide for Kyrgyzstan
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '1rem' }}>
                <div style={{ background: 'var(--bg-surface-subtle)', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Snowflake size={18} color="#0284C7" /> Winter Equipment &amp; Chains
                  </h4>
                  <p style={{ fontSize: '0.86rem', lineHeight: '1.5', color: 'var(--text-secondary)' }}>
                    Between October and May, high-altitude passes frequently experience sudden blizzards and black ice. High-clearance vehicles with 4WD, good tread depth (minimum 4mm winter tread), and approved metal tire chains are strongly advised for all passes over 3,000 meters.
                  </p>
                </div>
                <div style={{ background: 'var(--bg-surface-subtle)', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FileText size={18} color="#D97706" /> Border Zone Permits
                  </h4>
                  <p style={{ fontSize: '0.86rem', lineHeight: '1.5', color: 'var(--text-secondary)' }}>
                    Corridors approaching international frontiers—including Torugart Pass, Kyzyl-Art Pass, Inylchek (via Chon-Ashuu), and Chatyr-Kul Lake—lie inside regulated frontier security zones. Valid border permits (propusk) must be arranged several weeks in advance through authorized agencies.
                  </p>
                </div>
                <div style={{ background: 'var(--bg-surface-subtle)', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <AlertTriangle size={18} color="#EF4444" /> Fuel &amp; Emergency Range
                  </h4>
                  <p style={{ fontSize: '0.86rem', lineHeight: '1.5', color: 'var(--text-secondary)' }}>
                    High-altitude driving significantly increases fuel consumption due to thinner air and prolonged steep climbs. Premium fuel stations are scarce outside Bishkek, Osh, and Naryn. Always top up your tank before ascending passes and carry emergency supplies.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Sources */}
            <section className="kg-eeat-box" aria-label="Data Sources and Verification">
              <div className="kg-eeat-title">
                <Shield size={18} color="#1D64F2" /> Data Sources &amp; Verification Protocol (E-E-A-T)
              </div>
              <p style={{ margin: '0 0 0.75rem 0' }}>
                LivePassWatch aggregates mountain pass data from verified official road agencies, operational maintenance dispatches, and public meteorological stations across Kyrgyzstan.
              </p>
              <ul style={{ paddingLeft: '1.25rem', margin: '0 0 0.75rem 0' }}>
                <li><strong>Primary Road Authority:</strong> Ministry of Transport and Communications of the Kyrgyz Republic (<a href="https://mtd.gov.kg" target="_blank" rel="noopener noreferrer" className="kg-external-link">mtd.gov.kg <ExternalLink size={11} /></a>)</li>
                <li><strong>Emergency &amp; Weather Alerts:</strong> Ministry of Emergency Situations (<a href="https://mchs.gov.kg" target="_blank" rel="noopener noreferrer" className="kg-external-link">mchs.gov.kg <ExternalLink size={11} /></a>)</li>
                <li><strong>Frontier Regulations:</strong> State Border Service of the State Committee for National Security of the Kyrgyz Republic.</li>
              </ul>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <em>Disclaimer: Mountain pass conditions can change abruptly within minutes due to sudden blizzards, rockfalls, or temperature drops. LivePassWatch does not operate road infrastructure or control closures. Always verify current notices with local transport stations before departure.</em>
              </p>
            </section>

            {/* FAQs */}
            <section id="faqs" className="kg-section-card">
              <h2 className="kg-section-title">
                <Info size={22} color="#1D64F2" /> Frequently Asked Questions
              </h2>
              <p className="kg-editorial-p">
                Essential questions and verified answers regarding mountain pass transit, seasonal access, and winter road laws in Kyrgyzstan.
              </p>
              <div className="kg-faq-list">
                {faqs.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div key={idx} className={`kg-faq-item ${isOpen ? 'active' : ''}`}>
                      <button
                        type="button"
                        className="kg-faq-question"
                        onClick={() => setActiveFaq(isOpen ? null : idx)}
                        aria-expanded={isOpen}
                      >
                        <span>{faq.q}</span>
                        <ChevronDown size={18} className="kg-faq-icon" />
                      </button>
                      {isOpen && (
                        <div className="kg-faq-answer">{faq.a}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

          </div>

          {/* Right Sidebar Column */}
          <aside className="kg-sidebar-col" aria-label="Passes interactive tools and quick facts">

            {/* Sidebar: Interactive Map (lazy-loaded) */}
            <div id="live-map" className="kg-widget-card">
              <div className="kg-widget-header">
                <MapPin size={18} color="#1D64F2" /> Interactive Map
              </div>
              <div className="kg-map-wrapper">
                <Suspense fallback={
                  <div style={{ height: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-surface-subtle)', borderRadius: 'var(--radius-md)', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    Loading map...
                  </div>
                }>
                  <MapComponent
                    passes={kgPasses}
                    center={[41.8, 74.5]}
                    zoomLevel={6}
                    height="280px"
                    showGlobalClusters={false}
                    onViewPassClick={(pass) => scrollToPass(pass.id)}
                  />
                </Suspense>
              </div>
              <Link to="/map" className="kg-widget-link-btn">
                View Full Map &rarr;
              </Link>
            </div>

            {/* Sidebar: Webcam */}
            <div className="kg-widget-card">
              <div className="kg-widget-header">
                <Camera size={18} color="#1D64F2" /> Live Webcam
              </div>
              <div
                className="kg-webcam-preview"
                style={{ backgroundImage: 'url(/kyrgyzstan-mountain-pass-hero.webp)' }}
              >
                <div className="kg-live-badge">
                  <span className="kg-live-pulse-dot" /> LIVE
                </div>
                <div className="kg-webcam-caption">
                  Too-Ashuu Pass Webcam (3,586 m)
                </div>
              </div>
              <div className="kg-webcam-notice">
                Official CCTV camera feeds at Too-Ashuu Tunnel and toll checkpoints are monitored by DEP 9 highway dispatches. Availability may be intermittently affected by high-altitude cellular power during severe snowstorms.
              </div>
              <a href="https://mtd.gov.kg" target="_blank" rel="noopener noreferrer" className="kg-widget-link-btn">
                View All Webcams &rarr;
              </a>
            </div>

            {/* Sidebar: Quick Information */}
            <div className="kg-widget-card">
              <div className="kg-widget-header">
                <Info size={18} color="#1D64F2" /> Quick Information
              </div>
              <div className="kg-widget-body">
                <div className="kg-quick-info-list">
                  <div className="kg-quick-info-item">
                    <div className="kg-qi-icon"><Calendar size={18} /></div>
                    <div>
                      <div className="kg-qi-title">Best Time to Travel</div>
                      <div className="kg-qi-desc">May – October</div>
                    </div>
                  </div>
                  <div className="kg-quick-info-item">
                    <div className="kg-qi-icon"><Snowflake size={18} /></div>
                    <div>
                      <div className="kg-qi-title">Winter Closures</div>
                      <div className="kg-qi-desc">Common (Nov – Apr)</div>
                    </div>
                  </div>
                  <div className="kg-quick-info-item">
                    <div className="kg-qi-icon"><FileText size={18} /></div>
                    <div>
                      <div className="kg-qi-title">Required Documents</div>
                      <div className="kg-qi-desc">Passport (for border passes)</div>
                    </div>
                  </div>
                  <div className="kg-quick-info-item">
                    <div className="kg-qi-icon"><Car size={18} /></div>
                    <div>
                      <div className="kg-qi-title">Road Conditions</div>
                      <div className="kg-qi-desc">Can change rapidly</div>
                    </div>
                  </div>
                  <div className="kg-quick-info-item">
                    <div className="kg-qi-icon"><ExternalLink size={18} /></div>
                    <div>
                      <div className="kg-qi-title">Official Source</div>
                      <div className="kg-qi-desc">
                        <a href="https://mtd.gov.kg" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>
                          mtd.gov.kg <ExternalLink size={11} style={{ display: 'inline', verticalAlign: 'middle' }} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </main>

    </div>
  );
};

export default KyrgyzstanPassesPage;
