import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiExternalLink, HiEye, HiX, HiAcademicCap } from 'react-icons/hi'
import useTilt from '../hooks/useTilt'
import SectionHeader from './SectionHeader'

// 1. Certificate Data Structure
const certificateData = [
  // --- NPTEL EXAMS (3 items - exactly 1 row of 3) ---
  { 
    id: 1, 
    title: "Elite + Silver NPTEL Certification – AI in Drug Discovery", 
    issuer: "NPTEL • IIT (BHU) Varanasi", 
    year: "2026", 
    period: "Jul – Oct 2026",
    type: "Exam",
    score: "75%",
    highlight: "Elite + Silver Medal",
    credits: "4 Credits",
    description: "Completed 12-week NPTEL course with Elite + Silver medal certification, securing 75% (Assignments: 24.56/25, Exam: 49.5/75) among 4,077 candidates.",
    image: "/nptel-result silver.png",
    isElite: true,
    isSilver: true
  },
  { 
    id: 2, 
    title: "Elite NPTEL Certification – Novel Drug Delivery Systems", 
    issuer: "NPTEL • IIT Bombay", 
    year: "2026", 
    period: "Jul – Oct 2026",
    type: "Exam",
    score: "69%",
    highlight: "Elite Certification",
    credits: "4 Credits",
    description: "Completed 12-week NPTEL course with Elite certification, achieving 69% with a perfect 25/25 in assignments and 43.5/75 in the proctored exam.",
    image: "/nptel-result 1.png",
    isElite: true
  },
  { 
    id: 3, 
    title: "Elite NPTEL Certification – General Pharmacology", 
    issuer: "NPTEL • IIT (BHU) Varanasi", 
    year: "2026", 
    period: "Jan – Apr 2026",
    type: "Exam",
    score: "61%",
    highlight: "Elite Certification",
    credits: "4 Credits",
    description: "Completed 12-week NPTEL course with Elite certification, securing 61% (Assignments: 25/25, Exam: 36/75) with 4 recommended academic credits.",
    image: "/nptel-result.jpeg",
    isElite: true
  },

  // --- CSIR TRAINING (1 item) ---
  { 
    id: 4, 
    title: "CSIR-IICB Skill Development Certification – Advanced Bioinformatics", 
    issuer: "CSIR-Indian Institute of Chemical Biology", 
    year: "2026", 
    period: "Sep 2026",
    type: "Training",
    score: "Certified",
    highlight: "Govt. of India Certified",
    credits: "Hands-on",
    regNo: "IICB/26-27/SDP2/IICB-BIO/05",
    description: "Certified Skill Development Program on Theory & Hands-on-Training in Advanced Bioinformatics (Code-IICB-BIO) at CSIR-IICB, Kolkata.",
    image: "/csir certificate.jpg",
    isCsir: true
  },

  // --- INTERNSHIP (1 item) ---
  {
    id: 5,
    title: "Research Internship in In Silico Drug Design",
    issuer: "Subhami Biopharma • Jadavpur University",
    year: "2026",
    period: "2026",
    type: "Internship",
    score: "Completed",
    highlight: "Research Internship",
    credits: "In Silico",
    description: "Intensive computational research internship focusing on molecular dynamics simulations, CADD, and molecular docking methodologies.",
    image: "/internship-certificate.jpeg"
  },

  // --- SEMINARS & WORKSHOPS (2 items) ---
  { 
    id: 6, 
    title: "National Seminar on Biotechnology", 
    issuer: "Brainware University", 
    year: "2024", 
    period: "2024",
    type: "Seminar",
    score: "Attendee",
    highlight: "National Seminar",
    credits: "Life Sciences",
    description: "Explored emerging biotechnology trends, focusing on modern laboratory methodologies and cutting-edge industrial bioscience.",
    image: "/seminar1.jpg"
  },
  { 
    id: 7, 
    title: "Future of Bioscience Workshop", 
    issuer: "Brainware University", 
    year: "2024", 
    period: "2024",
    type: "Seminar",
    score: "Attendee",
    highlight: "Industry Workshop",
    credits: "Sustainable Bio",
    description: "Hands-on training on sustainable biological solutions and modern industrial biotechnology applications in the life sciences sector.",
    image: "/seminar2.jpg"
  }
]

// Professional Category Tabs (No redundant "All Certificates")
const filterCategories = [
  { id: 'Exam', label: 'NPTEL & Exams', count: 3 },
  { id: 'Training', label: 'CSIR & Training', count: 1 },
  { id: 'Internship', label: 'Internships', count: 1 },
  { id: 'Seminar', label: 'Seminars & Workshops', count: 2 }
]

