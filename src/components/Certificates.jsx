import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiExternalLink, HiEye, HiX, HiBadgeCheck, HiOfficeBuilding, HiStar, HiAcademicCap } from 'react-icons/hi'
import ScrollReveal from './ScrollReveal'
import useTilt from '../hooks/useTilt'

// 1. Data Structure
const certificateData = [
  { 
    id: 1, 
    title: "National Seminar on Biotechnology", 
    issuer: "Brainware University", 
    year: "2024", 
    type: "Seminar",
    description: "Explored emerging trends in biotechnology and life sciences, focusing on advanced laboratory methodologies.",
    image: "/seminar1.jpg",
    tags: ["Biotech", "Research"]
  },
  { 
    id: 2, 
    title: "Future of Bioscience Workshop", 
    issuer: "Brainware University", 
    year: "2024", 
    type: "Seminar",
    description: "Training on sustainable biological solutions and modern industrial applications in the bioscience sector.",
    image: "/seminar2.jpg",
    tags: ["Bioscience", "Workshop"]
  },
  { 
    id: 3, 
    title: "Elite NPTEL Certification – General Pharmacology", 
    issuer: "NPTEL • IIT (BHU) Varanasi", 
    year: "2026", 
    type: "Exam",
    description: "Successfully completed the 12-week NPTEL course with Elite certification.",
    image: "/nptel result.jpeg",
    isElite: true,
    tags: ["Pharmacology", "NPTEL", "Elite"]
  },
  {
    id: 4,
    title: "Research Internship in In Silico Drug Design",
    issuer: "Subhami Biopharma (OPC) Pvt. Ltd. (Collab: Jadavpur University)",
    year: "2026",
    type: "Internship",
    description: "Completed an intensive research internship on computational drug design, molecular dynamics, and molecular docking methodologies.",
    image: "/Internship certificate.jpeg", 
    tags: ["In Silico", "Drug Design", "Biotech"]
  }
]

// 2. Card Component
const CertificateCard = ({ item, index }) => {
  const tiltRef = useTilt();

  return (
    <ScrollReveal delay={index * 100}>
      <motion.div
        ref={tiltRef}
        whileHover={{ scale: 1.02 }}
        className={`group relative h-full flex flex-col bg-gradient-to-br from-[#1C0D38]/55 to-[#0B0618]/90 backdrop-blur-3xl rounded-[32px] border transition-all duration-300 overflow-hidden transform-gpu ${
          item.isElite 
            ? 'border-[#7C3AED]/30 hover:border-[#ff7eb3]/60 shadow-[0_0_40px_rgba(124,58,237,0.15)] hover:shadow-[0_40px_80px_rgba(255, 126, 179,0.25)]' 
            : 'border-[#2A1350]/50 hover:border-[#7C3AED]/40 shadow-2xl'
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Hover Glow Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#14b8a6]/10 via-transparent to-[#ff7eb3]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Visual Header Area */}
        <div className="relative h-60 overflow-hidden bg-[#fdfbf7]/[0.02]">
          {/* Top Masking Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0618] via-transparent to-black/20 z-10" />
          
          {item.image ? (
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 filter brightness-90 group-hover:brightness-100" 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#fdfbf7]/[0.05] to-transparent">
              <HiAcademicCap size={72} className="text-[#fdfbf7]/5 animate-pulse" />
            </div>
          )}
          
          {/* Category Badge */}
          <div className="absolute top-6 left-6 z-20 flex gap-2">
            <div className="px-5 py-2 rounded-full bg-black/40 backdrop-blur-md border border-[#ff7eb3]/30 text-[10px] font-bold text-[#ff7eb3] tracking-[0.2em] uppercase">
              {item.type}
            </div>
            {item.isElite && (
              <div className="px-5 py-2 rounded-full bg-[#14b8a6]/10 backdrop-blur-md border border-[#14b8a6]/40 text-[10px] font-bold text-[#fdfbf7] tracking-[0.2em] uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(20, 184, 166,0.4)]">
                <HiStar className="text-[#ff7eb3] animate-pulse" /> 
                Elite
              </div>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-9 flex-1 flex flex-col relative z-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#14b8a6] font-bold text-[10px] tracking-[0.3em] uppercase">{item.issuer}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#fdfbf7]/10" />
            <span className="text-[#fdfbf7]/30 text-[11px] font-medium tracking-widest">{item.year}</span>
          </div>
          
          <h3 className="font-display text-xl md:text-2xl font-bold text-[#fdfbf7] mb-5 leading-tight tracking-tight group-hover:text-[#ff7eb3] transition-colors">
            {item.title}
          </h3>
          
          <p className="font-body text-[#fdfbf7]/40 text-sm mb-10 leading-relaxed line-clamp-3">
            {item.description}
          </p>
          
          {/* Action Area */}
          <div className="mt-auto flex items-center gap-5">
            {item.isUpcoming ? (
              <div className="flex-1 px-8 py-5 rounded-2xl bg-[#fdfbf7]/5 text-[#fdfbf7]/20 text-[10px] font-bold uppercase tracking-[0.3em] border border-[#fdfbf7]/5 text-center flex items-center justify-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#fdfbf7]/20 animate-ping" />
                Preparation Phase
              </div>
            ) : (
              <a 
                href={item.image} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-[#fdfbf7]/5 border border-[#fdfbf7]/10 text-[#fdfbf7]/40 font-bold text-[11px] tracking-[0.3em] uppercase hover:bg-[#fdfbf7]/10 hover:border-[#ff7eb3]/50 hover:text-[#fdfbf7] transition-all duration-300 active:scale-95 shadow-lg group/btn"
              >
                <HiExternalLink className="text-lg group-hover/btn:scale-110 transition-transform" /> 
                Original Source
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
};

// 3. Main Section
export default function Certificates() {
  const [activeTab, setActiveTab] = useState('Seminar');

  const categories = ['Seminar', 'Exam', 'Internship'];
  const filtered = certificateData.filter(c => c.type === activeTab);

  return (
    <section className="relative py-32 px-6" id="certificates">


      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 md:mb-32">
          <ScrollReveal>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#ff7eb3]/80 mb-3 block">
              VALIDATIONS & MILESTONES
            </span>
            <h2 className="font-display text-[40px] md:text-[52px] lg:text-[64px] font-bold leading-tight tracking-tight relative mb-6">
              <span className="bg-gradient-to-r from-[#FAF6F0] via-[#FBCFE8] to-[#D8B4FE] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(216,180,254,0.15)]">
                Certificates & Achievements
              </span>
            </h2>
            <p className="font-body text-white/75 text-lg max-w-[700px] mx-auto leading-relaxed text-center">
              Validating academic excellence and professional growth through specialized certifications and training.
            </p>
          </ScrollReveal>
        </div>

        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-1 p-1.5 glass-teal rounded-full border border-[#fdfbf7]/10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-8 md:px-10 py-3 rounded-full text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500 ${activeTab === cat ? 'bg-[#fdfbf7]/10 text-[#fdfbf7] border border-[#fdfbf7]/20' : 'text-[#fdfbf7]/30 hover:text-[#fdfbf7]/60'}`}
              >
                {cat}s
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filtered.map((item, index) => (
              <CertificateCard 
                key={item.id} 
                item={item} 
                index={index} 
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
