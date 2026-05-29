import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { Dna, FlaskConical, Calendar, MapPin, Award, User, FileText, Sparkles } from 'lucide-react';
import { HiAcademicCap, HiExternalLink } from 'react-icons/hi';

// ==========================================
// INTERNSHIP DATA CONFIGURATION (FUTURE-PROOF)
// ==========================================
// To add new details, certificates, reports, or supervisors,
// simply fill in the non-empty values below. The component
// will automatically reveal the new sections dynamically.
const internshipData = {
  institution: "Jadavpur University",
  campus: "Kolkata (Main Campus)",
  department: "Biotechnology",
  module: "In Silico Drug Design: Integrating Molecular Dynamics & Computational Chemistry for Novel Therapeutic Innovation",
  duration: "1 Month",
  startDate: "3 June 2026",
  endDate: "30 June 2026",
  location: "Kolkata, India",
  status: "Upcoming", // Options: "Upcoming" | "Active" | "Completed"
  
  summary: "Completed a specialized biotechnology internship focused on computational drug discovery approaches. Gained exposure to molecular dynamics simulations, computational chemistry methodologies, virtual screening concepts, and modern in-silico techniques used in therapeutic innovation and pharmaceutical research.",
  
  badges: [
    "Biotechnology",
    "Drug Design",
    "Computational Chemistry",
    "Molecular Dynamics",
    "Research Training"
  ],

  // Future-proofing placeholders (hidden until values are supplied below)
  supervisorName: "",      // e.g., "Dr. Anirban Roy, Professor of Computational Biology"
  researchOutcome: "",     // e.g., "Identified 3 high-affinity ligand candidates targeting SARS-CoV-2 main protease."
  skillsAcquired: [],      // e.g., ["AutoDock Vina", "GROMACS", "PyMOL", "AmberTools", "Virtual Screening"]
  projectWork: "",         // e.g., "Docking study of natural compounds against therapeutic cancer receptors."
  certificateUrl: "",      // e.g., "/assets/internship_certificate.pdf"
  reportUrl: "",           // e.g., "/assets/internship_report.pdf"
};

