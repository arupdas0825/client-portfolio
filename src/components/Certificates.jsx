import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiExternalLink, HiEye, HiX } from 'react-icons/hi'
import ScrollReveal from './ScrollReveal'

const seminarCerts = [
  { 
    id: 1, 
    title: "Seminar Certificate 1", 
    issuer: "Brainware University", 
    year: "2024", 
    emoji: "📜",
    image: "/seminar1.jpg"
  },
  { 
    id: 2, 
    title: "Seminar Certificate 2", 
    issuer: "Brainware University", 
    year: "2024", 
    emoji: "📜",
    image: "/seminar2.jpg"
  },
  { 
    id: 3, 
    title: "Seminar Certificate 3", 
    issuer: "Department of Biotechnology", 
    year: "2024", 
    emoji: "📜",
    image: "/seminar1.jpg" 
  },
]

const achievements = [
  { id: 1, title: "Achievement Coming Soon", issuer: "", year: "", emoji: "📜", image: null },
]

// Modal Component for Certificate Preview
function CertificateModal({ isOpen, onClose, certificate }) {
  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!certificate) return null

  const isPDF = certificate.image?.toLowerCase().endsWith('.pdf')

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          style={{
            backgroundColor: 'rgba(10, 5, 20, 0.9)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col glass-lavender overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
              <div>
                <h3 className="font-display text-lg font-bold text-white leading-tight">
                  {certificate.title}
                </h3>
                <p className="text-xs text-white/50">{certificate.issuer} • {certificate.year}</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass-pink text-xs font-semibold text-[#f9a8d4] hover:scale-105 transition-all"
                >
                  <HiExternalLink className="text-base" />
                  Full View
                </a>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all border border-white/10"
                >
                  <HiX className="text-xl" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-auto bg-black/20 p-4 md:p-8 flex items-center justify-center min-h-[300px]">
              {isPDF ? (
                <iframe
                  src={`${certificate.image}#toolbar=0`}
                  className="w-full h-full min-h-[60vh] rounded-lg shadow-inner"
                  title={certificate.title}
                />
              ) : (
                <div className="group relative overflow-hidden rounded-lg shadow-2xl">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="max-w-full max-h-[70vh] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Subtle zoom hint */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              )}
            </div>
            
            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-white/10 bg-white/5 text-center">
              <p className="text-[10px] text-white/30 uppercase tracking-widest font-body font-medium">
                Shatarupa Basak • Portfolio Recognition
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Certificates() {
  const [activeTab, setActiveTab] = useState('seminars')
  const [previewCert, setPreviewCert] = useState(null)

  return (
    <section
      style={{ backgroundColor: '#1a0a2e', color: '#ffffff' }}
      className="relative w-full overflow-hidden py-24 px-4 md:px-12"
      id="certificates"
    >
      {/* Background blobs */}
      <div
        className="blob animate-blob absolute w-96 h-96 bg-[#c084fc]/10 -top-32 -right-32 pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div
        className="blob animate-blob absolute w-72 h-72 bg-[#f9a8d4]/10 bottom-0 left-0 pointer-events-none"
        style={{ zIndex: 0, animationDelay: '4s' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="section-label">✦ Recognition</p>
            <h2 className="font-display text-5xl font-bold text-white">
              Certificates & Achievements
            </h2>
            <p className="font-body text-white/50 mt-4 text-base max-w-2xl mx-auto">
              A collection of academic milestones, certifications, and specialized training in Biotechnology and professional fields.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab switcher */}
        <ScrollReveal delay={100}>
          <div className="flex justify-center gap-4 mb-14">
            {['seminars', 'achievements'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full font-body text-sm font-medium tracking-wide transition-all duration-300 capitalize
                  ${activeTab === tab
                    ? 'glass-pink text-[#f9a8d4] border border-[rgba(249,168,212,0.4)] scale-105 shadow-[0_0_20px_rgba(249,168,212,0.2)]'
                    : 'glass text-white/40 hover:text-white/80 border border-white/5'
                  }`}
              >
                {tab === 'seminars' ? '📜 Seminars' : '🏆 Achievements'}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {(activeTab === 'seminars' ? seminarCerts : achievements).map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 100}>
                <div
                  className="glass-lavender group p-8 flex flex-col items-center text-center gap-6 hover:-translate-y-2 hover:shadow-[0_24px_64px_rgba(192,132,252,0.15)] transition-all duration-500 h-full border border-white/10"
                >
                  <div className="text-6xl transform group-hover:scale-110 transition-transform duration-500">
                    {item.emoji}
                  </div>
                  
                  <div className="flex-grow">
                    <h4 className="font-display text-xl font-bold text-white mb-2 leading-tight">
                      {item.title}
                    </h4>
                    {item.issuer && (
                      <div className="flex flex-col gap-1">
                        <p className="font-body text-[10px] text-[#c084fc] tracking-[0.2em] uppercase font-bold">
                          {item.issuer}
                        </p>
                        {item.year && (
                          <p className="font-body text-xs text-white/30 font-medium">{item.year}</p>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {item.image ? (
                    <div className="flex items-center gap-3 w-full mt-4">
                      <button
                        onClick={() => setPreviewCert(item)}
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl glass text-xs font-bold text-white hover:bg-white/10 transition-all border border-white/10 group/btn"
                      >
                        <HiEye className="text-lg group-hover/btn:scale-110 transition-transform" />
                        Preview
                      </button>
                      <a 
                        href={item.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl glass-pink text-[#f9a8d4] hover:bg-[#f9a8d4]/10 transition-all border border-[#f9a8d4]/20 group/btn"
                        title="Open in new tab"
                      >
                        <HiExternalLink className="text-lg group-hover/btn:scale-110 transition-transform" />
                      </a>
                    </div>
                  ) : (
                    <div className="w-full mt-4">
                      <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/5 text-[10px] font-bold text-white/20 uppercase tracking-widest">
                        Documentation Pending
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state for achievements */}
        {activeTab === 'achievements' && achievements.length === 1 && achievements[0].title === "Achievement Coming Soon" && (
          <ScrollReveal delay={200}>
            <div className="text-center mt-12 p-12 glass border border-dashed border-white/10 rounded-[30px]">
              <p className="font-body text-white/30 text-sm italic">
                "Small steps today, giant leaps tomorrow." — New achievements are currently being documented.
              </p>
            </div>
          </ScrollReveal>
        )}
      </div>

      {/* Reusable Certificate Modal */}
      <CertificateModal 
        isOpen={!!previewCert} 
        onClose={() => setPreviewCert(null)} 
        certificate={previewCert} 
      />
    </section>
  )
}

