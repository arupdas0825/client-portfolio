import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WelcomeScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if session storage has 'welcomeShown'
    const welcomeShown = sessionStorage.getItem('welcomeShown');
    
    if (welcomeShown) {
      setIsVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('welcomeShown', 'true');
    }, 4000); // 4 seconds total experience

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#1a0a2e]"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c084fc] blur-[120px] rounded-full"
            />
          </div>

          <div className="relative z-10 text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-body text-[#c084fc] text-xs tracking-[0.4em] uppercase mb-4"
            >
              Portfolios & Creative Space
            </motion.p>
            
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%", scale: 0.95 }}
                animate={{ y: 0, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.8 }}
                className="font-display text-4xl md:text-6xl font-bold text-white tracking-tight"
              >
                Welcome to my portfolio
              </motion.h1>
            </div>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "120px", opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
              className="h-[1px] bg-gradient-to-r from-transparent via-[#f9a8d4] to-transparent mx-auto mt-8"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
