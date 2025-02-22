import React from "react";
import { Link, useLocation } from "react-router-dom"; 
import logo from "../assets/logo.png";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/"; 

  return (
    <header className={isHomePage ? "transparent-navbar" : "solid-navbar"}>
      <div className="logo">
        
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/service">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          {/* <li><Link to="/blog">Blog</Link></li> */}
          {/* <li><Link to="/about">About</Link></li> */}
          {/* Pages will be added soon ! */}
          <li><Link to="/cart">Cart</Link></li>
          
        </ul>
      </nav>
      
      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-x-twitter"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
