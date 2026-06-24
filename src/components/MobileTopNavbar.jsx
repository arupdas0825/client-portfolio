import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * MobileTopNavbar — shown ONLY on mobile (lg:hidden).
 * Glassmorphism sticky bar with SB logo + spaced "S H A T A R U P A" name.
 * Lives outside the hero so it overlays the full-screen image.
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
          ? 'rgba(11,6,24,0.60)'
          : 'rgba(15,15,25,0.35)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.06)'
          : '1px solid rgba(255,255,255,0.04)',
        transition: 'background 0.4s ease, border-color 0.4s ease',
        paddingTop: 'env(safe-area-inset-top, 0px)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '12px 20px',
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

        {/* Thin divider */}
        <div
          style={{
            width: '1px',
            height: '20px',
            background: 'rgba(255,255,255,0.12)',
            flexShrink: 0,
          }}
        />

        {/* S H A T A R U P A */}
        <a
          href="#home"
          onClick={scrollTop}
          style={{ textDecoration: 'none' }}
          aria-label="Shatarupa"
        >
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              color: '#ffffff',
              textShadow: '0 0 20px rgba(255,255,255,0.25), 0 0 40px rgba(216,180,254,0.15)',
            }}
          >
            S H A T A R U P A
          </span>
        </a>
      </div>
    </motion.header>
  );
}
