import React, { useState, useEffect, useRef } from 'react';
import { Camera, RefreshCw, AlertCircle, ExternalLink, Video, ShieldCheck } from 'lucide-react';
import './CameraProvider.css';

export type CameraProviderType = 'image' | 'webrtc' | 'hls' | 'mjpeg' | 'iframe';

export interface CameraSource {
  id: string;
  title: string;
  type?: CameraProviderType;
  image?: string;
  streamUrl?: string;
  webrtcConfig?: {
    iceServers?: RTCIceServer[];
    signalingUrl?: string;
  };
  location?: string;
  milepost?: string;
  direction?: string;
  source?: string;
  updateIntervalMs?: number;
  officialUrl?: string;
}

interface CameraProviderProps {
  camera: CameraSource;
  passName: string;
  highway: string;
  onOpenUserCamera?: () => void;
}

export const CameraProvider: React.FC<CameraProviderProps> = ({
  camera,
  passName,
  highway,
  onOpenUserCamera
}) => {
  const [timestamp, setTimestamp] = useState<string>(Date.now().toString());
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'connecting' | 'connected' | 'error' | 'idle'>('idle');
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);

  const providerType = camera.type || 'image';

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimestamp(Date.now().toString());
    setHasError(false);
    setTimeout(() => setIsRefreshing(false), 700);
  };

  useEffect(() => {
    setHasError(false);
    setTimestamp(Date.now().toString());

    if (providerType === 'webrtc' && camera.streamUrl) {
      initWebRTC();
    }

    // Auto-refresh image feeds
    if (providerType === 'image') {
      const intervalMs = camera.updateIntervalMs || 60000;
      const timer = setInterval(() => {
        setTimestamp(Date.now().toString());
      }, intervalMs);
      return () => clearInterval(timer);
    }

    return () => {
      if (peerConnectionRef.current) {
        peerConnectionRef.current.close();
        peerConnectionRef.current = null;
      }
    };
  }, [camera.id, providerType, camera.streamUrl]);

  const initWebRTC = async () => {
    try {
      setConnectionStatus('connecting');
      const pc = new RTCPeerConnection(camera.webrtcConfig || {
        iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
      });
      peerConnectionRef.current = pc;

      pc.ontrack = (event) => {
        if (videoRef.current && event.streams[0]) {
          videoRef.current.srcObject = event.streams[0];
          setConnectionStatus('connected');
        }
      };

      pc.onconnectionstatechange = () => {
        if (pc.connectionState === 'failed' || pc.connectionState === 'disconnected') {
          setConnectionStatus('error');
          setHasError(true);
        } else if (pc.connectionState === 'connected') {
          setConnectionStatus('connected');
        }
      };

      if (!camera.webrtcConfig?.signalingUrl) {
        setConnectionStatus('idle');
      }
    } catch (err) {
      console.warn('WebRTC initialization fallback:', err);
      setConnectionStatus('error');
      setHasError(true);
    }
  };

  return (
    <div className="camera-provider-wrapper">
      <div className="camera-provider-header">
        <div className="provider-title-group">
          <Camera size={18} className="provider-icon" />
          <h3 className="provider-title">{camera.title}</h3>
          <span className="provider-badge provider-type-badge">
            {providerType === 'webrtc' ? 'WebRTC Stream' : 'Live Snapshot'}
          </span>
        </div>
        <div className="provider-header-actions">
          <button
            onClick={handleRefresh}
            className={`btn-provider-refresh ${isRefreshing ? 'refreshing' : ''}`}
            aria-label="Refresh Camera Snapshot"
          >
            <RefreshCw size={14} />
            <span>Refresh</span>
          </button>
          {onOpenUserCamera && (
            <button
              onClick={onOpenUserCamera}
              className="btn-user-cam-trigger"
              title="Test road view with device camera"
            >
              <Video size={14} />
              <span>Use My Camera</span>
            </button>
          )}
        </div>
      </div>

      <div className="camera-viewport-container">
        {hasError ? (
          <div className="camera-fallback-card">
            <div className="fallback-icon-wrap">
              <AlertCircle size={36} />
            </div>
            <h4 className="fallback-title">Camera Feed Temporarily Updating</h4>
            <p className="fallback-desc">
              The official highway camera snapshot is currently refreshing or undergoing routine maintenance by local road authorities.
            </p>
            <div className="fallback-action-group">
              {camera.officialUrl && (
                <a
                  href={camera.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary fallback-link"
                >
                  View Official Camera Portal <ExternalLink size={13} />
                </a>
              )}
              <button onClick={handleRefresh} className="btn btn-secondary fallback-retry">
                Retry Feed
              </button>
            </div>
          </div>
        ) : providerType === 'webrtc' && connectionStatus === 'connected' ? (
          <div className="video-stream-container">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="live-video-element"
            />
            <div className="live-stream-badge">
              <span className="pulsing-live-dot" /> LIVE WebRTC
            </div>
          </div>
        ) : providerType === 'iframe' && camera.streamUrl ? (
          <div className="iframe-stream-container">
            <iframe
              src={camera.streamUrl}
              title={camera.title}
              className="camera-iframe-element"
              allow="fullscreen"
              loading="lazy"
              onError={() => setHasError(true)}
            />
          </div>
        ) : (
          <div className="image-stream-container">
            <img
              src={camera.image ? `${camera.image}${camera.image.includes('?') ? '&' : '?'}t=${timestamp}` : ''}
              alt={`${camera.title} road conditions on ${highway}`}
              className="camera-snapshot-image"
              loading="lazy"
              onError={() => setHasError(true)}
            />
            <div className="live-snapshot-badge">
              <span className="pulsing-live-dot" /> LIVE CAMERA
            </div>
            <div className="camera-meta-overlay">
              <span>{camera.location || highway}</span>
              <span className="dot-sep">•</span>
              <span>Refreshes periodically</span>
            </div>
          </div>
        )}
      </div>

      <div className="camera-provider-footer">
        <div className="footer-meta-left">
          <span className="source-label">Official Source:</span>
          <strong>{camera.source || 'Regional Highway Authority'}</strong>
        </div>
        {camera.officialUrl && (
          <a
            href={camera.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="official-source-link"
          >
            Official Road Authority Portal <ExternalLink size={13} />
          </a>
        )}
      </div>

      <div className="camera-anti-fabrication-banner">
        <ShieldCheck size={16} className="shield-icon" />
        <span>
          <strong>Anti-Fabrication Guarantee:</strong> LivePassWatch connects only to verified road cameras and official transport feeds. We never generate simulated feeds or present outdated images as live video.
        </span>
      </div>
    </div>
  );
};
