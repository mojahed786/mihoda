import {
  FaBriefcase,
  FaGraduationCap,
  FaHardHat,
} from "react-icons/fa";

function Experience() {
  const timeline = [
    {
      icon: <FaGraduationCap />,
      year: "2019 - 2023",
      title: "B.Tech (Bachelor of Technology)",
      company: "Civil Engineering",
      description:
        "Built a strong foundation in structural engineering, construction materials, surveying, transportation engineering, geotechnical engineering, and environmental engineering. Gained practical knowledge in planning, designing, and executing civil engineering projects while emphasizing safety, quality, and sustainable construction practices.",
    },

    {
      icon: <FaGraduationCap />,
      year: "2023 - 2025",
      title: "M.Tech (Master of Technology)",
      company: "Construction Management",
      description:
        "Specialized in advanced construction planning, project management, cost estimation, scheduling, quality control, and risk management. Developed expertise in managing complex construction projects with a focus on structural safety, resource optimization, and sustainable engineering practices.",
    },

    {
      icon: <FaBriefcase />,
      year: "2023 - Present",
      title: "Project Manager",
      company: "",
      description:
        "Working as a Project Manager, responsible for planning, coordinating, and executing commercial and residential construction projects from initiation to successful completion. Managing project schedules, budgets, quality standards, resource allocation, contractor coordination, client communication, and site operations while ensuring timely delivery and compliance with safety regulations.Successfully managed projects for Birla Opus across the Bihar and Jharkhand region, along with commercial fit-out and construction projects including Popeyes Aroma (Chandigarh), Croma, and Intune Store (Nagpur, Maharashtra). Experienced in overseeing residential buildings, commercial developments, and retail store projects by coordinating multidisciplinary teams, monitoring project progress, resolving on-site challenges, maintaining quality control, and ensuring projects are completed within the approved budget and timeline.",
    },
  ];

  return (
    <section className="experience" id="experience">

      <div className="section-title">

        <span className="section-tag">
          EXPERIENCE
        </span>

        <h2>
          Education & Experience
        </h2>

        <p>
          My educational journey and professional experience in civil
          engineering.
        </p>

      </div>

      <div className="timeline">

        {timeline.map((item, index) => (

          <div
            className="timeline-item"
            key={index}
          >

            <div className="timeline-icon">
              {item.icon}
            </div>

            <div className="timeline-content">

              <span className="timeline-year">
                {item.year}
              </span>

              <h3>
                {item.title}
              </h3>

              <h4>
                {item.company}
              </h4>

              <p>
                {item.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Experience;