import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"; // Use Header component
import "../styles/styles.css";

const Gallery = () => {
  const images = Array.from({ length: 24 }, (_, index) =>
    require(`../assets/gallery/image${index + 1}.jpg`)
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
