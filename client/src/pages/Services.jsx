// src/pages/Services.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard'; // Create this component for displaying individual services
import '../style/Services.css'; // Optional: Import a CSS file for styling

const services = [
  {
    id: 1,
    title: 'Pet Boarding',
    description: 'Safe and comfortable boarding for your pets while you\'re away. Includes daily check-ins, feeding, and exercise.',
    price: '$25 per day',
  },
  {
    id: 2,
    title: 'Dog Walking',
    description: 'Daily dog walking services to keep your pets happy and healthy. Choose from 30-minute or 60-minute walks.',
    price: '$15 per walk',
  },
  {
    id: 3,
    title: 'Pet Grooming',
    description: 'Professional grooming services including baths, haircuts, and nail trimming to keep your pets looking their best.',
    price: '$50 per session',
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <Header />
      <main className="services-main">
        <h1>Our Services</h1>
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              price={service.price}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
