import React from 'react';
import { Clock, ShieldCheck, Globe, AlertTriangle } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <div className="trust-bar">
      <div className="trust-grid">
        <div className="trust-item">
          <div className="trust-icon-box">
            <Clock size={22} />
          </div>
          <div>
            <h4 className="trust-item-title">Real-time Updates</h4>
            <p className="trust-item-desc">Live data from official transportation and weather sources.</p>
          </div>
        </div>

        <div className="trust-item">
          <div className="trust-icon-box">
            <ShieldCheck size={22} />
          </div>
          <div>
            <h4 className="trust-item-title">Verified & Trusted</h4>
            <p className="trust-item-desc">All information is verified and sourced from official agencies.</p>
          </div>
        </div>

        <div className="trust-item">
          <div className="trust-icon-box">
            <Globe size={22} />
          </div>
          <div>
            <h4 className="trust-item-title">Global Coverage</h4>
            <p className="trust-item-desc">10,000+ mountain passes across all continents.</p>
          </div>
        </div>

        <div className="trust-item">
          <div className="trust-icon-box">
            <AlertTriangle size={22} />
          </div>
          <div>
            <h4 className="trust-item-title">Travel Safe</h4>
            <p className="trust-item-desc">Plan ahead with accurate information and avoid unexpected closures.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
