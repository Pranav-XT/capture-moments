import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"; // Import Header component
import "../styles/styles.css"; // Import styles

const PrivacyPolicy = () => {
  return (
    <div>
      <div style={{ marginTop: "100px" }}></div>

      {/* Privacy Policy Section */}
      <section className="privacy-policy-container">
        <h1>Privacy & Policy</h1>
        <p>Last updated: 20-02-2025</p>

        <h2>1. Introduction</h2>
        <p>
          Welcome to <strong>Capture Moments.</strong> We value your privacy and are
          committed to protecting your personal data. This Privacy & Policy
          explains how we collect, use, and share your information when you use
          our website.
        </p>

        <h2>2. Information We Collect</h2>
        <ul>
          <li><strong>Personal Information:</strong> Name, E-mail, Phone Number.</li>
          <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and time spent on our site.</li>
          <li><strong>Cookies & Tracking:</strong> We may use cookies to improve your experience.</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use the collected information to:</p>
        <ul>
          <li>Provide and improve our services.</li>
          <li>Communicate with you (e.g., customer support, updates).</li>
          <li>Analyze usage trends to enhance user experience.</li>
        </ul>

        <h2>4. Sharing Your Information</h2>
        <p>We do not sell or rent your personal data. However, we may share it with:</p>
        <ul>
          <li>Service providers.</li>
          <li>Legal authorities, if required by law.</li>
        </ul>

        <h2>5. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies to improve website performance. You can disable cookies
          in your browser settings.
        </p>

        <h2>6. Data Security</h2>
        <p>We take reasonable measures to protect your data from unauthorized access.</p>

        <h2>7. Your Rights</h2>
        <ul>
          <li>Access, update, or delete your personal data.</li>
          <li>Opt-out of marketing emails.</li>
          <li>Request data portability.</li>
        </ul>

        <h2>8. Contact Us</h2>
        <p>If you have any questions,<Link to="/contact" className="contact-link"> <strong>Contact Us</strong></Link></p>

        <p><strong>Note:</strong> This Privacy Policy may be updated periodically.</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
