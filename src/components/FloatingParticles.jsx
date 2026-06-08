import React, { useMemo, useEffect } from 'react';
import { motion, useSpring, useTransform, useMotionValue, useScroll } from 'framer-motion';

const FloatingParticles = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 22 });

  const { scrollY } = useScroll();

  // Scroll Parallax Transforms (different speeds and directions for 3D depth)
  const starsY = useTransform(scrollY, [0, 4000], [0, 180]);
  const dustY = useTransform(scrollY, [0, 4000], [0, 320]);
  const nodesY = useTransform(scrollY, [0, 4000], [0, -180]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Generate particle, star, and node configurations
  const { dust, molecularNodes, stars } = useMemo(() => {
    const dustParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: `dust-${i}`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animation: i % 3 === 0 ? 'animate-float' : i % 3 === 1 ? 'animate-float2' : 'animate-float3',
      delay: `${Math.random() * 5}s`,
      size: Math.random() * 2 + 1, // 1 to 3px
    }));

    const nodes = Array.from({ length: 25 }).map((_, i) => {
      const colors = ['#7C3AED', '#FBCFE8', '#FAF6F0']; // Violet, Soft Pink, Cream
      const color = colors[i % colors.length];
      return {
        id: `node-${i}`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animation: i % 3 === 0 ? 'animate-float' : i % 3 === 1 ? 'animate-float2' : 'animate-float3',
        delay: `${Math.random() * 5}s`,
        size: Math.random() * 3 + 2, // 2 to 5px
        color: color,
        blur: Math.random() > 0.5 ? 'blur-[1px]' : 'blur-[2px]'
      };
    });

    const starParticles = Array.from({ length: 45 }).map((_, i) => ({
      id: `star-${i}`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 1.5 + 0.5, // 0.5 to 2px
      delay: `${Math.random() * 6}s`,
      duration: `${Math.random() * 4 + 4}s` // 4s to 8s
    }));

    return { dust: dustParticles, molecularNodes: nodes, stars: starParticles };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden perspective-[1000px]">
      
      {/* Mouse-reactive Ambient Spotlight */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-35 blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.18) 0%, rgba(244, 63, 94, 0.05) 50%, transparent 70%)',
          x: useTransform(smoothX, [-1, 1], [-200, 200]),
          y: useTransform(smoothY, [-1, 1], [-200, 200]),
          left: 'calc(50% - 300px)',
          top: 'calc(50% - 300px)',
        }}
      />

      {/* Layer 4: Twinkling Background Stars (Scroll-linked Parallax) */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: starsY }}
      >
        {stars.map((s) => (
          <div
            key={s.id}
            className="absolute bg-[#FAF6F0] rounded-full animate-pulse opacity-20"
            style={{
              width: s.size,
              height: s.size,
              top: s.top,
              left: s.left,
              animationDelay: s.delay,
              animationDuration: s.duration,
              boxShadow: s.size > 1.2 ? '0 0 4px #FAF6F0' : 'none'
            }}
          />
        ))}
      </motion.div>

      {/* Layer 3: Floating Dust (Scroll-linked Parallax + Mouse-linked Parallax) */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: dustY }}
      >
        <motion.div 
          className="absolute inset-0"
          style={{ 
            x: useTransform(smoothX, v => v * -20), 
            y: useTransform(smoothY, v => v * -20) 
          }}
        >
          {dust.map((p) => (
            <div
              key={p.id}
              className={`absolute bg-[#FAF6F0] rounded-full opacity-[0.12] ${p.animation}`}
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
      </motion.div>

      {/* Layer 5: Foreground Molecular Nodes (Scroll-linked Parallax + Mouse-linked Parallax) */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: nodesY }}
      >
        <motion.div 
          className="absolute inset-0"
          style={{ 
            x: useTransform(smoothX, v => v * 35), 
            y: useTransform(smoothY, v => v * 35) 
          }}
        >
          {molecularNodes.map((p) => (
            <div
              key={p.id}
              className={`absolute rounded-full opacity-[0.25] ${p.blur} ${p.animation}`}
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
      </motion.div>
      
    </div>
  );
};

export default FloatingParticles;
