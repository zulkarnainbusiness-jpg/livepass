import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="lp-footer">
      <div className="app-container footer-inner">
        <div className="footer-top-grid">
          {/* Col 1: Brand */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-brand-logo">
              <div className="brand-logo-icon">
                <svg viewBox="0 0 100 70" fill="none" className="mountain-svg">
                  <path d="M12 56L42 12L70 56H12Z" stroke="#3B82F6" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round" />
                  <path d="M42 56L68 20L88 56H42Z" stroke="#60A5FA" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round" />
                  <path d="M35 24L42 12L49 24L42 20Z" fill="#3B82F6" />
                  <path d="M22 56C30 52 40 48 50 49C60 50 70 55 80 56" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
              <div className="brand-text-block">
                <span className="brand-title">LIVEPASSWATCH</span>
                <span className="brand-tagline">Know Before You Go.</span>
              </div>
            </Link>
            <p className="footer-desc">
              Global real-time mountain pass tracking, live webcams, snowpack analytics, road closures, and weather advisories for alpine travelers worldwide.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Explore</h4>
            <ul className="footer-links-list">
              <li><Link to="/passes">Passes Directory</Link></li>
              <li><Link to="/map">Interactive Map</Link></li>
              <li><Link to="/alerts">Pass Alerts & Closures</Link></li>
              <li><Link to="/hierarchical">Hierarchical Navigator</Link></li>
              <li><Link to="/resources">Resources & Chain Laws</Link></li>
            </ul>
          </div>

          {/* Col 3: Popular Passes */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Major Passes</h4>
            <ul className="footer-links-list">
              <li><Link to="/passes/united-states/washington/snoqualmie-pass">Snoqualmie Pass (I-90)</Link></li>
              <li><Link to="/passes/united-states/washington/stevens-pass">Stevens Pass (US-2)</Link></li>
              <li><Link to="/passes/united-states/california/donner-pass">Donner Pass (I-80)</Link></li>
              <li><Link to="/passes/india/jammu-and-kashmir/zoji-la">Zoji La Pass (NH-1)</Link></li>
              <li><Link to="/passes/india/ladakh/khardung-la">Khardung La Pass</Link></li>
              <li><Link to="/passes/switzerland/valais-uri/furka-pass">Furka Pass (Alps)</Link></li>
              <li><Link to="/passes/italy/south-tyrol-lombardy/stelvio-pass">Stelvio Pass (SS38)</Link></li>
            </ul>
          </div>

          {/* Col 4: Resources & Legal */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Safety & Legal</h4>
            <ul className="footer-links-list">
              <li><Link to="/resources">Chain Requirements</Link></li>
              <li><Link to="/resources">Winter Driving Guide</Link></li>
              <li><Link to="/resources">Emergency Directory</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © {new Date().getFullYear()} LIVEPASSWATCH (www.livepasswatch.info). All rights reserved. Real-time mountain pass tracking platform.
          </div>
          <div className="footer-disclaimer">
            Always verify road conditions with local transportation departments and highway patrol before traveling.
          </div>
        </div>
      </div>
    </footer>
  );
};
