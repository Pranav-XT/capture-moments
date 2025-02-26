import React from "react";
import "../styles/styles.css"; // Using the same CSS style

const testimonials = [
  { name: "Pranav P.", rating: 5, feedback: "Amazing photography! Highly recommended." },
  { name: "Aditya P.", rating: 4, feedback: "Great experience! Loved the pictures." },
  { name: "Rahul K.", rating: 5, feedback: "Absolutely stunning shots, very professional." },
  { name: "Priya M.", rating: 4, feedback: "The photoshoot was fantastic, but delivery took a bit longer." },
  { name: "Vikram R.", rating: 5, feedback: "Perfect shots! Great editing and creativity." },
  { name: "Sujal B.", rating: 3, feedback: "Worst Service Ever not recommended :( " },
  { name: "Aarav S.", rating: 3, feedback: "Somewhat Satisfied with Service but Great experience!" },
  { name: "Sneha P.", rating: 4, feedback: "Perfect shots! but delivery took a bit longer.." }
];

// Calculate average rating
const averageRating = (
  testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length
).toFixed(1);

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h1>What Our Customers Say</h1>
      <p className="average-rating">⭐ {averageRating}/5 Average Rating</p>
      <div className="testimonials-list">
        {testimonials.map((review, index) => (
          <div key={index} className="testimonial">
            <p className="customer-name">{review.name}</p>
            <p className="star-rating">{"⭐".repeat(review.rating)}</p>
            <p className="customer-feedback">{review.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
