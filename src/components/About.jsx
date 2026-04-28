import React from 'react';
import ScrollReveal from './ScrollReveal';

const About = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-[#020818] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.06)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Column (Decorative) */}
        <div className="relative h-64 md:h-96 flex items-center justify-center order-2 md:order-1">
          <div className="absolute w-32 h-32 rounded-full border border-[#00D4FF]/10 animate-pulse_glow" />
          <div className="absolute w-48 h-48 rounded-full border border-[#00D4FF]/10 animate-pulse_glow" style={{ animationDelay: '1s' }} />
          <div className="absolute w-64 h-64 rounded-full border border-[#00D4FF]/10 animate-pulse_glow" style={{ animationDelay: '2s' }} />
        </div>

        {/* Right Column (Text) */}
        <div className="order-1 md:order-2">
          <ScrollReveal>
            <span className="font-mono text-[#00D4FF] text-xs tracking-widest mb-4 block">// PROFILE.BIO</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6">Academic Dossier</h2>
            <p className="font-body text-white/70 leading-relaxed text-base mb-8">
              A dedicated Biotechnology student with a profound interest in molecular research and diagnostic advancements. My academic journey is fueled by a commitment to scientific rigor, complemented by a unique creative vision that bridges the gap between laboratory precision and aesthetic storytelling.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="glass-biotech px-4 py-2 font-mono text-xs text-[#00D4FF] animate-float2">
                📍 Kolkata, India
              </div>
              <div className="glass-biotech px-4 py-2 font-mono text-xs text-[#00D4FF] animate-float3">
                🎓 B.Sc. Biotech
              </div>
              <div className="glass-biotech px-4 py-2 font-mono text-xs text-[#00D4FF] animate-float1">
                🎯 Germany 2025
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
