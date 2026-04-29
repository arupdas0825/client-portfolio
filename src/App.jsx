import React from 'react'
import Navbar from './components/Navbar'
import WelcomeScreen from './components/WelcomeScreen'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import CV from './components/CV'
import ContentCreator from './components/ContentCreator'
import Contact from './components/Contact'
import './index.css'

export default function App() {
  return (
    <div style={{ backgroundColor: '#1a0a2e', color: '#fff', minHeight: '100vh' }}>
      <Navbar />
      <WelcomeScreen />
      
      <div id="home">
        <Hero />
      </div>
      
      <div id="about">
        <About />
        <Skills />
      </div>
      
      <div id="experience">
        <Experience />
      </div>
      
      <div id="certificates">
        <Certificates />
        <CV />
      </div>
      
      <div id="content-creator">
        <ContentCreator />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
    </div>
  )
}