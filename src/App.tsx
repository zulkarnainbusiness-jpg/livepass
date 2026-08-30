import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useParams, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { PassesPage } from './pages/PassesPage';
import { MapPage } from './pages/MapPage';
import { AlertsPage } from './pages/AlertsPage';
import { HierarchicalPage } from './pages/HierarchicalPage';
import { PassDetailPage } from './pages/PassDetailPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { SeoResearchPage } from './pages/SeoResearchPage';
import { AboutPage, PrivacyPage, TermsPage, NotFoundPage } from './pages/StaticPages';
import { SubmitReportPage } from './pages/SubmitReportPage';
import { VerificationMethodologyPage } from './pages/VerificationMethodologyPage';
import { PassesProvider } from './context/PassesContext';
import { AdminDashboard } from './pages/AdminDashboard';
import { passesData, getPassUrl } from './data/passes';
import './styles/index.css';

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
         (clean === 'st-gotthard-pass' && p.slug === 'gotthard-pass')
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
        </div>
        <Footer />
      </BrowserRouter>
    </PassesProvider>
  );
};

export default App;

