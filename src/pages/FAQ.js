import React, { useState } from "react";
import "../styles/styles.css"; // Ensure correct path

const faqs = [
  { question: "What types of photography services do you offer?", answer: "We specialize in Wedding, Pre-Wedding, Baby, Event, and Vacation photoshoots." },
  { question: "How can I book a photoshoot?", answer: "You can book a session via our website, Instagram, WhatsApp, or by calling us directly." },
  { question: "Do you provide custom photography packages?", answer: "Yes! We offer customizable packages to fit your specific needs and budget." },
  { question: "How long does it take to receive the final edited photos?", answer: "Typically, we deliver edited photos within 7-14 days after the shoot." },
  { question: "Do you travel for photoshoots?", answer: "Yes, we travel across India for photography sessions. Additional travel costs may apply." },
  { question: "Can we request specific styles or themes for our photoshoot?", answer: "Absolutely! We welcome creative ideas and will work closely with you to bring your vision to life." },
  { question: "What is your cancellation and refund policy?", answer: "Cancellations made 72 hours before the scheduled shoot are eligible for a refund, minus a small processing fee." }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`} onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              {faq.question}
              <span className="faq-icon">{openIndex === index ? "▲" : "▼"}</span>
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
