import React from 'react'
import "../styles/components/skills.css"
import iconreact from "../assets/iconreact.png"
import iconhtml from "../assets/iconhtml.png"
import iconcss from "../assets/iconcss.png"
import iconjs from "../assets/iconjs.png"
import iconbootstrap from "../assets/iconbootstrap.png"
import iconTailwind from "../assets/iconTailwind.png"
import icongit from "../assets/icongit.png"
import icongithub from "../assets/icongithub.webp"
import iconN8N from "../assets/iconN8N.jpg"
import iconpython from "../assets/iconpython.png"
import iconnodejs from "../assets/iconnodejs.png"
import iconmongodb from "../assets/iconmongodb.png"
import iconmySQL from "../assets/iconmySQL.png"
import usa from "../assets/usa.png"
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
                <div className="col-4"><div className="skill-item"><img src= {iconreact}/><span>React</span></div></div>
                <div className="col-4"><div className="skill-item"><img src={iconhtml}/><span>HTML</span></div></div>
                <div className="col-4"><div className="skill-item"><img src={iconcss}/><span>CSS</span></div></div>
                <div className="col-4"><div className="skill-item"><img src={iconjs}/><span>JavaScript</span></div></div>
                <div className="col-4"><div className="skill-item"><img src={iconbootstrap}/><span>Bootstrap</span></div></div>
                <div className="col-4"><div className="skill-item"><img src={iconTailwind}/><span>Tailwind</span></div></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="skills-card">
              <div className="skills-header"><i className="bi bi-tools"/><h5>Ferramentas & Skills</h5></div>
              <div className="row g-3">
                <div className="col-4"><div className="skill-item"><img src={icongit}/><span>Git</span></div></div>
                <div className="col-4"><div className="skill-item"><img src={icongithub}/><span>GitHub</span></div></div>
                <div className="col-4"><div className="skill-item"><img src={iconN8N}/><span>N8N</span></div></div>
                <div className="col-4"><div className="skill-item"><img src={usa}/><span>English</span></div></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="skills-card">
              <div className="skills-header"><i className="bi bi-server"/><h5>Back-end</h5></div>
              <div className="row g-3">
                <div className="col-4"><div className="skill-item"><img src={iconpython}/><span>Python</span></div></div>
                <div className="col-4"><div className="skill-item"><img src={iconnodejs}/><span>Node.js</span></div></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="skills-card">
              <div className="skills-header"><i className="bi bi-database"/><h5>Banco de Dados</h5></div>
              <div className="row g-3">
                <div className="col-4"><div className="skill-item"><img src={iconmongodb}/><span>MongoDB</span></div></div>
                <div className="col-4"><div className="skill-item"><img src={iconmySQL}/><span>MySQL</span></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
