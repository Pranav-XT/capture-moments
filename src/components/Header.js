import React from "react";
import { Link, useLocation } from "react-router-dom"; 
import logo from "../assets/logo.png";
import enquireIcon from "../assets/Enquire.png"; // Import Enquire Image

const Header = () => {
  const location = useLocation(); // Get the current route

  return (
    <header className={location.pathname === "/" ? "transparent-navbar" : "solid-navbar"}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>Home</Link>
          </li>
          <li>
            <Link to="/service" className={location.pathname.startsWith("/service") ? "active-link" : ""}>Services</Link>
          </li>
          <li>
            <Link to="/gallery" className={location.pathname.startsWith("/gallery") ? "active-link" : ""}>Gallery</Link>
          </li>
          <li>
            <Link to="/FAQ" className={location.pathname.startsWith("/FAQ") ? "active-link" : ""}>FAQs</Link>
          </li>
          <li>
            <Link to="/blog" className={location.pathname.startsWith("/blog") ? "active-link" : ""}>Blogs</Link>
          </li>
        </ul>
      </nav>

      {/* Enquire Now Section */}
      <div className="enquire-now">
        <img src={enquireIcon} alt="Enquire" />
        <span>
          <Link to="/enquiry" className={location.pathname.startsWith("/enquiry") ? "active-link" : ""}>Book an Appointment</Link>
        </span>
      </div>
    </header>
  );
};

export default Header;
