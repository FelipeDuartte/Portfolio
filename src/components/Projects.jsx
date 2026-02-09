import React from 'react'
import "../styles/components/Projects.css"
export default function Projects() {
  return (
    <section className="container py-5 hidden" id="projetos">
      <div className="DivTituloProjetos"><h1 className="titulo-projetos fw-bold text-center"><i className="bi bi-rocket-takeoff"/> Projects</h1></div>

      <h2 className="subtitulo-projetos fw-bold text-center mt-2 mb-4">Front-end Projects</h2>
      <div className="row g-4 justify-content-center">
        <div className="col-lg-6 col-md-10 hidden-competencias">
          <div className="card-projeto">
            <div className="card-body p-0 d-flex flex-column">
              <h2 className="card-titulo p-3 text-center">JornadaDev</h2>
              <img src="./src/assets/page-trilha.png" className="img-projeto mb-4" alt="JornadaDev project" />
              <a className="text-center" href="https://felipeduartte.github.io/trilha-dev/" target="_blank"><button className="project-button text-center btn btn-dark m-auto">Show Project <i className="px-3 bi bi-box-arrow-up-right"/></button></a>
              <div className="legenda-projeto flex-grow-1"> <p>Page designed to help developers who are starting out.</p>
                <ul className="mt-2 ps-4" style={{listStyleType: 'none'}}>
                  <li><i className="bi bi-check-circle-fill me-2"/> Step-by-step learning platform</li>
                  <li><i className="bi bi-check-circle-fill me-2"/> Website guide for programming beginners</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-10 hidden-competencias">
          <div className="card-projeto">
            <div className="card-body p-0 d-flex flex-column">
              <h2 className="card-titulo p-3 text-center">Portfólio</h2>
              <img src="./src/assets/pagePortfolio.png" className="img-projeto mb-4" alt="Portfolio project" />
              <a className="text-center" href="#"><button className="project-button text-center btn btn-dark m-auto">Show Project <i className="px-3 bi bi-box-arrow-up-right"/></button></a>
            </div>
          </div>
        </div>
      </div>

      <h2 className="subtitulo-projetos fw-bold text-center mt-5 mb-4">Full-Stack Projects</h2>
      <div className="row g-4 justify-content-center">
        <div className="col-lg-6 col-md-10 hidden-competencias">
          <div className="card-projeto">
            <div className="card-body p-0 d-flex flex-column">
              <h2 className="card-titulo p-3 text-center">beverage distributor</h2>
              <img src="/imagens/projectBebidas.png" className="img-projeto mb-3" alt="beverage project" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
