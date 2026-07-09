import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { FlaskConical, Calendar, MapPin, X, FileText, Award, User, Briefcase, ShieldCheck, Download, Maximize2 } from 'lucide-react';
import { HiExternalLink } from 'react-icons/hi';

// ==========================================
// INTERNSHIP DATA CONFIGURATION
// ==========================================
const internshipData = [
  {
    id: 1,
    status: "Completed",
    organization: "Subhami Biopharma (OPC) Pvt. Ltd.",
    academicCollaboration: "Jadavpur University (Main Campus)",
    department: "Biotechnology",
    startDate: "3 June 2026",
    endDate: "7 July 2026",
    duration: "60 Hours",
    location: "Kolkata, West Bengal, India",
    type: "Research Internship",
    title: "In Silico Drug Design",
    module: "In Silico Drug Design: Integrating Molecular Dynamics & Computational Chemistry for Novel Therapeutic Innovation",
    summary: "Successfully completed a research internship focused on computational drug discovery and molecular docking. Worked on molecular dynamics, computational chemistry, virtual screening, scientific literature review, and preparation of an internship report under academic guidance. This internship strengthened research methodology, analytical thinking, and practical understanding of in-silico drug design.",
    badges: ["Molecular Docking", "Computational Chemistry", "Molecular Dynamics", "Drug Discovery", "Bioinformatics", "Scientific Research"],
    researchReport: "A Comprehensive In-Silico Study of Celecoxib, a Non-Opioid Analgesic and Alternatives via Molecular Docking",
    certificateUrl: "/internship-certificate.jpeg",
    year: "2026"
  }
];

