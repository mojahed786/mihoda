import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Projects() {

  const projects = [

    {
      title: "Residential Building Design",
      image: "/projects/project1.png",
      category: "Structural Design",
      description:
        "Designed a modern residential building with a strong focus on functionality, structural safety, and aesthetic appeal. The project incorporates efficient space planning, optimized natural lighting and ventilation, and compliance with relevant building codes to ensure a comfortable and sustainable living environment.",
    },

    {
      title: "Commercial Complex",
      image: "/projects/project2.png",
      category: "Construction",
      description:
        "Planned and executed a modern commercial complex designed to maximize retail and business potential through efficient space utilization and contemporary architecture. The project emphasizes structural efficiency, premium finishes, seamless circulation, and effective construction management to ensure timely delivery and long-term value.",
    },

    {
      title: "Popeyes-Famous Louisiana Chicken",
      image: "/projects/project3.png",
      category: "Retail Fit-Out",
      description:
        "Directed the full execution of the Popeyes restaurant fit-out, managing civil, interior, MEP, kitchen coordination, and finishing works. Successfully completed the project with high-quality standards and delivered it ready for opening.",
    },

    {
      title: "intune Fashion By Shoppers Stop",
      image: "/projects/project4.png",
      category: "Interior",
      description:
        "Managed the complete retail fit-out execution for the Intune Fashion store, ensuring seamless coordination of civil, interior, MEP, and finishing activities. Delivered the project with strict adherence to quality standards, timelines, and client requirements until the final inauguration.",
    },

    {
      title: "Croma",
      image: "/projects/project5.png",
      category: "Interior",
      description:
        "Led the end-to-end execution of the Croma retail outlet, overseeing site operations, contractor coordination, quality control, and project scheduling. Successfully delivered the project from execution stage to store opening within the planned timeline.",
    },

    {
      title: "Project Management",
      image: "/projects/project6.png",
      category: "Project Management",
      description:
        "Responsible for complete project execution from site mobilization to final handover, including planning, resource management, contractor coordination, quality assurance, safety compliance, cost monitoring, and timely project completion. Successfully delivered retail fit-out projects ready for client possession and store inauguration.",
    },

    {
      title: "Domino's",
      image: "/projects/project7.png",
      category: "QSR",
      description:
        "Executed the complete Domino’s outlet fit-out, supervising all construction and finishing activities while coordinating multiple vendors and site teams. Ensured successful project completion and operational handover before the store launch.",
    },

    {
      title: "Birla Opus",
      image: "/projects/project8.png",
      category: "Project Manager",
      description:
        "Successfully managed the complete retail fit-out execution for the Birla Opus store, coordinating all civil, interior, MEP, and finishing works. Ensured timely project delivery, quality compliance, and smooth handover up to the final store inauguration.",
    },

  ];

  return (

    <section className="projects" id="projects">

      <div className="section-title">

        <span className="section-tag">
          MY PROJECTS
        </span>

        <h2>
          Recent Engineering Projects
        </h2>

        <p>
          Some of the engineering projects demonstrating practical knowledge,
          planning and construction management.
        </p>

      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div
            className="project-card"
            key={index}
          >

            <img
              src={project.image}
              alt={project.title}
            />

            <div className="project-content">

              <span>
                {project.category}
              </span>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>


            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Projects;