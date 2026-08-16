import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mountain, Compass, CheckCircle2 } from 'lucide-react';
import { SEOHelper } from '../components/SEOHelper';

export const AboutPage: React.FC = () => {
  return (
    <div className="app-container" style={{ padding: '48px 24px', maxWidth: '800px' }}>
      <SEOHelper title="About LivePassWatch" description="Learn about LIVEPASSWATCH and our mission to provide accurate real-time mountain pass road conditions worldwide." />
      <div className="lp-card" style={{ padding: '36px' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '16px' }}>About LIVEPASSWATCH</h1>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px' }}>
          <strong>LIVEPASSWATCH (www.livepasswatch.com)</strong> is the world's premier real-time mountain pass tracking platform. Our mission is simple: <em>Know Before You Go</em>. We empower travelers, commercial freight operators, motorcyclists, and mountain commuters with verified, live road conditions across more than 10,000 mountain passes globally.
        </p>
        <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '10px' }}>Our Core Pillars</h3>
        <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, paddingLeft: '20px' }}>
          <li><strong>Direct Agency Telemetry:</strong> Live streaming data directly from DOTs, BRO, and international alpine authorities.</li>
          <li><strong>Zero Fabricated Data:</strong> Clear labeling and transparent update timestamps on all pass metrics.</li>
          <li><strong>Safety & Preparedness:</strong> Interactive tire chain requirement guides and emergency contacts.</li>
        </ul>
      </div>
    </div>
  );
};

export const PrivacyPage: React.FC = () => {
  return (
    <div className="app-container" style={{ padding: '48px 24px', maxWidth: '800px' }}>
      <SEOHelper title="Privacy Policy" description="Privacy policy and data governance for LivePassWatch." />
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
      <SEOHelper title="Terms of Service" description="Terms of service and safety disclaimers for LivePassWatch." />
      <div className="lp-card" style={{ padding: '36px' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '16px' }}>Terms & Safety Disclaimer</h1>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          Mountain weather and alpine road conditions can change unpredictably in minutes. Always verify official state DOT advisories and carry appropriate winter traction devices before departing on high elevation routes.
        </p>
      </div>
    </div>
  );
};

export const NotFoundPage: React.FC = () => {
  return (
    <div className="app-container" style={{ padding: '80px 24px', textAlign: 'center', maxWidth: '600px' }}>
      <SEOHelper title="404 - Page Not Found" description="The requested mountain pass page could not be found." />
      <div className="lp-card" style={{ padding: '48px 24px' }}>
        <Mountain size={48} style={{ color: 'var(--primary)', marginBottom: '16px' }} />
        <h1 style={{ fontSize: '24px', marginBottom: '12px' }}>Mountain Pass Not Found</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
          The road or pass you are looking for may have moved or does not exist in our global registry.
        </p>
        <Link to="/passes" className="btn btn-primary">Browse All Passes</Link>
      </div>
    </div>
  );
};
