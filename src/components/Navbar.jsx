import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Academic Journey', href: '#academic-journey' },
  { name: 'Experience', href: '#experience' },
  { name: 'Internship', href: '#internship' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'CV', href: '#cv' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Handle scroll events
  useEffect(() => {
    let rafId = null;

    const updateScroll = () => {
      const scrollY = window.scrollY;
      
      // Update scrolled state for navbar background
      setIsScrolled(scrollY > 20);

      // Update scroll progress bar
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(height > 0 ? (winScroll / height) * 100 : 0);

      // Fast & immediate section detection
      const sections = navItems.map(item => item.href.substring(1));
      let currentSection = 'home';
      
      // Check from bottom to top for highest specificity
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Detect when section enters the top 40% of viewport
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }

      // Fallback for very top of page
      if (scrollY < 50) {
        currentSection = 'home';
      }

      // Only trigger React state update if changed (prevents re-renders)
      setActiveSection(prev => (prev !== currentSection ? currentSection : prev));
    };

    const handleScroll = () => {
      // requestAnimationFrame prevents scroll lag and ensures high FPS
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        updateScroll();
        rafId = null;
      });
    };

    // Passive listener for high performance scrolling
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    updateScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [])

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80 // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[1000] pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-[#ff7eb3] via-[#14b8a6] to-[#ff7eb3]"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <nav
        className={`hidden lg:block fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-[1000] transition-all duration-500 rounded-full border backdrop-blur-[20px] shadow-2xl ${isScrolled
          ? 'py-3 bg-white/[0.03] border-white/[0.08] shadow-[0_8px_32px_rgba(124,58,237,0.15)]'
          : 'py-4 bg-white/[0.01] border-white/[0.04]'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-2 cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <img src="/favicon.png" alt="Logo" className="w-10 h-10 object-contain rounded-full" />

          </motion.a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-full">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`px-5 py-2 rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 relative ${isActive
                    ? 'text-[#fdfbf7]'
                    : 'text-[#fdfbf7]/40 hover:text-[#fdfbf7]/70'
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#fdfbf7]/10 rounded-full z-[-1] border border-[#fdfbf7]/20"
                      transition={{ type: 'spring', stiffness: 350, damping: 30, mass: 0.8 }}
                    />
                  )}
                  {item.name}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#ff7eb3] shadow-[0_0_8px_#ff7eb3]"
                      layoutId="activeDot"
                      transition={{ type: 'spring', stiffness: 350, damping: 30, mass: 0.8 }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          {/* CTA / Contact Button */}
          <div className="hidden lg:block">
            <motion.a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-pink px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#ff7eb3] hover:scale-105 transition-all border border-[#ff7eb3]/20 shadow-[0_0_20px_rgba(255, 126, 179,0.1)]"
            >
              Let's Connect
            </motion.a>
          </div>

          {/* Mobile Toggle - HIDDEN in favor of MobileNavbar */}
          <div className="lg:hidden hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-full glass border border-[#fdfbf7]/10 text-[#fdfbf7]"
            >
              {mobileMenuOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay - REMOVED */}
      </nav>
    </>
  )
}
