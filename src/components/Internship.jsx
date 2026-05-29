import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { Dna, FlaskConical, Calendar, MapPin, Award, User, FileText, Sparkles, X, Heart } from 'lucide-react';
import { HiExternalLink } from 'react-icons/hi';

// ==========================================
// INTERNSHIP DATA ARRAY (GRID COMPATIBLE)
// ==========================================
const internshipData = [
  {
    id: 1,
    institution: "Jadavpur University",
    campus: "Kolkata (Main Campus)",
    department: "Biotechnology",
    title: "In Silico Drug Design",
    module: "Integrating Molecular Dynamics & Computational Chemistry for Novel Therapeutic Innovation",
    duration: "1 Month",
    startDate: "3 June 2026",
    endDate: "30 June 2026",
    location: "Kolkata, India",
    status: "Upcoming", // "Upcoming" | "Confirmed" | "Completed"
    year: "2026",
    summary: "Completed a specialized biotechnology internship focused on computational drug discovery approaches. Gained exposure to molecular dynamics simulations, computational chemistry methodologies, virtual screening concepts, and modern in-silico techniques used in therapeutic innovation and pharmaceutical research.",
    badges: ["Biotechnology", "Drug Design", "Computational Chem", "Molecular Dynamics", "Research Training"],
    
    // Future-proofing placeholders (will show in detailed view once values are supplied)
    supervisorName: "",      // e.g., "Dr. Anirban Roy, Professor of Computational Biology"
    researchOutcome: "",     // e.g., "Identified 3 high-affinity ligand candidates targeting SARS-CoV-2 main protease."
    skillsAcquired: [],      // e.g., ["AutoDock Vina", "GROMACS", "PyMOL", "AmberTools", "Virtual Screening"]
    projectWork: "",         // e.g., "Docking study of natural compounds against therapeutic cancer receptors."
    certificateUrl: "",      // e.g., "/assets/internship_certificate.pdf"
    reportUrl: "",           // e.g., "/assets/internship_report.pdf"
  },
  {
    id: 2,
    institution: "IIT / IISER / Industry",
    campus: "Research Collaboration Slot",
    department: "Computational Biology",
    title: "Bioinformatics & Genomics",
    module: "Advanced Genome Annotation, Structural Alignment & Transcriptomic Sequencing Analysis",
    duration: "Prospective",
    startDate: "Winter 2026",
    endDate: "Summer 2027",
    location: "Target Institutions",
    status: "Exploring",
    year: "2026-27",
    summary: "Actively exploring research placements focusing on structural genomics, sequence alignment, evolutionary conservation, and biological pathway annotations utilizing machine learning models.",
    badges: ["Bioinformatics", "Genomics", "Machine Learning", "Structural Alignment"],
    supervisorName: "",
    researchOutcome: "",
    skillsAcquired: [],
    projectWork: "",
    certificateUrl: "",
    reportUrl: "",
  },
  {
    id: 3,
    institution: "Global Institutes",
    campus: "Clinical Collaboration",
    department: "Immunology",
    title: "Next-Gen Immunotherapy",
    module: "Modeling Antibody-Antigen Interactions & Dynamic Docking for Therapeutic Design",
    duration: "Collaborative",
    startDate: "TBD",
    endDate: "TBD",
    location: "Remote / Hybrid",
    status: "Exploring",
    year: "Future",
    summary: "Seeking opportunities to apply high-performance molecular dynamics simulations to vaccine development, structural antigen modeling, and immunotherapeutic target identification.",
    badges: ["Immunology", "Therapeutics", "MD Simulations", "Vaccine Design"],
    supervisorName: "",
    researchOutcome: "",
    skillsAcquired: [],
    projectWork: "",
    certificateUrl: "",
    reportUrl: "",
  }
];

