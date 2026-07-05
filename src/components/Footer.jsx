import {
  FaArrowUp,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <button
        className="scroll-top"
        onClick={scrollTop}
      >
        <FaArrowUp />
      </button>

      <div className="footer-container">

        <div className="footer-col">

          <h2>
            MI <span>HODA</span>
          </h2>

          <p>
            Professional Civil Engineer specializing in
            structural design, estimation, construction management, Interior and Retail fitout.
          </p>

          
        </div>

        <div className="footer-col">

          <h3>Quick Links</h3>

          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-col">

          <h3>Skills</h3>

          <a href="#services">Structural Design</a>
          <a href="#services">AutoCAD Drafting</a>
          <a href="#services">Revit</a>
          <a href="#services">Retail Fit-out Design</a>
          <a href="#services">Interior Fit-Out Execution</a>
          <a href="#services">Estimation</a>

        </div>

        <div className="footer-col">

          <h3>Contact</h3>

          <p>Sabzibagh, Bakarganj, Patna, Bihar, India - 800004</p>

          <p>mihoda360@gmail.com</p>

          <p>+91 9065336069</p>

        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 MI HODA. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;