import React from 'react';
import ScrollReveal from './ScrollReveal';

const Experience = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#1a0a2e]">
      {/* Background blobs */}
      <div
        className="blob animate-blob absolute w-80 h-80 bg-[#f9a8d4]/10 -right-20 top-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-16">
        <ScrollReveal>
          <span className="section-label">✦ My Journey</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Experience</h2>
        </ScrollReveal>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          
          {/* Card 1 — Academic */}
          <ScrollReveal delay={100}>
            <div
              className="glass-lavender p-8 animate-float hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(192,132,252,0.2)] transition-all duration-300"
              style={{ borderRadius: '20px' }}
            >
              {/* Top label */}
              <p className="section-label mb-4">Academic</p>

              {/* Icon */}
              <div className="text-4xl mb-4">🎓</div>

              {/* Degree title */}
              <h3 className="font-display text-2xl font-bold text-white mb-1">
                B.Tech Biotechnology
              </h3>

              {/* University */}
              <p className="text-[#c084fc] font-body font-medium text-sm tracking-widest uppercase mb-1">
                Brainware University
              </p>

              {/* Duration */}
              <p className="font-body text-white/50 text-sm mb-5">2024 – Present</p>

              {/* Divider */}
              <div className="border-t border-white/10 mb-5" />

              {/* Main academic bullets */}
              <ul className="flex flex-col gap-3 mb-6">
                {[
                  "Studying core Biotechnology and Life Sciences fundamentals",
                  "Building strong academic foundation in biological sciences",
                  "Participating in university activities and academic events",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/70 text-sm font-body leading-relaxed">
                    <span className="text-[#c084fc] mt-0.5 flex-shrink-0">✦</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Lab experience sub-section */}
              <div
                className="rounded-[14px] p-5 mb-6"
                style={{
                  background: 'rgba(192,132,252,0.06)',
                  border: '1px solid rgba(192,132,252,0.15)',
                }}
              >
                {/* Sub-section header */}
                <p className="font-body font-semibold text-white/90 text-sm mb-4 flex items-center gap-2">
                  <span>🔬</span> Laboratory Experience
                </p>

                {/* Sub-section: Experimentation */}
                <div className="mb-4">
                  <p className="font-body text-xs text-[#c084fc] tracking-widest uppercase mb-2">
                    Laboratory Experimentation
                  </p>
                  <ul className="flex flex-col gap-2">
                    <li className="flex items-start gap-2 text-white/60 text-xs font-body leading-relaxed">
                      <span className="text-[#c084fc] mt-0.5 flex-shrink-0">•</span>
                      <span>
                        Executed microbiology, biochemistry, and cell biology experiments
                        <span className="text-[#c084fc]"> → </span>
                        Adhered to standard laboratory protocols
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Sub-section: Equipment & Safety */}
                <div className="mb-4">
                  <p className="font-body text-xs text-[#c084fc] tracking-widest uppercase mb-2">
                    Laboratory Equipment & Safety
                  </p>
                  <ul className="flex flex-col gap-2">
                    <li className="flex items-start gap-2 text-white/60 text-xs font-body leading-relaxed">
                      <span className="text-[#c084fc] mt-0.5 flex-shrink-0">•</span>
                      <span>
                        Maintained sterile conditions and operated instruments including microscope, centrifuge, and micropipettes
                        <span className="text-[#c084fc]"> → </span>
                        Preserved sample integrity
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-white/60 text-xs font-body leading-relaxed">
                      <span className="text-[#c084fc] mt-0.5 flex-shrink-0">•</span>
                      <span>
                        Followed laboratory safety guidelines and waste disposal procedures
                        <span className="text-[#c084fc]"> → </span>
                        Minimized contamination and ensured compliance
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Sub-section: Documentation */}
                <div>
                  <p className="font-body text-xs text-[#c084fc] tracking-widest uppercase mb-2">
                    Documentation & Record-Keeping
                  </p>
                  <ul className="flex flex-col gap-2">
                    <li className="flex items-start gap-2 text-white/60 text-xs font-body leading-relaxed">
                      <span className="text-[#c084fc] mt-0.5 flex-shrink-0">•</span>
                      <span>
                        Assisted in maintaining laboratory documentation and practical records
                        <span className="text-[#c084fc]"> → </span>
                        Supported traceability and data accuracy
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom tag */}
              <div
                className="inline-block px-4 py-2 text-xs text-[#c084fc] rounded-full font-body tracking-widest uppercase self-start"
                style={{ border: '1px solid rgba(192,132,252,0.3)', background: 'rgba(192,132,252,0.08)' }}
              >
                Currently Enrolled
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2 — Creative */}
          <ScrollReveal delay={200}>
            <div
              className="glass-pink p-8 animate-float2 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(249,168,212,0.2)] transition-all duration-300 h-full"
              style={{ borderRadius: '20px' }}
            >
              {/* Top label */}
              <p className="section-label mb-4" style={{ color: '#f9a8d4' }}>Creative</p>

              {/* Icon */}
              <div className="text-4xl mb-4">✨</div>

              {/* Title */}
              <h3 className="font-display text-2xl font-bold text-white mb-1">
                Content Creator
              </h3>

              {/* Platform */}
              <p className="font-body font-medium text-sm tracking-widest uppercase mb-1"
                style={{ color: '#f9a8d4' }}>
                Instagram & Social Media
              </p>

              {/* Duration — UPDATED */}
              <p className="font-body text-white/50 text-sm mb-5">2026 – Present</p>

              {/* Divider */}
              <div className="border-t border-white/10 mb-5" />

              {/* Professional bullet points */}
              <ul className="flex flex-col gap-4 mb-8">
                {[
                  "Creating engaging lifestyle, beauty, and student-focused digital content",
                  "Building and managing a growing audience across social media platforms",
                  "Developing a personal brand with a focus on creativity and authenticity",
                  "Open to brand collaborations and digital partnerships",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70 text-sm font-body leading-relaxed">
                    <span className="flex-shrink-0 mt-0.5" style={{ color: '#f9a8d4' }}>✦</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom tag */}
              <div
                className="inline-block px-4 py-2 text-xs rounded-full font-body tracking-widest uppercase self-start"
                style={{
                  color: '#f9a8d4',
                  border: '1px solid rgba(249,168,212,0.3)',
                  background: 'rgba(249,168,212,0.08)',
                }}
              >
                Open for Collabs
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Experience;
