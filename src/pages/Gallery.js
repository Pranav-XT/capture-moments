import React from "react";
import Header from "../components/Header"; 
import "../styles/styles.css"; 

const Gallery = () => {
  const images = Array.from({ length: 24 }, (_, index) =>
    require(`../assets/gallery/image${index + 1}.jpg`)
  );
  
  
  return (
    <div>
    
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