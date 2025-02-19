import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import cartIcon from "../assets/cart.png";
import logo from "../assets/logo.png"; // Ensure correct path

const Footer = () => {
  const { cartItems } = useCart();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section (Left Column) */}
        <div className="footer-logo">
        <Link to="/">
  <img src={logo} alt="Capture Moments Logo" className="logo" />
</Link>
         
          <br></br>
          <p>Credits: </p>
          <p>Pranav, Aditya, Santosh & Mr. Unknown</p>
          <p>&copy; 2025 Capture Moments. All Rights Reserved.</p>
        
        </div>

        {/* Services Section (Middle Column) */}
        <div className="footer-services">
          <h3>Our Services</h3>
          <ul>
            <li><Link to="/service">Wedding Photoshoots</Link></li>
            <li><Link to="/service">Baby Photoshoots</Link></li>
            <li><Link to="/service">Birthday Photoshoots</Link></li>
            <li><Link to="/service">Event Photoshoots</Link></li>
            <li><Link to="/service">Pre-Wedding Photoshoots</Link></li>
            <li><Link to="/service">Vacation Photoshoots</Link></li>
          </ul>
        </div>

        {/* Contact Section (Right Column) */}
        <div className="footer-contact">
        <h3><Link to="/contact" className="contact-link">Contact Us</Link></h3>
          <p>E-mail: <a href="mailto:info@example.com">pranavpatangext@gmail.com</a></p>
          <p>Phone: <a href="tel:+917757984048">+91 7757984048</a></p>
          <p>Address: <a href="https://maps.app.goo.gl/SkQX6J7NhRB3T8Ve8"target="_blank">Sadguru Gadge Maharaj College Karad 415110, Maharashtra India</a></p>
          {/* Social Media Icons */}
    <div className="social-icons">
        <a href="https://web.whatsapp.com" target="_blank"><i className="fab fa-whatsapp"></i></a>
        <a href="https://instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
        <a href="https://facebook.com" target="_blank"><i className="fab fa-facebook"></i></a>
        <a href="https://youtube.com" target="_blank"><i className="fab fa-youtube"></i></a>
        <a href="https://twitter.com" target="_blank"><i className="fab fa-x-twitter"></i></a>
        <a href="https://twitter.com" target="_blank"><i className="fab fa-linkedin"></i></a>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"></link>
      </div>
        </div>
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
      <a href="https://wa.me/+917757984048" target="_blank" rel="noopener noreferrer" className="whatsapp-icon">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
</a>

    </footer>
    
  );
};

export default Footer;
