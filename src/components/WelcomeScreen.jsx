import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Ambient particle blob ── */
const Blob = ({ style }) => (
  <div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: style.size,
      height: style.size,
      background: style.bg,
      top: style.top,
      left: style.left,
      filter: 'blur(80px)',
      opacity: style.opacity,
      animation: `welcomeBlobDrift ${style.duration}s ease-in-out infinite`,
      animationDelay: style.delay,
    }}
  />
);

/* ── Floating pink particles ── */
const PinkParticle = ({ style }) => (
  <div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: style.size,
      height: style.size,
      background: '#FF66C7',
      top: style.top,
      left: style.left,
      opacity: style.opacity,
      filter: 'blur(0.5px)',
      boxShadow: '0 0 8px #FF66C7',
      animation: `welcomePinkParticle ${style.duration}s ease-in-out infinite`,
      animationDelay: style.delay,
    }}
  />
);

const blobs = [
  { size: '350px', bg: 'radial-gradient(circle, rgba(120,80,255,0.15) 0%, transparent 70%)', top: '-10%', left: '-5%', opacity: 0.8, duration: 12, delay: '0s' },
  { size: '300px', bg: 'radial-gradient(circle, rgba(255,102,199,0.12) 0%, transparent 70%)', top: '60%', left: '-10%', opacity: 0.6, duration: 14, delay: '2s' },
  { size: '280px', bg: 'radial-gradient(circle, rgba(120,80,255,0.14) 0%, transparent 70%)', top: '25%', left: '70%', opacity: 0.7, duration: 10, delay: '1s' },
];

const pinkParticles = [
  { size: '4px', top: '15%', left: '12%', opacity: 0.8, duration: 6, delay: '0s' },
  { size: '3px', top: '38%', left: '8%', opacity: 0.6, duration: 8, delay: '1.5s' },
  { size: '5px', top: '65%', left: '18%', opacity: 0.7, duration: 7, delay: '0.8s' },
  { size: '3px', top: '82%', left: '28%', opacity: 0.5, duration: 9, delay: '2.2s' },
  { size: '4px', top: '12%', left: '78%', opacity: 0.7, duration: 8, delay: '1.2s' },
  { size: '3px', top: '48%', left: '88%', opacity: 0.6, duration: 7, delay: '0.5s' },
  { size: '5px', top: '75%', left: '82%', opacity: 0.8, duration: 9, delay: '2.8s' },
  { size: '3px', top: '28%', left: '52%', opacity: 0.5, duration: 11, delay: '3.5s' },
];

