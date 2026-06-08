import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative mb-8"
        >
          <img
            src={profileImg}
            alt="Shatarupa Basak"
            className="w-48 h-48 rounded-full object-cover animate-float hover:scale-105 transition-transform duration-500"
            style={{
              border: '1.5px solid rgba(253,251,247,0.2)',
              boxShadow: '0 0 0 12px rgba(253,251,247,0.03), 0 0 60px rgba(20, 184, 166, 0.3), 0 0 100px rgba(255, 126, 179, 0.2)'
            }}
          />
        </motion.div>

        <span className="section-label mb-4">
          ✦ Biotechnology · Research · Innovation ✦
        </span>

        <h1 className="font-display text-5xl md:text-7xl font-bold bg-gradient-to-br from-[#fdfbf7] to-[#fdfbf7]/60 bg-clip-text text-transparent mb-2">
          Shatarupa Basak
        </h1>

        <p className="font-display text-xl bg-gradient-to-r from-[#ff7eb3] to-[#14b8a6] bg-clip-text text-transparent italic mt-2 font-semibold">
          "Future Scientist & Research Enthusiast"
        </p>

        <p className="font-body text-sm text-[#fdfbf7]/40 mt-4 tracking-widest">
          ✦ Kolkata, India &nbsp;·&nbsp; Brainware University ✦
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <button onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})} className="glass-teal px-10 py-4 font-body font-medium tracking-wide transition-all duration-300 hover:-translate-y-1 hover:scale-105 text-[#fdfbf7] border-[#fdfbf7]/10 animate-float">
            About My Work
          </button>
          <button onClick={() => document.getElementById('cv')?.scrollIntoView({behavior: 'smooth'})} className="glass-pink px-10 py-4 font-body font-medium tracking-wide transition-all duration-300 hover:-translate-y-1 hover:scale-105 text-[#fdfbf7] border-[#fdfbf7]/10 animate-float2">
            View CV
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-[#fdfbf7]/30 text-2xl">
        ↓
      </div>
    </section>
  );
};

export default Hero;
