import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * MobileTopNavbar — a compact, minimal floating brand header.
 * Contains only the SB Logo and S H A T A R U P A text.
 * No navigation menu, links, or hamburger controls here.
 */
export default function MobileTopNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="lg:hidden fixed top-0 left-0 right-0 z-[999]"
      style={{
        background: scrolled
          ? 'rgba(11, 6, 24, 0.25)'
          : 'transparent',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled
          ? '1px solid rgba(255, 255, 255, 0.05)'
          : '1px solid transparent',
        transition: 'background 0.4s ease, border-color 0.4s ease',
        paddingTop: 'env(safe-area-inset-top, 0px)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '8px 16px',
          height: '46px',
        }}
      >
        {/* SB Logo */}
        <a
          href="#home"
          onClick={scrollTop}
          style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}
          aria-label="Home"
        >
          <img
            src="/favicon.png"
            alt="SB Logo"
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: '0 0 10px rgba(124, 58, 237, 0.3)',
            }}
          />
        </a>

        {/* Thin divider */}
        <div
          style={{
            width: '1px',
            height: '14px',
            background: 'rgba(255, 255, 255, 0.1)',
            flexShrink: 0,
          }}
        />

        {/* Title text */}
        <a
          href="#home"
          onClick={scrollTop}
          style={{ textDecoration: 'none' }}
          aria-label="Shatarupa"
        >
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#ffffff',
              textShadow: '0 0 15px rgba(255, 255, 255, 0.2)',
            }}
          >
            S H A T A R U P A
          </span>
        </a>
      </div>
    </motion.header>
  );
}
