import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Download, Award, Microscope, FlaskConical } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import useTilt from '../hooks/useTilt';

export default function CV() {
  const tiltRef = useTilt();
  const CV_PATH = '/cv.pdf';

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: CV Details & Information */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <ScrollReveal>
              {/* Small Label Badge */}
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ff7eb3]/30 bg-[#ff7eb3]/5 text-[#ff7eb3] text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
                <Award size={14} className="animate-pulse" />
                Professional Profile
              </span>

              {/* Large Title */}
              <h2 className="font-display text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-[#fdfbf7] leading-[1.1] mb-8">
                Curriculum <br className="hidden lg:block" />
                <span className="bg-gradient-to-r from-[#FAF6F0] via-[#FBCFE8] to-[#D8B4FE] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(216,180,254,0.15)]">
                  Vitae
                </span>
              </h2>

              {/* Academic Stats Pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] animate-pulse" />
                  <span className="text-sm font-medium text-white/90">Biotechnology Student</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff7eb3] animate-pulse" />
                  <span className="text-sm font-medium text-white/90">CGPA 8.1</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
                  <span className="text-sm font-medium text-white/90">Research Internship</span>
                </div>
              </div>

              {/* Short Description */}
              <p className="font-body text-white/70 text-lg leading-relaxed mb-10 max-w-xl">
                My curriculum vitae outlines my academic foundation in biotechnology, research experience, laboratory competencies, and computational skill sets. Designed for research institutions, MSc admissions, and scientific roles.
              </p>

              {/* Premium Interaction Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a 
                  href={CV_PATH} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-xl overflow-hidden font-display text-[11px] font-bold tracking-[0.2em] uppercase text-white transition-all duration-300 bg-white/[0.03] border border-white/[0.08] hover:border-[#ff7eb3]/40 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff7eb3]/10 to-[#7C3AED]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <Eye size={16} className="text-[#ff7eb3] group-hover:scale-110 transition-transform duration-300" />
                  <span>View CV</span>
                </a>
                
                <a 
                  href={CV_PATH} 
                  download="Shatarupa_Basak_CV.pdf"
                  className="group relative flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-xl overflow-hidden font-display text-[11px] font-bold tracking-[0.2em] uppercase text-white transition-all duration-300 bg-white/[0.03] border border-white/[0.08] hover:border-[#14b8a6]/40 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#14b8a6]/10 to-[#7C3AED]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <Download size={16} className="text-[#14b8a6] group-hover:scale-110 transition-transform duration-300" />
                  <span>Download CV</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Premium CV Preview Card */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <ScrollReveal delay={200}>
              <div className="relative w-full max-w-[380px] group">
                {/* Layered Ambient Glows behind Card */}
                <div className="absolute -inset-4 bg-[#7C3AED]/10 rounded-[40px] blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute -inset-4 bg-[#ff7eb3]/5 rounded-[40px] blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

                {/* Tiltable Premium Glass Card */}
                <motion.div
                  ref={tiltRef}
                  whileHover={{ scale: 1.02 }}
                  className="relative w-full bg-white/[0.02] backdrop-blur-[20px] rounded-[32px] border border-white/[0.08] hover:border-white/[0.15] shadow-2xl p-5 transition-all duration-500 overflow-hidden transform-gpu"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Subtle Inner Glow Highlight */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/5 via-transparent to-[#ff7eb3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  {/* CV Image Preview */}
                  <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] mb-5 aspect-[1/1.414] bg-black/40 shadow-inner">
                    <img 
                      src="/cv-image.png" 
                      alt="CV Preview" 
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Shadow overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0716]/80 via-[#0e0716]/10 to-transparent opacity-80 pointer-events-none" />
                    
                    {/* Holographic light sweep */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none" />
                  </div>

                  {/* Card Info Content */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-display text-lg font-bold text-[#fdfbf7] tracking-tight">
                          Shatarupa Basak
                        </h4>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-[#14b8a6] px-2 py-0.5 rounded bg-[#14b8a6]/10 border border-[#14b8a6]/20">
                          Academic
                        </span>
                      </div>
                      <p className="font-body text-[#FAF6F0]/70 text-[10px] tracking-wider uppercase">
                        B.Tech Biotechnology • 2028 Graduate
                      </p>
                    </div>

                    <div className="h-px bg-white/[0.08]" />

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <span className="font-body text-[9px] text-white/40 uppercase tracking-widest block">Institution</span>
                        <span className="font-display text-[13px] font-semibold text-white/90 leading-tight block">Brainware University</span>
                      </div>
                      <div className="space-y-1 text-right">
                        <span className="font-body text-[9px] text-white/40 uppercase tracking-widest block">Academic Score</span>
                        <span className="font-display text-[13px] font-bold text-[#14b8a6] block">CGPA 8.1</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
