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
import { getPassUrl, passesData } from '../data/passes';
import { passSeoDetails } from '../data/passSeoData';
import { usePasses } from '../context/PassesContext';
import { MountainPass } from '../types';
import { StatusBadge } from '../components/StatusBadge';
import { TrustBar } from '../components/TrustBar';
import { MapComponent } from '../components/MapComponent';
import { NotFoundPage } from './StaticPages';
import { SEOHelper } from '../components/SEOHelper';
import { CameraProvider } from '../components/CameraProvider';
import { UserCameraModal } from '../components/UserCameraModal';
import './PassDetailPage.css';

export const PassDetailPage: React.FC = () => {
  const { passes } = usePasses();
  const { slug } = useParams<{ slug?: string; country?: string; state?: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  // Robust slug extraction: from route params or last segment of pathname
  const pathSegments = location.pathname.split('?')[0].split('/').filter(Boolean);
  const lastPathSegment = pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : undefined;
  const targetSlug = slug || (lastPathSegment && lastPathSegment !== 'passes' ? lastPathSegment : '');
  
  const basePass = passes.find(p => p.slug.toLowerCase() === targetSlug.toLowerCase() || p.id.toLowerCase() === targetSlug.toLowerCase()) || null;

  // State for the pass data (so it can be dynamically updated with real-time API values)
  const [pass, setPass] = useState<MountainPass | null>(basePass);
  const [liveDataError, setLiveDataError] = useState(false);
  const [history, setHistory] = useState<any[]>([]);
  const [verificationMeta, setVerificationMeta] = useState<any | null>(null);

  // Helper to format dynamic relative time
  const formatTime = (timeStr: string) => {
    if (!timeStr) return 'N/A';
    const date = new Date(timeStr);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  // Sync pass state and fetch live data when route changes
  useEffect(() => {
    const activePass = passes.find(p => p.slug.toLowerCase() === targetSlug.toLowerCase() || p.id.toLowerCase() === targetSlug.toLowerCase()) || null;
    setPass(activePass);
    setLiveDataError(false);
    setHistory([]);
    setVerificationMeta(null);

    if (activePass) {
      // Fetch dynamic verification details and history from our general endpoint
      fetch(`/api/passes/${activePass.id}`)
        .then(res => {
          if (!res.ok) throw new Error('Not found in dynamic database');
          return res.json();
        })
        .then(data => {
          if (data.success) {
            setHistory(data.history || []);
            setVerificationMeta(data.pass);
            
            // Sync status and other fields from the database pass
            setPass(prev => {
              if (!prev || prev.id !== activePass.id) return prev;
              return {
                ...prev,
                status: data.pass.status,
                statusDetail: data.pass.status_reason || prev.statusDetail,
                roadCondition: data.pass.status_reason || prev.roadCondition,
                chainRequirement: data.pass.restrictions && data.pass.restrictions !== 'None'
                  ? data.pass.restrictions
                  : prev.chainRequirement,
                lastUpdated: 'Just now',
                officialSource: data.pass.official_source_url || prev.officialSource
              };
            });
          }
        })
        .catch(err => {
          console.log(`Dynamic DB data not loaded for ${activePass.id}:`, err);
          if (activePass.id === 'status-pass' || activePass.id === 'loup-loup-pass') {
            setLiveDataError(true);
          }
        });
    }
  }, [targetSlug, passes]);

  // UI States
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentCameraIndex, setCurrentCameraIndex] = useState(0);
  const [showShareToast, setShowShareToast] = useState(false);
  const [cameraTimestamp, setCameraTimestamp] = useState<string>(Date.now().toString());
  const [cameraError, setCameraError] = useState(false);
  const [isRefreshingCam, setIsRefreshingCam] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);
  const [isUserCamModalOpen, setIsUserCamModalOpen] = useState(false);

  // If pass is not found in database, return custom 404 Page (Phase 3 & 29 compliance)
  if (!pass) {
    return <NotFoundPage />;
  }

  // Check localStorage for favorite state & setup auto-refresh
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('lp_favorites') || '[]');
    setIsFavorite(favorites.includes(pass.id));
    setCameraError(false);
    setCameraTimestamp(Date.now().toString());
    setCurrentCameraIndex(0);

    // Auto-refresh camera snapshots every 60-120 seconds intelligently
    const camTimer = setInterval(() => {
      setCameraTimestamp(Date.now().toString());
    }, 60000);
    return () => clearInterval(camTimer);
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
  const canonicalPath = getPassUrl(pass);
  const canonicalUrl = `https://www.livepasswatch.info${canonicalPath}`;
  const passFullImage = pass.image.startsWith('http') ? pass.image : `https://www.livepasswatch.info${pass.image.startsWith('/') ? '' : '/'}${pass.image}`;

  const imageAltText = (pass.slug === 'bernina-pass')
    ? 'Bernina Pass mountain road in the Swiss Alps'
    : (pass.slug === 'gotthard-pass')
    ? 'Gotthard Pass mountain road in the Swiss Alps'
    : (pass.slug === 'grimsel-pass')
    ? 'Grimsel Pass mountain road in the Swiss Alps'
    : (pass.slug === 'great-st-bernard-pass')
    ? 'Great St Bernard Pass road and Alpine mountain landscape'
    : (pass.slug === 'col-du-galibier')
    ? 'Col du Galibier mountain pass road and summit monument in the French Alps'
    : (pass.slug === 'chang-la-pass' || pass.slug === 'chang-la')
    ? 'Cartoon illustration of Chang La Pass sign and snowy mountain road in Ladakh'
    : pass.slug === 'trollstigen-pass'
    ? 'Trollstigen Pass mountain road with winding hairpin bends in Norway'
    : pass.slug === 'zoji-la-pass' || pass.slug === 'zoji-la'
    ? 'Zoji La Pass in Jammu and Kashmir'
    : pass.slug === 'stelvio-pass'
    ? 'Stelvio Pass in Italy'
    : pass.slug === 'sani-pass'
    ? 'Sani Pass mountain road between South Africa and Lesotho'
    : pass.slug === 'rohtang-pass'
    ? 'Rohtang Pass in Himachal Pradesh'
    : pass.slug === 'khardung-la'
    ? 'Khardung La Pass in Ladakh'
    : pass.slug === 'nathu-la'
    ? 'Nathu La Pass mountain road in Sikkim, India'
    : `${pass.name} on ${pass.highway} in ${pass.state}`;

  const seoDetails = passSeoDetails[pass.slug] || passSeoDetails[pass.id];
  const seoTitle = `${pass.name} Live Webcam & Open/Closed Status – Updated Today`;
  const seoDesc = `Live ${pass.name} webcam feeds, highway conditions, and real-time open/closed status on ${pass.highway}, ${pass.state ? `${pass.state}, ` : ''}${pass.country}. Verified and updated ${pass.lastUpdated}.`;

  const displayedStatus = liveDataError ? 'NEEDS_VERIFICATION' : pass.status;
  const displayedStatusDetail = liveDataError 
    ? `Live status verification failed. Official status could not be reverified.` 
    : pass.statusDetail;

  const officialSourceDisplay = pass.dataSources && pass.dataSources.length > 0
    ? pass.dataSources[0].name
    : (pass.slug === 'trollstigen-pass' ? 'Norwegian Public Roads Administration (Statens vegvesen)' : (pass.slug === 'stelvio-pass' ? 'ANAS SpA & Servizio Strade Provincia Autonoma di Bolzano' : 'Official Department of Transportation'));

  const weatherSourceDisplay = pass.dataSources && pass.dataSources.length > 2
    ? pass.dataSources[2].name
    : (pass.slug === 'trollstigen-pass' ? 'Norwegian Meteorological Institute (Yr.no)' : (pass.slug === 'stelvio-pass' ? 'MeteoTrentino & Servizio Meteorologico Aeronautica Militare' : 'Official Meteorological Service'));

  // High-Intent FAQ Structured Data Schema
  const allFaqs = [
    {
      question: `Is ${pass.name} open today?`,
      answer: `${pass.name} is currently ${displayedStatus} (${displayedStatusDetail || 'open to all vehicles'}) on ${pass.highway}, ${pass.state ? `${pass.state}, ` : ''}${pass.country}. Status verified by official transportation authorities. Last updated: ${pass.lastUpdated}.`
    },
    {
      question: `Does ${pass.name} have a live webcam?`,
      answer: `Yes, ${pass.name} features live summit webcams, highway camera feeds, and real-time road condition views directly on LivePassWatch.`
    },
    ...(pass.faqs || [])
  ];

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
        "name": seoTitle,
        "description": seoDesc,
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
      {
        "@type": "FAQPage",
        "mainEntity": allFaqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

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
          {pass.slug === 'bernina-pass' ? (
            <>
              <Link to="/passes">Passes</Link>
              <ChevronRight size={14} className="crumb-sep" />
              <Link to="/passes?country=Switzerland">Switzerland</Link>
              <ChevronRight size={14} className="crumb-sep" />
              <Link to="/passes?country=Switzerland">Graubünden</Link>
            </>
          ) : pass.slug === 'gotthard-pass' ? (
            <>
              <Link to="/passes">Passes</Link>
              <ChevronRight size={14} className="crumb-sep" />
              <Link to="/passes?country=Switzerland">Switzerland</Link>
              <ChevronRight size={14} className="crumb-sep" />
              <Link to="/passes?country=Switzerland">Uri &amp; Ticino</Link>
            </>
          ) : pass.slug === 'great-st-bernard-pass' ? (
            <>
              <Link to="/passes">Passes</Link>
              <ChevronRight size={14} className="crumb-sep" />
              <Link to="/passes?country=Switzerland">Switzerland</Link>
              <ChevronRight size={14} className="crumb-sep" />
              <Link to="/passes?state=Valais">Valais</Link>
            </>
          ) : pass.slug === 'col-du-galibier' ? (
            <>
              <Link to="/passes">Passes</Link>
              <ChevronRight size={14} className="crumb-sep" />
              <Link to="/passes?country=France">France</Link>
              <ChevronRight size={14} className="crumb-sep" />
              <Link to="/passes?state=Hautes-Alpes%20%26%20Savoie">Hautes-Alpes &amp; Savoie</Link>
            </>
          ) : (pass.slug === 'chang-la-pass' || pass.slug === 'chang-la') ? (
            <>
              <Link to="/passes?country=India">India</Link>
              <ChevronRight size={14} className="crumb-sep" />
              <Link to="/passes?state=Ladakh">Ladakh</Link>
              <ChevronRight size={14} className="crumb-sep" />
              <Link to="/passes">Mountain Passes</Link>
            </>
          ) : pass.slug === 'trollstigen-pass' ? (
            <>
              <Link to={`/passes?country=${encodeURIComponent(pass.country.split('/')[0].trim())}`}>{pass.country.split('/')[0].trim()}</Link>
              <ChevronRight size={14} className="crumb-sep" />
              <Link to="/passes">Mountain Passes</Link>
            </>
          ) : (
            <>
              <Link to="/passes">Passes</Link>
              <ChevronRight size={14} className="crumb-sep" />
              <Link to={`/passes?country=${encodeURIComponent(pass.country.split('/')[0].trim())}`}>{pass.country.split('/')[0].trim()}</Link>
              {pass.state && (
                <>
                  <ChevronRight size={14} className="crumb-sep" />
                  <Link to={`/passes?state=${encodeURIComponent(pass.state.split('/')[0].trim())}`}>{pass.state.split('/')[0].trim()}</Link>
                </>
              )}
            </>
          )}
          <ChevronRight size={14} className="crumb-sep" />
          <span className="current-crumb">{pass.name}</span>
        </nav>

        {/* Pass Header & Action Bar */}
        <header className="pass-detail-header-row">
          <div className="pass-title-group">
            {/* Live Status & Last Updated Bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '14px' }}>
              <StatusBadge status={displayedStatus} size="lg" />
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', borderRadius: '9999px', backgroundColor: 'rgba(56, 189, 248, 0.12)', color: 'var(--primary)', fontSize: '13px', fontWeight: '700', border: '1px solid rgba(56, 189, 248, 0.25)' }}>
                <Clock size={14} />
                <span>Last updated: {pass.lastUpdated}</span>
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '9999px', backgroundColor: 'var(--bg-surface-subtle)', color: 'var(--text-secondary)', fontSize: '13px', border: '1px solid var(--border-color)' }}>
                <Mountain size={14} />
                <span>Elevation: {pass.elevationFt.toLocaleString()} ft ({pass.elevationM.toLocaleString()} m)</span>
              </div>
            </div>

            <div className="title-and-star">
              <h1 className="pass-main-heading">{pass.customSeo?.h1 || `${pass.name} Live Webcam & Road Conditions`}</h1>
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
              <span>{pass.state ? `${pass.state}, ` : ''}{pass.country}</span>
              <span className="dot-sep">•</span>
              <span>Summit: {pass.elevationFt.toLocaleString()} ft ({pass.elevationM.toLocaleString()} m)</span>
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
          {verificationMeta && <a href="#verification" className="quick-nav-link">Verification</a>}
          {(pass.cameras && pass.cameras.length > 0 || pass.id === 'khyber-pass' || pass.slug === 'chang-la-pass' || pass.slug === 'chang-la') && <a href="#cameras" className="quick-nav-link">Webcam Status</a>}
          <a href="#road-conditions" className="quick-nav-link">Road Conditions</a>
          {pass.openingDateInfo && <a href="#opening-dates" className="quick-nav-link">Opening Dates</a>}
          {pass.seasonalClosureInfo && <a href="#winter-closure" className="quick-nav-link">Winter Closure</a>}
          <a href="#weather" className="quick-nav-link">Weather &amp; Temp</a>
          {pass.trafficSchedule && <a href="#traffic-schedule" className="quick-nav-link">Traffic &amp; Convoys</a>}
          {pass.cyclingInfo && <a href="#cycling" className="quick-nav-link">Cycling Guide</a>}
          {pass.drivingInfo && <a href="#driving" className="quick-nav-link">Driving &amp; Safety</a>}
          <a href="#quick-facts" className="quick-nav-link">Quick Facts</a>
          <a href="#route-map" className="quick-nav-link">Map &amp; Route</a>
          {pass.distancesTable && pass.distancesTable.length > 0 && <a href="#distances" className="quick-nav-link">Distances</a>}
          <a href="#about" className="quick-nav-link">About {pass.name.split('(')[0].trim()}</a>
          <a href="#travel-guidance" className="quick-nav-link">Travel Info</a>
          <a href="#faqs" className="quick-nav-link">FAQs</a>
          <a href="#related-passes" className="quick-nav-link">Related Passes</a>
          <a href="#data-sources" className="quick-nav-link">Data Sources</a>
        </nav>

        {/* AdSense Top Banner Placement */}
        <div className="adsense-placeholder top-ad-banner" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F9FAFB',
          border: '1px dashed #E5E7EB',
          borderRadius: '6px',
          height: '90px',
          margin: '0 0 24px 0',
          fontSize: '12px',
          color: '#9CA3AF'
        }}>
          <span>Advertisement Place-holder (AdSense Compliant)</span>
        </div>

        {/* 2-Column Main Layout: Left Content Column + Right Sidebar */}
        <div className="pass-detail-body-grid">
          {/* Main Left Column */}
          <main className="pass-main-content-col">

            {pass.slug === 'col-du-galibier' && (
              <div className="galibier-regulations-callout lp-card" style={{
                borderLeft: '4px solid #3B82F6',
                padding: '20px',
                marginBottom: '24px',
                backgroundColor: 'rgba(59, 130, 246, 0.04)',
                borderRadius: '6px'
              }}>
                <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px', color: '#1E3A8A' }}>
                  <ShieldCheck size={20} color="#3B82F6" />
                  <span>Important French Alpine Regulations (D902 Tunnel &amp; Loi Montagne II)</span>
                </h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: '#374151' }}>
                  <strong>Historic Galibier Tunnel (2,556 m / 8,386 ft):</strong> Alternating three-color traffic lights (feux tricolores) regulate single-lane vehicle passage. Height limit: 4.1 m, width limit: 2.4 m, weight limit: 3.5 tonnes. <em>Cyclists, pedestrians, and hazardous goods vehicles are strictly prohibited inside the tunnel and must use the 2,642 m summit crest route.</em>
                </p>
                <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px', fontSize: '13.5px', color: '#4B5563', lineHeight: '1.6' }}>
                  <li><strong>Winter Equipment Mandate (Loi Montagne II):</strong> Between November 1 and March 31, all vehicles traveling in Savoie (73) and Hautes-Alpes (05) must either be equipped with 4 winter-certified tires (3PMSF) or carry removable anti-skid devices (snow chains or textile socks).</li>
                  <li><strong>Seasonal Winter Closure:</strong> D902 closes annually from late October/November until late May/early June. Snow blowers clear up to 8 meters of snowpack in May.</li>
                  <li><strong>Tour de France Monument:</strong> The monument to Tour founder Henri Desgrange is located at the south portal of the tunnel.</li>
                </ul>
              </div>
            )}

            {pass.slug === 'trollstigen-pass' && (
              <div className="trollstigen-restrictions-callout lp-card" style={{
                borderLeft: '4px solid #F59E0B',
                padding: '20px',
                marginBottom: '24px',
                backgroundColor: 'rgba(245, 158, 11, 0.05)',
                borderRadius: '6px'
              }}>
                <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px', color: '#92400E' }}>
                  <ShieldAlert size={20} color="#F59E0B" />
                  <span>Important Vehicle Length &amp; Safety Notice (Fv63)</span>
                </h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: '#4B5563' }}>
                  <strong>Maximum Vehicle Length: 13.1 meters (43 ft)</strong>. Vehicles exceeding 13.1 meters are strictly prohibited from navigating the Trollstigen switchbacks due to tight turning radiuses across the 11 hairpin bends.
                </p>
                <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px', fontSize: '13.5px', color: '#4B5563', lineHeight: '1.6' }}>
                  <li><strong>Seasonal Winter Closure:</strong> Fv63 over Trollstigen is closed every winter (typically late October to late May/early June) due to heavy snowdrifts and avalanche hazard.</li>
                  <li><strong>Rockfall Monitoring:</strong> Statens vegvesen actively inspects the rock face above the hairpins. Always follow official road signs and electronic message displays.</li>
                  <li><strong>Toll-Free Route:</strong> Trollstigen is a public county road (Fv63) with no toll charges.</li>
                </ul>
              </div>
            )}

            {pass.id === 'status-pass' && (
              <div className="status-pass-editorial-callout lp-card" style={{
                borderLeft: '4px solid #3B82F6',
                padding: '20px',
                marginBottom: '24px',
                backgroundColor: 'rgba(59, 130, 246, 0.04)',
                borderRadius: '6px'
              }}>
                <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px', color: '#1E3A8A' }}>
                  <Info size={20} color="#3B82F6" />
                  <span>Important Name &amp; Spelling Note</span>
                </h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: '#374151' }}>
                  While travelers frequently search for road conditions and webcams under the name <strong>Status Pass</strong>, 
                  this mountain pass is officially designated and spelled as <strong>Satus Pass</strong> by the Washington State 
                  Department of Transportation (WSDOT). Our real-time data is synchronized directly with WSDOT's official 
                  Satus Pass feeds to ensure you receive the most accurate and up-to-date travel information available.
                </p>
              </div>
            )}

            {pass.id === 'khyber-pass' && (
              <div className="khyber-pass-security-callout lp-card" style={{
                borderLeft: '4px solid #EF4444',
                padding: '20px',
                marginBottom: '24px',
                backgroundColor: 'rgba(239, 68, 68, 0.04)',
                borderRadius: '6px'
              }}>
                <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px', color: '#7F1D1D' }}>
                  <ShieldAlert size={20} color="#EF4444" />
                  <span>Strategic Border Corridor Access Advisory</span>
                </h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: '#4B5563' }}>
                  The Khyber Pass is a strategically sensitive international mountain corridor connecting Pakistan and Afghanistan. 
                  Due to active border controls and security procedures at the Torkham border crossing, access is strictly regulated:
                </p>
                <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px', fontSize: '13.5px', color: '#4B5563', lineHeight: '1.6' }}>
                  <li><strong>Security Permits:</strong> Foreign travelers typically require a Non-Objection Certificate (NOC) and armed security escort from Pakistani authorities.</li>
                  <li><strong>Active Checkpoints:</strong> Travelers must stop and clear multiple civil and military checkpoints, including the main gateway at Jamrud.</li>
                  <li><strong>Border Closures:</strong> The Torkham border post can experience sudden, temporary closures due to bilateral border controls or administrative orders.</li>
                  <li><strong>Local Rules:</strong> Photography is strictly prohibited near military posts, check posts, and the border terminal area. Always follow instructions from border authorities.</li>
                </ul>
              </div>
            )}

            {(pass.slug === 'chang-la-pass' || pass.slug === 'chang-la') && (
              <div className="chang-la-elevation-callout lp-card" style={{
                borderLeft: '4px solid #3B82F6',
                padding: '20px',
                marginBottom: '24px',
                backgroundColor: 'rgba(59, 130, 246, 0.04)',
                borderRadius: '6px'
              }}>
                <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px', color: '#1E3A8A' }}>
                  <Mountain size={20} color="#3B82F6" />
                  <span>Chang La Elevation &amp; Historic Signboard Note</span>
                </h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: '#374151' }}>
                  <strong>Official Survey Elevation: 17,688 feet (5,360 meters)</strong> above sea level. 
                  The iconic yellow Border Roads Organisation (BRO Project HIMANK) signboard at the summit historically displays <strong>17,586 ft</strong> and claims Chang La as the <em>"World's 3rd Highest Motorable Pass"</em>. 
                  While modern satellite GPS surveys confirm its height at 5,360 m (17,688 ft), newer motorable roads over higher Himalayan corridors (such as Umling La at 19,024 ft and Dungri La/Mana Pass at 18,406 ft) mean Chang La is no longer literally the third highest, though it remains one of the world's highest, steepest, and most breathtaking alpine passes.
                </p>
              </div>
            )}
            
            {(pass.slug === 'bernina-pass') && (
              <div className="bernina-editorial-callout lp-card" style={{
                borderLeft: '4px solid #0EA5E9',
                padding: '20px',
                marginBottom: '24px',
                backgroundColor: 'rgba(14, 165, 233, 0.04)',
                borderRadius: '6px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
                  <h3 style={{ margin: 0, fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px', color: '#0369A1' }}>
                    <ShieldCheck size={20} color="#0EA5E9" />
                    <span>Bernina Pass: Year-Round Road Operation &amp; Continental Divide Information</span>
                  </h3>
                  <span style={{ fontSize: '12px', fontWeight: 600, padding: '3px 8px', borderRadius: '4px', backgroundColor: '#E0F2FE', color: '#0369A1', border: '1px solid #BAE6FD' }}>
                    Tiefbauamt Graubünden &amp; Swiss TCS Verified
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: '#374151' }}>
                  <strong>Important Alpine Distinction:</strong> This page monitors the <strong>Bernina Mountain Pass Road (Hauptstrasse 29 / Route 29)</strong> over the 2,328 m (7,638 ft) summit crest. Unlike seasonal Swiss passes (such as Furka, Grimsel, or Susten) that close for 6–7 months, <em>Bernina Pass is maintained OPEN YEAR-ROUND by the Canton of Graubünden road crews with dedicated snowplows</em>. Temporary closures occur only during severe winter blizzards or active avalanche control.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px', marginTop: '12px' }}>
                  <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '6px', padding: '12px 14px' }}>
                    <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#0369A1', marginBottom: '4px' }}>🚗 Hauptstrasse 29 Pass Road (38 km)</div>
                    <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '13px', color: '#4B5563', lineHeight: '1.5' }}>
                      <li><strong>Status:</strong> OPEN YEAR-ROUND (Weather Permitting)</li>
                      <li><strong>Elevation:</strong> 2,328 m (7,638 ft) summit crest</li>
                      <li><strong>Tolls:</strong> 100% Toll-Free (No Swiss Motorway Vignette required)</li>
                      <li><strong>Winter Equipment:</strong> Winter tires (3PMSF) / chains mandatory during storms</li>
                    </ul>
                  </div>
                  <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '6px', padding: '12px 14px' }}>
                    <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#B91C1C', marginBottom: '4px' }}>🚂 RhB Bernina Railway (UNESCO World Heritage)</div>
                    <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '13px', color: '#4B5563', lineHeight: '1.5' }}>
                      <li><strong>Distinct Route:</strong> Parallels Route 29 with Ospizio Bernina station at 2,253 m</li>
                      <li><strong>Continental Divide:</strong> Lej Nair drains to Black Sea; Lago Bianco to Adriatic Sea</li>
                      <li><strong>Transit Alternative:</strong> Operates year-round when road has temporary storm delays</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Section 1: Top-of-Page Live Status Hero */}
            <section id="status" className="detail-section-block">
              <div className="section-title-wrap">
                <h2 className="section-title-heading">
                  {`${pass.name.split('(')[0].trim().toUpperCase()} CURRENT STATUS`}
                </h2>
                <span className="section-timestamp"><Clock size={14} /> Last updated: {pass.lastUpdated}</span>
              </div>

              <div className="status-weather-cards-grid">
                {liveDataError && (
                  <div className="live-data-error-banner lp-card" style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.08)',
                    borderLeft: '4px solid #EF4444',
                    padding: '16px',
                    marginBottom: '16px',
                    borderRadius: '4px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    gridColumn: '1 / -1'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', color: '#EF4444' }}>
                      <ShieldAlert size={18} />
                      <span>Live status verification failed for {pass.name}.</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '14px', color: '#9CA3AF' }}>
                      We were unable to verify current conditions from the official authority web servers.
                    </p>
                    <a href={pass.officialSource || pass.official_source_url || '#'} target="_blank" rel="noopener noreferrer" style={{
                      color: '#3B82F6',
                      textDecoration: 'underline',
                      fontSize: '14px',
                      width: 'fit-content'
                    }}>
                      Check official travel source portal directly
                    </a>
                  </div>
                )}
                {/* Status Hero Card */}
                <div className={`status-hero-card lp-card status-card-${displayedStatus}`}>
                  <div className="status-icon-large">
                    {displayedStatus === 'OPEN' && <CheckCircle2 size={44} className="icon-green" />}
                    {(displayedStatus === 'CAUTION' || displayedStatus === 'RESTRICTED') && <AlertTriangle size={44} className="icon-orange" />}
                    {(displayedStatus === 'CLOSED' || displayedStatus === 'TEMPORARILY_CLOSED' || displayedStatus === 'SEASONAL_CLOSURE') && <XCircle size={44} className="icon-red" />}
                    {displayedStatus === 'MONITORED' && <CheckCircle2 size={44} className="icon-blue" />}
                    {(displayedStatus === 'UNKNOWN' || displayedStatus === 'NEEDS_VERIFICATION') && <AlertTriangle size={44} style={{ color: '#9CA3AF' }} />}
                  </div>
                  <div className="status-hero-info">
                    <div className="status-badge-hero-pill">
                      <span className="live-pulsing-dot" /> {
                        displayedStatus === 'OPEN' ? '🟢 CURRENTLY OPEN' : 
                        displayedStatus === 'CAUTION' ? '⚠️ CAUTION ADVISED' : 
                        displayedStatus === 'RESTRICTED' ? '⚠️ RESTRICTIONS ACTIVE' : 
                        displayedStatus === 'CLOSED' ? '🔴 CURRENTLY CLOSED' : 
                        displayedStatus === 'TEMPORARILY_CLOSED' ? '🔴 TEMPORARILY CLOSED' : 
                        displayedStatus === 'SEASONAL_CLOSURE' ? '🔴 SEASONAL CLOSURE' : 
                        displayedStatus === 'NEEDS_VERIFICATION' ? '⚠️ NEEDS VERIFICATION' : 
                        '⚪ STATUS UNKNOWN'
                      }
                    </div>
                    <div className="status-hero-detail">{displayedStatusDetail}</div>
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

            {/* Section 1b: Verification & Status History */}
            {verificationMeta && (
              <section id="verification" className="detail-section-block" style={{ marginTop: '24px' }}>
                <div className="section-title-wrap">
                  <h2 className="section-title-heading">OFFICIAL SOURCE STATUS VERIFICATION</h2>
                  <span className="section-timestamp"><CheckCircle2 size={14} color="#10B981" /> Verified source data</span>
                </div>

                <div className="lp-card" style={{ padding: '24px', backgroundColor: 'var(--bg-surface)', borderRadius: '8px', border: '1px solid var(--border-color)', marginBottom: '24px' }}>
                  <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 600 }}>Verification Details</h3>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                    <div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>Verification Status</div>
                      <StatusBadge status={verificationMeta.verification_status} size="sm" />
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>Confidence Level</div>
                      <span style={{ fontWeight: 'bold', color: verificationMeta.confidence === 'HIGH' ? '#10B981' : verificationMeta.confidence === 'MEDIUM' ? '#F59E0B' : '#EF4444' }}>
                        {verificationMeta.confidence}
                      </span>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>Last Verified Check</div>
                      <div style={{ fontSize: '14px', fontWeight: 500 }}>{formatTime(verificationMeta.last_checked_at)}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>Last Status Change</div>
                      <div style={{ fontSize: '14px', fontWeight: 500 }}>{formatTime(verificationMeta.last_status_change_at)}</div>
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>Extracted Official Announcement</div>
                    <p style={{ margin: 0, fontSize: '14px', fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      "{verificationMeta.source_evidence || 'No text extracted.'}"
                    </p>
                    {verificationMeta.source_published_at && (
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '8px' }}>
                        Source Announcement Date: {formatTime(verificationMeta.source_published_at)}
                      </div>
                    )}
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px', marginTop: '16px' }}>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>Official Authority Source</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontWeight: 'bold' }}>{verificationMeta.official_authority}</span>
                      <a href={verificationMeta.official_source_url} target="_blank" rel="noopener noreferrer" style={{ color: '#3B82F6', textDecoration: 'underline', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        Visit Official Web Portal <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="lp-card" style={{ padding: '24px', backgroundColor: 'var(--bg-surface)', borderRadius: '8px', border: '1px solid var(--border-color)', marginBottom: '24px' }}>
                  <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 600 }}>How we verify pass status</h3>
                  <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                    LivePassWatch checks official road, transport, police, government, and highway authorities where available. 
                    We employ rules-based validation of official statements to ensure status reliability, rather than relying on AI-generated assumptions. 
                    AI models are only used to summarize verified details into clean travel notifications.
                  </p>
                </div>

                <div className="lp-card" style={{ padding: '24px', backgroundColor: 'var(--bg-surface)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 600 }}>Status Update History</h3>
                  {history.length > 0 ? (
                    <div style={{ overflowX: 'auto' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                        <thead>
                          <tr style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '8px' }}>
                            <th style={{ padding: '10px 8px', fontWeight: 600 }}>Date / Time</th>
                            <th style={{ padding: '10px 8px', fontWeight: 600 }}>Status</th>
                            <th style={{ padding: '10px 8px', fontWeight: 600 }}>Reason / Restriction Details</th>
                            <th style={{ padding: '10px 8px', fontWeight: 600 }}>Official Source</th>
                          </tr>
                        </thead>
                        <tbody>
                          {history.map((h: any) => (
                            <tr key={h.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                              <td style={{ padding: '12px 8px', whiteSpace: 'nowrap' }}>{formatTime(h.timestamp)}</td>
                              <td style={{ padding: '12px 8px' }}><StatusBadge status={h.status} size="sm" /></td>
                              <td style={{ padding: '12px 8px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{h.reason}</td>
                              <td style={{ padding: '12px 8px', whiteSpace: 'nowrap' }}>
                                <a href={h.source_url || verificationMeta.official_source_url} target="_blank" rel="noopener noreferrer" style={{ color: '#3B82F6', textDecoration: 'underline', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                  {h.source} <ExternalLink size={12} />
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p style={{ margin: 0, color: 'var(--text-muted)' }}>No recent status transitions logged in the database for this pass.</p>
                  )}
                </div>
              </section>
            )}

            {/* Section 2: Weather & Temperature Section */}
            <section id="weather" className="detail-section-block">
              <h2 className="section-title-heading">
                {(pass.slug === 'bernina-pass')
                  ? 'Bernina Pass Weather Today'
                  : (pass.slug === 'gotthard-pass')
                  ? 'Gotthard Pass Weather Today'
                  : (pass.slug === 'chang-la-pass' || pass.slug === 'chang-la')
                  ? 'Chang La Weather Today'
                  : pass.slug === 'trollstigen-pass' 
                  ? 'Trollstigen Pass Weather Today' 
                  : `${pass.name.split('(')[0].trim()} Weather`}
              </h2>
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
              <h2 className="section-title-heading">
                {(pass.slug === 'bernina-pass')
                  ? 'Bernina Pass Road Conditions'
                  : (pass.slug === 'gotthard-pass')
                  ? 'Gotthard Pass Road Conditions'
                  : (pass.slug === 'chang-la-pass' || pass.slug === 'chang-la')
                  ? 'Chang La Road Conditions'
                  : pass.slug === 'trollstigen-pass' 
                  ? 'Trollstigen Pass Road Conditions' 
                  : `${pass.name.split('(')[0].trim()} Road Conditions`}
              </h2>
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
                    {(pass.slug === 'bernina-pass')
                      ? 'Hauptstrasse 29 features smooth paved tarmac climbing from Pontresina (1,774 m) over the 2,328 m crest down to Poschiavo (1,014 m) and Tirano (441 m). The northern ascent has gentle 4–7% sweeping grades with wide curves; the southern descent features demanding 8–12% gradients through San Carlo with avalanche protection galleries along Lago Bianco.'
                      : (pass.slug === 'gotthard-pass')
                      ? 'The southern ramp offers two distinct routes: the modern paved Route 2 bypass with broad sweeping curves and protective galleries, or the historic Tremola monument with 24 cobblestone hairpin turns climbing 300m at up to 12% grade.'
                      : (pass.slug === 'chang-la-pass' || pass.slug === 'chang-la')
                      ? 'High-altitude ascent with steep gradients, unpaved gravel stretches, glacial meltwater rivulets on Zingral-summit-Tsultak stretch, loose scree, and icy switchbacks at 17,688 ft.'
                      : pass.slug === 'trollstigen-pass'
                      ? '11 sharp hairpin bends with sustained 10% gradient, narrow roadway, Stigfossen waterfall spray on asphalt, and 13.1m max vehicle length.'
                      : (pass.slug === 'stelvio-pass' 
                        ? '48 stone-walled switchbacks on the South Tyrol ramp (avg 7.4%, max 12%), 39 switchbacks on the Bormio ramp, narrow avalanche galleries, and high-altitude weather exposure.'
                        : 'Steep alpine gradients, winding switchbacks, and localized high-altitude road surface variations.')}
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
                <h2 className="section-title-heading">
                  {(pass.slug === 'bernina-pass')
                    ? 'Bernina Pass Opening Date'
                    : (pass.slug === 'gotthard-pass')
                    ? 'Gotthard Pass Opening Date'
                    : (pass.slug === 'chang-la-pass' || pass.slug === 'chang-la')
                    ? 'Chang La Opening Date'
                    : pass.slug === 'trollstigen-pass' 
                    ? 'When Does Trollstigen Pass Open?' 
                    : `${pass.name.split('(')[0].trim()} Opening Dates ${pass.openingDateInfo.year}`}
                </h2>
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
                    <strong>Notice on Pass Schedule &amp; Winter Maintenance:</strong> {pass.openingDateInfo.notes}
                  </div>
                </div>
              </section>
            )}

            {/* Section 4b: Winter Closure Information */}
            {(pass.seasonalClosureInfo || pass.slug === 'bernina-pass') && (
              <section id="winter-closure" className="detail-section-block">
                <h2 className="section-title-heading">
                  {(pass.slug === 'bernina-pass')
                    ? 'When Does Bernina Pass Close for Winter?'
                    : (pass.slug === 'gotthard-pass')
                    ? 'When Does Gotthard Pass Close for Winter?'
                    : (pass.slug === 'chang-la-pass' || pass.slug === 'chang-la')
                    ? 'When Does Chang La Close for Winter?'
                    : pass.slug === 'trollstigen-pass' 
                    ? 'When Does Trollstigen Pass Close for Winter?' 
                    : 'Seasonal Winter Closure Information'}
                </h2>
                <div className="opening-dates-container lp-card">
                  <div className="opening-banner-pill" style={{ backgroundColor: pass.slug === 'bernina-pass' ? 'rgba(16, 185, 129, 0.08)' : 'rgba(239, 68, 68, 0.08)', color: pass.slug === 'bernina-pass' ? '#047857' : '#EF4444' }}>
                    <Snowflake size={15} /> {pass.slug === 'bernina-pass' ? 'Maintained Open Year-Round (No Scheduled Winter Closure)' : pass.seasonalClosureInfo?.typicalClosure}
                  </div>
                  <p style={{ margin: '16px 0 0 0', fontSize: '14px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                    {pass.slug === 'bernina-pass'
                      ? 'Unlike higher Swiss Alpine passes such as Furka, Grimsel, or Susten which close for 6–7 months from November to May, Bernina Pass (Route 29) is a vital year-round transportation corridor maintained by the Canton of Graubünden. Heavy rotary snowplows and salt spreaders operate continuously throughout the winter to keep the road clear. Temporary closures lasting several hours occur only during active severe blizzards or scheduled avalanche blasting. Winter equipment (winter tires 3PMSF and carrying snow chains) is mandatory between November and April.'
                      : pass.seasonalClosureInfo?.description}
                  </p>
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
            {(pass.slug === 'chang-la-pass' || pass.slug === 'chang-la') ? (
              <section id="cameras" className="detail-section-block">
                <h2 className="section-title-heading">Chang La Webcam &amp; Camera Status</h2>
                <div className="camera-showcase-container lp-card" style={{ padding: '28px 24px', textAlign: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', maxWidth: '640px', margin: '0 auto' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563EB' }}>
                      <Camera size={30} />
                    </div>
                    <h3 style={{ fontSize: '18px', margin: 0, fontWeight: '700', color: 'var(--text-primary)' }}>
                      No verified public live Chang La camera feed is currently available.
                    </h3>
                    <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                      The Border Roads Organisation (BRO Project HIMANK) and the Administration of Union Territory of Ladakh manage snow clearance and high-altitude security across Chang La, but do not operate open public-facing live webcam video streams.
                    </p>
                    <div style={{ backgroundColor: 'var(--bg-surface-subtle)', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '12px 16px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5', textAlign: 'left', width: '100%' }}>
                      <strong>LivePassWatch Anti-Fabrication Guarantee:</strong> We never display simulated feeds, generic stock videos, or outdated snapshots as "live webcams." Chang La road status should be verified through official Ladakh administration channels.
                    </div>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '6px' }}>
                      <a 
                        href="https://ladakh.gov.in" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-primary"
                        style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                      >
                        Check Official Ladakh Road Information <ExternalLink size={14} />
                      </a>
                      <a 
                        href="https://leh.nic.in" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-outline-primary"
                        style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                      >
                        District Administration Leh Portal <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            ) : pass.cameras && pass.cameras.length > 0 ? (
              <section id="cameras" className="detail-section-block">
                <h2 className="section-title-heading">
                  {pass.slug === 'bernina-pass'
                    ? 'Bernina Pass Live Webcam'
                    : pass.slug === 'gotthard-pass'
                    ? 'Gotthard Pass Live Webcams & Cameras'
                    : pass.slug === 'col-du-galibier' 
                    ? 'Col du Galibier Live Webcams & Cameras' 
                    : pass.slug === 'trollstigen-pass' 
                    ? 'Trollstigen Pass Live Webcams' 
                    : `${pass.name.split('(')[0].trim()} Live Webcams`}
                </h2>
                
                <CameraProvider
                  camera={{
                    id: currentCam.id,
                    title: currentCam.title,
                    type: 'image',
                    image: currentCam.image,
                    location: currentCam.location || currentCam.milepost,
                    source: currentCam.source || officialSourceDisplay,
                    officialUrl: currentCam.officialUrl || pass.officialSource,
                    updateIntervalMs: 60000
                  }}
                  passName={pass.name}
                  highway={pass.highway}
                  onOpenUserCamera={() => setIsUserCamModalOpen(true)}
                />

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
                          <span className="cam-thumb-loc">{cam.milepost || cam.direction || cam.location}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ) : pass.id === 'khyber-pass' ? (
              <section id="cameras" className="detail-section-block">
                <h2 className="section-title-heading">Khyber Pass Webcam &amp; Cameras</h2>
                <div className="camera-showcase-container lp-card" style={{ padding: '24px', textAlign: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                    <Camera size={48} color="#9CA3AF" />
                    <h3 style={{ fontSize: '18px', margin: 0, fontWeight: '600', color: 'var(--text-dark)' }}>Live Khyber Pass Camera Availability</h3>
                    <p style={{ margin: '4px 0 16px 0', maxWidth: '500px', fontSize: '14.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                      An independently verified public live webcam for this location is not currently available. Because the Khyber Pass is a strategically sensitive international border corridor, real-time public video streams are restricted.
                    </p>
                    <a 
                      href="https://nha.gov.pk/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-outline-primary"
                      style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    >
                      Check National Highway Authority for Traffic Updates <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </section>
            ) : null}

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
                      <strong className="fact-value">
                        {pass.slug === 'bernina-pass' ? '10–12% Gradients & Wide Sweeping Switchbacks' : (pass.slug === 'gotthard-pass' ? '24 Historic Tremola Cobblestone Hairpins' : (pass.slug === 'trollstigen-pass' ? '11 Hairpin Turns (10% Incline)' : (pass.slug === 'stelvio-pass' ? '87 Hairpins (48 NE + 39 SW)' : 'Multi-tier switchbacks')))}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: Location & Interactive Map */}
            <section id="route-map" className="detail-section-block">
              <h2 className="section-title-heading">
                {(pass.slug === 'bernina-pass')
                  ? 'Bernina Pass Map & Location'
                  : (pass.slug === 'gotthard-pass')
                  ? 'Gotthard Pass Map & Location'
                  : (pass.slug === 'chang-la-pass' || pass.slug === 'chang-la')
                  ? 'Chang La Map'
                  : pass.slug === 'trollstigen-pass' 
                  ? 'Trollstigen Pass Map' 
                  : `${pass.name.split('(')[0].trim()} Map`}
              </h2>
              <div className="map-and-route-container lp-card">
                <div className="map-frame-header">
                  <div>
                    <h3 className="map-frame-title">{pass.name} Corridor ({pass.highway})</h3>
                    <span className="map-frame-sub">GPS Coordinates: {pass.coordinates.lat.toFixed(4)}&deg; N, {pass.coordinates.lng.toFixed(4)}&deg; E • Summit Elevation: {pass.elevationFt.toLocaleString()} ft ({pass.elevationM.toLocaleString()} m)</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <a 
                      href={`https://www.google.com/maps/dir/?api=1&destination=${pass.coordinates.lat},${pass.coordinates.lng}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-outline-primary"
                      style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    >
                      <Navigation size={14} /> Get Directions <ExternalLink size={12} />
                    </a>
                    <button onClick={() => navigate('/map')} className="btn btn-outline-primary">
                      Fullscreen Map <ExternalLink size={14} />
                    </button>
                  </div>
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

            {/* Section 9c: Nearest Towns & Driving Distances */}
            <section id="nearest-towns" className="detail-section-block">
              <h2 className="section-title-heading">Nearest Towns &amp; Driving Distances</h2>
              <div className="lp-card" style={{ padding: '24px' }}>
                <p style={{ margin: '0 0 16px 0', fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Gateway cities, supply hubs, and approximate driving distances from the summit of <strong>{pass.name}</strong>:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                  {(seoDetails?.nearestTowns || (pass.distancesTable ? pass.distancesTable.map(d => ({ name: d.location, distance: d.distance, direction: d.route })) : [])).map((town, idx) => (
                    <div key={idx} style={{ padding: '14px 16px', borderRadius: '8px', backgroundColor: 'var(--bg-surface-subtle)', border: '1px solid var(--border-color)' }}>
                      <div style={{ fontWeight: '700', fontSize: '15px', color: 'var(--text-primary)', marginBottom: '4px' }}>{town.name}</div>
                      <div style={{ fontSize: '13.5px', color: 'var(--primary)', fontWeight: '600' }}>{town.distance}</div>
                      <div style={{ fontSize: '12.5px', color: 'var(--text-muted)', marginTop: '3px' }}>{town.direction}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 9d: Seasonal Closure Schedule & Typical Dates */}
            <section id="seasonal-schedule" className="detail-section-block">
              <h2 className="section-title-heading">Seasonal Closure Schedule &amp; Typical Dates</h2>
              <div className="lp-card" style={{ padding: '24px', borderLeft: '4px solid #F59E0B' }}>
                <h3 style={{ fontSize: '17px', fontWeight: '700', margin: '0 0 10px 0', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Calendar size={18} color="#F59E0B" />
                  <span>{seoDetails?.seasonalClosureWindow || pass.seasonalClosureInfo?.typicalClosure || (pass.isSeasonal ? 'Winter Seasonal Closure' : 'Open Year-Round (Subject to winter storms)')}</span>
                </h3>
                <p style={{ margin: 0, fontSize: '14.5px', lineHeight: '1.65', color: 'var(--text-secondary)' }}>
                  {seoDetails?.seasonalClosureDetail || pass.seasonalClosureInfo?.description || 'Maintained with regular winter plowing and anti-icing operations by regional highway crews. Temporary short-duration closures may occur during active blizzards and avalanche clearance operations.'}
                </p>
              </div>
            </section>

            {/* Section 10: Where Is Pass Located & Geography/History */}
            <section id="about" className="detail-section-block">
              <h2 className="section-title-heading">
                {pass.slug === 'paso-los-libertadores'
                  ? 'About Paso Los Libertadores (Paso Cristo Redentor)'
                  : `About ${pass.name.split('(')[0].trim()}`}
              </h2>
              <div className="about-narrative-container lp-card" style={{ padding: '24px' }}>
                {/* 100-150 words unique editorial narrative */}
                <p className="narrative-p" style={{ fontSize: '15px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '18px' }}>
                  {seoDetails?.aboutPass || pass.overview?.summary || pass.description}
                </p>

                <p className="narrative-p" style={{ fontSize: '14.5px', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                  <strong>{pass.name}</strong> is situated in the <strong>{pass.quickFacts?.mountainRange || 'Alpine Crest'}</strong> of <strong>{pass.state ? `${pass.state}, ` : ''}{pass.country}</strong>, at an official summit elevation of <strong>{pass.elevationFt.toLocaleString()} feet ({pass.elevationM.toLocaleString()} meters)</strong> above sea level on <strong>{pass.highway}</strong>.
                </p>

                {pass.narrativeSections && (
                  pass.narrativeSections.map((sec, idx) => (
                    <React.Fragment key={idx}>
                      <h3 className="narrative-subheading">{sec.title}</h3>
                      <p className="narrative-p">{sec.content}</p>
                    </React.Fragment>
                  ))
                )}

                {/* Contextual Link to Top-Performing Pass */}
                <div style={{ marginTop: '22px', padding: '16px 20px', borderRadius: '8px', backgroundColor: 'var(--bg-surface-subtle)', border: '1px solid var(--border-color)', borderLeft: '4px solid var(--primary)' }}>
                  <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                    <strong>International Alpine Transit:</strong> {seoDetails?.crossLinkText || 'Explore high-altitude mountain highway conditions on the'}{' '}
                    <Link to={seoDetails?.crossLinkUrl || '/passes/argentina-chile/valparaiso-mendoza/paso-los-libertadores'} style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'underline' }}>
                      {seoDetails?.crossLinkAnchor || 'Paso Los Libertadores (Andes Mountain Pass)'}
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10.5: Editorial Guidance & Travel Tips */}
            <section id="travel-guidance" className="detail-section-block">
              <h2 className="section-title-heading">
                {(pass.slug === 'bernina-pass')
                  ? 'How to Get to Bernina Pass & Directions'
                  : (pass.slug === 'gotthard-pass')
                  ? 'How to Get to Gotthard Pass & Travel Guidance'
                  : (pass.slug === 'chang-la-pass' || pass.slug === 'chang-la')
                  ? 'Chang La Travel Information'
                  : pass.slug === 'trollstigen-pass' 
                  ? 'Trollstigen Pass Travel Information' 
                  : 'Mountain Pass Travel Guidance & Winter Tips'}
              </h2>
              <div className="travel-guidance-container lp-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p className="narrative-p" style={{ marginBottom: '8px' }}>
                  Mountain passes present unique driving environments. Understanding how weather, elevation, and highway regulations intersect is essential for a safe crossing.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                  <div className="guidance-card" style={{ padding: '16px', backgroundColor: 'var(--bg-light)', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                    <h4 style={{ margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-dark)' }}>
                      <Clock size={16} /> Route &amp; Travel Season
                    </h4>
                    <p style={{ margin: 0, fontSize: '13.5px', lineHeight: '1.5', color: 'var(--text-muted)' }}>
                      {(pass.slug === 'bernina-pass')
                        ? 'Bernina Pass (Route 29) links the Upper Engadin (Pontresina & St. Moritz) with Val Poschiavo and Tirano (Italy). It is maintained open year-round by Tiefbauamt Graubünden with rotary snowplows. Summer offers pristine dry asphalt; winter delivers spectacular snow-walled corridors requiring winter-rated tires (3PMSF).'
                        : (pass.slug === 'gotthard-pass')
                        ? 'Gotthard Pass road is open from late May to late October/November. It is a fantastic scenic bypass when the A2 Gotthard Road Tunnel experiences holiday traffic delays at Göschenen or Airolo.'
                        : (pass.slug === 'chang-la-pass' || pass.slug === 'chang-la')
                        ? 'The 75 km route from Leh to Chang La summit (and onwards to Pangong Lake) is best traveled between May and October. Winter travel is possible but requires 4x4, anti-skid chains, and extreme caution.'
                        : 'Highways departments close mountain passes when safety hazards like avalanches, heavy snow accumulation, or rockfalls become unmanageable.'}
                    </p>
                  </div>
                  <div className="guidance-card" style={{ padding: '16px', backgroundColor: 'var(--bg-light)', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                    <h4 style={{ margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-dark)' }}>
                      <Mountain size={16} /> High-Altitude Safety &amp; Weather
                    </h4>
                    <p style={{ margin: 0, fontSize: '13.5px', lineHeight: '1.5', color: 'var(--text-muted)' }}>
                      {(pass.slug === 'bernina-pass')
                        ? 'At 2,328 m (7,638 ft) summit elevation, expect ambient temperatures 10–14°C colder than in Tirano or Lake Como. Weather can shift rapidly across the Lago Bianco plateau; check real-time MeteoSwiss Passo del Bernina reports before starting the ascent.'
                        : (pass.slug === 'gotthard-pass')
                        ? 'At 2,106 m (6,909 ft) summit elevation, expect temperatures 10–15°C colder than the valley floor in Lucerne or Lugano. High-altitude mountain winds and sudden cloud cover can reduce visibility across Lago della Piazza.'
                        : (pass.slug === 'chang-la-pass' || pass.slug === 'chang-la')
                        ? 'At 17,688 ft, atmospheric oxygen is roughly 50% of sea level. Limit your summit stop to 15–20 minutes. Visit the Indian Army medical room at Chang La Baba for emergency oxygen and free hot herbal tea if experiencing dizziness.'
                        : `On ${pass.name}, the summit elevation of ${pass.elevationFt.toLocaleString()} ft can experience sub-freezing temperatures, heavy snow, and dense fog even while the valleys below remain warm.`}
                    </p>
                  </div>
                  <div className="guidance-card" style={{ padding: '16px', backgroundColor: 'var(--bg-light)', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                    <h4 style={{ margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-dark)' }}>
                      <ShieldCheck size={16} /> Vignette &amp; Toll Regulations
                    </h4>
                    <p style={{ margin: 0, fontSize: '13.5px', lineHeight: '1.5', color: 'var(--text-muted)' }}>
                      {(pass.slug === 'bernina-pass')
                        ? 'Swiss Hauptstrasse 29 (Route 29) is a 100% toll-free public cantonal highway; no Swiss motorway vignette is needed. If continuing south past Campocologno into Tirano (Italy), ensure valid passports and EU vehicle insurance green cards are on board.'
                        : (pass.slug === 'gotthard-pass')
                        ? 'The Gotthard Pass road (Hauptstrasse 2) and Tremola are 100% toll-free; no Swiss motorway vignette is required. However, entering the A2 motorway to access the Gotthard Tunnel requires the standard CHF 40 Swiss motorway vignette.'
                        : (pass.slug === 'chang-la-pass' || pass.slug === 'chang-la')
                        ? 'Indian and foreign tourists require an Inner Line Permit (ILP) or Protected Area Permit (PAP) to travel past Zingral toward Pangong Lake. Permits can be obtained online via lahdclehpermit.in or through registered Leh travel operators.'
                        : 'Live traffic webcams and official road bulletins are essential tools to verify actual surface conditions before departure.'}
                    </p>
                  </div>
                  <div className="guidance-card" style={{ padding: '16px', backgroundColor: 'var(--bg-light)', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                    <h4 style={{ margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-dark)' }}>
                      <Car size={16} /> Alternatives &amp; Winter Guidelines
                    </h4>
                    <p style={{ margin: 0, fontSize: '13.5px', lineHeight: '1.5', color: 'var(--text-muted)' }}>
                      {(pass.slug === 'bernina-pass')
                        ? 'Winter tires (3PMSF) or carrying snow chains is legally mandatory from November to April. During winter blizzards or temporary storm closures, alternatives include the year-round UNESCO Rhaetian Railway (Bernina Line), the Vereina Car Shuttle Train (Autoverlad Vereina), or Maloja Pass (Route 3).'
                        : (pass.slug === 'gotthard-pass')
                        ? 'Commercial trucks over 18 tons and caravans are prohibited on the historic Tremola cobblestone road and must use the modern H2 paved bypass. Always yield right-of-way to Swiss PostBuses sounding their 3-tone horn.'
                        : (pass.slug === 'chang-la-pass' || pass.slug === 'chang-la')
                        ? 'Ensure your vehicle has good ground clearance. Refuel to a full tank at Karu before starting the ascent; there are no reliable commercial petrol pumps between Karu and Tangtse.'
                        : 'Chains Required is a legally binding order; failing to carry or install chains when posted carries significant fines and can lead to dangerous spinouts.'}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 11: FAQs */}
            <section id="faqs" className="detail-section-block">
              <h2 className="section-title-heading">
                {(pass.slug === 'bernina-pass')
                  ? 'Frequently Asked Questions about Bernina Pass'
                  : (pass.slug === 'gotthard-pass')
                  ? 'Frequently Asked Questions about Gotthard Pass'
                  : (pass.slug === 'chang-la-pass' || pass.slug === 'chang-la')
                  ? 'Chang La Pass Frequently Asked Questions'
                  : pass.slug === 'trollstigen-pass' 
                  ? 'Trollstigen Pass Frequently Asked Questions' 
                  : `Frequently Asked Questions about ${pass.name.split('(')[0].trim()}`}
              </h2>
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
              <h2 className="section-title-heading">Nearby Passes &amp; Alternative Routes</h2>
              <div className="internal-links-cards-grid">
                {((pass.nearbyPasses && pass.nearbyPasses.length > 0)
                  ? pass.nearbyPasses.slice(0, 3)
                  : passesData.filter(p => p.id !== pass.id && (p.state === pass.state || p.country === pass.country || p.continent === pass.continent)).slice(0, 3)
                ).map((near) => {
                  const targetPass = passesData.find(p => p.id === near.id || p.slug === near.slug) || near;
                  const targetUrl = getPassUrl(targetPass);
                  return (
                    <Link key={near.id} to={targetUrl} className="internal-link-card lp-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className="link-card-badge">{near.state || near.country}</div>
                      <h3 className="link-card-title">{near.name} ({near.elevationFt.toLocaleString()} ft)</h3>
                      <p className="link-card-desc">
                        {targetPass.status ? `Current status: ${targetPass.status}. ` : ''}
                        {targetPass.highway ? `Located on ${targetPass.highway}. ` : ''}
                        Check real-time webcams, snowpack depth, and road advisories.
                      </p>
                      <span className="link-card-action">View {near.name} Status &rarr;</span>
                    </Link>
                  );
                })}

                <Link to="/map" className="internal-link-card lp-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="link-card-badge">Interactive Map</div>
                  <h3 className="link-card-title">Live Mountain Pass Map</h3>
                  <p className="link-card-desc">Explore global mountain passes with live status pins, webcams, and satellite terrain.</p>
                  <span className="link-card-action">Open Fullscreen Map &rarr;</span>
                </Link>
              </div>
            </section>

            {/* Section 13: Authoritative Data Sources Attribution */}
            {pass.dataSources && pass.dataSources.length > 0 && (
              <section id="data-sources" className="detail-section-block">
                <div className="data-sources-banner lp-card">
                  <h2 className="sources-title" style={{ fontSize: '18px', fontWeight: 600, margin: '0 0 8px 0' }}>Data Sources</h2>
                  <p className="sources-sub">
                    LivePassWatch independently verifies pass statuses, road restrictions, and weather warnings directly from official governmental and highway transport authorities:
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
                  <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--border-color)', fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                    <strong>Editorial Note:</strong> Last reviewed: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} • Live data updated: {pass.lastUpdated}. Road and weather conditions in high-altitude mountain environments can change rapidly. Always confirm local conditions with the official road authority before departure. LivePassWatch is an independent mountain pass information service.
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
                passes={passes}
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
                {pass.slug === 'col-du-galibier' ? (
                  <>
                    <li><Check size={14} className="check-green" /> Check D902 live status and Galibier Tunnel traffic signal reports</li>
                    <li><Check size={14} className="check-green" /> Comply with Loi Montagne II winter tire/chain mandates (Nov 1 – Mar 31)</li>
                    <li><Check size={14} className="check-green" /> Use 1st/2nd gear engine braking on steep 35 km descent into Valloire</li>
                    <li><Check size={14} className="check-green" /> Verify vehicle height &le; 4.1 m and weight &le; 3.5 tonnes for Galibier Tunnel</li>
                    <li><Check size={14} className="check-green" /> Cyclists: use 2,642 m summit road (tunnel is strictly motor vehicles only)</li>
                    <li><Check size={14} className="check-green" /> Pack windproof thermal layers &amp; polarized sunglasses for 2,642 m altitude</li>
                  </>
                ) : (pass.slug === 'chang-la-pass' || pass.slug === 'chang-la') ? (
                  <>
                    <li><Check size={14} className="check-green" /> Obtain approved Ladakh Inner Line Permit (ILP/PAP)</li>
                    <li><Check size={14} className="check-green" /> Limit summit dwell time to 15–20 minutes to prevent AMS</li>
                    <li><Check size={14} className="check-green" /> Visit Chang La Baba Army post for hot black tea &amp; oxygen if dizzy</li>
                    <li><Check size={14} className="check-green" /> Use 1st/2nd gear engine braking on steep Zingral switchbacks</li>
                    <li><Check size={14} className="check-green" /> Carry anti-skid tire chains during late autumn and winter</li>
                    <li><Check size={14} className="check-green" /> Refuel full tank at Karu before ascending towards Pangong</li>
                    <li><Check size={14} className="check-green" /> Pack windproof thermal layers &amp; polarized UV sunglasses</li>
                  </>
                ) : pass.slug === 'trollstigen-pass' ? (
                  <>
                    <li><Check size={14} className="check-green" /> Verify vehicle length is within 13.1m (43 ft) limit</li>
                    <li><Check size={14} className="check-green" /> Downshift to 1st/2nd gear for engine braking on 10% grade</li>
                    <li><Check size={14} className="check-green" /> Yield to oncoming tour buses and uphill traffic at hairpins</li>
                    <li><Check size={14} className="check-green" /> Use designated passing turnouts (Møteplass) to let traffic pass</li>
                    <li><Check size={14} className="check-green" /> Keep low-beam headlights illuminated at all times</li>
                    <li><Check size={14} className="check-green" /> Check summit webcam for mist, fog, and spray on Stigfossen bridge</li>
                  </>
                ) : pass.id === 'khyber-pass' ? (
                  <>
                    <li><Check size={14} className="check-green" /> Obtain necessary civil/military security permits (NOC)</li>
                    <li><Check size={14} className="check-green" /> Carry official identification documents (CNIC/Passport) at all times</li>
                    <li><Check size={14} className="check-green" /> Prepare for security checkpoint inspections, starting at Jamrud</li>
                    <li><Check size={14} className="check-green" /> Strictly refrain from photographing military checkpoints or border areas</li>
                    <li><Check size={14} className="check-green" /> Confirm the operational status of the Torkham border post before setting out</li>
                  </>
                ) : pass.id === 'status-pass' ? (
                  <>
                    <li><Check size={14} className="check-green" /> Carry appropriate winter traction tires or chains in your vehicle</li>
                    <li><Check size={14} className="check-green" /> Review the latest live summit webcam snapshot at MP 27.1</li>
                    <li><Check size={14} className="check-green" /> Check weather at pass elevation (3,107 ft) instead of valley floor</li>
                    <li><Check size={14} className="check-green" /> Maintain safe speed on curves descending towards Goldendale</li>
                    <li><Check size={14} className="check-green" /> Keep headlights on to remain visible in sudden rain/fog</li>
                  </>
                ) : pass.slug.includes('zoji') ? (
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

            {/* AdSense Sidebar Banner Placement */}
            <div className="adsense-placeholder sidebar-ad-banner" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#F9FAFB',
              border: '1px dashed #E5E7EB',
              borderRadius: '6px',
              height: '250px',
              marginTop: '16px',
              fontSize: '12px',
              color: '#9CA3AF'
            }}>
              <span>Advertisement Place-holder (AdSense Compliant)</span>
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

        {/* User Camera Modal */}
        <UserCameraModal
          isOpen={isUserCamModalOpen}
          onClose={() => setIsUserCamModalOpen(false)}
          passName={pass.name}
        />
      </div>
    </div>
  );
};
