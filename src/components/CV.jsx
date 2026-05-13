import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiDownload, HiEye, HiX } from 'react-icons/hi'
import ScrollReveal from './ScrollReveal'

export default function CV() {
  const [modalOpen, setModalOpen] = useState(false)

  // Resolves to /cv.pdf in production and dev (file must be in /public/cv.pdf)
  const CV_PATH = '/cv.pdf'

  return (
    <section
      style={{ backgroundColor: '#1a0a2e', color: '#ffffff' }}
      className="relative w-full overflow-hidden py-24 px-4 md:px-12"
    >
      {/* Background blobs */}
      <div
        className="blob animate-blob absolute w-80 h-80 bg-[#c084fc] -top-20 left-1/4 pointer-events-none"
        style={{ zIndex: 0, opacity: 0.12 }}
      />
      <div
        className="blob animate-blob absolute w-64 h-64 bg-[#f9a8d4] bottom-10 right-10 pointer-events-none"
        style={{ zIndex: 0, opacity: 0.1, animationDelay: '3s' }}
      />

      <div className="relative z-10 max-w-lg mx-auto text-center">
        <ScrollReveal>
          <p className="section-label">✦ Resume</p>
          <h2 className="font-display text-5xl font-bold text-white mb-4">My CV</h2>
          <p className="font-body text-white/50 text-base mb-12">
            Download or preview my resume to learn more about my academic and creative journey.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="relative p-[1px] overflow-hidden group max-w-4xl mx-auto w-full" style={{ borderRadius: '24px' }}>
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#f9a8d4]/30 via-transparent to-[#c084fc]/30 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative w-full bg-[#1a0a2e]/80 backdrop-blur-2xl p-8 sm:p-10 md:p-12 flex flex-col items-center text-center gap-6" style={{ borderRadius: '23px' }}>
               
               {/* Ambient Glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-r from-[#c084fc] to-[#f9a8d4] blur-[120px] opacity-[0.04] pointer-events-none" />

               {/* Top: Small Badge */}
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9a8d4]/30 bg-[#f9a8d4]/10 text-[#f9a8d4] text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(249,168,212,0.2)]">
                 <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#f9a8d4] animate-pulse" />
                 Professional Resume
               </div>

               {/* Tiny floating document icon in background */}
               <div className="absolute top-8 right-12 opacity-20 hidden md:block">
                  <div className="w-16 h-20 border border-[#c084fc]/30 rounded-lg bg-[#c084fc]/5 shadow-[0_0_30px_rgba(192,132,252,0.2)] animate-float2">
                     <div className="w-1/2 h-1 bg-[#c084fc]/40 mt-4 ml-3 rounded" />
                     <div className="w-3/4 h-1 bg-white/20 mt-2 ml-3 rounded" />
                     <div className="w-2/3 h-1 bg-white/20 mt-2 ml-3 rounded" />
                  </div>
               </div>
               <div className="absolute bottom-10 left-12 opacity-20 hidden md:block">
                  <div className="w-12 h-12 border border-[#f9a8d4]/30 rounded-full bg-[#f9a8d4]/5 shadow-[0_0_30px_rgba(249,168,212,0.2)] animate-float3 flex items-center justify-center">
                     <div className="w-4 h-4 rounded-full border border-[#f9a8d4]/40" />
                  </div>
               </div>

               {/* Middle: Title & Subtitle */}
               <div className="flex flex-col items-center max-w-2xl relative z-10">
                 <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight break-words w-full">
                   Shatarupa Basak
                 </h3>
                 
                 <p className="font-body text-white/60 text-sm md:text-base mb-6 leading-relaxed">
                   A comprehensive overview of my academic achievements, technical skills, certifications, and professional journey.
                 </p>
                 
                 {/* Chips */}
                 <div className="flex flex-wrap gap-2 justify-center mb-8 w-full">
                   <span className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20 transition-colors">Biotechnology</span>
                   <span className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20 transition-colors">Content Creator</span>
                   <span className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[#c084fc]/10 border border-[#c084fc]/20 text-[#c084fc] hover:bg-[#c084fc]/20 transition-colors">Academic Portfolio</span>
                 </div>
               </div>

               {/* Bottom: Buttons */}
               <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative z-10">
                 <button 
                   onClick={() => setModalOpen(true)} 
                   className="group relative flex items-center justify-center gap-2 font-body font-bold text-sm tracking-wide w-full sm:w-auto px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03]" 
                   style={{ background: 'rgba(249,168,212,0.1)', border: '1px solid rgba(249,168,212,0.4)', color: '#f9a8d4', boxShadow: '0 0 20px rgba(249,168,212,0.1)' }}
                 >
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f9a8d4]/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />
                   <HiEye className="text-xl" />
                   View Document
                 </button>
                 
                 <a 
                   href={CV_PATH} 
                   download="Shatarupa_Basak_CV.pdf" 
                   className="group relative flex items-center justify-center gap-2 font-body font-bold text-sm tracking-wide w-full sm:w-auto px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03]" 
                   style={{ background: 'rgba(192,132,252,0.1)', border: '1px solid rgba(192,132,252,0.4)', color: '#c084fc', boxShadow: '0 0 20px rgba(192,132,252,0.1)' }}
                 >
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c084fc]/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />
                   <HiDownload className="text-xl" />
                   Download PDF
                 </a>
               </div>
               
               <p className="font-body text-xs text-white/30 mt-4 flex items-center justify-center gap-2 text-center w-full relative z-10">
                 Having trouble viewing? 
                 <a href={CV_PATH} target="_blank" rel="noopener noreferrer" className="underline hover:text-white/80 transition-colors text-[#c084fc] hover:text-[#f9a8d4] whitespace-nowrap">
                   Open in new tab ↗
                 </a>
               </p>

            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* CV Preview Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            style={{
              backgroundColor: 'rgba(10, 5, 20, 0.95)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="w-full max-w-4xl flex flex-col overflow-hidden"
              style={{
                height: '90vh',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(192,132,252,0.2)',
                borderRadius: '20px',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div
                className="flex items-center justify-between px-6 py-4 flex-shrink-0"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
              >
                <h4 className="font-display text-lg font-semibold text-white">
                  Shatarupa Basak — CV
                </h4>
                <div className="flex items-center gap-3">
                  {/* Open in new tab button */}
                  <a
                    href={CV_PATH}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-xs text-white/40 hover:text-white/80 transition-colors px-3 py-1 rounded-full"
                    style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    Open in new tab ↗
                  </a>
                  {/* Close button */}
                  <button
                    onClick={() => setModalOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-full text-white/60 hover:text-white hover:scale-110 transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <HiX className="text-lg" />
                  </button>
                </div>
              </div>

              {/* PDF iframe — the fix */}
              <div className="flex-1 relative">
                <iframe
                  src={`${CV_PATH}#toolbar=1&navpanes=0&scrollbar=1`}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 'none', borderRadius: '0 0 20px 20px' }}
                  title="Shatarupa Basak CV"
                  // Fallback for browsers that block PDF iframe
                  onError={() => {
                    console.warn('PDF iframe failed to load')
                  }}
                />
                {/* Visible fallback layer behind iframe */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 pointer-events-none"
                  style={{ zIndex: -1 }}
                >
                  <p className="font-body text-white/30 text-sm">Loading PDF...</p>
                  <p className="font-body text-xs text-white/20">
                    If PDF doesn't load, use the "Open in new tab" button above
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
