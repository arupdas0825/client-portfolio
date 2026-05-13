import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiExternalLink, HiEye, HiX, HiBadgeCheck, HiCalendar, HiOfficeBuilding, HiAcademicCap, HiStar, HiSparkles, HiChartBar, HiClipboardCheck, HiBookOpen } from 'react-icons/hi'
import ScrollReveal from './ScrollReveal'

const seminarCerts = [
  { 
    id: 1, 
    title: "National Seminar on Biotechnology", 
    issuer: "Brainware University", 
    year: "2024", 
    category: "Academic",
    description: "Explored emerging trends in biotechnology and life sciences, focusing on advanced laboratory methodologies.",
    image: "/seminar1.jpg"
  },
  { 
    id: 2, 
    title: "Future of Bioscience Workshop", 
    issuer: "Brainware University", 
    year: "2024", 
    category: "Technical",
    description: "Training on sustainable biological solutions and modern industrial applications in the bioscience sector.",
    image: "/seminar2.jpg"
  },
]

const achievements = [
  { 
    id: 1, 
    title: "Elite NPTEL Certification – General Pharmacology", 
    issuer: "NPTEL • IIT (BHU) Varanasi • SWAYAM", 
    year: "Jan – Apr 2026", 
    category: "Elite Certification",
    description: "Successfully completed the 12-week NPTEL course 'General Pharmacology' with Elite certification, securing a consolidated score of 61%. Achieved full marks in online assignments and demonstrated strong academic consistency throughout the course.",
    image: "/nptel result.pdf",
    isElite: true
  },
  { 
    id: 2, 
    title: "Upcoming Milestone", 
    issuer: "Recognition Pending", 
    year: "2025", 
    category: "Goal",
    description: "Working towards professional certifications in specialized molecular biology and bioinformatics.",
    image: null 
  },
]

