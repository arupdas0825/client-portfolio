import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/* ─── Floating particle (tiny purple/pink orb) ─── */
const Particle = ({ style }) => (
  <div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: style.size,
      height: style.size,
      background: style.color,
      top: style.top,
      left: style.left,
      opacity: style.opacity,
      filter: 'blur(1px)',
      animation: `mobileHeroFloat ${style.duration}s ease-in-out infinite`,
      animationDelay: style.delay,
    }}
  />
);

const particles = [
  { size: '5px', color: 'rgba(255,126,179,0.55)', top: '12%',  left: '8%',  opacity: 0.7, duration: 7, delay: '0s' },
  { size: '3px', color: 'rgba(124,58,237,0.6)',   top: '25%',  left: '15%', opacity: 0.6, duration: 9, delay: '1s' },
  { size: '4px', color: 'rgba(253,251,247,0.5)',  top: '60%',  left: '6%',  opacity: 0.5, duration: 8, delay: '2s' },
  { size: '6px', color: 'rgba(216,180,254,0.45)', top: '75%',  left: '12%', opacity: 0.5, duration: 6, delay: '0.5s' },
  { size: '3px', color: 'rgba(255,126,179,0.4)',  top: '40%',  left: '5%',  opacity: 0.4, duration: 10,delay: '3s' },
  { size: '4px', color: 'rgba(124,58,237,0.5)',   top: '88%',  left: '20%', opacity: 0.5, duration: 7, delay: '1.5s' },
];

