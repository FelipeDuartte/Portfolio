import React, { useState } from "react";
import "../styles/components/Projects.css";

function ProjectCard({
  title,
  image,
  link,
  description,
  features,
  technologies,
}) {
  return (
    <div className="col-lg-6 col-md-10 hidden-competencias">
      <div className="card-projeto">
        <div className="card-body p-0 d-flex flex-column">
          <h2 className="card-titulo p-3 text-center">{title}</h2>

          <img src={image} className="img-projeto mb-4" alt={title} />

          <a
            className="text-center"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            { !link ? <button className="project-button btn btn-dark m-auto text-secondary disabled">
              Project under development <i className="px-3 bi bi-box-arrow-up-right" />
            </button> : <button className="project-button btn btn-dark m-auto">
              Show Project <i className="px-3 bi bi-box-arrow-up-right" />
            </button>}
          </a>

          <div className="legenda-projeto flex-grow-1">
            <p>{description}</p>

            <ul className="mt-2 ps-4" style={{ listStyleType: "none" }}>
              {features.map((item, index) => (
                <li key={index}>
                  <i className="bi bi-check-circle-fill me-2" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="tecnologias">
              {technologies.map((tech, index) => (
                <span key={index} className="tecnologia-badge">
                  <i className={`bi ${tech.icon} me-1`} />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("frontend");

  const frontendProjects = [
    {
      title: "JornadaDev",
      image: "./src/assets/page-trilha.png",
      link: "https://felipeduartte.github.io/trilha-dev/",
      description: "Page designed to help developers who are starting out.",
      features: [
        "Step-by-step learning platform",
        "Website guide for programming beginners",
        "Intuitive navigation",
        "Programming fundamentals",
      ],
      technologies: [
        { icon: "bi-filetype-html", name: "HTML5" },
        { icon: "bi-filetype-css", name: "CSS3" },
        { icon: "bi-filetype-js", name: "JavaScript" },
        { icon: "bi-palette-fill", name: "Bootstrap 5" },
      ],
    },
    {
      title: "Portfólio",
      image: "./src/assets/pagePortfolio.png",
      link: "#",
      description: "My personal developer portfolio.",
      features: [
        "Galaxy animation",
        "Single Page Application",
        "UI/UX focused",
        "Responsive layout",
      ],
      technologies: [
        { icon: "bi-filetype-html", name: "HTML5" },
        { icon: "bi-filetype-css", name: "CSS3" },
        { icon: "bi-filetype-js", name: "JavaScript" },
        { icon: "bi-palette-fill", name: "UI/UX" },
      ],
    },
  ];

  const fullstackProjects = [
    {
      title: "Beverage Distributor",
      image: "./src/assets/projectBebidas.png",
      link: undefined,
      description: "Website created for a beverage distributor.",
      features: [
        "Product catalog",
        "Shopping cart",
        "User authentication",
        "Promotions system",
      ],
      technologies: [
        { icon: "bi bi-gear", name: "API SupaBase" },
        { icon: "bi bi-code-square", name: "Node.js" },
        { icon: "bi-filetype-jsx", name: "React" },
        { icon: "bi bi-credit-card-2-front", name: "API Mercado Pago" },
        { icon: "bi-palette-fill", name: "Bootstrap" },
      ],
    },
  ];

 const backendProjects = [
    {
      title: "Automation python",
      image: "./src/assets/Pageautomacao.png",
      link: "https://github.com/FelipeDuartte/GeradorComprovantes",
      description: "Autamation Excel + Word.",
      features: [
        "Automatic reading of Excel spreadsheets",
        "Intelligent identification of columns",
        "Individual generation of receipts per scholarship recipient",
        "System packaged as an executable file ( .exe) for novice users",
      ],
      technologies: [
        { icon: "bi-filetype-py", name: "Python" },
        { icon: "bi bi-file-earmark-code", name: "Python-docx" },
        { icon: "bi bi-file-earmark-code", name: "Tkinter" },
        { icon: "bi bi-file-earmark-code", name: "Pandas" },
      ],
    },
  ];

const studyProjects = [
    {
      title: "Guesser Game",
      image: "./src/assets/PageAdivinha.png",
      link: "https://felipeduartte.github.io/SECRET_WORD/",
      description: "React trainning API.",
      features: [
        "React API",
        "React Router",
        "dynamic word change",
        "Score system",
      ],
      technologies: [
        { icon: "bi-filetype-json", name: "JSON" },
        { icon: "bi bi-filetype-jsx", name: "React" },
        { icon: "bi bi-filetype-jsx", name: "React Context API" },
      ],
    },
  ];

  return (
    <section className="container py-5 hidden" id="projetos">
      <div className="DivTituloProjetos">
        <h1 className="titulo-projetos fw-bold text-center">
          <i className="bi bi-rocket-takeoff" /> Projects
        </h1>
      </div>

      {/* NAV */}
      <nav className="nav-projetos">
        <button
          className={activeTab === "frontend" ? "active" : ""}
          onClick={() => setActiveTab("frontend")}
        >
          Front-end
        </button>

        <button
          className={activeTab === "fullstack" ? "active" : ""}
          onClick={() => setActiveTab("fullstack")}
        >
          Full-stack
        </button>

        <button
          className={activeTab === "backend" ? "active" : ""}
          onClick={() => setActiveTab("backend")}
        >
          Back-end
        </button>

        <button
          className={activeTab === "study" ? "active" : ""}
          onClick={() => setActiveTab("study")}
        >
          Study
        </button>
      </nav>

      {/* FRONT-END */}
      {activeTab === "frontend" && (
        <div className="row g-4 justify-content-center mt-4">
          {frontendProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      )}

      {/* FULL-STACK */}
      {activeTab === "fullstack" && (
        <div className="row g-4 justify-content-center mt-4">
          {fullstackProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      )}

       {/* BACK-END */}
      {activeTab === "backend" && (
        <div className="row g-4 justify-content-center mt-4">
          {backendProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      )}

      {/* STUDY PROJECTS */}
      {activeTab === "study" && (
        <div className="row g-4 justify-content-center mt-4">
          {studyProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      )}
    </section>
  );
}
