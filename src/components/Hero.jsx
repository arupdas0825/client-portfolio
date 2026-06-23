import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../public/profile.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-28 pb-12 relative overflow-hidden">

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 mb-8"
        >
          {/* Glowing Halo Background */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#7C3AED]/20 via-[#ff7eb3]/15 to-[#FAF6F0]/10 rounded-full blur-xl z-[-1] animate-pulse" style={{ animationDuration: '6s' }} />
          
          {/* Floating Micro-particles */}
          <div className="absolute top-0 -left-6 w-2.5 h-2.5 bg-[#ff7eb3]/40 rounded-full blur-[1px] animate-float pointer-events-none" />
          <div className="absolute -bottom-2 right-4 w-3.5 h-3.5 bg-[#7C3AED]/35 rounded-full blur-[1px] animate-float2 pointer-events-none" />
          <div className="absolute top-1/2 -right-8 w-2 h-2 bg-[#FAF6F0]/50 rounded-full blur-[0.5px] animate-float3 pointer-events-none" style={{ animationDelay: '1.5s' }} />

          <img
            src={profileImg}
            alt="Shatarupa Basak"
            className="w-48 h-48 rounded-full object-cover object-center relative z-10"
            style={{
              border: '1.5px solid rgba(253,251,247,0.2)',
              boxShadow: '0 0 0 12px rgba(253,251,247,0.03), 0 0 60px rgba(124, 58, 237, 0.25), 0 0 100px rgba(255, 126, 179, 0.15)'
            }}
          />
        </motion.div>

        <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#ff7eb3]/80 mb-4 block">
          ✦ Biotechnology · Research · Innovation ✦
        </span>

        <h1 className="font-display text-[40px] md:text-[52px] lg:text-[64px] font-bold bg-gradient-to-r from-[#FAF6F0] via-[#FBCFE8] to-[#D8B4FE] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(216,180,254,0.15)] mb-2">
          Shatarupa Basak
        </h1>

        <p className="font-body text-white/75 text-lg max-w-[700px] mx-auto text-center mt-4">
          Future Scientist & Research Enthusiast
        </p>

        <p className="font-body text-sm text-[#fdfbf7]/40 mt-4 tracking-widest uppercase">
          ✦ Kolkata, India &nbsp;·&nbsp; Brainware University ✦
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <button onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})} className="glass-teal px-10 py-4 font-body font-medium tracking-wide transition-all duration-300 hover:-translate-y-1 hover:scale-105 text-[#fdfbf7] border-[#fdfbf7]/10">
            About My Work
          </button>
          <button onClick={() => document.getElementById('cv')?.scrollIntoView({behavior: 'smooth'})} className="glass-pink px-10 py-4 font-body font-medium tracking-wide transition-all duration-300 hover:-translate-y-1 hover:scale-105 text-[#fdfbf7] border-[#fdfbf7]/10">
            View CV
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#fdfbf7]/30 text-2xl">
        ↓
      </div>
    </section>
  );
};

export default Hero;
