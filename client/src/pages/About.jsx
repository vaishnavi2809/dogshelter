// src/pages/About.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style/About.css'; // Optional: Import a CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <Header />
      <main className="about-main">
        <section className="about-intro">
          <h1>About Us</h1>
          <p>Welcome to Pet Care Service! We are dedicated to providing exceptional care for your furry friends while you're away. Our mission is to ensure your pets are happy, healthy, and well-cared-for in your absence.</p>
        </section>
        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>At Pet Care Service, our goal is to deliver high-quality pet care with a personal touch. We understand that every pet is unique, and we tailor our services to meet their individual needs. Our team is passionate about animals and committed to making your pets' experience with us as enjoyable as possible.</p>
        </section>
        <section className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-member">
            <img src="/assets/team-member1.jpg" alt="Team Member 1" className="team-photo" />
            <h3>Jane Doe</h3>
            <p>Founder & CEO</p>
            <p>Jane has over 10 years of experience in pet care and is passionate about animal welfare. She ensures that our service standards are top-notch.</p>
          </div>
          <div className="team-member">
            <img src="/assets/team-member2.jpg" alt="Team Member 2" className="team-photo" />
            <h3>John Smith</h3>
            <p>Pet Care Specialist</p>
            <p>John is an experienced pet care specialist who loves working with animals. He takes great care in providing personalized attention to every pet.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
