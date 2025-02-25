import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import cartIcon from "../assets/cart.png";
import logo from "../assets/logo.png";
import locationIcon from "../assets/location.png";
import emailIcon from "../assets/email.png";
import phoneIcon from "../assets/phone.png";
import clockIcon from "../assets/clock.png";
import helpIcon from "../assets/help.png";

const Footer = () => {
  const { cartItems } = useCart();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* 1st Column - Logo & Social Links */}
        <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt="Capture Moments Logo" className="logo" />
          </Link>
          <br></br><br></br><h5><strong>Photography is more than just 
            pictures; it’s about freezing emotions, capturing fleeting moments, 
            and turning them into timeless memories.</strong></h5>
          <div className="social-icons">
          <br></br> <a href="https://web.whatsapp.com" target="_blank"><i className="fab fa-whatsapp"></i></a>
            <a href="https://instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
            <a href="https://facebook.com" target="_blank"><i className="fab fa-facebook"></i></a>
            <a href="https://youtube.com" target="_blank"><i className="fab fa-youtube"></i></a>
            <a href="https://twitter.com" target="_blank"><i class="fa-brands fa-twitter"></i></a>
           
          </div> 
          <div className="footer-bottom">
      
        <strong><Link to="/Terms">Terms & Conditions</Link></strong><br></br>
        <br></br><strong><Link to="/privacy-policy">Privacy & Policy</Link></strong>
       
      </div> 
        </div>

        {/* 2nd Column - Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
          <br></br><li><Link to="/">Home</Link></li>
          <br></br><li><Link to="/gallery">Gallery</Link></li>
          <br></br><li><Link to="/blog">Blogs</Link></li>
          <br></br><li><Link to="/faq">FAQs</Link></li>
          <br></br><li><Link to="/contact">Contact Us</Link></li>
          <br></br><li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        {/* 3rd Column - Services */}
        <div className="footer-services">
          <h3>Services</h3>
          <ul>
          <br></br><li><Link to="/service">Wedding Photoshoots</Link></li>
          <br></br><li><Link to="/service">Baby Photoshoots</Link></li>
          <br></br><li><Link to="/service">Event Photoshoots</Link></li>
          <br></br><li><Link to="/service">Birthday Photoshoots</Link></li>
          <br></br><li><Link to="/service">Pre-Wedding Photoshoots</Link></li>
          <br></br><li><Link to="/service">Vacation Photoshoots</Link></li>
          </ul>
        </div>

        {/* 4th Column - Contact Details */}
        <div className="footer-address">
          <h3>Contact Details</h3>
          <br></br><p><img src={locationIcon} alt="Location" /><a href="https://maps.app.goo.gl/SkQX6J7NhRB3T8Ve8" target="_blank">Sadguru Gadge Maharaj College, Karad 415110</a></p>
          <br></br><p><img src={emailIcon} alt="Email" /><a href="mailto:pranavpatangext@gmail.com">pranavpatangext@gmail.com</a></p>
          <br></br><p><img src={phoneIcon} alt="Phone" /><a href="tel:+917757984048">+91 7757984048</a></p>
          <br></br><p><img src={clockIcon} alt="Clock" />8 AM - 5 PM, Monday-Saturday</p>
          <br></br> <p>
  <Link to="/help" className="help-link">
    <img src={helpIcon} alt="Help" /> 24/7 Help & Support
  </Link>
</p>        </div>
      </div>

      {/* Floating Cart Icon */}
      {cartItems.length > 0 && (
        <div className="cart-footer">
          <Link to="/cart">
            <img src={cartIcon} alt="Cart" />
            <span className="cart-count">{cartItems.length}</span>
          </Link>
        </div>
      )}

      {/* WhatsApp Floating Icon */}
      <a href="https://wa.me/+917757984048" target="_blank" rel="noopener noreferrer" className="whatsapp-icon">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>

      {/* Copyright & Credit Section */}
      <div className="footer-bottom">
        <p>
          © Copyright 2025. All Rights Reserved by <strong><Link to="/">Capture Moments</Link></strong><br />
          Designed and Developed With ❤️ by <strong><Link to="/contact">PranavXT</Link></strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
