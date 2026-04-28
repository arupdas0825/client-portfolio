import React from 'react';
import useTilt from '../hooks/useTilt';

const GlassCard = ({ children, className = "", glowColor = "cyan", animClass = "" }) => {
  const cardRef = useTilt();

  const glowStyles = glowColor === "cyan" ? "glow-cyan hover:shadow-[0_0_40px_rgba(0,212,255,0.3)]" : "glow-magenta hover:shadow-[0_0_40px_rgba(224,64,251,0.3)]";
  const glassStyles = glowColor === "cyan" ? "glass-biotech" : "glass-beauty";

  return (
    <div
      ref={cardRef}
      className={`
        ${glassStyles} 
        ${glowStyles} 
        ${animClass} 
        transition-all duration-400 cubic-bezier(0.23, 1, 0.32, 1)
        hover:-translate-y-2 hover:scale-[1.04]
        ${className}
      `}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div style={{ transform: 'translateZ(30px)' }}>
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