/* ── Letter-by-letter reveal for "SHATARUPA" ── */
const LetterReveal = ({ text, delay = 0 }) => {
  return (
    <span style={{ whiteSpace: 'nowrap' }}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

/* ── Animated progress bar ── */
const ProgressBar = ({ duration }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const steps = 100;
    const interval = (duration * 1000) / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const t = step / steps;
      // Smooth ease-in-out curve
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      setProgress(Math.min(eased * 100, 100));
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [duration]);

  return (
    <div
      style={{
        width: '180px',
        height: '1.5px',
        background: 'rgba(255,255,255,0.06)',
        borderRadius: '9999px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <motion.div
        style={{
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #FF66C7, #DAAF37, #FF66C7)',
          borderRadius: '9999px',
          boxShadow: '0 0 8px #FF66C7',
        }}
      />
    </div>
  );
};

export default function WelcomeScreen({ onComplete }) {
  const TOTAL_DURATION = 4200; // ms before auto-dismiss
  const PROGRESS_DURATION = 3.2; // seconds for progress bar

  const [isVisible, setIsVisible] = useState(() => {
    return !sessionStorage.getItem('welcomeShown');
  });

  useEffect(() => {
    if (!isVisible) {
      if (onComplete) onComplete();
      return;
    }

    const timer = setTimeout(() => {
      if (onComplete) onComplete();
      setIsVisible(false);
      sessionStorage.setItem('welcomeShown', 'true');
    }, TOTAL_DURATION);

    return () => clearTimeout(timer);
  }, [isVisible, onComplete]);

  return (
    <>
      <style>{`
        @keyframes welcomeBlobDrift {
          0%, 100% { transform: translate(0,0) scale(1); }
          50%      { transform: translate(10px,-15px) scale(1.05); }
        }
        @keyframes welcomePinkParticle {
          0%, 100% { opacity: 0.3; transform: translateY(0px) scale(0.9); }
          50%      { opacity: 1;   transform: translateY(-12px) scale(1.2); }
        }
        @keyframes lineGlowPulse {
          0%, 100% { opacity: 0.7; filter: drop-shadow(0 0 2px #FF66C7); }
          50%      { opacity: 1;   filter: drop-shadow(0 0 6px #FF66C7); }
        }
        @keyframes orbPulse {
          0%, 100% { transform: scale(1); opacity: 0.8; box-shadow: 0 0 6px #FF66C7; }
          50%      { transform: scale(1.3); opacity: 1; box-shadow: 0 0 14px #FF66C7, 0 0 20px #FF66C7; }
        }
      `}</style>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="welcome"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: 'easeInOut' }}
            className="fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden"
            style={{
              background: `radial-gradient(
                circle at center,
                rgba(120,80,255,0.18),
                transparent 45%
              ),
              linear-gradient(
                180deg,
                #080511 0%,
                #120A24 100%
              )`,
            }}
          >
            {/* ── Soft moving blobs ── */}
            {blobs.map((b, i) => <Blob key={i} style={b} />)}

            {/* ── Floating pink particles ── */}
            {pinkParticles.map((p, i) => <PinkParticle key={i} style={p} />)}

            {/* ── Center Container ── */}
            <div
              style={{
                position: 'relative',
                zIndex: 10,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '0 24px',
                width: '100%',
                maxWidth: '440px',
              }}
            >
              {/* Line 1: "Welcome to" */}
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
                style={{
                  fontFamily: "'Playfair Display', 'Cormorant Garamond', serif",
                  fontSize: 'clamp(14px, 4.5vw, 18px)',
                  fontWeight: 500,
                  color: '#FFFFFF',
                  letterSpacing: '0.12em',
                  marginBottom: '10px',
                  display: 'block',
                }}
              >
                Welcome to
              </motion.span>

              {/* Line 2: "SHATARUPA" (Pure Gold) */}
              <div
                style={{
                  fontFamily: "'Cinzel', 'Cormorant Garamond', serif",
                  fontSize: 'clamp(24px, 7.8vw, 54px)',
                  fontWeight: 700,
                  color: '#DAAF37',
                  textTransform: 'uppercase',
                  letterSpacing: '0.35em',
                  lineHeight: 1.1,
                  display: 'block',
                  margin: '8px 0',
                  textAlign: 'center',
                  paddingLeft: '0.35em', // offsets the letter spacing for center alignment
                  textShadow: '0 0 15px rgba(218, 175, 55, 0.25)',
                  whiteSpace: 'nowrap',
                }}
              >
                <LetterReveal text="SHATARUPA" delay={0.7} />
              </div>

              {/* Line 3: "portfolio" (Pink handwritten script) */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.7, ease: 'easeOut' }}
                style={{
                  fontFamily: "'Pinyon Script', cursive, italic",
                  fontSize: 'clamp(32px, 9vw, 46px)',
                  color: '#FF66C7',
                  display: 'block',
                  marginTop: '-4px',
                  marginBottom: '16px',
                  textShadow: '0 0 10px rgba(255, 102, 199, 0.2)',
                }}
              >
                portfolio
              </motion.span>

              {/* ── Underline & Orb ── */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '32px',
                }}
              >
                {/* Thin glowing pink line */}
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: '130px', opacity: 1 }}
                  transition={{ duration: 1.1, delay: 1.9, ease: 'easeInOut' }}
                  style={{
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, #FF66C7 20%, #FF66C7 80%, transparent)',
                    animation: 'lineGlowPulse 4s ease-in-out infinite',
                  }}
                />

                {/* Glowing pink orb in the center */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 2.3, ease: 'easeOut' }}
                  style={{
                    position: 'absolute',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#FF66C7',
                    animation: 'orbPulse 3s ease-in-out infinite',
                  }}
                />
              </div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.4 }}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '9px',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.45)',
                  marginBottom: '28px',
                }}
              >
                Biotechnology&nbsp;•&nbsp;Research&nbsp;•&nbsp;Innovation
              </motion.p>

              {/* Loading indicator */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.6 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '16px 24px',
                  background: 'rgba(255,255,255,0.02)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.04)',
                  borderRadius: '12px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                }}
              >
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '8.5px',
                    letterSpacing: '0.24em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.3)',
                    margin: 0,
                  }}
                >
                  Preparing Research Portfolio
                </p>
                <ProgressBar duration={PROGRESS_DURATION} />
              </motion.div>

              {/* Quote */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 3.1 }}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.25)',
                  lineHeight: 1.7,
                  marginTop: '20px',
                }}
              >
                "Future Scientist.
                <br />
                Driven by Curiosity, Research and Innovation."
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
