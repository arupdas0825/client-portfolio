import React from 'react';
import ScrollReveal from './ScrollReveal';

const SectionHeader = ({ eyebrow, title, subtitle, align = 'center', className = "" }) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const mxClass = align === 'center' ? 'mx-auto' : '';
  
  return (
    <div className={`${alignClass} mb-16 md:mb-24 ${className}`}>
      <ScrollReveal>
        {eyebrow && (
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#ff7eb3]/80 mb-3 block">
            {eyebrow}
          </span>
        )}
        {title && (
          <h2 className="font-display text-[40px] md:text-[52px] lg:text-[64px] font-bold leading-tight tracking-tight relative mb-6">
            <span className="bg-gradient-to-r from-[#FAF6F0] via-[#FBCFE8] to-[#D8B4FE] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(216,180,254,0.15)]">
              {title}
            </span>
          </h2>
        )}
        {subtitle && (
          <p className={`font-body text-[#fdfbf7]/75 text-lg max-w-[700px] ${mxClass} leading-relaxed`}>
            {subtitle}
          </p>
        )}
      </ScrollReveal>
    </div>
  );
};

export default SectionHeader;