// ==========================================
// COMPACT INTERNSHIP CARD COMPONENT
// ==========================================
const InternshipCard = ({ item, index, onViewDetails }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <ScrollReveal delay={index * 100}>
      <motion.div
        whileHover={{ y: -8 }}
        className="group relative h-full flex flex-col bg-gradient-to-br from-[#1a0b3c]/80 to-[#0d051a]/90 backdrop-blur-3xl rounded-[28px] border border-white/5 hover:border-[#c084fc]/45 transition-all duration-700 overflow-hidden shadow-xl min-h-[460px]"
      >
        {/* Glow Hover Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#c084fc]/10 via-transparent to-[#f9a8d4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* TOP: Header Area - Compact visual preview */}
        <div className="relative h-40 overflow-hidden bg-white/[0.01] border-b border-white/5">
          {/* Neon gradients and grid decor */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d051a] via-transparent to-black/20 z-10" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:16px_16px] opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#c084fc]/10 via-transparent to-[#f9a8d4]/5 opacity-60" />
          
          <div className="w-full h-full flex items-center justify-center bg-white/[0.01]">
            <FlaskConical size={48} className="text-white/5 group-hover:scale-110 transition-transform duration-700 animate-pulse" />
          </div>

          {/* Status Badge */}
          <div className="absolute top-4 left-4 z-20">
            <div className={`px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border text-[8px] font-bold tracking-[0.2em] uppercase flex items-center gap-1.5 shadow-md ${
              item.status === 'Upcoming' 
                ? 'border-[#c084fc]/40 text-[#c084fc]' 
                : 'border-[#f9a8d4]/40 text-[#f9a8d4]'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                item.status === 'Upcoming' ? 'bg-[#c084fc]' : 'bg-[#f9a8d4]'
              }`} />
              {item.status}
            </div>
          </div>

          {/* University Emblem Overlay */}
          <div className="absolute bottom-4 right-4 z-20">
            <div className="w-11 h-11 rounded-full bg-[#1a0b3c]/90 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#f9a8d4] shadow-lg group-hover:border-[#c084fc]/45 transition-colors">
              <Dna size={18} className="text-[#f9a8d4] group-hover:rotate-45 transition-transform duration-700" />
            </div>
          </div>
        </div>

        {/* MIDDLE: Title, Institution, and Metadata */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-2 font-mono">
            <span className="text-[#c084fc] font-bold text-[9px] tracking-[0.25em] uppercase truncate max-w-[140px]">{item.institution}</span>
            <div className="w-1 h-1 rounded-full bg-white/10" />
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-semibold text-white/40">{item.year}</span>
          </div>

          {/* Module Title - Fixed size and clamping */}
          <h3 className="font-display text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#f9a8d4] transition-colors line-clamp-1">
            {item.title}
          </h3>

          <span className="text-[10px] text-white/30 font-mono tracking-widest uppercase block mb-3">
            DEPT: {item.department}
          </span>

          {/* COMPACT TIMELINE BADGE */}
          <div className="mb-4 bg-white/[0.02] border border-white/5 rounded-xl p-2.5 flex flex-col gap-1 text-[10px] font-mono text-white/50">
            <div className="flex items-center gap-1.5">
              <Calendar size={11} className="text-[#c084fc]" />
              <span className="truncate">{item.startDate} – {item.endDate}</span>
            </div>
            <div className="flex justify-between items-center text-[9px] text-white/30 pt-1 border-t border-white/5 mt-0.5">
              <span>Duration:</span>
              <span className="text-[#f9a8d4] font-semibold">{item.duration}</span>
            </div>
          </div>

          {/* DESCRIPTION: Collapsible with Framer Motion height transition */}
          <div className="relative font-body text-xs text-white/55 mb-4 flex-1">
            <motion.div
              initial={false}
              animate={{ height: expanded ? "auto" : "55px" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden relative"
            >
              <p className="leading-relaxed">
                {item.summary}
              </p>
              {!expanded && (
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-[#0d051a] to-transparent pointer-events-none" />
              )}
            </motion.div>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(!expanded);
              }}
              className="mt-1 text-[#f9a8d4] hover:text-[#c084fc] font-bold font-mono text-[9px] tracking-wider uppercase transition-colors"
            >
              {expanded ? "Show Less" : "Show More"}
            </button>
          </div>

          {/* SKILLS: Sliced to max 3-4 visible tags */}
          <div className="mb-5">
            <div className="flex flex-wrap gap-1.5">
              {item.badges.slice(0, 4).map((badge, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded-md bg-[#c084fc]/5 border border-[#c084fc]/10 text-[#c084fc]/90 text-[9px] font-semibold tracking-wide">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* ACTIONS: Standardized buttons matching Certificates section */}
          <div className="mt-auto pt-4 border-t border-white/5 flex items-center gap-3">
            <button 
              onClick={() => onViewDetails(item)}
              className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-white hover:border-[#f9a8d4]/50 hover:bg-white/10 text-[10px] font-bold tracking-wider uppercase font-mono transition-all duration-300 active:scale-95"
            >
              View Details
            </button>
            
            {item.certificateUrl ? (
              <a 
                href={item.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-[#c084fc]/10 border border-[#c084fc]/20 text-[#c084fc] hover:bg-[#c084fc]/20 hover:text-white text-[10px] font-bold tracking-wider uppercase font-mono transition-all duration-300"
              >
                Certificate
              </a>
            ) : (
              <div className="px-4 py-2.5 rounded-xl bg-white/5 text-white/20 text-[10px] font-bold uppercase tracking-wider font-mono border border-white/5 cursor-not-allowed">
                Certificate
              </div>
            )}
          </div>
        </div>

      </motion.div>
    </ScrollReveal>
  );
};

// ==========================================
// DETAILS OVERLAY MODAL COMPONENT (FUTURE-PROOF)
// ==========================================
const InternshipDetailsModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
    >
      <motion.div 
        initial={{ scale: 0.95, y: 15 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 15 }}
        className="relative bg-gradient-to-br from-[#1a0b3c] to-[#0d051a] border border-[#c084fc]/30 rounded-[32px] max-w-lg w-full overflow-hidden shadow-2xl p-6 md:p-8"
      >
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px] opacity-25 pointer-events-none" />

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors z-20"
        >
          <X size={16} />
        </button>

        <div className="relative z-10 flex flex-col gap-6">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded bg-[#c084fc]/10 text-[#c084fc] text-[9px] font-bold uppercase tracking-widest border border-[#c084fc]/20">
                {item.status} Internship
              </span>
              <span className="px-2 py-1 rounded bg-white/5 text-white/40 text-[9px] font-bold font-mono">
                {item.year}
              </span>
            </div>

            <h3 className="font-display text-xl md:text-2xl font-bold text-white leading-snug">
              {item.title}
            </h3>
            <p className="text-white/40 text-xs mt-1 italic font-body">
              {item.module}
            </p>
          </div>

          <div className="w-full h-[1px] bg-white/10" />

          {/* Details list */}
          <div className="space-y-4">
            
            <div className="flex items-start gap-3">
              <FlaskConical size={16} className="text-[#c084fc] mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-white/30 text-[8px] font-mono tracking-wider uppercase block">Institution</span>
                <span className="text-white/90 text-sm font-semibold">{item.institution}</span>
                {item.campus && <span className="text-white/50 text-xs block font-body">{item.campus}</span>}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar size={16} className="text-[#f9a8d4] mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-white/30 text-[8px] font-mono tracking-wider uppercase block">Duration & Period</span>
                <span className="text-white/90 text-xs font-mono">{item.startDate} – {item.endDate} ({item.duration})</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-[#c084fc] mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-white/30 text-[8px] font-mono tracking-wider uppercase block">Location</span>
                <span className="text-white/90 text-xs">{item.location}</span>
              </div>
            </div>

            {/* RESEARCH SUMMARY */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 mt-2">
              <span className="text-white/30 text-[8px] font-mono tracking-wider uppercase block mb-1.5">Overview Summary</span>
              <p className="text-white/70 text-xs leading-relaxed font-body">
                {item.summary}
              </p>
            </div>

            {/* DYNAMIC FUTURE-PROOF DETAILS - Automatically display when populated in state config */}
            {(item.supervisorName || item.projectWork || item.researchOutcome || (item.skillsAcquired && item.skillsAcquired.length > 0)) && (
              <div className="space-y-3 pt-3 border-t border-white/5">
                <span className="text-[#c084fc] text-[9px] font-mono uppercase tracking-widest block mb-2">// Research Addendum</span>
                
                {item.supervisorName && (
                  <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex items-start gap-2.5">
                    <User size={14} className="text-[#c084fc] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-white/30 text-[8px] font-mono tracking-wider uppercase block mb-0.5">Supervisor</span>
                      <span className="text-white/80 text-[11px] font-semibold">{item.supervisorName}</span>
                    </div>
                  </div>
                )}

                {item.projectWork && (
                  <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3">
                    <span className="text-white/30 text-[8px] font-mono tracking-wider uppercase block mb-1">Project Details</span>
                    <p className="text-white/70 text-xs leading-relaxed font-body">{item.projectWork}</p>
                  </div>
                )}

                {item.researchOutcome && (
                  <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex items-start gap-2.5">
                    <Award size={14} className="text-[#f9a8d4] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-white/30 text-[8px] font-mono tracking-wider uppercase block mb-0.5">Key Outcome</span>
                      <span className="text-white/70 text-[11px] leading-relaxed">{item.researchOutcome}</span>
                    </div>
                  </div>
                )}

                {item.skillsAcquired && item.skillsAcquired.length > 0 && (
                  <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3">
                    <span className="text-white/30 text-[8px] font-mono tracking-wider uppercase block mb-1.5">Extended Skills Acquired</span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.skillsAcquired.map((skill, sIdx) => (
                        <span key={sIdx} className="px-2 py-0.5 rounded bg-[#c084fc]/5 text-[#c084fc] text-[9px] font-mono border border-[#c084fc]/10">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="w-full h-[1px] bg-white/10 mt-2" />

          {/* Action Links */}
          <div className="flex flex-wrap gap-3 mt-1">
            {item.certificateUrl && (
              <a 
                href={item.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#c084fc]/10 border border-[#c084fc]/20 text-[#c084fc] hover:bg-[#c084fc]/20 hover:text-white font-bold text-xs tracking-wider uppercase hover:shadow-lg transition-all"
              >
                <HiExternalLink className="text-sm" /> Certificate
              </a>
            )}
            
            {item.reportUrl && (
              <a 
                href={item.reportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f9a8d4]/10 border border-[#f9a8d4]/20 text-[#f9a8d4] hover:bg-[#f9a8d4]/20 hover:text-white font-bold text-xs tracking-wider uppercase hover:shadow-lg transition-all"
              >
                <FileText size={13} /> Research Report
              </a>
            )}
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};

// ==========================================
// MAIN INTERNSHIP COMPONENT (GRID REDESIGN)
// ==========================================
const Internship = () => {
  const [selectedInternship, setSelectedInternship] = useState(null);

  return (
    <section className="py-24 relative overflow-hidden bg-[#1a0a2e]" id="internship">
      {/* Background blobs matching standard portfolio decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#c084fc]/5 blur-[130px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#f9a8d4]/5 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-20">
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <FlaskConical size={14} className="text-[#f9a8d4]" />
              <span className="text-[#f9a8d4] font-bold text-[10px] tracking-[0.4em] uppercase">Professional growth</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Internships & <br/>
              <span className="bg-gradient-to-r from-[#f9a8d4] via-[#c084fc] to-[#f9a8d4] bg-clip-text text-transparent">Research Log</span>
            </h2>
            <p className="font-body text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
              Applying molecular dynamics and computational drug design in university research laboratories.
            </p>
          </ScrollReveal>
        </div>

        {/* COMPACT CARD GRID: 4 cols on large desktops, Laptop: 3 cols, Tablet: 2 cols, Mobile: 1 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
