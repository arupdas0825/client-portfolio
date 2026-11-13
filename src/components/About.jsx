import React from 'react';
import { Microscope, Dna, Atom, MapPin, GraduationCap, Award, FileText, ArrowUpRight, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

const About = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="about">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#7C3AED]/10 via-[#14b8a6]/08 to-[#ff7eb3]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <SectionHeader 
          eyebrow="BIOGRAPHY" 
          title="About Me" 
          subtitle="A comprehensive overview of my academic foundation, laboratory competencies, and computational life-sciences research." 
        />

        {/* ========================================================
            HORIZONTAL EDITORIAL BIO WITH SCROLL REVEAL (Card-Free)
            ======================================================== */}
        <div className="mt-12 flex flex-col">
          
          {/* Greeting & Headline */}
          <ScrollReveal delay={100} className="text-center mb-8">
            <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-[#FAF6F0] via-[#FBCFE8] to-[#D8B4FE] bg-clip-text text-transparent">Shatarupa Basak</span>
            </h3>
            <p className="text-white/60 text-sm md:text-base font-body max-w-2xl mx-auto">
              B.Tech Biotechnology Scholar • Computational Drug Discovery Enthusiast • Kolkata, India
            </p>
          </ScrollReveal>

          {/* Horizontal Quick-Stats Ribbon */}
          <ScrollReveal delay={150} className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5 px-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md">
              <div className="flex items-center gap-3">
                <GraduationCap size={18} className="text-[#14b8a6] shrink-0" />
                <div>
                  <p className="text-white/40 text-[10px] uppercase font-mono tracking-wider">Program</p>
                  <p className="text-white font-semibold text-xs">B.Tech Biotech '28</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#ff7eb3] shrink-0" />
                <div>
                  <p className="text-white/40 text-[10px] uppercase font-mono tracking-wider">University</p>
                  <p className="text-white font-semibold text-xs">Brainware, Kolkata</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Award size={18} className="text-[#c084fc] shrink-0" />
                <div>
                  <p className="text-white/40 text-[10px] uppercase font-mono tracking-wider">CSIR-IICB</p>
                  <p className="text-white font-semibold text-xs">Top 20 Nationally</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Dna size={18} className="text-emerald-400 shrink-0" />
                <div>
                  <p className="text-white/40 text-[10px] uppercase font-mono tracking-wider">Focus Area</p>
                  <p className="text-white font-semibold text-xs">CADD & In Silico</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Full Horizontal Bio Paragraphs (Staggered ScrollReveal) */}
          <div className="space-y-6 text-white/80 font-body text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
            
            <ScrollReveal delay={200}>
              <p>
                I am an undergraduate Biotechnology student at <span className="text-white font-semibold">Brainware University, Kolkata</span> (2024–Present). Driven by a profound fascination with molecular machinery, my academic journey is centered around understanding how cellular mechanisms operate at the nanoscale and how emerging biological engineering can be harnessed to design next-generation therapeutics.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <p>
                My scientific foundation uniquely bridges <span className="text-[#14b8a6] font-semibold">rigorous hands-on wet-laboratory experimentation</span> with <span className="text-[#c084fc] font-semibold">high-performance in-silico computational tools</span>. In the laboratory, I actively execute microbiology, cell biology, and biochemistry protocols, operating optical microscopes, centrifuges, and spectrophotometers under standard biosafety regulations and Good Laboratory Practices (GLP).
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p>
                On the computational frontier, I specialize in <span className="text-white font-semibold">Computer-Aided Drug Design (CADD)</span>, molecular docking, molecular dynamics simulations, and virtual screening. A defining milestone in my research journey was being shortlisted among only <span className="text-[#ff7eb3] font-semibold">20 candidates nationally</span> for the certified Skill Development Program in <span className="text-white font-semibold">Advanced BioInformatics</span> conducted by <span className="text-[#c084fc] font-semibold">CSIR-Indian Institute of Chemical Biology (CSIR-IICB)</span>.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <p>
                Furthermore, I completed an intensive 60-hour computational research internship at <span className="text-white font-semibold">Subhami Biopharma</span> in academic collaboration with <span className="text-white font-semibold">Jadavpur University</span>, authoring an in-silico research report on Celecoxib alternatives. Complementing this, I secured <span className="text-[#14b8a6] font-semibold">Elite + Silver medal certification</span> from <span className="text-white font-semibold">NPTEL • IIT (BHU) Varanasi</span> in Artificial Intelligence in Drug Discovery and Development, alongside Elite certification in Novel Drug Delivery Systems from <span className="text-white font-semibold">IIT Bombay</span>.
              </p>
            </ScrollReveal>

          </div>

          {/* Research Philosophy Pullquote */}
          <ScrollReveal delay={400} className="my-10 max-w-4xl mx-auto w-full">
            <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border-l-4 border-[#14b8a6] border-y border-r border-white/5 backdrop-blur-md">
              <p className="font-display italic text-lg md:text-xl text-white font-medium leading-relaxed text-center">
                “True scientific breakthrough lies at the intersection of empirical laboratory discipline and computational molecular modeling—accelerating discovery from bench to bedside.”
              </p>
            </div>
          </ScrollReveal>

          {/* Core Research Pillars (Horizontal Stream, Card-Free) */}
          <ScrollReveal delay={450} className="pt-6 border-t border-white/10 max-w-4xl mx-auto w-full">
            <span className="text-[10px] font-mono tracking-widest text-[#14b8a6] uppercase block mb-4 font-bold text-center">
              CORE RESEARCH PILLARS
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-l border-[#14b8a6]/40 pl-4">
                <div className="flex items-center gap-1.5 text-[#14b8a6] text-xs font-bold uppercase tracking-wider mb-1">
                  <Microscope size={15} /> Wet-Lab Practice
                </div>
                <p className="text-white/60 text-xs leading-relaxed">
                  Microbiology assays, sterile cell culture, standard biosafety protocols, and accurate laboratory documentation.
                </p>
              </div>

              <div className="border-l border-[#c084fc]/40 pl-4">
                <div className="flex items-center gap-1.5 text-[#c084fc] text-xs font-bold uppercase tracking-wider mb-1">
                  <Atom size={15} /> CADD & Docking
                </div>
                <p className="text-white/60 text-xs leading-relaxed">
                  In-silico molecular docking, binding affinity scoring, molecular dynamics simulations, and virtual screening.
                </p>
              </div>

              <div className="border-l border-[#ff7eb3]/40 pl-4">
                <div className="flex items-center gap-1.5 text-[#ff7eb3] text-xs font-bold uppercase tracking-wider mb-1">
                  <Dna size={15} /> Bioinformatics
                </div>
                <p className="text-white/60 text-xs leading-relaxed">
                  Sequence alignment, phylogenetic mapping, NGS data workflows, RNAseq analysis, and R computation.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Centered Actions */}
          <ScrollReveal delay={500} className="flex flex-wrap items-center justify-center gap-4 mt-12">
            <a 
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white hover:text-white border border-white/10 hover:border-[#14b8a6]/40 text-xs font-semibold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg"
            >
              <FileText size={15} className="text-[#14b8a6]" />
              <span>View Official Curriculum Vitae</span>
              <ArrowUpRight size={14} className="text-white/40" />
            </a>

            <a 
              href="#contact"
              className="py-3 px-6 rounded-xl bg-gradient-to-r from-[#7C3AED]/20 to-[#ff7eb3]/20 hover:from-[#7C3AED] hover:to-[#ff7eb3] text-white border border-[#7C3AED]/35 text-xs font-semibold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg"
            >
              <Sparkles size={14} />
              <span>Get in Touch</span>
            </a>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};

export default About;
