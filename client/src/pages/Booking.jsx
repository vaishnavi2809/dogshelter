// src/pages/Booking.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style/Booking.css'; // Optional: Import a CSS file for styling

const Booking = () => {
  const [formData, setFormData] = useState({
    petName: '',
    ownerName: '',
    serviceType: 'boarding',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API or server
    alert('Booking submitted!');
  };

  return (
    <div className="booking-container">
      <Header />
      <main className="booking-main">
        <h1>Book Our Services</h1>
        <form onSubmit={handleSubmit} className="booking-form">
          <label>
            Pet Name:
            <input
              type="text"
              name="petName"
              value={formData.petName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Owner Name:
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Service Type:
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
            >
              <option value="boarding">Boarding</option>
              <option value="walking">Walking</option>
              <option value="grooming">Grooming</option>
            </select>
          </label>
          <label>
            Start Date:
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            End Date:
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
