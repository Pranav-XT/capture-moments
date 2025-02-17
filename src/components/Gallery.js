import React, { useState, useEffect } from "react";
import "../styles.css"; // Ensure styles are applied

const images = [
  "images/image27.jpg", "images/image23.jpg", "images/image20.jpg", "images/image24.jpg",
  "images/image25.jpg", "images/image16.jpg", "images/image26.jpg", "images/image18.jpg",
  "images/image12.jpg", "images/image13.jpg", "images/image14.jpg", "images/image11.jpg",
  "images/image16.jpg", "images/image17.jpg", "images/image21.jpg", "images/image19.jpg",
  "images/image6.jpg", "images/image15.jpg", "images/image22.jpg", "images/image5.jpg",
  "images/image7.jpg", "images/image8.jpg", "images/image10.jpg", "images/image4.jpg",
  
];

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="gallery">
      <h2 className="gallery-title">Our Gallery</h2>

      {/* First 8 Images (4 Columns, 2 Rows) */}
      <div className="gallery-grid">
        {images.slice(0, 8).map((src, index) => (
          <div key={index} className="gallery-item">
            <a href={src} data-fancybox="gallery">
              <img src={src} alt={`Gallery Image ${index + 1}`} />
            </a>
          </div>
        ))}
      </div>

      {/* Hidden Gallery (Appears After Clicking "View All") */}
      {showAll && (
        <div className="gallery-grid gallery-hidden show">
          {images.slice(8).map((src, index) => (
            <div key={index + 8} className="gallery-item">
              <a href={src} data-fancybox="gallery">
                <img src={src} alt={`Gallery Image ${index + 9}`} />
              </a>
            </div>
          ))}
        </div>
      )}

      {/* View More/Less Button (Centered) */}
      <div className="gallery-btn-container">
        <button className="view-more-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "View Less" : "View All"}
        </button>
      </div>
    </section>
  );
};

export default Gallery;