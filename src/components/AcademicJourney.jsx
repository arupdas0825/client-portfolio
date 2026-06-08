import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Microscope, Dna, FlaskConical, Rocket, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import useTilt from '../hooks/useTilt';

const journeyData = [
  {
    id: 1,
    title: "Secondary Education",
    institution: "Birati Mahajati Balika Vidyamandir",
    board: "WBBSE",
    year: "2022",
    score: "85%",
    description: "Built a strong academic foundation with consistent performance across core subjects, developing analytical thinking, discipline, and scientific curiosity.",
    badge: "Completed",
    icon: GraduationCap,
    color: "#ff7eb3" 
  },
  {
    id: 2,
    title: "Higher Secondary Education",
    institution: "Birati Mahajati Balika Vidyamandir",
    board: "WBCHSE",
    stream: "Pure Science (PCMB)",
    year: "2024",
    score: "63%",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    description: "Strengthened scientific understanding through rigorous study of physical and life sciences, preparing for advanced biotechnology education.",
    badge: "Completed",
    icon: Microscope,
    color: "#14b8a6" 
  },
  {
    id: 3,
    title: "Bachelor of Technology (B.Tech)",
    institution: "Brainware University",
    department: "Biotechnology",
    duration: "2024 – 2028",
    description: "Pursuing Biotechnology with a focus on life sciences, molecular biology, biotechnology applications, laboratory techniques, and emerging biomedical innovations.",
    badge: "Ongoing",
    icon: Dna,
    color: "#ff7eb3",
    stats: {
      cgpa: "8.1",
      semester: "5",
      expectedGraduation: "2028"
    }
  },
  {
    id: 4,
    title: "Research Internship",
    institution: "Jadavpur University",
    department: "Biotechnology",
    module: "In Silico Drug Design: Integrating Molecular Dynamics & Computational Chemistry for Novel Therapeutic Innovation",
    duration: "3 June 2026 – 6 July 2026",
    description: "Participated in advanced computational biotechnology training focused on molecular dynamics, computational chemistry, virtual screening, and modern drug discovery approaches.",
    badge: "Completed",
    icon: FlaskConical,
    color: "#14b8a6"
  },
  {
    id: 5,
    title: "Future Academic Vision",
    goal: "M.Sc. in Biotechnology",
    focusAreas: ["Research in Drug Discovery", "International Research Collaboration", "Academic Career Development"],
    description: "Aspires to pursue advanced biotechnology research and contribute to global scientific innovation through higher education, interdisciplinary collaboration, and cutting-edge therapeutic research.",
    badge: "Future Goal",
    icon: Rocket,
    color: "#ff7eb3"
  }
];

