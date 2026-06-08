import React from 'react';
import ScrollReveal from './ScrollReveal';

const About = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Standardized Section Header */}
        <div className="text-center mb-24 md:mb-32">
          <ScrollReveal>
            <h2 className="font-display text-[40px] md:text-[52px] lg:text-[64px] font-bold text-[#fdfbf7] mb-6 leading-tight">
              About My <br className="md:hidden"/>
              <span className="bg-gradient-to-r from-[#FFFFFF] via-[#F5EFFF] to-[#D8B4FE] bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="font-body text-white/75 text-lg max-w-[700px] mx-auto leading-relaxed text-center">
              A deeper look into my academic path, scientific curiosity, and the passion driving my research in biotechnology.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT COLUMN — Identity Cards */}
          <div className="flex flex-col space-y-6">
            <ScrollReveal delay={100}>
              <div className="glass-pink animate-float p-6 flex items-start gap-5">
                <span className="text-4xl">🌿</span>
                <div>
                  <h3 className="font-display text-xl text-[#fdfbf7] font-semibold mb-1">Biotech Student</h3>
                  <p className="text-sm text-[#fdfbf7]/60 font-body">Brainware University · 2024–Present</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="glass-teal animate-float2 p-6 flex items-start gap-5 ml-4 md:ml-12">
                <span className="text-4xl">🔬</span>
                <div>
                  <h3 className="font-display text-xl text-[#fdfbf7] font-semibold mb-1">Research Enthusiast</h3>
                  <p className="text-sm text-[#fdfbf7]/60 font-body">Life Sciences · Innovation · Lab Work</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="glass animate-float3 p-6 flex items-start gap-5">
                <span className="text-4xl">🎯</span>
                <div>
                  <h3 className="font-display text-xl text-[#fdfbf7] font-semibold mb-1">Kolkata Based</h3>
                  <p className="text-sm text-[#fdfbf7]/60 font-body">Academic & Creative Excellence</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN — Text Content */}
          <div className="flex flex-col">
            <ScrollReveal>
              <span className="section-label">✦ My Story</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-br from-[#fdfbf7] to-[#fdfbf7]/60 bg-clip-text text-transparent leading-tight mb-8">
                Hi, I'm Shatarupa
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="space-y-6">
                <p className="font-body text-[#fdfbf7]/70 text-lg leading-relaxed">
                  I'm a B.Tech Biotechnology student at Brainware University, Kolkata. I am deeply passionate about exploring the fascinating world of molecular biology and biotech research, aiming to contribute meaningfully to the life sciences field.
                </p>
                <p className="font-body text-[#fdfbf7]/70 text-lg leading-relaxed">
                  My academic journey is fueled by a profound curiosity for scientific innovation. I believe that rigorous research, continuous learning, and hands-on laboratory experience are the keys to unlocking tomorrow's biological breakthroughs.
                </p>
                <p className="font-body text-[#fdfbf7]/70 text-lg leading-relaxed">
                  Whether it's breaking down complex biology concepts or analyzing experimental data, I bring the same attention to detail and genuine dedication to everything I do.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex flex-wrap gap-4 mt-10">
                <span className="glass-pink px-5 py-2.5 text-sm font-body text-[#ff7eb3] border border-[#ff7eb3]/20 rounded-full">
                  🌸 Kolkata, India
                </span>
                <span className="glass-teal px-5 py-2.5 text-sm font-body text-[#14b8a6] border border-[#14b8a6]/20 rounded-full">
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
