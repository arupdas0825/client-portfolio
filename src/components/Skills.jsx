import React from 'react';
import ScrollReveal from './ScrollReveal';

const SkillTag = ({ name }) => (
  <span className="bg-[rgba(20,184,166,0.12)] text-[#14b8a6] border border-[rgba(20,184,166,0.2)] rounded-full px-4 py-1.5 text-xs font-body tracking-wide">
    {name}
  </span>
);

const Skills = () => {
  const academicSkills = [
    "Basic Biotechnology Concepts",
    "Scientific Research & Reading",
    "Lab Safety & Protocols",
    "Academic Writing & Reporting"
  ];

  const computerSkills = [
    "MS Word",
    "MS Excel",
    "PowerPoint",
    "Canva",
    "Basic Computer Operations"
  ];

  const creativeSkills = [
    "Content Creation",
    "Video Editing (Basic)",
    "Communication",
    "Team Collaboration",
    "Time Management",
    "Adaptability"
  ];

  return (
    <section className="py-24 relative overflow-hidden">


      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-16">
        <ScrollReveal>
          <span className="section-label">✦ What I Do</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-br from-[#fdfbf7] to-[#fdfbf7]/60 bg-clip-text text-transparent mb-4">My Skills</h2>
          <p className="font-body text-[#fdfbf7]/50 max-w-2xl mx-auto">
            Blending academic excellence with creative digital skills to build a unique personal brand.
          </p>
        </ScrollReveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Academic Skills */}
          <ScrollReveal delay={100}>
            <div className="glass-teal p-8 h-full animate-float">
              <div className="text-4xl mb-6">🔬</div>
              <h3 className="font-display text-2xl text-[#fdfbf7] font-bold mb-6">Academic Skills</h3>
              <div className="flex flex-wrap gap-2">
                {academicSkills.map((skill, index) => (
                  <SkillTag key={index} name={skill} />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Computer Skills */}
          <ScrollReveal delay={200}>
            <div className="glass-pink p-8 h-full animate-float2">
              <div className="text-4xl mb-6">💻</div>
              <h3 className="font-display text-2xl text-[#fdfbf7] font-bold mb-6">Computer Skills</h3>
              <div className="flex flex-wrap gap-2">
                {computerSkills.map((skill, index) => (
                  <SkillTag key={index} name={skill} />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Creative & Soft Skills */}
          <ScrollReveal delay={300}>
            <div className="glass p-8 h-full animate-float3">
              <div className="text-4xl mb-6">🌸</div>
              <h3 className="font-display text-2xl text-[#fdfbf7] font-bold mb-6">Creative & Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {creativeSkills.map((skill, index) => (
                  <SkillTag key={index} name={skill} />
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Skills;
