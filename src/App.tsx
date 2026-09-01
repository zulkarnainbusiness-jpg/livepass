import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useParams, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { PassesProvider } from './context/PassesContext';
import { passesData, getPassUrl } from './data/passes';
import './styles/index.css';

// Lazy-loaded pages for fast initial page load & code-splitting
const PassesPage = lazy(() => import('./pages/PassesPage').then(m => ({ default: m.PassesPage })));
const MapPage = lazy(() => import('./pages/MapPage').then(m => ({ default: m.MapPage })));
const AlertsPage = lazy(() => import('./pages/AlertsPage').then(m => ({ default: m.AlertsPage })));
const HierarchicalPage = lazy(() => import('./pages/HierarchicalPage').then(m => ({ default: m.HierarchicalPage })));
const PassDetailPage = lazy(() => import('./pages/PassDetailPage').then(m => ({ default: m.PassDetailPage })));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage').then(m => ({ default: m.ResourcesPage })));
const SeoResearchPage = lazy(() => import('./pages/SeoResearchPage').then(m => ({ default: m.SeoResearchPage })));
const SubmitReportPage = lazy(() => import('./pages/SubmitReportPage').then(m => ({ default: m.SubmitReportPage })));
const VerificationMethodologyPage = lazy(() => import('./pages/VerificationMethodologyPage').then(m => ({ default: m.VerificationMethodologyPage })));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard').then(m => ({ default: m.AdminDashboard })));
const AboutPage = lazy(() => import('./pages/StaticPages').then(m => ({ default: m.AboutPage })));
const PrivacyPage = lazy(() => import('./pages/StaticPages').then(m => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/StaticPages').then(m => ({ default: m.TermsPage })));
const NotFoundPage = lazy(() => import('./pages/StaticPages').then(m => ({ default: m.NotFoundPage })));

// Loading skeleton fallback
const PageLoadingFallback: React.FC = () => (
  <div style={{
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem 1rem'
  }}>
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.75rem',
      color: '#64748b',
      fontSize: '0.95rem',
      fontWeight: 500
    }}>
      <div style={{
        width: '20px',
        height: '20px',
        border: '2px solid #e2e8f0',
        borderTopColor: '#1d64f2',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite'
      }} />
      <span>Loading...</span>
    </div>
  </div>
);

// Scroll to top on navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Client-side 301/permanent redirect for non-canonical pass URLs
const LegacyPassRedirect: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <NotFoundPage />;

  const clean = slug.toLowerCase().trim();
  const targetPass = passesData.find(
    p => p.slug.toLowerCase() === clean || 
         p.id.toLowerCase() === clean || 
         p.slug.toLowerCase() === `${clean}-pass` || 
         p.id.toLowerCase() === `${clean}-pass` ||
         (clean === 'galibier' && p.slug === 'col-du-galibier') ||
         (clean === 'col-du-galibier' && p.slug === 'col-du-galibier') ||
         (clean === 'great-st-bernard' && p.slug === 'great-st-bernard-pass') ||
         (clean === 'grand-saint-bernard' && p.slug === 'great-st-bernard-pass') ||
         (clean === 'col-du-grand-saint-bernard' && p.slug === 'great-st-bernard-pass') ||
         (clean === 'gotthard' && p.slug === 'gotthard-pass') ||
         (clean === 'gotthardpass' && p.slug === 'gotthard-pass') ||
         (clean === 'passo-del-san-gottardo' && p.slug === 'gotthard-pass') ||
         (clean === 'san-gottardo' && p.slug === 'gotthard-pass') ||
         (clean === 'st-gotthard-pass' && p.slug === 'gotthard-pass') ||
         (clean === 'simplon' && p.slug === 'simplon-pass') ||
         (clean === 'simplonpass' && p.slug === 'simplon-pass') ||
         (clean === 'passo-del-sempione' && p.slug === 'simplon-pass') ||
         (clean === 'col-du-simplon' && p.slug === 'simplon-pass') ||
         (clean === 'prislop' && p.slug === 'prislop-pass') ||
         (clean === 'pasul-prislop' && p.slug === 'prislop-pass') ||
         (clean === 'pasulprislop' && p.slug === 'prislop-pass') ||
         (clean === 'vrsic' && p.slug === 'vrsic-pass') ||
         (clean === 'vrsic-pass' && p.slug === 'vrsic-pass') ||
         (clean === 'prelaz-vrsic' && p.slug === 'vrsic-pass') ||
         (clean === 'prelazvrsic' && p.slug === 'vrsic-pass') ||
         (clean === 'ruska-cesta' && p.slug === 'vrsic-pass') ||
         (clean === 'bonette' && p.slug === 'col-de-la-bonette') ||
         (clean === 'col-de-la-bonette' && p.slug === 'col-de-la-bonette') ||
         (clean === 'coldelabonette' && p.slug === 'col-de-la-bonette') ||
         (clean === 'cime-de-la-bonette' && p.slug === 'col-de-la-bonette') ||
         (clean === 'cimedelabonette' && p.slug === 'col-de-la-bonette') ||
         (clean === 'cime-bonette' && p.slug === 'col-de-la-bonette') ||
         (clean === 'col-de-bonette' && p.slug === 'col-de-la-bonette') ||
         (clean === 'la-bonette' && p.slug === 'col-de-la-bonette')
  );

  if (targetPass) {
    const canonicalUrl = getPassUrl(targetPass);
    return <Navigate to={canonicalUrl} replace />;
  }

  return <NotFoundPage />;
};

