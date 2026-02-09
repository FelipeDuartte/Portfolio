import React, { useState } from 'react'
import "../styles/components/contact.css"
export default function Contact() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const allFilled = form.nome.trim() && form.email.trim() && form.mensagem.trim()
    if (allFilled) {
      alert('Obrigado, logo mais entrarei em contato!')
      setForm({ nome: '', email: '', mensagem: '' })
    } else {
      alert('Por favor, preencha todos os campos.')
    }
  }

  return (
    <section id="contato" className="contato-section text-center hidden">
      <h1 className="h1-contato text-uppercase">Contact Me</h1>
      <div className="contato-container">
        <form id="form-contato" className="form-contato d-flex flex-column" onSubmit={handleSubmit}>
          <input type="text" name="nome" id="nome" placeholder="Your name" required value={form.nome} onChange={handleChange} />
          <input type="email" name="email" id="email" placeholder="Your email" required value={form.email} onChange={handleChange} />
          <textarea name="mensagem" id="mensagem" rows="5" placeholder="Your message..." required value={form.mensagem} onChange={handleChange} />
          <button type="submit">Send</button>
        </form>
        <div className="info-contato">
          <p><strong>My E-mail:</strong> Duarte.dev@outlook.com</p>
          <p><strong>My Phone:</strong> (31) 99945-0717</p>
        </div>
      </div>
      <p id="feedback"></p>
    </section>
  )
}
