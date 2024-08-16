// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PetCard from '../components/PetCard';
import '../style/Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <main className="home-main">
        <section className="hero-section">
          <h1>Welcome to Pet Care Service</h1>
          <p>Your pet's comfort and safety are our top priorities. Whether you're going on a trip or need a helping hand, we've got you covered!</p>
          <button className="cta-button">Learn More</button>
        </section>
        <section className="services-section">
          <h2>Our Services</h2>
          <div className="services-grid">
            <PetCard
              title="Pet Boarding"
              description="Safe and comfortable boarding for your pets while you're away."
            />
            <PetCard
              title="Dog Walking"
              description="Daily dog walking services to keep your pets happy and healthy."
            />
            <PetCard
              title="Pet Grooming"
              description="Professional grooming services to keep your pet looking and feeling great."
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
