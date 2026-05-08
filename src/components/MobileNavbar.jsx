import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Image, Mail } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Gallery', href: '#certificates', icon: Image },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function MobileNavbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false); // Start hidden for Welcome Screen
  const [isScrolledUp, setIsScrolledUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Delay appearance initially or show on first scroll
    const timer = setTimeout(() => {
      if (window.scrollY > 50) setIsVisible(true);
    }, 4500); // After WelcomeScreen (4s) + buffer

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show if scrolled past threshold
      if (currentScrollY > 100) {
        setIsVisible(true);
      } else if (currentScrollY < 50) {
        setIsVisible(false); // Hide when at the very top (Hero section)
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsScrolledUp(false);
      } else {
        setIsScrolledUp(true);
      }
      setLastScrollY(currentScrollY);

      // Update active section
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 300 && rect.bottom >= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [lastScrollY]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 20;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && isScrolledUp && (
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.8 }}
          animate={{ 
            y: 0, 
            opacity: 1, 
            scale: 1,
            transition: {
              type: 'spring',
              damping: 20,
              stiffness: 100
            }
          }}
          exit={{ y: 100, opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[1000] w-[85%] max-w-[320px] lg:hidden"
        >
          {/* Main Dock Container */}
          <motion.div 
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex items-center justify-between px-6 h-14 bg-[#1a0a2e]/40 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_20px_rgba(192,132,252,0.1)] overflow-hidden"
          >
            {/* Subtle inner glow */}
            <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none" />
            
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1) || (item.href === '#certificates' && activeSection === 'certificates');
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="relative flex flex-col items-center justify-center transition-all duration-500"
                >
                  <motion.div
                    whileTap={{ scale: 0.85 }}
                    className={`relative p-2.5 rounded-full transition-all duration-500 ${
                      isActive 
                        ? 'text-[#f9a8d4]' 
                        : 'text-white/30 hover:text-white/60'
                    }`}
                  >
                    <Icon size={20} strokeWidth={isActive ? 2.5 : 2} className="relative z-10" />
                    
                    {isActive && (
                      <>
                        <motion.div
                          layoutId="activeDockGlow"
                          className="absolute inset-0 bg-white/10 blur-md rounded-full z-0"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                        <motion.div
                          layoutId="activeIndicatorDot"
                          className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#f9a8d4] shadow-[0_0_10px_#f9a8d4]"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                      </>
                    )}
                  </motion.div>
                </a>
              );
            })}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
