import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, FlaskConical, Laptop } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import useTilt from '../hooks/useTilt';

const SkillCard = ({ title, badge, icon: Icon, skills, badgeColor, hoverGlow, delay }) => {
  const tiltRef = useTilt();

  return (
    <ScrollReveal delay={delay}>
      <motion.div
        ref={tiltRef}
        whileHover={{ scale: 1.02 }}
        className="group relative h-full flex flex-col bg-white/[0.03] backdrop-blur-[20px] rounded-[32px] border border-white/[0.08] hover:border-[#7C3AED]/40 transition-all duration-300 overflow-hidden shadow-2xl p-8 transform-gpu"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Dynamic Hover Glow Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${hoverGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

        <div className="relative z-10 flex flex-col h-full">
          {/* Header Row */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <div 
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl transition-transform duration-500 group-hover:scale-110"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
              }}
            >
              <Icon size={22} className={badgeColor} />
            </div>
            
            <span className={`text-[9px] font-bold tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full border ${badgeColor} bg-white/[0.02]`}
                  style={{ borderColor: 'currentColor', color: 'inherit' }}>
              {badge}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl text-[#fdfbf7] font-bold mb-6 group-hover:text-[#ff7eb3] transition-colors leading-tight">
            {title}
          </h3>

          {/* Skills List */}
          <ul className="space-y-3.5 flex-1">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-[#fdfbf7]/75 font-body leading-relaxed">
                <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 opacity-80 ${
                  badgeColor.includes('teal') ? 'bg-[#14b8a6]' :
                  badgeColor.includes('pink') ? 'bg-[#ff7eb3]' :
                  'bg-[#7C3AED]'
                }`} />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </ScrollReveal>
  );
};

const Skills = () => {
  const biotechSkills = [
    "Cell Biology",
    "Molecular Biology",
    "Genetics Fundamentals",
    "Biotechnology Concepts",
    "Laboratory Safety",
    "Scientific Literature Review",
    "Experimental Techniques",
    "Biological Data Interpretation"
  ];

  const researchSkills = [
    "Scientific Writing",
    "Research Methodology",
    "Academic Reporting",
    "Literature Analysis",
    "Data Collection",
    "Critical Thinking",
    "Observation & Documentation",
    "Presentation of Research Findings"
  ];

  const computationalSkills = [
    "MS Word",
    "MS Excel",
    "PowerPoint",
    "Canva",
    "Basic Data Management",
    "Digital Research Tools",
    "Academic Presentation Design",
    "Professional Communication"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-20">
        <ScrollReveal>
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#ff7eb3]/80 mb-3 block">
            WHAT I DO
          </span>
          <h2 className="font-display text-[40px] md:text-[52px] lg:text-[64px] font-bold bg-gradient-to-r from-[#FAF6F0] via-[#FBCFE8] to-[#D8B4FE] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(216,180,254,0.15)] mb-4">
            My Skills
          </h2>
          <p className="font-body text-white/75 text-lg max-w-[700px] mx-auto leading-relaxed text-center">
            Building expertise in biotechnology, scientific research, computational tools, and professional development.
          </p>
        </ScrollReveal>
      </div>

      {/* Grid of Skill Cards */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Biotechnology & Life Sciences */}
          <SkillCard 
            title="Biotechnology & Life Sciences"
            badge="Core Academic Skills"
            icon={Microscope}
            skills={biotechSkills}
            badgeColor="text-[#14b8a6]"
            hoverGlow="from-[#14b8a6]/10 via-transparent to-[#ff7eb3]/5"
            delay={100}
          />

          {/* Card 2: Research & Scientific Skills */}
          <SkillCard 
            title="Research & Scientific Skills"
            badge="Research Foundation"
            icon={FlaskConical}
            skills={researchSkills}
            badgeColor="text-[#ff7eb3]"
            hoverGlow="from-[#ff7eb3]/10 via-transparent to-[#7C3AED]/5"
            delay={200}
          />

          {/* Card 3: Computational & Professional Skills */}
          <SkillCard 
            title="Computational & Professional Skills"
            badge="Technical Skills"
            icon={Laptop}
            skills={computationalSkills}
            badgeColor="text-[#7C3AED]"
            hoverGlow="from-[#7C3AED]/10 via-transparent to-[#14b8a6]/5"
            delay={300}
          />

        </div>
      </div>
    </section>
  );
};

export default Skills;
