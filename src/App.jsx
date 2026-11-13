import React from 'react'
import Navbar from './components/Navbar'
import MobileNavbar from './components/MobileNavbar'
import MobileTopNavbar from './components/MobileTopNavbar'
import WelcomeScreen from './components/WelcomeScreen'
import Hero from './components/Hero'
import MobileHero from './components/MobileHero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Internship from './components/Internship'
const Research = React.lazy(() => import('./components/Research'))
const Certificates = React.lazy(() => import('./components/Certificates'))

const LoadingFallback = () => (
  <div className="w-full py-20 flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-[#7C3AED]/20 border-t-[#ff7eb3] animate-spin" />
  </div>
)
import CV from './components/CV'
import Contact from './components/Contact'
import BioTechBackground from './components/BioTechBackground'
import AcademicJourney from './components/AcademicJourney'
import { motion, AnimatePresence, MotionConfig } from 'framer-motion'
import { useState, useEffect } from 'react'
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
    <div className="relative z-10">
      {children}
    </div>
  </motion.div>
)

export default function App() {
  const [showPortfolio, setShowPortfolio] = useState(() => {
    return !!sessionStorage.getItem('welcomeShown');
  });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <MotionConfig reducedMotion="user">
      {/* ══ CANVAS BACKGROUND — fixed, full viewport, z-index 0 ══ */}
      <BioTechBackground />

      {/* ══ PAGE CONTENT — sits above canvas via isolation ══ */}
      <div
        className={`relative text-[#fdfbf7] min-h-screen selection:bg-[#7c3aed]/30 ${!showPortfolio ? 'overflow-hidden h-screen' : ''}`}
        style={{ isolation: 'isolate', zIndex: 1 }}
      >
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
          >
            {/* Desktop navbar */}
            <Navbar />
            {/* Mobile sticky top navbar */}
            <MobileTopNavbar />
            {/* Mobile bottom dock */}
            <MobileNavbar />

            <main className="pb-[calc(80px+var(--safe-area-bottom))]">
              {/* Mobile full-screen hero */}
              <MobileHero />
              {/* Desktop hero */}
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

              <SectionWrapper id="research">
                <React.Suspense fallback={<LoadingFallback />}>
                  <Research />
                </React.Suspense>
              </SectionWrapper>

              <SectionWrapper id="certificates">
                <React.Suspense fallback={<LoadingFallback />}>
                  <Certificates />
                </React.Suspense>
              </SectionWrapper>

              <SectionWrapper id="cv">
                <CV />
              </SectionWrapper>

              <SectionWrapper id="contact">
                <Contact />
              </SectionWrapper>
            </main>

            {/* Floating Back to Top Button */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  onClick={scrollToTop}
                  aria-label="Back to top"
                  className="fixed bottom-24 right-6 lg:bottom-8 lg:right-8 z-[999] w-12 h-12 rounded-full glass-pink border border-[#ff7eb3]/30 text-[#ff7eb3] hover:text-[#fdfbf7] hover:bg-[#ff7eb3] hover:border-[#ff7eb3] flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(255,126,179,0.15)] focus-visible:ring-2 focus-visible:ring-[#ff7eb3] focus-visible:outline-none"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </MotionConfig>
  )
}
