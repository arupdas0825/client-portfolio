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
  Clock,
  BookOpen,
  ArrowDown
} from 'lucide-react';

const Research = () => {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const pdfUrl = "/research thesis.pdf";

  const timelineSteps = [
    { label: "Research Started", desc: "Objective formulation and targeting COX-2 receptors", date: "June 3, 2026" },
    { label: "Literature Review", desc: "Analgesic pathways & Celecoxib pharmacology review", date: "Mid-June 2026" },
    { label: "Computational Study", desc: "Molecular docking & dynamics simulation workflows", date: "Late-June 2026" },
    { label: "Internship Completion", desc: "Report preparation & verification at Subhami Biopharma", date: "July 7, 2026" },
    { label: "Final Thesis Submitted", desc: "Submission of the final scientific analysis document", date: "July 8, 2026" }
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
    <section className="py-32 relative overflow-hidden" id="research">
      {/* Background glow accents matching the luxury theme */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-[#7C3AED]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-[#ff7eb3]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-28">
          <ScrollReveal>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#ff7eb3]/80 mb-3 block">
              SCIENTIFIC RESEARCH
            </span>
            <h2 className="font-display text-[40px] md:text-[52px] lg:text-[64px] font-bold leading-tight tracking-tight relative mb-6">
              <span className="bg-gradient-to-r from-[#FAF6F0] via-[#FBCFE8] to-[#D8B4FE] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(216,180,254,0.15)]">
                Research & Thesis
              </span>
            </h2>
            <p className="font-body text-white/75 text-lg max-w-[750px] mx-auto leading-relaxed">
              A collection of research work, scientific reports, computational drug discovery studies and academic publications completed during my Biotechnology journey.
            </p>
          </ScrollReveal>
        </div>

        {/* Featured Research Card */}
        <div className="mb-24">
          <ScrollReveal delay={100}>
            <motion.div 
              whileHover={{ y: -6, scale: 1.005 }}
              transition={{ duration: 0.3 }}
              className="bg-white/[0.03] backdrop-blur-[20px] rounded-[32px] border border-white/[0.08] p-6 md:p-10 shadow-2xl relative overflow-hidden"
            >
              {/* Top Accent Gradient */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#7C3AED] via-[#ff7eb3] to-emerald-500" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                
                {/* Left Column: Thesis Info (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                        Completed
                      </span>
                      <span className="px-4 py-1.5 rounded-full bg-[#7C3AED]/15 text-[#D8B4FE] text-[10px] font-bold uppercase tracking-[0.2em] border border-[#7C3AED]/20">
                        Research Thesis
                      </span>
                      <span className="px-4 py-1.5 rounded-full bg-[#fdfbf7]/10 text-[#fdfbf7]/60 text-[10px] font-bold font-mono border border-[#fdfbf7]/10">
                        2026
                      </span>
                    </div>

                    {/* Thesis Title */}
                    <h3 className="font-display text-2xl md:text-3xl lg:text-[34px] font-bold text-[#fdfbf7] leading-tight mb-6 hover:text-[#ff7eb3] transition-colors">
                      A Comprehensive In-Silico Study of Celecoxib, a Non-Opioid Analgesic and Alternatives via Molecular Docking
                    </h3>

                    {/* Partners Metadata */}
                    <div className="space-y-4 mb-6 text-sm">
                      <div className="flex items-center gap-3 text-white/80">
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#ff7eb3]">
                          <GraduationCap size={16} />
                        </div>
                        <span><strong>Institution:</strong> Brainware University</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/80">
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
                          <Building2 size={16} />
                        </div>
                        <span><strong>Industry Partner:</strong> Subhami Biopharma (OPC) Pvt. Ltd.</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/80">
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#D8B4FE]">
                          <Users size={16} />
                        </div>
                        <span><strong>Collaboration:</strong> Jadavpur University (Main Campus)</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/60 text-sm leading-relaxed mb-6 font-body">
                      This research thesis explores Celecoxib and potential non-opioid alternatives using computational drug discovery techniques. The work includes literature review, molecular docking, computational chemistry concepts and scientific analysis performed during the Summer Internship.
                    </p>
                  </div>

                  {/* Skills & Badges */}
                  <div>
                    <span className="text-white/30 text-[9px] font-mono tracking-widest uppercase block mb-3 font-semibold">// Research Competencies</span>
                    <div className="flex flex-wrap gap-2 mb-6 lg:mb-0">
                      {skills.map((skill, index) => (
                        <span key={index} className="px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/10 text-white/70 text-xs font-mono">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: PDF Preview & Buttons (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between bg-white/[0.01] border border-white/[0.04] rounded-2xl p-6 relative">
                  
                  {/* PDF Preview Card */}
                  <div className="flex-1 flex flex-col justify-center items-center py-6 text-center">
                    <div className="w-20 h-20 rounded-2xl bg-[#ff7eb3]/10 border border-[#ff7eb3]/20 flex items-center justify-center text-[#ff7eb3] mb-4 shadow-[0_0_30px_rgba(255,126,179,0.15)]">
                      <FileText size={42} />
                    </div>
                    
                    <h4 className="text-sm font-bold text-white/90 max-w-[280px] line-clamp-2 leading-snug mb-1">
                      A Comprehensive In-Silico Study of Celecoxib...
                    </h4>
                    <p className="text-xs text-white/50 mb-1">Brainware University • 2026</p>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-[9px] font-bold font-mono text-white/40 tracking-wider uppercase border border-white/5">
                      PDF Document • 32 Pages
                    </span>
                  </div>

                  {/* Achievement Badge */}
                  <div className="my-6 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center gap-3">
                    <Award size={18} className="text-emerald-400 flex-shrink-0 animate-pulse" />
                    <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">
                      Research Thesis Completed
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button 
                      onClick={() => setIsPdfModalOpen(true)}
                      className="w-full py-4 px-6 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500 hover:text-[#0B0618] hover:border-[#10B981] font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.1)] flex items-center justify-center gap-2"
                    >
                      <Maximize2 size={14} /> View Thesis
                    </button>
                    
                    <a 
                      href={pdfUrl}
                      download="Shatarupa_Research_Thesis.pdf"
                      className="w-full py-4 px-6 rounded-xl bg-[#ff7eb3]/10 text-[#ff7eb3] border border-[#ff7eb3]/20 hover:bg-[#ff7eb3] hover:text-[#0B0618] hover:border-[#ff7eb3] font-bold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Download size={14} /> Download PDF
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Research Timeline */}
        <div className="mb-28">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ff7eb3]/60 block mb-2 font-mono">// WORKFLOW PROGRESSION</span>
              <h3 className="font-display text-2xl font-bold text-white">Research Milestones Timeline</h3>
            </div>
            
            {/* Timeline Layout */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 relative max-w-5xl mx-auto">
              
              {/* Connector Horizontal line for Desktop */}
              <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-emerald-500 via-[#ff7eb3] to-[#7C3AED] z-0 opacity-30" />

              {timelineSteps.map((step, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                  {/* Step number / Indicator */}
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center border-2 mb-4 bg-[#0B0618] transition-all duration-300 ${
                    idx === 4 
                      ? 'border-emerald-500 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                      : idx === 0
                      ? 'border-[#ff7eb3] text-[#ff7eb3] shadow-[0_0_20px_rgba(255,126,179,0.15)]'
                      : 'border-white/20 text-white/50'
                  }`}>
                    {idx === 4 ? (
                      <CheckCircle2 size={20} />
                    ) : (
                      <span className="font-mono text-sm font-bold">0{idx + 1}</span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h4 className="text-sm font-bold text-white mb-1">{step.label}</h4>
                  <p className="text-[11px] text-white/40 leading-relaxed font-body max-w-[160px] mx-auto mb-1">
                    {step.desc}
                  </p>
                  <span className="text-[9px] font-mono text-white/30 uppercase tracking-wider">{step.date}</span>

                  {/* Vertical connector line for Mobile (shown except on last item) */}
                  {idx < 4 && (
                    <div className="md:hidden w-[1px] h-8 bg-gradient-to-b from-white/20 to-white/0 my-2" />
                  )}
                </div>
              ))}

            </div>
          </ScrollReveal>
        </div>

        {/* Future Publications Section */}
        <div>
          <ScrollReveal>
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-[#fdfbf7]">Future Publications</h3>
              <p className="font-body text-white/50 text-sm max-w-[600px] mx-auto mt-2">
                Upcoming scientific literature submissions, pharmaceutical chemistry journal articles, and academic project expansions.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-[24px] p-6 text-center backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-[#ff7eb3]/10 border border-[#ff7eb3]/20 text-[9px] font-bold font-mono text-[#ff7eb3] tracking-widest uppercase">
                    Coming Soon
                  </span>
                </div>
                
                <div className="w-12 h-12 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center text-[#ff7eb3] mx-auto mb-4">
                  <Clock size={20} className="animate-spin-slow" />
                </div>
                
                <h4 className="text-white/80 text-sm font-bold mb-2">Expansion & Publication Phase</h4>
                <p className="text-[#fdfbf7]/40 text-xs leading-relaxed max-w-[450px] mx-auto font-body">
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
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08] backdrop-blur-[30px] rounded-[24px] w-full max-w-5xl h-[85vh] overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-5 border-b border-white/10 relative z-10 bg-black/20">
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <FileText size={16} className="text-emerald-400" />
                    <span>Thesis Document Viewer</span>
                  </h3>
                  <p className="text-[10px] text-white/50 font-mono mt-0.5">Shatarupa_Research_Thesis.pdf</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <a 
                    href={pdfUrl}
                    download="Shatarupa_Research_Thesis.pdf"
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 text-xs transition-colors flex items-center gap-1.5 font-bold"
                  >
                    <Download size={14} /> <span className="hidden sm:inline">Download</span>
                  </a>
                  
                  <button 
                    onClick={() => setIsPdfModalOpen(false)}
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 flex items-center justify-center transition-all"
                  >
                    <X size={16} />
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
              <div className="p-4 border-t border-white/5 text-center text-xs text-white/40 sm:hidden">
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
