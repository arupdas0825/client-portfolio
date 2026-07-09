import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import ThesisCoverCard from './ThesisCoverCard';
import {
  FileText,
  Download,
  Maximize2,
  X,
  Award,
  GraduationCap,
  Building2,
  Users,
  Clock
} from 'lucide-react';

const Research = () => {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const pdfUrl = "/internship thesis.pdf";

  const skills = [
    "Molecular Docking",
    "Drug Discovery",
    "Computational Chemistry",
    "Bioinformatics",
    "Research",
    "Scientific Writing"
  ];

  return (
    <LayoutGroup>
      <section className="py-24 relative overflow-hidden" id="research">
        {/* Background glow accents */}
        <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-[#7C3AED]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-[#ff7eb3]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">

          {/* Section Header */}
          <div className="text-center mb-14">
            <ScrollReveal>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#ff7eb3]/80 mb-2.5 block">
                SCIENTIFIC RESEARCH
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight tracking-tight relative mb-4">
                <span className="bg-gradient-to-r from-[#FAF6F0] via-[#FBCFE8] to-[#D8B4FE] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(216,180,254,0.15)]">
                  Research & Thesis
                </span>
              </h2>
              <p className="font-body text-white/70 text-base max-w-[700px] mx-auto leading-relaxed">
                A collection of research work, scientific reports, computational drug discovery studies and academic publications completed during my Biotechnology journey.
              </p>
            </ScrollReveal>
          </div>

          {/* Thesis Card + Future Publications — 2 column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

            {/* ===== Thesis Card ===== */}
            <ScrollReveal delay={100}>
              <motion.div
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.3 }}
                className="bg-white/[0.03] backdrop-blur-[20px] rounded-[28px] border border-white/[0.08] p-6 shadow-2xl relative overflow-hidden h-full flex flex-col"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#7C3AED] via-[#ff7eb3] to-emerald-500" />

                {/* Badges */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-bold uppercase tracking-wider border border-emerald-500/20">
                    Completed ✅
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#7C3AED]/15 text-[#D8B4FE] text-[9px] font-bold uppercase tracking-wider border border-[#7C3AED]/20">
                    Research Thesis
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#fdfbf7]/10 text-[#fdfbf7]/60 text-[9px] font-bold font-mono border border-[#fdfbf7]/10">
                    2026
                  </span>
                </div>

                {/* Cover + caption + actions (showcase block) */}
                <div className="flex flex-col items-center text-center">
                  <ThesisCoverCard onOpen={() => setIsPdfModalOpen(true)} />

                  <h4 className="mt-4 text-[13px] font-bold text-[#fdfbf7]/90 leading-snug max-w-[240px] truncate">
                    A Comprehensive In-Silico Study of Celecoxib...
                  </h4>
                  <p className="text-[9px] text-white/40 mt-1 font-mono uppercase tracking-wide">
                    Brainware University • 2026
                  </p>
                  <span className="inline-flex items-center gap-1 mt-2 px-2.5 py-1 rounded-full bg-[#ff7eb3]/10 border border-[#ff7eb3]/20 text-[#ff7eb3] text-[9px] font-bold font-mono uppercase tracking-wider">
                    <FileText size={10} /> PDF • 73 Pages
                  </span>

                  <div className="mt-4 flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                    <Award size={13} className="text-emerald-400 animate-pulse flex-shrink-0" />
                    <span className="text-[9px] font-bold text-emerald-400 tracking-wider uppercase">
                      Research Thesis Completed
                    </span>
                  </div>

                  {/* Action Buttons — fixed, no wrap */}
                  <div className="grid grid-cols-2 gap-2 w-full max-w-[280px] mx-auto mt-4">
                    <button
                      onClick={() => setIsPdfModalOpen(true)}
                      className="py-2.5 px-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500 hover:text-[#0B0618] hover:border-emerald-500 font-bold text-[9px] sm:text-[10px] tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-1 whitespace-nowrap"
                    >
                      <Maximize2 size={11} className="shrink-0" /> View Thesis
                    </button>

                    <a
                      href={pdfUrl}
                      download="Shatarupa_Research_Thesis.pdf"
                      className="py-2.5 px-2 rounded-xl bg-[#ff7eb3]/10 text-[#ff7eb3] border border-[#ff7eb3]/20 hover:bg-[#ff7eb3] hover:text-[#0B0618] hover:border-[#ff7eb3] font-bold text-[9px] sm:text-[10px] tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-1 whitespace-nowrap"
                    >
                      <Download size={11} className="shrink-0" /> Download
                    </a>
                  </div>
                </div>

                {/* Full details */}
                <div className="mt-6 pt-6 border-t border-white/5 text-left">
                  <h3 className="font-display text-lg font-bold text-[#fdfbf7] leading-tight mb-3 hover:text-[#ff7eb3] transition-colors">
                    A Comprehensive In-Silico Study of Celecoxib, a Non-Opioid Analgesic and Alternatives via Molecular Docking
                  </h3>

                  <div className="grid grid-cols-1 gap-y-1.5 mb-3 text-[11px] text-white/70">
                    <div className="flex items-center gap-2">
                      <GraduationCap size={13} className="text-[#ff7eb3] flex-shrink-0" />
                      <span><strong>Institution:</strong> Brainware University</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 size={13} className="text-emerald-400 flex-shrink-0" />
                      <span><strong>Industry Partner:</strong> Subhami Biopharma (OPC) Pvt. Ltd.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={13} className="text-[#D8B4FE] flex-shrink-0" />
                      <span><strong>Collaboration:</strong> Jadavpur University (Main Campus)</span>
                    </div>
                  </div>

                  <p className="text-white/60 text-xs leading-relaxed mb-4 font-body line-clamp-2">
                    This research thesis explores Celecoxib and potential non-opioid alternatives using computational drug discovery techniques. The work includes literature review, molecular docking, computational chemistry concepts and scientific analysis performed during the Summer Internship.
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {skills.map((skill, index) => (
                      <span key={index} className="px-2 py-0.5 rounded-md bg-white/[0.02] border border-white/5 text-white/50 text-[9px] font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* ===== Future Publications Card ===== */}
            <ScrollReveal delay={200}>
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-[28px] p-6 h-full flex flex-col items-center justify-center text-center backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-[#ff7eb3] to-[#7C3AED] opacity-40" />

                <div className="absolute top-5 right-5">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#ff7eb3]/10 border border-[#ff7eb3]/20 text-[8px] font-bold font-mono text-[#ff7eb3] tracking-widest uppercase">
                    Coming Soon
                  </span>
                </div>

                <div className="w-12 h-12 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center text-[#ff7eb3] mb-4">
                  <Clock size={18} />
                </div>

                <h4 className="font-display text-lg font-bold text-[#fdfbf7] mb-2">
                  Future Publications
                </h4>
                <p className="text-white/50 text-[11px] leading-relaxed max-w-[280px] mx-auto font-body mb-3">
                  Upcoming scientific literature submissions, pharmaceutical chemistry journal articles, and academic project expansions.
                </p>
                <p className="text-[#fdfbf7]/40 text-[10px] leading-relaxed max-w-[280px] mx-auto font-body">
                  Currently preparing findings on molecular dynamics and binding affinity calculations for target optimization.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>

        {/* Embedded PDF Viewer Modal — with shared-layout morph animation */}
        <AnimatePresence>
          {isPdfModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
              onClick={() => setIsPdfModalOpen(false)}
            >
              <motion.div
                layoutId="thesisCover"
                transition={{ type: "spring", stiffness: 220, damping: 28 }}
                className="relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08] backdrop-blur-[30px] rounded-[24px] w-full max-w-5xl h-[85vh] overflow-hidden shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/10 relative z-10 bg-black/20">
                  <div>
                    <h3 className="text-xs font-bold text-white flex items-center gap-2">
                      <FileText size={14} className="text-emerald-400" />
                      <span>Thesis Document Viewer</span>
                    </h3>
                    <p className="text-[9px] text-white/50 font-mono mt-0.5">Shatarupa_Research_Thesis.pdf • 73 Pages</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={pdfUrl}
                      download="Shatarupa_Research_Thesis.pdf"
                      className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 text-xs transition-colors flex items-center gap-1.5 font-bold"
                    >
                      <Download size={12} /> <span className="hidden sm:inline">Download</span>
                    </a>

                    <button
                      onClick={() => setIsPdfModalOpen(false)}
                      className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 flex items-center justify-center transition-all"
                    >
                      <X size={14} />
                    </button>
                  </div>
                </div>

                {/* Embedded Document Frame */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.3 }}
                  className="flex-1 bg-black/40 relative"
                >
                  <iframe
                    src={`${pdfUrl}#toolbar=0`}
                    className="w-full h-full border-0"
                    title="Research Thesis PDF Viewer"
                  />
                </motion.div>

                {/* Mobile Fallback Footer */}
                <div className="p-3 border-t border-white/5 text-center text-xs text-white/40 sm:hidden">
                  <span>PDF not rendering? </span>
                  <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-bold">
                    Open in New Tab
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </LayoutGroup>
  );
};

export default Research;