// 2. Compact Professional Card Component
const CertificateCard = ({ item, index, onPreview }) => {
  const tiltRef = useTilt();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      ref={tiltRef}
      whileHover={{ y: -4 }}
      className={`group relative flex flex-col bg-[#140a28]/85 backdrop-blur-2xl rounded-2xl border transition-all duration-300 overflow-hidden ${
        item.isSilver
          ? 'border-slate-300/40 hover:border-slate-200 shadow-[0_8px_30px_rgba(226,232,240,0.12)]'
          : item.isElite 
          ? 'border-[#7C3AED]/35 hover:border-[#ff7eb3]/50 shadow-[0_8px_30px_rgba(124,58,237,0.12)]' 
          : item.isCsir
          ? 'border-[#14b8a6]/35 hover:border-[#14b8a6]/60 shadow-[0_8px_30px_rgba(20,184,166,0.12)]'
          : 'border-white/[0.08] hover:border-[#7C3AED]/30 shadow-xl'
      }`}
    >
      {/* Visual Header Banner (Compact: h-44 / 176px) */}
      <div 
        onClick={() => onPreview(item)}
        className="relative h-44 w-full overflow-hidden bg-black/40 cursor-pointer group/img"
      >
        {/* Subtle Bottom Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#140a28] via-[#140a28]/20 to-transparent z-10" />
        
        {item.image ? (
          <img 
            src={item.image} 
            alt={item.title} 
            width={400}
            height={220}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105 filter brightness-95 group-hover/img:brightness-100" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-white/[0.02]">
            <HiAcademicCap size={56} className="text-white/10" />
          </div>
        )}

        {/* Hover Quick View Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 bg-black/50 backdrop-blur-[2px]">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 text-white text-xs font-semibold tracking-wider border border-white/20 shadow-lg">
            <HiEye className="text-sm text-[#14b8a6]" /> Quick View
          </span>
        </div>
        
        {/* Top Badges Bar */}
        <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between gap-2 pointer-events-none">
          <div className="flex items-center gap-1.5">
            {item.isSilver ? (
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/80 text-slate-100 border border-slate-300/60 shadow-md backdrop-blur-md flex items-center gap-1">
                <span>🥈</span> Elite + Silver
              </span>
            ) : item.isElite ? (
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/80 text-[#ff7eb3] border border-[#ff7eb3]/60 shadow-md backdrop-blur-md flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff7eb3] animate-pulse" />
                Elite
              </span>
            ) : item.isCsir ? (
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/80 text-[#14b8a6] border border-[#14b8a6]/60 shadow-md backdrop-blur-md flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] animate-pulse" />
                CSIR-IICB
              </span>
            ) : (
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/80 text-white/70 border border-white/15 backdrop-blur-md">
                {item.type}
              </span>
            )}
          </div>

          {/* Right Meta Pill (Score / Credits) */}
          {item.score && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider bg-black/80 text-[#2dd4bf] border border-[#14b8a6]/50 backdrop-blur-md shadow-md">
              {item.score.includes('%') ? `Score: ${item.score}` : item.score}
            </span>
          )}
        </div>
      </div>

      {/* Content Body (Compact, Tight Hierarchy) */}
      <div className="p-5 flex-1 flex flex-col relative z-20">
        {/* Issuer & Period Row */}
        <div className="flex items-center justify-between text-[11px] mb-2">
          <span className="text-[#14b8a6] font-semibold tracking-wide truncate max-w-[200px]" title={item.issuer}>
            {item.issuer}
          </span>
          <span className="text-white/40 font-mono text-[10px] shrink-0">
            {item.period || item.year}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="font-display text-base font-bold text-white mb-2 leading-snug line-clamp-2 group-hover:text-[#ff7eb3] transition-colors" title={item.title}>
          {item.title}
        </h3>
        
        {/* Description (Snappy 2-line clamp) */}
        <p className="font-body text-white/60 text-xs leading-relaxed line-clamp-2 mb-4 flex-1">
          {item.description}
        </p>

        {/* Feature Pills */}
        <div className="flex items-center gap-2 mb-4">
          {item.credits && (
            <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-white/[0.04] border border-white/[0.08] text-white/70">
              {item.credits}
            </span>
          )}
          {item.highlight && (
            <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#7C3AED]/15 border border-[#7C3AED]/25 text-[#D8B4FE]">
              {item.highlight}
            </span>
          )}
        </div>
        
        {/* Action Buttons (Compact Height) */}
        <div className="mt-auto flex items-center gap-2 pt-2 border-t border-white/[0.06]">
          <button
            type="button"
            onClick={() => onPreview(item)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#14b8a6]/40 text-white/80 hover:text-white font-semibold text-[11px] tracking-wide transition-all active:scale-95"
          >
            <HiEye className="text-sm text-[#14b8a6]" />
            Inspect Certificate
          </button>

          <a 
            href={item.image} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 rounded-xl bg-white/[0.04] hover:bg-[#ff7eb3]/10 border border-white/[0.08] hover:border-[#ff7eb3]/40 text-white/50 hover:text-[#ff7eb3] transition-all active:scale-95"
            title="Open in new tab"
            aria-label="Open in new tab"
          >
            <HiExternalLink className="text-base" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// 3. Main Section
export default function Certificates() {
  // Starts directly on NPTEL & Exams (no redundant "All" tab)
  const [activeTab, setActiveTab] = useState('Exam');
  const [previewItem, setPreviewItem] = useState(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setPreviewItem(null);
    };
    if (previewItem) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [previewItem]);

  // Filtering Logic
  const filtered = certificateData.filter(c => c.type === activeTab);

  return (
    <section className="relative py-24 px-6" id="certificates">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader 
          eyebrow="VALIDATIONS & MILESTONES" 
          title="Certificates & Achievements" 
          subtitle="Validating academic excellence and professional growth through nationally accredited certifications, specialized workshops, and research training." 
        />

        {/* Clean, Focused Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-[#140a28]/80 backdrop-blur-xl rounded-full border border-white/[0.08] shadow-lg max-w-full">
            {filterCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                aria-label={`View ${cat.label}`}
                className={`px-5 md:px-6 py-2 rounded-full text-[11px] font-bold tracking-wide transition-all duration-200 flex items-center gap-2 ${
                  activeTab === cat.id 
                    ? 'bg-gradient-to-r from-[#7C3AED] to-[#9333EA] text-white shadow-[0_4px_16px_rgba(124,58,237,0.4)]' 
                    : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[9px] font-mono ${
                  activeTab === cat.id ? 'bg-white/20 text-white' : 'bg-white/5 text-white/40'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Certificates - Responsive, Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <CertificateCard 
                key={item.id} 
                item={item} 
                index={index} 
                onPreview={(cert) => setPreviewItem(cert)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {previewItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setPreviewItem(null)}
          >
            {/* Close Button */}
            <button 
              onClick={() => setPreviewItem(null)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-50 border border-white/20 shadow-xl focus:outline-none"
              aria-label="Close modal"
            >
              <HiX size={22} />
            </button>
            
            {/* Modal Dialog */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 15 }}
              transition={{ type: "spring", duration: 0.35 }}
              className="relative max-w-4xl w-full max-h-[88vh] bg-[#140a28] border border-white/15 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(124,58,237,0.3)] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="px-5 py-3.5 border-b border-white/10 bg-[#0B0618]/90 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#14b8a6]">
                    {previewItem.issuer}
                  </span>
                  <span className="text-white/20">•</span>
                  <span className="text-xs text-white/50 font-mono">
                    {previewItem.period || previewItem.year}
                  </span>
                  {previewItem.isSilver && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-200/20 text-slate-100 border border-slate-300/40">
                      🥈 Elite + Silver
                    </span>
                  )}
                  {!previewItem.isSilver && previewItem.isElite && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#ff7eb3]/20 text-[#ff7eb3] border border-[#ff7eb3]/40">
                      ★ Elite
                    </span>
                  )}
                </div>

                <a 
                  href={previewItem.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white transition-colors"
                >
                  <HiExternalLink /> Full Image
                </a>
              </div>

              {/* Image Preview */}
              <div className="flex-1 overflow-auto p-4 bg-black/60 flex items-center justify-center min-h-[260px]">
                <img 
                  src={previewItem.image} 
                  alt={previewItem.title} 
                  className="max-w-full max-h-[62vh] object-contain rounded-lg shadow-xl border border-white/10"
                />
              </div>

              {/* Modal Footer */}
              <div className="px-5 py-4 border-t border-white/10 bg-[#0B0618]/95">
                <h4 className="text-base md:text-lg font-bold text-white mb-1.5 font-display">
                  {previewItem.title}
                </h4>
                <p className="text-xs text-white/70 font-body leading-relaxed">
                  {previewItem.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
