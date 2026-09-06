import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Award, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';
import Badge from './Badge';

// Premium Apple-grade easing curves
const transitionVariants = {
  initial: {
    height: 0,
    opacity: 0,
  },
  animate: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      },
      opacity: {
        duration: 0.35,
        delay: 0.08,
        ease: 'easeOut',
      },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      opacity: {
        duration: 0.18,
        ease: 'easeIn',
      },
      height: {
        duration: 0.38,
        delay: 0.04,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },
};

const Experience = () => {
  const [activeCard, setActiveCard] = useState(null); // 'academic' | 'iicb' | null

  const handleToggleCard = (id) => {
    setActiveCard((curr) => (curr === id ? null : id));
  };

  const isAcademicExpanded = activeCard === 'academic';
  const isIicbExpanded = activeCard === 'iicb';

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <SectionHeader 
        eyebrow="RESEARCH & WORK" 
        title="Experience" 
        subtitle="Hands-on laboratory work, academic projects, and continuous learning in the life sciences." 
        className="max-w-7xl mx-auto px-6 relative z-10"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 2-Column Side-by-Side (2x2) Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-12 items-start">
          
          {/* ============================================================
              CARD 1: Academic Experience (B.Tech Biotechnology)
              ============================================================ */}
          <ScrollReveal delay={100} className="w-full">
            <div className="w-full">
              <div
                onClick={() => handleToggleCard('academic')}
                className={`glass-teal hover:shadow-[0_24px_80px_rgba(20,184,166,0.18)] transition-[border-color,box-shadow,background-color] duration-400 ease-out overflow-hidden cursor-pointer group flex flex-col justify-between ${
                  isAcademicExpanded ? 'ring-1 ring-[#14b8a6]/40 shadow-[0_20px_60px_rgba(20,184,166,0.12)]' : ''
                }`}
                style={{ borderRadius: '24px' }}
              >
                {/* Primary Compact Card Section */}
                <div className="p-8 lg:p-9 bg-[#fdfbf7]/[0.02] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-2xl glass bg-white/[0.03] border border-white/10 p-1 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500">
                        <img 
                          src="/Brainware logo.jpeg" 
                          alt="Brainware University" 
                          className="w-full h-full object-contain rounded-full"
                        />
                      </div>
                      <span className="section-label mb-0">Academic</span>
                    </div>
                    
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-[#fdfbf7] mb-2 leading-tight">
                      B.Tech Biotechnology
                    </h3>
                    
                    <p className="text-[#14b8a6] font-body font-bold text-xs tracking-[0.2em] uppercase mb-1">
                      Brainware University
                    </p>
                    
                    <p className="font-body text-[#fdfbf7]/50 text-sm mb-6">2024 – Present</p>
                  </div>

                  <div>
                    <Badge variant="teal" pulse>Currently Enrolled</Badge>

                    {/* Expand / Collapse Footer Cue */}
                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#fdfbf7]/50 group-hover:text-[#fdfbf7]/90 transition-colors">
                      <span className="font-body text-[11px] tracking-wider uppercase">
                        {isAcademicExpanded ? 'Active Details' : 'Core & Laboratory Focus'}
                      </span>
                      <span className="flex items-center gap-1 font-medium text-xs text-[#14b8a6]">
                        {isAcademicExpanded ? 'Collapse' : 'Expand'}
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isAcademicExpanded ? 'rotate-90' : 'group-hover:translate-x-1'
                        }`} />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Expanded Detailed Panel */}
                <AnimatePresence>
                  {isAcademicExpanded && (
                    <motion.div
                      key="academic-details"
                      variants={transitionVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      style={{ overflow: 'hidden' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="border-t border-[#fdfbf7]/10 p-8 lg:p-9 flex flex-col gap-6 bg-[#fdfbf7]/[0.01]">
                        {/* Core Focus */}
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <p className="font-body text-xs text-[#fdfbf7]/40 tracking-widest uppercase flex items-center gap-2">
                              <span>Core Focus</span>
                              <span className="h-[1px] w-12 bg-white/10" />
                            </p>
                            <span className="text-[11px] text-[#14b8a6] font-mono">Curriculum</span>
                          </div>
                          
                          <ul className="space-y-2.5">
                            {[
                              "Studying core Biotechnology and Life Sciences fundamentals",
                              "Building strong academic foundation in biological sciences",
                              "Participating in university activities and academic events",
                            ].map((point, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-[#fdfbf7]/80 text-xs font-body leading-relaxed bg-white/[0.015] p-2.5 rounded-xl border border-white/5">
                                <span className="text-[#14b8a6] mt-0.5 flex-shrink-0 text-[10px]">✦</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Laboratory Experience Sub-section */}
                        <div
                          className="rounded-2xl p-5 lg:p-6"
                          style={{
                            background: 'rgba(20,184,166,0.04)',
                            border: '1px solid rgba(20,184,166,0.12)',
                          }}
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2.5">
                              <div className="w-7 h-7 rounded-lg bg-[#14b8a6]/15 flex items-center justify-center text-xs border border-[#14b8a6]/20">
                                🔬
                              </div>
                              <p className="font-display font-bold text-[#fdfbf7]/95 text-base">
                                Laboratory Experience
                              </p>
                            </div>
                            <span className="text-[10px] font-mono text-[#14b8a6] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#14b8a6]/10 border border-[#14b8a6]/20">
                              Practical
                            </span>
                          </div>

                          <div className="space-y-4">
                            {/* Experimentation */}
                            <div className="space-y-2">
                              <p className="font-body text-[10px] text-[#14b8a6] tracking-[0.2em] uppercase font-bold opacity-90">
                                Experimentation
                              </p>
                              <ul className="space-y-1.5">
                                <li className="flex items-start gap-2 text-[#fdfbf7]/75 text-xs font-body leading-relaxed">
                                  <span className="text-[#14b8a6] mt-0.5 flex-shrink-0">•</span>
                                  <span>Executed microbiology, biochemistry, and cell biology experiments</span>
                                </li>
                                <li className="flex items-start gap-2 text-[#fdfbf7]/75 text-xs font-body leading-relaxed">
                                  <span className="text-[#14b8a6] mt-0.5 flex-shrink-0">•</span>
                                  <span>Followed standard laboratory protocols</span>
                                </li>
                              </ul>
                            </div>

                            {/* Equipment & Safety */}
                            <div className="space-y-2">
                              <p className="font-body text-[10px] text-[#14b8a6] tracking-[0.2em] uppercase font-bold opacity-90">
                                Equipment & Safety
                              </p>
                              <ul className="space-y-1.5">
                                <li className="flex items-start gap-2 text-[#fdfbf7]/75 text-xs font-body leading-relaxed">
                                  <span className="text-[#14b8a6] mt-0.5 flex-shrink-0">•</span>
                                  <span>Operated instruments including microscope, centrifuge, and micropipettes</span>
                                </li>
                                <li className="flex items-start gap-2 text-[#fdfbf7]/75 text-xs font-body leading-relaxed">
                                  <span className="text-[#14b8a6] mt-0.5 flex-shrink-0">•</span>
                                  <span>Followed laboratory safety guidelines and waste disposal procedures</span>
                                </li>
                              </ul>
                            </div>

                            {/* Documentation & Record-Keeping */}
                            <div className="space-y-2 pt-3 border-t border-[#fdfbf7]/10">
                              <p className="font-body text-[10px] text-[#14b8a6] tracking-[0.2em] uppercase font-bold opacity-90">
                                Documentation & Record-Keeping
                              </p>
                              <ul className="space-y-1.5">
                                <li className="flex items-start gap-2 text-[#fdfbf7]/75 text-xs font-body leading-relaxed">
                                  <span className="text-[#14b8a6] mt-0.5 flex-shrink-0">•</span>
                                  <span>
                                    Assisted in maintaining laboratory documentation and practical records for traceability and data accuracy
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>
          </ScrollReveal>

          {/* ============================================================
              CARD 2: Research & Training Experience (CSIR-IICB)
              ============================================================ */}
          <ScrollReveal delay={200} className="w-full">
            <div className="w-full">
              <div
                onClick={() => handleToggleCard('iicb')}
                className={`glass hover:shadow-[0_24px_80px_rgba(192,132,252,0.18)] transition-[border-color,box-shadow,background-color] duration-400 ease-out overflow-hidden cursor-pointer group flex flex-col justify-between border border-[#c084fc]/20 ${
                  isIicbExpanded ? 'ring-1 ring-[#c084fc]/50 shadow-[0_20px_60px_rgba(192,132,252,0.15)] bg-white/[0.04]' : ''
                }`}
                style={{ borderRadius: '24px' }}
              >
                {/* Primary Compact Card Section */}
                <div className="p-8 lg:p-9 bg-[#fdfbf7]/[0.02] flex flex-col justify-between">
                  <div>
                    {/* Logos and Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-2xl glass bg-white/[0.03] border border-white/10 group-hover:scale-105 transition-transform duration-500">
                        <img 
                          src="/csir-logo.svg" 
                          alt="CSIR Logo" 
                          className="h-7 w-auto object-contain brightness-95"
                          title="Council of Scientific & Industrial Research (CSIR)"
                        />
                        <div className="w-[1px] h-5 bg-white/15" />
                        <img 
                          src="/csir-iicb-logo.svg" 
                          alt="CSIR-IICB Logo" 
                          className="h-7 w-auto object-contain brightness-95"
                          title="CSIR - Indian Institute of Chemical Biology"
                        />
                      </div>
                      <span className="section-label mb-0 text-[#c084fc]">Research & Training</span>
                    </div>
                    
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-[#fdfbf7] mb-2 leading-tight">
                      Advanced BioInformatics Training
                    </h3>
                    
                    <p className="text-[#c084fc] font-body font-bold text-xs tracking-[0.2em] uppercase mb-1">
                      CSIR-IICB
                    </p>
                    
                    <p className="font-body text-[#fdfbf7]/50 text-sm mb-6">7 Sept – 18 Sept 2026</p>
                  </div>

                  <div>
                    {/* Compact Badges */}
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center gap-2">
                        <Badge variant="purple" pulse>Certificate Course</Badge>
                        <span className="font-mono text-[10px] text-[#fdfbf7]/40 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                          IICB-BIO
                        </span>
                      </div>
                      
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 border border-purple-500/30 self-start shadow-[0_0_12px_rgba(192,132,252,0.15)]">
                        <Award className="w-3 h-3 text-[#ff7eb3]" />
                        Selected Among 20 Candidates
                      </div>
                    </div>

                    {/* Expand / Collapse Footer Cue */}
                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#fdfbf7]/50 group-hover:text-[#fdfbf7]/90 transition-colors">
                      <span className="font-body text-[11px] tracking-wider uppercase">
                        {isIicbExpanded ? 'Active Details' : 'Syllabus & Certification'}
                      </span>
                      <span className="flex items-center gap-1 font-medium text-xs text-[#c084fc]">
                        {isIicbExpanded ? 'Collapse' : 'Expand'}
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isIicbExpanded ? 'rotate-90' : 'group-hover:translate-x-1'
                        }`} />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Expanded Detailed Panel */}
                <AnimatePresence>
                  {isIicbExpanded && (
                    <motion.div
                      key="iicb-details"
                      variants={transitionVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      style={{ overflow: 'hidden' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="border-t border-white/10 p-8 lg:p-9 flex flex-col gap-6 bg-[#fdfbf7]/[0.01]">
                        {/* Expanded Header Info */}
                        <div className="border-b border-white/10 pb-4">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                            <h4 className="font-display text-xl font-bold text-[#fdfbf7]">
                              Advanced BioInformatics Training
                            </h4>
                            <span className="text-[11px] font-mono text-[#c084fc] bg-[#c084fc]/10 px-2.5 py-0.5 rounded-full border border-[#c084fc]/20">
                              IICB-BIO
                            </span>
                          </div>
                          
                          <p className="text-xs text-[#fdfbf7]/70 font-body">
                            CSIR-Indian Institute of Chemical Biology (CSIR-IICB) · <span className="text-[#fdfbf7]/90 font-medium">Kolkata, India</span>
                          </p>
                          <p className="text-[11px] text-[#fdfbf7]/40 font-mono mt-1">
                            7 September 2026 – 18 September 2026 · Certificate Course
                          </p>
                        </div>

                        {/* National Selection Highlight */}
                        <div className="rounded-2xl p-4 bg-gradient-to-r from-purple-500/15 via-pink-500/10 to-transparent border border-purple-500/25 flex items-start gap-3.5 shadow-[0_4px_24px_rgba(192,132,252,0.08)]">
                          <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 text-purple-300 shadow-[0_0_15px_rgba(192,132,252,0.2)]">
                            <Award className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c084fc] mb-1">
                              National Selection
                            </p>
                            <p className="text-xs text-[#fdfbf7] font-medium leading-relaxed">
                              Shortlisted among <span className="text-[#ff7eb3] font-bold">20 candidates nationally</span> for CSIR-IICB's Skill Development Program on Advanced BioInformatics.
                            </p>
                          </div>
                        </div>

                        {/* Topics Covered */}
                        <div className="space-y-2.5">
                          <p className="font-body text-xs text-[#fdfbf7]/40 tracking-widest uppercase flex items-center gap-2">
                            <span>Topics Covered</span>
                            <span className="h-[1px] flex-1 bg-white/10" />
                          </p>
                          <ul className="space-y-1.5">
                            {[
                              "Sequence alignment & phylogenetic analysis",
                              "In-silico molecular modeling & drug designing",
                              "Computational genomics & gene prediction",
                              "Next-Generation sequencing data analysis",
                              "RNAseq & Metagenomic analysis",
                              "Molecular dynamics simulation",
                              "Statistical analysis using R",
                            ].map((topic, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-[#fdfbf7]/80 font-body leading-relaxed">
                                <span className="text-[#c084fc] mt-0.5 flex-shrink-0 text-[10px]">✦</span>
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Skills Gained */}
                        <div>
                          <p className="font-body text-xs text-[#fdfbf7]/40 tracking-widest uppercase mb-2.5 flex items-center gap-2">
                            <span>Skills Gained</span>
                            <span className="h-[1px] flex-1 bg-white/10" />
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {[
                              "Bioinformatics",
                              "Genomics",
                              "R",
                              "Drug Design",
                              "NGS Analysis",
                              "Molecular Modeling",
                            ].map((skill, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-white/[0.04] text-[#fdfbf7]/85 border border-white/10 hover:border-[#c084fc]/50 hover:text-[#c084fc] transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Certificate Area */}
                        <div className="rounded-2xl p-4 border border-dashed border-[#c084fc]/30 bg-[#c084fc]/[0.02] flex flex-col justify-between relative overflow-hidden">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#c084fc] uppercase">
                              Certificate
                            </span>
                            <span className="text-[10px] font-mono text-[#fdfbf7]/60 bg-white/5 px-2 py-0.5 rounded-full">
                              September 2026
                            </span>
                          </div>
                          
                          <p className="text-xs font-medium text-[#fdfbf7]/90 leading-relaxed my-1">
                            Certificate will be added after successful completion.
                          </p>

                          <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-[#fdfbf7]/40">
                            <span className="inline-flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                              Verification: IICB-BIO
                            </span>
                            <span className="text-[#c084fc]/70 font-mono">National SDP</span>
                          </div>
                        </div>

                        {/* Institute Links */}
                        <div className="rounded-2xl p-4 border border-white/10 bg-white/[0.02]">
                          <p className="text-[10px] font-bold tracking-[0.2em] text-[#fdfbf7]/40 uppercase mb-2.5 flex items-center justify-between">
                            <span>Institute</span>
                            <span className="text-[10px] font-mono text-[#fdfbf7]/30">Official Websites</span>
                          </p>
                          
                          <div className="grid grid-cols-2 gap-2">
                            <a
                              href="https://www.csir.res.in"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#c084fc]/40 hover:bg-[#c084fc]/[0.05] transition-all flex items-center justify-between group/link"
                            >
                              <div>
                                <p className="text-xs font-bold text-[#fdfbf7]">CSIR</p>
                                <p className="text-[10px] text-[#fdfbf7]/50 group-hover/link:text-[#c084fc] transition-colors">csir.res.in</p>
                              </div>
                              <ExternalLink className="w-3 h-3 text-[#fdfbf7]/40 group-hover/link:text-[#c084fc] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                            </a>

                            <a
                              href="https://www.csiriicb.res.in"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#c084fc]/40 hover:bg-[#c084fc]/[0.05] transition-all flex items-center justify-between group/link"
                            >
                              <div>
                                <p className="text-xs font-bold text-[#fdfbf7]">CSIR-IICB</p>
                                <p className="text-[10px] text-[#fdfbf7]/50 group-hover/link:text-[#c084fc] transition-colors">csiriicb.res.in</p>
                              </div>
                              <ExternalLink className="w-3 h-3 text-[#fdfbf7]/40 group-hover/link:text-[#c084fc] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                            </a>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Experience;
