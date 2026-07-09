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
import FloatingParticles from './components/FloatingParticles'
import AcademicJourney from './components/AcademicJourney'
import { motion, AnimatePresence, MotionConfig } from 'framer-motion'
import { useState, useEffect } from 'react'
import './index.css'

const SectionWrapper = ({ children, id, glowColor = 'purple' }) => (
  <motion.div
    id={id}
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="relative"
  >
    {/* Dynamic Section Glow */}
    <div className={`absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[600px] h-[600px] blur-[140px] rounded-full pointer-events-none z-0 opacity-20 bg-gradient-to-r ${
      glowColor === 'purple' ? 'from-[#7C3AED]/20 to-[#2A1350]/10' :
      glowColor === 'pink' ? 'from-[#ff7eb3]/15 to-[#FAF6F0]/5' :
      'from-[#14b8a6]/15 to-[#7C3AED]/10'
    }`} />
    
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
      <div className={`text-[#fdfbf7] min-h-screen selection:bg-[#7c3aed]/30 ${!showPortfolio ? 'overflow-hidden h-screen' : ''}`}
         style={{
           background: `
             radial-gradient(circle at 20% 10%, rgba(124, 58, 237, 0.15), transparent 45%),
             radial-gradient(circle at 80% 40%, rgba(251, 207, 232, 0.08), transparent 35%),
             radial-gradient(circle at 30% 80%, rgba(124, 58, 237, 0.08), transparent 45%),
             linear-gradient(180deg, #0B0618 0%, #140726 35%, #1C0D38 65%, #0B0618 100%)
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
          {/* Desktop navbar (hidden on mobile via its own lg: classes) */}
          <Navbar />
          {/* Mobile sticky top navbar — overlays hero */}
          <MobileTopNavbar />
          {/* Mobile bottom dock */}
          <MobileNavbar />
          
          <main className="pb-[calc(80px+var(--safe-area-bottom))]">
            {/* Mobile full-screen hero (lg:hidden inside component) */}
            <MobileHero />
            {/* Desktop hero (hidden lg:flex inside component) */}
            <SectionWrapper id="home" glowColor="pink">
              <Hero />
            </SectionWrapper>
            
            <SectionWrapper id="about" glowColor="purple">
              <About />
              <Skills />
            </SectionWrapper>
            
            <SectionWrapper id="academic-journey" glowColor="teal">
              <AcademicJourney />
            </SectionWrapper>
            
            <SectionWrapper id="experience" glowColor="purple">
              <Experience />
            </SectionWrapper>
            
            <SectionWrapper id="internship" glowColor="teal">
              <Internship />
            </SectionWrapper>
            
            <SectionWrapper id="research" glowColor="purple">
              <React.Suspense fallback={<LoadingFallback />}>
                <Research />
              </React.Suspense>
            </SectionWrapper>
            
            <SectionWrapper id="certificates" glowColor="pink">
              <React.Suspense fallback={<LoadingFallback />}>
                <Certificates />
              </React.Suspense>
            </SectionWrapper>
            
            <SectionWrapper id="cv" glowColor="purple">
              <CV />
            </SectionWrapper>
            
            <SectionWrapper id="contact" glowColor="teal">
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
      
      {/* Global Background Layer */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <FloatingParticles />
        <div className="absolute w-[800px] h-[800px] bg-[#7C3AED]/08 blur-[150px] rounded-full -top-40 -left-40 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute w-[800px] h-[800px] bg-[#2A1350]/12 blur-[150px] rounded-full top-[30%] -right-40 animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute w-[1000px] h-[1000px] bg-[#1C0D38]/15 blur-[180px] rounded-full bottom-[-20%] left-[20%] animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
      </div>

      {/* Background Noise/Stars Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>
    </div>
    </MotionConfig>
  )
}