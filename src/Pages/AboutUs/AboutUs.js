import React from 'react';
import './AboutUs.css';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';


const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className="about-us-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to BrandName</h1>
          <p>Your trusted partner for All Tech Gadgets.</p>
        </div>
      </section>

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          BrandName is dedicated to providing the highest quality fruits and vegetables to your door. Our mission is to promote healthy eating habits and ensure that you get the freshest produce directly from farms. We believe in supporting local farmers and delivering eco-friendly and sustainable products.
        </p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to offer fresh, organic produce at affordable prices while contributing to a healthier lifestyle for our community. We aim to be environmentally conscious by reducing food waste and encouraging sustainable farming practices.
        </p>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="/path-to-image-1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="/path-to-image-2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Head of Operations</p>
          </div>
          <div className="team-member">
          <img src="/path-to-image-3.jpg" alt="Team Member 3" />
            <h3>David Lee</h3>
            <p>Marketing Manager</p>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
    
  );
};

export default AboutUs;
