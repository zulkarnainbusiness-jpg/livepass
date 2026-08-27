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
                <svg viewBox="0 0 100 100" fill="none" className="mountain-svg">
                  <defs>
                    <linearGradient id="ftrPeakLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38BDF8" />
                      <stop offset="100%" stopColor="#1D4ED8" />
                    </linearGradient>
                    <linearGradient id="ftrPeakRight" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#2563EB" />
                    </linearGradient>
                    <linearGradient id="ftrRoad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#38BDF8" />
                      <stop offset="50%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#93C5FD" />
                    </linearGradient>
                  </defs>
                  <path d="M12 76 L44 18 L68 76 Z" fill="url(#ftrPeakLeft)" />
                  <path d="M44 18 L52 33 L44 38 L36 33 Z" fill="#F0F9FF" opacity="0.95" />
                  <path d="M42 76 L68 28 L88 76 Z" fill="url(#ftrPeakRight)" opacity="0.9" />
                  <path d="M68 28 L74 39 L68 43 L62 39 Z" fill="#E0F2FE" opacity="0.9" />
                  <path d="M8 78 Q 42 60 92 78" stroke="url(#ftrRoad)" strokeWidth="5" strokeLinecap="round" />
                  <path d="M44 70 Q 60 63 76 72" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" strokeLinecap="round" opacity="0.8" />
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
              <li><Link to="/submit-report">Submit Road Report</Link></li>
              <li><Link to="/resources">Resources & Chain Laws</Link></li>
              <li><Link to="/about">About LivePassWatch</Link></li>
            </ul>
          </div>

          {/* Col 3: Popular Passes */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Major Passes</h4>
            <ul className="footer-links-list">
              <li><Link to="/passes/united-states/washington/snoqualmie-pass">Snoqualmie Pass (I-90)</Link></li>
              <li><Link to="/passes/united-states/washington/stevens-pass">Stevens Pass (US-2)</Link></li>
              <li><Link to="/passes/united-states/california/donner-pass">Donner Pass (I-80)</Link></li>
              <li><Link to="/passes/switzerland/graubunden/bernina-pass">Bernina Pass (Graubünden)</Link></li>
              <li><Link to="/passes/switzerland/uri-ticino/gotthard-pass">Gotthard Pass (Uri/Ticino)</Link></li>
              <li><Link to="/passes/switzerland/valais/great-st-bernard-pass">Great St Bernard Pass</Link></li>
              <li><Link to="/passes/france/hautes-alpes-savoie/col-du-galibier">Col du Galibier (Alps)</Link></li>
              <li><Link to="/passes/norway/more-og-romsdal/trollstigen-pass">Trollstigen Pass (Norway)</Link></li>
              <li><Link to="/passes/india/ladakh/chang-la-pass">Chang La Pass (Ladakh)</Link></li>
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
