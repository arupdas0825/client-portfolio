import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, GraduationCap, Briefcase, FlaskConical, Award, FileText, Mail } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Academic Journey', href: '#academic-journey', icon: GraduationCap },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Internship', href: '#internship', icon: FlaskConical },
  { name: 'Certificates', href: '#certificates', icon: Award },
  { name: 'CV', href: '#cv', icon: FileText },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function MobileTopNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      
      // Update active section on scroll
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const id = item.href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
          }
        }
      }
      if (window.scrollY < 50) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial run
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 70; // top navbar offset height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="lg:hidden fixed top-0 left-0 right-0 z-[999]"
        style={{
          background: scrolled || isOpen
            ? 'rgba(11, 6, 24, 0.85)'
            : 'rgba(15, 15, 25, 0.35)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled || isOpen
            ? '1px solid rgba(255, 255, 255, 0.08)'
            : '1px solid rgba(255, 255, 255, 0.04)',
          transition: 'background 0.4s ease, border-color 0.4s ease',
          paddingTop: 'env(safe-area-inset-top, 0px)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 20px',
            height: '60px',
          }}
        >
          {/* Left Side: Logo + Branding */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}
              aria-label="Home"
            >
              <img
                src="/favicon.png"
                alt="SB"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  boxShadow: '0 0 12px rgba(124,58,237,0.4)',
                }}
              />
            </a>

            {/* Divider */}
            <div
              style={{
                width: '1px',
                height: '20px',
                background: 'rgba(255,255,255,0.12)',
                flexShrink: 0,
              }}
            />

            {/* Title text */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              style={{ textDecoration: 'none' }}
              aria-label="Shatarupa"
            >
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.35em',
                  textTransform: 'uppercase',
                  color: '#ffffff',
                  textShadow: '0 0 20px rgba(255,255,255,0.25)',
                }}
              >
                S H A T A R U P A
              </span>
            </a>
          </div>

          {/* Right Side: Toggle button */}
          <button
            onClick={toggleMenu}
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#ffffff',
              transition: 'all 0.3s ease',
            }}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* ── Dropdown Overlay Menu ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{
                overflow: 'hidden',
                background: 'rgba(11, 6, 24, 0.95)',
                backdropFilter: 'blur(25px)',
                WebkitBackdropFilter: 'blur(25px)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '16px 20px 24px 20px',
                  gap: '8px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        color: isActive ? '#ff7eb3' : 'rgba(253, 251, 247, 0.6)',
                        background: isActive ? 'rgba(255, 255, 255, 0.03)' : 'transparent',
                        textDecoration: 'none',
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '13px',
                        fontWeight: isActive ? 600 : 400,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        border: isActive ? '1px solid rgba(255, 126, 179, 0.15)' : '1px solid transparent',
                        transition: 'all 0.25s ease',
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon size={16} strokeWidth={isActive ? 2.5 : 2} style={{ color: isActive ? '#ff7eb3' : 'rgba(253, 251, 247, 0.4)' }} />
                      <span>{item.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
