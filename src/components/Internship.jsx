import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
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

  return (
    <ScrollReveal delay={index * 100}>
      <motion.div
        whileHover={{ y: -6 }}
        className="group relative h-full flex flex-col bg-gradient-to-br from-[#1a0b3c]/80 to-[#0d051a]/90 backdrop-blur-3xl rounded-3xl border border-white/10 hover:border-[#c084fc]/40 transition-all duration-700 overflow-hidden shadow-2xl"
      >
        {/* Hover Glow Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#c084fc]/10 via-transparent to-[#f9a8d4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Visual Header Area */}
        <div className="relative h-28 md:h-32 w-full overflow-hidden bg-white/[0.02]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d051a] via-transparent to-black/20 z-10" />
          
          <img 
            src="/Internship 1.jpg" 
            alt="Internship at Jadavpur University" 
            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
          />
          
          {/* Category Badges */}
          <div className="absolute top-3 left-4 z-20 flex gap-1.5">
            <div className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#c084fc]/30 text-[8px] font-bold text-[#c084fc] tracking-[0.2em] uppercase flex items-center gap-1 shadow-[0_0_10px_rgba(192,132,252,0.2)]">
              <span className="w-1 h-1 rounded-full animate-pulse bg-[#c084fc]" />
              {item.status}
            </div>
            <div className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[8px] font-bold text-white tracking-[0.2em] uppercase">
              {item.year}
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 flex-1 flex flex-col relative z-20">
          
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[#c084fc] font-bold text-[9px] tracking-[0.2em] uppercase flex items-center gap-1">
              <FlaskConical size={10} /> {item.institution}
            </span>
            <div className="w-[3px] h-[3px] rounded-full bg-white/20" />
            <span className="text-white/30 text-[9px] font-medium tracking-widest uppercase">
              {item.department}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-lg font-bold text-white mb-3 leading-tight tracking-tight group-hover:text-[#f9a8d4] transition-colors">
            {item.module}
          </h3>

          {/* Compact Timeline Block */}
          <div className="flex flex-col gap-1.5 mb-3 p-2 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-2">
              <Calendar size={12} className="text-[#c084fc]" />
              <span className="text-white/80 font-mono text-[10px]">{item.startDate} → {item.endDate}</span>
            </div>
            <div className="h-[1px] w-full bg-white/5 my-0.5" />
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-[#f9a8d4]" />
              <span className="text-white/60 text-[10px] tracking-wide">{item.duration} • {item.location}</span>
            </div>
          </div>

          {/* Expandable Description */}
          <div className="relative font-body text-white/40 text-xs mb-4 leading-relaxed">
            <motion.div
              initial={false}
              animate={{ height: expanded ? "auto" : "36px" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden relative"
            >
              <p className={!expanded ? "line-clamp-2" : ""}>
                {item.summary}
              </p>
            </motion.div>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(!expanded);
              }}
              className="mt-1.5 text-[#f9a8d4] hover:text-[#c084fc] font-bold font-mono text-[8px] tracking-widest uppercase transition-colors flex items-center gap-1 group/btn"
            >
              {expanded ? "Show Less" : "Show More"}
              <span className="transform group-hover/btn:translate-y-0.5 transition-transform">
                {expanded ? '↑' : '↓'}
              </span>
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {item.badges.slice(0, 3).map((badge, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-white/60 text-[8px] tracking-wider uppercase font-medium">
                {badge}
              </span>
            ))}
            {item.badges.length > 3 && (
              <span className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-white/40 text-[8px] tracking-wider uppercase font-medium">
                +{item.badges.length - 3}
              </span>
            )}
          </div>

          {/* Action Area (Bottom Pinned) */}
          <div className="mt-auto flex flex-col sm:flex-row items-center gap-2.5">
            <button 
              onClick={() => onViewDetails(item)}
              className="w-full flex-1 px-4 py-2.5 rounded-xl bg-[#c084fc]/10 text-[#c084fc] font-bold text-[9px] tracking-[0.2em] uppercase border border-[#c084fc]/20 hover:bg-[#c084fc] hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(192,132,252,0.1)] hover:shadow-[0_0_15px_rgba(192,132,252,0.3)] text-center"
            >
              View Details
            </button>
            <button 
              className="w-full flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/40 font-bold text-[9px] tracking-[0.2em] uppercase hover:bg-white/10 hover:text-white transition-all duration-300 text-center"
            >
              Certificate
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
        className="relative bg-gradient-to-br from-[#1a0b3c] to-[#0d051a] border border-[#c084fc]/30 rounded-[32px] max-w-2xl w-full overflow-hidden shadow-[0_0_100px_rgba(192,132,252,0.2)] p-8 max-h-[90vh] overflow-y-auto"
      >
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30 pointer-events-none" />

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/20 hover:scale-110 flex items-center justify-center transition-all z-20"
        >
          <X size={20} />
        </button>

        <div className="relative z-10 flex flex-col gap-8">
          {/* Header */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1.5 rounded-full bg-[#c084fc]/20 text-[#c084fc] text-[10px] font-bold uppercase tracking-[0.2em] border border-[#c084fc]/30 shadow-[0_0_15px_rgba(192,132,252,0.2)]">
                {item.status} Internship
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/10 text-white/60 text-[10px] font-bold font-mono border border-white/10">
                {item.year}
              </span>
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
              {item.title}
            </h3>
            <p className="text-[#f9a8d4] text-sm italic font-body">
              {item.module}
            </p>
          </div>

          <div className="w-full h-[1px] bg-white/10" />

          {/* Details list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#c084fc] border border-white/10 flex-shrink-0">
                <FlaskConical size={18} />
              </div>
              <div>
                <span className="text-white/40 text-[9px] font-mono tracking-widest uppercase block mb-1">Institution</span>
                <span className="text-white/90 text-sm font-semibold">{item.institution}</span>
                <span className="text-white/50 text-xs block font-body mt-0.5">{item.department}</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#f9a8d4] border border-white/10 flex-shrink-0">
                <Calendar size={18} />
              </div>
              <div>
                <span className="text-white/40 text-[9px] font-mono tracking-widest uppercase block mb-1">Duration & Period</span>
                <span className="text-white/90 text-xs font-mono block">{item.startDate} – {item.endDate}</span>
                <span className="text-white/50 text-xs block mt-0.5">{item.duration}</span>
              </div>
            </div>

            <div className="flex items-start gap-4 md:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#c084fc] border border-white/10 flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <span className="text-white/40 text-[9px] font-mono tracking-widest uppercase block mb-1">Location</span>
                <span className="text-white/90 text-sm">{item.location}</span>
              </div>
            </div>

            {/* RESEARCH SUMMARY */}
            <div className="md:col-span-2 bg-white/[0.03] border border-white/10 rounded-2xl p-6 mt-2 shadow-inner">
              <span className="text-[#f9a8d4] text-[10px] font-mono tracking-widest uppercase block mb-3 font-bold">Overview Summary</span>
              <p className="text-white/70 text-sm leading-relaxed font-body">
                {item.summary}
              </p>
            </div>

            {/* DYNAMIC FUTURE-PROOF DETAILS */}
            {(item.supervisorName || item.projectWork || item.researchOutcome || (item.skillsAcquired && item.skillsAcquired.length > 0)) && (
              <div className="md:col-span-2 space-y-4 pt-4 border-t border-white/10">
                <span className="text-[#c084fc] text-[10px] font-mono uppercase tracking-widest block mb-2 font-bold">// Research Addendum</span>
                
                {item.supervisorName && (
                  <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex items-start gap-4">
                    <User size={18} className="text-[#c084fc] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-white/40 text-[9px] font-mono tracking-widest uppercase block mb-1">Supervisor</span>
                      <span className="text-white/90 text-sm font-semibold">{item.supervisorName}</span>
                    </div>
                  </div>
                )}

                {item.projectWork && (
                  <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
                    <span className="text-white/40 text-[9px] font-mono tracking-widest uppercase block mb-2">Project Details</span>
                    <p className="text-white/70 text-sm leading-relaxed font-body">{item.projectWork}</p>
                  </div>
                )}

                {item.researchOutcome && (
                  <div className="bg-white/[0.03] border border-[#c084fc]/20 rounded-2xl p-5 flex items-start gap-4 shadow-[0_0_20px_rgba(192,132,252,0.05)]">
                    <Award size={20} className="text-[#f9a8d4] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-[#f9a8d4] text-[9px] font-mono tracking-widest uppercase block mb-1 font-bold">Key Outcome</span>
                      <span className="text-white/90 text-sm leading-relaxed">{item.researchOutcome}</span>
                    </div>
                  </div>
                )}

                {item.skillsAcquired && item.skillsAcquired.length > 0 && (
                  <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
                    <span className="text-white/40 text-[9px] font-mono tracking-widest uppercase block mb-3">Extended Skills Acquired</span>
                    <div className="flex flex-wrap gap-2">
                      {item.skillsAcquired.map((skill, sIdx) => (
                        <span key={sIdx} className="px-3 py-1.5 rounded-lg bg-[#c084fc]/10 text-[#c084fc] text-[10px] font-mono border border-[#c084fc]/20 font-bold">
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
          <div className="flex flex-wrap gap-4 mt-2">
            {item.certificateUrl ? (
              <a 
                href={item.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#c084fc]/20 border border-[#c084fc]/40 text-white hover:bg-[#c084fc] font-bold text-xs tracking-widest uppercase hover:shadow-[0_0_20px_rgba(192,132,252,0.4)] transition-all"
              >
                <HiExternalLink className="text-lg" /> View Certificate
              </a>
            ) : (
              <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white/30 font-bold text-xs tracking-widest uppercase cursor-not-allowed">
                <HiExternalLink className="text-lg" /> Certificate (Pending)
              </div>
            )}
            
            {item.reportUrl && (
              <a 
                href={item.reportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#f9a8d4]/10 border border-[#f9a8d4]/30 text-[#f9a8d4] hover:bg-[#f9a8d4]/20 hover:text-white font-bold text-xs tracking-widest uppercase hover:shadow-[0_0_20px_rgba(249,168,212,0.3)] transition-all"
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
    <section className="py-32 relative overflow-hidden bg-[#0a0413]" id="internship">
      {/* Background blobs matching standard portfolio decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#c084fc]/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#f9a8d4]/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-24">
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
              <FlaskConical size={16} className="text-[#f9a8d4] animate-pulse" />
              <span className="text-[#f9a8d4] font-bold text-[11px] tracking-[0.4em] uppercase">Academic Highlight</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Research & <br/>
              <span className="bg-gradient-to-r from-[#f9a8d4] via-[#c084fc] to-[#f9a8d4] bg-clip-text text-transparent animate-gradient-x">Internship</span>
            </h2>
            <p className="font-body text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
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
