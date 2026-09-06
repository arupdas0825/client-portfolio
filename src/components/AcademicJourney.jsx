import React from 'react';
import ScrollReveal from './ScrollReveal';
import { CoverflowCarousel } from './ui/coverflow-carousel';

const ACADEMIC_SLIDES = [
  {
    src: "/Education logo.jpg",
    objectPosition: "center 30%",
    alt: "Secondary Education - Birati Mahajati Balika Vidyamandir",
    title: "Secondary Education",
    subtitle: "Birati Mahajati Balika Vidyamandir",
    badge: "Completed",
    year: "2022",
    icon: "🎓",
    description: "Built a strong academic foundation with consistent performance across core subjects, developing analytical thinking, discipline, and scientific curiosity.",
    meta: [
      { label: "Year", value: "2022" },
      { label: "Board", value: "WBBSE" },
      { label: "Score", value: "85%" },
      { label: "Status", value: "Completed" },
    ],
  },
  {
    src: "/Education logo.jpg",
    objectPosition: "center 30%",
    alt: "Higher Secondary Education - Pure Science (PCMB)",
    title: "Higher Secondary Education",
    subtitle: "Birati Mahajati Balika Vidyamandir",
    badge: "Completed",
    year: "2024",
    icon: "🔬",
    tags: ["Physics", "Chemistry", "Mathematics", "Biology"],
    description: "Strengthened scientific understanding through rigorous study of physical and life sciences, preparing for advanced biotechnology education.",
    meta: [
      { label: "Year", value: "2024" },
      { label: "Board", value: "WBCHSE" },
      { label: "Stream", value: "Pure Science (PCMB)" },
      { label: "Score", value: "63%" },
    ],
  },
  {
    src: "/Brainware image.jpg",
    objectPosition: "center 25%",
    alt: "B.Tech Biotechnology - Brainware University",
    title: "B.Tech Biotechnology",
    subtitle: "Brainware University",
    badge: "Ongoing",
    year: "2024 – 2028",
    icon: "🧬",
    stats: {
      cgpa: "8.1",
      semester: "5",
      expectedGraduation: "2028"
    },
    description: "Pursuing Biotechnology with a focus on life sciences, molecular biology, biotechnology applications, laboratory techniques, and emerging biomedical innovations.",
    meta: [
      { label: "Duration", value: "2024 – 2028" },
      { label: "Institution", value: "Brainware University" },
      { label: "CGPA", value: "8.1 / 10" },
      { label: "Status", value: "Currently Enrolled" },
    ],
  },
  {
    src: "/internship-1.jpg",
    alt: "Research Internship - Subhami Biopharma & Jadavpur University",
    title: "Research Internship",
    subtitle: "Subhami Biopharma · Collab: Jadavpur University",
    badge: "Completed",
    year: "June – July 2026",
    icon: "🧪",
    description: "Successfully completed a research internship focused on computational drug discovery, molecular dynamics simulations, and computational chemistry workflows under academic guidance.",
    meta: [
      { label: "Period", value: "3 June – 7 July 2026" },
      { label: "Host", value: "Subhami Biopharma" },
      { label: "Collaboration", value: "Jadavpur University" },
      { label: "Field", value: "In Silico Drug Discovery" },
    ],
  },
  {
    src: "/csir image.png",
    objectPosition: "center 22%",
    logos: ["/csir-logo.svg", "/csir-iicb-logo.svg"],
    alt: "Advanced BioInformatics Training - CSIR-IICB",
    title: "Advanced BioInformatics Training",
    subtitle: "CSIR-IICB · Kolkata, India",
    badge: "Selected",
    year: "7 Sept – 18 Sept 2026",
    icon: "🧬",
    tags: ["Bioinformatics", "Genomics", "R", "Drug Design", "NGS Analysis", "Molecular Modeling"],
    description: "Shortlisted among 20 candidates nationally for CSIR-IICB's Skill Development Program on Advanced BioInformatics. Intensive hands-on training in sequence alignment, in-silico molecular modeling, NGS analysis, RNAseq, and molecular dynamics simulations.",
    meta: [
      { label: "Dates", value: "7 Sept – 18 Sept 2026" },
      { label: "Organization", value: "CSIR-IICB, Kolkata" },
      { label: "Course Code", value: "IICB-BIO" },
      { label: "Selection", value: "Top 20 Candidates Nationally" },
    ],
  },
];

export default function AcademicJourney() {
  return (
    <section className="relative py-28 px-6 overflow-hidden" id="academic-journey">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <ScrollReveal>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#ff7eb3]/80 mb-3 block">
              ACADEMIC HIGHLIGHT
            </span>
            <h2 className="font-display text-[40px] md:text-[52px] lg:text-[64px] font-bold leading-tight tracking-tight relative mb-5">
              <span className="bg-gradient-to-r from-[#FAF6F0] via-[#FBCFE8] to-[#D8B4FE] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(216,180,254,0.15)]">
                Academic Journey
              </span>
            </h2>
            <p className="font-body text-white/75 text-base md:text-lg max-w-[650px] mx-auto leading-relaxed text-center">
              A 3D interactive timeline of academic growth, scientific curiosity, and research-driven development.
            </p>
          </ScrollReveal>
        </div>

        {/* 3D Coverflow Carousel */}
        <ScrollReveal delay={150}>
          <div className="w-full">
            <CoverflowCarousel
              slides={ACADEMIC_SLIDES}
              rotate={36}
              depth={0.52}
              perspective={2.8}
              cardWidth="clamp(240px, 28vw, 340px)"
              showCaption={true}
              showPagination={true}
              showNavigation={true}
              loop={true}
              autoPlay={true}
              autoPlayInterval={3600}
              autoPlaySpeed={0.9}
              pauseOnHover={true}
            />

            {/* Subtle gesture hint */}
            <div className="mt-8 flex items-center justify-center gap-2 text-white/30 text-xs font-mono">
              <span>✦ Drag, swipe, or use arrow keys to navigate milestones ✦</span>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
