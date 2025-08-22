import React, { useRef, useState } from 'react';import './App.css'
import Header from './obj/head/head.jsx'
import About from './obj/about/about.jsx'



function App() {
  return (
    <>
      <Header />

      <main className="page-content">
        <About />
        
      </main>
    </>
  )
}

export default App
