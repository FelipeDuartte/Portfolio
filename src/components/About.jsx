import React from 'react'
import "../styles/components/AboutMe.css"
import myFoto from "../assets/my-foto.png"
export default function About() {
  return (
    <section className="about-me" id="sobre-mim">
      <div className="about-me-container">
        <div className="section-header text-center">
          <p className="section-subtitle text-white fw-bold m-0 hidden">find out more</p>
          <h2 className="section-title fw-bold hidden">About Me</h2>
        </div>

        <div className="about-content d-flex justify-content-center align-items-start hidden">
          <div className="about-image text-center">
            <img src={myFoto} alt="Felipe Duarte" className="profile-img" />
          </div>

          <div className="about-text text-left">
            <h3>Hello, my name is <span className="highlight fw-bold">Felipe Duarte!</span></h3>
            <p className="bio">Hello, I’m Felipe, a full-stack developer with a strong front-end foundation, expanding my expertise in back-end development. I build modern, scalable applications that solve real business problems, focusing on performance, security, and maintainability. I also create automation solutions to optimize processes and improve operational efficiency.</p>

            <div className="services-section">
              <h3 className="services-title">Services I Offer</h3>
              <div className="services-grid">
                <div className="service-card"><div className="service-icon"><i className="bi bi-laptop"/></div><h4>Websites & Applications</h4><p>Landing pages, corporate websites and custom web applications</p></div>
                <div className="service-card"><div className="service-icon"><i className="bi bi-phone"/></div><h4>Automation</h4><p>design and implement automated solutions that optimize workflows, save time, and improve business productivity.</p></div>
                <div className="service-card"><div className="service-icon"><i className="bi bi-gear"/></div><h4>Maintenance</h4><p>Complete maintenance services including system, plugin, and security updates, layout bug fixes, performance optimization with backups, and continuous monitoring and support</p></div>
                <div className="service-card"><div className="service-icon"><i className="bi bi-search"/></div><h4>SEO & Performance</h4><p>Optimization for search engines</p></div>
                <div className="service-card"><div className="service-icon"><i className="bi bi-search"/></div><h4>Integration between Systems</h4><p>Connecting different systems to ensure seamless data flow, efficiency, and reliable communication.</p></div>
              </div>
              <div className="text-center"><a href="https://wa.me/5531999450717" className="cta-button"><i className="bi bi-whatsapp"/> Request a Quote</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
