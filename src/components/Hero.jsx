import React from 'react';
import FloatingParticles from './FloatingParticles';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#1a0a2e]">
      <FloatingParticles />
      
      {/* Background blobs */}
      <div
        className="blob animate-blob absolute w-80 h-80 bg-[#c084fc] -top-20 -left-20 pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div
        className="blob animate-blob absolute w-64 h-64 bg-[#f9a8d4] bottom-0 right-0 pointer-events-none"
        style={{ zIndex: 0, animationDelay: '3s' }}
      />

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
              border: '1.5px solid rgba(255,255,255,0.2)',
              boxShadow: '0 0 0 12px rgba(255,255,255,0.03), 0 0 60px rgba(192,132,252,0.2)'
            }}
          />
        </motion.div>

        <span className="section-label mb-4">
          ✦ Biotechnology · Content Creation ✦
        </span>

        <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-2">
          Shatarupa Basak
        </h1>

        <p className="font-display text-xl text-gradient-rose italic mt-2">
          "Where Science Meets Aesthetic"
        </p>

        <p className="font-body text-sm text-white/40 mt-4 tracking-widest">
          ✦ Kolkata, India &nbsp;·&nbsp; Brainware University ✦
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <button className="glass-lavender px-10 py-4 font-body font-medium tracking-wide transition-all duration-300 hover:-translate-y-1 hover:scale-105 text-white border-white/10 animate-float">
            About My Work
          </button>
          <button className="glass-pink px-10 py-4 font-body font-medium tracking-wide transition-all duration-300 hover:-translate-y-1 hover:scale-105 text-white border-white/10 animate-float2">
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
