import React from 'react'
import './App.css'
import Header from './obj/head/head.jsx'
import About from './obj/about/about.jsx'
import Formations from './obj/formations/formations.jsx'
// import Projects from './obj/projects/projects.jsx'
// import Experience from './obj/experience/experience.jsx'
// import Contact from './obj/contact/contact.jsx'
// import Skills from './obj/skills/skills.jsx'

function App() {
  return (
    <>
      <Header />

      <main className="page-content">
        <About />
        <Formations />
        {/* <Skills />
        <Projects />
        <Experience />
        <Contact /> */}
        <h1>Curriculum Vitae</h1>
      </main>
    </>
  )
}

export default App
