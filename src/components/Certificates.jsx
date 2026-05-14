import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiExternalLink, HiEye, HiX, HiBadgeCheck, HiCalendar, HiOfficeBuilding, HiStar, HiSparkles, HiAcademicCap, HiDownload, HiArrowRight } from 'react-icons/hi'
import ScrollReveal from './ScrollReveal'

const certificateData = [
  // SEMINAR CATEGORY
  { 
    id: 1, 
    title: "National Seminar on Biotechnology", 
    issuer: "Brainware University", 
    year: "2024", 
    category: "Seminar",
    description: "Explored emerging trends in biotechnology and life sciences, focusing on advanced laboratory methodologies.",
    image: "/seminar1.jpg",
    type: "Seminar",
    tags: ["Biotech", "Research"]
  },
  { 
    id: 2, 
    title: "Future of Bioscience Workshop", 
    issuer: "Brainware University", 
    year: "2024", 
    category: "Seminar",
    description: "Training on sustainable biological solutions and modern industrial applications in the bioscience sector.",
    image: "/seminar2.jpg",
    type: "Seminar",
    tags: ["Bioscience", "Workshop"]
  },
  // EXAM CATEGORY
  { 
    id: 3, 
    title: "Elite NPTEL Certification – General Pharmacology", 
    issuer: "NPTEL • IIT (BHU) Varanasi", 
    year: "2026", 
    category: "EXAM",
    description: "Successfully completed the 12-week NPTEL course with Elite certification.",
    image: "/nptel result.jpeg",
    type: "Exam",
    isElite: true,
    tags: ["Pharmacology", "NPTEL", "Elite"]
  },
  // INTERNSHIP CATEGORY (Upcoming State)
  {
    id: 4,
    title: "Upcoming Professional Experience",
    issuer: "Research Institutions",
    year: "2025",
    category: "INTERNSHIP",
    description: "Currently preparing for future internship opportunities in biotechnology, bioinformatics, and research-oriented domains.",
    image: null, 
    type: "Internship",
    isUpcoming: true,
    tags: ["Future", "Growth"]
  }
]

