// src/components/ServiceCard.js
import React from 'react';
import '../style/ServiceCard.css'; // Optional: Import a CSS file for styling

const ServiceCard = ({ title, description, price }) => {
  return (
    <div className="service-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="price">{price}</p>
      <button className="learn-more-button">Learn More</button>
    </div>
  );
};

export default ServiceCard;
