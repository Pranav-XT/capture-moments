import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import a from "../assets/images/wedding.jpg";
import b from "../assets/images/babyshoot.jpg";
import c from "../assets/images/birthday.jpg";
import d from "../assets/images/event.jpg";
import e from "../assets/images/prewedding.jpg";
import f from "../assets/images/vacation.jpg";

const serviceList = [
  { 
    id: 1, name: "Wedding Photoshoots", price: 30000, image: a, rating: 5, 
    description: "Capture your special day with stunning, high-quality wedding photos.", 
    testimonials: ["Amazing shots!", "Captured our moments perfectly!", "Highly recommended!"]
  },
  { 
    id: 2, name: "Baby Photoshoots", price: 15000, image: b, rating: 4, 
    description: "Cherish your baby's precious moments with a heartwarming photoshoot.", 
    testimonials: ["So adorable!", "Loved every picture!", "Very patient and professional."]
  },
  { 
    id: 3, name: "Birthday Photoshoots", price: 10000, image: c, rating: 4, 
    description: "Make birthdays unforgettable with vibrant and lively photography.", 
    testimonials: ["Super fun!", "Great for kids' birthdays!", "Captured the energy well."]
  },
  { 
    id: 4, name: "Event Photoshoots", price: 10000, image: d, rating: 4, 
    description: "Professional event photography to capture every key moment.", 
    testimonials: ["Best event coverage!", "Captured every detail!", "Reliable service."]
  },
  { 
    id: 5, name: "Pre-Wedding Photoshoots", price: 45000, image: e, rating: 5, 
    description: "A beautiful journey before the big day with scenic and creative shots.", 
    testimonials: ["Dreamy pictures!", "Perfectly captured our love story!", "Loved the themes!"]
  },
  { 
    id: 6, name: "Vacation Photoshoots", price: 15000, image: f, rating: 4, 
    description: "Turn your vacation memories into a professional photo album.", 
    testimonials: ["Perfect holiday captures!", "Felt like a celebrity!", "Great angles and editing."]
  }
];

const Service = () => {
  const { addToCart } = useCart();
  const [selectedService, setSelectedService] = useState(null);
  const [showCartPopup, setShowCartPopup] = useState(false);

  const handleAddToCart = (service) => {
    addToCart(service);
    setShowCartPopup(true);
    setTimeout(() => setShowCartPopup(false), 3000);
  };

  const handleViewDetails = (service) => {
    setSelectedService(service);
  };

  const handleBack = () => {
    setSelectedService(null);
  };

  return (
    <div className="service-page">
      {selectedService ? (
        <div className="full-service">
          <img src={selectedService.image} alt={selectedService.name} className="full-service-image" />
          <h1>{selectedService.name}</h1>
          <p className="service-price">Rs. {selectedService.price}</p>
          <p className="service-description">{selectedService.description}</p>

          {/* Star Ratings */}
          <div className="service-rating">
            {"★".repeat(selectedService.rating)}{"☆".repeat(5 - selectedService.rating)}
          </div>

          {/* Customer Testimonials */}
          <h3>Customer Testimonials:</h3>
          <ul className="service-testimonials">
            {selectedService.testimonials.map((testimonial, index) => (
              <li key={index}>{testimonial}</li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="button-group">
            {/* <button className="add-to-cart-btn" onClick={() => handleAddToCart(selectedService)}>Add to Cart</button> */}
            <button className="back-button" onClick={handleBack}>Back to Services</button>
          </div>
        </div>
      ) : (
        <div className="service-list">
          <div className="services">
            {serviceList.map((service) => (
              <div key={service.id} className="service-card">
                <img src={service.image} alt={service.name} />
                <h3>{service.name}</h3>
                <p>Rs.{service.price}</p>

                <div className="service-rating">
                  {"★".repeat(service.rating)}{"☆".repeat(5 - service.rating)}
                </div>

                <div className="button-container">
                  <button className="view-details-btn" onClick={() => handleViewDetails(service)}>View Details</button>
                  <button className="add-to-cart-btn" onClick={() => handleAddToCart(service)}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showCartPopup && (
        <div className="cart-popup">
          <p>Item added to cart!</p>
          <Link to="/cart">
            <button>View Cart</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Service;
