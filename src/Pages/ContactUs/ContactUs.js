import React, { useState } from 'react';
import './ContactUs.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add form submission logic, like sending data to a server
    console.log('Form Data:', formData);
    alert('Your message has been sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
    <Navbar/>
    <div className="contact-us-page">
      <h1>Contact Us</h1>
      <p>We would love to hear from you! Please fill out the form below or reach us at the provided contact details.</p>
      
      <div className="contact-details">
        <h2>Our Contact Information</h2>
        <p><strong>Address:</strong> 123 Main St, Your City, Your Country</p>
        <p><strong>Phone:</strong> +123 456 7890</p>
        <p><strong>Email:</strong> support@yourwebsite.com</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;
