import React from 'react'
import "../styles/components/skills.css"
export default function Skills() {
  return (
    <section className="skills py-5" id="skills">
      <div className="container">
        <div className="row g-4">
          <h1 className="titulo-projetos fw-bold text-center">Skills & Technologies</h1>
          <div className="col-lg-6">
            <div className="skills-card">
              <div className="skills-header"><i className="bi bi-window"/><h5>Front-end</h5></div>
              <div className="row g-3">
                <div className="col-4"><div className="skill-item"><img src="./src/assets/iconreact.png"/><span>React</span></div></div>
                <div className="col-4"><div className="skill-item"><img src="./src/assets/iconhtml.png"/><span>HTML</span></div></div>
                <div className="col-4"><div className="skill-item"><img src="./src/assets/iconcss.png"/><span>CSS</span></div></div>
                <div className="col-4"><div className="skill-item"><img src="./src/assets/iconjs.png"/><span>JavaScript</span></div></div>
                <div className="col-4"><div className="skill-item"><img src="./src/assets/iconbootstrap.png"/><span>Bootstrap</span></div></div>
                <div className="col-4"><div className="skill-item"><img src="./src/assets/iconTailwind.png"/><span>Tailwind</span></div></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="skills-card">
              <div className="skills-header"><i className="bi bi-tools"/><h5>Ferramentas & Skills</h5></div>
              <div className="row g-3">
                <div className="col-4"><div className="skill-item"><img src="./src/assets/icongit.png"/><span>Git</span></div></div>
                <div className="col-4"><div className="skill-item"><img src="./src/assets/icongithub.webp"/><span>GitHub</span></div></div>
                <div className="col-4"><div className="skill-item"><img src="./src/assets/iconN8N.jpg"/><span>N8N</span></div></div>
                <div className="col-4"><div className="skill-item"><img src="./src/assets/usa.png"/><span>English</span></div></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="skills-card">
              <div className="skills-header"><i className="bi bi-server"/><h5>Back-end</h5></div>
              <div className="row g-3">
                <div className="col-4"><div className="skill-item"><img src="./src/assets/iconpython.png"/><span>Python</span></div></div>
                <div className="col-4"><div className="skill-item"><img src="./src/assets/iconnodejs.png"/><span>Node.js</span></div></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="skills-card">
              <div className="skills-header"><i className="bi bi-database"/><h5>Banco de Dados</h5></div>
              <div className="row g-3">
                <div className="col-4"><div className="skill-item"><img src="./src/assets/iconmongodb.png"/><span>MongoDB</span></div></div>
                <div className="col-4"><div className="skill-item"><img src="./src/assets/iconmySQL.png"/><span>MySQL</span></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
