import React, { useMemo } from 'react';

const FloatingParticles = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animation: `animate-float${(i % 3) + 1}`,
      delay: `${Math.random() * 5}s`,
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute w-[2px] h-[2px] bg-[#00D4FF] rounded-full opacity-[0.3] ${p.animation}`}
          style={{
            top: p.top,
            left: p.left,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