const TimelineCard = ({ item, index }) => {
  const tiltRef = useTilt();
  const isEven = index % 2 === 0;
  const Icon = item.icon;

  return (
    <div className={`relative flex items-center justify-between md:justify-normal w-full mb-16 ${isEven ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Center Timeline Node */}
      <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full border-4 border-[#0A0F1F] shadow-[0_0_20px_rgba(20,184,166,0.3)] z-20 flex items-center justify-center transform -translate-x-1/2 bg-[#02040a]"
           style={{ borderColor: item.color === '#ff7eb3' ? 'rgba(255, 126, 179, 0.4)' : 'rgba(20, 184, 166, 0.4)' }}>
        <Icon size={16} color={item.color} className="animate-pulse" />
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block w-[45%]" />

      {/* Card Content */}
      <div className="w-full md:w-[45%] pl-12 md:pl-0">
        <ScrollReveal delay={index * 150} direction={isEven ? 'left' : 'right'}>
          <motion.div
            ref={tiltRef}
            whileHover={{ scale: 1.02 }}
            className={`group relative flex flex-col bg-gradient-to-br from-[#0A0F1F]/80 to-[#02040a]/90 backdrop-blur-3xl rounded-[32px] border border-[#fdfbf7]/5 hover:border-[${item.color}]/40 transition-all duration-500 overflow-hidden shadow-2xl p-8 transform-gpu`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Hover Glow Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br from-[${item.color}]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

            {/* Header / Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className={`px-4 py-1.5 rounded-full bg-[${item.color}]/10 border border-[${item.color}]/30 flex items-center gap-2`}>
                {item.badge === 'Completed' && <CheckCircle2 size={12} color={item.color} />}
                {item.badge === 'Ongoing' && <Clock size={12} color={item.color} className="animate-spin-slow" />}
                {item.badge === 'Future Goal' && <Sparkles size={12} color={item.color} />}
                <span className={`text-[10px] font-bold tracking-[0.2em] uppercase`} style={{ color: item.color }}>
                  {item.badge}
                </span>
              </div>
              
              <span className="text-[#fdfbf7]/30 text-[10px] font-bold tracking-[0.2em] uppercase">
                {item.year || item.duration}
              </span>
            </div>

            {/* Title & Institution */}
            <h3 className="font-display text-2xl font-bold text-[#fdfbf7] mb-2 leading-tight group-hover:text-[#ff7eb3] transition-colors">
              {item.title}
            </h3>
            
            <div className="flex flex-col gap-1 mb-6">
              <span className="text-[#14b8a6] font-bold text-[11px] tracking-[0.2em] uppercase">
                {item.institution || item.goal}
              </span>
              {(item.board || item.department) && (
                <span className="text-[#fdfbf7]/40 text-[10px] tracking-widest uppercase">
                  {item.board || item.department}
                </span>
              )}
            </div>

            {/* Floating Stat Card for Entry 3 */}
            {item.stats && (
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-[#fdfbf7]/[0.02] border border-[#fdfbf7]/5 rounded-xl p-3 text-center flex flex-col justify-center items-center">
                  <span className="text-[#ff7eb3] font-display font-bold text-xl">{item.stats.cgpa}</span>
                  <span className="text-[#fdfbf7]/40 text-[8px] uppercase tracking-widest">CGPA</span>
                </div>
                <div className="bg-[#fdfbf7]/[0.02] border border-[#fdfbf7]/5 rounded-xl p-3 text-center flex flex-col justify-center items-center">
                  <span className="text-[#14b8a6] font-display font-bold text-xl">{item.stats.semester}</span>
                  <span className="text-[#fdfbf7]/40 text-[8px] uppercase tracking-widest">Semester</span>
                </div>
                <div className="bg-[#fdfbf7]/[0.02] border border-[#fdfbf7]/5 rounded-xl p-3 text-center flex flex-col justify-center items-center">
                  <span className="text-[#fdfbf7] font-display font-bold text-lg">{item.stats.expectedGraduation}</span>
                  <span className="text-[#fdfbf7]/40 text-[8px] uppercase tracking-widest">Graduation</span>
                </div>
              </div>
            )}

            {/* Subjects / Focus Areas */}
            {(item.subjects || item.focusAreas) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {(item.subjects || item.focusAreas).map((sub, i) => (
                  <span key={i} className="px-3 py-1 rounded bg-[#fdfbf7]/[0.03] border border-[#fdfbf7]/10 text-[#fdfbf7]/60 text-[9px] tracking-wider uppercase font-medium">
                    {sub}
                  </span>
                ))}
              </div>
            )}

            {/* Score display for early education */}
            {item.score && (
              <div className="mb-4 flex items-center gap-2">
                <span className="text-[#fdfbf7]/40 text-[10px] tracking-[0.2em] uppercase">Score:</span>
                <span className="text-[#fdfbf7] font-bold font-mono">{item.score}</span>
              </div>
            )}

            {/* Description */}
            <p className="font-body text-[#fdfbf7]/50 text-sm leading-relaxed border-t border-[#fdfbf7]/5 pt-5 mt-auto">
              {item.description}
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default function AcademicJourney() {
  const { scrollYProgress } = useScroll();
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1.2]);

  return (
    <section className="relative py-32 px-6" id="academic-journey">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24 md:mb-32">
          <ScrollReveal>
            <h2 className="font-display text-[40px] md:text-[52px] lg:text-[64px] font-bold text-[#fdfbf7] mb-6 leading-tight">
              Academic <br className="md:hidden"/>
              <span className="bg-gradient-to-r from-[#FFFFFF] via-[#F5EFFF] to-[#D8B4FE] bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="font-body text-white/75 text-lg max-w-[700px] mx-auto leading-relaxed text-center">
              A timeline of academic growth, scientific curiosity, and research-driven development.
            </p>
          </ScrollReveal>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Animated Vertical Line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#fdfbf7]/10 to-transparent transform md:-translate-x-1/2" />
          
          <motion.div 
            className="absolute left-[19px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-[#ff7eb3] to-[#14b8a6] origin-top transform md:-translate-x-1/2"
            style={{ scaleY, height: '100%' }}
          />

          {/* Timeline Nodes */}
          <div className="flex flex-col gap-8 md:gap-0">
            {journeyData.map((item, index) => (
              <TimelineCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
