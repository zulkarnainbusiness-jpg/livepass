import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mountain, Search, Compass, Bell, Home, User, Users, ShieldCheck, Mail, Sparkles, MapPin, Heart } from 'lucide-react';
import { SEOHelper } from '../components/SEOHelper';

export const AboutPage: React.FC = () => {
  return (
    <div className="app-container" style={{ padding: '48px 24px', maxWidth: '850px' }}>
      <SEOHelper
        title="About LivePassWatch - Meet the Founder, Our Mission & Team"
        description="Meet founder Zulkarnain, learn the Himalayan story behind LivePassWatch, and discover our dedicated team tracking live mountain pass conditions."
        canonicalUrl="https://www.livepasswatch.info/about"
      />

      {/* Main Platform Mission */}
      <div className="lp-card" style={{ padding: '36px', marginBottom: '28px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: '9999px', backgroundColor: 'rgba(56, 189, 248, 0.1)', color: 'var(--primary)', fontSize: '13px', fontWeight: '600', marginBottom: '16px' }}>
          <Mountain size={14} /> Official About &amp; Editorial Standards
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '16px', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
          About LIVEPASSWATCH
        </h1>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px', fontSize: '15.5px' }}>
          <strong>LIVEPASSWATCH (<a href="https://www.livepasswatch.info" style={{ color: 'var(--primary)', textDecoration: 'none' }}>www.livepasswatch.info</a>)</strong> is a real-time mountain pass tracking platform. Our mission is simple: <em>Know Before You Go</em>. We empower travelers, commercial freight operators, motorcyclists, and mountain commuters with verified, live road conditions across critical mountain passes globally.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '28px', marginBottom: '14px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldCheck size={20} style={{ color: 'var(--primary)' }} /> Our Core Editorial &amp; Data Pillars
        </h3>
        <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.85, paddingLeft: '20px', fontSize: '14.5px' }}>
          <li style={{ marginBottom: '10px' }}>
            <strong>Direct Agency Telemetry:</strong> Live streaming official data directly from state DOTs, Border Roads Organisation (BRO), cantonal road services, and international alpine transport authorities.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Zero Fabricated Data:</strong> Clear labeling, official citation sources, and transparent update timestamps on every single pass metric.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Safety &amp; Preparedness:</strong> Interactive tire chain requirement guides, live HD webcams, avalanche bulletins, and official emergency highway contacts.
          </li>
        </ul>
      </div>

      {/* Meet the Founder Section */}
      <div className="lp-card" style={{ padding: '36px', marginBottom: '28px', borderLeft: '4px solid var(--primary)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
          <div style={{ 
            width: '46px', 
            height: '46px', 
            borderRadius: '50%', 
            backgroundColor: 'rgba(56, 189, 248, 0.14)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'var(--primary)',
            flexShrink: 0
          }}>
            <User size={24} />
          </div>
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: '800', margin: 0, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
              Meet the Founder
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13.5px', color: 'var(--text-muted)', marginTop: '2px' }}>
              <MapPin size={14} style={{ color: 'var(--primary)' }} /> Born &amp; Raised in the Himalayas
            </div>
          </div>
        </div>

        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '15px' }}>
          <p style={{ marginBottom: '16px' }}>
            Hi, I'm <strong>Zulkarnain</strong>. I was born and raised in the Himalayas, and I've spent years travelling across high mountain passes — for work, for family visits, and honestly just because I love the mountains.
          </p>

          <p style={{ marginBottom: '16px' }}>
            That experience is also where the frustration came from. More times than I can count, I'd set out for a pass with no real idea whether it was even open — no clear updates, no reliable source, just word of mouth from other drivers or a WhatsApp forward that turned out to be three days old. I've been stuck at closed passes, turned back halfway, and seen other travellers do the same. It's not just inconvenient — on some of these roads, it can genuinely be dangerous.
          </p>

          <p style={{ marginBottom: '20px' }}>
            That's the problem LivePassWatch is built to solve. I wanted a place where anyone heading into the mountains — a tourist, a biker, a truck driver, a local commuting between towns — could check a pass before leaving and actually trust what they saw.
          </p>

          <div style={{ 
            marginTop: '24px', 
            paddingTop: '18px', 
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div>
              <span style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '16px' }}>— Zulkarnain</span>
              <span style={{ display: 'block', fontSize: '13px', color: 'var(--text-muted)' }}>Founder &amp; Lead Architect, LivePassWatch</span>
            </div>
            <a 
              href="mailto:zulkarnainbusiness@gmail.com" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '6px', 
                fontSize: '13.5px', 
                color: 'var(--primary)', 
                textDecoration: 'none',
                fontWeight: '500'
              }}
            >
              <Mail size={15} /> zulkarnainbusiness@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Our Dedicated Team & Verification Workflow */}
      <div className="lp-card" style={{ padding: '36px', marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
          <div style={{ 
            width: '46px', 
            height: '46px', 
            borderRadius: '50%', 
            backgroundColor: 'rgba(56, 189, 248, 0.14)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'var(--primary)',
            flexShrink: 0
          }}>
            <Users size={24} />
          </div>
          <div>
            <h2 style={{ fontSize: '22px', fontWeight: '800', margin: 0, color: 'var(--text-primary)' }}>
              The Team Behind LivePassWatch
            </h2>
            <span style={{ fontSize: '13.5px', color: 'var(--text-muted)' }}>Human-monitored alpine intelligence</span>
          </div>
        </div>

        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '15px', marginBottom: '18px' }}>
          We're a small team: <strong>five of us right now</strong>, three web developers and two dedicated researchers who spend their time tracking conditions, cross-checking road reports, and keeping the information on the site current. We're not a faceless big corporation — just passionate people who care about getting this right, because we've felt firsthand what it's like when accurate mountain road information isn't available.
        </p>

        <div style={{ 
          backgroundColor: 'var(--bg-surface-subtle)', 
          border: '1px solid var(--border-color)', 
          borderRadius: 'var(--radius-md)', 
          padding: '20px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '14px'
        }}>
          <Sparkles size={22} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h4 style={{ margin: '0 0 6px 0', fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)' }}>
              Community Eyes on the Road
            </h4>
            <p style={{ margin: '0 0 12px 0', color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.65 }}>
              If you spot outdated info on a pass, or you've got local knowledge that could help other travellers, reach out. This platform works better with more eyes on the road.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '13.5px' }}>
              <a href="mailto:zulkarnainbusiness@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Mail size={14} /> Send a Road Report (zulkarnainbusiness@gmail.com)
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Governance & Trust Links */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', padding: '12px 0', fontSize: '14px', color: 'var(--text-muted)' }}>
        <Link to="/privacy" style={{ color: 'var(--text-secondary)', textDecoration: 'underline' }}>Privacy Policy</Link>
        <span>•</span>
        <Link to="/terms" style={{ color: 'var(--text-secondary)', textDecoration: 'underline' }}>Terms &amp; Safety Disclaimer</Link>
        <span>•</span>
        <Link to="/resources" style={{ color: 'var(--text-secondary)', textDecoration: 'underline' }}>Chain Laws &amp; Resources</Link>
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
