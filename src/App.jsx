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
import Contact from './components/Contact'
import FloatingParticles from './components/FloatingParticles'
import AcademicJourney from './components/AcademicJourney'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import './index.css'

const SectionWrapper = ({ children, id }) => (
  <motion.div
    id={id}
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="relative"
  >
    {children}
  </motion.div>
)

export default function App() {
  const [showPortfolio, setShowPortfolio] = useState(() => {
    return !!sessionStorage.getItem('welcomeShown');
  });

  return (
    <div className={`text-[#fdfbf7] min-h-screen selection:bg-[#14b8a6]/30 ${!showPortfolio ? 'overflow-hidden h-screen' : ''}`}
         style={{
           background: `
             radial-gradient(circle at top left, rgba(125,211,252,0.12), transparent 35%),
             radial-gradient(circle at top right, rgba(167,139,250,0.10), transparent 40%),
             radial-gradient(circle at bottom center, rgba(20,184,166,0.08), transparent 45%),
             linear-gradient(180deg, #0A0F1F, #111827)
           `
         }}>
      <AnimatePresence mode="wait">
        {!showPortfolio && (
          <WelcomeScreen key="welcome" onComplete={() => setShowPortfolio(true)} />
        )}
      </AnimatePresence>
      
      {showPortfolio && (
        <motion.div
          key="portfolio"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative z-10"
        >
          <Navbar />
          <MobileNavbar />
          
          <main className="pb-[calc(80px+var(--safe-area-bottom))]">
            <SectionWrapper id="home">
              <Hero />
            </SectionWrapper>
            
            <SectionWrapper id="about">
              <About />
              <Skills />
            </SectionWrapper>
            
            <SectionWrapper id="academic-journey">
              <AcademicJourney />
            </SectionWrapper>
            
            <SectionWrapper id="experience">
              <Experience />
            </SectionWrapper>
            
            <SectionWrapper id="internship">
              <Internship />
            </SectionWrapper>
            
            <SectionWrapper id="certificates">
              <Certificates />
            </SectionWrapper>
            
            <SectionWrapper id="cv">
              <CV />
            </SectionWrapper>
            
            <SectionWrapper id="contact">
              <Contact />
            </SectionWrapper>
          </main>
        </motion.div>
      )}
      
      {/* Global Background Layer */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <FloatingParticles />
        <div className="absolute w-[800px] h-[800px] bg-[#7DD3FC]/10 blur-[150px] rounded-full -top-40 -left-40 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute w-[800px] h-[800px] bg-[#A78BFA]/10 blur-[150px] rounded-full top-[30%] -right-40 animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute w-[1000px] h-[1000px] bg-[#14B8A6]/10 blur-[180px] rounded-full bottom-[-20%] left-[20%] animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
      </div>

      {/* Background Noise/Stars Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>
    </div>
  )
}