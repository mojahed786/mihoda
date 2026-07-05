import { FaAward, FaBuilding, FaDraftingCompass } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-left">


      </div>

      <div className="about-right">
        <div className="section-title">
        <span className="section-tag">
          About me
        </span>
        </div>

        <h2>
          Passionate Civil Engineer Dedicated to Building the Future
        </h2>

        <p>
         I have three years of experience in interior fit-out, QSR, and civil infrastructure construction. During this time,I have
completed over ten projects, including high-profile assignments for clients such as Domino’s, Croma, Popeyes, Birla
Opus, Intune and residential buildings. My expertise allows me to handle and execute projects independently while
also being capable of collaborating effectively within a team. I am seeking an opportunity to work in the interior fit-
out industry, where I can leverage my knowledge and experience to contribute to the company’s success and pursue
my professional growth.
        </p>

        <div className="about-cards">

          <div className="about-card">

            <FaBuilding />

            <h3>30+</h3>

            <p>Projects</p>

          </div>

          <div className="about-card">

            <FaAward />

            <h3>3+</h3>

            <p>Years Learning</p>

          </div>

          <div className="about-card">

            <FaDraftingCompass />

            <h3>100%</h3>

            <p>Quality Work</p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;