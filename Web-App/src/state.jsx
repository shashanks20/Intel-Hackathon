import React from 'react';
import { Link } from 'react-router-dom';

const State = () => {
  return (
    <div className="state-selection">
      <h2 className="region-name">Southern Regions</h2>
      <div className="state-cards">
        <Link to="/substation/AndraPradesh" className='state-link'>
          <div className="state-card cardAnimation">Andhra Pradesh</div>
        </Link>
        <Link to="/substation/Karnataka" className='state-link'>
          <div className="state-card cardAnimation">Karnataka</div>
        </Link>
        <Link to="/substation/Telangana" className='state-link'>
          <div className="state-card cardAnimation">Telangana</div>
        </Link>
        <Link to="/substation/Pondicherry" className='state-link'>
          <div className="state-card cardAnimation">Pondicherry</div>
        </Link>
        <Link to="/substation/TamilNadu" className='state-link'>
          <div className="state-card cardAnimation">Tamil Nadu</div>
        </Link>
        <Link to="/substation/Kerala" className='state-link'>
          <div className="state-card cardAnimation">Kerala</div>
        </Link>
      </div>
    </div>
  );
};

export default State;
