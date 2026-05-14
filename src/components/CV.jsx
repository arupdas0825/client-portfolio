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
      style={{ backgroundColor: '#1a0a2e', color: '#ffffff' }}
      className="relative w-full overflow-hidden py-32 px-6"
      id="cv"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#c084fc]/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#f9a8d4]/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <HiBadgeCheck className="text-[#f9a8d4] text-lg" />
              <span className="text-[#f9a8d4] font-bold text-[10px] tracking-[0.4em] uppercase">Professional</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Curriculum <br />
              <span className="bg-gradient-to-r from-[#f9a8d4] via-[#c084fc] to-[#f9a8d4] bg-clip-text text-transparent">
                Vitae
              </span>
            </h2>
            <p className="font-body text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
              A comprehensive overview of my academic achievements, technical skills, and research journey.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={200}>
          <div className="relative group max-w-4xl mx-auto w-full">
            {/* Animated Glow Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f9a8d4] via-[#c084fc] to-[#f9a8d4] rounded-[40px] blur-sm opacity-20 group-hover:opacity-40 transition duration-1000 animate-gradient-x" />
            
            <div className="relative w-full bg-[#0a0514]/60 backdrop-blur-3xl p-12 md:p-20 rounded-[39px] border border-white/10 flex flex-col items-center text-center gap-10">
               {/* Center Badge */}
               <div className="w-24 h-24 rounded-3xl glass-lavender flex items-center justify-center text-[#c084fc] shadow-2xl border border-white/10 mb-2">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
               </div>

               <div className="flex flex-col items-center max-w-2xl">
                 <h3 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                   Shatarupa Basak
                 </h3>
                 
                 <div className="flex flex-wrap gap-4 justify-center mb-10">
                   <span className="px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] rounded-xl bg-white/5 border border-white/10 text-white/60">Biotechnology</span>
                   <span className="px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] rounded-xl bg-white/5 border border-white/10 text-white/60">Research Scholar</span>
                 </div>
               </div>

               {/* Interaction Buttons */}
               <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                 <button 
                   onClick={() => setModalOpen(true)} 
                   className="group relative flex items-center justify-center gap-3 font-display font-bold text-[11px] uppercase tracking-[0.3em] w-full sm:w-auto px-12 py-6 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 bg-[#f9a8d4] text-black shadow-[0_20px_50px_rgba(249,168,212,0.3)]"
                 >
                   <HiEye className="text-xl" />
                   Full View
                 </button>
                 
                 <a 
                   href={CV_PATH} 
                   download="Shatarupa_Basak_CV.pdf" 
                   className="group relative flex items-center justify-center gap-3 font-display font-bold text-[11px] uppercase tracking-[0.3em] w-full sm:w-auto px-12 py-6 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 glass-lavender text-white border border-white/20 hover:bg-white/10 shadow-xl"
                 >
                   <HiDownload className="text-xl" />
                   Download CV
                 </a>
               </div>
               
               <p className="font-body text-[10px] text-white/20 mt-4 tracking-[0.4em] uppercase">
                 Latest Update: May 2024 • PDF format
               </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Immersive CV Preview Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100000] flex flex-col bg-[#05020a]/98 backdrop-blur-[40px]"
          >
            {/* Immersive Header with Exit Controls */}
            <div className="relative z-[100002] flex items-center justify-between px-6 py-6 md:px-12 md:py-8 bg-gradient-to-b from-black/90 to-transparent shrink-0">
              <div className="space-y-1">
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="font-display text-xl md:text-3xl font-bold text-white tracking-tight leading-tight"
                >
                  Professional Resume
                </motion.h3>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex items-center gap-2 text-[#c084fc] font-bold text-[10px] md:text-xs uppercase tracking-[0.3em]">
                    Shatarupa Basak
                  </div>
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <div className="text-white/40 text-[10px] md:text-xs font-medium tracking-widest uppercase">
                    Curriculum Vitae
                  </div>
                </motion.div>
              </div>

              {/* Prominent Back Button */}
              <button
                onClick={() => {
                  if (window.history.state?.modal === 'preview') window.history.back();
                  setModalOpen(false);
                }}
                className="flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/20 active:scale-95 shadow-2xl backdrop-blur-xl group"
              >
                <span className="font-display text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity">
                  Back to Portfolio
                </span>
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-[#f9a8d4] group-hover:text-black transition-all">
                  <HiX size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                </div>
              </button>
            </div>

            {/* Cinematic Content Area */}
            <div 
              className="flex-1 relative flex items-center justify-center p-4 md:p-12 overflow-hidden z-[100001]"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  if (window.history.state?.modal === 'preview') window.history.back();
                  setModalOpen(false);
                }
              }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="relative w-full h-full max-w-5xl flex items-center justify-center"
              >
                {/* Background Ambience */}
                <div className="absolute -inset-40 bg-[#c084fc]/15 blur-[150px] rounded-full opacity-20 pointer-events-none" />

                <div className="relative w-full h-full rounded-2xl md:rounded-[40px] overflow-hidden bg-white/5 border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
                  {/* Iframe Toolbar Mask - Covers native PDF toolbar */}
                  <div className="absolute top-0 left-0 w-full h-14 bg-[#05020a] z-20 pointer-events-none border-b border-white/5" />
                  
                  <iframe
                    src={`${CV_PATH}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    className="w-full h-[calc(100%+56px)] -mt-14 relative z-10"
                    style={{ border: 'none' }}
                    title="Shatarupa Basak CV"
                  />

                  {/* Loading State Overlay */}
                  <div className="absolute inset-0 z-[-1] flex flex-col items-center justify-center gap-4 bg-[#05020a]/40">
                    <div className="w-12 h-12 border-4 border-[#c084fc]/20 border-t-[#f9a8d4] rounded-full animate-spin shadow-[0_0_20px_rgba(249,168,212,0.2)]" />
                    <p className="font-display text-[10px] text-white/20 uppercase tracking-[0.4em] animate-pulse">Initializing Document</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Action Button */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[100003] flex items-center gap-4"
              >
                <a
                  href={CV_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-10 py-5 rounded-full glass-pink text-[11px] font-bold text-[#f9a8d4] hover:scale-110 active:scale-95 transition-all shadow-2xl border border-[#f9a8d4]/40"
                >
                  <HiExternalLink className="text-xl" />
                  OPEN IN NEW TAB
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