/* ─── Stagger variants ─── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};
const fadeUp = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};
const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9, ease: 'easeOut' } },
};

export default function MobileHero() {
  const heroRef  = useRef(null);
  const imgRef   = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  /* Parallax on scroll */
  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        setScrollY(window.scrollY);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Scroll-to handler */
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const parallaxOffset = scrollY * 0.28;

  return (
    <>
      {/* ── Mobile-only keyframe injection ── */}
      <style>{`
        @keyframes mobileHeroFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes scrollLineDown {
          0%   { transform: scaleY(0); transform-origin: top; opacity: 1; }
          70%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
          100% { transform: scaleY(1); transform-origin: top; opacity: 0; }
        }
        @keyframes mobileHeroPulseGlow {
          0%,100% { opacity: 0.35; }
          50%     { opacity: 0.6; }
        }
      `}</style>

      {/* ╔═══════════════════════════════════════════╗
          ║  MOBILE HERO  (hidden on lg+)             ║
          ╚═══════════════════════════════════════════╝ */}
      <section
        ref={heroRef}
        id="mobile-hero"
        className="lg:hidden relative overflow-hidden"
        style={{ height: '100svh', minHeight: '600px' }}
      >
        {/* ── Full-screen background image with parallax ── */}
        <div
          className="absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          <img
            ref={imgRef}
            src="/profile.png"
            alt=""
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '115%',           /* slight oversize for parallax room */
              objectFit: 'cover',
              objectPosition: 'center top',
              transform: `translateY(${parallaxOffset}px)`,
              willChange: 'transform',
            }}
          />
        </div>

        {/* ── Cinematic overlay (left-heavy) ── */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background: `linear-gradient(
              90deg,
              rgba(5,5,15,0.88) 0%,
              rgba(5,5,15,0.60) 45%,
              rgba(5,5,15,0.18) 100%
            )`,
          }}
        />

        {/* ── Bottom fade for smooth section transition ── */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(11,6,24,0.95))' }}
        />

        {/* ── Ambient purple glow blobs ── */}
        <div
          className="absolute top-[-80px] left-[-60px] w-[260px] h-[260px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)',
            animation: 'mobileHeroPulseGlow 6s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-[15%] left-[-40px] w-[200px] h-[200px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255,126,179,0.15) 0%, transparent 70%)',
            animation: 'mobileHeroPulseGlow 8s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />

        {/* ── Floating particles (left-side only so they stay on text area) ── */}
        {particles.map((p, i) => <Particle key={i} style={p} />)}

        {/* ══════════════════════════════════════════
            HERO CONTENT — lower-left positioning
            ════════════════════════════════════════ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="absolute bottom-0 left-0 right-0 pb-28 px-7"
          style={{ maxWidth: '78%' }}  /* keeps text away from subject */
        >
          {/* Small location label */}
          <motion.div variants={fadeIn} className="flex items-center gap-2 mb-5">
            <span
              style={{
                display: 'inline-block',
                width: '38px',
                height: '1px',
                background: 'linear-gradient(90deg, rgba(255,126,179,0.8), rgba(255,126,179,0.2))',
              }}
            />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '9px',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'rgba(255,200,220,0.75)',
              }}
            >
              Kolkata&nbsp;•&nbsp;India
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={fadeUp}>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                lineHeight: 1.08,
                margin: 0,
                padding: 0,
              }}
            >
              <span
                style={{
                  display: 'block',
                  fontSize: 'clamp(50px, 13vw, 72px)',
                  color: '#ffffff',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  textShadow: '0 2px 40px rgba(0,0,0,0.5)',
                }}
              >
                Shatarupa
              </span>
              <span
                style={{
                  display: 'block',
                  fontSize: 'clamp(50px, 13vw, 72px)',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  background: 'linear-gradient(135deg, #ff7eb3 0%, #FAF6F0 60%, #e9d5ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 24px rgba(255,126,179,0.35))',
                }}
              >
                Basak
              </span>
            </h1>
          </motion.div>

          {/* Role text */}
          <motion.div variants={fadeUp} style={{ marginTop: '14px' }}>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '8.5px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(255,200,220,0.7)',
                lineHeight: 1.9,
                margin: 0,
              }}
            >
              Future Scientist&nbsp;•&nbsp;Research Enthusiast
              <br />
              Biotechnology Student&nbsp;•&nbsp;Innovator
            </p>
          </motion.div>

          {/* Short quote */}
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: '12px',
              color: 'rgba(253,251,247,0.55)',
              lineHeight: 1.65,
              marginTop: '12px',
              marginBottom: '0',
            }}
          >
            "Exploring biotechnology, research, and innovation to create meaningful impact through science."
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            style={{
              marginTop: '22px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            {/* Primary */}
            <button
              onClick={() => scrollTo('about')}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '9.5px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: '#ffffff',
                background: 'rgba(124,58,237,0.18)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: '9999px',
                padding: '12px 24px',
                cursor: 'pointer',
                boxShadow: '0 0 20px rgba(124,58,237,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                transition: 'all 0.3s ease',
                alignSelf: 'flex-start',
              }}
              onMouseEnter={e => { e.currentTarget.style.background='rgba(124,58,237,0.32)'; e.currentTarget.style.boxShadow='0 0 30px rgba(124,58,237,0.5), inset 0 1px 0 rgba(255,255,255,0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.background='rgba(124,58,237,0.18)'; e.currentTarget.style.boxShadow='0 0 20px rgba(124,58,237,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'; }}
            >
              About My Work
            </button>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {/* Secondary */}
              <button
                onClick={() => scrollTo('cv')}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '9.5px',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  color: '#ff7eb3',
                  background: 'rgba(255,126,179,0.10)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,126,179,0.25)',
                  borderRadius: '9999px',
                  padding: '11px 20px',
                  cursor: 'pointer',
                  boxShadow: '0 0 16px rgba(255,126,179,0.2), inset 0 1px 0 rgba(255,255,255,0.05)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background='rgba(255,126,179,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.background='rgba(255,126,179,0.10)'; }}
              >
                View CV
              </button>

              {/* Tertiary */}
              <button
                onClick={() => scrollTo('internship')}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '9.5px',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  color: 'rgba(216,180,254,0.9)',
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(216,180,254,0.18)',
                  borderRadius: '9999px',
                  padding: '11px 20px',
                  cursor: 'pointer',
                  boxShadow: '0 0 16px rgba(216,180,254,0.12), inset 0 1px 0 rgba(255,255,255,0.05)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background='rgba(216,180,254,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.05)'; }}
              >
                Research Profile
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Scroll indicator (bottom-center) ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-6 right-6 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '8px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
              writingMode: 'vertical-rl',
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: '1px',
              height: '44px',
              background: 'rgba(255,255,255,0.15)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, rgba(255,126,179,0.9), rgba(216,180,254,0.4))',
                animation: 'scrollLineDown 2s ease-in-out infinite',
              }}
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}
