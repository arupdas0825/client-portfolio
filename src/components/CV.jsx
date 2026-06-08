import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiDownload, HiEye, HiX, HiBadgeCheck, HiOfficeBuilding, HiCalendar, HiExternalLink } from 'react-icons/hi'
import ScrollReveal from './ScrollReveal'

export default function CV() {
  const [modalOpen, setModalOpen] = useState(false)

  // Resolves to /cv.pdf in production and dev (file must be in /public/cv.pdf)
  const CV_PATH = '/cv.pdf'

  // Lock body scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalOpen]);

  return (
    <section
      style={{ color: '#ffffff' }}
      className="relative w-full overflow-hidden py-32 px-6"
      id="cv"
    >

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 md:mb-32">
          <ScrollReveal>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#ff7eb3]/80 mb-3 block">
              PROFESSIONAL DOSSIER
            </span>
            <h2 className="font-display text-[40px] md:text-[52px] lg:text-[64px] font-bold leading-tight tracking-tight relative mb-6">
              <span className="bg-gradient-to-r from-[#FAF6F0] via-[#FBCFE8] to-[#D8B4FE] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(216,180,254,0.15)]">
                Curriculum Vitae
              </span>
            </h2>
            <p className="font-body text-white/75 text-lg max-w-[700px] mx-auto leading-relaxed text-center">
              A comprehensive overview of my academic achievements, technical skills, and research journey.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={200}>
          <div className="relative group max-w-4xl mx-auto w-full">
            {/* Animated Glow Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff7eb3] via-[#7C3AED] to-[#ff7eb3] rounded-[40px] blur-sm opacity-20 group-hover:opacity-40 transition duration-1000 animate-gradient-x" />
            
            <div className="relative w-full bg-gradient-to-br from-[#1C0D38]/50 to-[#0B0618]/90 backdrop-blur-3xl p-12 md:p-20 rounded-[39px] border border-[#2A1350]/50 flex flex-col items-center text-center gap-10">
               {/* Center Badge */}
               <div className="w-24 h-24 rounded-3xl glass-teal flex items-center justify-center text-[#14b8a6] shadow-2xl border border-[#fdfbf7]/10 mb-2">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
               </div>

               <div className="flex flex-col items-center max-w-2xl">
                 <h3 className="font-display text-4xl md:text-6xl font-bold text-[#fdfbf7] mb-6 tracking-tight">
                   Shatarupa Basak
                 </h3>
                 
                 <div className="flex flex-wrap gap-4 justify-center mb-10">
                   <span className="px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] rounded-xl bg-[#fdfbf7]/5 border border-[#fdfbf7]/10 text-[#fdfbf7]/60">Biotechnology</span>
                   <span className="px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] rounded-xl bg-[#fdfbf7]/5 border border-[#fdfbf7]/10 text-[#fdfbf7]/60">Research Scholar</span>
                 </div>
               </div>

               {/* Interaction Buttons */}
               <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                 <a 
                   href={CV_PATH} 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="group relative flex items-center justify-center gap-3 font-display font-bold text-[11px] uppercase tracking-[0.3em] w-full sm:w-auto px-12 py-6 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 bg-[#ff7eb3] text-black shadow-[0_20px_50px_rgba(255, 126, 179,0.3)]"
                 >
                   <HiExternalLink className="text-xl" />
                   Original Source
                 </a>
                 
                 <a 
                   href={CV_PATH} 
                   download="Shatarupa_Basak_CV.pdf" 
                   className="group relative flex items-center justify-center gap-3 font-display font-bold text-[11px] uppercase tracking-[0.3em] w-full sm:w-auto px-12 py-6 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 glass-teal text-[#fdfbf7] border border-[#fdfbf7]/20 hover:bg-[#fdfbf7]/10 shadow-xl"
                 >
                   <HiDownload className="text-xl" />
                   Download CV
                 </a>
               </div>
               
               <p className="font-body text-[10px] text-[#fdfbf7]/20 mt-4 tracking-[0.4em] uppercase">
                 Latest Update: May 2024 • PDF format
               </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
