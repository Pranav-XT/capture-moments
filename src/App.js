import React from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import "./styles.css"; // Import global styles

function App() {
  return (
    <div className="App">
      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="hero">
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
          {/* Carousel Images */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/image1.JPG" className="d-block w-100" alt="Gallery Image 1" />
            </div>
            <div className="carousel-item">
              <img src="images/image2.JPG" className="d-block w-100" alt="Gallery Image 2" />
            </div>
            <div className="carousel-item">
              <img src="images/image3.JPG" className="d-block w-100" alt="Gallery Image 3" />
            </div>
            <div className="carousel-item">
              <img src="images/image4.JPG" className="d-block w-100" alt="Gallery Image 4" />
            </div>
          </div>

          {/* Carousel Controls */}
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>

          {/* Explore Gallery Button */}
          <div className="carousel-caption">
            <a href="#gallery" className="cta">Explore Gallery</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Gallery Section */}
      <Gallery />

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
          <center> <a href="/"> {}
            <img src="images/logo.png" alt="Capture Moments Logo" className="footer-logo" />
            <p>Capture Moments</p>
            <p><center>Your Precious Moments, Beautifully Captured.</center></p>
            <p><center>Credits: Pranav Patange, Aditya Pawar, Santoh Patil, Mr. Unknown</center></p>
          </a></center>
          </div>

          <div className="footer-section">
          <center><h3>Our Services</h3><br></br>
            <ul className="footer-services">
              <li><a href="https://wa.me/7757984048?text=I%20am%20interested%20in%20Wedding%20Shoots" target="_blank">Wedding Shoots</a></li>
              <li><a href="https://wa.me/7757984048?text=I%20am%20interested%20in%20Pre-Wedding%20Shoots" target="_blank">Pre-Wedding Shoots</a></li>
              <li><a href="https://wa.me/7757984048?text=I%20am%20interested%20in%20Baby%20Shoots" target="_blank">Baby Shoots</a></li>
              <li><a href="https://wa.me/7757984048?text=I%20am%20interested%20in%20Birthday%20Shoots" target="_blank">Birthday Shoots</a></li>
              <li><a href="https://wa.me/7757984048?text=I%20am%20interested%20in%20Event%20Photography" target="_blank">Event Photography</a></li>
            </ul></center>
          </div>

          <div className="footer-section">
            <center><h3>Contact Us</h3><br></br>
            <p>Email: <a href="mailto:pranavpatangext@gmail.com">pranavpatangext@gmail.com</a></p>
            <p>Phone: <a href="tel:+917757984048">+91 7757984048</a></p>
            <p>Address: <a href="https://maps.app.goo.gl/6GNr99quJF5mVxZB8">Sadguru Gadage Maharaj College, Karad 415124</a></p>
            </center>
            <div className="social-icons">
        <a href="https://web.whatsapp.com" target="_blank"><i className="fab fa-whatsapp"></i></a>
        <a href="https://instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
        <a href="https://facebook.com" target="_blank"><i className="fab fa-facebook"></i></a>
        <a href="https://youtube.com" target="_blank"><i className="fab fa-youtube"></i></a>
        <a href="https://twitter.com" target="_blank"><i className="fab fa-x-twitter"></i></a>
          </div>
        </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Capture Moments. All Rights Reserved. <a href="#privacy-policy">Privacy Policy</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
