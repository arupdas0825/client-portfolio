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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-10 mt-12">
          
          {/* Card 1 — Academic */}
          <ScrollReveal delay={100}>
            <div
              className="glass-lavender hover:shadow-[0_24px_80px_rgba(192,132,252,0.15)] transition-all duration-500 overflow-hidden group"
              style={{ borderRadius: '24px' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] min-h-full">
                
                {/* Left Column: Primary Info */}
                <div className="p-8 lg:p-10 bg-white/[0.02] border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-500">
                        🎓
                      </div>
                      <span className="section-label mb-0">Academic</span>
                    </div>
                    
                    <h3 className="font-display text-3xl font-bold text-white mb-2 leading-tight">
                      B.Tech Biotechnology
                    </h3>
                    
                    <p className="text-[#c084fc] font-body font-bold text-sm tracking-[0.2em] uppercase mb-1">
                      Brainware University
                    </p>
                    
                    <p className="font-body text-white/50 text-sm mb-8">2024 – Present</p>
                  </div>

                  <div
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-[10px] text-[#c084fc] rounded-full font-body font-bold tracking-[0.2em] uppercase self-start"
                    style={{ border: '1px solid rgba(192,132,252,0.3)', background: 'rgba(192,132,252,0.08)' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c084fc] animate-pulse" />
                    Currently Enrolled
                  </div>
                </div>

                {/* Right Column: Detailed Content */}
                <div className="p-8 lg:p-10 flex flex-col gap-8">
                  {/* Main academic bullets */}
                  <div>
                    <p className="font-body text-xs text-white/30 tracking-widest uppercase mb-4">Core Focus</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Studying core Biotechnology and Life Sciences fundamentals",
                        "Building strong academic foundation in biological sciences",
                        "Participating in university activities and academic events",
                      ].map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/70 text-sm font-body leading-relaxed">
                          <span className="text-[#c084fc] mt-1 flex-shrink-0 text-[10px]">✦</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Lab experience sub-section */}
                  <div
                    className="rounded-2xl p-6 lg:p-8"
                    style={{
                      background: 'rgba(192,132,252,0.04)',
                      border: '1px solid rgba(192,132,252,0.1)',
                    }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-lg bg-[#c084fc]/10 flex items-center justify-center text-sm">
                        🔬
                      </div>
                      <p className="font-display font-bold text-white/90 text-lg">
                        Laboratory Experience
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                      {/* Sub-section: Experimentation */}
                      <div className="space-y-3">
                        <p className="font-body text-[10px] text-[#c084fc] tracking-[0.2em] uppercase font-bold opacity-80">
                          Experimentation
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-3 text-white/60 text-xs font-body leading-relaxed">
                            <span className="text-[#c084fc] mt-1 flex-shrink-0">•</span>
                            <span>
                              Executed microbiology, biochemistry, and cell biology experiments
                              <span className="text-[#c084fc]/50 ml-1">→ Standard protocols</span>
                            </span>
                          </li>
                        </ul>
                      </div>

                      {/* Sub-section: Equipment */}
                      <div className="space-y-3">
                        <p className="font-body text-[10px] text-[#c084fc] tracking-[0.2em] uppercase font-bold opacity-80">
                          Equipment & Safety
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 text-white/60 text-xs font-body leading-relaxed">
                            <span className="text-[#c084fc] mt-1 flex-shrink-0">•</span>
                            <span>
                              Operated instruments including microscope, centrifuge, and micropipettes
                            </span>
                          </li>
                          <li className="flex items-start gap-3 text-white/60 text-xs font-body leading-relaxed">
                            <span className="text-[#c084fc] mt-1 flex-shrink-0">•</span>
                            <span>
                              Followed laboratory safety guidelines and waste disposal procedures
                            </span>
                          </li>
                        </ul>
                      </div>

                      {/* Sub-section: Documentation */}
                      <div className="space-y-3 md:col-span-2 pt-2 border-t border-white/5">
                        <p className="font-body text-[10px] text-[#c084fc] tracking-[0.2em] uppercase font-bold opacity-80">
                          Documentation & Record-Keeping
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-3 text-white/60 text-xs font-body leading-relaxed">
                            <span className="text-[#c084fc] mt-1 flex-shrink-0">•</span>
                            <span>
                              Assisted in maintaining laboratory documentation and practical records for traceability and data accuracy
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Experience;