export const App: React.FC = () => {
  return (
    <PassesProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <div className="main-content">
          <Suspense fallback={<PageLoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/passes" element={<PassesPage />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/alerts" element={<AlertsPage />} />
              <Route path="/hierarchical" element={<HierarchicalPage />} />
              
              {/* Canonical 3-tier Pass URL */}
              <Route path="/passes/:country/:state/:slug" element={<PassDetailPage />} />
              
              {/* Legacy 1-tier and 2-tier Pass URL Redirects */}
              <Route path="/passes/:country/:slug" element={<LegacyPassRedirect />} />
              <Route path="/passes/:slug" element={<LegacyPassRedirect />} />
              <Route path="/col-du-galibier" element={<Navigate to="/passes/france/hautes-alpes-savoie/col-du-galibier" replace />} />
              <Route path="/galibier" element={<Navigate to="/passes/france/hautes-alpes-savoie/col-du-galibier" replace />} />
              <Route path="/col-de-l-iseran" element={<Navigate to="/passes/france/savoie/col-de-l-iseran" replace />} />
              <Route path="/col-de-liseran" element={<Navigate to="/passes/france/savoie/col-de-l-iseran" replace />} />
              <Route path="/iseran" element={<Navigate to="/passes/france/savoie/col-de-l-iseran" replace />} />
              <Route path="/col-de-la-bonette" element={<Navigate to="/passes/france/alpes-maritimes-alpes-de-haute-provence/col-de-la-bonette" replace />} />
              <Route path="/cime-de-la-bonette" element={<Navigate to="/passes/france/alpes-maritimes-alpes-de-haute-provence/col-de-la-bonette" replace />} />
              <Route path="/cime-bonette" element={<Navigate to="/passes/france/alpes-maritimes-alpes-de-haute-provence/col-de-la-bonette" replace />} />
              <Route path="/bonette" element={<Navigate to="/passes/france/alpes-maritimes-alpes-de-haute-provence/col-de-la-bonette" replace />} />
              <Route path="/la-bonette" element={<Navigate to="/passes/france/alpes-maritimes-alpes-de-haute-provence/col-de-la-bonette" replace />} />
              <Route path="/great-st-bernard-pass" element={<Navigate to="/passes/switzerland-italy/valais-aosta-valley/great-st-bernard-pass" replace />} />
              <Route path="/col-du-grand-saint-bernard" element={<Navigate to="/passes/switzerland-italy/valais-aosta-valley/great-st-bernard-pass" replace />} />
              <Route path="/grand-saint-bernard" element={<Navigate to="/passes/switzerland-italy/valais-aosta-valley/great-st-bernard-pass" replace />} />
              <Route path="/grimsel-pass" element={<Navigate to="/passes/switzerland/bern-valais/grimsel-pass" replace />} />
              <Route path="/grimselpass" element={<Navigate to="/passes/switzerland/bern-valais/grimsel-pass" replace />} />
              <Route path="/grimsel" element={<Navigate to="/passes/switzerland/bern-valais/grimsel-pass" replace />} />
              <Route path="/susten-pass" element={<Navigate to="/passes/switzerland/bern-uri/susten-pass" replace />} />
              <Route path="/sustenpass" element={<Navigate to="/passes/switzerland/bern-uri/susten-pass" replace />} />
              <Route path="/susten" element={<Navigate to="/passes/switzerland/bern-uri/susten-pass" replace />} />
              <Route path="/gotthard-pass" element={<Navigate to="/passes/switzerland/uri-ticino/gotthard-pass" replace />} />
              <Route path="/gotthardpass" element={<Navigate to="/passes/switzerland/uri-ticino/gotthard-pass" replace />} />
              <Route path="/gotthard" element={<Navigate to="/passes/switzerland/uri-ticino/gotthard-pass" replace />} />
              <Route path="/passo-del-san-gottardo" element={<Navigate to="/passes/switzerland/uri-ticino/gotthard-pass" replace />} />
              <Route path="/san-gottardo" element={<Navigate to="/passes/switzerland/uri-ticino/gotthard-pass" replace />} />
              <Route path="/rogers-pass" element={<Navigate to="/passes/canada/british-columbia/rogers-pass" replace />} />
              <Route path="/rogerspass" element={<Navigate to="/passes/canada/british-columbia/rogers-pass" replace />} />
              <Route path="/rogers" element={<Navigate to="/passes/canada/british-columbia/rogers-pass" replace />} />
              <Route path="/simplon-pass" element={<Navigate to="/passes/switzerland/valais/simplon-pass" replace />} />
              <Route path="/simplonpass" element={<Navigate to="/passes/switzerland/valais/simplon-pass" replace />} />
              <Route path="/simplon" element={<Navigate to="/passes/switzerland/valais/simplon-pass" replace />} />
              <Route path="/passo-del-simplon" element={<Navigate to="/passes/switzerland/valais/simplon-pass" replace />} />
              <Route path="/col-du-simplon" element={<Navigate to="/passes/switzerland/valais/simplon-pass" replace />} />
              <Route path="/prislop-pass" element={<Navigate to="/passes/romania/maramures-suceava/prislop-pass" replace />} />
              <Route path="/pasul-prislop" element={<Navigate to="/passes/romania/maramures-suceava/prislop-pass" replace />} />
              <Route path="/pasulprislop" element={<Navigate to="/passes/romania/maramures-suceava/prislop-pass" replace />} />
              <Route path="/prislop" element={<Navigate to="/passes/romania/maramures-suceava/prislop-pass" replace />} />
              <Route path="/vrsic-pass" element={<Navigate to="/passes/slovenia/gorenjska-goriska/vrsic-pass" replace />} />
              <Route path="/vrsic" element={<Navigate to="/passes/slovenia/gorenjska-goriska/vrsic-pass" replace />} />
              <Route path="/prelaz-vrsic" element={<Navigate to="/passes/slovenia/gorenjska-goriska/vrsic-pass" replace />} />
              <Route path="/prelazvrsic" element={<Navigate to="/passes/slovenia/gorenjska-goriska/vrsic-pass" replace />} />
              <Route path="/ruska-cesta" element={<Navigate to="/passes/slovenia/gorenjska-goriska/vrsic-pass" replace />} />
              
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/seo-research" element={<SeoResearchPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/submit-report" element={<SubmitReportPage />} />
              <Route path="/report" element={<Navigate to="/submit-report" replace />} />
              <Route path="/methodology" element={<VerificationMethodologyPage />} />
              <Route path="/verification-methodology" element={<Navigate to="/methodology" replace />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </BrowserRouter>
    </PassesProvider>
  );
};

export default App;

