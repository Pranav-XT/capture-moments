import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"; // Use Header component
import "../styles/styles.css";

const Gallery = () => {
  // Assuming images are in public/assets/images/image1.jpg, image2.jpg, etc.
  const images = Array.from({ length: 29 }, (_, index) => 
    `/assets/images/image${index + 1}.jpg`
  );

  return (
    <div>
      {/* Use Header component */}
      <Header />
      
      {/* Add spacing below navbar */}
      <div style={{ marginTop: "100px" }}></div>

      {/* Gallery Section */}
      <section className="gallery-container">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery ${index + 1}`} />
        ))}
      </section>

      
    </div>
  );
};

export default Gallery;
