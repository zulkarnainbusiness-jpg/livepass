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

  const targetPass = passesData.find(
    p => p.slug === slug || p.id === slug || p.slug === `${slug}-pass` || p.id === `${slug}-pass`
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

