import React from 'react';
import { Link } from 'react-router-dom';
import { MountainPass } from '../types';
import { getPassUrl } from '../data/passes';
import { StatusBadge } from './StatusBadge';
import './PassCard.css';

interface PassCardProps {
  pass: MountainPass;
}

export const PassCard: React.FC<PassCardProps> = ({ pass }) => {
  return (
    <Link 
      to={getPassUrl(pass)} 
      className="popular-pass-card lp-card lp-card-hover" 
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div className="pass-card-image-wrapper">
        <img
          src={pass.image}
          alt={`${pass.name} road status and live conditions`}
          className="pass-card-img"
          loading="lazy"
        />
      </div>
      <div className="pass-card-content">
        <h3 className="pass-card-title">{pass.name}</h3>
        <p className="pass-card-location">{pass.state}, {pass.country}</p>
        <div className="pass-card-status-row">
          <StatusBadge status={pass.status} />
        </div>
      </div>
    </Link>
  );
};
