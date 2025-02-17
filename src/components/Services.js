import React from "react";
import "../styles.css"; // Ensure styles are applied

const whatsappNumber = "7757984048"; // Store WhatsApp number in a variable

const services = [
  {
    name: "Wedding Shoots",
    price: "Starting from ₹50,000",
    image: "/images/wedding.jpg", // Use absolute path from 'public'
    whatsappMessage: "I am interested in Wedding Shoots",
  },
  {
    name: "Pre-Wedding Shoots",
    price: "Starting from ₹30,000",
    image: "/images/prewedding.jpg",
    whatsappMessage: "I am interested in Pre-Wedding Shoots",
  },
  {
    name: "Baby Shoots",
    price: "Starting from ₹15,000",
    image: "/images/babyshoot.jpg",
    whatsappMessage: "I am interested in Baby Shoots",
  },
  {
    name: "Birthday Shoots",
    price: "Starting from ₹10,000",
    image: "/images/birthday.jpg",
    whatsappMessage: "I am interested in Birthday Shoots",
  },
  {
    name: "Event Photography",
    price: "Starting from ₹20,000",
    image: "/images/event.jpg",
    whatsappMessage: "I am interested in Event Photography",
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <a
            key={index}
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(service.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="service-item"
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="service-content">
              <h3>{service.name}</h3>
              <p>{service.price}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Services;
