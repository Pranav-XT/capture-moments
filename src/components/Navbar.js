import React from "react";
import "../styles.css"; // Ensure styles are applied

const Navbar = () => {
  return (
    <header className="header" style={{ backgroundColor: "#ff6347" }}>
      <div className="logo">
      <a href="/"> {}
          <img src="images/logo.png" alt="Capture Moments Logo" />
        </a>
      </div>

      {/* Navbar Links */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://web.whatsapp.com" target="_blank"><i className="fab fa-whatsapp"></i></a>
        <a href="https://instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
        <a href="https://facebook.com" target="_blank"><i className="fab fa-facebook"></i></a>
        <a href="https://youtube.com" target="_blank"><i className="fab fa-youtube"></i></a>
        <a href="https://twitter.com" target="_blank"><i className="fab fa-x-twitter"></i></a>
      </div>
    </header>
  );
};

export default Navbar;
