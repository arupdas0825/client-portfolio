import React from 'react';
import ScrollReveal from './ScrollReveal';

const About = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#1a0a2e]">
      {/* Background blobs */}
      <div
        className="blob animate-blob absolute w-80 h-80 bg-[#c084fc] top-40 -right-20 pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div
        className="blob animate-blob absolute w-64 h-64 bg-[#f9a8d4] -bottom-20 left-10 pointer-events-none"
        style={{ zIndex: 0, animationDelay: '4s' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT COLUMN — Identity Cards */}
          <div className="flex flex-col space-y-6">
            <ScrollReveal delay={100}>
              <div className="glass-pink animate-float p-6 flex items-start gap-5">
                <span className="text-4xl">🌿</span>
                <div>
                  <h3 className="font-display text-xl text-white font-semibold mb-1">Biotech Student</h3>
                  <p className="text-sm text-white/60 font-body">Brainware University · 2024–Present</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="glass-lavender animate-float2 p-6 flex items-start gap-5 ml-4 md:ml-12">
                <span className="text-4xl">✨</span>
                <div>
                  <h3 className="font-display text-xl text-white font-semibold mb-1">Content Creator</h3>
                  <p className="text-sm text-white/60 font-body">Lifestyle · Beauty · Student Life</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="glass animate-float3 p-6 flex items-start gap-5">
                <span className="text-4xl">🎯</span>
                <div>
                  <h3 className="font-display text-xl text-white font-semibold mb-1">Kolkata Based</h3>
                  <p className="text-sm text-white/60 font-body">Academic & Creative Excellence</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN — Text Content */}
          <div className="flex flex-col">
            <ScrollReveal>
              <span className="section-label">✦ My Story</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                Hi, I'm Shatarupa
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="space-y-6">
                <p className="font-body text-white/70 text-lg leading-relaxed">
                  I'm a B.Tech Biotechnology student at Brainware University, Kolkata — navigating the beautiful intersection of science and creativity. By day, I'm exploring the fascinating world of molecular biology and biotech research.
                </p>
                <p className="font-body text-white/70 text-lg leading-relaxed">
                  By night (and honestly, most of the day), I'm a content creator sharing my journey through lifestyle, beauty, and student life. I believe science and aesthetics aren't opposites — they're complementary.
                </p>
                <p className="font-body text-white/70 text-lg leading-relaxed">
                  Whether it's breaking down complex biology concepts or curating my next Instagram post, I bring the same attention to detail and genuine passion to everything I do.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex flex-wrap gap-4 mt-10">
                <span className="glass-pink px-5 py-2.5 text-sm font-body text-[#f9a8d4] border border-[#f9a8d4]/20 rounded-full">
                  🌸 Kolkata, India
                </span>
                <span className="glass-lavender px-5 py-2.5 text-sm font-body text-[#c084fc] border border-[#c084fc]/20 rounded-full">
                  🎓 B.Tech Biotechnology
                </span>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
