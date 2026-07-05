import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Contact() {
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

        <div className="contact-left">

          <div className="contact-card">
            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div>
              <h3>Email</h3>
              <p>mihoda360@gmail.com</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <h3>Phone</h3>
              <p>+91 9065336069</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3>Location</h3>
              <p>Bihar, India</p>
            </div>
          </div>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
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