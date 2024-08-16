// src/pages/Booking.js
import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    petName: '',
    ownerName: '',
    serviceType: '',
    startDate: '',
    endDate: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pet Name:
        <input type="text" name="petName" value={formData.petName} onChange={handleChange} />
      </label>
      <label>
        Owner Name:
        <input type="text" name="ownerName" value={formData.ownerName} onChange={handleChange} />
      </label>
      <label>
        Service Type:
        <select name="serviceType" value={formData.serviceType} onChange={handleChange}>
          <option value="boarding">Boarding</option>
          <option value="walking">Walking</option>
          <option value="grooming">Grooming</option>
        </select>
      </label>
      <label>
        Start Date:
        <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
      </label>
      <label>
        End Date:
        <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Booking;