// Separate component to handle per-card state and avoid Hook violations
const CertificateCard = ({ item, index, onPreview }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <ScrollReveal delay={index * 100}>
      <div 
        className={`group relative flex flex-col h-full glass-lavender rounded-[32px] border transition-all duration-500 overflow-hidden ${
          item.isElite 
            ? 'border-[#c084fc]/50 hover:border-[#f9a8d4]/80 shadow-[0_0_30px_rgba(192,132,252,0.1)] hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(192,132,252,0.25)]' 
            : 'border-white/10 hover:border-white/20 hover:-translate-y-3 hover:shadow-[0_30px_70px_rgba(192,132,252,0.15)]'
        } ${item.isUpcoming ? 'opacity-80 hover:opacity-100' : ''}`}
      >
        {/* Visual Area */}
        <div 
          className="relative aspect-[16/10] overflow-hidden bg-white/[0.03] cursor-pointer"
          onClick={() => !item.isUpcoming && onPreview(item)}
        >
          {item.image ? (
            <>
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/5 animate-pulse">
                  <HiSparkles className="text-[#c084fc]/20 text-4xl" />
                </div>
              )}
              <motion.img 
                initial={{ opacity: 0 }}
                animate={{ opacity: imageLoaded ? 1 : 0 }}
                onLoad={() => setImageLoaded(true)}
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-14 h-14 rounded-full glass-pink flex items-center justify-center text-white shadow-2xl scale-75 group-hover:scale-100 transition-all border border-white/20">
                  <HiEye size={22} />
                </div>
              </div>
            </>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-4 relative overflow-hidden bg-gradient-to-br from-white/[0.03] to-transparent">
               <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
               {item.isUpcoming ? (
                 <>
                   <div className="relative">
                      <div className="absolute -inset-4 bg-[#c084fc]/20 blur-2xl rounded-full animate-pulse" />
                      <HiAcademicCap size={64} className="relative z-10 text-[#c084fc]/40" />
                   </div>
                   <div className="px-3 py-1 rounded-full bg-[#f9a8d4]/10 border border-[#f9a8d4]/20 text-[#f9a8d4] text-[9px] font-bold uppercase tracking-[0.3em] animate-pulse">Coming Soon</div>
                 </>
               ) : (
                 <HiAcademicCap size={64} className="text-white/10" />
               )}
            </div>
          )}

          {/* Top Label */}
          <div className="absolute top-4 left-4 z-20 flex gap-2">
            <span className="px-3 py-1 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 text-[#f9a8d4] text-[9px] font-bold uppercase tracking-widest">
              {item.category}
            </span>
            {item.isElite && (
              <span className="px-3 py-1 rounded-lg bg-gradient-to-r from-[#c084fc]/20 to-[#f9a8d4]/20 backdrop-blur-md border border-[#f9a8d4]/50 text-white text-[9px] font-bold uppercase tracking-widest flex items-center gap-1 shadow-[0_0_15px_rgba(249,168,212,0.4)]">
                <HiStar className="text-[#f9a8d4] animate-pulse" /> Elite
              </span>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-7 flex flex-col flex-grow relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-white/30 text-[11px] font-bold tracking-widest">{item.year}</span>
            <div className="w-1 h-1 rounded-full bg-[#c084fc]/30" />
            <span className="text-[#c084fc] text-[9px] font-bold uppercase tracking-widest truncate">{item.issuer}</span>
          </div>

          <h3 className={`font-display text-lg md:text-xl font-bold mb-3 leading-tight transition-colors ${item.isElite ? 'text-white group-hover:text-[#c084fc]' : 'text-white group-hover:text-[#f9a8d4]'}`}>
            {item.title}
          </h3>

          <p className="font-body text-white/50 text-xs leading-relaxed mb-6 flex-grow">
            {item.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {item.tags?.map(tag => (
              <span key={tag} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-white/30 text-[8px] font-bold uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-6 border-t border-white/5 mt-auto">
            {item.isUpcoming ? (
              <button className="flex-1 px-6 py-3.5 rounded-xl bg-white/5 text-white/20 text-[10px] font-bold uppercase tracking-widest border border-white/5 flex items-center justify-center gap-2 cursor-not-allowed">
                Preparing...
              </button>
            ) : (
              <>
                <button
                  onClick={() => onPreview(item)}
                  className="flex-1 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest transition-all border border-white/10 flex items-center justify-center gap-2 active:scale-95"
                >
                  <HiEye size={16} />
                  Preview
                </button>
                <a 
                  href={item.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center text-white/30 hover:text-[#f9a8d4] transition-all active:scale-95"
                >
                  <HiExternalLink size={18} />
                </a>
              </>
            )}
          </div>
        </div>
        
        {/* Premium Ambience */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#c084fc]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
    </ScrollReveal>
  );
};

function CertificateModal({ isOpen, onClose, certificate }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  useEffect(() => {
    if (isOpen) setIsLoading(true);
  }, [isOpen, certificate]);

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
            backgroundColor: 'rgba(10, 5, 20, 0.98)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col glass-lavender overflow-hidden border border-white/20 shadow-[0_0_100px_rgba(192,132,252,0.3)] rounded-[40px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 md:px-10 md:py-8 border-b border-white/10 bg-white/5 relative z-20">
              <div className="space-y-1 pr-12">
                <h3 className="font-display text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
                  {certificate.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                  <div className="flex items-center gap-1.5 text-[#c084fc] font-bold text-[10px] uppercase tracking-widest">
                    <HiOfficeBuilding /> {certificate.issuer}
                  </div>
                  <div className="hidden md:block w-1 h-1 rounded-full bg-white/20" />
                  <div className="flex items-center gap-1.5 text-white/40 text-[11px] font-medium">
                    <HiCalendar /> {certificate.year}
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10"
              >
                <HiX size={24} />
              </button>
            </div>

            {/* Content area */}
            <div className="flex-1 overflow-auto bg-black/40 p-4 md:p-12 flex items-center justify-center relative">
              {isLoading && (
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#0a0514]/80 backdrop-blur-sm">
                  <div className="w-12 h-12 border-4 border-[#c084fc]/20 border-t-[#f9a8d4] rounded-full animate-spin" />
                </div>
              )}

              {certificate.image ? (
                <div className="relative group/modal-img w-full flex justify-center">
                   <div className="absolute -inset-4 bg-gradient-to-tr from-[#c084fc]/20 to-[#f9a8d4]/20 blur-3xl rounded-full opacity-50" />
                   <img
                     src={certificate.image}
                     alt={certificate.title}
                     className="relative z-10 max-w-full max-h-[75vh] rounded-2xl shadow-2xl border border-white/10 object-contain"
                     onLoad={() => setIsLoading(false)}
                   />
                </div>
              ) : (
                <div className="text-center p-20 glass rounded-[32px] border border-dashed border-white/10">
                  <HiBadgeCheck size={48} className="mx-auto mb-4 text-white/10" />
                  <p className="text-white/20 font-display text-xl uppercase tracking-widest">Documentation Pending</p>
                </div>
              )}

              {/* Floating Action Bar */}
              {certificate.image && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                  <a
                    href={certificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full glass-pink text-[10px] font-bold text-[#f9a8d4] hover:scale-110 transition-all shadow-xl border border-[#f9a8d4]/30"
                  >
                    <HiExternalLink className="text-lg" />
                    Open Original
                  </a>
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
  const [activeTab, setActiveTab] = useState('Seminar')
  const [previewCert, setPreviewCert] = useState(null)

  const categories = ['Seminar', 'Exam', 'Internship']
  const filteredCerts = certificateData.filter(cert => cert.type === activeTab)

  return (
    <section className="relative py-32 px-6 bg-[#1a0a2e]" id="certificates">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c084fc]/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f9a8d4]/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <HiBadgeCheck className="text-[#f9a8d4] text-lg" />
              <span className="text-[#f9a8d4] font-bold text-[10px] tracking-[0.4em] uppercase">Recognition</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Certificates & <br />
              <span className="bg-gradient-to-r from-[#f9a8d4] via-[#c084fc] to-[#f9a8d4] bg-clip-text text-transparent">
                Milestones
              </span>
            </h2>
            <p className="font-body text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
              Validating academic excellence and professional growth through specialized certifications and training.
            </p>
          </ScrollReveal>
        </div>

        {/* Tab System */}
        <ScrollReveal delay={200}>
          <div className="flex justify-center mb-16">
            <div className="flex items-center gap-1 p-1.5 glass-lavender rounded-full border border-white/10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-8 md:px-10 py-3 rounded-full text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500
                    ${activeTab === cat
                      ? 'bg-white/10 text-white border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)] scale-105'
                      : 'text-white/30 hover:text-white/60'
                    }`}
                >
                  {cat}s
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Grid Content */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            >
              {filteredCerts.length > 0 ? (
                filteredCerts.map((item, index) => (
                  <CertificateCard 
                    key={item.id} 
                    item={item} 
                    index={index} 
                    onPreview={setPreviewCert} 
                  />
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <div className="inline-flex flex-col items-center gap-4 opacity-20">
                    <HiAcademicCap size={64} />
                    <p className="text-xl font-display uppercase tracking-widest">Coming Soon</p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <CertificateModal 
        isOpen={!!previewCert} 
        onClose={() => setPreviewCert(null)} 
        certificate={previewCert} 
      />
    </section>
  )
}
