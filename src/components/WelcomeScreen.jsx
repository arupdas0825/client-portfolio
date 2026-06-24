import React, { useState, useEffect, useRef } from 'react';
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
      filter: 'blur(60px)',
      opacity: style.opacity,
      animation: `welcomeBlobDrift ${style.duration}s ease-in-out infinite`,
      animationDelay: style.delay,
    }}
  />
);

/* ── Tiny sparkle particle ── */
const Sparkle = ({ style }) => (
  <div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: style.size,
      height: style.size,
      background: style.color,
      top: style.top,
      left: style.left,
      opacity: style.opacity,
      filter: 'blur(0.5px)',
      animation: `welcomeSparkle ${style.duration}s ease-in-out infinite`,
      animationDelay: style.delay,
    }}
  />
);

const blobs = [
  { size:'320px', bg:'radial-gradient(circle,rgba(124,58,237,0.5),transparent 70%)',  top:'-80px',  left:'-60px',  opacity:0.6, duration:9,  delay:'0s' },
  { size:'260px', bg:'radial-gradient(circle,rgba(255,126,179,0.35),transparent 70%)', top:'55%',    left:'-80px',  opacity:0.5, duration:11, delay:'2s' },
  { size:'200px', bg:'radial-gradient(circle,rgba(43,20,72,0.8),transparent 70%)',     top:'20%',    left:'60%',    opacity:0.7, duration:8,  delay:'1s' },
  { size:'280px', bg:'radial-gradient(circle,rgba(124,58,237,0.3),transparent 70%)',   top:'70%',    left:'50%',    opacity:0.4, duration:13, delay:'3s' },
];

const sparkles = [
  { size:'3px',  color:'rgba(255,126,179,0.9)',  top:'18%', left:'15%', opacity:0.8, duration:5, delay:'0s'   },
  { size:'2px',  color:'rgba(255,255,255,0.7)',   top:'35%', left:'8%',  opacity:0.6, duration:7, delay:'1.2s' },
  { size:'4px',  color:'rgba(216,180,254,0.8)',   top:'62%', left:'20%', opacity:0.7, duration:6, delay:'0.5s' },
  { size:'2.5px',color:'rgba(255,126,179,0.6)',   top:'80%', left:'30%', opacity:0.5, duration:8, delay:'2s'   },
  { size:'3px',  color:'rgba(255,255,255,0.5)',   top:'10%', left:'75%', opacity:0.5, duration:9, delay:'1.8s' },
  { size:'2px',  color:'rgba(216,180,254,0.7)',   top:'45%', left:'85%', opacity:0.6, duration:6, delay:'0.8s' },
  { size:'3.5px',color:'rgba(255,126,179,0.55)',  top:'72%', left:'78%', opacity:0.5, duration:7, delay:'3s'   },
  { size:'2px',  color:'rgba(255,255,255,0.4)',   top:'25%', left:'55%', opacity:0.4, duration:10,delay:'4s'   },
];

