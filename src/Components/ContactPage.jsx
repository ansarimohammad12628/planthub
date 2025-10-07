import React, { useState } from "react";
import "../Css/ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We received your message.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-page">
      <div className="contact-container">
        {/* Left: Contact Image */}
        <div className="contact-left">
    <img
  src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Money_Plant_in_a_pot.jpg"
  alt="Money Plant"
/>

        </div>

        {/* Right: Contact Form */}
        <div className="contact-right">
          <h2>Contact Us 🌿</h2>
          <p>
            Have questions or suggestions? We'd love to hear from you! Fill the form below or reach us directly.
          </p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label>Name</label>
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label>Email</label>
            </div>

            <div className="input-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
              <label>Message</label>
            </div>

            <button type="submit">Send Message</button>
          </form>

          <div className="contact-info">
            <h3>Our Office</h3>
            <p>123 Green Street, Plant City, Earth 🌎</p>
            <p>Email: support@plantify.com</p>
            <p>Phone: +91 9876543210</p>
          </div>

          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
            <a href="#twitter">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
