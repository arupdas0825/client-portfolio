import React from 'react';
import { motion } from 'framer-motion';
import useTilt from '../hooks/useTilt';

const FloatingCard = ({ children, className, floatDuration = 6, floatAmplitude = 20, delay = 0, variant = 'biotech' }) => {
  const tiltRef = useTilt();
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ 
        y: [0, -floatAmplitude, 0],
      }}
      transition={{
        duration: floatDuration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
      className={`h-full w-full ${className}`}
    >
      <div 
        ref={tiltRef}
        className={`${variant === 'biotech' ? 'biotech-glass' : 'beauty-glass'} h-full w-full`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div style={{ transform: 'translateZ(20px)' }}>
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingCard;
