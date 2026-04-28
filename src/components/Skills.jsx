import React from 'react';
import GlassCard from './GlassCard';
import ScrollReveal from './ScrollReveal';
import { LuMicroscope, LuCpu, LuUsers } from 'react-icons/lu';

const Skills = () => {
  const skillGroups = [
    {
      title: "Technical Skills",
      icon: <LuMicroscope size={20} />,
      anim: "animate-float1",
      skills: ["Molecular Biology", "Cell Culture", "PCR", "ELISA", "Microscopy", "Gel Electrophoresis", "Bioinformatics", "Research Methodology"],
      mt: "md:mt-4"
    },
    {
      title: "Computer Skills",
      icon: <LuCpu size={20} />,
      anim: "animate-float2",
      skills: ["MS Office", "ImageJ", "SPSS (Basic)", "Canva", "Literature Search Databases"],
      mt: "md:mt-0"
    },
    {
      title: "Soft Skills",
      icon: <LuUsers size={20} />,
      anim: "animate-float3",
      skills: ["Scientific Writing", "Presentation", "Team Collaboration", "Time Management", "Adaptability", "Communication"],
      mt: "md:mt-8"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-20 bg-[#020818]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-[#00D4FF] text-xs tracking-widest block mb-2 uppercase">// Technical Matrix</span>
          <h2 className="font-display text-4xl font-bold text-white">Core Competencies</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className={group.mt}>
                <GlassCard className="p-8 h-full" animClass={group.anim}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[#00D4FF]">{group.icon}</span>
                    <h3 className="font-display font-semibold text-white text-lg">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="bg-[rgba(0,212,255,0.1)] text-[#00D4FF] border border-[rgba(0,212,255,0.2)] rounded-full px-3 py-1 font-mono text-[10px] hover:bg-[rgba(0,212,255,0.2)] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
