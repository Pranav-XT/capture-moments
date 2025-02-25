import React, { useState } from "react";

const EnquiryPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    service: "",
    appointmentDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("We will contact you!");
    setFormData({ name: "", contact: "", service: "", appointmentDate: "" });
  };

  return (
    <div className="enquiry-container">
      <div className="enquiry-page">
        <h2>Book an Appointment</h2>
        <p>Fill in your details, and we will get back to you soon!</p>

        <form className="enquiry-form" onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <label>Contact No.:</label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter your contact number"
            required
          />

          <label>Are you interested in?</label>
          <select name="service" value={formData.service} onChange={handleChange} required>
            <option value="" disabled>Select a service</option>
            <option value="Wedding Photography">Wedding Photography</option>
            <option value="Prewedding Photography">Prewedding Photography</option>
            <option value="Birthday Photography">Birthday Photography</option>
            <option value="Event Photography">Event Photography</option>
            <option value="Baby Photography">Baby Photography</option>
            <option value="Vacation Photography">Vacation Photography</option>
            <option value="Custom Photography">Custom Photography</option>
          </select>

          <label>Fix an Appointment:</label>
          <input
            type="date"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryPage;
