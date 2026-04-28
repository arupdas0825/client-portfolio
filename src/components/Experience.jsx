import React from 'react';
import GlassCard from './GlassCard';
import ScrollReveal from './ScrollReveal';

const Experience = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-[#020818]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <GlassCard className="max-w-3xl mx-auto p-10 relative overflow-hidden" glowColor="cyan">
            {/* Scanline effect */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] animate-scanline" />
            
            <div className="relative z-10">
              <div className="font-mono text-[#00D4FF] text-xs tracking-widest mb-8 uppercase">
                &gt; EXPERIENCE_LOG.TXT
              </div>

              <div className="space-y-12">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-white mb-2">Biotechnology Undergraduate</h3>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <span className="font-mono text-[#00D4FF] text-sm uppercase tracking-wider">Heritage Institute of Technology</span>
                    <span className="font-mono text-white/50 text-xs mt-1 md:mt-0">2021 - 2025</span>
                  </div>
                  <ul className="font-body text-white/70 text-sm leading-relaxed space-y-3 list-disc list-inside">
                    <li>Engaged in intensive laboratory modules covering Microbiology, Genetic Engineering, and Downstream Processing.</li>
                    <li>Developed core competencies in aseptic handling, molecular cloning, and biochemical assays.</li>
                    <li>Currently focusing on academic excellence with a view toward international research opportunities.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-white/5">
                <div className="font-mono text-sm text-[#00FFA3] relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00FFA3]/10 to-transparent animate-glow_sweep bg-[length:200%_100%]" />
                  // Currently seeking internship opportunities in Germany (2025–2026)
                </div>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Experience;
