// src/components/PetCard.js
import React from 'react';
import '../style/PetCard.css'; // Optional: Import a CSS file for styling

const PetCard = ({ title, description }) => {
  return (
    <div className="pet-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="learn-more-button">Learn More</button>
    </div>
  );
};

export default PetCard;
