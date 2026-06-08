import React, { useMemo, useEffect } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';

const FloatingParticles = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Generate different particle layers
  const { dust, molecularNodes } = useMemo(() => {
    const dustParticles = Array.from({ length: 60 }).map((_, i) => ({
      id: `dust-${i}`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animation: `animate-float${(i % 3) + 1}`,
      delay: `${Math.random() * 5}s`,
      size: Math.random() * 2 + 1, // 1 to 3px
    }));

    const nodes = Array.from({ length: 30 }).map((_, i) => ({
      id: `node-${i}`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animation: `animate-float${(i % 3) + 1}`,
      delay: `${Math.random() * 5}s`,
      size: Math.random() * 3 + 2, // 2 to 5px
      color: i % 2 === 0 ? '#ff7eb3' : '#14b8a6', // Pink or Teal
      blur: Math.random() > 0.5 ? 'blur-[1px]' : 'blur-[2px]'
    }));

    return { dust: dustParticles, molecularNodes: nodes };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden perspective-[1000px]">
      
      {/* Background layer: Moves slightly opposite to mouse */}
      <motion.div 
        className="absolute inset-0"
        style={{ x: useTransform(smoothX, v => v * -30), y: useTransform(smoothY, v => v * -30) }}
      >
        {dust.map((p) => (
          <div
            key={p.id}
            className={`absolute bg-[#fdfbf7] rounded-full opacity-[0.15] ${p.animation}`}
            style={{
              width: p.size,
              height: p.size,
              top: p.top,
              left: p.left,
              animationDelay: p.delay,
            }}
          />
        ))}
      </motion.div>

      {/* Foreground layer: Moves with mouse, creating parallax depth */}
      <motion.div 
        className="absolute inset-0"
        style={{ x: useTransform(smoothX, v => v * 50), y: useTransform(smoothY, v => v * 50) }}
      >
        {molecularNodes.map((p) => (
          <div
            key={p.id}
            className={`absolute rounded-full opacity-[0.3] ${p.blur} ${p.animation}`}
            style={{
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              top: p.top,
              left: p.left,
              animationDelay: p.delay,
              boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            }}
          />
        ))}
      </motion.div>
      
    </div>
  );
};

export default FloatingParticles;
