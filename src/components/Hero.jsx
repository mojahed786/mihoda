import { FaArrowRight, FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <span className="hero-tag">BUILDING THE FUTURE</span>

        <h1>
          Hi, I'm <span>IMTEZAJUL HODA</span>
        </h1>

        <h2>Civil Engineer</h2>

        <p>
          I have expertise in managing retail and interior fit-out projects,
          with extensive experience in project execution, planning,
          coordination, and end-to-end construction management. My focus is on
          delivering high-quality projects on time while maintaining safety,
          quality, and cost efficiency.
        </p>

        <div className="hero-buttons"></div>
      </div>

      <div className="hero-image">
        <div className="hero-circle">
          <img src="/hero.jpeg" alt="Civil Engineer" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
