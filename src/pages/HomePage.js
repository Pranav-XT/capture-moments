import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bg1 from "../assets/images/background1.jpg";
import bg2 from "../assets/images/background2.jpg";
import bg3 from "../assets/images/background3.jpg";
import bg4 from "../assets/images/background4.jpg";
import bg5 from "../assets/images/background5.jpg";
import bg6 from "../assets/images/background6.jpg";
import Testimonials from "./Testimonials";
const backgrounds = [bg1, bg2, bg3, bg4, bg5, bg6];

const HomePage = () => {
  const [currentBackground, setCurrentBackground] = useState(0);

  

  useEffect(() => {
    let isMounted = true;
    const interval = setInterval(() => {
      if (isMounted) {
        setCurrentBackground((prev) => (prev === backgrounds.length - 1 ? 0 : prev + 1));
      }
    }, 4000);
  
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);
  

  return (
    <div
      className="homepage"
      style={{
        backgroundImage: `url(${backgrounds[currentBackground]})`,
      }}
    >
      <h1>Welcome to Capture Moments</h1>

      <h2>Your Precious Moments, Beautifully Captured</h2>
      <Link to="/service">

      <button>
  <Link to="/service">Explore Services</Link>
</button>


      </Link>
    </div>
  );
};

export default HomePage;
