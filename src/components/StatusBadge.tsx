import React from 'react';
import { PassStatus, AlertType } from '../types';

interface StatusBadgeProps {
  status: PassStatus | AlertType | string;
  size?: 'sm' | 'md' | 'lg';
  showDot?: boolean;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'sm', showDot = false }) => {
  const normStatus = status ? status.toUpperCase() : 'UNKNOWN';
  
  return (
    <span className={`status-badge status-${normStatus} status-badge-${size}`}>
      {showDot && <span className="status-dot" />}
      {status}
    </span>
  );
};
