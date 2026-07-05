import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phone = "919065336069"; // Apna WhatsApp Number

    const text = `*New Contact Form Message*

👤 Name: ${formData.name}

📧 Email: ${formData.email}

📌 Subject: ${formData.subject}

💬 Message:
${formData.message}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="contact" id="contact">
      <div className="section-title">
        <span className="section-tag">CONTACT</span>
        <h2>Let's Build Something Great</h2>
        <p>
          Feel free to contact me for projects, internships or collaborations.
        </p>
      </div>

      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-left">

          <div className="contact-card">
            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div className="contact-details">
              <h3>Email</h3>
              <p>mihoda360@gmail.com</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaPhoneAlt />
            </div>

            <div className="contact-details">
              <h3>Phone</h3>
              <p>+91 9065336069</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>

            <div className="contact-details">
              <h3>Location</h3>
              <p>Sabzibagh, Bakarganj, Patna, Bihar, India - 800004</p>
            </div>
          </div>

        </div>

        {/* Right Side Form */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;