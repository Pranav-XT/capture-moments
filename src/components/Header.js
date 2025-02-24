import React from "react";
import { Link, useLocation } from "react-router-dom"; 
import logo from "../assets/logo.png";
import enquireIcon from "../assets/Enquire.png"; // Import Enquire Image

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
          {/* <li><Link to="/contact">Contact</Link></li> */}
          <li><Link to="/gallery">Gallery</Link></li>
          {/* <li><Link to="/FAQ">FAQs</Link></li>
          <li><Link to="/blog">Blog</Link></li> */}
          <li><Link to="/about">About</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>

      {/* Enquire Now Section */}
      <div className="enquire-now">
        <img src={enquireIcon} alt="Enquire" />
        <span><Link to="/Contact">Enquire Now</Link></span>
      </div>
    </header>
  );
};

export default Header;