// ==========================================
// PREMIUM INTERNSHIP CARD COMPONENT
// ==========================================
const InternshipCard = ({ item, index, onViewDetails }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <ScrollReveal delay={index * 100}>
      <motion.div
        whileHover={{ y: -6, scale: 1.015 }}
        transition={{ duration: 0.3 }}
        className="group relative w-full min-h-[480px] max-w-[480px] mx-auto flex flex-col bg-white/[0.04] backdrop-blur-[20px] rounded-[32px] border border-white/[0.08] hover:border-[#7C3AED]/40 transition-all duration-300 overflow-hidden shadow-2xl transform-gpu"
      >
        {/* Hover Glow Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 via-transparent to-[#ff7eb3]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Visual Header Area */}
        <div className="relative h-40 overflow-hidden bg-[#fdfbf7]/[0.02]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0618] via-transparent to-black/20 z-10" />
          
          <img 
            src="/internship-1.jpg" 
            alt="Internship at Jadavpur University" 
            width={480}
            height={160}
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
          />
          
          {/* Category Badges */}
          <div className="absolute top-6 left-6 z-20 flex gap-2">
            <div className="px-5 py-2 rounded-full bg-black/40 backdrop-blur-md border border-emerald-500/30 text-[10px] font-bold text-emerald-400 tracking-[0.2em] uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-emerald-400" />
              {item.status} ✅
            </div>
            <div className="px-5 py-2 rounded-full bg-[#fdfbf7]/10 backdrop-blur-md border border-[#fdfbf7]/20 text-[10px] font-bold text-[#fdfbf7] tracking-[0.2em] uppercase">
              {item.year}
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 flex-1 flex flex-col relative z-20">
          
          {/* Metadata Row */}
          <div className="flex flex-col gap-1 mb-3">
            <span className="text-emerald-400 font-bold text-[10px] tracking-[0.2em] uppercase flex items-center gap-1.5">
              <FlaskConical size={12} /> {item.organization}
            </span>
            <span className="text-[#fdfbf7]/50 text-[9px] tracking-wider uppercase font-medium pl-4">
              Collab: {item.academicCollaboration}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-xl md:text-2xl font-bold text-[#fdfbf7] mb-2 leading-tight tracking-tight group-hover:text-[#ff7eb3] transition-colors">
            {item.module}
          </h3>

          <p className="text-[#fdfbf7]/50 text-[11px] font-medium tracking-widest uppercase mb-2">
            {item.department}
          </p>

          {/* Compact Timeline Block */}
          <div className="flex flex-col gap-2 mb-2 p-2.5 rounded-xl bg-[#fdfbf7]/[0.02] border border-[#fdfbf7]/5">
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-emerald-400" />
              <span className="text-[#fdfbf7]/80 font-mono text-[11px]">{item.startDate} – {item.endDate}</span>
            </div>
            <div className="h-[1px] w-full bg-[#fdfbf7]/5 my-0.5" />
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#ff7eb3]" />
              <span className="text-[#fdfbf7]/60 text-[11px] tracking-wide">{item.duration} • {item.location}</span>
            </div>
          </div>

          {/* Expandable Description */}
          <div className="relative font-body text-[#fdfbf7]/40 text-sm mb-3 leading-relaxed">
            <motion.div
              initial={false}
              animate={{ height: expanded ? "auto" : "32px" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden relative"
            >
              <p className={!expanded ? "line-clamp-3" : ""}>
                {item.summary}
              </p>
            </motion.div>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(!expanded);
              }}
              className="mt-2 text-[#ff7eb3] hover:text-[#14b8a6] font-bold font-mono text-[10px] tracking-widest uppercase transition-colors flex items-center gap-1 group/btn"
            >
              {expanded ? "Show Less" : "Show More"}
              <span className="transform group-hover/btn:translate-y-0.5 transition-transform">
                {expanded ? '↑' : '↓'}
              </span>
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {item.badges.slice(0, 3).map((badge, idx) => (
              <span key={idx} className="px-3 py-1 rounded-md bg-[#fdfbf7]/[0.03] border border-[#fdfbf7]/10 text-[#fdfbf7]/60 text-[9px] tracking-wider uppercase font-medium">
                {badge}
              </span>
            ))}
            {item.badges.length > 3 && (
              <span className="px-3 py-1 rounded-md bg-[#fdfbf7]/[0.03] border border-[#fdfbf7]/10 text-[#fdfbf7]/40 text-[9px] tracking-wider uppercase font-medium">
                +{item.badges.length - 3}
              </span>
            )}
          </div>

          {/* Action Area */}
          <div className="mt-auto flex flex-col sm:flex-row items-center gap-3">
            <button 
              onClick={() => onViewDetails(item)}
              className="w-full flex-1 px-6 py-4 rounded-2xl bg-emerald-500/10 text-emerald-400 font-bold text-[10px] tracking-[0.2em] uppercase border border-emerald-500/20 hover:bg-emerald-500 hover:text-[#0B0618] transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] text-center"
            >
              View Details
            </button>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
};

// ==========================================
// DETAILS OVERLAY MODAL COMPONENT
// ==========================================
const InternshipDetailsModal = ({ item, onClose }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!item) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
    >
      <motion.div 
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        className="relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08] backdrop-blur-[30px] rounded-[32px] max-w-2xl w-full overflow-hidden shadow-[0_0_100px_rgba(124,58,237,0.2)] p-6 md:p-8 max-h-[90vh] overflow-y-auto"
      >
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(253, 251, 247,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(253, 251, 247,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30 pointer-events-none" />

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#fdfbf7]/5 border border-[#fdfbf7]/10 text-[#fdfbf7]/60 hover:text-[#fdfbf7] hover:bg-[#fdfbf7]/20 hover:scale-110 flex items-center justify-center transition-all z-20"
        >
          <X size={20} />
        </button>

        <div className="relative z-10 flex flex-col gap-6">
          {/* Header */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                {item.status} ✅
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#fdfbf7]/10 text-[#fdfbf7]/60 text-[10px] font-bold font-mono border border-[#fdfbf7]/10">
                {item.year}
              </span>
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#fdfbf7] leading-tight mb-1">
              {item.title}
            </h3>
            <p className="text-[#ff7eb3] text-sm font-semibold tracking-wide uppercase font-body mb-2">
              {item.type}
            </p>
          </div>

          <div className="w-full h-[1px] bg-[#fdfbf7]/10" />

          {/* Premium Timeline Layout */}
          <div className="relative border-l border-white/10 pl-6 ml-4 space-y-10 my-2">
            
            {/* NODE 1: INTERNSHIP PROFILE */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              {/* Indicator Dot */}
              <div className="absolute -left-[33px] top-1 w-5 h-5 rounded-full bg-[#0B0618] border-2 border-emerald-400 flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 backdrop-blur-md">
                <span className="text-[#ff7eb3] text-[9px] font-mono tracking-widest uppercase block mb-1 font-bold">INTERNSHIP PROFILE</span>
                <h4 className="text-lg font-bold text-[#fdfbf7] mb-3">{item.organization}</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mt-3">
                  <div className="flex items-center gap-2 text-white/70">
                    <Briefcase size={14} className="text-emerald-400 flex-shrink-0" />
                    <span><strong>Academic Partner:</strong> {item.academicCollaboration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <FlaskConical size={14} className="text-[#ff7eb3] flex-shrink-0" />
                    <span><strong>Department:</strong> {item.department}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <Calendar size={14} className="text-[#D8B4FE] flex-shrink-0" />
                    <span><strong>Duration:</strong> {item.duration} ({item.startDate} – {item.endDate})</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <MapPin size={14} className="text-emerald-400 flex-shrink-0" />
                    <span><strong>Location:</strong> {item.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* NODE 2: RESEARCH FOCUS & METHODOLOGY */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="relative"
            >
              {/* Indicator Dot */}
              <div className="absolute -left-[33px] top-1 w-5 h-5 rounded-full bg-[#0B0618] border-2 border-[#ff7eb3] flex items-center justify-center shadow-[0_0_10px_rgba(255,126,179,0.3)]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff7eb3]" />
              </div>
              
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 backdrop-blur-md">
                <span className="text-[#ff7eb3] text-[9px] font-mono tracking-widest uppercase block mb-1 font-bold">RESEARCH TITLE & METHODOLOGY</span>
                <h4 className="text-base font-bold text-[#fdfbf7] mb-2 leading-snug">{item.module}</h4>
                <p className="text-white/60 text-sm leading-relaxed mb-4 font-body">{item.summary}</p>
                
                <span className="text-white/40 text-[9px] font-mono tracking-widest uppercase block mb-2">CORE SKILLS INVOLVED</span>
                <div className="flex flex-wrap gap-2">
                  {item.badges.map((skill, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-[#7C3AED]/10 text-[#D8B4FE] text-[11px] font-mono border border-[#7C3AED]/20 hover:bg-[#7C3AED]/20 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* NODE 3: RESEARCH DELIVERABLE */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="relative"
            >
              {/* Indicator Dot */}
              <div className="absolute -left-[33px] top-1 w-5 h-5 rounded-full bg-[#0B0618] border-2 border-[#D8B4FE] flex items-center justify-center shadow-[0_0_10px_rgba(216,180,254,0.3)]">
                <FileText size={11} className="text-[#D8B4FE]" />
              </div>
              
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 backdrop-blur-md">
                <span className="text-[#ff7eb3] text-[9px] font-mono tracking-widest uppercase block mb-1 font-bold">RESEARCH REPORT DELIVERABLE</span>
                <h4 className="text-sm font-bold text-[#fdfbf7] mb-2 leading-snug">{item.researchReport}</h4>
                <p className="text-white/50 text-xs font-body">
                  A comprehensive in-silico scientific analysis documenting pharmacological observations, docking scores, binding affinities, and molecular dynamic simulations of Celecoxib alternatives.
                </p>
              </div>
            </motion.div>

            {/* NODE 4: VERIFIED CERTIFICATE */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="relative"
            >
              {/* Indicator Dot */}
              <div className="absolute -left-[33px] top-1 w-5 h-5 rounded-full bg-[#0B0618] border-2 border-emerald-400 flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                <Award size={11} className="text-emerald-400" />
              </div>
              
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 backdrop-blur-md relative overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="text-[#ff7eb3] text-[9px] font-mono tracking-widest uppercase font-bold">ACADEMIC & INDUSTRY CERTIFICATION</span>
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-bold text-emerald-400 tracking-wider uppercase">
                    <ShieldCheck size={12} /> Verified Completion
                  </div>
                </div>

                {/* PREMIUM GLASS CARD FOR CERTIFICATE */}
                <div className="relative group/cert rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] p-2 hover:border-[#ff7eb3]/30 transition-all duration-300">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer" onClick={() => setIsLightboxOpen(true)}>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 z-10">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-90 group-hover/cert:scale-100 transition-transform duration-300">
                        <Maximize2 size={16} />
                      </div>
                      <span className="text-white text-xs font-bold font-mono tracking-wider">Click to Enlarge</span>
                    </div>

                    <img 
                      src={item.certificateUrl} 
                      alt="Internship Certificate" 
                      width={640}
                      height={480}
                      loading="lazy"
                      className="w-full h-full object-cover filter brightness-90 group-hover/cert:brightness-100 transition-all duration-500"
                    />
                  </div>
                  
                  {/* Certificate Caption */}
                  <p className="text-white/60 text-[11px] italic text-center mt-3 px-2 leading-relaxed">
                    Internship Completion Certificate – Subhami Biopharma (OPC) Pvt. Ltd.
                  </p>
                  
                  {/* Download Button */}
                  <div className="mt-4 pt-3 border-t border-white/5 flex justify-center">
                    <a 
                      href={item.certificateUrl}
                      download="Shatarupa_Internship_Certificate.jpeg"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-[#0B0618] hover:border-emerald-500 font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                    >
                      <Download size={14} /> Download Certificate
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Close Lightbox Button */}
            <button 
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-50 border border-white/10"
              onClick={(e) => {
                e.stopPropagation();
                setIsLightboxOpen(false);
              }}
            >
              <X size={20} />
            </button>
            
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl max-h-[85vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={item.certificateUrl} 
                alt="Enlarged Internship Certificate" 
                width={800}
                height={600}
                loading="lazy"
                className="max-w-full max-h-[85vh] object-contain rounded-lg border border-white/10"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white/80 text-xs font-mono flex items-center gap-2">
                <span>Internship Completion Certificate</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <a href={item.certificateUrl} download="Shatarupa_Internship_Certificate.jpeg" className="text-emerald-400 hover:text-emerald-300 font-bold ml-1 flex items-center gap-1">
                  <Download size={12} /> Download
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ==========================================
// MAIN INTERNSHIP COMPONENT
// ==========================================
const Internship = () => {
  const [selectedInternship, setSelectedInternship] = useState(null);

  return (
    <section className="py-32 relative overflow-hidden" id="internship">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-24 md:mb-32">
          <ScrollReveal>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#ff7eb3]/80 mb-3 block">
              PROFESSIONAL TRAINING
            </span>
            <h2 className="font-display text-[40px] md:text-[52px] lg:text-[64px] font-bold leading-tight tracking-tight relative mb-6">
              <span className="bg-gradient-to-r from-[#FAF6F0] via-[#FBCFE8] to-[#D8B4FE] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(216,180,254,0.15)]">
                Internship
              </span>
            </h2>
            <p className="font-body text-white/75 text-lg max-w-[700px] mx-auto leading-relaxed text-center">
              Applying molecular dynamics and computational drug design in university research laboratories.
            </p>
          </ScrollReveal>
        </div>

        {/* FLAGSHIP CARD SHOWCASE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internshipData.map((item, index) => (
            <InternshipCard 
              key={item.id} 
              item={item} 
              index={index} 
              onViewDetails={(selected) => setSelectedInternship(selected)}
            />
          ))}
        </div>

        {/* Dynamic expansion modal popup */}
        <AnimatePresence>
          {selectedInternship && (
            <InternshipDetailsModal 
              item={selectedInternship} 
              onClose={() => setSelectedInternship(null)}
            />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Internship;
