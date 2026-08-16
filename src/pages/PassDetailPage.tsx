import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Snowflake, 
  Wind, 
  Share2, 
  Star, 
  Heart, 
  ChevronRight, 
  ChevronLeft, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  HelpCircle,
  Camera,
  MapPin,
  Calendar,
  Ruler,
  Compass,
  Check,
  FileText,
  ShieldCheck,
  Clock,
  Info,
  Car,
  Mountain,
  Navigation,
  Layers,
  Thermometer,
  ShieldAlert,
  Hotel,
  Compass as CompassIcon,
  Flag,
  Globe,
  Bike,
  Gauge
} from 'lucide-react';
import { passesData, getPassBySlug, getPassUrl } from '../data/passes';
import { MountainPass } from '../types';
import { StatusBadge } from '../components/StatusBadge';
import { TrustBar } from '../components/TrustBar';
import { MapComponent } from '../components/MapComponent';
import { NotFoundPage } from './StaticPages';
import { SEOHelper } from '../components/SEOHelper';
import './PassDetailPage.css';

export const PassDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug?: string; country?: string; state?: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  // Robust slug extraction: from route params or last segment of pathname
  const pathSegments = location.pathname.split('?')[0].split('/').filter(Boolean);
  const lastPathSegment = pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : undefined;
  const targetSlug = slug || (lastPathSegment && lastPathSegment !== 'passes' ? lastPathSegment : '');
  const pass = getPassBySlug(targetSlug);

  // UI States
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentCameraIndex, setCurrentCameraIndex] = useState(0);
  const [showShareToast, setShowShareToast] = useState(false);
  const [cameraTimestamp, setCameraTimestamp] = useState<string>(Date.now().toString());
  const [cameraError, setCameraError] = useState(false);
  const [isRefreshingCam, setIsRefreshingCam] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  // If pass is not found in database, return custom 404 Page (Phase 3 & 29 compliance)
  if (!pass) {
    return <NotFoundPage />;
  }

  // Check localStorage for favorite state
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('lp_favorites') || '[]');
    setIsFavorite(favorites.includes(pass.id));
    setCameraError(false);
    setCameraTimestamp(Date.now().toString());
    setCurrentCameraIndex(0);
  }, [pass.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('lp_favorites') || '[]');
    let updated;
    if (favorites.includes(pass.id)) {
      updated = favorites.filter((id: string) => id !== pass.id);
      setIsFavorite(false);
    } else {
      updated = [...favorites, pass.id];
      setIsFavorite(true);
    }
    localStorage.setItem('lp_favorites', JSON.stringify(updated));
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: pass.customSeo?.title || `${pass.name}: Webcam, Weather, Road Conditions & Opening Status`,
          text: pass.customSeo?.description || `Check live road conditions, opening status, current weather, and webcam feeds for ${pass.name}.`,
          url: url
        });
      } catch (err) {
        navigator.clipboard.writeText(url);
        setShowShareToast(true);
        setTimeout(() => setShowShareToast(false), 3000);
      }
    } else {
      navigator.clipboard.writeText(url);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 3000);
    }
  };

  const handleRefreshCurrentCam = () => {
    setIsRefreshingCam(true);
    setCameraTimestamp(Date.now().toString());
    setCameraError(false);
    setTimeout(() => setIsRefreshingCam(false), 800);
  };

  const currentCam = pass.cameras && pass.cameras[currentCameraIndex] ? pass.cameras[currentCameraIndex] : {
    id: 'default',
    title: `${pass.name} Summit View`,
    image: pass.image,
    timestamp: 'Live Feed Refreshed',
    location: `${pass.highway} Summit Overlook`
  };

  // Structured Data Schema for Mountain Pass & SEO
  const cleanSlug = (str: string) => str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[\s\/]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  const canonicalCountry = cleanSlug(pass.country);
  const canonicalState = cleanSlug(pass.state);
  const canonicalUrl = `https://www.livepasswatch.info/passes/${canonicalCountry}/${canonicalState}/${pass.slug}`;
  const passFullImage = pass.image.startsWith('http') ? pass.image : `https://www.livepasswatch.info${pass.image.startsWith('/') ? '' : '/'}${pass.image}`;

  const imageAltText = pass.slug === 'zoji-la-pass' || pass.slug === 'zoji-la'
    ? 'Zoji La Pass in Jammu and Kashmir'
    : pass.slug === 'stelvio-pass'
    ? 'Stelvio Pass in Italy'
    : pass.slug === 'sani-pass'
    ? 'Sani Pass mountain road between South Africa and Lesotho'
    : pass.slug === 'rohtang-pass'
    ? 'Rohtang Pass in Himachal Pradesh'
    : pass.slug === 'khardung-la'
    ? 'Khardung La Pass in Ladakh'
    : `${pass.name} on ${pass.highway} in ${pass.state}`;

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.livepasswatch.info/" },
          { "@type": "ListItem", "position": 2, "name": "Passes", "item": "https://www.livepasswatch.info/passes" },
          { "@type": "ListItem", "position": 3, "name": pass.country.split('/')[0].trim(), "item": `https://www.livepasswatch.info/passes?country=${encodeURIComponent(pass.country.split('/')[0].trim())}` },
          ...(pass.state ? [{ "@type": "ListItem", "position": 4, "name": pass.state.split('/')[0].trim(), "item": `https://www.livepasswatch.info/passes?state=${encodeURIComponent(pass.state.split('/')[0].trim())}` }] : []),
          { "@type": "ListItem", "position": pass.state ? 5 : 4, "name": pass.name, "item": canonicalUrl }
        ]
      },
      {
        "@type": "WebPage",
        "@id": canonicalUrl,
        "url": canonicalUrl,
        "name": pass.customSeo?.title || `${pass.name}: Webcam, Weather, Road Conditions & Opening Status`,
        "description": pass.customSeo?.description || `Check ${pass.name} road conditions, opening status, weather forecast, and live webcam feeds.`,
        "image": {
          "@type": "ImageObject",
          "url": passFullImage,
          "name": imageAltText
        },
        "about": {
          "@type": "TouristAttraction",
          "name": pass.name,
          "description": pass.description,
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": pass.coordinates.lat,
            "longitude": pass.coordinates.lng
          },
          "address": {
            "@type": "PostalAddress",
            "addressRegion": pass.state,
            "addressCountry": pass.country
          }
        }
      },
      ...(pass.faqs && pass.faqs.length > 0 ? [{
        "@type": "FAQPage",
        "mainEntity": pass.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }] : [])
    ]
  };

  const seoTitle = pass.customSeo?.title || `${pass.name}: Webcam, Weather, Road Conditions & Opening Status`;
  const seoDesc = pass.customSeo?.description || `Check live ${pass.name} road conditions, opening status, current weather, webcam feeds, and cycling routes for ${pass.highway} in ${pass.country}.`;

  const officialSourceDisplay = pass.dataSources && pass.dataSources.length > 0
    ? pass.dataSources[0].name
    : (pass.slug === 'stelvio-pass' ? 'ANAS SpA & Servizio Strade Provincia Autonoma di Bolzano' : 'Official Department of Transportation');

  const weatherSourceDisplay = pass.dataSources && pass.dataSources.length > 2
    ? pass.dataSources[2].name
    : (pass.slug === 'stelvio-pass' ? 'MeteoTrentino & Servizio Meteorologico Aeronautica Militare' : 'Official Meteorological Service');

  return (
    <div className="pass-detail-page-container">
      <SEOHelper
        title={seoTitle}
        description={seoDesc}
        canonicalUrl={canonicalUrl}
        jsonLd={jsonLdGraph}
        ogImage={passFullImage}
        twitterCard="summary_large_image"
      />

      {/* Share Toast */}
      {showShareToast && (
        <div className="toast-container">
          <div className="toast">
            <Check size={18} /> Link copied to clipboard!
          </div>
        </div>
      )}

      <div className="app-container">
        {/* Breadcrumb Navigation */}
        <nav className="detail-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} className="crumb-sep" />
          <Link to="/passes">Passes</Link>
          <ChevronRight size={14} className="crumb-sep" />
          <Link to={`/passes?country=${encodeURIComponent(pass.country.split('/')[0].trim())}`}>{pass.country.split('/')[0].trim()}</Link>
          {pass.state && (
            <>
              <ChevronRight size={14} className="crumb-sep" />
              <Link to={`/passes?state=${encodeURIComponent(pass.state.split('/')[0].trim())}`}>{pass.state.split('/')[0].trim()}</Link>
            </>
          )}
          <ChevronRight size={14} className="crumb-sep" />
          <span className="current-crumb">{pass.name}</span>
        </nav>

        {/* Pass Header & Action Bar */}
        <header className="pass-detail-header-row">
          <div className="pass-title-group">
            <div className="title-and-star">
              <h1 className="pass-main-heading">{pass.customSeo?.h1 || `${pass.name} – Webcam, Weather, Road Conditions & Opening Status`}</h1>
              <button 
                onClick={toggleFavorite} 
                className={`star-icon-btn ${isFavorite ? 'active' : ''}`}
                title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                aria-label="Favorite toggle"
              >
                <Star size={24} fill={isFavorite ? '#F59E0B' : 'none'} color={isFavorite ? '#F59E0B' : 'currentColor'} />
              </button>
            </div>
            <div className="pass-meta-subtitle">
              <span>{pass.name}</span>
              <span className="dot-sep">•</span>
              <span>{pass.highway}</span>
              <span className="dot-sep">•</span>
              <span>{pass.state}, {pass.country}</span>
              <span className="dot-sep">•</span>
              <span>Elevation: {pass.elevationFt.toLocaleString()} ft ({pass.elevationM.toLocaleString()} m)</span>
            </div>
            <p className="pass-summary-paragraph">{pass.description}</p>
          </div>

          <div className="pass-header-actions">
            <button onClick={handleShare} className="btn btn-secondary action-pill-btn">
              <Share2 size={16} /> Share
            </button>
            <button onClick={toggleFavorite} className="btn btn-secondary action-pill-btn">
              <Heart size={16} fill={isFavorite ? '#EF4444' : 'none'} color={isFavorite ? '#EF4444' : 'currentColor'} />
              {isFavorite ? 'Favorited' : 'Add to Favorites'}
            </button>
          </div>
        </header>

        {/* Featured Hero Photo */}
        <div className="pass-hero-image-wrap lp-card">
          <img 
            src={pass.image} 
            alt={imageAltText} 
            className="pass-hero-img" 
            width={1200}
            height={675}
            loading="eager"
          />
          <div className="pass-hero-caption">
            <span>{pass.name} • {pass.highway} • Elevation {pass.elevationFt.toLocaleString()} ft ({pass.elevationM.toLocaleString()} m)</span>
          </div>
        </div>

        {/* Quick Navigation Jump Bar */}
        <nav className="detail-quick-nav-bar lp-card" aria-label="Page Sections">
          <a href="#status" className="quick-nav-link">Live Status</a>
          <a href="#weather" className="quick-nav-link">Weather &amp; Temp</a>
          <a href="#road-conditions" className="quick-nav-link">Road Conditions</a>
          {pass.openingDateInfo && <a href="#opening-dates" className="quick-nav-link">Opening Dates {pass.openingDateInfo.year}</a>}
          {pass.trafficSchedule && <a href="#traffic-schedule" className="quick-nav-link">Traffic &amp; Convoys</a>}
          {pass.cyclingInfo && <a href="#cycling" className="quick-nav-link">Cycling Guide</a>}
          {pass.drivingInfo && <a href="#driving" className="quick-nav-link">Driving &amp; Safety</a>}
          {pass.cameras && pass.cameras.length > 0 && <a href="#cameras" className="quick-nav-link">Live Webcams</a>}
          <a href="#quick-facts" className="quick-nav-link">Quick Facts</a>
          <a href="#route-map" className="quick-nav-link">Map &amp; Route</a>
          {pass.distancesTable && pass.distancesTable.length > 0 && <a href="#distances" className="quick-nav-link">Distances</a>}
          <a href="#about" className="quick-nav-link">About {pass.name.split('(')[0].trim()}</a>
          <a href="#faqs" className="quick-nav-link">FAQs</a>
          <a href="#related-passes" className="quick-nav-link">Related Passes</a>
        </nav>

        {/* 2-Column Main Layout: Left Content Column + Right Sidebar */}
        <div className="pass-detail-body-grid">
          {/* Main Left Column */}
          <main className="pass-main-content-col">
            
            {/* Section 1: Top-of-Page Live Status Hero */}
            <section id="status" className="detail-section-block">
              <div className="section-title-wrap">
                <h2 className="section-title-heading">{pass.name.split('(')[0].trim().toUpperCase()} CURRENT STATUS</h2>
                <span className="section-timestamp"><Clock size={14} /> Last updated: {pass.lastUpdated}</span>
              </div>

              <div className="status-weather-cards-grid">
                {/* Status Hero Card */}
                <div className={`status-hero-card lp-card status-card-${pass.status}`}>
                  <div className="status-icon-large">
                    {pass.status === 'OPEN' && <CheckCircle2 size={44} className="icon-green" />}
                    {pass.status === 'CAUTION' && <AlertTriangle size={44} className="icon-orange" />}
                    {pass.status === 'CLOSED' && <XCircle size={44} className="icon-red" />}
                    {pass.status === 'MONITORED' && <CheckCircle2 size={44} className="icon-blue" />}
                    {pass.status === 'UNKNOWN' && <AlertTriangle size={44} className="icon-orange" />}
                  </div>
                  <div className="status-hero-info">
                    <div className="status-badge-hero-pill">
                      <span className="live-pulsing-dot" /> {pass.status === 'OPEN' ? '🟢 CURRENTLY OPEN' : pass.status === 'CAUTION' ? '⚠️ CAUTION ADVISED' : pass.status === 'CLOSED' ? '🔴 CURRENTLY CLOSED' : '⚪ STATUS UNKNOWN'}
                    </div>
                    <div className="status-hero-detail">{pass.statusDetail}</div>
                    <div className="status-hero-source">
                      <strong>Source:</strong> {officialSourceDisplay}
                    </div>
                  </div>
                </div>

                {/* Snow Depth / Surface Metric */}
                <div className="weather-metric-card lp-card">
                  <div className="metric-icon-box icon-snow">
                    <Snowflake size={28} />
                  </div>
                  <div className="metric-info-box">
                    <div className="metric-label">{pass.snowDepth.depthIn > 0 ? 'Snow Depth' : 'Road Surface'}</div>
                    <div className="metric-value">{pass.snowDepth.depthIn > 0 ? `${pass.snowDepth.depthIn} in (${pass.snowDepth.depthCm} cm)` : 'Clear / Paved'}</div>
                    <div className="metric-sub">{pass.snowDepth.condition}</div>
                  </div>
                </div>

                {/* Wind & Temperature Metric */}
                <div className="weather-metric-card lp-card">
                  <div className="metric-icon-box icon-wind">
                    <Thermometer size={28} />
                  </div>
                  <div className="metric-info-box">
                    <div className="metric-label">Temperature &amp; Wind</div>
                    <div className="metric-value">{pass.weather.tempF}&deg;F ({pass.weather.tempC}&deg;C)</div>
                    <div className="metric-sub">{pass.wind.direction} {pass.wind.speedMph} mph ({pass.wind.description})</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Weather & Temperature Section */}
            <section id="weather" className="detail-section-block">
              <h2 className="section-title-heading">{pass.name.split('(')[0].trim()} Weather</h2>
              <div className="weather-detail-container lp-card">
                <div className="weather-current-banner">
                  <div className="current-weather-left">
                    <span className="current-temp-big">{pass.weather.tempF}&deg;F</span>
                    <div className="current-temp-details">
                      <span className="current-temp-c">{pass.weather.tempC}&deg;C</span>
                      <span className="current-condition-text">{pass.weather.condition}</span>
                    </div>
                  </div>
                  <div className="current-weather-right">
                    <div><strong>Summit Altitude:</strong> {pass.elevationFt.toLocaleString()} ft ({pass.elevationM.toLocaleString()} m)</div>
                    <div><strong>Wind Speed &amp; Dir:</strong> {pass.wind.direction} {pass.wind.speedMph} mph ({pass.wind.description})</div>
                    <div><strong>Surface Condition:</strong> {pass.snowDepth.condition}</div>
                    <div><strong>Weather Source:</strong> {weatherSourceDisplay}</div>
                  </div>
                </div>

                {pass.forecast && pass.forecast.length > 0 && (
                  <div className="forecast-sub-wrap">
                    <h3 className="forecast-sub-title">5-Day High-Altitude Mountain Forecast</h3>
                    <div className="forecast-grid">
                      {pass.forecast.map((f, i) => (
                        <div key={i} className="forecast-card-item">
                          <span className="f-day">{f.day}</span>
                          <span className="f-cond">{f.condition}</span>
                          <div className="f-temps">
                            <span className="f-high">{f.tempHighF}&deg;</span>
                            <span className="f-low">{f.tempLowF}&deg;</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Section 3: Road Conditions */}
            <section id="road-conditions" className="detail-section-block">
              <h2 className="section-title-heading">{pass.name.split('(')[0].trim()} Road Conditions</h2>
              <div className="road-conditions-container lp-card">
                <div className="road-card-row">
                  <span className="road-key">Current Surface Condition:</span>
                  <span className="road-val">{pass.roadCondition}</span>
                </div>
                <div className="road-card-row">
                  <span className="road-key">Traction &amp; Equipment:</span>
                  <span className="road-val">{pass.chainRequirement}</span>
                </div>
                <div className="road-card-row">
                  <span className="road-key">Switchback Hazards &amp; Gradients:</span>
                  <span className="road-val">
                    {pass.slug === 'stelvio-pass' 
                      ? '48 stone-walled switchbacks on the South Tyrol ramp (avg 7.4%, max 12%), 39 switchbacks on the Bormio ramp, narrow avalanche galleries, and high-altitude weather exposure.'
                      : 'Steep alpine gradients, winding switchbacks, and localized high-altitude road surface variations.'}
                  </span>
                </div>
                <div className="road-card-row">
                  <span className="road-key">Official Road Authority:</span>
                  <span className="road-val">{officialSourceDisplay}</span>
                </div>
              </div>
            </section>

            {/* Section 4: Opening Dates (Provisional vs Confirmed) */}
            {pass.openingDateInfo && (
              <section id="opening-dates" className="detail-section-block">
                <h2 className="section-title-heading">{pass.name.split('(')[0].trim()} Opening Dates {pass.openingDateInfo.year}</h2>
                <div className="opening-dates-container lp-card">
                  <div className="opening-banner-pill">
                    <Calendar size={15} /> {pass.openingDateInfo.statusText}
                  </div>

                  <div className="opening-dates-grid">
                    <div className="opening-date-card">
                      <span className="opening-card-label"><Clock size={14} /> Expected Opening Window</span>
                      <strong className="opening-card-val">{pass.openingDateInfo.expectedOpeningWindow}</strong>
                    </div>

                    <div className="opening-date-card">
                      <span className="opening-card-label"><Calendar size={14} /> Seasonal Closing Window</span>
                      <strong className="opening-card-val">{pass.openingDateInfo.closingWindow}</strong>
                    </div>

                    <div className="opening-date-card" style={{ gridColumn: '1 / -1' }}>
                      <span className="opening-card-label"><ShieldCheck size={14} /> Clearance &amp; Maintenance Agencies</span>
                      <strong className="opening-card-val">{pass.openingDateInfo.clearanceAgency}</strong>
                    </div>
                  </div>

                  <div className="opening-notes-box">
                    <strong>Notice on Provisional Dates:</strong> {pass.openingDateInfo.notes}
                  </div>
                </div>
              </section>
            )}

            {/* Section 5: Cycling Guide */}
            {pass.cyclingInfo && (
              <section id="cycling" className="detail-section-block">
                <h2 className="section-title-heading">{pass.name.split('(')[0].trim()} Cycling</h2>
                <div className="cycling-container lp-card">
                  <p className="cycling-summary-text">{pass.cyclingInfo.summary}</p>

                  <div className="cycling-approaches-grid">
                    {pass.cyclingInfo.approaches.map((app, idx) => (
                      <div key={idx} className="cycling-approach-card">
                        <div className="cycling-approach-header">
                          <h3 className="cycling-approach-title">{app.name}</h3>
                          <span className="cycling-hairpin-badge">{app.hairpins} Hairpin Turns</span>
                        </div>

                        <div className="cycling-stats-bar">
                          <div className="cycling-stat-item">
                            <span className="cycling-stat-label">Distance</span>
                            <strong className="cycling-stat-value">{app.distanceKm} km ({app.distanceMiles} mi)</strong>
                          </div>
                          <div className="cycling-stat-item">
                            <span className="cycling-stat-label">Elevation Gain</span>
                            <strong className="cycling-stat-value">+{app.elevationGainM} m (+{app.elevationGainFt.toLocaleString()} ft)</strong>
                          </div>
                          <div className="cycling-stat-item">
                            <span className="cycling-stat-label">Avg Gradient</span>
                            <strong className="cycling-stat-value">{app.avgGradient}</strong>
                          </div>
                          <div className="cycling-stat-item">
                            <span className="cycling-stat-label">Max Gradient</span>
                            <strong className="cycling-stat-value">{app.maxGradient}</strong>
                          </div>
                        </div>

                        <p className="cycling-approach-desc">{app.description}</p>
                      </div>
                    ))}
                  </div>

                  {pass.cyclingInfo.bikeDayInfo && (
                    <div className="cycling-event-card">
                      <Bike size={24} className="cycling-event-icon" />
                      <div>
                        <h4 className="cycling-event-title">Annual {pass.name.split('(')[0].trim()} Cycling Event</h4>
                        <p className="cycling-event-text">{pass.cyclingInfo.bikeDayInfo}</p>
                      </div>
                    </div>
                  )}

                  <div className="cycling-tips-box">
                    <h4 className="cycling-tips-heading"><ShieldCheck size={16} /> Key Safety Advice for Cycling {pass.name.split('(')[0].trim()}</h4>
                    <ul className="cycling-tips-list">
                      {pass.cyclingInfo.safetyTips.map((tip, idx) => (
                        <li key={idx}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            )}

            {/* Section 6: Driving & Motorcycle Guide */}
            {pass.drivingInfo && (
              <section id="driving" className="detail-section-block">
                <h2 className="section-title-heading">Driving {pass.name.split('(')[0].trim()}</h2>
                <div className="driving-container lp-card">
                  <p className="driving-summary-text">{pass.drivingInfo.summary}</p>

                  <div className="driving-highlights-grid">
                    <div className="driving-highlight-card">
                      <h4 className="driving-hl-title"><Car size={16} /> Road Characteristics &amp; Switchbacks</h4>
                      <ul className="driving-hl-list">
                        {pass.drivingInfo.characteristics.map((c, idx) => (
                          <li key={idx}>{c}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="driving-highlight-card">
                      <h4 className="driving-hl-title"><Gauge size={16} /> Driving Safety &amp; Etiquette</h4>
                      <ul className="driving-hl-list">
                        {pass.drivingInfo.safetyAndEtiquette.map((s, idx) => (
                          <li key={idx}>{s}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="driving-highlight-card" style={{ marginTop: '16px' }}>
                    <h4 className="driving-hl-title"><CompassIcon size={16} /> Motorcycle Touring Guidelines</h4>
                    <ul className="driving-hl-list">
                      {pass.drivingInfo.motorcycleTips.map((m, idx) => (
                        <li key={idx}>{m}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            )}

            {/* Section 6b: Traffic Regulations & Convoy Schedule */}
            {pass.trafficSchedule && (
              <section id="traffic-schedule" className="detail-section-block">
                <h2 className="section-title-heading">{pass.trafficSchedule.title}</h2>
                <div className="traffic-schedule-container lp-card">
                  <div className="traffic-banner-pill">
                    <Clock size={16} /> <span>{pass.trafficSchedule.timingDetails}</span>
                  </div>
                  <div className="traffic-rules-card">
                    <h3 className="traffic-rules-title"><ShieldAlert size={16} /> Convoy Rules &amp; Cut-off Regulations</h3>
                    <ul className="traffic-rules-list">
                      {pass.trafficSchedule.rules.map((rule, idx) => (
                        <li key={idx}>{rule}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            )}

            {/* Section 7: Live Webcams Showcase */}
            {pass.cameras && pass.cameras.length > 0 && (
              <section id="cameras" className="detail-section-block">
                <h2 className="section-title-heading">{pass.name.split('(')[0].trim()} Live Webcams</h2>
                <div className="camera-showcase-container lp-card">
                  <div className="camera-card-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Camera size={18} className="camera-icon-badge" />
                      <h3 className="camera-card-title">{currentCam.title}</h3>
                    </div>
                    <button 
                      className={`btn-refresh-cam ${isRefreshingCam ? 'spinning' : ''}`}
                      onClick={handleRefreshCurrentCam}
                      title="Refresh camera snapshot"
                    >
                      Refresh Snapshot
                    </button>
                  </div>

                  <div className="camera-viewport-wrap">
                    {cameraError ? (
                      <div className="camera-error-view">
                        <Camera size={36} opacity={0.4} />
                        <p>Camera feed temporarily updating</p>
                        <span>Official snapshot will refresh automatically</span>
                      </div>
                    ) : (
                      <>
                        <img
                          src={`${currentCam.image}?t=${cameraTimestamp}`}
                          alt={`${currentCam.title} on ${pass.highway} in ${pass.state}`}
                          className="camera-live-feed-img"
                          onError={() => setCameraError(true)}
                          loading="lazy"
                        />
                        <div className="camera-live-pill">
                          <span className="live-pulsing-dot" /> LIVE CAMERA
                        </div>
                        <div className="camera-timestamp-overlay">
                          {currentCam.location} • Refreshes ~2 min
                        </div>
                      </>
                    )}
                  </div>

                  <div className="camera-card-details">
                    <div className="cam-meta-row">
                      <span className="cam-meta-title">{currentCam.title}</span>
                      <span className="cam-meta-source">{currentCam.source || 'Official Highway Camera'}</span>
                    </div>
                    <div className="cam-meta-sub">
                      <span>{pass.highway} • {currentCam.location}</span>
                    </div>
                    <div className="cam-footer-action">
                      <a 
                        href={currentCam.officialUrl || 'https://traffico.provincia.bz.it'} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="cam-official-link"
                      >
                        View Official Camera Source <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>

                  {/* Multi-Camera Switcher Grid */}
                  {pass.cameras.length > 1 && (
                    <div className="camera-multi-grid">
                      {pass.cameras.map((cam, idx) => (
                        <div 
                          key={idx} 
                          className={`cam-thumb-card ${currentCameraIndex === idx ? 'active' : ''}`}
                          onClick={() => { setCurrentCameraIndex(idx); setCameraError(false); }}
                        >
                          <img src={cam.image} alt={cam.title} className="cam-thumb-img" loading="lazy" />
                          <div className="cam-thumb-caption">
                            <span className="cam-thumb-name">{cam.title}</span>
                            <span className="cam-thumb-loc">{cam.milepost || cam.location}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Section 8: Quick Facts */}
            <section id="quick-facts" className="detail-section-block">
              <h2 className="section-title-heading">{pass.name.split('(')[0].trim()} Quick Facts</h2>
              <div className="quick-facts-container lp-card">
                <div className="quick-facts-grid">
                  <div className="fact-item-card">
                    <div className="fact-icon-box"><Mountain size={20} /></div>
                    <div className="fact-meta">
                      <span className="fact-label">Summit Altitude</span>
                      <strong className="fact-value">{pass.elevationFt.toLocaleString()} ft ({pass.elevationM.toLocaleString()} m)</strong>
                    </div>
                  </div>

                  <div className="fact-item-card">
                    <div className="fact-icon-box"><Compass size={20} /></div>
                    <div className="fact-meta">
                      <span className="fact-label">Mountain Range</span>
                      <strong className="fact-value">{pass.quickFacts?.mountainRange || 'Ortler Alps / Rhaetian Alps'}</strong>
                    </div>
                  </div>

                  <div className="fact-item-card">
                    <div className="fact-icon-box"><Flag size={20} /></div>
                    <div className="fact-meta">
                      <span className="fact-label">Country &amp; Region</span>
                      <strong className="fact-value">{pass.state}, {pass.country}</strong>
                    </div>
                  </div>

                  <div className="fact-item-card">
                    <div className="fact-icon-box"><Navigation size={20} /></div>
                    <div className="fact-meta">
                      <span className="fact-label">Connects</span>
                      <strong className="fact-value">{pass.quickFacts?.connects || 'Prato allo Stelvio (Val Venosta) with Bormio (Valtellina)'}</strong>
                    </div>
                  </div>

                  <div className="fact-item-card">
                    <div className="fact-icon-box"><Car size={20} /></div>
                    <div className="fact-meta">
                      <span className="fact-label">Nearest Towns</span>
                      <strong className="fact-value">{pass.quickFacts?.nearestTown || 'Bormio (21 km), Trafoi (14 km), Prato (24 km)'}</strong>
                    </div>
                  </div>

                  <div className="fact-item-card">
                    <div className="fact-icon-box"><Ruler size={20} /></div>
                    <div className="fact-meta">
                      <span className="fact-label">Road &amp; Classification</span>
                      <strong className="fact-value">{pass.quickFacts?.roadType || 'Strada Statale 38 (SS38)'}</strong>
                    </div>
                  </div>

                  <div className="fact-item-card">
                    <div className="fact-icon-box"><Calendar size={20} /></div>
                    <div className="fact-meta">
                      <span className="fact-label">Best Time to Visit</span>
                      <strong className="fact-value">{pass.quickFacts?.bestTime || 'Late June to Mid-September'}</strong>
                    </div>
                  </div>

                  <div className="fact-item-card">
                    <div className="fact-icon-box"><Layers size={20} /></div>
                    <div className="fact-meta">
                      <span className="fact-label">Total Switchbacks</span>
                      <strong className="fact-value">87 Hairpins (48 NE + 39 SW)</strong>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: Location & Interactive Map */}
            <section id="route-map" className="detail-section-block">
              <h2 className="section-title-heading">{pass.name.split('(')[0].trim()} Map</h2>
              <div className="map-and-route-container lp-card">
                <div className="map-frame-header">
                  <div>
                    <h3 className="map-frame-title">{pass.name} Corridor ({pass.highway})</h3>
                    <span className="map-frame-sub">GPS Coordinates: {pass.coordinates.lat.toFixed(4)}&deg; N, {pass.coordinates.lng.toFixed(4)}&deg; E • Summit Elevation: {pass.elevationFt.toLocaleString()} ft ({pass.elevationM.toLocaleString()} m)</span>
                  </div>
                  <button onClick={() => navigate('/map')} className="btn btn-outline-primary">
                    View on Fullscreen Map <ExternalLink size={14} />
                  </button>
                </div>

                <div className="map-embed-wrapper">
                  <MapComponent
                    passes={[pass]}
                    selectedPass={pass}
                    height="340px"
                    zoomLevel={11}
                    center={[pass.coordinates.lat, pass.coordinates.lng]}
                    showGlobalClusters={false}
                  />
                </div>

                {pass.routeDetails && (
                  <div className="route-waypoints-section">
                    <h4 className="waypoints-heading"><Navigation size={16} /> Route Waypoints &amp; Key Waymarkers</h4>
                    <div className="waypoints-stepper">
                      {pass.routeDetails.waypoints.map((wp, idx) => (
                        <div key={idx} className="waypoint-step">
                          <span className="waypoint-dot" />
                          <span className="waypoint-text">{wp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Section 9b: Travel Distances Table */}
            {pass.distancesTable && pass.distancesTable.length > 0 && (
              <section id="distances" className="detail-section-block">
                <h2 className="section-title-heading">{pass.name.split('(')[0].trim()} Travel Distances</h2>
                <div className="distances-table-container lp-card">
                  <div className="table-responsive">
                    <table className="pass-distances-table">
                      <thead>
                        <tr>
                          <th>Destination</th>
                          <th>Approx. Distance</th>
                          <th>Route &amp; Highway</th>
                          <th>Travel Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pass.distancesTable.map((dist, idx) => (
                          <tr key={idx}>
                            <td className="dest-cell"><strong>{dist.location}</strong></td>
                            <td className="dist-cell"><span className="dist-badge">{dist.distance}</span></td>
                            <td className="route-cell">{dist.route}</td>
                            <td className="notes-cell">{dist.notes || '—'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            )}

            {/* Section 10: Where Is Pass Located & Geography/History */}
            <section id="about" className="detail-section-block">
              <h2 className="section-title-heading">Where Is {pass.name.split('(')[0].trim()} Located?</h2>
              <div className="about-narrative-container lp-card">
                <p className="narrative-p">
                  <strong>{pass.name}</strong> is situated in the <strong>{pass.quickFacts?.mountainRange || 'Himalayan Range'}</strong> of <strong>{pass.state}, {pass.country}</strong>, at an official summit elevation of <strong>{pass.elevationFt.toLocaleString()} feet ({pass.elevationM.toLocaleString()} meters)</strong> above sea level. Traversed by <strong>{pass.highway}</strong>, it {pass.quickFacts?.connects ? `connects ${pass.quickFacts.connects}` : pass.description}.
                </p>

                {pass.narrativeSections ? (
                  pass.narrativeSections.map((sec, idx) => (
                    <React.Fragment key={idx}>
                      <h3 className="narrative-subheading">{sec.title}</h3>
                      <p className="narrative-p">{sec.content}</p>
                    </React.Fragment>
                  ))
                ) : (
                  <>
                    <h3 className="narrative-subheading">Geography &amp; Connectivity</h3>
                    <p className="narrative-p">{pass.overview?.summary || pass.description}</p>
                  </>
                )}
              </div>
            </section>

            {/* Section 11: FAQs */}
            <section id="faqs" className="detail-section-block">
              <h2 className="section-title-heading">Frequently Asked Questions about {pass.name.split('(')[0].trim()}</h2>
              <div className="faqs-accordion-container lp-card">
                {pass.faqs && pass.faqs.length > 0 ? (
                  pass.faqs.map((faq, idx) => (
                    <div key={idx} className="faq-accordion-item">
                      <button 
                        className={`faq-question-btn ${activeFaqIndex === idx ? 'open' : ''}`}
                        onClick={() => setActiveFaqIndex(activeFaqIndex === idx ? null : idx)}
                        aria-expanded={activeFaqIndex === idx}
                      >
                        <span className="faq-q-text">&#10067; {faq.question}</span>
                        {activeFaqIndex === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                      <div className={`faq-answer-pane ${activeFaqIndex === idx ? 'open' : ''}`}>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="overview-text">No pass-specific FAQs currently listed.</p>
                )}
              </div>
            </section>

            {/* Section 12: Explore Related Mountain Passes & Internal Linking */}
            <section id="related-passes" className="detail-section-block">
              <h2 className="section-title-heading">Explore Related Mountain Passes</h2>
              <div className="internal-links-cards-grid">
                {/* India / Himalaya passes always first for Indian passes */}
                {(pass.country === 'India' || pass.continent === 'Asia') ? (
                  <>
                    <div className="internal-link-card lp-card" onClick={() => navigate('/passes/india/ladakh/khardung-la')}>
                      <div className="link-card-badge">Ladakh, India</div>
                      <h3 className="link-card-title">Khardung La Pass (17,582 ft)</h3>
                      <p className="link-card-desc">One of the world's highest motorable passes, connecting Leh with the Nubra Valley. Live road status, camera and travel guide.</p>
                      <span className="link-card-action">View Khardung La &rarr;</span>
                    </div>

                    <div className="internal-link-card lp-card" onClick={() => navigate('/passes/india/himachal-pradesh/rohtang-pass')}>
                      <div className="link-card-badge">Himachal Pradesh, India</div>
                      <h3 className="link-card-title">Rohtang Pass (13,058 ft)</h3>
                      <p className="link-card-desc">The iconic Himalayan pass on the Manali–Leh corridor. Check live road status, NGT permits, and mountain webcams.</p>
                      <span className="link-card-action">View Rohtang Pass &rarr;</span>
                    </div>

                    {pass.slug.includes('zoji') && (
                      <div className="internal-link-card lp-card" onClick={() => navigate('/passes?country=India')}>
                        <div className="link-card-badge">India</div>
                        <h3 className="link-card-title">All Indian Mountain Passes</h3>
                        <p className="link-card-desc">Browse live road conditions, status, and travel guides for Himalayan and Ladakhi passes in India.</p>
                        <span className="link-card-action">View India Passes &rarr;</span>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="internal-link-card lp-card" onClick={() => navigate('/passes?country=Italy')}>
                      <div className="link-card-badge">Italy</div>
                      <h3 className="link-card-title">Italian Mountain Passes</h3>
                      <p className="link-card-desc">Check live road conditions, webcams, and weather across the Italian Alps, Dolomites, and Apennines.</p>
                      <span className="link-card-action">View Italy Passes &rarr;</span>
                    </div>

                    <div className="internal-link-card lp-card" onClick={() => navigate('/passes?continent=Europe')}>
                      <div className="link-card-badge">European Alps</div>
                      <h3 className="link-card-title">Mountain Passes in Europe</h3>
                      <p className="link-card-desc">Discover high alpine corridors across Switzerland, Italy, France, and Austria with real-time pass statuses.</p>
                      <span className="link-card-action">Explore Europe Passes &rarr;</span>
                    </div>

                    <div className="internal-link-card lp-card" onClick={() => navigate('/passes/switzerland/valais-uri/furka-pass')}>
                      <div className="link-card-badge">Swiss Alps</div>
                      <h3 className="link-card-title">Furka Pass (7,969 ft)</h3>
                      <p className="link-card-desc">Experience the iconic James Bond Goldfinger route, Rhone Glacier ice grotto, and Hotel Belvédère in Switzerland.</p>
                      <span className="link-card-action">View Furka Pass &rarr;</span>
                    </div>

                    <div className="internal-link-card lp-card" onClick={() => navigate('/passes/india/himachal-pradesh/rohtang-pass')}>
                      <div className="link-card-badge">Himalayas</div>
                      <h3 className="link-card-title">Rohtang Pass (13,058 ft)</h3>
                      <p className="link-card-desc">Check live road status, NGT permits, and mountain cameras in the Pir Panjal Range of Himachal Pradesh.</p>
                      <span className="link-card-action">View Rohtang Pass &rarr;</span>
                    </div>

                    <div className="internal-link-card lp-card" onClick={() => navigate('/passes/new-zealand/canterbury-west-coast/arthurs-pass')}>
                      <div className="link-card-badge">Southern Alps</div>
                      <h3 className="link-card-title">Arthur's Pass (3,018 ft)</h3>
                      <p className="link-card-desc">Monitor live road status, Otira Viaduct CCTV, and alpine weather across New Zealand's Great Alpine Highway.</p>
                      <span className="link-card-action">View Arthur's Pass &rarr;</span>
                    </div>
                  </>
                )}

                <div className="internal-link-card lp-card" onClick={() => navigate('/map')}>
                  <div className="link-card-badge">Interactive Map</div>
                  <h3 className="link-card-title">Live Mountain Pass Map</h3>
                  <p className="link-card-desc">Explore global mountain passes with live status pins, webcams, and satellite terrain — including all Himalayan and Indian passes.</p>
                  <span className="link-card-action">Open Map &rarr;</span>
                </div>
              </div>
            </section>

            {/* Section 13: Authoritative Data Sources Attribution */}
            {pass.dataSources && pass.dataSources.length > 0 && (
              <section className="detail-section-block">
                <div className="data-sources-banner lp-card">
                  <h4 className="sources-title">Authoritative Data Sources &amp; Attribution</h4>
                  <p className="sources-sub">
                    LivePassWatch verifies all pass statuses, road restrictions, and weather warnings directly with official governmental and highway transport authorities:
                  </p>
                  <div className="sources-pills-list">
                    {pass.dataSources.map((ds, i) => (
                      <a
                        key={i}
                        href={ds.url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="source-pill"
                      >
                        <ExternalLink size={12} />
                        <span>{ds.type}: <strong>{ds.name}</strong></span>
                      </a>
                    ))}
                  </div>
                </div>
              </section>
            )}

          </main>

          {/* Right Sidebar: Nearby Passes + Mini Map + Checklist */}
          <aside className="pass-detail-sidebar">
            {/* Nearby Passes Widget */}
            <div className="sidebar-nearby-card lp-card">
              <h3 className="sidebar-card-title">Related Alpine Passes</h3>
              <div className="sidebar-passes-list">
                {pass.nearbyPasses && pass.nearbyPasses.length > 0 ? (
                  pass.nearbyPasses.map((near) => (
                    <div 
                      key={near.id} 
                      className="sidebar-pass-item"
                      onClick={() => navigate(getPassUrl(near))}
                    >
                      <div className="s-pass-top">
                        <span className="s-pass-name">{near.name}</span>
                        <StatusBadge status={near.status} />
                      </div>
                      <div className="s-pass-meta">
                        <span>{near.state}</span>
                        <span>•</span>
                        <span>{near.elevationFt.toLocaleString()} ft</span>
                        <span>•</span>
                        <span>{near.highway}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="overview-text">No nearby passes recorded.</p>
                )}
              </div>
            </div>

            {/* Sidebar Map Card */}
            <div className="sidebar-map-card lp-card">
              <div className="sidebar-map-header">
                <h3 className="sidebar-card-title">Mountain Pass Map</h3>
                <Link to="/map" className="sidebar-map-link">Full Map &rarr;</Link>
              </div>
              <MapComponent
                passes={passesData}
                selectedPass={pass}
                height="300px"
                zoomLevel={5}
                center={[pass.coordinates.lat, pass.coordinates.lng]}
                showGlobalClusters={true}
              />
            </div>

            {/* Quick Travel Checklist */}
            <div className="sidebar-resources-card lp-card">
              <h3 className="sidebar-card-title">{pass.name.split('(')[0].trim()} Travel Checklist</h3>
              <ul className="sidebar-check-list">
                <li><Check size={14} className="check-green" /> Check live road opening status before departing</li>
                {pass.slug.includes('zoji') ? (
                  <>
                    <li><Check size={14} className="check-green" /> Confirm daily convoy cut-off times at Sonamarg / Minamarg</li>
                    <li><Check size={14} className="check-green" /> High ground clearance / 4x4 recommended for mud stretches</li>
                    <li><Check size={14} className="check-green" /> Use 1st/2nd gear engine braking on Captain Morh switchbacks</li>
                    <li><Check size={14} className="check-green" /> Refuel full tank at Sonamarg or Dras before pass ascent</li>
                    <li><Check size={14} className="check-green" /> Pack warm windproof layers for Zero Point high altitude</li>
                    <li><Check size={14} className="check-green" /> Download offline GPS maps (mobile signal is weak on pass)</li>
                  </>
                ) : (
                  <>
                    <li><Check size={14} className="check-green" /> Headlights on for dark rock galleries &amp; tunnels</li>
                    <li><Check size={14} className="check-green" /> Use low gear (1st/2nd) for engine braking on descents</li>
                    <li><Check size={14} className="check-green" /> Yield right of way to uphill traffic &amp; commercial vehicles</li>
                    <li><Check size={14} className="check-green" /> Warm windproof layers &amp; gloves for summit winds</li>
                    <li><Check size={14} className="check-green" /> Verify local tire traction &amp; permit requirements</li>
                  </>
                )}
              </ul>
              <Link to="/resources" className="btn btn-outline-primary btn-block">
                View Mountain Travel Tips
              </Link>
            </div>
          </aside>
        </div>

        {/* Bottom Support & FAQs Card */}
        <div className="detail-bottom-faq-banner lp-card">
          <div className="bottom-faq-left">
            <div className="faq-icon-wrap">
              <HelpCircle size={28} />
            </div>
            <div>
              <h3 className="bottom-faq-title">Planning an Alpine Journey across {pass.name.split('(')[0].trim()}?</h3>
              <p className="bottom-faq-desc">
                Access real-time weather forecasts, switchback driving guidelines, live webcam updates, and road restrictions.
              </p>
            </div>
          </div>
          <button onClick={() => navigate('/resources')} className="btn btn-outline-primary">
            View Travel Resources
          </button>
        </div>

        {/* Trust Bar */}
        <TrustBar />
      </div>
    </div>
  );
};
