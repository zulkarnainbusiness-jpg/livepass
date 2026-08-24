import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import { PassesProvider } from './context/PassesContext';
import { AdminDashboard } from './pages/AdminDashboard';
import './styles/index.css';

// Scroll to top on navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
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
            
            {/* Programmatic SEO Friendly Pass URLs */}
            <Route path="/passes/:country/:state/:slug" element={<PassDetailPage />} />
            <Route path="/passes/:country/:slug" element={<PassDetailPage />} />
            <Route path="/passes/:slug" element={<PassDetailPage />} />
            
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/seo-research" element={<SeoResearchPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
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
