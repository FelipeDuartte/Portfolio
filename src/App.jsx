import { useEffect } from 'react'
import "./styles/style.css"
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GalaxyCanvas from './components/GalaxyCanvas'

import useScrollObserver from './hooks/useScrollObserver'
import useScrollToTop from './hooks/useScrollToTop'

export default function App() {
  useScrollObserver()
  useScrollToTop()

  return (
    <>
      <GalaxyCanvas />
        <Navbar />
        <Header />   
          <About />
          <Projects />
          <Skills />
          <Contact />     
        <Footer />
        <a href="#" id="scrollToTop" className="scroll-to-top text-white text-center">&#8679;</a>
    </>
  )
}
