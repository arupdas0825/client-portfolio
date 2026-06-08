import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import useTilt from '../hooks/useTilt';
import { FlaskConical, Calendar, MapPin, X, FileText, Award, User } from 'lucide-react';
import { HiExternalLink } from 'react-icons/hi';

// ==========================================
// INTERNSHIP DATA CONFIGURATION
// ==========================================
const internshipData = [
  {
    id: 1,
    institution: "Jadavpur University (Main Campus)",
    department: "Biotechnology",
    title: "In Silico Drug Design",
    module: "In Silico Drug Design: Integrating Molecular Dynamics & Computational Chemistry for Novel Therapeutic Innovation",
    duration: "1 Month+",
    startDate: "3 June 2026",
    endDate: "6 July 2026",
    location: "Kolkata, India",
    status: "Completed",
    year: "2026",
    summary: "Completed a biotechnology internship at Jadavpur University focused on computational drug discovery methodologies. The program explored molecular dynamics simulations, computational chemistry workflows, and modern in-silico approaches used in therapeutic innovation and pharmaceutical research.",
    badges: ["Biotechnology", "Drug Design", "Computational Chemistry", "Molecular Dynamics", "Research Training"],
    
    // Future-proofing placeholders
    supervisorName: "",
    researchOutcome: "",
    skillsAcquired: [],
    projectWork: "",
    certificateUrl: "",
    reportUrl: "",
  }
];

