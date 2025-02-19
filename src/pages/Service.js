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
  { id: 1, name: "Wedding Photoshoots", price: 30000, image: a },
  { id: 2, name: "Baby Photoshoots", price: 15000, image: b },
  { id: 3, name: "Birthday Photoshoots", price: 10000, image: c },
  { id: 4, name: "Event Photoshoots", price: 10000, image: d },
  { id: 5, name: "Pre-Wedding Photoshoots", price: 45000, image: e },
  { id: 6, name: "Vacation Photoshoots", price: 15000, image: f }
];

const Service = () => {
  const { addToCart } = useCart();
  const [showCartPopup, setShowCartPopup] = useState(false);

  const handleAddToCart = (service) => {
    addToCart(service);
    setShowCartPopup(true);
    setTimeout(() => setShowCartPopup(false), 3000);
  };

  return (
    
    <div className="service-page">
      <div className="service-list">
        <div className="services">
          {serviceList.map((service) => (
            <div key={service.id} className="service-card">
              <img src={service.image} alt={service.name} />
              <h3>{service.name}</h3>
              <p>Rs.{service.price}</p>
              <button onClick={() => handleAddToCart(service)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

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
