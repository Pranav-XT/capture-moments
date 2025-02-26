import React from "react";
import "../styles/styles.css"; // Ensure correct CSS file is imported
import { Link } from "react-router-dom";
const Terms = () => {
  return (
    <div className="privacy-page"> 
      <h1 className="privacy-title">Terms & Conditions</h1>
      <p className="privacy-date">Last Updated: February 2025</p>
      <div className="privacy-content">
        <h2>Introduction</h2>
        <p>Welcome to Capture Moments. These Terms & Conditions govern your use of our services.</p>
        
        <h2>Use of Services</h2>
        <p>By accessing our website, you agree to use it legally and respectfully.</p>
        
        <h2>Booking & Payments</h2>
        <p>All bookings require an advance payment. Cancellations made 72 hours before the shoot may be eligible for a refund.</p>
        
        <h2>Liability & Rights</h2>
        <p>We retain the rights to photographs for portfolio and promotional use unless otherwise agreed.</p>
        
        <h2>Contact</h2>
        <p>If you have any questions, please <Link to="/contact" className="contact-link"> <strong>Contact Us</strong></Link></p>
      </div>
    </div>
  );
};

export default Terms;
