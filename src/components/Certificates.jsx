import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiExternalLink, HiEye, HiX, HiBadgeCheck, HiOfficeBuilding, HiStar, HiAcademicCap } from 'react-icons/hi'
import ScrollReveal from './ScrollReveal'

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
    title: "Upcoming Professional Experience",
    issuer: "Research Institutions",
    year: "2025",
    type: "Internship",
    description: "Currently preparing for future internship opportunities in biotechnology, bioinformatics, and research-oriented domains.",
    image: null, 
    isUpcoming: true,
    tags: ["Future", "Growth"]
  }
]

// 2. Card Component
const CertificateCard = ({ item, index }) => {
  return (
    <ScrollReveal delay={index * 100}>
      <motion.div
        whileHover={{ y: -12 }}
        className={`group relative h-full flex flex-col bg-gradient-to-br from-[#1a0b3c]/80 to-[#0d051a]/90 backdrop-blur-3xl rounded-[32px] border transition-all duration-700 overflow-hidden ${
          item.isElite 
            ? 'border-[#c084fc]/30 hover:border-[#f9a8d4]/60 shadow-[0_0_40px_rgba(192,132,252,0.15)] hover:shadow-[0_40px_80px_rgba(249,168,212,0.25)]' 
            : 'border-white/5 hover:border-[#c084fc]/40 shadow-2xl'
        }`}
      >
        {/* Hover Glow Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#c084fc]/10 via-transparent to-[#f9a8d4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Visual Header Area */}
        <div className="relative h-60 overflow-hidden bg-white/[0.02]">
          {/* Top Masking Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d051a] via-transparent to-black/20 z-10" />
          
          {item.image ? (
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 filter brightness-90 group-hover:brightness-100" 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/[0.05] to-transparent">
              <HiAcademicCap size={72} className="text-white/5 animate-pulse" />
            </div>
          )}
          
          {/* Category Badge */}
          <div className="absolute top-6 left-6 z-20 flex gap-2">
            <div className="px-5 py-2 rounded-full bg-black/40 backdrop-blur-md border border-[#f9a8d4]/30 text-[10px] font-bold text-[#f9a8d4] tracking-[0.2em] uppercase">
              {item.type}
            </div>
            {item.isElite && (
              <div className="px-5 py-2 rounded-full bg-[#c084fc]/10 backdrop-blur-md border border-[#c084fc]/40 text-[10px] font-bold text-white tracking-[0.2em] uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(192,132,252,0.4)]">
                <HiStar className="text-[#f9a8d4] animate-pulse" /> 
                Elite
              </div>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-9 flex-1 flex flex-col relative z-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#c084fc] font-bold text-[10px] tracking-[0.3em] uppercase">{item.issuer}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
            <span className="text-white/30 text-[11px] font-medium tracking-widest">{item.year}</span>
          </div>
          
          <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-5 leading-tight tracking-tight group-hover:text-[#f9a8d4] transition-colors">
            {item.title}
          </h3>
          
          <p className="font-body text-white/40 text-sm mb-10 leading-relaxed line-clamp-3">
            {item.description}
          </p>
          
          {/* Action Area */}
          <div className="mt-auto flex items-center gap-5">
            {item.isUpcoming ? (
              <div className="flex-1 px-8 py-5 rounded-2xl bg-white/5 text-white/20 text-[10px] font-bold uppercase tracking-[0.3em] border border-white/5 text-center flex items-center justify-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20 animate-ping" />
                Preparation Phase
              </div>
            ) : (
              <a 
                href={item.image} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white/40 font-bold text-[11px] tracking-[0.3em] uppercase hover:bg-white/10 hover:border-[#f9a8d4]/50 hover:text-white transition-all duration-300 active:scale-95 shadow-lg group/btn"
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
    <section className="relative py-32 px-6 bg-[#1a0a2e]" id="certificates">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c084fc]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f9a8d4]/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <HiBadgeCheck className="text-[#f9a8d4]" />
              <span className="text-[#f9a8d4] font-bold text-[10px] tracking-[0.4em] uppercase">Recognition</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">Certificates & <br/><span className="bg-gradient-to-r from-[#f9a8d4] via-[#c084fc] to-[#f9a8d4] bg-clip-text text-transparent">Milestones</span></h2>
            <p className="font-body text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">Validating academic excellence and professional growth through specialized certifications and training.</p>
          </ScrollReveal>
        </div>

        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-1 p-1.5 glass-lavender rounded-full border border-white/10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-8 md:px-10 py-3 rounded-full text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500 ${activeTab === cat ? 'bg-white/10 text-white border border-white/20' : 'text-white/30 hover:text-white/60'}`}
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
