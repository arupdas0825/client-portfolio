import React from 'react';
import ScrollReveal from './ScrollReveal';

const SkillTag = ({ name }) => (
  <span className="bg-[rgba(192,132,252,0.12)] text-[#c084fc] border border-[rgba(192,132,252,0.2)] rounded-full px-4 py-1.5 text-xs font-body tracking-wide">
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
    <section className="py-24 relative overflow-hidden bg-[#1a0a2e]">
      {/* Background blobs */}
      <div
        className="blob animate-blob absolute w-96 h-96 bg-[#c084fc]/10 -left-20 bottom-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-16">
        <ScrollReveal>
          <span className="section-label">✦ What I Do</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">My Skills</h2>
          <p className="font-body text-white/50 max-w-2xl mx-auto">
            Blending academic excellence with creative digital skills to build a unique personal brand.
          </p>
        </ScrollReveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Academic Skills */}
          <ScrollReveal delay={100}>
            <div className="glass-lavender p-8 h-full animate-float">
              <div className="text-4xl mb-6">🔬</div>
              <h3 className="font-display text-2xl text-white font-bold mb-6">Academic Skills</h3>
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
              <h3 className="font-display text-2xl text-white font-bold mb-6">Computer Skills</h3>
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
              <h3 className="font-display text-2xl text-white font-bold mb-6">Creative & Soft Skills</h3>
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
