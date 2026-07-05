/*
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaMicrosoft,
  FaDraftingCompass,
  FaBuilding,
  FaProjectDiagram,
  FaSpeakap,
  FaClock,
  FaLightbulb,
  FaComment,
} from "react-icons/fa";
import { FaBoxesStacked, FaHandshakeAngle, FaMagnifyingGlass, FaPeopleGroup } from "react-icons/fa6";

function Skills() {

  const skills = [
    {
  icon: <FaDraftingCompass />,
  name: "AutoCAD(2D & 3D)",
  percent: "90%"
},
    {
  icon: <FaBuilding />,
  name: "Revit",
  percent: "75%"
},
    {
      icon: <FaMicrosoft />,
      name: "MS Excel",
      percent: "88%"
    },
    {
      icon: "📐",
      name: "Surveying",
      percent: "85%"
    },

    {
      icon: <FaBoxesStacked />,
      name: "Material Planning & Procurement",
      percent: "90%"
    },

    {
      icon: <FaComment />,
      name: "Communication Skills",
      percent: "95%"
    },

    {
      icon: <FaLightbulb />,
      name: "Problem Solving & Critical Thinking",
      percent: "97%"
    },

    {
      icon: <FaClock />,
      name: "Time Management & Multitasking",
      percent: "99%"
    },

    {
      icon: <FaPeopleGroup />,
      name: "Cross Functional Team Coordination",
      percent: "95%"
    },

    {
      icon: <FaHandshakeAngle />,
      name: "Nagotiation & Stakeholder Management",
      percent: "90%"
    },

    {
      icon: <FaMagnifyingGlass />,
      name: "Attention to Details & Quality Focussed",
      percent: "90%"
    },
  ];

  return (
    <section className="skills" id="skills">

      <div className="section-title">

        <span className="section-tag">
          MY SKILLS
        </span>

        <h2>
          Technical Skills
        </h2>

        <p>
          A combination of civil engineering knowledge and modern web
          technologies for creating smart engineering solutions.
        </p>

      </div>

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>

            <div className="skill-top">

              <span className="skill-icon">
                {skill.icon}
              </span>

              <span className="skill-name">
                {skill.name}
              </span>

              <span className="skill-percent">
                {skill.percent}
              </span>

            </div>

            <div className="skill-progress">
             <div className="skill-progress-fill"
             style={{ width: skill.percent }}
            ></div>

             </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;

*/