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

const sustenHindiFaqs = [
  {
    question: "सुस्टेन पास कब खुलता है और 2026 की खुलने की तारीख क्या है?",
    answer: "सुस्टेन पास आमतौर पर बर्न और उरी कैंटन के सड़क विभागों द्वारा रोटरी स्नो ब्लोअर्स से 8-10 मीटर बर्फ हटाने के बाद जून के मध्य से अंत (लगभग 12 से 22 जून) में खुलता है। 2026 के ग्रीष्मकालीन सीजन के लिए यह दर्रा पूरी तरह खुला है।"
  },
  {
    question: "क्या सुस्टेन पास आज खुला है और वर्तमान सड़क स्थिति क्या है?",
    answer: "हाँ, सुस्टेन पास (हौप्तस्ट्रासे 11) आज खुला है और इन्नर्टकिर्चन (बर्न) तथा वासेन (उरी) के बीच कारों, मोटरसाइकिलों और साइकिलों के लिए सामान्य रूप से चालू है।"
  },
  {
    question: "सुस्टेन पास की वर्तमान सड़क स्थिति कैसी है?",
    answer: "इन्नर्टकिर्चन और वासेन के बीच 45.9 किमी के पूरे मार्ग पर सड़क साफ, सूखी और बिना किसी प्रतिबंध के उत्कृष्ट ड्राइविंग स्थिति में है।"
  },
  {
    question: "सुस्टेन पास की लाइव वेबकैम और शिखर कैमरे कहाँ देखें?",
    answer: "LivePassWatch पर सुस्टेन पास के लाइव वेबकैम उपलब्ध हैं, जिनमें हासलीबर्ग आल्पेन टॉवर 360° पैनोरमा (2,250 मी), स्टाइनग्लेशियर व शिखर सुरंग कैमरा (2,224 मी), गाडमेन ट्रिफ्टबान कैमरा (1,750 मी) और वासेन/मीयनताल कैमरा शामिल हैं।"
  },
  {
    question: "सुस्टेन पास सर्दियों में कब बंद होता है और क्या यह सर्दियों में खुला रहता है?",
    answer: "सुस्टेन पास 8 से 10 मीटर तक भारी बर्फबारी और हिमस्खलन के खतरे के कारण अक्टूबर के अंत या नवंबर की शुरुआत में बंद हो जाता है। यह सर्दियों में खुला नहीं रहता है।"
  },
  {
    question: "सुस्टेन पास की ऊंचाई कितनी है?",
    answer: "सुस्टेन पास की शिखर सुरंग की ऊंचाई समुद्र तल से 2,224 मीटर (7,297 फीट) है, जबकि प्राकृतिक पर्वत कटक 2,260 मीटर (7,415 फीट) तक पहुंचती है।"
  },
  {
    question: "सुस्टेन पास के लिए स्नो चेन और ट्रैक्शन टायर के क्या नियम हैं?",
    answer: "सूखी सड़कों पर सामान्य गर्मी के मौसम में चेन की कोई आवश्यकता नहीं है। हालांकि उच्च पहाड़ों में अचानक बर्फबारी या ठंड के लिए 3PMSF विंटर टायर या बूट में चेन रखने की सिफारिश की जाती है।"
  },
  {
    question: "सुस्टेन पास किस हाईवे पर है और यहाँ कैसे पहुंचे?",
    answer: "सुस्टेन पास स्विस हौप्तस्ट्रासे 11 (रूट 11) पर स्थित है। पश्चिम से A8 होकर मीरिंगन और इन्नर्टकिर्चन से पहुंचा जा सकता है, जबकि पूर्व से A2 गोथार्ड मोटरवे के वासेन निकास से H11 पकड़कर पहुंचा जा सकता है।"
  },
  {
    question: "क्या सुस्टेन पास पर कोई टोल टैक्स या विगनेट आवश्यक है?",
    answer: "नहीं, सुस्टेन पास (H11) पूरी तरह 100% टोल-मुक्त स्विस कैंटोनल हाईवे है। दर्रे या शिखर सुरंग के लिए किसी मोटरवे विगनेट की आवश्यकता नहीं है; विगनेट केवल स्विस मोटरवे (A8/A2) पर जरूरी है।"
  },
  {
    question: "सुस्टेन पास कितना लंबा है और इसमें कितने मोड़ हैं?",
    answer: "सुस्टेन पास इन्नर्टकिर्चन से वासेन तक 45.9 किलोमीटर (28.5 मील) लंबा है और इसमें 26 प्रमुख हेयरपिन मोड़ और 25 प्राकृतिक पत्थर के मेहराबदार पुल हैं।"
  }
];

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
  const [pageLang, setPageLang] = useState<'de' | 'fr' | 'it' | 'ro' | 'sl' | 'hi' | 'en'>(() => {
    if (targetSlug.toLowerCase().includes('vrsic')) return 'sl';
    if (targetSlug.toLowerCase().includes('prislop')) return 'ro';
    if (targetSlug.toLowerCase().includes('grimsel')) return 'de';
    if (targetSlug.toLowerCase().includes('great-st-bernard') || targetSlug.toLowerCase().includes('grand-saint-bernard') || targetSlug.toLowerCase().includes('agnel') || targetSlug.toLowerCase().includes('angel')) return 'it';
    if (targetSlug.toLowerCase().includes('galibier') || targetSlug.toLowerCase().includes('iseran') || targetSlug.toLowerCase().includes('bonette')) return 'fr';
    return 'en';
  });

  // If pass is not found in database, return custom 404 Page (Phase 3 & 29 compliance)
  if (!pass) {
    return <NotFoundPage />;
  }

  // Sync default language when pass changes
  useEffect(() => {
    if (pass.slug === 'vrsic-pass') {
      setPageLang('sl');
    } else if (pass.slug === 'prislop-pass') {
      setPageLang('ro');
    } else if (pass.slug === 'grimsel-pass') {
      setPageLang('de');
    } else if (pass.slug === 'susten-pass') {
      setPageLang('en');
    } else if (pass.slug === 'bernina-pass') {
      setPageLang('de');
    } else if (pass.slug === 'great-st-bernard-pass' || pass.slug === 'col-agnel') {
      setPageLang('it');
    } else if (pass.slug === 'col-du-galibier' || pass.slug === 'col-de-l-iseran' || pass.slug === 'col-de-la-bonette') {
      setPageLang('fr');
    }
  }, [pass.slug]);

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
        : (pass.slug === 'susten-pass')
          ? 'Susten Pass mountain road, Steingletscher glacier, and Scheiteltunnel in the Swiss Alps'
          : (pass.slug === 'rogers-pass')
            ? 'Rogers Pass Trans-Canada Highway through Glacier National Park in British Columbia Canada'
            : (pass.slug === 'col-agnel')
              ? 'Col Agnel / Colle dell\'Agnello mountain pass road, summit border marker 2744m, and Monviso vista in Italy and France'
              : (pass.slug === 'great-st-bernard-pass')
                ? 'Great St Bernard Pass road and Alpine mountain landscape'
                : (pass.slug === 'col-du-galibier')
                  ? 'Col du Galibier mountain pass road and summit monument in the French Alps'
                : (pass.slug === 'col-de-l-iseran')
                  ? 'Col de l\'Iseran mountain pass road, summit sign 2770m, and chapel in the French Alps Savoie'
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
          ) : pass.slug === 'col-de-l-iseran' ? (
            <>
              <Link to="/passes">Passes</Link>
              <ChevronRight size={14} className="crumb-sep" />
              <Link to="/passes?country=France">France</Link>
              <ChevronRight size={14} className="crumb-sep" />
              <Link to="/passes?state=Savoie">Savoie</Link>
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

        {/* Bilingual Language Switcher for Vršič Pass, Prislop Pass, Col du Galibier, Col de l'Iseran, Great St Bernard Pass & Grimsel Pass */}
        {pass.slug === 'vrsic-pass' && (
          <div className="bilingual-toggle-wrap lp-card" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            padding: '12px 18px',
            marginBottom: '18px',
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(16, 185, 129, 0.06) 100%)',
            border: '1px solid rgba(37, 99, 235, 0.35)',
            borderRadius: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#1E40AF' }}>
              <Globe size={18} color="#2563EB" />
              <span>
                {pageLang === 'sl'
                  ? '🇸🇮 Uradna regionalna vsebina v slovenščini (Kadar koli preklopite na samodejni angleški prevod)'
                  : '🇬🇧 English Auto-Translation Active (Switch to native Slovenian anytime)'}
              </span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <div style={{ display: 'inline-flex', borderRadius: '6px', overflow: 'hidden', border: '1px solid #CBD5E1', background: '#FFFFFF' }}>
                <button
                  type="button"
                  onClick={() => setPageLang('sl')}
                  style={{
                    padding: '6px 14px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    border: 'none',
                    backgroundColor: pageLang === 'sl' ? '#2563EB' : 'transparent',
                    color: pageLang === 'sl' ? '#FFFFFF' : '#475569',
                    transition: 'all 0.2s ease'
                  }}
                >
                  🇸🇮 Slovenščina
                </button>
                <button
                  type="button"
                  onClick={() => setPageLang('en')}
                  style={{
                    padding: '6px 14px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    border: 'none',
                    backgroundColor: pageLang === 'en' ? '#2563EB' : 'transparent',
                    color: pageLang === 'en' ? '#FFFFFF' : '#475569',
                    transition: 'all 0.2s ease'
                  }}
                >
                  🇬🇧 English (Auto-Translated)
                </button>
              </div>
              <a
                href={`https://translate.google.com/translate?sl=auto&tl=en&u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : 'https://www.livepasswatch.info/passes/slovenia/gorenjska-goriska/vrsic-pass')}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '6px 12px',
                  fontSize: '12.5px',
                  fontWeight: '600',
                  color: '#1D4ED8',
                  background: '#EFF6FF',
                  border: '1px solid #BFDBFE',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                title="Odpri v Google Prevajalniku / Translate with Google"
              >
                <Globe size={14} />
                <span>Google Translate ↗</span>
              </a>
            </div>
          </div>
        )}

        {pass.slug === 'prislop-pass' && (
          <div className="bilingual-toggle-wrap lp-card" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            padding: '12px 18px',
            marginBottom: '18px',
            background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.08) 0%, rgba(59, 130, 246, 0.06) 100%)',
            border: '1px solid rgba(234, 179, 8, 0.35)',
            borderRadius: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#854D0E' }}>
              <Globe size={18} color="#CA8A04" />
              <span>
                {pageLang === 'ro'
                  ? '🇷🇴 Conținut oficial în limba română (Comutați oricând pe traducerea automată în engleză)'
                  : '🇬🇧 English Auto-Translation Active (Switch to native Romanian anytime)'}
              </span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <div style={{ display: 'inline-flex', borderRadius: '6px', overflow: 'hidden', border: '1px solid #CBD5E1', background: '#FFFFFF' }}>
                <button
                  type="button"
                  onClick={() => setPageLang('ro')}
                  style={{
                    padding: '6px 14px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    border: 'none',
                    backgroundColor: pageLang === 'ro' ? '#D97706' : 'transparent',
                    color: pageLang === 'ro' ? '#FFFFFF' : '#475569',
                    transition: 'all 0.2s ease'
                  }}
                >
                  🇷🇴 Română
                </button>
                <button
                  type="button"
                  onClick={() => setPageLang('en')}
                  style={{
                    padding: '6px 14px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    border: 'none',
                    backgroundColor: pageLang === 'en' ? '#D97706' : 'transparent',
                    color: pageLang === 'en' ? '#FFFFFF' : '#475569',
                    transition: 'all 0.2s ease'
                  }}
                >
                  🇬🇧 English (Auto-Translated)
                </button>
              </div>
              <a
                href={`https://translate.google.com/translate?sl=auto&tl=en&u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : 'https://www.livepasswatch.info/passes/romania/maramures-suceava/prislop-pass')}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '6px 12px',
                  fontSize: '12.5px',
                  fontWeight: '600',
                  color: '#1D4ED8',
                  background: '#EFF6FF',
                  border: '1px solid #BFDBFE',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                title="Deschide în Google Translate / Translate with Google"
              >
                <Globe size={14} />
                <span>Google Translate ↗</span>
              </a>
            </div>
          </div>
        )}

        {(pass.slug === 'col-du-galibier' || pass.slug === 'col-de-l-iseran' || pass.slug === 'col-de-la-bonette') && (
          <div className="bilingual-toggle-wrap lp-card" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            padding: '12px 18px',
            marginBottom: '18px',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(99, 102, 241, 0.06) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.25)',
            borderRadius: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#1E3A8A' }}>
              <Globe size={18} color="#2563EB" />
              <span>
                {pageLang === 'fr'
                  ? '🇫🇷 Contenu en français officiel (Basculez vers l\'anglais à tout moment)'
                  : '🇬🇧 English Auto-Translation Active (Switch to native French anytime)'}
              </span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <div style={{ display: 'inline-flex', borderRadius: '6px', overflow: 'hidden', border: '1px solid #CBD5E1', background: '#FFFFFF' }}>
                <button
                  type="button"
                  onClick={() => setPageLang('fr')}
                  style={{
                    padding: '6px 14px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    border: 'none',
                    backgroundColor: pageLang === 'fr' ? '#2563EB' : 'transparent',
                    color: pageLang === 'fr' ? '#FFFFFF' : '#475569',
                    transition: 'all 0.2s ease'
                  }}
                >
                  🇫🇷 Français
                </button>
                <button
                  type="button"
                  onClick={() => setPageLang('en')}
                  style={{
                    padding: '6px 14px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    border: 'none',
                    backgroundColor: pageLang === 'en' ? '#2563EB' : 'transparent',
                    color: pageLang === 'en' ? '#FFFFFF' : '#475569',
                    transition: 'all 0.2s ease'
                  }}
                >
                  🇬🇧 English (Auto-Translated)
                </button>
              </div>
              <a
                href={`https://translate.google.com/translate?sl=auto&tl=en&u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : (pass.slug === 'col-de-la-bonette' ? 'https://www.livepasswatch.info/passes/france/alpes-maritimes-alpes-de-haute-provence/col-de-la-bonette' : 'https://www.livepasswatch.info/passes/france/hautes-alpes-savoie/col-du-galibier'))}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '6px 12px',
                  fontSize: '12.5px',
                  fontWeight: '600',
                  color: '#1D4ED8',
                  background: '#EFF6FF',
                  border: '1px solid #BFDBFE',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                title="Ouvrir dans Google Traduction / Translate with Google"
              >
                <Globe size={14} />
                <span>Google Translate ↗</span>
              </a>
            </div>
          </div>
        )}

        {pass.slug === 'great-st-bernard-pass' && (
          <div className="bilingual-toggle-wrap lp-card" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            padding: '12px 18px',
            marginBottom: '18px',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(59, 130, 246, 0.06) 100%)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            borderRadius: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#065F46' }}>
              <Globe size={18} color="#10B981" />
              <span>
                {pageLang === 'it'
                  ? '🇮🇹 Contenuto in italiano ufficiale (Passa alla traduzione in inglese in qualsiasi momento)'
                  : '🇬🇧 English Auto-Translation Active (Switch to native Italian anytime)'}
              </span>
            </div>
            <div style={{ display: 'inline-flex', borderRadius: '6px', overflow: 'hidden', border: '1px solid #CBD5E1', background: '#FFFFFF' }}>
              <button
                type="button"
                onClick={() => setPageLang('it')}
                style={{
                  padding: '6px 14px',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  border: 'none',
                  backgroundColor: pageLang === 'it' ? '#10B981' : 'transparent',
                  color: pageLang === 'it' ? '#FFFFFF' : '#475569',
                  transition: 'all 0.2s ease'
                }}
              >
                🇮🇹 Italiano
              </button>
              <button
                type="button"
                onClick={() => setPageLang('en')}
                style={{
                  padding: '6px 14px',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  border: 'none',
                  backgroundColor: pageLang === 'en' ? '#10B981' : 'transparent',
                  color: pageLang === 'en' ? '#FFFFFF' : '#475569',
                  transition: 'all 0.2s ease'
                }}
              >
                🇬🇧 English (Auto-Translated)
              </button>
            </div>
          </div>
        )}

        {pass.slug === 'col-agnel' && (
          <div className="bilingual-toggle-wrap lp-card" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            padding: '12px 18px',
            marginBottom: '18px',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(59, 130, 246, 0.06) 100%)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            borderRadius: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#065F46' }}>
              <Globe size={18} color="#10B981" />
              <span>
                {pageLang === 'it'
                  ? '🇮🇹 Contenuto in italiano ufficiale (Valico Colle dell\'Agnello SP251)'
                  : pageLang === 'fr'
                    ? '🇫🇷 Contenu en français officiel (Versant Col Agnel Route D205 Queyras)'
                    : '🇬🇧 English Auto-Translation Active (Switch to Italian or French anytime)'}
              </span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <div style={{ display: 'inline-flex', borderRadius: '6px', overflow: 'hidden', border: '1px solid #CBD5E1', background: '#FFFFFF' }}>
                <button
                  type="button"
                  onClick={() => setPageLang('it')}
                  style={{
                    padding: '6px 14px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    border: 'none',
                    backgroundColor: pageLang === 'it' ? '#10B981' : 'transparent',
                    color: pageLang === 'it' ? '#FFFFFF' : '#475569',
                    transition: 'all 0.2s ease'
                  }}
                >
                  🇮🇹 Italiano
                </button>
                <button
                  type="button"
                  onClick={() => setPageLang('fr')}
                  style={{
                    padding: '6px 14px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    border: 'none',
                    backgroundColor: pageLang === 'fr' ? '#2563EB' : 'transparent',
                    color: pageLang === 'fr' ? '#FFFFFF' : '#475569',
                    transition: 'all 0.2s ease'
                  }}
                >
                  🇫🇷 Français
                </button>
                <button
                  type="button"
                  onClick={() => setPageLang('en')}
                  style={{
                    padding: '6px 14px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    border: 'none',
                    backgroundColor: pageLang === 'en' ? '#0F172A' : 'transparent',
                    color: pageLang === 'en' ? '#FFFFFF' : '#475569',
                    transition: 'all 0.2s ease'
                  }}
                >
                  🇬🇧 English (Auto-Translated)
                </button>
              </div>
              <a
                href={`https://translate.google.com/translate?sl=auto&tl=en&u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : 'https://www.livepasswatch.info/passes/italy-france/piedmont-hautes-alpes/col-agnel')}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '6px 12px',
                  fontSize: '12.5px',
                  fontWeight: '600',
                  color: '#065F46',
                  background: '#ECFDF5',
                  border: '1px solid #A7F3D0',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                title="Ouvrir dans Google Traduction / Translate with Google"
              >
                <Globe size={14} />
                <span>Google Translate ↗</span>
              </a>
            </div>
          </div>
        )}

        {pass.slug === 'grimsel-pass' && (
          <div className="bilingual-toggle-wrap lp-card" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            padding: '12px 18px',
            marginBottom: '18px',
            background: 'linear-gradient(135deg, rgba(234, 88, 12, 0.08) 0%, rgba(59, 130, 246, 0.06) 100%)',
            border: '1px solid rgba(234, 88, 12, 0.25)',
            borderRadius: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#9A3412' }}>
              <Globe size={18} color="#EA580C" />
              <span>
                {pageLang === 'de'
                  ? '🇩🇪 Offizielle deutsche Inhalte (Jederzeit zur englischen Übersetzung wechseln)'
                  : '🇬🇧 English Auto-Translation Active (Switch to native German anytime)'}
              </span>
            </div>
            <div style={{ display: 'inline-flex', borderRadius: '6px', overflow: 'hidden', border: '1px solid #CBD5E1', background: '#FFFFFF' }}>
              <button
                type="button"
                onClick={() => setPageLang('de')}
                style={{
                  padding: '6px 14px',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  border: 'none',
                  backgroundColor: pageLang === 'de' ? '#EA580C' : 'transparent',
                  color: pageLang === 'de' ? '#FFFFFF' : '#475569',
                  transition: 'all 0.2s ease'
                }}
              >
                🇩🇪 Deutsch
              </button>
              <button
                type="button"
                onClick={() => setPageLang('en')}
                style={{
                  padding: '6px 14px',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  border: 'none',
                  backgroundColor: pageLang === 'en' ? '#EA580C' : 'transparent',
                  color: pageLang === 'en' ? '#FFFFFF' : '#475569',
                  transition: 'all 0.2s ease'
                }}
              >
                🇬🇧 English (Auto-Translated)
              </button>
            </div>
          </div>
        )}

        {pass.slug === 'susten-pass' && (
          <div className="bilingual-toggle-wrap lp-card" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            padding: '12px 18px',
            marginBottom: '18px',
            background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.08) 0%, rgba(37, 99, 235, 0.06) 100%)',
            border: '1px solid rgba(249, 115, 22, 0.25)',
            borderRadius: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#9A3412' }}>
              <Globe size={18} color="#EA580C" />
              <span>
                {pageLang === 'hi'
                  ? '🇮🇳 आधिकारिक सामग्री हिंदी में अनुवादित (स्विच करें English या German में)'
                  : pageLang === 'de'
                    ? '🇩🇪 Offizielle Schweizer Inhalte (Bern & Uri / Alpenpässe.ch)'
                    : '🇬🇧 Complete English Mountain Pass Portal (Auto-Translate to Hindi or German anytime)'}
              </span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <div style={{ display: 'inline-flex', borderRadius: '6px', overflow: 'hidden', border: '1px solid #CBD5E1', background: '#FFFFFF' }}>
                <button
                  type="button"
                  onClick={() => setPageLang('en')}
                  style={{
                    padding: '6px 14px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    border: 'none',
                    backgroundColor: pageLang === 'en' ? '#2563EB' : 'transparent',
                    color: pageLang === 'en' ? '#FFFFFF' : '#475569',
                    transition: 'all 0.2s ease'
                  }}
                >
                  🇬🇧 English
                </button>
                <button
                  type="button"
                  onClick={() => setPageLang('hi')}
                  style={{
                    padding: '6px 14px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    border: 'none',
                    backgroundColor: pageLang === 'hi' ? '#EA580C' : 'transparent',
                    color: pageLang === 'hi' ? '#FFFFFF' : '#475569',
                    transition: 'all 0.2s ease'
                  }}
                >
                  🇮🇳 हिन्दी
                </button>
                <button
                  type="button"
                  onClick={() => setPageLang('de')}
                  style={{
                    padding: '6px 14px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    border: 'none',
                    backgroundColor: pageLang === 'de' ? '#0F172A' : 'transparent',
                    color: pageLang === 'de' ? '#FFFFFF' : '#475569',
                    transition: 'all 0.2s ease'
                  }}
                >
                  🇩🇪 Deutsch
                </button>
              </div>
              <a
                href={`https://translate.google.com/translate?sl=auto&tl=hi&u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : 'https://www.livepasswatch.info/passes/switzerland/bern-uri/susten-pass')}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '6px 12px',
                  fontSize: '12.5px',
                  fontWeight: '600',
                  color: '#9A3412',
                  background: '#FFF7ED',
                  border: '1px solid #FFEDD5',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                title="Google Translate (All Languages)"
              >
                <Globe size={14} />
                <span>Google Translate ↗</span>
              </a>
            </div>
          </div>
        )}

        {pass.slug === 'bernina-pass' && (
          <div className="bilingual-toggle-wrap lp-card" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            padding: '12px 18px',
            marginBottom: '18px',
            background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.08) 0%, rgba(16, 185, 129, 0.06) 100%)',
            border: '1px solid rgba(14, 165, 233, 0.25)',
            borderRadius: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#0369A1' }}>
              <Globe size={18} color="#0EA5E9" />
              <span>
                {pageLang === 'de'
                  ? '🇨🇭🇩🇪 Offizielle deutsche Inhalte (Engadin / Tiefbauamt Graubünden)'
                  : pageLang === 'it'
                    ? '🇨🇭🇮🇹 Contenuto ufficiale in italiano (Val Poschiavo / Cantone dei Grigioni)'
                    : '🇬🇧 English Mountain Pass Portal (Switch to German or Italian anytime)'}
              </span>
            </div>
            <div style={{ display: 'inline-flex', borderRadius: '6px', overflow: 'hidden', border: '1px solid #CBD5E1', background: '#FFFFFF' }}>
              <button
                type="button"
                onClick={() => setPageLang('en')}
                style={{
                  padding: '6px 12px',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  border: 'none',
                  backgroundColor: pageLang === 'en' ? '#0EA5E9' : 'transparent',
                  color: pageLang === 'en' ? '#FFFFFF' : '#475569',
                  transition: 'all 0.2s ease'
                }}
              >
                🇬🇧 English
              </button>
              <button
                type="button"
                onClick={() => setPageLang('de')}
                style={{
                  padding: '6px 12px',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  border: 'none',
                  backgroundColor: pageLang === 'de' ? '#0EA5E9' : 'transparent',
                  color: pageLang === 'de' ? '#FFFFFF' : '#475569',
                  transition: 'all 0.2s ease'
                }}
              >
                🇩🇪 Deutsch
              </button>
              <button
                type="button"
                onClick={() => setPageLang('it')}
                style={{
                  padding: '6px 12px',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  border: 'none',
                  backgroundColor: pageLang === 'it' ? '#0EA5E9' : 'transparent',
                  color: pageLang === 'it' ? '#FFFFFF' : '#475569',
                  transition: 'all 0.2s ease'
                }}
              >
                🇮🇹 Italiano
              </button>
            </div>
          </div>
        )}

        {pass.slug === 'gotthard-pass' && (
          <div className="bilingual-toggle-wrap lp-card" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            padding: '12px 18px',
            marginBottom: '18px',
            background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.08) 0%, rgba(59, 130, 246, 0.06) 100%)',
            border: '1px solid rgba(220, 38, 38, 0.25)',
            borderRadius: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#991B1B' }}>
              <Globe size={18} color="#DC2626" />
              <span>
                {pageLang === 'de'
                  ? '🇨🇭🇩🇪 Offizielle deutsche Inhalte (Uri / Zentralschweiz)'
                  : pageLang === 'it'
                    ? '🇨🇭🇮🇹 Contenuto ufficiale in italiano (Ticino / San Gottardo)'
                    : '🇬🇧 English Mountain Pass Portal (Switch to German or Italian anytime)'}
              </span>
            </div>
            <div style={{ display: 'inline-flex', borderRadius: '6px', overflow: 'hidden', border: '1px solid #CBD5E1', background: '#FFFFFF' }}>
              <button
                type="button"
                onClick={() => setPageLang('en')}
                style={{
                  padding: '6px 12px',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  border: 'none',
                  backgroundColor: pageLang === 'en' ? '#DC2626' : 'transparent',
                  color: pageLang === 'en' ? '#FFFFFF' : '#475569',
                  transition: 'all 0.2s ease'
                }}
              >
                🇬🇧 English
              </button>
              <button
                type="button"
                onClick={() => setPageLang('de')}
                style={{
                  padding: '6px 12px',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  border: 'none',
                  backgroundColor: pageLang === 'de' ? '#DC2626' : 'transparent',
                  color: pageLang === 'de' ? '#FFFFFF' : '#475569',
                  transition: 'all 0.2s ease'
                }}
              >
                🇩🇪 Deutsch
              </button>
              <button
                type="button"
                onClick={() => setPageLang('it')}
                style={{
                  padding: '6px 12px',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  border: 'none',
                  backgroundColor: pageLang === 'it' ? '#DC2626' : 'transparent',
                  color: pageLang === 'it' ? '#FFFFFF' : '#475569',
                  transition: 'all 0.2s ease'
                }}
              >
                🇮🇹 Italiano
              </button>
            </div>
          </div>
        )}

        {/* Pass Header & Action Bar */}
        <header className="pass-detail-header-row">
          <div className="pass-title-group">
            {/* Live Status & Last Updated Bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '14px' }}>
              <StatusBadge status={displayedStatus} size="lg" />
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', borderRadius: '9999px', backgroundColor: 'rgba(56, 189, 248, 0.12)', color: 'var(--primary)', fontSize: '13px', fontWeight: '700', border: '1px solid rgba(56, 189, 248, 0.25)' }}>
                <Clock size={14} />
                <span>
                  {pass.slug === 'susten-pass' && pageLang === 'hi'
                    ? `अंतिम अपडेट : ${pass.lastUpdated}`
                    : pass.slug === 'susten-pass' && pageLang === 'de'
                      ? `Letzte Aktualisierung : ${pass.lastUpdated}`
                      : pass.slug === 'vrsic-pass' && pageLang === 'sl'
                        ? `Posodobljeno : ${pass.lastUpdated}`
                        : pass.slug === 'prislop-pass' && pageLang === 'ro'
                          ? `Actualizat : ${pass.lastUpdated}`
                          : pass.slug === 'bernina-pass' && pageLang === 'de'
                            ? `Letzte Aktualisierung : ${pass.lastUpdated}`
                            : pass.slug === 'bernina-pass' && pageLang === 'it'
                              ? `Ultimo aggiornamento : ${pass.lastUpdated}`
                              : pass.slug === 'gotthard-pass' && pageLang === 'de'
                                ? `Letzte Aktualisierung : ${pass.lastUpdated}`
                                : pass.slug === 'gotthard-pass' && pageLang === 'it'
                                  ? `Ultimo aggiornamento : ${pass.lastUpdated}`
                                  : pass.slug === 'grimsel-pass' && pageLang === 'de'
                                    ? `Letzte Aktualisierung : ${pass.lastUpdated}`
                                    : (pass.slug === 'col-du-galibier' || pass.slug === 'col-de-l-iseran' || pass.slug === 'col-de-la-bonette' || (pass.slug === 'col-agnel' && pageLang === 'fr'))
                                      ? `Dernière mise à jour : ${pass.lastUpdated}`
                                      : (pass.slug === 'great-st-bernard-pass' || (pass.slug === 'col-agnel' && pageLang === 'it'))
                                        ? `Ultimo aggiornamento : ${pass.lastUpdated}`
                                        : `Last updated: ${pass.lastUpdated}`}
                </span>
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '9999px', backgroundColor: 'var(--bg-surface-subtle)', color: 'var(--text-secondary)', fontSize: '13px', border: '1px solid var(--border-color)' }}>
                <Mountain size={14} />
                <span>
                  {pass.slug === 'susten-pass' && pageLang === 'hi'
                    ? `ऊंचाई : ${pass.elevationM.toLocaleString()} मी (${pass.elevationFt.toLocaleString()} फीट)`
                    : pass.slug === 'susten-pass' && pageLang === 'de'
                      ? `Passhöhe : ${pass.elevationM.toLocaleString()} m (${pass.elevationFt.toLocaleString()} ft)`
                      : pass.slug === 'vrsic-pass' && pageLang === 'sl'
                        ? `Nadmorska višina : ${pass.elevationM.toLocaleString()} m (${pass.elevationFt.toLocaleString()} ft)`
                        : pass.slug === 'prislop-pass' && pageLang === 'ro'
                          ? `Altitudine : ${pass.elevationM.toLocaleString()} m (${pass.elevationFt.toLocaleString()} ft)`
                          : pass.slug === 'bernina-pass' && pageLang === 'de'
                            ? `Passhöhe : ${pass.elevationM.toLocaleString()} m (${pass.elevationFt.toLocaleString()} ft)`
                            : pass.slug === 'bernina-pass' && pageLang === 'it'
                              ? `Altitudine : ${pass.elevationM.toLocaleString()} m (${pass.elevationFt.toLocaleString()} ft)`
                              : pass.slug === 'gotthard-pass' && pageLang === 'de'
                                ? `Passhöhe : ${pass.elevationM.toLocaleString()} m (${pass.elevationFt.toLocaleString()} ft)`
                                : pass.slug === 'gotthard-pass' && pageLang === 'it'
                                  ? `Altitudine : ${pass.elevationM.toLocaleString()} m (${pass.elevationFt.toLocaleString()} ft)`
                                  : pass.slug === 'grimsel-pass' && pageLang === 'de'
                                    ? `Passhöhe : ${pass.elevationM.toLocaleString()} m (${pass.elevationFt.toLocaleString()} ft)`
                                    : (pass.slug === 'col-du-galibier' || pass.slug === 'col-de-l-iseran' || pass.slug === 'col-de-la-bonette' || (pass.slug === 'col-agnel' && pageLang === 'fr'))
                                      ? `Altitude : ${pass.elevationM.toLocaleString()} m (${pass.elevationFt.toLocaleString()} ft)`
                                      : (pass.slug === 'great-st-bernard-pass' || (pass.slug === 'col-agnel' && pageLang === 'it'))
                                        ? `Altitudine : ${pass.elevationM.toLocaleString()} m (${pass.elevationFt.toLocaleString()} ft)`
                                        : `Elevation: ${pass.elevationFt.toLocaleString()} ft (${pass.elevationM.toLocaleString()} m)`}
                </span>
              </div>
            </div>

            <div className="title-and-star">
              <h1 className="pass-main-heading">
                {pass.slug === 'col-agnel'
                  ? (pageLang === 'it'
                    ? "Colle dell'Agnello (2 744 m) SP251 : Stato Strada, Webcam Live, Meteo Monviso & Apertura"
                    : pageLang === 'fr'
                      ? "Col Agnel (2 744 m) Route D205 Queyras : État de la Route, Webcam Live, Météo & Date d'Ouverture"
                      : "Col Agnel / Colle dell'Agnello (2,744 m / 9,003 ft) SP251/D205: Live Webcams, Road Conditions, Weather & Open Status")
                  : pass.slug === 'col-de-la-bonette'
                  ? (pageLang === 'fr'
                    ? "Col de la Bonette (2 802 m) : État de la Route D64, Webcam Live, Météo & Date d'Ouverture"
                    : "Col de la Bonette & Cime (2,802 m / 9,193 ft) Road D64: Live Webcams, Road Conditions, Weather & Open/Closed Status")
                  : pass.slug === 'vrsic-pass'
                    ? (pageLang === 'sl'
                      ? "Prelaz Vršič (1.611 m) : Stanje Ceste R206, Spletne Kamere v Živo, Vreme & Odprtost"
                      : "Vršič Pass (1,611 m / 5,285 ft) Road 206: Live Webcams, Road Conditions, Weather & Open/Closed Status")
                    : pass.slug === 'prislop-pass'
                      ? (pageLang === 'ro'
                        ? "Pasul Prislop (1.416 m) DN18 : Starea Drumului, Webcam Live, Meteo & Ghid Rutier"
                        : "Prislop Pass (1,416 m / 4,646 ft) DN18: Road Conditions, Live Webcam, Weather & Travel Guide")
                      : pass.slug === 'bernina-pass'
                        ? (pageLang === 'de'
                          ? "Berninapass : Strassenzustand, Live Webcam, Wetter & Öffnungszeiten"
                          : pageLang === 'it'
                            ? "Passo del Bernina : Stato della Strada, Webcam Live, Meteo & Apertura"
                            : "Bernina Pass: Live Webcam, Road Conditions, Opening Status & Weather")
                        : pass.slug === 'gotthard-pass'
                          ? (pageLang === 'de'
                            ? "Gotthardpass : Strassenzustand, Live Webcam, Wetter & Öffnungszeiten"
                            : pageLang === 'it'
                              ? "Passo del San Gottardo : Stato della Strada, Webcam Live, Meteo & Apertura"
                              : "Gotthard Pass: Live Webcam, Road Conditions, Opening Date & Status")
                          : pass.slug === 'grimsel-pass'
                            ? (pageLang === 'de'
                              ? "Grimselpass : Strassenzustand, Live Webcam, Wetter & Öffnungszeiten"
                              : "Grimsel Pass: Live Webcam, Road Conditions, Opening Status & Weather")
                            : pass.slug === 'susten-pass'
                              ? (pageLang === 'hi'
                                ? "सुस्टेन पास (2,224 मी) : सड़क स्थिति, लाइव वेबकैम, मौसम और खुलने की तारीख 2026"
                                : pageLang === 'de'
                                  ? "Sustenpass : Strassenzustand, Live-Webcams, Wetter & Öffnungszeiten"
                                  : "Susten Pass: Live Webcams, Road Conditions, Opening Status & Weather 2026")
                            : pass.slug === 'col-du-galibier'
                              ? (pageLang === 'fr'
                                ? "Col du Galibier : État de la Route, Webcam Live, Météo & Date d'Ouverture"
                                : "Col du Galibier Pass: Live Webcam, Road Conditions, Opening Status & Weather")
                              : pass.slug === 'col-de-l-iseran'
                                ? (pageLang === 'fr'
                                  ? "Col de l'Iseran : État de la Route, Webcam Live, Météo & Date d'Ouverture"
                                  : "Col de l'Iseran Pass: Live Webcam, Road Conditions, Opening Status & Weather")
                                : pass.slug === 'great-st-bernard-pass'
                                  ? (pageLang === 'it'
                                    ? "Colle del Gran San Bernardo : Stato della Strada, Webcam Live, Meteo & Apertura"
                                    : "Great St Bernard Pass: Live Webcam, Road Conditions, Opening Status & Weather")
                                  : (pass.customSeo?.h1 || `${pass.name} Live Webcam & Road Conditions`)}
              </h1>
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
              <span>
                {pass.slug === 'susten-pass' && pageLang === 'hi'
                  ? `ऊंचाई : ${pass.elevationM.toLocaleString()} मी (${pass.elevationFt.toLocaleString()} फीट)`
                  : pass.slug === 'susten-pass' && pageLang === 'de'
                    ? `Passhöhe : ${pass.elevationM.toLocaleString()} m (${pass.elevationFt.toLocaleString()} ft)`
                    : pass.slug === 'vrsic-pass' && pageLang === 'sl'
                      ? `Nadmorska višina : ${pass.elevationM.toLocaleString()} m (${pass.elevationFt.toLocaleString()} ft)`
                      : pass.slug === 'prislop-pass' && pageLang === 'ro'
                        ? `Altitudine : ${pass.elevationM.toLocaleString()} m (${pass.elevationFt.toLocaleString()} ft)`
                        : pass.slug === 'bernina-pass' && pageLang === 'de'
                          ? `Passhöhe : ${pass.elevationM.toLocaleString()} m (${pass.elevationFt.toLocaleString()} ft)`
                          : pass.slug === 'bernina-pass' && pageLang === 'it'
                            ? `Altitudine : ${pass.elevationM.toLocaleString()} m (${pass.elevationFt.toLocaleString()} ft)`
                            : (pass.slug === 'grimsel-pass' || pass.slug === 'susten-pass') && pageLang === 'de'
                              ? `Passhöhe : ${pass.elevationM.toLocaleString()} m (${pass.elevationFt.toLocaleString()} ft)`
                              : (pass.slug === 'col-du-galibier' || pass.slug === 'col-de-l-iseran' || pass.slug === 'col-de-la-bonette' || (pass.slug === 'col-agnel' && pageLang === 'fr'))
                                ? `Sommet : ${pass.elevationM.toLocaleString()} m (${pass.elevationFt.toLocaleString()} ft)`
                                : (pass.slug === 'great-st-bernard-pass' || (pass.slug === 'col-agnel' && pageLang === 'it'))
                                  ? `Sommità : ${pass.elevationM.toLocaleString()} m (${pass.elevationFt.toLocaleString()} ft)`
                                  : `Summit: ${pass.elevationFt.toLocaleString()} ft (${pass.elevationM.toLocaleString()} m)`}
              </span>
            </div>
            <p className="pass-summary-paragraph">
              {pass.slug === 'susten-pass'
                ? (pageLang === 'hi'
                  ? "सुस्टेन पास (ऊंचाई 2,224 मीटर / 7,297 फीट) स्विस आल्प्स के सबसे सुरम्य और आधुनिक उच्च-पर्वतीय दर्रों में से एक है। हौप्तस्ट्रासे 11 (रूट 11) पर स्थित यह दर्रा बर्न के ओबरलैंड (इन्नर्टकिर्चन / मीरिंगन) को उरी कैंटन की मीयनताल घाटी और रॉस घाटी (वासेन / गोथार्ड कॉरिडोर) से जोड़ता है। अपने 25 प्राकृतिक पत्थर के मेहराबदार पुलों, 300 मीटर लंबी शिखर सुरंग और स्टाइनग्लेशियर हिमनद के मनमोहक नज़ारों के लिए प्रसिद्ध, सुस्टेन पास ग्रिमसेल और फुर्का दर्रों के साथ मिलकर स्विट्जरलैंड का विश्व-प्रसिद्ध 'बिग 3' आल्प्स लूप बनाता है।"
                  : pageLang === 'de'
                    ? "Der Sustenpass (2.224 m ü. M. / 7.297 ft) ist eine der landschaftlich grossartigsten und fahrtechnisch modernsten Hochgebirgsstrassen der Schweizer Alpen. Auf der Hauptstrasse 11 verbindet er das Haslital im Berner Oberland (Innertkirchen / Meiringen) mit dem Meiental und Reusstal im Kanton Uri (Wassen / Gotthard-Achse). Bekannt für seine kühnen Steinbrücken, den Scheiteltunnel und den grandiosen Blick auf den Steingletscher, bildet der Sustenpass zusammen mit Grimsel und Furka das weltberühmte Schweizer «Dreipässe-Erlebnis»."
                    : "Susten Pass (elevation 2,224 m / 7,297 ft) is one of the most scenic and masterfully engineered high-alpine mountain passes in the Swiss Alps. Carrying Hauptstrasse 11 (Route 11), it connects Haslital in the Bernese Oberland (Innertkirchen / Meiringen) with Meiental and the Reuss Valley in the Canton of Uri (Wassen / Gotthard transit corridor). Renowned for its 25 natural stone bridges, the 300-meter summit tunnel, and breathtaking views of the Steingletscher glacier, Susten Pass forms the legendary Swiss 'Big 3' alpine loop alongside Grimsel and Furka.")
                : pass.slug === 'col-agnel'
                ? (pageLang === 'it'
                  ? "Il Colle dell'Agnello (Col Agnel, 2 744 m / 9 003 ft) è il 3° valico stradale asfaltato più alto delle Alpi e il più alto valico transfrontaliero internazionale d'Europa lungo la SP251 e la D205, che unisce la Valle Varaita (Pontechianale, Cuneo, Piemonte) con il Queyras (Hautes-Alpes, Francia). Circondato dal maestoso gruppo del Monviso (3 841 m) e dal Pain de Sucre (3 208 m), è una leggendaria Cima Coppi del Giro d'Italia e vetta regina del ciclismo alpino."
                  : pageLang === 'fr'
                    ? "Le Col Agnel (Colle dell'Agnello, 2 744 m / 9 003 ft) est le 3e plus haut col routier des Alpes et le plus haut col frontière international d'Europe sur la Route D205 et la SP251, reliant le Parc Naturel Régional du Queyras (Molines-en-Queyras, Hautes-Alpes) au Piémont italien (Pontechianale, Val Varaita). Dominé par le Pain de Sucre et le Mont Viso, il est une légende du Tour de France et du Giro d'Italia."
                    : "Col Agnel / Colle dell'Agnello (2,744 m / 9,003 ft) is the 3rd highest paved mountain road pass in the Alps and the highest international border pass in Europe along SP251 / Route D205, linking Pontechianale in Piedmont's Valle Varaita with Molines-en-Queyras in the French Queyras. Dominated by Mount Monviso and Pain de Sucre, it is a renowned Cima Coppi in the Giro d'Italia and a global cycling icon.")
                : pass.slug === 'col-de-la-bonette'
                ? (pageLang === 'fr'
                  ? "Le Col de la Bonette (2 715 m) et la boucle de la Cime de la Bonette (2 802 m / 9 193 ft) constituent la plus haute route asphaltée de France et la plus haute boucle routière d'Europe sur la Route départementale D64 (Route des Grandes Alpes), reliant Jausiers dans la Vallée de l'Ubaye (Alpes-de-Haute-Provence) à Saint-Étienne-de-Tinée (Alpes-Maritimes) à travers le Parc National du Mercantour. Célèbre pour ses panoramas à 360 degrés vers la Méditerranée, les ruines militaires du Camp des Fourches et les casemates Maginot du Restefond."
                  : "Col de la Bonette (2,715 m) and the scenic summit loop of Cime de la Bonette (2,802 m / 9,193 ft) form the highest paved through-road in France and Europe along Route D64 (Route des Grandes Alpes), linking Jausiers in the Ubaye Valley (Alpes-de-Haute-Provence) with Saint-Étienne-de-Tinée (Alpes-Maritimes) in Mercantour National Park. Celebrated for 360-degree vistas extending to the Mediterranean, the ghost military village of Camp des Fourches, and the Maginot Line Restefond casemates.")
                : pass.slug === 'vrsic-pass'
                  ? (pageLang === 'sl'
                    ? "Prelaz Vršič (1.611 m / 5.285 ft) je najvišji gorski cestni prelaz v Vzhodnih Julijskih Alpah v Sloveniji, ki povezuje Gorenjsko (Kranjska Gora) s Primorsko in dolino reke Soče (Trenta / Bovec) po Regionalni cesti 206 (Ruska cesta). Znan po svojih 50 znamenitih serpentinah, Ruski kapelici, planinskih kočah (Erjavčeva koča, Tičarjev dom, Poštarski dom) ter nepozabnem pogledu na Ajdovsko deklico v Prisojniku in vrhove Triglavskega narodnega parka."
                    : "Vršič Pass (1,611 m / 5,285 ft) is the highest paved mountain road pass in the Eastern Julian Alps of Slovenia, connecting Kranjska Gora in Upper Carniola with Trenta and Bovec in the emerald Soča Valley along Road 206 (the Russian Road). Celebrated for its 50 numbered hairpin turns, the historic World War I Russian Chapel, iconic alpine huts, and breathtaking views of Mount Prisank and Triglav National Park.")
                  : pass.slug === 'prislop-pass'
                    ? (pageLang === 'ro'
                      ? "Pasul Prislop (1.416 m / 4.646 ft) este cea mai înaltă trecătoare rutieră din Carpații Orientali din România, situată pe Drumul Național 18 (DN18) la granița istorică dintre județele Maramureș și Suceava (Bucovina). Înconjurată de piscurile maiestuoase ale Munților Rodnei și Munților Maramureșului, trecătoarea oferă o conexiune vitală între Țara Maramureșului (Borșa) și Țara Fagilor (Cârlibaba / Iacobeni / Vatra Dornei). În vârful pasului se află Mănăstirea Prislop (Schitul Sfânta Treime), Hanul Prislop și Monumentul Eroilor, iar în fiecare august platoul găzduiește marele festival folcloric «Hora de la Prislop»."
                      : "Prislop Pass (1,416 m / 4,646 ft) is the highest paved mountain pass in the Eastern Carpathians of Romania, carrying National Road DN18 across the scenic boundary between Maramureș (Borșa) and Bucovina (Cârlibaba / Iacobeni, Suceava County). Flanked by the majestic Rodna and Maramureș mountain ranges, it offers fully modernized asphalt, the wooden Holy Trinity Prislop Monastery at the summit, and hosts the historic annual 'Hora de la Prislop' folklore celebration.")
                  : pass.slug === 'bernina-pass'
                    ? (pageLang === 'de'
                      ? "Der Berninapass (2.328 m ü. M. / 7.638 ft) verbindet das Engadin (Pontresina / St. Moritz) im Kanton Graubünden mit dem Puschlav (Val Poschiavo) und Tirano in Italien über die Hauptstrasse 29. Als einer der wenigen Schweizer Hochgebirgspässe wird die Bernina-Strasse vom Tiefbauamt Graubünden ganzjährig 365 Tage offen gehalten. Parallel zur Passstrasse verläuft die weltberühmte UNESCO-Welterbestrecke der Rhätischen Bahn (Bernina Express) am Ufer des türkisfarbenen Lago Bianco."
                      : pageLang === 'it'
                        ? "Il Passo del Bernina (2.328 m / 7.638 ft) è un celebre valico alpino che collega l'Engadina (Pontresina / St. Moritz) nel Cantone dei Grigioni con la Val Poschiavo e Tirano in Italia tramite la Hauptstrasse 29. A differenza di molti altri passi svizzeri, la strada del Bernina è mantenuta aperta tutto l'anno (365 giorni) dagli spazzaneve del Cantone dei Grigioni. Lungo il lago Bianco si snoda anche la ferrovia retica del Bernina Express, patrimonio mondiale UNESCO."
                        : "Bernina Pass (2,328 m / 7,638 ft) is a world-renowned alpine mountain pass connecting the Engadin valley (Pontresina / St. Moritz) in the Canton of Graubünden with Val Poschiavo and Tirano (Italy) along Hauptstrasse 29 (Route 29). Maintained open year-round by Tiefbauamt Graubünden rotary snowplows, the scenic pass skirts the turquoise glacial waters of Lago Bianco and parallels the UNESCO World Heritage Bernina Express railway line.")
                    : pass.slug === 'grimsel-pass'
                      ? (pageLang === 'de'
                        ? "Der Grimselpass (2.164 m ü. M. / 7.100 ft) ist ein weltberühmter Schweizer Hochgebirgspass an der Hauptstrasse 6, der das Haslital im Berner Oberland (Kanton Bern) mit dem Goms im Oberwallis (Kanton Wallis) verbindet. Geprägt von monumentalen Granitfelswänden, türkisfarbenen Stauseen (Grimselsee, Räterichsbodensee, Totensee) und dem historischen Grimsel Hospiz, bildet der Pass zusammen mit Furka und Susten die legendäre «Grossen Drei» Alpenpass-Runde."
                        : "Grimsel Pass (2,164 m / 7,100 ft) is a world-renowned Swiss high alpine pass on Route 6 connecting Haslital in the Bernese Oberland (Canton of Bern) with Goms in Upper Valais (Canton of Valais). Famous for its massive polished granite cliffs, turquoise hydropower reservoirs (Grimselsee, Räterichsbodensee, Totensee), and the historic Grimsel Hospiz, it forms the iconic Swiss 'Big 3' pass loop alongside Furka and Susten.")
                      : pass.slug === 'col-du-galibier'
                        ? (pageLang === 'fr'
                          ? "Le Col du Galibier (2 642 m / 8 668 ft) est un col routier légendaire des Alpes françaises reliant Saint-Michel-de-Maurienne et Valloire en Savoie au Col du Lautaret et Briançon dans les Hautes-Alpes via la D902. Haut lieu historique du Tour de France et de la Route des Grandes Alpes, il offre un panorama grandiose sur les glaciers des Écrins et la Meije."
                          : "Col du Galibier (2,642 m / 8,668 ft) is a legendary high mountain pass in the French Alps connecting Saint-Michel-de-Maurienne & Valloire in Savoie with Col du Lautaret & Briançon in Hautes-Alpes along Route D902. A historic peak of the Tour de France and the Route des Grandes Alpes, it offers magnificent views of the Écrins glaciers and the Meije.")
                        : pass.slug === 'col-de-l-iseran'
                          ? (pageLang === 'fr'
                            ? "Le Col de l'Iseran (2 770 m / 9 088 ft — 2 764 m IGN) est le plus haut col de montagne routier goudronné de toutes les Alpes et d'Europe, situé en Savoie sur la mythique Route des Grandes Alpes (D902). Reliant la Haute-Tarentaise (Val-d'Isère) à la Haute-Maurienne (Bonneval-sur-Arc), il traverse les paysages glaciaires spectaculaires du Parc National de la Vanoise."
                            : "Col de l'Iseran (2,770 m / 9,088 ft — 2,764 m IGN) is the highest paved mountain pass in the Alps and all of Europe, located in Savoie along the legendary Route des Grandes Alpes (D902). Connecting Haute-Tarentaise (Val-d'Isère) with Haute-Maurienne (Bonneval-sur-Arc), it traverses spectacular glacial landscapes in the heart of Vanoise National Park.")
                          : pass.slug === 'great-st-bernard-pass'
                            ? (pageLang === 'it'
                              ? "Il Colle del Gran San Bernardo (2.469 m / 8.100 ft) è un leggendario valico alpino che collega Martigny nel Cantone Vallese (Svizzera) con Saint-Rhémy-en-Bosses e la Valle d'Aosta (Italia) tramite la Route 21 / SS27. Famoso in tout le monde per il millenario Ospizio fondato nel 1049 da San Bernardo, i leggendari cani San Bernardo da soccorso e la storica traversata di Napoleone nel maggio 1800, la strada panoramica costeggia uno spettacolare lago glaciale di confine."
                              : "Great St Bernard Pass (2,469 m / 8,100 ft) is a legendary transalpine mountain pass connecting Martigny & Val d'Entremont in Valais (Switzerland) with Saint-Rhémy-en-Bosses & Aosta Valley (Italy) on Route 21 / SS27. Renowned for its millennium-old Hospice founded in 1049, iconic St. Bernard rescue dogs, and Napoleon's 1800 army crossing, the scenic road skirts an alpine border lake of extraordinary beauty.")
                            : pass.description}
            </p>
          </div>

          <div className="pass-header-actions">
            <button onClick={handleShare} className="btn btn-secondary action-pill-btn">
              <Share2 size={16} />
              {pass.slug === 'susten-pass' && pageLang === 'hi'
                ? 'शेयर करें'
                : pass.slug === 'susten-pass' && pageLang === 'de'
                  ? 'Teilen'
                  : pass.slug === 'vrsic-pass' && pageLang === 'sl'
                    ? 'Deli povezavo'
                    : pass.slug === 'prislop-pass' && pageLang === 'ro'
                      ? 'Distribuie'
                      : pass.slug === 'bernina-pass' && pageLang === 'de'
                        ? 'Teilen'
                        : pass.slug === 'bernina-pass' && pageLang === 'it'
                          ? 'Condividi'
                          : pass.slug === 'grimsel-pass' && pageLang === 'de'
                            ? 'Teilen'
                            : (pass.slug === 'col-du-galibier' || pass.slug === 'col-de-l-iseran' || pass.slug === 'col-de-la-bonette' || (pass.slug === 'col-agnel' && pageLang === 'fr'))
                              ? 'Partager'
                              : (pass.slug === 'great-st-bernard-pass' || (pass.slug === 'col-agnel' && pageLang === 'it'))
                                ? 'Condividi'
                                : 'Share'}
            </button>
            <button onClick={toggleFavorite} className="btn btn-secondary action-pill-btn">
              <Heart size={16} fill={isFavorite ? '#EF4444' : 'none'} color={isFavorite ? '#EF4444' : 'currentColor'} />
              {isFavorite
                ? (pass.slug === 'susten-pass' && pageLang === 'hi'
                  ? 'पसंदीदा में सुरक्षित'
                  : pass.slug === 'susten-pass' && pageLang === 'de'
                    ? 'Gemerkt'
                    : pass.slug === 'vrsic-pass' && pageLang === 'sl'
                      ? 'Shranjeno med priljubljene'
                      : pass.slug === 'prislop-pass' && pageLang === 'ro'
                        ? 'Salvat la favorite'
                        : pass.slug === 'bernina-pass' && pageLang === 'de'
                          ? 'Gemerkt'
                          : pass.slug === 'bernina-pass' && pageLang === 'it'
                            ? 'Preferito'
                            : pass.slug === 'grimsel-pass' && pageLang === 'de'
                              ? 'Gemerkt'
                              : (pass.slug === 'col-du-galibier' || pass.slug === 'col-de-l-iseran' || pass.slug === 'col-de-la-bonette') && pageLang === 'fr'
                                ? 'Favori'
                                : pass.slug === 'great-st-bernard-pass' && pageLang === 'it'
                                  ? 'Preferito'
                                  : 'Favorited')
                : (pass.slug === 'susten-pass' && pageLang === 'hi'
                  ? 'पसंदीदा में जोड़ें'
                  : pass.slug === 'susten-pass' && pageLang === 'de'
                    ? 'Pass merken'
                    : pass.slug === 'vrsic-pass' && pageLang === 'sl'
                      ? 'Dodaj med priljubljene'
                      : pass.slug === 'prislop-pass' && pageLang === 'ro'
                        ? 'Adaugă la favorite'
                        : pass.slug === 'bernina-pass' && pageLang === 'de'
                          ? 'Pass merken'
                              : 'Add to Favorites')}
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

            {pass.slug === 'grimsel-pass' && (
              <div className="grimsel-regulations-callout lp-card" style={{
                borderLeft: '4px solid #EA580C',
                padding: '20px',
                marginBottom: '24px',
                backgroundColor: 'rgba(234, 88, 12, 0.04)',
                borderRadius: '6px'
              }}>
                <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px', color: '#9A3412' }}>
                  <ShieldCheck size={20} color="#EA580C" />
                  <span>
                    {pageLang === 'de'
                      ? 'Wichtige Alpenstrassen-Hinweise & Verkehrsregeln (Grimselpass Bern 🇨🇭 / Wallis 🇨🇭)'
                      : 'Important Swiss Alpine Transit Regulations (Grimsel Pass Bern / Valais 🇨🇭)'}
                  </span>
                </h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: '#374151' }}>
                  {pageLang === 'de' ? (
                    <>
                      <strong>Strassencharakter &amp; Verkehrsführung :</strong> Die <strong>Grimsel-Passstrasse (Hauptstrasse 6)</strong> ist 100% mautfrei (keine Autobahnvignette auf der Passstrasse erforderlich) und im Sommer von Anfang Juni bis Ende Oktober für PKW, Motorräder und Radfahrer befahrbar. <em>Achtung: Maximales Gesamtgewicht 18 Tonnen; Wohnwagen und schwere Gespanne sollten über erfahrene Bergfahrer verfügen.</em>
                    </>
                  ) : (
                    <>
                      <strong>Road Character &amp; Transit Rules:</strong> The <strong>Grimsel Pass Highway (Hauptstrasse 6)</strong> is 100% toll-free (no Swiss motorway vignette required) and open during summer from early June to late October for cars, motorbikes, and cyclists. <em>Note: 18-tonne vehicle weight limit applies across the entire pass corridor.</em>
                    </>
                  )}
                </p>
                <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px', fontSize: '13.5px', color: '#4B5563', lineHeight: '1.6' }}>
                  {pageLang === 'de' ? (
                    <>
                      <li><strong>Postauto-Vortritt &amp; Dreiklanghorn :</strong> Auf schmalen Bergpoststrassen haben gelbe Postautos stets Vortritt. Bei Signalhörern vor unübersichtlichen Kurven rechts halten und nötigenfalls anhalten.</li>
                      <li><strong>Wintersperre &amp; Autoverlad-Alternativen :</strong> Während der Wintersperre (November bis Ende Mai) besteht kein Durchgangsverkehr. Ganzjährige Alternativen: <strong>Autoverlad Lötschberg (BLS)</strong> zwischen Kandersteg und Goppenstein oder <strong>Autoverlad Furka (MGB)</strong> zwischen Realp und Oberwald.</li>
                      <li><strong>Baustellenbereich Spitallamm-Staumauer :</strong> Zwischen Handegg und Grimsel Hospiz finden Bauarbeiten am Ersatzneubau der Spitallamm-Talsperre statt. Geschwindigkeitsbegrenzungen (40–60 km/h) und Baustellen-LKW beachten.</li>
                    </>
                  ) : (
                    <>
                      <li><strong>PostBus Right-of-Way:</strong> Yellow Swiss PostBuses have strict legal priority on narrow mountain sections. Yield when hearing the iconic 3-tone horn before blind curves.</li>
                      <li><strong>Winter Closure &amp; Car Train Shuttles:</strong> When Grimsel is closed in winter (Nov–May), year-round vehicle transit uses the BLS Lötschberg car shuttle train (Kandersteg–Goppenstein) or MGB Furka car train (Realp–Oberwald).</li>
                      <li><strong>Spitallamm Dam Construction:</strong> Active construction traffic between Handegg and Grimsel Hospiz for the new Spitallamm dam; observe posted 40–60 km/h speed limits.</li>
                    </>
                  )}
                </ul>
              </div>
            )}

            {pass.slug === 'susten-pass' && (
              <div className="susten-regulations-callout lp-card" style={{
                borderLeft: '4px solid #EA580C',
                padding: '20px',
                marginBottom: '24px',
                backgroundColor: 'rgba(234, 88, 12, 0.04)',
                borderRadius: '6px'
              }}>
                <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px', color: '#9A3412' }}>
                  <ShieldCheck size={20} color="#EA580C" />
                  <span>
                    {pageLang === 'hi'
                      ? 'सुस्टेन पास पारगमन नियम और सुरक्षा जानकारी (Hauptstrasse 11)'
                      : pageLang === 'de'
                        ? 'Wichtige Hinweise & Strassenordnung Sustenpass (Hauptstrasse 11)'
                        : 'Important Alpine Transit Regulations & Safety Guide (Susten Pass H11)'}
                  </span>
                </h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: '#374151' }}>
                  {pageLang === 'hi' ? (
                    <>
                      <strong>100% टोल-मुक्त अल्पाइन हाईवे :</strong> सुस्टेन पास (हौप्तस्ट्रासे 11) पूरी तरह से 100% टोल-मुक्त है और बर्न के इन्नर्टकिर्चन को उरी के वासेन से जोड़ता है। 300 मीटर लंबी शिखर सुरंग (2,224 मी) में दोनों दिशाओं का यातायात सुगम रहता है।
                    </>
                  ) : pageLang === 'de' ? (
                    <>
                      <strong>100% Mautfreie Kantonsstrasse :</strong> Der Sustenpass (Hauptstrasse 11) ist eine vollwertige, zweispurige Hochgebirgsstrasse ohne Mautgebühr. Der 300 m lange Scheiteltunnel auf 2.224 m verbindet das Berner Haslital mit dem Urner Meiental.
                    </>
                  ) : (
                    <>
                      <strong>100% Toll-Free Cantonal Alpine Highway:</strong> Susten Pass (Hauptstrasse 11) is a modern, fully paved two-lane mountain highway with zero tolls. The 300-meter summit crest tunnel at 2,224 m provides effortless two-way transit between Haslital (Bern) and Meiental (Uri).
                    </>
                  )}
                </p>
                <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px', fontSize: '13.5px', color: '#4B5563', lineHeight: '1.6' }}>
                  {pageLang === 'hi' ? (
                    <>
                      <li><strong>शीतकालीन बंदी (नवंबर से जून) :</strong> सुस्टेन पास सर्दियों में 8-10 मीटर भारी बर्फबारी और हिमस्खलन जोखिम के कारण बंद रहता है। मई-जून में रोटरी स्नो ब्लोअर से बर्फ हटाई जाती है।</li>
                      <li><strong>'बिग 3' आल्प्स लूप :</strong> सुस्टेन पास ग्रिमसेल और फुर्का दर्रों के साथ मिलकर 120 किमी का विश्व-प्रसिद्ध स्विस अल्पाइन लूप बनाता है।</li>
                      <li><strong>पोस्टमेल बस प्राथमिकता :</strong> घुमावदार मोड़ों पर विशिष्ट 3-टोन हॉर्न बजाने वाली पीली स्विस पोस्टबसों को सदैव प्राथमिकता दें।</li>
                    </>
                  ) : pageLang === 'de' ? (
                    <>
                      <li><strong>Wintersperre November bis Juni :</strong> Der Sustenpass schliesst von November bis Mitte Juni wegen Schneemengen von bis zu 10 Metern und Lawinengefahr. Im Mai/Juni räumen Schneefräsen beider Kantone die Trasse frei.</li>
                      <li><strong>«Grossen Drei» Dreipässe-Runde :</strong> Bildet zusammen mit Grimselpass und Furkapass die weltberühmte 120 km Königstour der Schweizer Alpen.</li>
                      <li><strong>Postauto-Vortritt :</strong> Gelben Schweizer Postbussen bei Ertönen des Dreiklanghorns an engen Kurven stets Vortritt gewähren.</li>
                    </>
                  ) : (
                    <>
                      <li><strong>Seasonal Winter Closure:</strong> Susten Pass is closed from November to mid-June due to up to 10 meters of snowpack and avalanche danger. Rotary blowers clear the route in May/June.</li>
                      <li><strong>'Big 3' Alpine Pass Loop:</strong> Combines with Grimsel Pass and Furka Pass for Switzerland's iconic 120 km / 3,750 m elevation gain loop.</li>
                      <li><strong>Swiss PostBus Priority:</strong> Always yield to yellow Swiss PostBuses when they sound their three-tone horn on sharp mountain switchbacks.</li>
                    </>
                  )}
                </ul>
              </div>
            )}

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
                  <span>
                    {pageLang === 'fr'
                      ? 'Réglementations Alpins & Loi Montagne II (Tunnel D902 & Savoie / Hautes-Alpes)'
                      : 'Important French Alpine Regulations (D902 Tunnel & Loi Montagne II)'}
                  </span>
                </h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: '#374151' }}>
                  {pageLang === 'fr' ? (
                    <>
                      <strong>Tunnel historique du Galibier (2 556 m) :</strong> Alternat de circulation à voie unique régulé par feux tricolores. Hauteur maximale : 4,10 m, largeur max : 2,40 m, poids maximal : 3,5 tonnes. <em>Les cyclistes et piétons sont strictement interdits dans le tunnel pour des raisons de sécurité et doivent obligatoirement emprunter la route panoramique de la crête sommitale (2 642 m).</em>
                    </>
                  ) : (
                    <>
                      <strong>Historic Galibier Tunnel (2,556 m / 8,386 ft):</strong> Alternating three-color traffic lights (feux tricolores) regulate single-lane vehicle passage. Height limit: 4.1 m, width limit: 2.4 m, weight limit: 3.5 tonnes. <em>Cyclists, pedestrians, and hazardous goods vehicles are strictly prohibited inside the tunnel and must use the 2,642 m summit crest route.</em>
                    </>
                  )}
                </p>
                <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px', fontSize: '13.5px', color: '#4B5563', lineHeight: '1.6' }}>
                  {pageLang === 'fr' ? (
                    <>
                      <li><strong>Loi Montagne II (Équipements Hivernaux Obligatoires) :</strong> Du 1er novembre au 31 mars, tous les véhicules circulant en Savoie (73) et dans les Hautes-Alpes (05) doivent posséder 4 pneus hiver homologués 3PMSF ou détenir des chaînes/chaussettes à neige dans le coffre.</li>
                      <li><strong>Fermeture Hivernale Saisonnière :</strong> La D902 ferme chaque année de fin octobre/novembre jusqu'à fin mai/début juin en raison de congères dépassant 5 à 8 mètres de neige et du risque d'avalanche.</li>
                      <li><strong>Monument Henri Desgrange &amp; Marco Pantani :</strong> La stèle au créateur du Tour de France se trouve au portail sud du tunnel, et le monument Marco Pantani au versant nord (Les Granges).</li>
                    </>
                  ) : (
                    <>
                      <li><strong>Winter Equipment Mandate (Loi Montagne II):</strong> Between November 1 and March 31, all vehicles traveling in Savoie (73) and Hautes-Alpes (05) must either be equipped with 4 winter-certified tires (3PMSF) or carry removable anti-skid devices (snow chains or textile socks).</li>
                      <li><strong>Seasonal Winter Closure:</strong> D902 closes annually from late October/November until late May/early June. Rotary snowplows clear up to 8 meters of snowpack in May.</li>
                      <li><strong>Tour de France Monument:</strong> The monument to Tour founder Henri Desgrange is located at the south portal of the tunnel.</li>
                    </>
                  )}
                </ul>
              </div>
            )}

            {pass.slug === 'great-st-bernard-pass' && (
              <div className="gsb-regulations-callout lp-card" style={{
                borderLeft: '4px solid #10B981',
                padding: '20px',
                marginBottom: '24px',
                backgroundColor: 'rgba(16, 185, 129, 0.04)',
                borderRadius: '6px'
              }}>
                <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px', color: '#065F46' }}>
                  <ShieldCheck size={20} color="#10B981" />
                  <span>
                    {pageLang === 'it'
                      ? 'Normative & Consigli di Transito (Gran San Bernardo Svizzera 🇨🇭 / Italia 🇮🇹)'
                      : 'Important Alpine Transit Regulations (Great St Bernard CH 🇨🇭 / IT 🇮🇹)'}
                  </span>
                </h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: '#374151' }}>
                  {pageLang === 'it' ? (
                    <>
                      <strong>Due opzioni di valico :</strong> La <strong>Strada Panoramica del Colle (2.469 m)</strong> è gratuita al 100% e aperta da giugno a metà ottobre per auto, moto e ciclisti. Il <strong>Traforo del Gran San Bernardo (5,8 km a 1.918 m)</strong> è aperto 24h/24 tutto l'anno con pedaggio. <em>Attenzione: biciclette e pedoni sono severamente vietati all'interno del traforo.</em>
                    </>
                  ) : (
                    <>
                      <strong>Two Crossing Options:</strong> The <strong>Open-Air Summit Pass Road (2,469 m / 8,100 ft)</strong> is 100% toll-free and open June to mid-October for cars, motorcycles, and cyclists. The <strong>Grand-Saint-Bernard Tunnel (5.8 km at 1,918 m)</strong> is open 24/7 year-round (toll applies). <em>Note: Bicycles and pedestrians are strictly prohibited inside the tunnel.</em>
                    </>
                  )}
                </p>
                <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px', fontSize: '13.5px', color: '#4B5563', lineHeight: '1.6' }}>
                  {pageLang === 'it' ? (
                    <>
                      <li><strong>Dogana &amp; Documenti :</strong> Il colle segna la frontiera internazionale tra Svizzera e Italia. Documento d'identità / passaporto valido obbligatorio per l'espatrio.</li>
                      <li><strong>Pneumatici Invernali Obbligatori :</strong> Dal 15 ottobre al 15 aprile vige l'obbligo di pneumatici invernali (3PMSF) o catene da neve a bordo in tutta la Valle d'Aosta e nel Vallese.</li>
                      <li><strong>Ospizio Millenario &amp; Cani San Bernardo :</strong> Possibilità di visitare l'Ospizio (fondato nel 1049), il museo napoleonico e l'allevamento estivo dei cani San Bernardo della Fondazione Barry alla sommità.</li>
                    </>
                  ) : (
                    <>
                      <li><strong>International Border Documents:</strong> Valid passport or national ID card required to cross the Swiss-Italian frontier at the summit.</li>
                      <li><strong>Winter Tire Mandate:</strong> From October 15 to April 15, winter-certified tires (3PMSF) or carrying snow chains is legally required in Valais and Aosta Valley.</li>
                      <li><strong>Millennium Hospice &amp; St. Bernard Dogs:</strong> Visit the historic 1049 Hospice, Napoleon museum, and Barry Foundation St. Bernard rescue dogs at the summit during summer.</li>
                    </>
                  )}
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
                  {pageLang === 'fr'
                    ? `ÉTAT EN DIRECT DU ${pass.name.split('(')[0].trim().toUpperCase()}`
                    : pageLang === 'sl'
                    ? `TRENUTNO STANJE PRELAZA ${pass.name.split('(')[0].trim().toUpperCase()}`
                    : pageLang === 'ro'
                    ? `STAREA ÎN TIMP REAL: ${pass.name.split('(')[0].trim().toUpperCase()}`
                    : pageLang === 'de'
                    ? `AKTUELLER STATUS ${pass.name.split('(')[0].trim().toUpperCase()}`
                    : pageLang === 'it'
                    ? `STATO IN TEMPO REALE ${pass.name.split('(')[0].trim().toUpperCase()}`
                    : `${pass.name.split('(')[0].trim().toUpperCase()} CURRENT STATUS`}
                </h2>
                <span className="section-timestamp">
                  <Clock size={14} /> {pageLang === 'fr' ? 'Dernière mise à jour : il y a 5 min' : pageLang === 'sl' ? 'Zadnja posodobitev : pred 5 min' : pageLang === 'ro' ? 'Ultima actualizare : acum 5 min' : `Last updated: ${pass.lastUpdated}`}
                </span>
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
                        displayedStatus === 'OPEN' ? (pageLang === 'fr' ? '🟢 ACTUELLEMENT OUVERT' : pageLang === 'sl' ? '🟢 TRENUTNO ODPRTO' : pageLang === 'ro' ? '🟢 DESCHIS CIRCULAȚIEI' : '🟢 CURRENTLY OPEN') :
                          displayedStatus === 'CAUTION' ? (pageLang === 'fr' ? '⚠️ PRUDENCE RECOMMANDÉE' : pageLang === 'sl' ? '⚠️ PREVIDNOST' : '⚠️ CAUTION ADVISED') :
                            displayedStatus === 'RESTRICTED' ? (pageLang === 'fr' ? '⚠️ RESTRICTIONS ACTIVES' : '⚠️ RESTRICTIONS ACTIVE') :
                              displayedStatus === 'CLOSED' ? (pageLang === 'fr' ? '🔴 ACTUELLEMENT FERMÉ' : pageLang === 'sl' ? '🔴 ZAPRTO' : pageLang === 'ro' ? '🔴 ÎNCHIS' : '🔴 CURRENTLY CLOSED') :
                                displayedStatus === 'TEMPORARILY_CLOSED' ? (pageLang === 'fr' ? '🔴 TEMPORAIREMENT FERMÉ' : '🔴 TEMPORARILY CLOSED') :
                                  displayedStatus === 'SEASONAL_CLOSURE' ? (pageLang === 'fr' ? '🔴 FERMETURE HIVERNALE' : '🔴 SEASONAL CLOSURE') :
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
                      <span className="fact-label">{pageLang === 'fr' ? 'Massif Montagneux' : pageLang === 'sl' ? 'Gorska Veriga' : pageLang === 'ro' ? 'Lanț Muntos' : 'Mountain Range'}</span>
                      <strong className="fact-value">{pass.quickFacts?.mountainRange || `${pass.country} Alpine Crest`}</strong>
                    </div>
                  </div>

                  <div className="fact-item-card">
                    <div className="fact-icon-box"><Flag size={20} /></div>
                    <div className="fact-meta">
                      <span className="fact-label">{pageLang === 'fr' ? 'Pays & Région' : pageLang === 'sl' ? 'Država & Regija' : pageLang === 'ro' ? 'Țară & Regiune' : 'Country & Region'}</span>
                      <strong className="fact-value">{pass.state}, {pass.country}</strong>
                    </div>
                  </div>

                  <div className="fact-item-card">
                    <div className="fact-icon-box"><Navigation size={20} /></div>
                    <div className="fact-meta">
                      <span className="fact-label">{pageLang === 'fr' ? 'Relie' : pageLang === 'sl' ? 'Povezuje' : pageLang === 'ro' ? 'Conectează' : 'Connects'}</span>
                      <strong className="fact-value">{pass.quickFacts?.connects || `Regional Alpine corridor across ${pass.highway}`}</strong>
                    </div>
                  </div>

                  <div className="fact-item-card">
                    <div className="fact-icon-box"><Car size={20} /></div>
                    <div className="fact-meta">
                      <span className="fact-label">{pageLang === 'fr' ? 'Villes les Plus Proches' : pageLang === 'sl' ? 'Bližnja Mesta' : pageLang === 'ro' ? 'Orașe Apropiate' : 'Nearest Towns'}</span>
                      <strong className="fact-value">{pass.quickFacts?.nearestTown || `${pass.state} gateway communities`}</strong>
                    </div>
                  </div>

                  <div className="fact-item-card">
                    <div className="fact-icon-box"><Ruler size={20} /></div>
                    <div className="fact-meta">
                      <span className="fact-label">{pageLang === 'fr' ? 'Route & Classification' : pageLang === 'sl' ? 'Cesta & Kategorija' : pageLang === 'ro' ? 'Drum & Clasificare' : 'Road & Classification'}</span>
                      <strong className="fact-value">{pass.quickFacts?.roadType || pass.highway}</strong>
                    </div>
                  </div>

                  <div className="fact-item-card">
                    <div className="fact-icon-box"><Calendar size={20} /></div>
                    <div className="fact-meta">
                      <span className="fact-label">{pageLang === 'fr' ? 'Meilleure Période' : pageLang === 'sl' ? 'Najboljši Čas za Obisk' : pageLang === 'ro' ? 'Perioadă Recomandată' : 'Best Time to Visit'}</span>
                      <strong className="fact-value">{pass.quickFacts?.bestTime || 'Late June to Mid-September'}</strong>
                    </div>
                  </div>

                  <div className="fact-item-card">
                    <div className="fact-icon-box"><Layers size={20} /></div>
                    <div className="fact-meta">
                      <span className="fact-label">{pageLang === 'fr' ? 'Lacets & Tracé' : pageLang === 'sl' ? 'Serpentine & Trasa' : pageLang === 'ro' ? 'Serpentine & Traseu' : 'Total Switchbacks'}</span>
                      <strong className="fact-value">
                        {pass.slug === 'col-agnel' ? (pageLang === 'it' ? 'Pendenze fino al 15% (Chianale) & Cima Coppi a 2 744 m' : pageLang === 'fr' ? 'Pentes jusqu\'à 15% & Stele Cima Coppi à 2 744 m' : 'Steep 10–15% ramps (Chianale) & Cima Coppi at 2,744 m') : (pass.slug === 'col-de-la-bonette' ? (pageLang === 'fr' ? '32 lacets panoramiques & boucle de 2 km à 2 802 m' : '32 scenic hairpins & 2 km summit loop at 2,802 m') : (pass.slug === 'vrsic-pass' ? (pageLang === 'sl' ? '50 oštevilčenih serpentin (1–24 tlakovci, 25–50 asfalt)' : '50 numbered switchbacks (1–24 cobblestone, 25–50 asphalt)') : (pass.slug === 'prislop-pass' ? (pageLang === 'ro' ? 'Serpentine line asfaltate modern pe DN18' : 'Pristine paved trans-Carpathian switchbacks on DN18') : (pass.slug === 'bernina-pass' ? '10–12% Gradients & Wide Sweeping Switchbacks' : (pass.slug === 'gotthard-pass' ? '24 Historic Tremola Cobblestone Hairpins' : (pass.slug === 'trollstigen-pass' ? '11 Hairpin Turns (10% Incline)' : (pass.slug === 'stelvio-pass' ? '87 Hairpins (48 NE + 39 SW)' : (pass.quickFacts?.highlight || 'Multi-tier scenic alpine hairpins'))))))))}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: Map & Route Details */}
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
              <h2 className="section-title-heading">
                {pass.slug === 'susten-pass' && pageLang === 'hi'
                  ? 'निकटतम शहर और ड्राइविंग दूरियाँ'
                  : 'Nearest Towns & Driving Distances'}
              </h2>
              <div className="lp-card" style={{ padding: '24px' }}>
                <p style={{ margin: '0 0 16px 0', fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {pass.slug === 'susten-pass' && pageLang === 'hi'
                    ? <>गेटवे शहर, आपूर्ति केंद्र और <strong>{pass.name}</strong> के शिखर से अनुमानित ड्राइविंग दूरियाँ:</>
                    : <>Gateway cities, supply hubs, and approximate driving distances from the summit of <strong>{pass.name}</strong>:</>}
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
              <h2 className="section-title-heading">
                {pass.slug === 'susten-pass' && pageLang === 'hi'
                  ? 'मौसमी बंदी अनुसूची और सामान्य तिथियां'
                  : 'Seasonal Closure Schedule & Typical Dates'}
              </h2>
              <div className="lp-card" style={{ padding: '24px', borderLeft: '4px solid #F59E0B' }}>
                <h3 style={{ fontSize: '17px', fontWeight: '700', margin: '0 0 10px 0', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Calendar size={18} color="#F59E0B" />
                  <span>
                    {pass.slug === 'susten-pass' && pageLang === 'hi'
                      ? 'शीतकालीन मौसमी बंदी (नवंबर से मध्य जून)'
                      : (seoDetails?.seasonalClosureWindow || pass.seasonalClosureInfo?.typicalClosure || (pass.isSeasonal ? 'Winter Seasonal Closure' : 'Open Year-Round (Subject to winter storms)'))}
                  </span>
                </h3>
                <p style={{ margin: 0, fontSize: '14.5px', lineHeight: '1.65', color: 'var(--text-secondary)' }}>
                  {pass.slug === 'susten-pass' && pageLang === 'hi'
                    ? 'सुस्टेन पास 8 से 10 मीटर तक भारी बर्फबारी और हिमस्खलन जोखिम के कारण हर साल नवंबर की शुरुआत से मध्य जून तक बंद रहता है। मई-जून में रोटरी स्नो ब्लोअर्स से रास्ता साफ किया जाता है।'
                    : (seoDetails?.seasonalClosureDetail || pass.seasonalClosureInfo?.description || 'Maintained with regular winter plowing and anti-icing operations by regional highway crews. Temporary short-duration closures may occur during active blizzards and avalanche clearance operations.')}
                </p>
              </div>
            </section>

            {/* Section 10: About & Engineering History */}
            <section id="about" className="detail-section-block">
              <h2 className="section-title-heading">
                {pass.slug === 'susten-pass' && pageLang === 'hi'
                  ? 'सुस्टेन पास का इतिहास और सिविल इंजीनियरिंग'
                  : `About ${pass.name.split('(')[0].trim()}`}
              </h2>
              <div className="about-narrative-container lp-card" style={{ padding: '24px' }}>
                <p className="narrative-p" style={{ fontSize: '15px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '18px' }}>
                  {pass.slug === 'susten-pass' && pageLang === 'hi'
                    ? '1945 में निर्मित, सुस्टेन पास (ऊंचाई 2,224 मीटर / 7,297 फीट) स्विस सिविल इंजीनियरिंग का एक उत्कृष्ट उदाहरण माना जाता है। 1938 से 1945 के बीच विशेष रूप से पर्यटन और राष्ट्रीय रक्षा को ध्यान में रखकर बनाई गई यह पहली आधुनिक अल्पाइन सड़क है, जो हौप्तस्ट्रासे 11 के माध्यम से बर्न के इन्नर्टकिर्चन को उरी के वासेन से जोड़ती है।'
                    : (seoDetails?.aboutPass || pass.overview?.summary || pass.description)}
                </p>

                <p className="narrative-p" style={{ fontSize: '14.5px', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                  {pass.slug === 'susten-pass' && pageLang === 'hi'
                    ? <><strong>सुस्टेन पास</strong> स्विस आल्प्स के <strong>उरी/बर्न आल्प्स</strong> में स्थित है, जिसकी आधिकारिक शिखर सुरंग ऊंचाई <strong>2,224 मीटर (7,297 फीट)</strong> है और यह <strong>हौप्तस्ट्रासे 11 (रूट 11)</strong> पर चलता है।</>
                    : <><strong>{pass.name}</strong> is situated in the <strong>{pass.quickFacts?.mountainRange || 'Alpine Crest'}</strong> of <strong>{pass.state ? `${pass.state}, ` : ''}{pass.country}</strong>, at an official summit elevation of <strong>{pass.elevationFt.toLocaleString()} feet ({pass.elevationM.toLocaleString()} meters)</strong> above sea level on <strong>{pass.highway}</strong>.</>}
                </p>

                {pass.narrativeSections && (
                  pass.narrativeSections.map((sec, idx) => (
                    <React.Fragment key={idx}>
                      <h3 className="narrative-subheading">
                        {pass.slug === 'susten-pass' && pageLang === 'hi'
                          ? (idx === 0 ? 'सुस्टेन पास का सिविल इंजीनियरिंग और इतिहास' : 'स्टाइनग्लेशियर हिमनद, मीयनताल घाटी और "बिग 3" आल्प्स लूप')
                          : sec.title}
                      </h3>
                      <p className="narrative-p">
                        {pass.slug === 'susten-pass' && pageLang === 'hi'
                          ? (idx === 0
                              ? 'मध्यकाल में खच्चर व्यापारियों द्वारा उपयोग किए जाने वाले कच्चे रास्तों के स्थान पर, 1938 से 1945 के बीच मुख्य अभियंता पॉल गुदेल के नेतृत्व में आधुनिक सुस्टेन पास का निर्माण हुआ। चौड़ी लेन, सुगम मोड़ और ग्रेनाइट चट्टानों के साथ खूबसूरती से मेल खाते 25 पत्थर के पुलों के साथ यह दर्रा आधुनिक अल्पाइन सड़क निर्माण का वैश्विक मानक बना। 2,224 मीटर पर स्थित 300 मीटर लंबी शिखर सुरंग बर्न और उरी कैंटन के बीच सुगम आवागमन प्रदान करती है।'
                              : 'बर्न की पश्चिमी चढ़ाई पर सड़क ऐतिहासिक होटल स्टाइनग्लेशियर से होकर गुजरती है, जहां से स्टाइनग्लेशियर हिमनद और पन्ना-हरे रंग की स्टाइनसी झील का अद्भुत नज़ारा दिखता है। शिखर सुरंग के पूर्वी छोर से निकलकर सड़क मीयनताल के जंगली और खूबसूरत नज़ारों से होते हुए वासेन तक उतरती है, जो गोथार्ड मोटरवे (A2) से सीधा संपर्क बनाती है। ग्रिमसेल और फुर्का दर्रों के साथ मिलकर सुस्टेन पास 120 किमी का विश्व-प्रसिद्ध "बिग 3" स्विस अल्पाइन लूप बनाता है।')
                          : sec.content}
                      </p>
                    </React.Fragment>
                  ))
                )}
              </div>
            </section>

            {/* Section 10.5: Travel Guidance & Winter Tips */}
            <section id="travel-guidance" className="detail-section-block">
              <h2 className="section-title-heading">
                {(pass.slug === 'grimsel-pass')
                  ? (pageLang === 'de' ? 'Praktische Reisetipps & Routenführung Grimselpass' : 'Grimsel Pass Travel Guidance & Practical Tips')
                  : (pass.slug === 'susten-pass')
                  ? (pageLang === 'hi'
                    ? 'सुस्टेन पास यात्रा मार्गदर्शन और व्यावहारिक सुझाव'
                    : pageLang === 'de'
                      ? 'Praktische Reisetipps & Routenführung Sustenpass'
                      : 'Susten Pass Travel Guidance & Practical Tips')
                  : (pass.slug === 'col-du-galibier')
                  ? (pageLang === 'fr' ? 'Conseils Pratiques & Informations Voyage Galibier' : 'Col du Galibier Travel Guidance & Practical Tips')
                  : (pass.slug === 'col-de-l-iseran')
                  ? (pageLang === 'fr' ? 'Conseils Pratiques & Informations Voyage Iseran' : 'Col de l\'Iseran Travel Guidance & Practical Tips')
                  : (pass.slug === 'great-st-bernard-pass')
                  ? (pageLang === 'it' ? 'Consigli Pratici & Informazioni di Viaggio Gran San Bernardo' : 'Great St Bernard Pass Travel Guidance & Practical Tips')
                  : (pass.slug === 'bernina-pass')
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
                  {pass.slug === 'susten-pass'
                    ? (pageLang === 'hi'
                        ? 'सुस्टेन पास (ऊंचाई 2,224 मी) पर हौप्तस्ट्रासे 11 द्वारा बर्न के इन्नर्टकिर्चन से उरी के वासेन तक का सफर स्विस आल्प्स की सबसे खूबसूरत और तकनीकी रूप से उत्कृष्ट यात्राओं में से एक है।'
                        : pageLang === 'de'
                          ? 'Die Fahrt über den Sustenpass auf 2.224 m ü. M. zwischen Innertkirchen (Bern) und Wassen (Uri) zählt zu den faszinierendsten und fahrtechnisch schönsten Hochgebirgsstrecken der gesamten Alpen.'
                          : 'Crossing Susten Pass at 2,224 meters (7,297 ft) between Innertkirchen (Bern) and Wassen (Uri) along Hauptstrasse 11 is one of the most magnificent and masterfully engineered alpine motoring journeys in Europe.')
                    : pass.slug === 'col-agnel'
                    ? (pageLang === 'it'
                        ? 'Valicare il Colle dell\'Agnello a 2 744 metri d\'altitudine tra la Valle Varaita (Piemonte) e il Queyras (Hautes-Alpes) è una delle più emozionanti e impegnative avventure alpine d\'Europa, al cospetto del Monte Viso e delle pareti del Pain de Sucre.'
                        : pageLang === 'fr'
                          ? 'Franchir le Col Agnel à 2 744 mètres d\'altitude entre le Queyras (Hautes-Alpes) et le Piémont italien (Pontechianale) représente l\'un des plus grands défis alpins d\'Europe avec le panorama sur le Mont Viso et le Pain de Sucre.'
                          : 'Crossing Col Agnel / Colle dell\'Agnello at 2,744 meters (9,003 ft) between Piedmont\'s Valle Varaita and the French Queyras is one of Europe\'s most exhilarating high-altitude motoring and cycling journeys in the shadow of Mount Monviso.')
                    : pass.slug === 'col-de-la-bonette'
                    ? (pageLang === 'fr'
                        ? 'Franchir le Col de la Bonette et la boucle sommitale de la Cime à 2 802 mètres d\'altitude au cœur du Parc National du Mercantour constitue la plus haute aventure routière et cycliste de France entre l\'Ubaye et la Tinée.'
                        : 'Crossing Col de la Bonette and the Cime summit loop at 2,802 meters (9,193 ft) in Mercantour National Park is France\'s premier high-altitude motoring journey connecting the Ubaye and Tinée valleys.')
                    : pass.slug === 'vrsic-pass'
                    ? (pageLang === 'sl'
                        ? 'Vožnja čez prelaz Vršič na 1.611 metrih nadmorske višine po cesti R206 (Ruska cesta) med Kranjsko Goro in Trento velja za najbolj spektakularno gorsko cesto v Sloveniji s 50 ostrimi serpentinami skozi Triglavski narodni park.'
                        : 'Driving across Vršič Pass at 1,611 meters (5,285 ft) along Road 206 (the Russian Road) between Kranjska Gora and Trenta is Slovenia\'s premier alpine motoring journey featuring 50 legendary hairpin turns across Triglav National Park.')
                    : pass.slug === 'prislop-pass'
                    ? (pageLang === 'ro'
                        ? 'Traversarea Pasului Prislop la 1.416 metri altitudine între Maramureș și Bucovina pe DN18 reprezintă una dintre cele mai frumoase călătorii transcarpatice din România, printre păduri de conifere și panorame spre Munții Rodnei.'
                        : 'Crossing Prislop Pass at 1,416 meters (4,646 ft) along DN18 between Maramureș and Bucovina is one of the most scenic trans-Carpathian journeys in Romania, flanked by ancient spruce forests and panoramic views of the Rodna Mountains.')
                    : pass.slug === 'grimsel-pass'
                    ? (pageLang === 'de'
                        ? 'Die Fahrt über den Grimselpass auf 2.164 m ü. M. zwischen dem Haslital und dem Goms bietet ein unvergleichliches Alpenpanorama zwischen Granitschluchten und türkisfarbenen Stauseen.'
                        : 'Crossing Grimsel Pass at 2,164 meters (7,100 ft) between Haslital (Bern) and Goms (Valais) delivers an awe-inspiring alpine journey amidst polished granite canyons and turquoise hydropower reservoirs.')
                    : pass.slug === 'col-du-galibier'
                    ? (pageLang === 'fr'
                        ? 'Le franchissement du Galibier à 2 642 mètres d\'altitude constitue un parcours exceptionnel. Respecter les consignes de sécurité, la météo et la réglementation est indispensable pour un voyage serein.'
                        : 'Crossing Col du Galibier at 2,642 meters (8,668 ft) is a world-class alpine route. Understanding weather dynamics, tunnel regulations, and high-altitude road rules ensures a safe journey.')
                    : pass.slug === 'great-st-bernard-pass'
                    ? (pageLang === 'it'
                        ? 'Attraversare il Colle del Gran San Bernardo a 2.469 metri s.l.m. tra la Valle d\'Aosta e il Vallese è un\'esperienza transalpina straordinaria tra l\'Ospizio millenario e il lago glaciale.'
                        : 'Crossing the Great St Bernard Pass at 2,469 meters (8,100 ft) between Swiss Valais and Italian Aosta Valley offers an unforgettable transalpine journey between the historic Hospice and the glacial lake.')
                    : 'Mountain passes present unique driving environments. Understanding how weather, elevation, and highway regulations intersect is essential for a safe crossing.'}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                  <div className="guidance-card" style={{ padding: '16px', backgroundColor: 'var(--bg-light)', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                    <h4 style={{ margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-dark)' }}>
                      <Clock size={16} /> 
                      {pass.slug === 'susten-pass' && pageLang === 'hi'
                        ? 'रूट और यात्रा सीजन'
                        : pass.slug === 'col-agnel' && pageLang === 'it'
                        ? 'Tracciato SP251/D205 & Stagione'
                        : pass.slug === 'col-agnel' && pageLang === 'fr'
                        ? 'Itinéraire D205/SP251 & Saison'
                        : pass.slug === 'vrsic-pass' && pageLang === 'sl'
                        ? 'Trasa, 50 Serpentin & Sezona'
                        : pass.slug === 'prislop-pass' && pageLang === 'ro'
                        ? 'Traseu & Sezon de Călătorie'
                        : (pass.slug === 'grimsel-pass' || pass.slug === 'susten-pass') && pageLang === 'de'
                        ? 'Route & Reisesaison'
                        : (pass.slug === 'col-du-galibier' || pass.slug === 'col-de-l-iseran' || pass.slug === 'col-de-la-bonette') && pageLang === 'fr' 
                        ? 'Itinéraire & Période d\'Ouverture' 
                        : pass.slug === 'great-st-bernard-pass' && pageLang === 'it'
                        ? 'Itinerario & Stagione di Transito'
                        : 'Route & Travel Season'}
                    </h4>
                    <p style={{ margin: 0, fontSize: '13.5px', lineHeight: '1.5', color: 'var(--text-muted)' }}>
                      {(pass.slug === 'susten-pass')
                        ? (pageLang === 'hi'
                            ? 'हौप्तस्ट्रासे 11 इन्नर्टकिर्चन (बर्न) को वासेन (उरी) से जोड़ती है। यह दर्रा आमतौर पर जून के मध्य से अक्टूबर के अंत तक खुला रहता है। स्विस डामर सड़क और 25 प्राकृतिक पत्थर के पुल उत्कृष्ट ड्राइविंग अनुभव प्रदान करते हैं।'
                            : pageLang === 'de'
                              ? 'Die Hauptstrasse 11 verbindet Innertkirchen (Bern) mit Wassen (Uri). Die Passstrasse ist in der Regel von Mitte Juni bis Ende Oktober für den Sommerverkehr geöffnet. Ausgezeichneter Asphalt und 25 kühne Steinbrücken bieten perfekten Fahrkomfort.'
                              : 'Route 11 links Innertkirchen (Bern) with Wassen (Uri). Open typically from mid-June to late October. Paved Swiss roadway with 25 stone bridges offers outstanding driving conditions.')
                        : (pass.slug === 'col-agnel')
                        ? (pageLang === 'it'
                            ? 'La SP251 (Italia) e la D205 (Francia) collegano Pontechianale (Cuneo) a Molines-en-Queyras (Hautes-Alpes). Il valico è aperto stagionalmente da inizio giugno a fine ottobre/novembre. Asfalto regolare ma pendenze severe sul lato italiano (10-15% dopo Chianale).'
                            : pageLang === 'fr'
                              ? 'La Route D205 (France) et la SP251 (Italie) relient Molines-en-Queyras (Hautes-Alpes) à Pontechianale (Piémont). Ouvert de début juin à fin octobre. Pentes soutenues de 8-9% côté français et jusqu\'à 15% côté italien.'
                              : 'Route SP251 (Italy) and Route D205 (France) connect Pontechianale (Piedmont) with Molines-en-Queyras (Hautes-Alpes). Open early June to late October/November with demanding 10–15% gradients above Chianale.')
                        : (pass.slug === 'col-de-la-bonette')
                        ? (pageLang === 'fr'
                            ? 'La Route D64 relie Jausiers (Ubaye) à Saint-Étienne-de-Tinée (Tinée / Nice). Ouverte de fin mai / début juin à fin octobre / début novembre. La boucle sommitale à sens unique autour de la Cime atteint 2 802 m avec un asphalte d\'excellente qualité.'
                            : 'Route D64 links Jausiers (Ubaye) with Saint-Étienne-de-Tinée (Tinée / Nice). Open late May/June to late October/November. The 2 km one-way summit loop around Cime reaches 2,802 m with smooth high-altitude asphalt.')
                        : (pass.slug === 'vrsic-pass')
                        ? (pageLang === 'sl'
                            ? 'Cesta R206 povezuje Kranjsko Goro z dolino reke Soče (Trenta in Bovec). Na severni strani je 24 serpentin tlakovanih z granitnimi kockami, na trentarski strani pa 26 serpentin z asfaltom. Prelaz je odprt od pomladi do jeseni (maj–november) in zaprt v času zimskih snežnih razmer.'
                            : 'Road 206 links Kranjska Gora with Trenta and Bovec in the Soča Valley. Features 50 numbered turns (1–24 cobblestone on north flank, 25–50 asphalt on south flank). Open spring to autumn (May–November); closed during severe winter snow conditions.')
                        : (pass.slug === 'prislop-pass')
                        ? (pageLang === 'ro'
                            ? 'Drumul Național 18 (DN18) leagă orașul Borșa (Maramureș) de Cârlibaba și Iacobeni (Suceava / Bucovina). Pasul este deschis 365 de zile pe an datorită lucrărilor de modernizare și utilajelor de întreținere ale CNAIR. Asfaltul neted și semnalizarea nouă oferă condiții excelente de condus.'
                            : 'National Road DN18 connects Borșa (Maramureș) with Cârlibaba and Iacobeni (Bucovina / Suceava). Prislop Pass is open 365 days a year with active CNAIR maintenance. Pristine newly resurfaced asphalt offers great driving comfort.')
                        : (pass.slug === 'grimsel-pass')
                        ? (pageLang === 'de'
                            ? 'Die Hauptstrasse 6 verbindet Innertkirchen / Meiringen (Bern) mit Gletsch und Oberwald (Wallis). Die Passstrasse ist in der Regel von Anfang Juni bis Ende Oktober für den regulären Sommerverkehr geöffnet. Der Schweizer Qualitätsasphalt bietet beste Fahrbedingungen.'
                            : 'Route 6 links Innertkirchen & Meiringen (Bern) with Gletsch & Oberwald (Valais). Open typically from early June to late October. Paved Swiss asphalt is in pristine condition for summer mountain travel.')
                        : (pass.slug === 'col-du-galibier')
                        ? (pageLang === 'fr'
                            ? 'La D902 relie Saint-Michel-de-Maurienne et Valloire (Savoie) au Col du Lautaret et Briançon (Hautes-Alpes). La route est généralement ouverte de fin mai / début juin à fin octobre / début novembre. La chaussée asphaltée offre d\'excellentes conditions en été.'
                            : 'Route D902 links Saint-Michel-de-Maurienne & Valloire (Savoie) with Col du Lautaret & Briançon (Hautes-Alpes). Open typically late May to late October/early November. Paved asphalt is in pristine condition for summer travel.')
                        : (pass.slug === 'col-de-l-iseran')
                        ? (pageLang === 'fr'
                            ? 'La D902 relie Bourg-Saint-Maurice et Val-d\'Isère (Haute-Tarentaise) à Bonneval-sur-Arc et Lanslebourg (Haute-Maurienne). Ouverte de mi-juin à fin octobre. Chaussée goudronnée de haute montagne en parfait état.'
                            : 'Route D902 links Bourg-Saint-Maurice & Val-d\'Isère (Haute-Tarentaise) with Bonneval-sur-Arc & Lanslebourg (Haute-Maurienne). Open mid-June to late October. Pristine alpine paved roadway.')
                        : (pass.slug === 'great-st-bernard-pass')
                        ? (pageLang === 'it'
                            ? 'La SS27 (Italia) / Route 21 (Svizzera) collega Aosta a Martigny. La strada panoramica del colle sommitale è aperta da inizio giugno a metà octobre. Il Traforo del Gran San Bernardo (1.918 m) è aperto 24h/24 tutto l\'anno con pedaggio.'
                            : 'Route 21 (CH) / SS27 (IT) connects Martigny (Valais) to Aosta (Italy). The summit pass road is open June to mid-October. The Grand-Saint-Bernard Tunnel (1,918 m) remains open 24/7 year-round (toll road).')
                        : (pass.slug === 'bernina-pass')
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
                      <Mountain size={16} /> 
                      {pass.slug === 'susten-pass' && pageLang === 'hi'
                        ? 'उच्च पर्वतीय सुरक्षा व मौसम'
                        : pass.slug === 'col-agnel' && pageLang === 'it'
                        ? 'Meteo Monviso & Alta Quota'
                        : pass.slug === 'col-agnel' && pageLang === 'fr'
                        ? 'Météo Queyras & Haute Altitude'
                        : pass.slug === 'vrsic-pass' && pageLang === 'sl'
                        ? 'Gorsko Vreme & Prisank'
                        : pass.slug === 'prislop-pass' && pageLang === 'ro'
                        ? 'Meteo Alpin & Siguranță'
                        : (pass.slug === 'grimsel-pass' || pass.slug === 'susten-pass') && pageLang === 'de'
                        ? 'Wetter & Hochgebirgssicherheit'
                        : (pass.slug === 'col-du-galibier' || pass.slug === 'col-de-l-iseran' || pass.slug === 'col-de-la-bonette') && pageLang === 'fr' 
                        ? 'Météo Alti & Sécurité Altitude' 
                        : pass.slug === 'great-st-bernard-pass' && pageLang === 'it'
                        ? 'Sicurezza & Meteo di Quota'
                        : 'High-Altitude Safety & Weather'}
                    </h4>
                    <p style={{ margin: 0, fontSize: '13.5px', lineHeight: '1.5', color: 'var(--text-muted)' }}>
                      {(pass.slug === 'susten-pass')
                        ? (pageLang === 'hi'
                            ? '2,224 मीटर की ऊंचाई पर शिखर सुरंग पर तापमान मीरिंगन या आल्टडॉर्फ की तुलना में 10–14°C कम रहता है। यात्रा शुरू करने से पहले वास्तविक समय के मेटियोस्विस पूर्वानुमान और लाइव स्टाइनग्लेशियर वेबकैम की जांच करें।'
                            : pageLang === 'de'
                              ? 'Auf der Passhöhe am Scheiteltunnel (2.224 m) ist es meist 10–14°C kühler als in Meiringen oder Altdorf. Vor der Fahrt über das Steingletscher-Massiv stets die aktuellen MeteoSchweiz-Vorhersagen und Live-Kameras prüfen.'
                              : 'At 2,224 m summit tunnel elevation, temperatures are typically 10–14°C cooler than in Meiringen or Altdorf. Check real-time MeteoSwiss forecasts and live Steingletscher webcams before setting out.')
                        : (pass.slug === 'col-agnel')
                        ? (pageLang === 'it'
                            ? 'A 2 744 m s.l.m., la temperatura al valico è di 12-16°C inferiore rispetto alla pianura piemontese (Cuneo/Saluzzo). Venti freddi d\'alta quota e improvvise nebbie possono sopraggiungere rapidamente; controlla sempre i bollettini ARPA Piemonte e le webcam live prima di salire.'
                            : pageLang === 'fr'
                              ? 'À 2 744 m au sommet, la température est de 12 à 15°C plus fraîche qu\'à Guillestre ou Briançon. Des rafales de vent et des orages d\'été peuvent éclater l\'après-midi; vérifiez les webcams du Refuge Agnel et de Saint-Véran avant de partir.'
                              : 'At 2,744 m summit crest, ambient temperatures are 12–16°C cooler than in Cuneo or Briançon. Strong alpine winds and sudden cloud cover can occur; verify ARPA Piemonte & Météo-France live forecasts.')
                        : (pass.slug === 'col-de-la-bonette')
                        ? (pageLang === 'fr'
                            ? 'À 2 802 m au sommet de la Cime, la température est de 12 à 18°C plus fraîche que sur la Côte d\'Azur ou à Nice. Des vents violents et des orages d\'été peuvent survenir rapidement. Consultez les webcams de la Cime et du Camp des Fourches avant le départ.'
                            : 'At 2,802 m summit altitude, temperatures are 12–18°C colder than in Nice or the French Riviera. Rapid storm developments and high winds can occur; check live Cime and Camp des Fourches webcams before departure.')
                        : (pass.slug === 'vrsic-pass')
                        ? (pageLang === 'sl'
                            ? 'Na vrhu prelaza (1.611 m) so temperature 8–12°C nižje kot v Kranjski Gori ali Bovcu. Granitni tlakovci v 24 serpentinah postanejo v dežju zelo spolzki. Priporočamo spremljanje spletnih kamer pri Erjavčevi koči in napovedi ARSO pred vzponom.'
                            : 'At the 1,611 m summit crest, temperatures are 8–12°C lower than in Kranjska Gora or Bovec. The 24 cobblestone turns become slick during rainfall. Check live Erjavčeva koča webcams and ARSO weather forecasts before driving.')
                        : (pass.slug === 'prislop-pass')
                        ? (pageLang === 'ro'
                            ? 'La 1.416 m altitudine pe platoul pasului, temperaturile sunt cu 6–10°C mai scăzute decât în văile Vișeului sau Bistriței Aurii. Ceața montană și ploile torențiale pot reduce brusc vizibilitatea; verificați buletinele meteo și camerele live înainte de pornire.'
                            : 'At 1,416 m summit elevation, temperatures are typically 6–10°C cooler than in Borșa or Vatra Dornei. High mountain fog and sudden showers can reduce visibility; verify live webcams and weather reports before departure.')
                        : (pass.slug === 'grimsel-pass')
                        ? (pageLang === 'de'
                            ? 'Auf der Passhöhe (2.164 m) herrschen oft 10–14°C kühlere Temperaturen als in Interlaken oder Brig. Rasche Wetterumschwünge mit dichtem Bergnebel über dem Totensee sind häufig; vor der Abfahrt stets MeteoSchweiz-Berichte und Live-Webcams prüfen.'
                            : 'At 2,164 m summit elevation, temperatures are typically 10–14°C cooler than in Interlaken or Brig. High alpine fog and brisk winds across the Totensee plateau can develop rapidly; check MeteoSwiss reports and live Hospiz webcams.')
                        : (pass.slug === 'col-du-galibier')
                        ? (pageLang === 'fr'
                            ? 'À 2 642 m, la température est souvent de 10 à 15°C inférieure à celle des vallées de Valloire ou Briançon. Des rafales de vent dépassant 60 km/h et des orages d\'été soudains peuvent survenir. Consultez les bulletins Météo-France et les webcams avant l\'ascension.'
                            : 'At 2,642 m summit altitude, ambient temperature is typically 10–15°C colder than in the Maurienne or Briançon valleys. Gusts over 60 km/h and sudden storms can develop rapidly; check Météo-France bulletins and summit webcams before setting out.')
                        : (pass.slug === 'col-de-l-iseran')
                        ? (pageLang === 'fr'
                            ? 'À 2 770 m au sommet de l\'Iseran, la température est souvent de 12 à 18°C inférieure à celle de Bourg-Saint-Maurice ou Modane. Des vents violents et des orages d\'altitude peuvent se lever rapidement. Consultez les bulletins Météo-France Savoie et les webcams avant de partir.'
                            : 'At the 2,770 m Iseran summit, temperatures are typically 12–18°C cooler than in Bourg-Saint-Maurice or Modane. High alpine winds and rapid thunderstorm developments can occur; check Météo-France Savoie bulletins and summit webcams before setting out.')
                        : (pass.slug === 'great-st-bernard-pass')
                        ? (pageLang === 'it'
                            ? 'A 2.469 m s.l.m. il clima alpino è rigido con venti freschi sul lago di confine. Le temperature sono spesso inferiori di 10-15°C rispetto ad Aosta o Martigny. Controlla i bollettini MeteoSwiss / RAVdA e le webcam live prima di partire.'
                            : 'At 2,469 m summit altitude, expect alpine temperatures 10–15°C colder than in Martigny or Aosta. High-altitude winds across the glacial border lake can be brisk; check MeteoSwiss reports and live Hospice webcams before departure.')
                        : (pass.slug === 'bernina-pass')
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
                      <ShieldCheck size={16} /> 
                      {pass.slug === 'susten-pass' && pageLang === 'hi'
                        ? 'टोल-फ्री व स्विस सड़क नियम'
                        : pass.slug === 'col-agnel' && pageLang === 'it'
                        ? 'Pedaggio Gratuito & Regolamento SP251'
                        : pass.slug === 'col-agnel' && pageLang === 'fr'
                        ? 'Péage Gratuit & Véhicules D205'
                        : pass.slug === 'vrsic-pass' && pageLang === 'sl'
                        ? 'Cestnine, Vinjeta & Parkiranje'
                        : pass.slug === 'prislop-pass' && pageLang === 'ro'
                        ? 'Rovinietă & Reglementări Rutiere'
                        : (pass.slug === 'grimsel-pass' || pass.slug === 'susten-pass') && pageLang === 'de'
                        ? 'Mautfreiheit & Schweizer Strassenordnung'
                        : (pass.slug === 'col-du-galibier' || pass.slug === 'col-de-l-iseran' || pass.slug === 'col-de-la-bonette') && pageLang === 'fr' 
                        ? 'Péage & Réglementation Routière' 
                        : pass.slug === 'great-st-bernard-pass' && pageLang === 'it'
                        ? 'Pedaggio & Regolamento Traforo'
                        : 'Tolls & Road Regulations'}
                    </h4>
                    <p style={{ margin: 0, fontSize: '13.5px', lineHeight: '1.5', color: 'var(--text-muted)' }}>
                      {(pass.slug === 'susten-pass')
                        ? (pageLang === 'hi'
                            ? 'सुस्टेन पास सड़क (हौप्तस्ट्रासे 11) 100% टोल-मुक्त स्विस कैंटोनल राजमार्ग है। दर्रे या शिखर सुरंग के लिए किसी मोटरवे विगनेट की आवश्यकता नहीं है; विगनेट केवल स्विस मोटरवे (A8/A2) पर आवश्यक है।'
                            : pageLang === 'de'
                              ? 'Die Susten-Passstrasse (Hauptstrasse 11) ist eine 100% mautfreie Schweizer Kantonsstrasse. Keine Autobahnvignette für den Pass oder den Scheiteltunnel erforderlich. Eine Vignette wird nur bei Benützung der Autobahnen A8 oder A2 (Gotthard) benötigt.'
                              : 'Susten Pass (Hauptstrasse 11) is a 100% toll-free Swiss public cantonal highway. No tolls and no motorway vignette required for the pass or summit tunnel; vignette needed only on Swiss motorways (A8/A2).')
                        : (pass.slug === 'col-agnel')
                        ? (pageLang === 'it'
                            ? 'La SP251 e la D205 sono strade pubbliche gratuite al 100% (nessun pedaggio o vignetta). Il transito è vietato ad autoarticolati, pullman turistici pesanti e sconsigliato a caravan e camper lunghi per via dei tornanti stretti sul versante di Chianale.'
                            : pageLang === 'fr'
                              ? 'La Route D205 et la SP251 sont entièrement gratuites (aucun péage ni vignette). Interdit aux poids lourds et autocars de grand gabarit en raison des épingles très étroites.'
                              : 'Route SP251 & D205 are 100% toll-free public highways. Heavy articulated trucks and oversized commercial buses are prohibited; large caravans are strongly discouraged due to narrow switchbacks.')
                        : (pass.slug === 'col-de-la-bonette')
                        ? (pageLang === 'fr'
                            ? 'La D64 est une route départementale 100% gratuite (aucun péage ni vignette). Les véhicules de plus de 3,5 tonnes et caravanes sont strictement interdits. Le stationnement au sommet est réglementé et le bivouac est encadré par la charte du Parc National du Mercantour.'
                            : 'Route D64 is a 100% toll-free public departmental road. Commercial vehicles over 3.5 tonnes and caravans are strictly prohibited. Summit parking is regulated, and overnight stays are governed by Mercantour National Park rules.')
                        : (pass.slug === 'vrsic-pass')
                        ? (pageLang === 'sl'
                            ? 'Cesta R206 čez prelaz Vršič je brezplačna regionalna cesta (slovenska e-vinjeta za sam prelaz ni potrebna, potrebna pa je na avtocestnem omrežju A2). Na vrhu prelaza velja plačljiv parkirni režim z omejenimi mesti; priporočamo javni avtobusni prevoz v poletni sezoni.'
                            : 'Road 206 across Vršič Pass is a toll-free regional public road (Slovenian e-vignette not required on the pass road itself, only on motorways). Parking at the summit is paid with limited capacity; summer public shuttle buses are recommended.')
                        : (pass.slug === 'prislop-pass')
                        ? (pageLang === 'ro'
                            ? 'DN18 prin Pasul Prislop este un drum național public administrat de CNAIR. Nu există taxe speciale de trecere pentru pas, însă este obligatorie Rovinieta națională pentru toate autovehiculele înmatriculate. Viteza recomandată în serpentine este de 50 km/h.'
                            : 'National Road DN18 across Prislop Pass is a public national highway managed by CNAIR. No pass-specific tolls apply, but standard Romanian national road tax (Rovinietă) is mandatory. Recommended speed in mountain serpentines is 50 km/h.')
                        : (pass.slug === 'grimsel-pass')
                        ? (pageLang === 'de'
                            ? 'Die Grimsel-Passstrasse (Hauptstrasse 6) ist eine 100% mautfreie Schweizer Kantonsstrasse. Keine Autobahnvignette auf der Passstrasse erforderlich. Die Vignette wird nur bei Benützung der Nationalstrassen (z. B. A8 Spiez-Interlaken oder A9 Wallis) benötigt.'
                            : 'Grimsel Pass (Hauptstrasse 6) is a 100% toll-free Swiss public cantonal highway. No tolls and no Swiss motorway vignette are needed for the pass road itself; a vignette is only required when entering Swiss motorways (A8/A9).')
                        : (pass.slug === 'col-du-galibier')
                        ? (pageLang === 'fr'
                            ? 'La D902 est une route départementale 100% gratuite (aucun péage ni vignette). Les véhicules de plus de 19 tonnes et de plus de 4,1 mètres de hauteur sont strictement interdits dans le tunnel du Galibier.'
                            : 'Route D902 is 100% toll-free. Heavy trucks exceeding 19 tonnes and vehicles over 4.1 m height are prohibited from entering the summit tunnel.')
                        : (pass.slug === 'col-de-l-iseran')
                        ? (pageLang === 'fr'
                            ? 'La D902 est une route 100% gratuite (aucun péage ni vignette). Les poids lourds de plus de 3,5 tonnes et les caravanes sont interdits sur la section sommitale entre Val-d\'Isère et Bonneval-sur-Arc.'
                            : 'Route D902 over Col de l\'Iseran is a 100% toll-free public road. Heavy commercial trucks over 3.5 tonnes and caravans are prohibited across the summit pass section.')
                        : (pass.slug === 'great-st-bernard-pass')
                        ? (pageLang === 'it'
                            ? 'La strada panoramica del Colle (2.469 m) è gratuita al 100%. Il Traforo del Gran San Bernardo (1.918 m) applica un pedaggio variabile in base alla categoria del veicolo (circa 31 CHF / 33 € per auto solo andata).'
                            : 'The open-air summit pass road (2,469 m) is 100% toll-free. The Grand-Saint-Bernard Tunnel (1,918 m) charges a standard toll (~31 CHF / €33 one-way for passenger cars).')
                        : (pass.slug === 'bernina-pass')
                        ? 'Hauptstrasse 29 across Bernina Pass is a 100% toll-free Swiss cantonal road. A Swiss motorway vignette is NOT required for the pass road itself; a vignette is only needed when driving on Swiss motorways (such as the A13 through Graubünden).'
                        : (pass.slug === 'gotthard-pass')
                        ? 'Gotthard Pass road (H2) and the historic Tremola are 100% toll-free cantonal roads. A Swiss motorway vignette is NOT required on the pass road itself; it is only required on the A2 motorway and A2 Gotthard Tunnel.'
                        : (pass.slug === 'chang-la-pass' || pass.slug === 'chang-la')
                        ? 'Indian and foreign tourists require an Inner Line Permit (ILP) or Protected Area Permit (PAP) to travel past Zingral toward Pangong Lake. Permits can be obtained online via lahdclehpermit.in or through registered Leh travel operators.'
                        : 'Live traffic webcams and official road bulletins are essential tools to verify actual surface conditions before departure.'}
                    </p>
                  </div>
                  <div className="guidance-card" style={{ padding: '16px', backgroundColor: 'var(--bg-light)', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                    <h4 style={{ margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-dark)' }}>
                      <Car size={16} /> 
                      {pass.slug === 'susten-pass' && pageLang === 'hi'
                        ? 'शीतकालीन नियम व वैकल्पिक मार्ग'
                        : pass.slug === 'col-agnel' && pageLang === 'it'
                        ? 'Chiusura Invernale & Deviazioni'
                        : pass.slug === 'col-agnel' && pageLang === 'fr'
                        ? 'Fermeture Hivernale & Détours'
                        : pass.slug === 'vrsic-pass' && pageLang === 'sl'
                        ? 'Zimska Oprema & Obvozni Prelazi'
                        : pass.slug === 'prislop-pass' && pageLang === 'ro'
                        ? 'Legislație Iarnă & Echipare'
                        : (pass.slug === 'grimsel-pass' || pass.slug === 'susten-pass') && pageLang === 'de'
                        ? 'Wintersperre & Ausweichrouten'
                        : (pass.slug === 'col-du-galibier' || pass.slug === 'col-de-l-iseran' || pass.slug === 'col-de-la-bonette') && pageLang === 'fr' 
                        ? 'Équipements Hiver & Alternatives' 
                        : pass.slug === 'great-st-bernard-pass' && pageLang === 'it'
                        ? 'Dotazioni Invernali & Alternative'
                        : 'Winter Laws & Seasonal Detours'}
                    </h4>
                    <p style={{ margin: 0, fontSize: '13.5px', lineHeight: '1.5', color: 'var(--text-muted)' }}>
                      {(pass.slug === 'susten-pass')
                        ? (pageLang === 'hi'
                            ? 'सर्दियों में बंदी (नवंबर से मध्य जून) के दौरान बर्न और उरी के बीच यात्रा के लिए मोटरवे A8/A2 (ल्यूसर्न होकर) या गोथार्ड रोड टनल का उपयोग किया जाता है।'
                            : pageLang === 'de'
                              ? 'Während der monatelangen Wintersperre (November bis Mitte Juni) weichen Autofahrer zwischen Bern und Uri auf die Autobahn A8/A2 via Luzern oder die Gotthard-Achse aus.'
                              : 'During the winter closure (November to mid-June), vehicle transit between Bern and Uri detours via the A8/A2 motorways through Lucerne or the Gotthard Road Tunnel.')
                        : (pass.slug === 'col-agnel')
                        ? (pageLang === 'it'
                            ? 'Durante la chiusura invernale (novembre–maggio), il collegamento stradale tra Piemonte e Hautes-Alpes avviene a nord attraverso il Colle del Monginevro (SS24 / RN94 aperto tutto l\'anno) o il Traforo del Frejus (A43).'
                            : pageLang === 'fr'
                              ? 'Durant la fermeture hivernale (novembre à mai), la liaison entre le Queyras/Briançon et le Piémont passe par le Col de Montgenèvre (RN94 ouvert toute l\'année) ou le Tunnel du Fréjus.'
                              : 'During winter closure (November to May), vehicle travel between Piedmont and Hautes-Alpes detours via Montgenèvre Pass (RN94 / SS24, open year-round) or the Fréjus Road Tunnel (A43).')
                        : (pass.slug === 'col-de-la-bonette')
                        ? (pageLang === 'fr'
                            ? 'Pendant la fermeture hivernale (novembre à mai), la liaison entre l\'Ubaye et la Côte d\'Azur s\'effectue par Digne-les-Bains et la N202 / A51. La Loi Montagne II impose 4 pneus hiver (3PMSF) ou des chaînes dans le coffre du 1er nov au 31 mars.'
                            : 'During winter closure (Nov to May), travel between Ubaye and Nice/Côte d\'Azur detours via Digne-les-Bains and N202. Loi Montagne II requires 4 winter tires (3PMSF) or chains in trunk from Nov 1 to Mar 31.')
                        : (pass.slug === 'vrsic-pass')
                        ? (pageLang === 'sl'
                            ? 'V zimskem obdobju od 15. novembra do 15. marca je v Sloveniji obvezna zimska oprema (zimske pnevmatike ali snežne verige). V času zimske zapore Vršiča je glavna obvozna povezava med Gorenjsko in Posočjem čez prelaz Predel (SS54/R203 skozi Italijo) ali skozi avto-vlak Bohinjska proga (Bohinjska Bistrica–Most na Soči).'
                            : 'Winter equipment (M+S/3PMSF winter tires or chains in trunk) is mandatory in Slovenia Nov 15 – Mar 15. During winter closure of Vršič Pass, detour via Predil Pass (SS54/Road 203 through Tarvisio, Italy) or the Bohinj car train shuttle (Bohinjska Bistrica–Most na Soči).')
                        : (pass.slug === 'prislop-pass')
                        ? (pageLang === 'ro'
                            ? 'Conform OUG 195/2002, anvelopele de iarnă (M+S / 3PMSF) sunt strict obligatorii când carosabilul este acoperit de zăpadă sau gheață. Utilajele DRDP Cluj și DRDP Iași intervin cu sărărițe și lame de zăpadă pentru a menține pasul deschis chiar și în timpul viscolelor carpatine.'
                            : 'Romanian traffic law mandates approved winter tires (M+S / 3PMSF) on snow or icy roads. DRDP Cluj & DRDP Iași snowplows operate continuously with anti-skid treatment to keep the pass open throughout winter blizzards.')
                        : (pass.slug === 'grimsel-pass')
                        ? (pageLang === 'de'
                            ? 'Während der monatelangen Wintersperre (November bis Ende Mai) weichen Autofahrer zwischen dem Berner Oberland und dem Wallis auf den Autoverlad Lötschberg (BLS Kandersteg–Goppenstein, ca. 20 min) oder den Autoverlad Furka (MGB Realp–Oberwald) aus.'
                            : 'During the winter closure (Nov to late May), drivers traveling between Bernese Oberland and Valais divert via the BLS Lötschberg car shuttle train (Kandersteg–Goppenstein, ~20 min) or the MGB Furka car train (Realp–Oberwald).')
                        : (pass.slug === 'col-du-galibier')
                        ? (pageLang === 'fr'
                            ? 'Loi Montagne II obligatoire du 1er nov au 31 mars (4 pneus hiver 3PMSF ou chaînes dans le véhicule). En hiver lors de la fermeture du col, l\'itinéraire de contournement emprunte le Tunnel du Fréjus (A43 vers Italie / Montgenèvre) ou Grenoble via la D1091 / A48.'
                            : 'Loi Montagne II mandates 4 winter tires (3PMSF) or chains in trunk from Nov 1 to Mar 31. When Galibier is closed in winter, vehicle transit between Maurienne and Briançon diverts via the Fréjus Road Tunnel (A43/Montgenèvre) or via Chambéry/Grenoble (A43/D1091).')
                        : (pass.slug === 'col-de-l-iseran')
                        ? (pageLang === 'fr'
                            ? 'La D902 franchissant l\'Iseran est fermée de novembre à mi-juin. Le contournement s\'effectue par la Maurienne et la Tarentaise via Albertville (N90 / A43).'
                            : 'Route D902 over Col de l\'Iseran is closed Nov to mid-June. Detour between Tarentaise and Maurienne via Albertville (N90/A43).')
                        : (pass.slug === 'great-st-bernard-pass')
                        ? (pageLang === 'it'
                            ? 'Dotazioni invernali (pneumatici 3PMSF o catene a bordo) obbligatorie dal 15 ottobre al 15 aprile in Valle d\'Aosta e Vallese. Durante la chiusura invernale della sommità, il transito avviene tramite il Traforo del Gran San Bernardo aperto 24h/24 o il Traforo del Monte Bianco.'
                            : 'Winter tires (3PMSF) or carrying chains is legally required from Oct 15 to Apr 15 in Valais and Aosta Valley. When the summit pass is closed in winter, vehicle transit uses the 24/7 Grand-Saint-Bernard Tunnel or the Mont-Blanc Tunnel.')
                        : (pass.slug === 'bernina-pass')
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
                {pass.slug === 'susten-pass' && pageLang === 'hi'
                  ? 'सुस्टेन पास के बारे में अक्सर पूछे जाने वाले प्रश्न (FAQs)'
                  : pass.slug === 'susten-pass' && pageLang === 'de'
                    ? 'Häufig gestellte Fragen zum Sustenpass (FAQs)'
                    : (pass.slug === 'bernina-pass')
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
                {((pass.slug === 'susten-pass' && pageLang === 'hi') ? sustenHindiFaqs : (pass.faqs || [])).length > 0 ? (
                  ((pass.slug === 'susten-pass' && pageLang === 'hi') ? sustenHindiFaqs : (pass.faqs || [])).map((faq, idx) => (
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
