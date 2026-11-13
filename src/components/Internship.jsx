import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { FlaskConical, Calendar, MapPin, X, FileText, Award, Briefcase, ShieldCheck, Download, Maximize2 } from 'lucide-react';
import { HiExternalLink, HiEye } from 'react-icons/hi';
import SectionHeader from './SectionHeader';

// ==========================================
// INTERNSHIP DATA CONFIGURATION
// Ready for multiple items in 2-column layout
// ==========================================
const internshipData = [
  {
    id: 1,
    status: "Completed",
    organization: "Subhami Biopharma (OPC) Pvt. Ltd.",
    organizationSub: "Govt. of India Certified (MCA, Startup India, MSME)",
    academicCollaboration: "Jadavpur University (Main Campus)",
    department: "Department of Biotechnology",
    startDate: "3 June 2026",
    endDate: "7 July 2026",
    duration: "60 Hours Intensive",
    location: "Kolkata, West Bengal, India",
    type: "Industry & Academic Research Internship",
    title: "In Silico Drug Design",
    module: "In Silico Drug Design: Integrating Molecular Dynamics & Computational Chemistry for Novel Therapeutic Innovation",
    summary: "Completed a 60-hour intensive computational research internship focusing on molecular docking, molecular dynamics simulations, and virtual screening to evaluate novel therapeutic candidates under academic guidance at Jadavpur University.",
    badges: ["Molecular Docking", "Computational Chemistry", "Molecular Dynamics", "Drug Discovery", "Virtual Screening", "Bioinformatics"],
    researchReport: "A Comprehensive In-Silico Study of Celecoxib, a Non-Opioid Analgesic and Alternatives via Molecular Docking",
    certificateUrl: "/internship-certificate.jpeg",
    campusUrl: "/internship-1.jpg",
    year: "2026"
  }
];

