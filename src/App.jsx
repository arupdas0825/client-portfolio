import React from 'react'
import Navbar from './components/Navbar'
import MobileNavbar from './components/MobileNavbar'
import WelcomeScreen from './components/WelcomeScreen'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Internship from './components/Internship'
import Certificates from './components/Certificates'
import CV from './components/CV'
import ContentCreator from './components/ContentCreator'
import Contact from './components/Contact'
import { motion, AnimatePresence } from 'framer-motion'
import './index.css'

const SectionWrapper = ({ children, id }) => (
  <motion.div
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
    className="relative"
  >
    {children}
  </motion.div>
)

export default function App() {
  return (
    <div className="bg-[#1a0a2e] text-white min-h-screen selection:bg-[#f9a8d4]/30">
      <Navbar />
      <MobileNavbar />
      <WelcomeScreen />
      
      <main className="pb-[calc(80px+var(--safe-area-bottom))]">
        <SectionWrapper id="home">
          <Hero />
        </SectionWrapper>
        
        <SectionWrapper id="about">
          <About />
          <Skills />
        </SectionWrapper>
        
        <SectionWrapper id="experience">
          <Experience />
        </SectionWrapper>
        
        <SectionWrapper id="internship">
          <Internship />
        </SectionWrapper>
        
        <SectionWrapper id="certificates">
          <Certificates />
          <CV />
        </SectionWrapper>
        
        <SectionWrapper id="content-creator">
          <ContentCreator />
        </SectionWrapper>
        
        <SectionWrapper id="contact">
          <Contact />
        </SectionWrapper>
      </main>
      
      {/* Background Noise/Stars Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>
    </div>
  )
}