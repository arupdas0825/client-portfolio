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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Update active section
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 20; // Small offset for mobile
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
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[1000] w-[90%] max-w-[400px] lg:hidden"
        >
          <div className="relative flex items-center justify-around px-4 py-3 bg-[#1a0a2e]/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Soft border glow */}
            <div className="absolute inset-0 rounded-[2.5rem] border border-[#c084fc]/20 pointer-events-none" />
            
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1) || (item.href === '#certificates' && activeSection === 'certificates');
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="relative flex flex-col items-center justify-center gap-1 group"
                >
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    className={`relative p-2 rounded-2xl transition-all duration-300 ${
                      isActive 
                        ? 'text-[#f9a8d4]' 
                        : 'text-white/40 group-hover:text-white/70'
                    }`}
                  >
                    <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                    
                    {isActive && (
                      <motion.div
                        layoutId="activeGlow"
                        className="absolute inset-0 bg-[#f9a8d4]/10 blur-md rounded-2xl z-[-1]"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.div>
                  
                  <span className={`text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                    isActive ? 'text-[#f9a8d4] opacity-100' : 'opacity-0 h-0 scale-0'
                  }`}>
                    {item.name}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 w-1 h-1 rounded-full bg-[#f9a8d4] shadow-[0_0_8px_#f9a8d4]"
                    />
                  )}
                </a>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