// ==========================================
// 2-COLUMN COMPACT PROFESSIONAL CARD COMPONENT
// ==========================================
const InternshipCard = ({ item, onViewDetails, onInspectCertificate }) => {
  const [activeMedia, setActiveMedia] = useState('certificate'); // 'certificate' | 'campus'

  return (
    <ScrollReveal delay={60}>
      <div className="group relative h-full flex flex-col bg-[#140a28]/85 backdrop-blur-2xl rounded-2xl border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 overflow-hidden shadow-xl">
        {/* Subtle Ambient Glow */}
        <div className="absolute -top-24 -left-24 w-60 h-60 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-emerald-500/15 transition-all duration-500" />

        {/* Visual Media Banner (Compact: h-52) */}
        <div 
          onClick={() => onInspectCertificate(item)}
          className="relative h-52 w-full overflow-hidden bg-black/60 cursor-pointer group/media"
        >
          <img 
            src={activeMedia === 'certificate' ? item.certificateUrl : item.campusUrl} 
            alt={activeMedia === 'certificate' ? "Internship Certificate" : "Jadavpur University Campus"} 
            width={540}
            height={280}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/media:scale-105 filter brightness-95 group-hover/media:brightness-100" 
          />

          {/* Bottom Gradient Mask */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#140a28] via-[#140a28]/20 to-transparent pointer-events-none" />

          {/* Hover Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/media:opacity-100 transition-opacity duration-200 bg-black/45 backdrop-blur-[2px]">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 text-white text-xs font-semibold tracking-wider border border-white/20 shadow-lg">
              <Maximize2 size={13} className="text-[#14b8a6]" /> Quick View HD
            </span>
          </div>

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/85 text-emerald-400 border border-emerald-500/40 backdrop-blur-md flex items-center gap-1.5 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Verified Completion
            </span>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider bg-black/85 text-white/80 border border-white/15 backdrop-blur-md font-mono">
              {item.year}
            </span>
          </div>

          {/* Media Switcher Tab on bottom */}
          <div 
            className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between p-1 bg-black/80 backdrop-blur-md rounded-xl border border-white/10 z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveMedia('certificate')}
              className={`flex-1 py-1 rounded-lg text-[10px] font-bold tracking-wider uppercase transition-all ${
                activeMedia === 'certificate' 
                  ? 'bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 shadow-sm' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              📜 Certificate
            </button>
            <button
              type="button"
              onClick={() => setActiveMedia('campus')}
              className={`flex-1 py-1 rounded-lg text-[10px] font-bold tracking-wider uppercase transition-all ${
                activeMedia === 'campus' 
                  ? 'bg-[#7C3AED]/25 text-[#D8B4FE] border border-[#7C3AED]/40 shadow-sm' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              🏛️ JU Campus
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            {/* Metadata Row */}
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 flex items-center gap-1.5 truncate max-w-[240px]">
                <FlaskConical size={11} /> {item.organization}
              </span>
              <span className="text-white/40 font-mono text-[11px] shrink-0">
                {item.startDate} – {item.endDate}
              </span>
            </div>

            {/* Academic Partner */}
            <div className="flex items-center gap-1.5 text-[11px] text-[#ff7eb3] font-semibold tracking-wide uppercase mb-2">
              <Briefcase size={12} className="text-[#ff7eb3]" />
              <span className="truncate">Collab: {item.academicCollaboration}</span>
            </div>

            {/* Title */}
            <h3 className="font-display text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#ff7eb3] transition-colors">
              {item.module}
            </h3>

            {/* Summary */}
            <p className="font-body text-white/65 text-xs leading-relaxed line-clamp-3 mb-3">
              {item.summary}
            </p>

            {/* Research Report Box */}
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.07] mb-3">
              <div className="flex items-center gap-1.5 text-[#ff7eb3] text-[10px] font-mono tracking-wider font-bold mb-1">
                <FileText size={12} /> Research Report Deliverable
              </div>
              <p className="text-white/90 text-xs font-semibold leading-snug line-clamp-2">
                "{item.researchReport}"
              </p>
            </div>

            {/* Competency Chips */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {item.badges.slice(0, 5).map((badge, idx) => (
                <span 
                  key={idx} 
                  className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-white/[0.03] border border-white/[0.06] text-white/70"
                >
                  #{badge}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2">
            <button 
              type="button"
              onClick={() => onViewDetails(item)}
              className="flex-1 py-2 px-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 hover:text-white border border-emerald-500/30 font-bold text-xs tracking-wide uppercase transition-all flex items-center justify-center gap-1.5 active:scale-95"
            >
              <Award size={14} /> Full Details
            </button>

            <button
              type="button"
              onClick={() => onInspectCertificate(item)}
              className="py-2 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white/80 hover:text-white border border-white/[0.08] font-bold text-xs tracking-wide uppercase transition-all flex items-center justify-center gap-1.5 active:scale-95"
            >
              <HiEye className="text-sm text-[#14b8a6]" /> Certificate
            </button>

            <a 
              href={item.certificateUrl}
              download="Shatarupa_Internship_Certificate.jpeg"
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-emerald-500/15 text-emerald-400 border border-white/[0.08] hover:border-emerald-500/30 transition-all active:scale-95"
              title="Download certificate"
              aria-label="Download certificate"
            >
              <Download size={14} />
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

// ==========================================
// DETAILS OVERLAY MODAL COMPONENT (Timeline)
// ==========================================
const InternshipDetailsModal = ({ item, onClose, onInspectCertificate }) => {
  if (!item) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="relative bg-gradient-to-br from-[#180c2f] to-[#0d061c] border border-white/[0.12] backdrop-blur-[30px] rounded-3xl max-w-2xl w-full overflow-hidden shadow-[0_0_100px_rgba(124,58,237,0.25)] p-6 md:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/20 hover:scale-110 flex items-center justify-center transition-all z-20"
          aria-label="Close modal"
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
              <span className="px-3 py-1.5 rounded-full bg-white/5 text-white/60 text-[10px] font-bold font-mono border border-white/10">
                {item.year}
              </span>
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight mb-1">
              {item.title}
            </h3>
            <p className="text-[#ff7eb3] text-sm font-semibold tracking-wide uppercase font-body mb-2">
              {item.type}
            </p>
          </div>

          <div className="w-full h-[1px] bg-white/10" />

          {/* Timeline Layout */}
          <div className="relative border-l border-white/10 pl-6 ml-4 space-y-8 my-2">
            
            {/* NODE 1: INTERNSHIP PROFILE */}
            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-5 h-5 rounded-full bg-[#0B0618] border-2 border-emerald-400 flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 backdrop-blur-md">
                <span className="text-[#ff7eb3] text-[9px] font-mono tracking-widest uppercase block mb-1 font-bold">INTERNSHIP PROFILE</span>
                <h4 className="text-lg font-bold text-white mb-3">{item.organization}</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mt-3">
                  <div className="flex items-center gap-2 text-white/70">
                    <Briefcase size={14} className="text-emerald-400 flex-shrink-0" />
                    <span><strong>Partner:</strong> {item.academicCollaboration}</span>
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
            </div>

            {/* NODE 2: RESEARCH FOCUS & METHODOLOGY */}
            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-5 h-5 rounded-full bg-[#0B0618] border-2 border-[#ff7eb3] flex items-center justify-center shadow-[0_0_10px_rgba(255,126,179,0.3)]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff7eb3]" />
              </div>
              
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 backdrop-blur-md">
                <span className="text-[#ff7eb3] text-[9px] font-mono tracking-widest uppercase block mb-1 font-bold">RESEARCH TITLE & METHODOLOGY</span>
                <h4 className="text-base font-bold text-white mb-2 leading-snug">{item.module}</h4>
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
            </div>

            {/* NODE 3: RESEARCH DELIVERABLE */}
            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-5 h-5 rounded-full bg-[#0B0618] border-2 border-[#D8B4FE] flex items-center justify-center shadow-[0_0_10px_rgba(216,180,254,0.3)]">
                <FileText size={11} className="text-[#D8B4FE]" />
              </div>
              
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 backdrop-blur-md">
                <span className="text-[#ff7eb3] text-[9px] font-mono tracking-widest uppercase block mb-1 font-bold">RESEARCH REPORT DELIVERABLE</span>
                <h4 className="text-sm font-bold text-white mb-2 leading-snug">{item.researchReport}</h4>
                <p className="text-white/50 text-xs font-body">
                  A comprehensive in-silico scientific analysis documenting pharmacological observations, docking scores, binding affinities, and molecular dynamic simulations of Celecoxib alternatives.
                </p>
              </div>
            </div>

            {/* NODE 4: VERIFIED CERTIFICATE */}
            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-5 h-5 rounded-full bg-[#0B0618] border-2 border-emerald-400 flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                <Award size={11} className="text-emerald-400" />
              </div>
              
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 backdrop-blur-md relative overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="text-[#ff7eb3] text-[9px] font-mono tracking-widest uppercase font-bold">ACADEMIC & INDUSTRY CERTIFICATION</span>
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-bold text-emerald-400 tracking-wider uppercase">
                    <ShieldCheck size={12} /> Verified Completion
                  </div>
                </div>

                {/* Thumbnail Certificate Preview */}
                <div 
                  onClick={() => onInspectCertificate(item)}
                  className="relative group/cert rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] p-2 hover:border-[#14b8a6]/40 transition-all cursor-pointer"
                >
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <img 
                      src={item.certificateUrl} 
                      alt="Internship Certificate" 
                      width={640}
                      height={480}
                      loading="lazy"
                      className="w-full h-full object-cover filter brightness-90 group-hover/cert:brightness-100 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                      <span className="px-3 py-1.5 rounded-full bg-black/80 text-white text-xs font-semibold flex items-center gap-1.5 border border-white/20">
                        <Maximize2 size={14} className="text-[#14b8a6]" /> Click to Enlarge
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ==========================================
// MAIN INTERNSHIP COMPONENT (2-Column Grid Architecture)
// ==========================================
const Internship = () => {
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedInternship(null);
        setIsLightboxOpen(false);
      }
    };
    if (selectedInternship || isLightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedInternship, isLightboxOpen]);

  return (
    <section className="py-24 relative overflow-hidden" id="internship">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <SectionHeader 
          eyebrow="PROFESSIONAL TRAINING" 
          title="Research Internship" 
          subtitle="Applying molecular dynamics and computational drug design in cutting-edge university research laboratories and industry collaboration." 
        />

        {/* 2-COLUMN RESPONSIVE GRID LAYOUT (Centered when 1, dual-column when multiple) */}
        <div className={`grid grid-cols-1 ${internshipData.length > 1 ? 'md:grid-cols-2' : 'max-w-xl'} gap-8 mx-auto`}>
          {internshipData.map((item) => (
            <InternshipCard 
              key={item.id} 
              item={item} 
              onViewDetails={(selected) => setSelectedInternship(selected)}
              onInspectCertificate={() => setIsLightboxOpen(true)}
            />
          ))}
        </div>

        {/* Detailed Timeline Modal */}
        <AnimatePresence>
          {selectedInternship && (
            <InternshipDetailsModal 
              item={selectedInternship} 
              onClose={() => setSelectedInternship(null)}
              onInspectCertificate={() => setIsLightboxOpen(true)}
            />
          )}
        </AnimatePresence>

        {/* Full-Screen Certificate Lightbox Modal */}
        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-md"
              onClick={() => setIsLightboxOpen(false)}
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-50 border border-white/20 shadow-xl focus:outline-none"
                aria-label="Close modal"
              >
                <X size={22} />
              </button>
              
              {/* Modal Box */}
              <motion.div
                initial={{ scale: 0.94, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.94, opacity: 0, y: 15 }}
                transition={{ type: "spring", duration: 0.35 }}
                className="relative max-w-4xl w-full max-h-[88vh] bg-[#140a28] border border-white/15 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(16,185,129,0.3)] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Top Bar */}
                <div className="px-5 py-3.5 border-b border-white/10 bg-[#0B0618]/90 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Subhami Biopharma • Jadavpur University
                    </span>
                    <span className="text-white/20">•</span>
                    <span className="text-xs text-white/50 font-mono">
                      60hr In Silico Drug Design
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      Verified
                    </span>
                  </div>

                  <a 
                    href="/internship-certificate.jpeg"
                    download="Shatarupa_Internship_Certificate.jpeg"
                    className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <Download size={13} /> Download Certificate
                  </a>
                </div>

                {/* Certificate Image View */}
                <div className="flex-1 overflow-auto p-4 bg-black/60 flex items-center justify-center min-h-[260px]">
                  <img 
                    src="/internship-certificate.jpeg" 
                    alt="Verified Internship Certificate" 
                    className="max-w-full max-h-[62vh] object-contain rounded-lg shadow-xl border border-white/10"
                  />
                </div>

                {/* Modal Footer */}
                <div className="px-5 py-4 border-t border-white/10 bg-[#0B0618]/95">
                  <h4 className="text-base font-bold text-white mb-1 font-display">
                    Certificate of Completion – In Silico Drug Design
                  </h4>
                  <p className="text-xs text-white/70 font-body leading-relaxed">
                    Issued by Subhami Biopharma (OPC) Pvt. Ltd. (incorporated under MCA, Startup India & MSME) in academic collaboration with Jadavpur University, Kolkata.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Internship;
