import React from 'react';
import GlassCard from './GlassCard';
import ScrollReveal from './ScrollReveal';
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
import { LuSparkles } from 'react-icons/lu';

const ContentCreator = () => {
  const contentItems = [
    { id: 1, img: "/images/content1.jpg" },
    { id: 2, img: "/images/content2.jpg" },
    { id: 3, img: "/images/content3.jpg" },
    { id: 4, img: "/images/content4.jpg" },
    { id: 5, img: "/images/content5.jpg" },
    { id: 6, img: "/images/content6.jpg" },
  ];

  return (
    <div className="relative">
      {/* Zone Transition */}
      <div className="w-full h-24 bg-gradient-to-b from-[#020818] via-[#0A0418] to-[#0D0618] relative">
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#E040FB]/40 to-transparent top-12" />
      </div>

      <section className="py-24 px-6 md:px-20 bg-[#0D0618] relative overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-[#E040FB]/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-[#B39DDB]/10 blur-[120px] rounded-full" />

        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="font-mono text-[#E040FB] text-xs tracking-[0.3em] block mb-4 uppercase">// aesthetic frequency</span>
              <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-gradient-beauty">
                Content Creator
              </h2>
              <p className="font-body text-white/70 max-w-2xl mx-auto leading-relaxed">
                Curating visual experiences at the intersection of beauty, lifestyle, and storytelling. My digital space is a luminous nebula of creative expression and aesthetic exploration.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <ScrollReveal delay={0}>
              <div className="glass-beauty border-[#E040FB]/20 px-6 py-4 flex items-center justify-between animate-float1">
                <FaInstagram size={20} className="text-[#E040FB]" />
                <div className="text-right">
                  <p className="font-mono text-[10px] text-white/40 uppercase">Instagram</p>
                  <p className="font-display font-bold text-[#E040FB]">10K+</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="glass-beauty border-[#E040FB]/20 px-6 py-4 flex items-center justify-between animate-float2">
                <FaYoutube size={20} className="text-[#E040FB]" />
                <div className="text-right">
                  <p className="font-mono text-[10px] text-white/40 uppercase">YouTube</p>
                  <p className="font-display font-bold text-[#E040FB]">Growing</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="glass-beauty border-[#E040FB]/20 px-6 py-4 flex items-center justify-between animate-float3">
                <FaFacebook size={20} className="text-[#E040FB]" />
                <div className="text-right">
                  <p className="font-mono text-[10px] text-white/40 uppercase">Facebook</p>
                  <p className="font-display font-bold text-[#E040FB]">Active</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {contentItems.map((item, idx) => (
              <ScrollReveal key={item.id} delay={idx * 50}>
                <GlassCard 
                  className="overflow-hidden p-0 aspect-square group" 
                  glowColor="beauty"
                >
                  <div className="w-full h-full bg-[#1A0A2E] flex items-center justify-center relative">
                    <LuSparkles size={32} className="text-[#E040FB] opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0618]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-24 text-center">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-gradient-beauty animate-pulse_glow">
              Open for Collaborations ✦
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentCreator;
