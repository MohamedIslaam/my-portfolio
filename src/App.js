import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Project from './components/Project'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <div className='container'>
        <Header />
        <Hero />
        <About />
      </div>
      <Skills />
      <Education />
      <Project />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App
