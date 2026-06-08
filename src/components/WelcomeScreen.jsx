import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WelcomeScreen = ({ onComplete }) => {
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
    }, 2800); // reduced from 4s to 2.8s for a snappier feel

    return () => clearTimeout(timer);
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#0B0618]"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7C3AED] blur-[120px] rounded-full"
            />
          </div>

          <div className="relative z-10 text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-body text-[#14b8a6] text-xs tracking-[0.4em] uppercase mb-4"
            >
              Portfolios & Creative Space
            </motion.p>
            
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%", scale: 0.95 }}
                animate={{ y: 0, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.8 }}
                className="font-display text-4xl md:text-6xl font-bold text-[#fdfbf7] tracking-tight"
              >
                Welcome to my portfolio
              </motion.h1>
            </div>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "120px", opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
              className="h-[1px] bg-gradient-to-r from-transparent via-[#ff7eb3] to-transparent mx-auto mt-8"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
