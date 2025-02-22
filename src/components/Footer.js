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
        
        <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt="Capture Moments Logo" className="logo" />
          </Link>
          <br />

          {/* Footer Links */}
          <div className="footer-links">
            <Link to="/terms">T&C</Link> | 
            <Link to="/privacy-policy"> Privacy Policy</Link> | 
            <Link to="/help">Help & Support</Link>
          </div>

          <h6><br></br>
            <center>
              Credits
              <p></p> 
              Pranav Patange, Aditya Pawar, Santosh Patil & Vaibhav Salunkhe
            </center>
          </h6>
          <p>
            <center>&copy; 2025 Capture Moments. All Rights Reserved.</center>
          </p>
        </div>

        {/* Services Section */}
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

        {/* Contact Section */}
        <div className="footer-contact">
          <h3>
            <center>
              <Link to="/contact" className="contact-link">Contact Us</Link>
            </center>
          </h3>
          <p><center>E-mail: <a href="mailto:info@example.com">pranavpatangext@gmail.com</a></center></p>
          <p><center>Phone: <a href="tel:+917757984048">+91 7757984048</a></center></p>
          <p>
            <center>
              Address: <a href="https://maps.app.goo.gl/SkQX6J7NhRB3T8Ve8" target="_blank">
                Sadguru Gadge Maharaj College, Karad 415110, Maharashtra India
              </a>
            </center>
          </p>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://web.whatsapp.com" target="_blank"><i className="fab fa-whatsapp"></i></a>
            <a href="https://instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
            <a href="https://facebook.com" target="_blank"><i className="fab fa-facebook"></i></a>
            <a href="https://youtube.com" target="_blank"><i className="fab fa-youtube"></i></a>
            <a href="https://twitter.com" target="_blank"><i className="fab fa-x-twitter"></i></a>
           
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

      {/* WhatsApp Floating Icon */}
      <a href="https://wa.me/+917757984048" target="_blank" rel="noopener noreferrer" className="whatsapp-icon">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>
    </footer>
  );
};

export default Footer;
