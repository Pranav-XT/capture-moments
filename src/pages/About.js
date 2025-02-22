import React from "react";
import "../styles/styles.css"; // Ensure correct path

import aboutImage from "../assets/images/about_us.png"; // Replace with an actual image

const About = () => {
  return (
    <div className="about-page">
      <div className="about-card">
        <img src={aboutImage} alt="About Us" className="about-image" />
    
        <p>
          Welcome to <strong>Capture Moments</strong>, where we turn your special
          moments into lifelong memories. Our team of professional photographers
          specializes in <strong>weddings, pre-wedding shoots, baby photography, and event coverage</strong>.
        </p>
        <p>
          With a passion for storytelling and years of experience, we aim to capture
          emotions that last a lifetime. Whether it's a grand celebration or an intimate
          event, we make sure every picture tells a beautiful story.
        </p>
        <p>
          Our commitment to high-quality photography, creativity, and attention to detail
          ensures that your photos reflect genuine emotions and unforgettable moments.
        </p>
        <p>
          📸 Let us capture your <strong>happiest</strong> and most <strong>precious</strong> moments!
        </p>

        <hr className="about-divider" />

        <p>
          <strong>Capture Moments</strong> is a photography site developed as part of a project 
          assigned by <strong>S.G.M College Karad</strong> under the <strong>internship program</strong>, 
          guided by <strong>Hari Om Palsande Innovations Pvt. Ltd.</strong>
        </p>
        <p>
          This project was successfully completed by <strong>Pranav Patange, Aditya Pawar, Santosh Patil, 
          and Vaibhav Salunkhe</strong>.
        </p>
      </div>
    </div>
  );
};

export default About;
