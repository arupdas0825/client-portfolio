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
    <section className="py-32 relative overflow-hidden bg-[#1a0a2e]">
      {/* Dynamic Background decor matching Certificates / Experience sections */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#c084fc]/5 blur-[130px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#f9a8d4]/5 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-24">
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <FlaskConical size={14} className="text-[#f9a8d4]" />
              <span className="text-[#f9a8d4] font-bold text-[10px] tracking-[0.4em] uppercase">Professional growth</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Internship & <br/>
              <span className="bg-gradient-to-r from-[#f9a8d4] via-[#c084fc] to-[#f9a8d4] bg-clip-text text-transparent">Research Showcase</span>
            </h2>
            <p className="font-body text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
              Applying computational chemistry and molecular dynamics in academic and clinical spheres.
            </p>
          </ScrollReveal>
        </div>

        {/* Large Featured Card */}
        <ScrollReveal delay={200}>
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="group relative w-full bg-gradient-to-br from-[#1a0b3c]/85 to-[#0d051a]/95 backdrop-blur-3xl rounded-[36px] border border-white/5 hover:border-[#c084fc]/45 transition-all duration-700 overflow-hidden shadow-[0_0_50px_rgba(192,132,252,0.08)] hover:shadow-[0_40px_80px_rgba(192,132,252,0.2)]"
          >
            {/* Ambient neon radial glows */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#c084fc]/10 via-transparent to-[#f9a8d4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            {/* Tech grid overlays inside the card */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:28px_28px] opacity-30 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr,2fr] min-h-[500px] relative z-10">
              
              {/* LEFT COLUMN: BRANDING & TIMELINE TRACKER */}
              <div className="p-8 md:p-12 bg-white/[0.01] border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-between relative">
                
                {/* Status Badge */}
                <div className="self-start mb-10">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#c084fc]/10 border border-[#c084fc]/30 text-[#c084fc] text-[10px] font-bold tracking-[0.25em] uppercase shadow-[0_0_15px_rgba(192,132,252,0.15)]">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f9a8d4] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#f9a8d4]"></span>
                    </span>
                    {internshipData.status} Phase
                  </div>
                </div>

                {/* University Emblem Placeholder with glowing rings */}
                <div className="flex flex-col items-center text-center my-6">
                  <div className="relative group/logo">
                    {/* Ring glow */}
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#c084fc] to-[#f9a8d4] blur opacity-20 group-hover/logo:opacity-40 transition-opacity duration-700" />
                    
                    <div className="relative w-24 h-24 rounded-full bg-[#1a0b3c] border-2 border-white/10 flex items-center justify-center text-[#f9a8d4] shadow-2xl">
                      {/* Stylized vector biology crest emblem */}
                      <div className="absolute inset-2 rounded-full border border-dashed border-[#c084fc]/20 animate-[spin_40s_linear_infinite]" />
                      <div className="flex flex-col items-center justify-center">
                        <Dna size={32} className="text-[#f9a8d4] animate-pulse" />
                        <span className="text-[9px] font-bold tracking-[0.1em] text-white/50 mt-1">JU</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mt-6 mb-1">
                    {internshipData.institution}
                  </h3>
                  <span className="font-body text-[#c084fc] text-[11px] font-bold tracking-[0.2em] uppercase">
                    {internshipData.campus}
                  </span>
                  
                  <div className="flex items-center gap-1.5 text-white/40 text-xs mt-3">
                    <MapPin size={12} className="text-white/30" />
                    <span>{internshipData.location}</span>
                  </div>
                </div>

                {/* Technical Timeline Tracker */}
                <div className="mt-8 bg-[#0d051a]/50 border border-white/5 rounded-3xl p-6 font-body backdrop-blur-md">
                  <div className="text-white/30 text-[9px] font-mono tracking-widest uppercase mb-4 flex items-center gap-2">
                    <Calendar size={10} className="text-[#c084fc]" />
                    Timeline Monitoring
                  </div>
                  
                  <div className="flex items-stretch gap-4 pl-1">
                    <div className="flex flex-col items-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#c084fc] shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
                      <div className="w-[1.5px] flex-1 bg-gradient-to-b from-[#c084fc] to-[#f9a8d4] min-h-[30px]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#f9a8d4] shadow-[0_0_8px_rgba(249,168,212,0.8)]" />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-between text-xs font-mono text-white/70 py-0.5">
                      <div className="flex justify-between items-center leading-none">
                        <span className="font-semibold text-white/90">3 June 2026</span>
                        <span className="text-[9px] text-[#c084fc] uppercase font-bold tracking-wider">Start</span>
                      </div>
                      <div className="flex justify-between items-center leading-none mt-6">
                        <span className="font-semibold text-white/90">30 June 2026</span>
                        <span className="text-[9px] text-[#f9a8d4] uppercase font-bold tracking-wider">End</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/5 flex justify-between items-center text-xs font-body">
                    <span className="text-white/40">Duration:</span>
                    <span className="text-white/90 font-bold bg-white/5 px-3 py-1 rounded-full border border-white/5 text-[11px]">
                      {internshipData.duration}
                    </span>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: MODULE & DETAILS */}
              <div className="p-8 md:p-12 flex flex-col justify-between">
                
                <div>
                  {/* Department Tag */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 rounded-full bg-[#f9a8d4]" />
                    <span className="text-white/30 text-[10px] font-mono tracking-widest uppercase">
                      Department of {internshipData.department}
                    </span>
                  </div>

                  {/* Academic Module Title */}
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-6 leading-tight group-hover:text-[#f9a8d4] transition-colors duration-500">
                    {internshipData.module}
                  </h3>

                  {/* Divider line */}
                  <div className="w-16 h-[2px] bg-gradient-to-r from-[#c084fc] to-[#f9a8d4] mb-8" />

                  {/* Research Statement */}
                  <p className="font-body text-white/50 text-sm md:text-base leading-relaxed mb-8">
                    "{internshipData.summary}"
                  </p>
                </div>

                {/* Professional Badges Section */}
                <div className="mt-4">
                  <span className="text-white/30 text-[9px] font-mono tracking-widest uppercase block mb-4">
                    Research Skillsets Defined
                  </span>
                  
                  <div className="flex flex-wrap gap-2.5">
                    {internshipData.badges.map((badge, i) => (
                      <div 
                        key={i}
                        className="px-4 py-2 rounded-xl text-xs font-semibold tracking-wide bg-gradient-to-r from-[#c084fc]/5 to-[#f9a8d4]/5 border border-white/5 text-white/70 hover:border-[#c084fc]/30 hover:text-white transition-all duration-300 active:scale-95"
                      >
                        {badge}
                      </div>
                    ))}
                  </div>
                </div>

                {/* FUTURE-PROOFING AREA: DYNAMIC ADDENDUM (Hidden until data is present) */}
                {hasAdditionalData && (
                  <div className="mt-8 pt-8 border-t border-white/5 space-y-6">
                    <h4 className="font-mono text-xs text-[#c084fc] tracking-widest uppercase flex items-center gap-2">
                      <Sparkles size={12} className="text-[#f9a8d4]" />
                      // Research Addendum
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {internshipData.supervisorName && (
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex items-start gap-3">
                          <User size={16} className="text-[#c084fc] mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-white/30 text-[9px] font-mono tracking-wider uppercase block mb-1">Supervisor</span>
                            <span className="text-white/80 text-xs font-semibold">{internshipData.supervisorName}</span>
                          </div>
                        </div>
                      )}

                      {internshipData.projectWork && (
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex items-start gap-3 md:col-span-2">
                          <FlaskConical size={16} className="text-[#f9a8d4] mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-white/30 text-[9px] font-mono tracking-wider uppercase block mb-1">Project Assignment</span>
                            <span className="text-white/70 text-xs leading-relaxed">{internshipData.projectWork}</span>
                          </div>
                        </div>
                      )}

                      {internshipData.researchOutcome && (
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex items-start gap-3 md:col-span-2">
                          <Award size={16} className="text-[#c084fc] mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-white/30 text-[9px] font-mono tracking-wider uppercase block mb-1">Research Outcomes</span>
                            <span className="text-white/70 text-xs leading-relaxed">{internshipData.researchOutcome}</span>
                          </div>
                        </div>
                      )}

                      {internshipData.skillsAcquired && internshipData.skillsAcquired.length > 0 && (
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 md:col-span-2">
                          <span className="text-white/30 text-[9px] font-mono tracking-wider uppercase block mb-2">Technical Mastery Acquired</span>
                          <div className="flex flex-wrap gap-2">
                            {internshipData.skillsAcquired.map((skill, idx) => (
                              <span key={idx} className="px-2.5 py-1 rounded-lg bg-[#c084fc]/5 text-[#c084fc] text-[10px] font-mono border border-[#c084fc]/10">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Action Download / Certificate Links */}
                    <div className="flex flex-wrap gap-4 mt-4">
                      {internshipData.certificateUrl && (
                        <a 
                          href={internshipData.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#c084fc]/10 border border-[#c084fc]/20 text-[#c084fc] font-bold text-xs tracking-wider uppercase hover:bg-[#c084fc]/20 hover:text-white transition-all active:scale-95"
                        >
                          <HiExternalLink className="text-sm" /> View Certificate
                        </a>
                      )}
                      
                      {internshipData.reportUrl && (
                        <a 
                          href={internshipData.reportUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#f9a8d4]/10 border border-[#f9a8d4]/20 text-[#f9a8d4] font-bold text-xs tracking-wider uppercase hover:bg-[#f9a8d4]/20 hover:text-white transition-all active:scale-95"
                        >
                          <FileText size={14} /> View Research Report
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
