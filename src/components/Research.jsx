import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { 
  FileText, 
  Download, 
  Maximize2, 
  X, 
  Award, 
  FlaskConical, 
  GraduationCap, 
  Building2, 
  Users, 
  CheckCircle2, 
  Calendar,
  Clock
} from 'lucide-react';

const Research = () => {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const pdfUrl = "/research thesis.pdf";

  const timelineSteps = [
    { label: "Research Started", desc: "COX-2 receptors targeting formulation", date: "June 3, 2026" },
    { label: "Literature Review", desc: "Celecoxib pharmacology analysis", date: "Mid-June 2026" },
    { label: "Computational Study", desc: "Molecular docking simulation workflows", date: "Late-June 2026" },
    { label: "Internship Completion", desc: "Report compiled under academic guide", date: "July 7, 2026" },
    { label: "Final Thesis Submitted", desc: "Submitted scientific analysis report", date: "July 8, 2026" }
  ];

  const skills = [
    "Molecular Docking",
    "Drug Discovery",
    "Computational Chemistry",
    "Bioinformatics",
    "Research",
    "Scientific Writing"
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="research">
      {/* Background glow accents matching the luxury theme */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-[#7C3AED]/05 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-[#ff7eb3]/05 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
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

        {/* Featured Research Card - Compact, Academic layout */}
        <div className="mb-20">
          <ScrollReveal delay={100}>
            <motion.div 
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.3 }}
              className="bg-white/[0.03] backdrop-blur-[20px] rounded-[32px] border border-white/[0.08] p-6 md:p-8 shadow-2xl relative overflow-hidden max-w-[1100px] mx-auto"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#7C3AED] via-[#ff7eb3] to-emerald-500" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
                {/* Left Side: Thesis Metadata & Description (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-wider border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                        Completed ✅
                      </span>
                      <span className="px-3.5 py-1.5 rounded-full bg-[#7C3AED]/15 text-[#D8B4FE] text-[10px] font-bold uppercase tracking-wider border border-[#7C3AED]/20">
                        Research Thesis
                      </span>
                      <span className="px-3.5 py-1.5 rounded-full bg-[#fdfbf7]/10 text-[#fdfbf7]/60 text-[10px] font-bold font-mono border border-[#fdfbf7]/10">
                        2026
                      </span>
                    </div>

                    {/* Thesis Title */}
                    <h3 className="font-display text-xl md:text-2xl font-bold text-[#fdfbf7] leading-tight mb-4 hover:text-[#ff7eb3] transition-colors">
                      A Comprehensive In-Silico Study of Celecoxib, a Non-Opioid Analgesic and Alternatives via Molecular Docking
                    </h3>

                    {/* Academic Metadata */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-4 text-xs text-white/70">
                      <div className="flex items-center gap-2">
                        <GraduationCap size={14} className="text-[#ff7eb3] flex-shrink-0" />
                        <span><strong>Institution:</strong> Brainware University</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 size={14} className="text-emerald-400 flex-shrink-0" />
                        <span><strong>Industry Partner:</strong> Subhami Biopharma (OPC) Pvt. Ltd.</span>
                      </div>
                      <div className="flex items-center gap-2 sm:col-span-2">
                        <Users size={14} className="text-[#D8B4FE] flex-shrink-0" />
                        <span><strong>Collaboration:</strong> Jadavpur University (Main Campus)</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-5 font-body line-clamp-3">
                      This research thesis explores Celecoxib and potential non-opioid alternatives using computational drug discovery techniques. The work includes literature review, molecular docking, computational chemistry concepts and scientific analysis performed during the Summer Internship.
                    </p>
                  </div>

                  {/* Skills tags */}
                  <div className="mt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {skills.map((skill, index) => (
                        <span key={index} className="px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/5 text-white/50 text-[10px] font-mono">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side: Document Preview & Compact Actions (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between bg-white/[0.01] border border-white/[0.04] rounded-2xl p-5">
                  
                  {/* Small Academic Document Card */}
                  <div className="bg-white/[0.02] border border-white/10 rounded-xl p-3 flex items-start gap-3 hover:border-[#ff7eb3]/20 transition-all duration-300">
                    <div className="w-10 h-12 rounded bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 flex-shrink-0">
                      <FileText size={20} />
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="text-[11px] font-bold text-white/90 truncate leading-tight">
                        A Comprehensive In-Silico Study of Celecoxib...
                      </h4>
                      <p className="text-[9px] text-white/40 mt-0.5">Brainware University • 2026</p>
                      <span className="inline-block px-1.5 py-0.5 rounded bg-white/5 text-[8px] font-bold font-mono text-white/30 border border-white/5 mt-1 uppercase tracking-wider">
                        PDF • 32 Pages
                      </span>
                    </div>
                  </div>

                  {/* Achievement Badge */}
                  <div className="my-4 flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                    <Award size={14} className="text-emerald-400 animate-pulse flex-shrink-0" />
                    <span className="text-[9px] font-bold text-emerald-400 tracking-wider uppercase">
                      Research Thesis Completed
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <button 
                      onClick={() => setIsPdfModalOpen(true)}
                      className="py-2.5 px-4 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500 hover:text-[#0B0618] hover:border-[#10B981] font-bold text-[10px] tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-1.5"
                    >
                      <Maximize2 size={12} /> View Thesis
                    </button>
                    
                    <a 
                      href={pdfUrl}
                      download="Shatarupa_Research_Thesis.pdf"
                      className="py-2.5 px-4 rounded-xl bg-[#ff7eb3]/10 text-[#ff7eb3] border border-[#ff7eb3]/20 hover:bg-[#ff7eb3] hover:text-[#0B0618] hover:border-[#ff7eb3] font-bold text-[10px] tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-1.5"
                    >
                      <Download size={12} /> Download PDF
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Research Timeline */}
        <div className="mb-20">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#ff7eb3]/60 block mb-1.5 font-mono">// WORKFLOW PROGRESSION</span>
              <h3 className="font-display text-xl font-bold text-white">Research Milestones Timeline</h3>
            </div>
            
            {/* Timeline Steps layout */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 relative max-w-4xl mx-auto">
              
              {/* Connector Line for Desktop */}
              <div className="hidden md:block absolute top-[24px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-emerald-500 via-[#ff7eb3] to-[#7C3AED] z-0 opacity-20" />

              {timelineSteps.map((step, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                  {/* Step number / Indicator */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 mb-3 bg-[#0B0618] transition-all duration-300 ${
                    idx === 4 
                      ? 'border-emerald-500 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                      : idx === 0
                      ? 'border-[#ff7eb3] text-[#ff7eb3] shadow-[0_0_15px_rgba(255,126,179,0.12)]'
                      : 'border-white/10 text-white/40'
                  }`}>
                    {idx === 4 ? (
                      <CheckCircle2 size={16} />
                    ) : (
                      <span className="font-mono text-xs font-bold">0{idx + 1}</span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h4 className="text-xs font-bold text-white mb-0.5">{step.label}</h4>
                  <p className="text-[10px] text-white/45 leading-relaxed font-body max-w-[150px] mx-auto mb-0.5">
                    {step.desc}
                  </p>
                  <span className="text-[8px] font-mono text-white/30 uppercase tracking-wider">{step.date}</span>

                  {/* Vertical line for mobile */}
                  {idx < 4 && (
                    <div className="md:hidden w-[1px] h-6 bg-gradient-to-b from-white/10 to-white/0 my-1" />
                  )}
                </div>
              ))}

            </div>
          </ScrollReveal>
        </div>

        {/* Future Publications Section */}
        <div>
          <ScrollReveal>
            <div className="text-center mb-6">
              <h3 className="font-display text-xl font-bold text-[#fdfbf7]">Future Publications</h3>
              <p className="font-body text-white/50 text-xs max-w-[500px] mx-auto mt-1.5">
                Upcoming scientific literature submissions, pharmaceutical chemistry journal articles, and academic project expansions.
              </p>
            </div>
            
            <div className="max-w-xl mx-auto">
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-[24px] p-5 text-center backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#ff7eb3]/10 border border-[#ff7eb3]/20 text-[8px] font-bold font-mono text-[#ff7eb3] tracking-widest uppercase">
                    Coming Soon
                  </span>
                </div>
                
                <div className="w-10 h-10 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center text-[#ff7eb3] mx-auto mb-3">
                  <Clock size={16} />
                </div>
                
                <h4 className="text-white/80 text-xs font-bold mb-1">Expansion & Publication Phase</h4>
                <p className="text-[#fdfbf7]/40 text-[11px] leading-relaxed max-w-[400px] mx-auto font-body">
                  More research papers and publications will be added here in the future. Currently preparing findings on molecular dynamics and binding affinity calculations for target optimization.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>

      {/* Embedded PDF Viewer Modal */}
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
              initial={{ scale: 0.98, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.98, y: 15 }}
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
                  <p className="text-[9px] text-white/50 font-mono mt-0.5">Shatarupa_Research_Thesis.pdf</p>
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
              <div className="flex-1 bg-black/40 relative">
                <iframe 
                  src={`${pdfUrl}#toolbar=0`} 
                  className="w-full h-full border-0"
                  title="Research Thesis PDF Viewer"
                />
              </div>

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
  );
};

export default Research;
