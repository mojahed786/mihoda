import {
  FaBuilding,
  FaDraftingCompass,
  FaRulerCombined,
  FaHardHat,
  FaRoad,
  FaClipboardCheck,
  FaTeamspeak,
} from "react-icons/fa";
import { FaIndustry, FaVirusCovidSlash } from "react-icons/fa6";

function Services() {

  const services = [
    {
      icon: <FaBuilding />,
      title: "Structural Design",
      desc: "Design of residential, commercial and industrial structures with safety and durability."
    },

    {
      icon: <FaDraftingCompass />,
      title: "AutoCAD Drafting",
      desc: "Professional 2D drawings, floor plans and construction layouts."
    },

    {
      icon: <FaRulerCombined />,
      title: "Quantity Estimation",
      desc: "Accurate BOQ preparation, material estimation and cost analysis."
    },

    {
      icon: <FaHardHat />,
      title: "Site Supervision",
      desc: "Monitoring construction work to ensure quality and project safety."
    },

    {
      icon: <FaRoad />,
      title: "Infrastructure Planning",
      desc: "Planning roads, drainage systems and public infrastructure projects."
    },

    {
      icon: <FaClipboardCheck />,
      title: "Project Management",
      desc: "Scheduling, planning and managing construction projects efficiently."
    },

     {
       icon: <FaBuilding />,
       title: "Retail Fit-out Design",
       desc: "Scheduling, planning and managing construction projects efficiently."
     },

     {
       icon: <FaIndustry />,
       title: "Interior Fit-Out Execution",
       desc: "Capable of managing complete interior finishing works, including ceilings, flooring, partitions, lighting, furniture, and final handover with quality assurance."
     },

     {
       icon: <FaTeamspeak />,
       title: "Team Management & Leadership",
       desc: "Experienced in leading multidisciplinary teams, assigning responsibilities, and motivating members to achieve project goals efficiently."
     },

  ];

  return (

    <section className="services" id="services">

      <div className="section-title">

        <span className="section-tag">
          MY SERVICES
        </span>

        <h2>
          Engineering Services I Provide
        </h2>

        <p>
          Delivering reliable civil engineering solutions with quality,
          safety and modern construction practices.
        </p>

      </div>

      <div className="services-grid">

        {services.map((service, index) => (

          <div
            className="service-card"
            key={index}
          >

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>
              {service.title}
            </h3>

            <p>
              {service.desc}
            </p>

            <button className="service-btn">
              Learn More
            </button>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Services;