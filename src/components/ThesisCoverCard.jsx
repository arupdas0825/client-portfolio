import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ThesisCoverCard = ({ onOpen, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onOpen}
      style={{ perspective: 900 }}
      className={`relative cursor-pointer select-none group ${className}`}
    >
      <motion.div
        layoutId="thesisCover"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative w-[160px] h-[210px] sm:w-[190px] sm:h-[248px] rounded-xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(124,58,237,0.45)]"
      >
        {/* Animated gradient glow border */}
        <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-br from-[#7C3AED] via-[#ff7eb3] to-emerald-500 opacity-60 group-hover:opacity-100 blur-[2px] transition-opacity duration-500 -z-10" />

        <img
          src="/thesis-cover.jpg"
          alt="Thesis cover — A Comprehensive In-Silico Study of Celecoxib, Brainware University"
          className="w-full h-full object-cover rounded-xl border border-white/10"
          style={{ transform: "translateZ(25px)" }}
          loading="lazy"
        />

        {/* Bound page-edge strip on the right, gives a "physical book" feel */}
        <div
          className="absolute top-1 -right-[3px] bottom-1 w-[5px] rounded-r-sm bg-gradient-to-b from-white/50 via-white/15 to-white/50"
          style={{ transform: "translateZ(15px)" }}
        />

        {/* Diagonal shine sweep on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Click-to-open hint */}
        <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-center gap-1 py-1 rounded-md bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-[8px] font-bold uppercase tracking-wider text-white/90">Click to open</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ThesisCoverCard;