/* ── Letter-by-letter reveal for "SHATARUPA" ── */
const LetterReveal = ({ text, delay = 0 }) => {
  return (
    <span>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.55,
            delay: delay + i * 0.07,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
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
    const steps = 80;
    const interval = (duration * 1000) / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      // Ease-in-out curve: fast start, slow middle, fast end
      const t = step / steps;
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      setProgress(Math.min(eased * 100, 100));
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [duration]);

  return (
    <div
      style={{
        width: '200px',
        height: '1.5px',
        background: 'rgba(255,255,255,0.08)',
        borderRadius: '9999px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <motion.div
        style={{
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, rgba(124,58,237,0.8), rgba(255,126,179,0.9), rgba(216,180,254,0.8))',
          borderRadius: '9999px',
          boxShadow: '0 0 12px rgba(255,126,179,0.5)',
        }}
      />
    </div>
  );
};

/* ══════════════════════════════════════════════
   WELCOME SCREEN COMPONENT
   ══════════════════════════════════════════════ */
const WelcomeScreen = ({ onComplete }) => {
  const TOTAL_DURATION = 4200; // ms before auto-dismiss
  const PROGRESS_DURATION = 3.4; // seconds for progress bar

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
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(15px,-15px) scale(1.06); }
          66%      { transform: translate(-10px,12px) scale(0.96); }
        }
        @keyframes welcomeSparkle {
          0%,100% { opacity: 0.2; transform: scale(0.8); }
          50%      { opacity: 1;   transform: scale(1.4); }
        }
        @keyframes welcomeLineExpand {
          from { width: 0px; opacity: 0; }
          to   { width: 100px; opacity: 1; }
        }
        @keyframes glassSweep {
          0%   { left: -100%; }
          100% { left: 200%; }
        }
      `}</style>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="welcome"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.01 }}
            transition={{ duration: 1.0, ease: 'easeInOut' }}
            className="fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden"
            style={{
              background: `radial-gradient(
                circle at center,
                #2b1448 0%,
                #170d2d 40%,
                #0b0716 100%
              )`,
            }}
          >
            {/* ── Ambient blobs ── */}
            {blobs.map((b, i) => <Blob key={i} style={b} />)}

            {/* ── Glass reflection overlay ── */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.015) 0%, transparent 50%, rgba(255,255,255,0.008) 100%)',
                pointerEvents: 'none',
              }}
            />

            {/* ── Sparkle particles ── */}
            {sparkles.map((s, i) => <Sparkle key={i} style={s} />)}

            {/* ══ MAIN CONTENT ══ */}
            <div
              style={{
                position: 'relative',
                zIndex: 10,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '0 32px',
                maxWidth: '420px',
                width: '100%',
              }}
            >
              {/* "WELCOME TO" */}
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '10px',
                  letterSpacing: '0.45em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,200,220,0.65)',
                  marginBottom: '18px',
                }}
              >
                Welcome&nbsp;to
              </motion.p>

              {/* "SHATARUPA" — letter-by-letter */}
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(44px, 14vw, 64px)',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  lineHeight: 1,
                  background: 'linear-gradient(135deg, #ffffff 0%, #ff7eb3 45%, #FAF6F0 80%, #e9d5ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 30px rgba(255,126,179,0.4))',
                  marginBottom: '4px',
                }}
              >
                <LetterReveal text="SHATARUPA" delay={0.7} />
              </div>

              {/* "PORTFOLIO" — fade up */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(13px, 3.5vw, 18px)',
                  fontWeight: 400,
                  letterSpacing: '0.45em',
                  textTransform: 'uppercase',
                  color: 'rgba(253,251,247,0.55)',
                  marginTop: '6px',
                }}
              >
                Portfolio
              </motion.p>

              {/* Animated thin luxury line */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '90px', opacity: 1 }}
                transition={{ duration: 1.2, delay: 2.1, ease: 'easeInOut' }}
                style={{
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(255,126,179,0.7), rgba(216,180,254,0.6), transparent)',
                  marginTop: '22px',
                  marginBottom: '20px',
                  boxShadow: '0 0 12px rgba(255,126,179,0.3)',
                }}
              />

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.3 }}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '10px',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'rgba(216,180,254,0.65)',
                  marginBottom: '28px',
                }}
              >
                Biotechnology&nbsp;•&nbsp;Research&nbsp;•&nbsp;Innovation
              </motion.p>

              {/* Loading bar container (glassmorphism) */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.5 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '18px 28px',
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Glass sweep shine */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '60%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)',
                    animation: 'glassSweep 3s ease-in-out infinite',
                    animationDelay: '2.5s',
                  }}
                />
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '9px',
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.3)',
                    margin: 0,
                  }}
                >
                  Preparing Research Portfolio
                </p>
                <ProgressBar duration={PROGRESS_DURATION} />
              </motion.div>

              {/* Optional quote — fades in near end */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 3.0 }}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontSize: '11px',
                  color: 'rgba(253,251,247,0.25)',
                  lineHeight: 1.7,
                  marginTop: '20px',
                  textAlign: 'center',
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
};

export default WelcomeScreen;