const Internship = () => {
  // Check if any future-proof field contains data to render the Research Addendum section
  const hasAdditionalData = 
    internshipData.supervisorName || 
    internshipData.researchOutcome || 
    (internshipData.skillsAcquired && internshipData.skillsAcquired.length > 0) || 
    internshipData.projectWork || 
    internshipData.certificateUrl || 
    internshipData.reportUrl;

  return (
    <section className="py-24 relative overflow-hidden bg-[#1a0a2e]">
      {/* Dynamic Background decor matching Certificates / Experience sections */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#c084fc]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#f9a8d4]/5 blur-[120px] rounded-full" />
      </div>

      {/* Reduced outer width for desktop to center-align a compact premium card */}
      <div className="max-w-[950px] mx-auto px-6 relative z-10">
        
        {/* Section Title - Compressed margins */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
              <FlaskConical size={13} className="text-[#f9a8d4]" />
              <span className="text-[#f9a8d4] font-bold text-[9px] tracking-[0.4em] uppercase">Professional growth</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Internship & <br/>
              <span className="bg-gradient-to-r from-[#f9a8d4] via-[#c084fc] to-[#f9a8d4] bg-clip-text text-transparent">Research Showcase</span>
            </h2>
            <p className="font-body text-white/40 text-sm max-w-xl mx-auto leading-relaxed">
              Applying computational chemistry and molecular dynamics in academic and clinical spheres.
            </p>
          </ScrollReveal>
        </div>

        {/* Featured Card - Refined rounded corners and balanced spacing */}
        <ScrollReveal delay={200}>
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="group relative w-full bg-gradient-to-br from-[#1a0b3c]/85 to-[#0d051a]/95 backdrop-blur-3xl rounded-[28px] border border-white/5 hover:border-[#c084fc]/45 transition-all duration-700 overflow-hidden shadow-[0_0_40px_rgba(192,132,252,0.08)] hover:shadow-[0_30px_60px_rgba(192,132,252,0.15)]"
          >
            {/* Ambient neon radial glows */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#c084fc]/10 via-transparent to-[#f9a8d4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            {/* Tech grid overlays inside the card */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:24px_24px] opacity-35 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-[1.25fr,2fr] relative z-10">
              
              {/* LEFT COLUMN: BRANDING & TIMELINE TRACKER - Compacted paddings */}
              <div className="p-6 md:p-8 bg-white/[0.01] border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-between relative">
                
                {/* Status Badge */}
                <div className="self-start mb-6">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#c084fc]/10 border border-[#c084fc]/30 text-[#c084fc] text-[9px] font-bold tracking-[0.25em] uppercase shadow-[0_0_12px_rgba(192,132,252,0.12)]">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f9a8d4] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f9a8d4]"></span>
                    </span>
                    {internshipData.status} Phase
                  </div>
                </div>

                {/* University Emblem Placeholder with refined size */}
                <div className="flex flex-col items-center text-center my-4">
                  <div className="relative group/logo">
                    {/* Ring glow */}
                    <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#c084fc] to-[#f9a8d4] blur opacity-20 group-hover/logo:opacity-40 transition-opacity duration-700" />
                    
                    <div className="relative w-20 h-20 rounded-full bg-[#1a0b3c] border-2 border-white/10 flex items-center justify-center text-[#f9a8d4] shadow-2xl">
                      {/* Stylized vector biology crest emblem */}
                      <div className="absolute inset-1.5 rounded-full border border-dashed border-[#c084fc]/20 animate-[spin_40s_linear_infinite]" />
                      <div className="flex flex-col items-center justify-center">
                        <Dna size={26} className="text-[#f9a8d4] animate-pulse" />
                        <span className="text-[8px] font-bold tracking-[0.1em] text-white/50 mt-0.5">JU</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mt-4 mb-0.5">
                    {internshipData.institution}
                  </h3>
                  <span className="font-body text-[#c084fc] text-[10px] font-bold tracking-[0.2em] uppercase">
                    {internshipData.campus}
                  </span>
                  
                  <div className="flex items-center gap-1.5 text-white/40 text-[11px] mt-2">
                    <MapPin size={11} className="text-white/30" />
                    <span>{internshipData.location}</span>
                  </div>
                </div>

                {/* Technical Timeline Tracker - Compacted size */}
                <div className="mt-6 bg-[#0d051a]/50 border border-white/5 rounded-2xl p-4 font-body backdrop-blur-md">
                  <div className="text-white/30 text-[8px] font-mono tracking-widest uppercase mb-3 flex items-center gap-2">
                    <Calendar size={9} className="text-[#c084fc]" />
                    Timeline Monitoring
                  </div>
                  
                  <div className="flex items-stretch gap-3 pl-1">
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-[#c084fc] shadow-[0_0_6px_rgba(192,132,252,0.8)]" />
                      <div className="w-[1px] flex-1 bg-gradient-to-b from-[#c084fc] to-[#f9a8d4] min-h-[24px]" />
                      <div className="w-2 h-2 rounded-full bg-[#f9a8d4] shadow-[0_0_6px_rgba(249,168,212,0.8)]" />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-between text-[11px] font-mono text-white/70 py-0.5">
                      <div className="flex justify-between items-center leading-none">
                        <span className="font-semibold text-white/90">3 June 2026</span>
                        <span className="text-[8px] text-[#c084fc] uppercase font-bold tracking-wider">Start</span>
                      </div>
                      <div className="flex justify-between items-center leading-none mt-4">
                        <span className="font-semibold text-white/90">30 June 2026</span>
                        <span className="text-[8px] text-[#f9a8d4] uppercase font-bold tracking-wider">End</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[11px] font-body">
                    <span className="text-white/40">Duration:</span>
                    <span className="text-white/90 font-bold bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5 text-[10px]">
                      {internshipData.duration}
                    </span>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: MODULE & DETAILS - Compacted sizes */}
              <div className="p-6 md:p-8 flex flex-col justify-between">
                
                <div>
                  {/* Department Tag */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#f9a8d4]" />
                    <span className="text-white/30 text-[9px] font-mono tracking-widest uppercase">
                      Department of {internshipData.department}
                    </span>
                  </div>

                  {/* Academic Module Title - Refined scale */}
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-[#f9a8d4] transition-colors duration-500">
                    {internshipData.module}
                  </h3>

                  {/* Divider line */}
                  <div className="w-12 h-[1.5px] bg-gradient-to-r from-[#c084fc] to-[#f9a8d4] mb-5" />

                  {/* Research Statement - Compact font size */}
                  <p className="font-body text-white/50 text-xs md:text-sm leading-relaxed mb-6">
                    "{internshipData.summary}"
                  </p>
                </div>

                {/* Professional Badges Section - Compact list */}
                <div className="mt-2">
                  <span className="text-white/30 text-[8px] font-mono tracking-widest uppercase block mb-3">
                    Research Skillsets Defined
                  </span>
                  
                  <div className="flex flex-wrap gap-2">
                    {internshipData.badges.map((badge, i) => (
                      <div 
                        key={i}
                        className="px-3 py-1.5 rounded-lg text-[11px] font-semibold tracking-wide bg-gradient-to-r from-[#c084fc]/5 to-[#f9a8d4]/5 border border-white/5 text-white/70 hover:border-[#c084fc]/30 hover:text-white transition-all duration-300 active:scale-95"
                      >
                        {badge}
                      </div>
                    ))}
                  </div>
                </div>

                {/* FUTURE-PROOFING AREA: DYNAMIC ADDENDUM (Hidden until data is present) */}
                {hasAdditionalData && (
                  <div className="mt-6 pt-6 border-t border-white/5 space-y-4">
                    <h4 className="font-mono text-[10px] text-[#c084fc] tracking-widest uppercase flex items-center gap-2">
                      <Sparkles size={11} className="text-[#f9a8d4]" />
                      // Research Addendum
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {internshipData.supervisorName && (
                        <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex items-start gap-2.5">
                          <User size={14} className="text-[#c084fc] mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-white/30 text-[8px] font-mono tracking-wider uppercase block mb-0.5">Supervisor</span>
                            <span className="text-white/80 text-[11px] font-semibold">{internshipData.supervisorName}</span>
                          </div>
                        </div>
                      )}

                      {internshipData.projectWork && (
                        <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex items-start gap-2.5 md:col-span-2">
                          <FlaskConical size={14} className="text-[#f9a8d4] mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-white/30 text-[8px] font-mono tracking-wider uppercase block mb-0.5">Project Assignment</span>
                            <span className="text-white/70 text-[11px] leading-relaxed">{internshipData.projectWork}</span>
                          </div>
                        </div>
                      )}

                      {internshipData.researchOutcome && (
                        <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex items-start gap-2.5 md:col-span-2">
                          <Award size={14} className="text-[#c084fc] mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-white/30 text-[8px] font-mono tracking-wider uppercase block mb-0.5">Research Outcomes</span>
                            <span className="text-white/70 text-[11px] leading-relaxed">{internshipData.researchOutcome}</span>
                          </div>
                        </div>
                      )}

                      {internshipData.skillsAcquired && internshipData.skillsAcquired.length > 0 && (
                        <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 md:col-span-2">
                          <span className="text-white/30 text-[8px] font-mono tracking-wider uppercase block mb-1.5">Technical Mastery Acquired</span>
                          <div className="flex flex-wrap gap-1.5">
                            {internshipData.skillsAcquired.map((skill, idx) => (
                              <span key={idx} className="px-2 py-0.5 rounded bg-[#c084fc]/5 text-[#c084fc] text-[9px] font-mono border border-[#c084fc]/10">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Action Download / Certificate Links */}
                    <div className="flex flex-wrap gap-3 mt-3">
                      {internshipData.certificateUrl && (
                        <a 
                          href={internshipData.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#c084fc]/10 border border-[#c084fc]/20 text-[#c084fc] font-bold text-[10px] tracking-wider uppercase hover:bg-[#c084fc]/20 hover:text-white transition-all active:scale-95"
                        >
                          <HiExternalLink className="text-sm" /> View Certificate
                        </a>
                      )}
                      
                      {internshipData.reportUrl && (
                        <a 
                          href={internshipData.reportUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#f9a8d4]/10 border border-[#f9a8d4]/20 text-[#f9a8d4] font-bold text-[10px] tracking-wider uppercase hover:bg-[#f9a8d4]/20 hover:text-white transition-all active:scale-95"
                        >
                          <FileText size={12} /> View Research Report
                        </a>
                      )}
                    </div>
                  </div>
                )}

              </div>

            </div>
          </motion.div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Internship;
