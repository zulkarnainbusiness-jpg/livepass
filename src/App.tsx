import React from 'react';
import './styles/index.css';

export const App: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0b1120 0%, #0f172a 50%, #1e293b 100%)',
      color: '#f8fafc',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      padding: '2rem 1rem',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '520px',
        width: '100%',
        background: 'rgba(30, 41, 59, 0.7)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '1.25rem',
        padding: '3rem 2rem',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          margin: '0 auto 1.5rem',
          background: 'rgba(239, 68, 68, 0.15)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem'
        }}>
          🏔️
        </div>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 800,
          letterSpacing: '-0.025em',
          marginBottom: '0.75rem',
          color: '#ffffff'
        }}>
          Site Offline
        </h1>
        <p style={{
          fontSize: '1.05rem',
          lineHeight: '1.6',
          color: '#94a3b8',
          margin: '0 0 1.5rem 0'
        }}>
          LivePassWatch is currently offline for scheduled maintenance. All services and pass telemetry are currently unavailable.
        </p>
        <div style={{
          display: 'inline-block',
          padding: '0.5rem 1rem',
          borderRadius: '9999px',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          fontSize: '0.85rem',
          color: '#64748b'
        }}>
          livepasswatch.info
        </div>
      </div>
    </div>
  );
};

export default App;