// Modal Component for Certificate Preview
function CertificateModal({ isOpen, onClose, certificate }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!certificate) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8"
          style={{
            backgroundColor: 'rgba(10, 5, 20, 0.96)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col glass-lavender overflow-hidden border border-white/20 shadow-[0_0_80px_rgba(192,132,252,0.25)] rounded-[40px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-10 py-8 border-b border-white/10 bg-white/5">
              <div className="space-y-1">
                <h3 className="font-display text-2xl font-bold text-white tracking-tight leading-none">
                  {certificate.title}
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-[#c084fc] font-bold text-[10px] uppercase tracking-widest">
                    <HiOfficeBuilding /> {certificate.issuer}
                  </div>
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <div className="flex items-center gap-1.5 text-white/40 text-[11px] font-medium">
                    <HiCalendar /> {certificate.year}
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10"
              >
                <HiX size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto bg-black/30 p-8 md:p-12 flex items-center justify-center">
              {certificate.image ? (
                <div className="relative group/modal-img w-full flex justify-center">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-[#c084fc]/20 to-[#f9a8d4]/20 blur-3xl rounded-full opacity-50" />
                  {certificate.image.endsWith('.pdf') ? (
                    <iframe
                      src={`${certificate.image}#toolbar=0`}
                      title={certificate.title}
                      className="relative z-10 w-full max-w-4xl min-h-[60vh] md:min-h-[70vh] rounded-2xl shadow-2xl border border-white/10"
                    />
                  ) : (
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="relative z-10 max-w-full max-h-[70vh] rounded-2xl shadow-2xl border border-white/10 object-contain"
                    />
                  )}
                  <a
                    href={certificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-6 right-6 z-20 flex items-center gap-2 px-6 py-3 rounded-full glass-pink text-xs font-bold text-[#f9a8d4] hover:scale-110 transition-all shadow-xl"
                  >
                    <HiExternalLink className="text-lg" />
                    Full View
                  </a>
                </div>
              ) : (
                <div className="text-center p-20 glass rounded-[32px] border border-dashed border-white/10">
                  <HiBadgeCheck size={48} className="mx-auto mb-4 text-white/10" />
                  <p className="text-white/20 font-display text-xl uppercase tracking-widest">Verification Pending</p>
                </div>
              )}
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
    <section className="relative py-32 px-6 bg-[#1a0a2e]" id="certificates">
      {/* Background Particles/Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c084fc]/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f9a8d4]/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium Header */}
        <div className="text-center mb-24">
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <HiBadgeCheck className="text-[#f9a8d4] text-lg" />
              <span className="text-[#f9a8d4] font-bold text-[10px] tracking-[0.4em] uppercase">Recognition</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Certificates & <br />
              <span className="bg-gradient-to-r from-[#f9a8d4] via-[#c084fc] to-[#f9a8d4] bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <p className="font-body text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
              Validating my expertise through rigorous academic certifications and professional development in the biotechnology sector.
            </p>
          </ScrollReveal>
        </div>

        {/* Tab Switcher */}
        <ScrollReveal delay={200}>
          <div className="flex justify-center mb-16">
            <div className="flex items-center gap-1 p-1.5 glass-lavender rounded-full border border-white/10">
              {['seminars', 'achievements'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-10 py-3.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500
                    ${activeTab === tab
                      ? 'bg-white/10 text-white border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)] scale-105'
                      : 'text-white/30 hover:text-white/60'
                    }`}
                >
                  {tab === 'seminars' ? 'Certifications' : 'Achievements'}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Premium Side-by-Side Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            {(activeTab === 'seminars' ? seminarCerts : achievements).map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 100}>
                <div 
                  className={`group relative flex flex-col h-full glass-lavender rounded-[32px] border transition-all duration-500 overflow-hidden ${
                    item.isElite 
                      ? 'border-[#c084fc]/50 hover:border-[#f9a8d4]/80 shadow-[0_0_30px_rgba(192,132,252,0.1)] hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(249,168,212,0.2)]' 
                      : 'border-white/10 hover:border-white/20 hover:-translate-y-3 hover:shadow-[0_30px_70px_rgba(192,132,252,0.15)]'
                  }`}
                >
                  {/* Elite Particles Background */}
                  {item.isElite && (
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#c084fc]/10 via-transparent to-transparent opacity-50" />
                    </div>
                  )}

                  {/* Top Preview Area */}
                  <div 
                    className="relative aspect-[16/9] overflow-hidden bg-white/5 cursor-pointer rounded-t-[32px]"
                    onClick={() => setPreviewCert(item)}
                  >
                    {item.image ? (
                      <>
                        {item.image.endsWith('.pdf') ? (
                          <div className="w-full h-full relative pointer-events-none overflow-hidden">
                            <iframe 
                              src={`${item.image}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} 
                              className="w-full h-[160%] border-0 transition-transform duration-700 group-hover:scale-105 origin-top"
                              title={item.title}
                              scrolling="no"
                            />
                          </div>
                        ) : (
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                          <div className="w-14 h-14 rounded-full glass-pink flex items-center justify-center text-white shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                            <HiEye size={22} />
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-4 opacity-10">
                        <HiBadgeCheck size={64} />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Documentation Pending</span>
                      </div>
                    )}
                    
                    {/* Category / Elite Tag */}
                    <div className="absolute top-4 left-4 z-20 flex gap-2">
                      <span className="px-3 py-1 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 text-[#f9a8d4] text-[9px] font-bold uppercase tracking-widest">
                        {item.category}
                      </span>
                      {item.isElite && (
                        <span className="px-3 py-1 rounded-lg bg-gradient-to-r from-[#c084fc]/20 to-[#f9a8d4]/20 backdrop-blur-md border border-[#f9a8d4]/50 text-white text-[9px] font-bold uppercase tracking-widest flex items-center gap-1 shadow-[0_0_15px_rgba(249,168,212,0.4)]">
                          <HiStar className="text-[#f9a8d4]" /> Elite
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex flex-col flex-grow relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-white/30 text-[11px] font-bold tracking-widest">{item.year}</span>
                      <div className="w-1 h-1 rounded-full bg-white/10" />
                      <span className="text-[#c084fc] text-[9px] font-bold uppercase tracking-widest truncate">{item.issuer}</span>
                    </div>

                    <h3 className={`font-display text-lg md:text-xl font-bold mb-3 transition-colors leading-tight ${item.isElite ? 'text-white group-hover:text-[#c084fc]' : 'text-white group-hover:text-[#f9a8d4]'}`}>
                      {item.title}
                      {item.isElite && <HiSparkles className="inline-block ml-2 text-[#f9a8d4] text-lg animate-pulse" />}
                    </h3>

                    <p className="font-body text-white/50 text-xs leading-relaxed mb-6 flex-grow">
                      {item.description}
                    </p>

                    {/* Actions */}
                    <div className={`flex items-center gap-3 pt-5 border-t mt-auto ${item.isElite ? 'border-[#c084fc]/20' : 'border-white/5'}`}>
                      <button
                        onClick={() => setPreviewCert(item)}
                        className="flex-1 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest transition-all border border-white/10 flex items-center justify-center gap-2"
                      >
                        <HiEye size={16} />
                        Preview
                      </button>
                      {item.image && (
                        <a 
                          href={item.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center text-white/30 hover:text-[#f9a8d4] hover:border-[#f9a8d4]/30 transition-all group/btn"
                        >
                          <HiExternalLink size={18} className="group-hover/btn:scale-110 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Glow Layer */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#c084fc]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </ScrollReveal>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State for Achievements */}
        {activeTab === 'achievements' && achievements.length === 1 && achievements[0].title === "Upcoming Milestone" && (
          <ScrollReveal delay={300}>
            <div className="mt-20 p-12 glass-lavender rounded-[32px] border border-dashed border-white/10 text-center">
              <p className="font-body text-white/30 text-sm italic">
                "Small steps today, giant leaps tomorrow." — New achievements are currently being documented.
              </p>
            </div>
          </ScrollReveal>
        )}
      </div>

      <CertificateModal 
        isOpen={!!previewCert} 
        onClose={() => setPreviewCert(null)} 
        certificate={previewCert} 
      />
    </section>
  )
}
