import { FaArrowRight, FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">

        <span className="hero-tag">
          BUILDING THE FUTURE
        </span>

        <h1>
          Hi, I'm <span>IMTEZAJUL HODA</span>
        </h1>

        <h2>Civil Engineer</h2>

        <p>
          I have expertise in managing retail and interior fit-out projects, with extensive experience in project execution, planning, coordination, and end-to-end construction management. My focus is on delivering high-quality projects on time while maintaining safety, quality, and cost efficiency.
        </p>

        <div className="hero-buttons">

          <a href="#contact" className="primary-btn">
            Hire Me
            <FaArrowRight />
          </a>


        </div>

        <div className="hero-stats">

          <div>
            <h3>30+</h3>
            <span>Projects</span>
          </div>

          <div>
            <h3>3+</h3>
            <span>Years Learning</span>
          </div>

          <div>
            <h3>10+</h3>
            <span>Clients</span>
          </div>

        </div>

      </div>

      <div className="hero-image">

    <div className="hero-circle">

        <img
            src="/hero.jpeg"
            alt="Civil Engineer"
        />

    </div>

</div>
    </section>
  );
}

export default Hero;