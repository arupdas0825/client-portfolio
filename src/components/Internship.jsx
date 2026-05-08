import React from 'react';
import ScrollReveal from './ScrollReveal';
import { HiBriefcase } from 'react-icons/hi';

const Internship = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#1a0a2e]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="section-label">✦ Professional Growth</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Internships</h2>
            <p className="font-body text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
              Applying academic knowledge to real-world laboratory settings and corporate environments.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#f9a8d4] to-[#c084fc] rounded-[32px] blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative p-16 glass-lavender rounded-[32px] border border-white/10 text-center flex flex-col items-center gap-6">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center text-[#f9a8d4] shadow-inner border border-white/5">
                <HiBriefcase size={32} />
              </div>
              <p className="font-body text-white/30 text-base italic max-w-md">
                "Preparation is the key to opportunity." — I am currently exploring internship opportunities in Biotechnology research and development.
              </p>
              <div className="px-6 py-2 rounded-full bg-[#f9a8d4]/10 border border-[#f9a8d4]/20 text-[#f9a8d4] text-[10px] font-bold uppercase tracking-[0.2em]">
                Status: Open for opportunities
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Internship;
