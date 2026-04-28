import React from 'react';
import { motion } from 'framer-motion';
import FloatingCard from './FloatingCard';

const WorkExperience = () => {
  return (
    <section className="py-24 px-6 md:px-20 max-w-4xl mx-auto">
      <div className="mb-12">
        <span className="font-mono text-xs text-biotech-cyan/60 block mb-2 tracking-widest uppercase">// Professional Logs</span>
        <h2 className="text-4xl font-space">Experience</h2>
      </div>

      <FloatingCard className="relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-b from-biotech-cyan/5 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-biotech-cyan/20 animate-scanline" />
        
        <div className="p-8 md:p-12">
          <div className="font-mono text-[10px] text-biotech-cyan/40 mb-6 flex justify-between">
            <span>&gt; EXPERIENCE_LOG.TXT</span>
            <span>[ SYSTEM: STABLE ]</span>
          </div>

          <div className="space-y-12">
            <div className="relative pl-8 border-l border-biotech-cyan/20">
              <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-biotech-cyan shadow-[0_0_10px_rgba(0,212,255,0.5)]" />
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold">Volunteer Work</h3>
                <span className="text-sm font-mono text-white/40">2023 - Present</span>
              </div>
              <p className="text-biotech-cyan/80 text-sm mb-4 italic">Kolkata, India</p>
              <ul className="space-y-2 text-white/60 text-sm leading-relaxed list-disc list-inside">
                <li>Assisted in community health awareness programs.</li>
                <li>Managed logistics for local science exhibitions and seminars.</li>
                <li>Coordinated with team members for social outreach initiatives.</li>
              </ul>
            </div>

            {/* Add more experience entries here if provided */}
          </div>

          <div className="mt-12 pt-8 border-t border-white/5">
            <motion.p 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-center font-mono text-xs text-biotech-cyan"
            >
              "Currently seeking internship opportunities in Germany (2025–2026)"
            </motion.p>
          </div>
        </div>
      </FloatingCard>
    </section>
  );
};

export default WorkExperience;
