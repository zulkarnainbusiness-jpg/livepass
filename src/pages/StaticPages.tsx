import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mountain, Search, Compass, Bell, Home } from 'lucide-react';
import { SEOHelper } from '../components/SEOHelper';

export const AboutPage: React.FC = () => {
  return (
    <div className="app-container" style={{ padding: '48px 24px', maxWidth: '800px' }}>
      <SEOHelper
        title="About LivePassWatch"
        description="Learn about LIVEPASSWATCH and our mission to provide accurate real-time mountain pass road conditions worldwide."
        canonicalUrl="https://www.livepasswatch.info/about"
      />
      <div className="lp-card" style={{ padding: '36px' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '16px' }}>About LIVEPASSWATCH</h1>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px' }}>
          <strong>LIVEPASSWATCH (www.livepasswatch.info)</strong> is the world's premier real-time mountain pass tracking platform. Our mission is simple: <em>Know Before You Go</em>. We empower travelers, commercial freight operators, motorcyclists, and mountain commuters with verified, live road conditions across critical mountain passes globally.
        </p>
        <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '10px' }}>Our Core Pillars</h3>
        <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, paddingLeft: '20px' }}>
          <li><strong>Direct Agency Telemetry:</strong> Live streaming data directly from DOTs, BRO, and international alpine authorities.</li>
          <li><strong>Zero Fabricated Data:</strong> Clear labeling and transparent update timestamps on all pass metrics.</li>
          <li><strong>Safety &amp; Preparedness:</strong> Interactive tire chain requirement guides and emergency contacts.</li>
        </ul>
      </div>
    </div>
  );
};

export const PrivacyPage: React.FC = () => {
  return (
    <div className="app-container" style={{ padding: '48px 24px', maxWidth: '800px' }}>
      <SEOHelper
        title="Privacy Policy"
        description="Privacy policy and data governance for LivePassWatch."
        canonicalUrl="https://www.livepasswatch.info/privacy"
      />
      <div className="lp-card" style={{ padding: '36px' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '16px' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          At LivePassWatch, we respect your privacy. We do not sell your personal information. Subscribed email addresses are exclusively utilized for real-time mountain pass closure alerts and weekly alpine travel updates.
        </p>
      </div>
    </div>
  );
};

export const TermsPage: React.FC = () => {
  return (
    <div className="app-container" style={{ padding: '48px 24px', maxWidth: '800px' }}>
      <SEOHelper
        title="Terms of Service"
        description="Terms of service and safety disclaimers for LivePassWatch."
        canonicalUrl="https://www.livepasswatch.info/terms"
      />
      <div className="lp-card" style={{ padding: '36px' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '16px' }}>Terms &amp; Safety Disclaimer</h1>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          Mountain weather and alpine road conditions can change unpredictably in minutes. Always verify official state DOT advisories and carry appropriate winter traction devices before departing on high elevation routes.
        </p>
      </div>
    </div>
  );
};

export const NotFoundPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/passes?search=${encodeURIComponent(query.trim())}`);
    } else {
      navigate('/passes');
    }
  };

  return (
    <div className="app-container" style={{ padding: '80px 24px', textAlign: 'center', maxWidth: '650px' }}>
      <SEOHelper
        title="Page Not Found (404)"
        description="The requested mountain pass or page could not be found on LivePassWatch."
        noIndex={true}
      />
      <div className="lp-card" style={{ padding: '48px 28px' }}>
        <Mountain size={52} style={{ color: 'var(--primary)', marginBottom: '16px' }} />
        <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '12px', color: 'var(--text-primary)' }}>
          Page Not Found
        </h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '28px', fontSize: '15px', lineHeight: 1.6 }}>
          We couldn't find the road, mountain pass, or page you were looking for. The route may have changed or the pass name might be spelled differently.
        </p>

        {/* Search Field */}
        <form onSubmit={handleSearch} style={{ display: 'flex', gap: '8px', maxWidth: '420px', margin: '0 auto 32px' }}>
          <input
            type="text"
            placeholder="Search passes (e.g. Snoqualmie, Zoji La)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              padding: '10px 14px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-surface-subtle)',
              color: 'var(--text-primary)',
              fontSize: '14px',
              outline: 'none'
            }}
          />
          <button type="submit" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Search size={16} /> Search
          </button>
        </form>

        {/* Navigation Buttons Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px' }}>
          <Link to="/" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <Home size={16} /> Home
          </Link>
          <Link to="/passes" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <Mountain size={16} /> Browse Passes
          </Link>
          <Link to="/map" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <Compass size={16} /> View Map
          </Link>
          <Link to="/alerts" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <Bell size={16} /> Alerts
          </Link>
        </div>
      </div>
    </div>
  );
};
