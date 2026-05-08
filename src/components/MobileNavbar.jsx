import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Image, Mail } from 'lucide-react';

const navItems = [
  { name: 'home', href: '#home', icon: Home },
  { name: 'about', href: '#about', icon: User },
  { name: 'gallery', href: '#certificates', icon: Image },
  { name: 'contact', href: '#contact', icon: Mail },
];

export default function MobileNavbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
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
    <div className="fixed bottom-0 left-0 right-0 z-[9999] flex justify-center p-6 pb-[calc(1.5rem+var(--safe-area-bottom))] pointer-events-none lg:hidden">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200, delay: 0.5 }}
        className="pointer-events-auto w-[88%] max-w-[340px]"
      >
        <div className="relative flex items-center justify-between px-6 h-14 bg-[#1a0a2e]/60 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(192,132,252,0.1)] overflow-hidden">
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
                className="relative flex flex-col items-center justify-center transition-all duration-300"
              >
                <motion.div
                  whileTap={{ scale: 0.85 }}
                  className={`relative p-2.5 rounded-full transition-all duration-300 ${
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
  );
}