// ==========================================
// PREMIUM INTERNSHIP CARD COMPONENT
// ==========================================
const InternshipCard = ({ item, index, onViewDetails }) => {
  const [expanded, setExpanded] = useState(false);
  const tiltRef = useTilt();

  return (
    <ScrollReveal delay={index * 100}>
      <motion.div
        ref={tiltRef}
        whileHover={{ scale: 1.02 }}
        className="group relative w-full min-h-[480px] max-w-[480px] mx-auto flex flex-col bg-white/[0.04] backdrop-blur-[20px] rounded-[32px] border border-white/[0.08] hover:border-[#7C3AED]/40 transition-all duration-300 overflow-hidden shadow-2xl transform-gpu"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Hover Glow Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 via-transparent to-[#ff7eb3]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Visual Header Area */}
        <div className="relative h-32 overflow-hidden bg-[#fdfbf7]/[0.02]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0618] via-transparent to-black/20 z-10" />
          
          <img 
            src="/Internship 1.jpg" 
            alt="Internship at Jadavpur University" 
            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
          />
          
          {/* Category Badges */}
          <div className="absolute top-6 left-6 z-20 flex gap-2">
            <div className="px-5 py-2 rounded-full bg-black/40 backdrop-blur-md border border-[#14b8a6]/30 text-[10px] font-bold text-[#14b8a6] tracking-[0.2em] uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(20,184,166,0.4)]">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-[#14b8a6]" />
              {item.status}
            </div>
            <div className="px-5 py-2 rounded-full bg-[#fdfbf7]/10 backdrop-blur-md border border-[#fdfbf7]/20 text-[10px] font-bold text-[#fdfbf7] tracking-[0.2em] uppercase">
              {item.year}
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 flex-1 flex flex-col relative z-20">
          
          {/* Metadata Row */}
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#14b8a6] font-bold text-[10px] tracking-[0.3em] uppercase flex items-center gap-1.5">
              <FlaskConical size={12} /> {item.institution}
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
              <Calendar size={14} className="text-[#14b8a6]" />
              <span className="text-[#fdfbf7]/80 font-mono text-[11px]">{item.startDate} → {item.endDate}</span>
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
              className="w-full flex-1 px-6 py-4 rounded-2xl bg-[#14b8a6]/10 text-[#14b8a6] font-bold text-[10px] tracking-[0.2em] uppercase border border-[#14b8a6]/20 hover:bg-[#14b8a6] hover:text-[#0B0618] transition-all duration-300 shadow-[0_0_15px_rgba(20,184,166,0.15)] hover:shadow-[0_0_25px_rgba(20,184,166,0.3)] text-center"
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
  if (!item) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
    >
      <motion.div 
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        className="relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08] backdrop-blur-[30px] rounded-[32px] max-w-2xl w-full overflow-hidden shadow-[0_0_100px_rgba(124,58,237,0.2)] p-8 max-h-[90vh] overflow-y-auto"
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

        <div className="relative z-10 flex flex-col gap-8">
          {/* Header */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1.5 rounded-full bg-[#14b8a6]/20 text-[#14b8a6] text-[10px] font-bold uppercase tracking-[0.2em] border border-[#14b8a6]/30 shadow-[0_0_15px_rgba(20, 184, 166,0.2)]">
                {item.status} Internship
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#fdfbf7]/10 text-[#fdfbf7]/60 text-[10px] font-bold font-mono border border-[#fdfbf7]/10">
                {item.year}
              </span>
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#fdfbf7] leading-tight mb-2">
              {item.title}
            </h3>
            <p className="text-[#ff7eb3] text-sm italic font-body">
              {item.module}
            </p>
          </div>

          <div className="w-full h-[1px] bg-[#fdfbf7]/10" />

          {/* Details list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#fdfbf7]/5 flex items-center justify-center text-[#14b8a6] border border-[#fdfbf7]/10 flex-shrink-0">
                <FlaskConical size={18} />
              </div>
              <div>
                <span className="text-[#fdfbf7]/40 text-[9px] font-mono tracking-widest uppercase block mb-1">Institution</span>
                <span className="text-[#fdfbf7]/90 text-sm font-semibold">{item.institution}</span>
                <span className="text-[#fdfbf7]/50 text-xs block font-body mt-0.5">{item.department}</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#fdfbf7]/5 flex items-center justify-center text-[#ff7eb3] border border-[#fdfbf7]/10 flex-shrink-0">
                <Calendar size={18} />
              </div>
              <div>
                <span className="text-[#fdfbf7]/40 text-[9px] font-mono tracking-widest uppercase block mb-1">Duration & Period</span>
                <span className="text-[#fdfbf7]/90 text-xs font-mono block">{item.startDate} – {item.endDate}</span>
                <span className="text-[#fdfbf7]/50 text-xs block mt-0.5">{item.duration}</span>
              </div>
            </div>

            <div className="flex items-start gap-4 md:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-[#fdfbf7]/5 flex items-center justify-center text-[#14b8a6] border border-[#fdfbf7]/10 flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <span className="text-[#fdfbf7]/40 text-[9px] font-mono tracking-widest uppercase block mb-1">Location</span>
                <span className="text-[#fdfbf7]/90 text-sm">{item.location}</span>
              </div>
            </div>

            {/* RESEARCH SUMMARY */}
            <div className="md:col-span-2 bg-[#fdfbf7]/[0.03] border border-[#fdfbf7]/10 rounded-2xl p-6 mt-2 shadow-inner">
              <span className="text-[#ff7eb3] text-[10px] font-mono tracking-widest uppercase block mb-3 font-bold">Overview Summary</span>
              <p className="text-[#fdfbf7]/70 text-sm leading-relaxed font-body">
                {item.summary}
              </p>
            </div>

            {/* DYNAMIC FUTURE-PROOF DETAILS */}
            {(item.supervisorName || item.projectWork || item.researchOutcome || (item.skillsAcquired && item.skillsAcquired.length > 0)) && (
              <div className="md:col-span-2 space-y-4 pt-4 border-t border-[#fdfbf7]/10">
                <span className="text-[#14b8a6] text-[10px] font-mono uppercase tracking-widest block mb-2 font-bold">// Research Addendum</span>
                
                {item.supervisorName && (
                  <div className="bg-[#fdfbf7]/[0.03] border border-[#fdfbf7]/10 rounded-2xl p-4 flex items-start gap-4">
                    <User size={18} className="text-[#14b8a6] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-[#fdfbf7]/40 text-[9px] font-mono tracking-widest uppercase block mb-1">Supervisor</span>
                      <span className="text-[#fdfbf7]/90 text-sm font-semibold">{item.supervisorName}</span>
                    </div>
                  </div>
                )}

                {item.projectWork && (
                  <div className="bg-[#fdfbf7]/[0.03] border border-[#fdfbf7]/10 rounded-2xl p-5">
                    <span className="text-[#fdfbf7]/40 text-[9px] font-mono tracking-widest uppercase block mb-2">Project Details</span>
                    <p className="text-[#fdfbf7]/70 text-sm leading-relaxed font-body">{item.projectWork}</p>
                  </div>
                )}

                {item.researchOutcome && (
                  <div className="bg-[#fdfbf7]/[0.03] border border-[#14b8a6]/20 rounded-2xl p-5 flex items-start gap-4 shadow-[0_0_20px_rgba(20, 184, 166,0.05)]">
                    <Award size={20} className="text-[#ff7eb3] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-[#ff7eb3] text-[9px] font-mono tracking-widest uppercase block mb-1 font-bold">Key Outcome</span>
                      <span className="text-[#fdfbf7]/90 text-sm leading-relaxed">{item.researchOutcome}</span>
                    </div>
                  </div>
                )}

                {item.skillsAcquired && item.skillsAcquired.length > 0 && (
                  <div className="bg-[#fdfbf7]/[0.03] border border-[#fdfbf7]/10 rounded-2xl p-5">
                    <span className="text-[#fdfbf7]/40 text-[9px] font-mono tracking-widest uppercase block mb-3">Extended Skills Acquired</span>
                    <div className="flex flex-wrap gap-2">
                      {item.skillsAcquired.map((skill, sIdx) => (
                        <span key={sIdx} className="px-3 py-1.5 rounded-lg bg-[#14b8a6]/10 text-[#14b8a6] text-[10px] font-mono border border-[#14b8a6]/20 font-bold">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="w-full h-[1px] bg-[#fdfbf7]/10 mt-2" />

          {/* Action Links */}
          <div className="flex flex-wrap gap-4 mt-2">
            {item.certificateUrl ? (
              <a 
                href={item.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#14b8a6]/20 border border-[#14b8a6]/40 text-[#fdfbf7] hover:bg-[#14b8a6] font-bold text-xs tracking-widest uppercase hover:shadow-[0_0_20px_rgba(20, 184, 166,0.4)] transition-all"
              >
                <HiExternalLink className="text-lg" /> View Certificate
              </a>
            ) : (
              <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#fdfbf7]/5 border border-[#fdfbf7]/10 text-[#fdfbf7]/30 font-bold text-xs tracking-widest uppercase cursor-not-allowed">
                <HiExternalLink className="text-lg" /> Certificate (Pending)
              </div>
            )}
            
            {item.reportUrl && (
              <a 
                href={item.reportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ff7eb3]/10 border border-[#ff7eb3]/30 text-[#ff7eb3] hover:bg-[#ff7eb3]/20 hover:text-[#fdfbf7] font-bold text-xs tracking-widest uppercase hover:shadow-[0_0_20px_rgba(255, 126, 179,0.3)] transition-all"
              >
                <FileText size={16} /> Research Report
              </a>
            )}
          </div>
        </div>

      </motion.div>
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
