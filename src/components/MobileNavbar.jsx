import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, FlaskConical, Award, Sparkles, Mail } from 'lucide-react';

const navItems = [
  { name: 'home', href: '#home', icon: Home },
  { name: 'about', href: '#about', icon: User },
  { name: 'experience', href: '#experience', icon: Briefcase },
  { name: 'internship', href: '#internship', icon: FlaskConical },
  { name: 'certificates', href: '#certificates', icon: Award },
  { name: 'creator', href: '#content-creator', icon: Sparkles },
  { name: 'contact', href: '#contact', icon: Mail },
];

export default function MobileNavbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Visibility logic: Appear only after scrolling down
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          if (
            scrollPosition >= element.offsetTop &&
            scrollPosition < element.offsetTop + element.offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
            <div className="relative flex items-center justify-between px-3 h-16 bg-[#1a0a2e]/70 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(192,132,252,0.15)] overflow-hidden">
              {/* Subtle inner glow */}
              <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none" />
              
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
                          ? 'text-[#f9a8d4]' 
                          : 'text-white/30 hover:text-white/60'
                      }`}
                    >
                      <Icon size={18} strokeWidth={isActive ? 2.5 : 2} className="relative z-10" />
                      
                      {isActive && (
                        <>
                          <motion.div
                            layoutId="activeDockGlow"
                            className="absolute inset-0 bg-white/10 blur-md rounded-full z-0"
                            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                          />
                          <motion.div
                            layoutId="activeIndicatorDot"
                            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#f9a8d4] shadow-[0_0_10px_#f9a8d4]"
                            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
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
