import React from 'react';
import GlassCard from './GlassCard';
import ScrollReveal from './ScrollReveal';
import { LuMail, LuLinkedin, LuInstagram, LuFacebook } from 'react-icons/lu';

const Contact = () => {
  const socialNodes = [
    { label: "Email", icon: <LuMail size={24} />, delay: 0, anim: "animate-float1" },
    { label: "LinkedIn", icon: <LuLinkedin size={24} />, delay: 100, anim: "animate-float2" },
    { label: "Instagram", icon: <LuInstagram size={24} />, delay: 200, anim: "animate-float3" },
    { label: "Facebook", icon: <LuFacebook size={24} />, delay: 300, anim: "animate-float1" },
  ];

  return (
    <section className="py-32 px-6 md:px-20 bg-[#020818] relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="font-mono text-[#00D4FF] text-xs tracking-[0.4em] block mb-4 uppercase">// broadcasting signal</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Initialize Connection</h2>
            <p className="font-body text-white/40 max-w-lg mx-auto">
              Ready to collaborate on biotechnology research or creative content. Select a node to establish contact.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {socialNodes.map((node, idx) => (
            <ScrollReveal key={idx} delay={node.delay}>
              <div className="group cursor-pointer">
                <GlassCard 
                  className="w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center gap-3 p-0"
                  animClass={node.anim}
                >
                  <span className="text-[#00D4FF] group-hover:scale-110 transition-transform duration-300">
                    {node.icon}
                  </span>
                  <span className="font-mono text-[9px] text-white/30 uppercase tracking-tighter">
                    {node.label}
                  </span>
                </GlassCard>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-32 text-center opacity-20 hover:opacity-100 transition-opacity duration-1000">
          <div className="inline-block glass-biotech px-6 py-3 border-[#00D4FF]/10">
            <p className="font-mono text-[10px] text-white tracking-[0.5em] uppercase">Antigravity Design Engine</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
