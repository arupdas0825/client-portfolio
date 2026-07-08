import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, GraduationCap, Briefcase, FlaskConical, BookOpen, Award, Mail, FileText } from 'lucide-react';

const navItems = [
  { name: 'home', href: '#home', icon: Home },
  { name: 'about', href: '#about', icon: User },
  { name: 'academic', href: '#academic-journey', icon: GraduationCap },
  { name: 'experience', href: '#experience', icon: Briefcase },
  { name: 'internship', href: '#internship', icon: FlaskConical },
  { name: 'research', href: '#research', icon: BookOpen },
  { name: 'certificates', href: '#certificates', icon: Award },
  { name: 'cv', href: '#cv', icon: FileText },
  { name: 'contact', href: '#contact', icon: Mail },
];

export default function MobileNavbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let rafId = null;

    const updateScroll = () => {
      const scrollY = window.scrollY;
      
      // Always visible on mobile
      setIsVisible(true);

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

      if (scrollY < 50) currentSection = 'home';

      setActiveSection(prev => (prev !== currentSection ? currentSection : prev));
    };

    const handleScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        updateScroll();
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-[9999] flex justify-center p-6 pb-[calc(1.5rem+var(--safe-area-bottom))] pointer-events-none lg:hidden">
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="pointer-events-auto w-full max-w-[440px]"
          >
            <div className="relative flex items-center justify-between px-3 h-16 bg-[#0B0618]/70 backdrop-blur-2xl border border-[#7C3AED]/20 rounded-full shadow-[0_20px_50px_rgba(11,6,24,0.6),0_0_30px_rgba(124,58,237,0.2)] overflow-hidden">
              {/* Subtle inner glow */}
              <div className="absolute inset-0 rounded-full border border-[#7C3AED]/10 pointer-events-none" />
              
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                const Icon = item.icon;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="relative flex flex-col items-center justify-center transition-all duration-300"
                  >
                    <motion.div
                      whileTap={{ scale: 0.8 }}
                      className={`relative p-2.5 rounded-full transition-all duration-300 ${
                        isActive 
                          ? 'text-[#ff7eb3]' 
                          : 'text-[#fdfbf7]/30 hover:text-[#fdfbf7]/60'
                      }`}
                    >
                      <Icon size={18} strokeWidth={isActive ? 2.5 : 2} className="relative z-10" />
                      
                      {isActive && (
                        <>
                          <motion.div
                            layoutId="activeDockGlow"
                            className="absolute inset-0 bg-[#fdfbf7]/10 blur-md rounded-full z-0"
                            transition={{ type: 'spring', stiffness: 350, damping: 30, mass: 0.8 }}
                          />
                          <motion.div
                            layoutId="activeIndicatorDot"
                            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#ff7eb3] shadow-[0_0_10px_#ff7eb3]"
                            transition={{ type: 'spring', stiffness: 350, damping: 30, mass: 0.8 }}
                          />
                        </>
                      )}
                    </motion.div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
