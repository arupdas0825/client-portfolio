import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Download } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function CV() {
  const [isExpanded, setIsExpanded] = useState(true);
  const CV_PATH = '/cv.pdf';

  const fullDescription = "Comprehensive curriculum vitae highlighting academic achievements, biotechnology concepts, laboratory safety, research experience, experimental techniques, and professional accomplishments. Designed to present a complete overview of my educational background, practical experience, and professional development.";
  const shortDescription = "Comprehensive curriculum vitae highlighting academic achievements, biotechnology concepts, laboratory safety, research experience, experimental techniques, and professional accomplishments.";

  return (
    <section
      style={{ color: '#ffffff' }}
      className="relative w-full overflow-hidden py-32 px-6"
      id="cv"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#7C3AED]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-[#ff7eb3]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between">
          
          {/* Left Column: 55% Width */}
          <div className="w-full lg:w-[55%] flex flex-col items-start text-left">
            <ScrollReveal>
              {/* Small Label Badge */}
              <span className="text-xs font-bold tracking-[0.25em] text-[#c084fc] uppercase mb-4 block">
                ✦ PROFESSIONAL PROFILE ✦
              </span>

              {/* Large Title */}
              <h2 className="font-display text-5xl md:text-7xl lg:text-[80px] font-black tracking-tight leading-[0.95] text-[#fdfbf7] mb-8">
                Curriculum <br />
                <span className="bg-gradient-to-r from-[#7C3AED] via-[#c084fc] to-[#14b8a6] bg-clip-text text-transparent">
                  Vitae
                </span>
              </h2>

              {/* Academic Stats Pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 text-xs font-semibold tracking-wider text-white/80 rounded-full border border-white/[0.08] bg-white/[0.02] shadow-sm">
                  Biotechnology Student
                </span>
                <span className="px-4 py-2 text-xs font-semibold tracking-wider text-white/80 rounded-full border border-white/[0.08] bg-white/[0.02] shadow-sm">
                  Research Internship
                </span>
                <span className="px-4 py-2 text-xs font-semibold tracking-wider text-white/80 rounded-full border border-white/[0.08] bg-white/[0.02] shadow-sm">
                  2028 Graduate
                </span>
              </div>

              {/* Short Description */}
              <p className="font-body text-white/70 text-base md:text-lg leading-relaxed max-w-xl">
                View or download my latest CV to explore my academic background, research experience, laboratory competencies, and computational skill sets.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column: 45% Width */}
          <div className="w-full lg:w-[45%] flex justify-center items-center">
            <ScrollReveal delay={200}>
              <div className="w-full flex justify-center">
                <div className="relative w-full max-w-[420px] group">
                  {/* Layered Ambient Glows behind Card */}
                  <div className="absolute -inset-4 bg-[#7C3AED]/10 rounded-[40px] blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute -inset-4 bg-[#ff7eb3]/5 rounded-[40px] blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

                  {/* Premium Glass Card (Static, No Tilt, translateY on Hover) */}
                  <div
                    className="relative w-full bg-[#150a26]/80 backdrop-blur-[20px] rounded-[32px] border border-white/[0.08] hover:border-white/[0.15] shadow-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-5px]"
                  >
                    {/* Subtle Inner Glow Highlight */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/5 via-transparent to-[#ff7eb3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    {/* CV Image Preview with gradient fade-out */}
                    <div className="relative w-full h-[240px] bg-white flex items-center justify-center overflow-hidden border-b border-white/[0.08]">
                      <img 
                        src="/cv-image.png" 
                        alt="CV Preview" 
                        width={480}
                        height={240}
                        loading="lazy"
                        className="w-full h-full object-cover object-top"
                      />
                      {/* Fade to dark overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#150a26] via-[#150a26]/40 to-transparent pointer-events-none" />
                      
                      {/* Flag and UPDATED badge at top right */}
                      <div className="absolute top-4 right-4 flex items-center gap-2">
                        {/* Custom EU Flag graphic representation */}
                        <div className="w-6 h-4 bg-[#003399] flex flex-wrap items-center justify-center p-0.5 rounded-sm overflow-hidden shadow-sm">
                          <div className="grid grid-cols-3 gap-0.5 w-full h-full">
                            {[...Array(9)].map((_, i) => (
                              <span key={i} className="w-0.5 h-0.5 bg-[#FFCC00] rounded-full mx-auto my-auto block" />
                            ))}
                          </div>
                        </div>
                        {/* Updated pill */}
                        <div className="px-2.5 py-1 rounded-full bg-white/95 text-slate-800 text-[8px] font-black tracking-widest uppercase shadow-md flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-[#14b8a6] animate-pulse" />
                          Updated
                        </div>
                      </div>
                    </div>

                    {/* Card Info Content (Footer) */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h4 className="font-display text-xl font-bold text-[#fdfbf7] tracking-tight">
                          Brainware University
                        </h4>
                        <p className="font-body text-[#FAF6F0]/70 text-[11px] tracking-wider uppercase mt-1">
                          Biotechnology • 2028 Graduate
                        </p>
                      </div>

                      {/* Expandable Description Section */}
                      <div className="space-y-2">
                        <p className="font-body text-[#FAF6F0]/70 text-[11.5px] leading-relaxed transition-all duration-300">
                          {isExpanded ? fullDescription : shortDescription}
                        </p>

                        <button 
                          onClick={() => setIsExpanded(!isExpanded)}
                          aria-label={isExpanded ? 'Show less information' : 'Show more information'}
                          className="text-[10px] font-black tracking-widest uppercase text-[#7C3AED] hover:text-[#c084fc] transition-colors mt-1 block focus-visible:ring-2 focus-visible:ring-[#ff7eb3] focus-visible:outline-none rounded"
                        >
                          {isExpanded ? 'SHOW LESS' : 'SHOW MORE'}
                        </button>
                      </div>

                      <div className="h-px bg-white/[0.08]" />

                      {/* VIEW CV & DOWNLOAD buttons side-by-side inside card */}
                      <div className="flex items-center gap-3 pt-2">
                        <a 
                          href={CV_PATH} 
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View CV in a new tab"
                          className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#6366f1] text-[#fdfbf7] text-[11px] font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/20 focus-visible:ring-2 focus-visible:ring-[#ff7eb3] focus-visible:outline-none btn-sheen"
                        >
                          <Eye size={14} />
                          <span>View CV</span>
                        </a>
                        
                        <a 
                          href={CV_PATH} 
                          download="Shatarupa_Basak_CV.pdf"
                          aria-label="Download Shatarupa's CV as PDF"
                          className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.15] bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/[0.25] text-[#fdfbf7] text-[11px] font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#ff7eb3] focus-visible:outline-none btn-sheen"
                        >
                          <Download size={14} />
                          <span>Download</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
