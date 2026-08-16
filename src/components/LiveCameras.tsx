import React, { useState, useEffect } from 'react';
import { CameraFeed } from '../types';
import { RefreshCw, AlertCircle, Info, Camera, MapPin, Clock } from 'lucide-react';
import './LiveCameras.css';

interface LiveCamerasProps {
  cameras: CameraFeed[];
  passName: string;
  highway: string;
  wsdotUrl?: string;
}

export const LiveCameras: React.FC<LiveCamerasProps> = ({ cameras, passName, highway, wsdotUrl }) => {
  const [timestampStr, setTimestampStr] = useState<string>(Date.now().toString());
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const refreshCameras = () => {
    setIsRefreshing(true);
    setTimestampStr(Date.now().toString());
    setErrors({});
    setTimeout(() => setIsRefreshing(false), 800);
  };

  useEffect(() => {
    // If no cameras or they don't have update intervals, default to 2 mins
    const intervalMs = cameras[0]?.updateIntervalMs || 120000;
    const interval = setInterval(refreshCameras, intervalMs);
    return () => clearInterval(interval);
  }, [cameras]);

  const handleImageError = (id: string) => {
    setErrors(prev => ({ ...prev, [id]: true }));
  };

  if (!cameras || cameras.length === 0) return null;

  return (
    <section className="live-cameras-section">
      <div className="cameras-header">
        <h2>{passName} Live Camera{cameras.length > 1 ? 's' : ''} &ndash; {highway} Road Conditions</h2>
        <button 
          className={`refresh-button ${isRefreshing ? 'refreshing' : ''}`}
          onClick={refreshCameras}
          aria-label="Refresh Cameras"
        >
          <RefreshCw size={16} />
          Refresh Now
        </button>
      </div>
      
      <p className="overview-text" style={{marginBottom: '1.5rem'}}>
        Check the latest {passName} road view from the official WSDOT camera{cameras.length > 1 ? 's' : ''} {cameras.length === 1 ? `at ${highway} ${cameras[0].milepost}` : `along ${highway}`}.
      </p>

      <div className="cameras-grid">
        {cameras.map(camera => (
          <div key={camera.id} className="camera-card">
            <div className="camera-image-container">
              {errors[camera.id] ? (
                <div className="camera-error">
                  <Camera size={32} opacity={0.5} />
                  <span>Camera temporarily unavailable</span>
                </div>
              ) : (
                <>
                  <img
                    src={`${camera.image}?t=${timestampStr}`}
                    alt={`${camera.title} Camera`}
                    className="camera-image"
                    loading="lazy"
                    onError={() => handleImageError(camera.id)}
                  />
                  <div className="camera-live-badge">LIVE</div>
                </>
              )}
            </div>
            <div className="camera-info">
              <h3 className="camera-title">{camera.title}</h3>
              <div className="camera-meta">
                {camera.milepost && (
                  <div className="camera-location">
                    <MapPin size={14} />
                    {highway} {camera.milepost} {camera.direction && `• ${camera.direction}`}
                  </div>
                )}
                <div className="camera-timestamp">
                  <Clock size={14} />
                  Updated just now
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cameras-disclaimer">
        <AlertCircle size={20} />
        <div style={{ flex: 1 }}>
          <p style={{ margin: '0 0 0.5rem 0' }}>
            <strong>Official WSDOT Snapshot Feed:</strong> Camera images are refreshed approximately every 2 minutes by the Washington State Department of Transportation (WSDOT). Images are periodic snapshots and not a continuous live-video stream. Images may be delayed during severe weather or maintenance and are not a substitute for official road-condition information.
          </p>
          <a 
            href={wsdotUrl || `https://wsdot.wa.gov/travel/real-time/mountainpasses/${passName.split(' ')[0].toLowerCase()}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', fontSize: '13px', marginTop: '4px', textDecoration: 'none' }}
          >
            View Official WSDOT {passName} Page &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
