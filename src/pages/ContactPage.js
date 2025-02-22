import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" }); 
  };

  return (
    <div className="contact-container">
      <div className="contact-page">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us!</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />

          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
