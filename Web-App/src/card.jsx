import React from 'react';
import "./card.css";
function Card({ state, substation, temperature, pressure, humidity, windSpeed, risk }) {
  // Determine severity based on risk level
  const getSeverity = (risk) => {
    return risk === 1 ? 'High' : 'Low';
  };

  // Determine shadow class based on severity
  const getShadowClass = (severity) => {
    switch (severity) {
      case 'High':
        return 'shadow-inner-red';
      case 'Low':
        return 'shadow-inner-blue';
      default:
        return '';
    }
  };

  // Calculate severity based on risk
  const severity = getSeverity(risk);

  return (
    <div className={`card ${getShadowClass(severity)}`}>
      <div className="card-header">
        <h2>Weather Details</h2>
      </div>
      <div className="card-body">
        <h3>State: {state}</h3>
        <h4>Substation: {substation}</h4>
        <p>Temperature: {temperature}</p>
        <p>Pressure: {pressure}</p>
        <p>Humidity: {humidity}</p>
        <p>Wind Speed: {windSpeed}</p>
        <p>Severity: {severity}</p>
      </div>
    </div>
  );
}

export default Card;
