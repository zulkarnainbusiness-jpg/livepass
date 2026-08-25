import React, { useState, useEffect, useRef } from 'react';
import { Video, VideoOff, X, Shield, RefreshCw, AlertTriangle, CheckCircle } from 'lucide-react';
import './UserCameraModal.css';

interface UserCameraModalProps {
  isOpen: boolean;
  onClose: () => void;
  passName: string;
}

export const UserCameraModal: React.FC<UserCameraModalProps> = ({
  isOpen,
  onClose,
  passName
}) => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isInitializing, setIsInitializing] = useState(false);
  const [isSecureContext, setIsSecureContext] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Check HTTPS / Secure Context
    if (typeof window !== 'undefined') {
      setIsSecureContext(window.isSecureContext || window.location.hostname === 'localhost');
    }
  }, []);

  useEffect(() => {
    if (!isOpen) {
      stopCamera();
    }
  }, [isOpen]);

  const startCamera = async (deviceId?: string) => {
    setIsInitializing(true);
    setErrorMessage(null);

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Camera access API is not supported in this browser or requires an HTTPS secure connection.');
      }

      // Stop previous stream if any
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }

      const constraints: MediaStreamConstraints = {
        video: deviceId ? { deviceId: { exact: deviceId } } : { facingMode: 'environment' },
        audio: false
      };

      const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
      setStream(mediaStream);

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }

      // Enumerate camera devices for switcher
      const allDevices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = allDevices.filter(d => d.kind === 'videoinput');
      setDevices(videoDevices);
      if (videoDevices.length > 0 && !deviceId) {
        setSelectedDeviceId(videoDevices[0].deviceId);
      }
    } catch (err: any) {
      console.error('Camera permission or device error:', err);
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        setErrorMessage('Camera access was denied. Please allow camera permissions in your browser settings to test your local camera view.');
      } else if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
        setErrorMessage('No camera device was detected on your system.');
      } else {
        setErrorMessage(err.message || 'Unable to access your device camera. Please check your camera permissions.');
      }
    } finally {
      setIsInitializing(false);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setErrorMessage(null);
  };

  const handleDeviceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDeviceId = e.target.value;
    setSelectedDeviceId(newDeviceId);
    startCamera(newDeviceId);
  };

  if (!isOpen) return null;

  return (
    <div className="user-cam-modal-backdrop" onClick={onClose}>
      <div className="user-cam-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="user-cam-modal-header">
          <div className="modal-title-wrap">
            <Video size={20} className="modal-header-icon" />
            <h3>Device Camera Road Inspector ({passName})</h3>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="user-cam-modal-body">
          {!isSecureContext && (
            <div className="cam-alert-box alert-warning">
              <AlertTriangle size={18} />
              <span>Camera API requires a secure connection (HTTPS or localhost).</span>
            </div>
          )}

          {/* Privacy Disclaimer */}
          <div className="cam-privacy-notice">
            <Shield size={18} className="shield-green" />
            <div>
              <strong>Privacy Protection Notice:</strong>
              <p>
                Your camera stream runs 100% locally in your browser's memory using standard HTML5 <code>getUserMedia()</code>. No video, snapshots, or biometric data are recorded, stored, or transmitted to any server.
              </p>
            </div>
          </div>

          {errorMessage && (
            <div className="cam-alert-box alert-danger">
              <AlertTriangle size={18} />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Video Preview Box */}
          <div className="cam-video-viewport">
            {stream ? (
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="user-video-stream"
              />
            ) : (
              <div className="cam-placeholder">
                <Video size={48} opacity={0.3} />
                <p>Click "Start Local Camera" to inspect local road / weather visibility</p>
              </div>
            )}
          </div>

          {/* Device Controls */}
          <div className="cam-controls-row">
            {devices.length > 1 && stream && (
              <div className="device-select-wrap">
                <label htmlFor="camSelect">Select Camera:</label>
                <select
                  id="camSelect"
                  value={selectedDeviceId}
                  onChange={handleDeviceChange}
                  className="cam-device-select"
                >
                  {devices.map((device, idx) => (
                    <option key={device.deviceId} value={device.deviceId}>
                      {device.label || `Camera ${idx + 1}`}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="cam-actions-group">
              {!stream ? (
                <button
                  onClick={() => startCamera()}
                  disabled={isInitializing}
                  className="btn btn-primary btn-cam-action"
                >
                  {isInitializing ? (
                    <>
                      <RefreshCw size={16} className="spinning" /> Requesting Permission...
                    </>
                  ) : (
                    <>
                      <Video size={16} /> Start Local Camera
                    </>
                  )}
                </button>
              ) : (
                <button onClick={stopCamera} className="btn btn-secondary btn-cam-action">
                  <VideoOff size={16} /> Stop Camera
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="user-cam-modal-footer">
          <span className="footer-status">
            {stream ? (
              <span className="status-online">
                <CheckCircle size={14} /> Local Camera Active
              </span>
            ) : (
              'Camera Inactive'
            )}
          </span>
          <button onClick={onClose} className="btn btn-secondary">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
