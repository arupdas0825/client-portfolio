import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Award, ChevronRight, FlaskConical, Microscope, X, Download, Maximize2, ShieldCheck } from 'lucide-react';
import { HiEye } from 'react-icons/hi';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

// Smooth easing curves for expandable accordion
const transitionVariants = {
  initial: { height: 0, opacity: 0 },
  animate: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
      opacity: { duration: 0.3, delay: 0.05, ease: 'easeOut' },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      opacity: { duration: 0.15, ease: 'easeIn' },
      height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
    },
  },
};

const Experience = () => {
  const [activeCard, setActiveCard] = useState(null); // 'academic' | 'iicb' | null
  const [csirMedia, setCsirMedia] = useState('campus'); // 'campus' | 'certificate'
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);

  const handleToggleCard = (id) => {
    setActiveCard((curr) => (curr === id ? null : id));
  };

  const isAcademicExpanded = activeCard === 'academic';
  const isIicbExpanded = activeCard === 'iicb';

  // Handle escape key for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsCertificateModalOpen(false);
    };
    if (isCertificateModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isCertificateModalOpen]);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <SectionHeader 
        eyebrow="RESEARCH & WORK" 
        title="Experience" 
        subtitle="Hands-on laboratory work, national training programs, and academic excellence in the life sciences." 
        className="max-w-7xl mx-auto px-6 relative z-10"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 2-Column Side-by-Side Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 items-start">
          
          {/* ============================================================
              CARD 1: Academic Experience (Brainware University)
              ============================================================ */}
          <ScrollReveal delay={100} className="w-full">
            <div className="w-full">
              <div
                className={`group relative flex flex-col bg-[#140a28]/85 backdrop-blur-2xl rounded-2xl border transition-all duration-300 overflow-hidden shadow-xl ${
                  isAcademicExpanded 
                    ? 'border-[#14b8a6]/60 shadow-[0_20px_60px_rgba(20,184,166,0.18)]' 
                    : 'border-white/[0.08] hover:border-[#14b8a6]/40'
                }`}
              >
                {/* Subtle Ambient Glow */}
                <div className="absolute -top-24 -left-24 w-60 h-60 bg-[#14b8a6]/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#14b8a6]/15 transition-all duration-500" />

                {/* Visual Header Banner (h-48) */}
                <div className="relative h-48 w-full overflow-hidden bg-black/60">
                  <img 
                    src="/Brainware image.jpg" 
                    alt="Brainware University Campus" 
                    width={560}
                    height={240}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100" 
                  />

                  {/* Gradient Mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140a28] via-[#140a28]/30 to-black/30 pointer-events-none" />

                  {/* Floating Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 pointer-events-none">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-black/80 border border-white/20 p-0.5 flex items-center justify-center overflow-hidden backdrop-blur-md shadow-md">
                        <img 
                          src="/Brainware logo.jpeg" 
                          alt="Brainware University Logo" 
                          className="w-full h-full object-contain rounded-full"
                        />
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/80 text-[#14b8a6] border border-[#14b8a6]/40 backdrop-blur-md flex items-center gap-1.5 shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] animate-pulse" />
                        Currently Enrolled
                      </span>
                    </div>

                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider bg-black/80 text-white/80 border border-white/15 backdrop-blur-md font-mono">
                      2024 – Present
                    </span>
                  </div>

                  {/* Bottom Subject Pill */}
                  <div className="absolute bottom-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-black/75 text-white/90 border border-white/15 backdrop-blur-md flex items-center gap-1.5">
                      <Microscope size={13} className="text-[#14b8a6]" /> B.Tech Biotechnology
                    </span>
                  </div>
                </div>

                {/* Primary Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between relative z-20">
                  <div>
                    {/* Institution & Period */}
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-[#14b8a6] font-bold uppercase tracking-[0.2em] text-[11px]">
                        Brainware University • Kolkata
                      </span>
                      <span className="text-white/40 font-mono text-[11px]">
                        Undergraduate Program
                      </span>
                    </div>

                    <h3 className="font-display text-xl lg:text-2xl font-bold text-white mb-2 leading-snug group-hover:text-[#ff7eb3] transition-colors">
                      B.Tech in Biotechnology
                    </h3>

                    <p className="font-body text-white/70 text-xs leading-relaxed mb-4">
                      Building a solid theoretical and empirical foundation across molecular biology, genetics, biochemistry, and microbiology with hands-on laboratory experimentation.
                    </p>

                    {/* Laboratory Experience Spotlight Box (Always Visible) */}
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] mb-4 backdrop-blur-md">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[#14b8a6] text-[10px] font-mono tracking-wider font-bold uppercase flex items-center gap-1.5">
                          <FlaskConical size={13} /> Practical Laboratory Focus
                        </span>
                        <span className="text-[10px] font-mono text-white/40">Lab Protocols</span>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-white/80">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6]" />
                          <span>Microbiology & Cell Biology</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6]" />
                          <span>Centrifuge & Micropipettes</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6]" />
                          <span>Standard Safety Procedures</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6]" />
                          <span>Accurate Record Documentation</span>
                        </div>
                      </div>
                    </div>

                    {/* Competency Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {["Biotechnology", "Microbiology", "Biochemistry", "Cell Biology", "Lab Safety"].map((tag, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-lg text-[10px] font-medium bg-white/[0.03] border border-white/[0.07] text-white/70">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Expand / Collapse Action */}
                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => handleToggleCard('academic')}
                      className="w-full py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-[#14b8a6]/10 text-white/80 hover:text-[#14b8a6] border border-white/[0.08] hover:border-[#14b8a6]/40 text-xs font-semibold flex items-center justify-between transition-all active:scale-95"
                    >
                      <span>{isAcademicExpanded ? 'Hide Detailed Coursework' : 'View Full Curriculum & Lab Protocols'}</span>
                      <ChevronRight className={`w-4 h-4 text-[#14b8a6] transition-transform duration-300 ${isAcademicExpanded ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                    </button>
                  </div>
                </div>

                {/* Expandable Accordion Panel */}
                <AnimatePresence>
                  {isAcademicExpanded && (
                    <motion.div
                      variants={transitionVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="border-t border-white/10 p-6 bg-black/40"
                    >
                      <div className="flex flex-col gap-4">
                        <div>
                          <p className="text-[10px] font-mono tracking-widest text-[#14b8a6] uppercase font-bold mb-2">
                            ACADEMIC FOUNDATION
                          </p>
                          <ul className="space-y-1.5 text-xs text-white/75">
                            <li className="flex items-start gap-2">
                              <span className="text-[#14b8a6] mt-0.5">•</span>
                              <span>In-depth study of molecular genetics, industrial microbiology, and biochemical pathways.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#14b8a6] mt-0.5">•</span>
                              <span>Active participation in university biotechnology symposia and academic workshops.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#14b8a6] mt-0.5">•</span>
                              <span>Strong analytical foundation in data interpretation and biological statistics.</span>
                            </li>
                          </ul>
                        </div>

                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                          <p className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-bold mb-2">
                            LABORATORY SAFETY & INSTRUMENTATION
                          </p>
                          <ul className="space-y-1.5 text-xs text-white/70">
                            <li className="flex items-start gap-2">
                              <span className="text-emerald-400 mt-0.5">•</span>
                              <span>Trained in standard aseptic techniques, autoclave operation, and biohazard waste containment.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-emerald-400 mt-0.5">•</span>
                              <span>Routine optical microscopy, spectrophotometric assays, and calibrated micropipette handling.</span>
                            </li>
                          </ul>
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
                className={`group relative flex flex-col bg-[#140a28]/85 backdrop-blur-2xl rounded-2xl border transition-all duration-300 overflow-hidden shadow-xl ${
                  isIicbExpanded 
                    ? 'border-[#c084fc]/60 shadow-[0_20px_60px_rgba(192,132,252,0.18)]' 
                    : 'border-[#c084fc]/30 hover:border-[#c084fc]/60'
                }`}
              >
                {/* Subtle Ambient Glow */}
                <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#7C3AED]/15 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#c084fc]/20 transition-all duration-500" />

                {/* Visual Media Banner (h-48) with Interactive Switcher */}
                <div className="relative h-48 w-full overflow-hidden bg-black/60">
                  <img 
                    src={csirMedia === 'campus' ? "/csir image.png" : "/csir certificate.jpg"} 
                    alt={csirMedia === 'campus' ? "CSIR-IICB Institute" : "CSIR-IICB Certificate"} 
                    width={560}
                    height={240}
                    loading="lazy"
                    onClick={() => setIsCertificateModalOpen(true)}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-100 cursor-pointer" 
                  />

                  {/* Gradient Mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140a28] via-[#140a28]/30 to-black/30 pointer-events-none" />

                  {/* Floating Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 pointer-events-none">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/85 border border-white/20 backdrop-blur-md shadow-md">
                      <img 
                        src="/csir-logo.svg" 
                        alt="CSIR Logo" 
                        className="h-5 w-auto object-contain brightness-95" 
                      />
                      <div className="w-[1px] h-3.5 bg-white/20" />
                      <img 
                        src="/csir-iicb-logo.svg" 
                        alt="CSIR-IICB Logo" 
                        className="h-5 w-auto object-contain brightness-95" 
                      />
                    </div>

                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/85 text-[#ff7eb3] border border-[#ff7eb3]/40 backdrop-blur-md flex items-center gap-1.5 shadow-md">
                      <Award size={12} className="text-[#ff7eb3]" /> Top 20 Nationally
                    </span>
                  </div>

                  {/* Media Switcher Tab on bottom */}
                  <div 
                    className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between p-1 bg-black/80 backdrop-blur-md rounded-xl border border-white/10 z-20"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      type="button"
                      onClick={() => setCsirMedia('campus')}
                      className={`flex-1 py-1 rounded-lg text-[10px] font-bold tracking-wider uppercase transition-all ${
                        csirMedia === 'campus' 
                          ? 'bg-[#7C3AED]/30 text-[#D8B4FE] border border-[#7C3AED]/40 shadow-sm' 
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      🏛️ CSIR-IICB
                    </button>
                    <button
                      type="button"
                      onClick={() => setCsirMedia('certificate')}
                      className={`flex-1 py-1 rounded-lg text-[10px] font-bold tracking-wider uppercase transition-all ${
                        csirMedia === 'certificate' 
                          ? 'bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 shadow-sm' 
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      📜 Certificate
                    </button>
                  </div>
                </div>

                {/* Primary Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between relative z-20">
                  <div>
                    {/* Organization & Code */}
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-[#c084fc] font-bold uppercase tracking-[0.2em] text-[11px]">
                        CSIR-IICB • Kolkata
                      </span>
                      <span className="text-[10px] font-mono text-[#c084fc] bg-[#c084fc]/15 px-2 py-0.5 rounded-full border border-[#c084fc]/25">
                        Code: IICB-BIO
                      </span>
                    </div>

                    <h3 className="font-display text-xl lg:text-2xl font-bold text-white mb-2 leading-snug group-hover:text-[#ff7eb3] transition-colors">
                      Advanced BioInformatics Training
                    </h3>

                    {/* National Selection Highlight Box (Always Visible) */}
                    <div className="p-3.5 rounded-xl bg-gradient-to-r from-purple-500/15 via-pink-500/10 to-transparent border border-purple-500/30 mb-4 shadow-[0_4px_20px_rgba(192,132,252,0.1)]">
                      <div className="flex items-center gap-2 mb-1">
                        <Award size={14} className="text-[#ff7eb3]" />
                        <span className="text-[#c084fc] text-[10px] font-mono tracking-wider font-bold uppercase">
                          National Selection Milestone
                        </span>
                      </div>
                      <p className="text-white text-xs font-semibold leading-relaxed">
                        Shortlisted among only <span className="text-[#ff7eb3] font-bold">20 candidates nationally</span> for CSIR-IICB's certified Skill Development Program.
                      </p>
                    </div>

                    {/* Core Modules List */}
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] mb-4 backdrop-blur-md">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[#c084fc] text-[10px] font-mono tracking-wider font-bold uppercase flex items-center gap-1.5">
                          <FlaskConical size={13} /> Curriculum & Technical Topics
                        </span>
                        <span className="text-[10px] font-mono text-white/40">7–18 Sept 2026</span>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-white/80">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c084fc]" />
                          <span>Sequence Alignment & Phylogeny</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c084fc]" />
                          <span>In-Silico Molecular Modeling & CADD</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c084fc]" />
                          <span>NGS Pipelines & RNAseq Analysis</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c084fc]" />
                          <span>Molecular Dynamics & R Stats</span>
                        </div>
                      </div>
                    </div>

                    {/* Competency Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {["Bioinformatics", "Genomics", "NGS Pipelines", "Molecular Modeling", "R Stats"].map((tag, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-lg text-[10px] font-medium bg-white/[0.03] border border-white/[0.07] text-white/70">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleToggleCard('iicb')}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-white/[0.04] hover:bg-[#c084fc]/10 text-white/80 hover:text-[#c084fc] border border-white/[0.08] hover:border-[#c084fc]/40 text-xs font-semibold flex items-center justify-between transition-all active:scale-95"
                    >
                      <span>{isIicbExpanded ? 'Hide Detailed Syllabus' : 'View Full Syllabus & Links'}</span>
                      <ChevronRight className={`w-4 h-4 text-[#c084fc] transition-transform duration-300 ${isIicbExpanded ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsCertificateModalOpen(true)}
                      className="py-2.5 px-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1.5 transition-all active:scale-95"
                      title="Inspect CSIR Certificate"
                    >
                      <HiEye className="text-sm" /> Certificate
                    </button>
                  </div>
                </div>

                {/* Expandable Accordion Panel */}
                <AnimatePresence>
                  {isIicbExpanded && (
                    <motion.div
                      variants={transitionVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="border-t border-white/10 p-6 bg-black/40"
                    >
                      <div className="flex flex-col gap-4">
                        <div>
                          <p className="text-[10px] font-mono tracking-widest text-[#c084fc] uppercase font-bold mb-2">
                            PROGRAM MODULES & HANDS-ON TRAINING
                          </p>
                          <ul className="space-y-1.5 text-xs text-white/75">
                            {[
                              "Sequence alignment & phylogenetic tree construction",
                              "In-silico molecular modeling & drug designing workflows",
                              "Computational genomics & gene prediction algorithms",
                              "Next-Generation Sequencing (NGS) data processing",
                              "RNAseq & Metagenomic analysis pipelines",
                              "Molecular dynamics simulation analysis & trajectory evaluation",
                              "Statistical data computation and visualization in R",
                            ].map((mod, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-[#c084fc] mt-0.5">•</span>
                                <span>{mod}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Official Links */}
                        <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
                          <a
                            href="https://www.csir.res.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#c084fc]/50 hover:bg-[#c084fc]/10 text-xs text-white flex items-center justify-between transition-all"
                          >
                            <div>
                              <p className="font-bold text-[11px]">CSIR Portal</p>
                              <p className="text-[9px] text-white/50">csir.res.in</p>
                            </div>
                            <ExternalLink size={12} className="text-[#c084fc]" />
                          </a>

                          <a
                            href="https://www.csiriicb.res.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#c084fc]/50 hover:bg-[#c084fc]/10 text-xs text-white flex items-center justify-between transition-all"
                          >
                            <div>
                              <p className="font-bold text-[11px]">CSIR-IICB</p>
                              <p className="text-[9px] text-white/50">csiriicb.res.in</p>
                            </div>
                            <ExternalLink size={12} className="text-[#c084fc]" />
                          </a>
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

      {/* CSIR Certificate Lightbox Modal */}
      <AnimatePresence>
        {isCertificateModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setIsCertificateModalOpen(false)}
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsCertificateModalOpen(false)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-50 border border-white/20 shadow-xl focus:outline-none"
              aria-label="Close modal"
            >
              <X size={22} />
            </button>
            
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 15 }}
              transition={{ type: "spring", duration: 0.35 }}
              className="relative max-w-4xl w-full max-h-[88vh] bg-[#140a28] border border-white/15 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(192,132,252,0.3)] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="px-5 py-3.5 border-b border-white/10 bg-[#0B0618]/90 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#c084fc]">
                    CSIR-Indian Institute of Chemical Biology
                  </span>
                  <span className="text-white/20">•</span>
                  <span className="text-xs text-white/50 font-mono">
                    Code: IICB-BIO/05
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/20 text-purple-200 border border-purple-500/40">
                    Verified
                  </span>
                </div>

                <a 
                  href="/csir certificate.jpg"
                  download="Shatarupa_CSIR_IICB_Certificate.jpg"
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#c084fc] hover:text-white transition-colors"
                >
                  <Download size={13} /> Download Certificate
                </a>
              </div>

              {/* Certificate Image View */}
              <div className="flex-1 overflow-auto p-4 bg-black/60 flex items-center justify-center min-h-[260px]">
                <img 
                  src="/csir certificate.jpg" 
                  alt="Verified CSIR-IICB Certificate" 
                  className="max-w-full max-h-[62vh] object-contain rounded-lg shadow-xl border border-white/10"
                />
              </div>

              {/* Modal Footer */}
              <div className="px-5 py-4 border-t border-white/10 bg-[#0B0618]/95">
                <h4 className="text-base font-bold text-white mb-1 font-display">
                  Skill Development Program on Advanced BioInformatics (Code-IICB-BIO)
                </h4>
                <p className="text-xs text-white/70 font-body leading-relaxed">
                  Issued by CSIR-Indian Institute of Chemical Biology (CSIR-IICB), Kolkata · 05 to 18 September 2026.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
