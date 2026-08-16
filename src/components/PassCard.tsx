import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MountainPass } from '../types';
import { StatusBadge } from './StatusBadge';
import './PassCard.css';

interface PassCardProps {
  pass: MountainPass;
}

export const PassCard: React.FC<PassCardProps> = ({ pass }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/passes/${pass.country.toLowerCase().replace(/\s+/g, '-')}/${pass.state.toLowerCase().replace(/[\s\/]+/g, '-')}/${pass.slug}`);
  };

  return (
    <div className="popular-pass-card lp-card lp-card-hover" onClick={handleCardClick}>
      <div className="pass-card-image-wrapper">
        <img
          src={pass.image}
          alt={`${pass.name} mountain pass road`}
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
    </div>
  );
};
