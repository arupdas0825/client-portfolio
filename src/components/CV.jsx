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
          <div
            className="glass-lavender p-10 flex flex-col items-center gap-8 animate-float2"
            style={{ borderRadius: '20px' }}
          >
            {/* Document preview icon */}
            <div
              className="w-24 h-28 flex items-center justify-center rounded-2xl text-5xl animate-float3"
              style={{
                background: 'rgba(192,132,252,0.1)',
                border: '1px solid rgba(192,132,252,0.2)',
              }}
            >
              📄
            </div>

            <div className="text-center">
              <h3 className="font-display text-2xl font-bold text-white mb-1">
                Shatarupa Basak
              </h3>
              <p
                className="font-body text-sm tracking-widest uppercase"
                style={{ color: '#c084fc' }}
              >
                B.Tech Biotechnology · Content Creator
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              {/* View CV button - now opens modal */}
              <button
                onClick={() => setModalOpen(true)}
                className="flex-1 flex items-center justify-center gap-2 font-body font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 px-6 py-4 rounded-full cursor-pointer"
                style={{
                  background: 'rgba(249,168,212,0.08)',
                  border: '1px solid rgba(249,168,212,0.3)',
                  color: '#f9a8d4',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(249,168,212,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <HiEye className="text-lg" />
                View CV
              </button>

              {/* Download CV button */}
              <a
                href={CV_PATH}
                download="Shatarupa_Basak_CV.pdf"
                className="flex-1 flex items-center justify-center gap-2 font-body font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 px-6 py-4 rounded-full"
                style={{
                  background: 'rgba(192,132,252,0.08)',
                  border: '1px solid rgba(192,132,252,0.3)',
                  color: '#c084fc',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(192,132,252,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <HiDownload className="text-lg" />
                Download CV
              </a>
            </div>

            {/* Fallback direct link — always visible */}
            <p className="font-body text-xs text-white/30">
              Can't see the preview?{' '}
              <a
                href={CV_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white/60 transition-colors"
                style={{ color: '#c084fc' }}
              >
                Open PDF in new tab ↗
              </a>
            </p>
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
