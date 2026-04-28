import React from 'react';
import FloatingParticles from './FloatingParticles';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#020818]">
      <FloatingParticles />
      
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative mb-8"
        >
          <img 
            src="/images/profile.jpg" 
            alt="Shatarupa Basak" 
            className="w-48 h-48 rounded-full object-cover animate-float1 hover:scale-105 transition-transform duration-500"
            style={{
              border: '1.5px solid rgba(0,212,255,0.4)',
              boxShadow: '0 0 0 12px rgba(0,212,255,0.06), 0 0 60px rgba(0,212,255,0.25)'
            }}
          />
        </motion.div>

        <span className="font-mono text-[11px] text-[#00D4FF] tracking-[0.3em] uppercase mb-4">
          [ BIOTECHNOLOGY · CONTENT CREATION ]
        </span>
        
        <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-2">
          Shatarupa Basak
        </h1>
        
        <p className="font-display text-xl text-[#00D4FF] opacity-80 italic mt-2">
          "Where Science Meets Aesthetic"
        </p>
        
        <p className="font-mono text-sm text-white/40 mt-3">
          // Kolkata, India → Germany (Target)
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <button className="glass-biotech px-8 py-3 font-display font-medium tracking-wide transition-all duration-400 hover:-translate-y-1 hover:scale-105 text-[#00D4FF] hover:glow-cyan border-[#00D4FF]/30 animate-float2">
            Research Portfolio
          </button>
          <button className="glass-biotech px-8 py-3 font-display font-medium tracking-wide transition-all duration-400 hover:-translate-y-1 hover:scale-105 text-[#E040FB] border-[#E040FB]/30 hover:shadow-[0_0_20px_rgba(224,64,251,0.3)] animate-float2" style={{ animationDelay: '0.5s' }}>
            Content Gallery
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30 text-2xl">
        ↓
      </div>
    </section>
  );
};

export default Hero;
