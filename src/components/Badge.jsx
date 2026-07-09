import React from 'react';

const Badge = ({ 
  children, 
  variant = 'neutral', // 'emerald', 'purple', 'teal', 'pink', 'neutral'
  pulse = false, 
  mono = false, 
  className = "" 
}) => {
  const baseStyle = "px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border transition-all duration-300 inline-flex items-center gap-2 self-start";
  
  const variants = {
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]",
    purple: "bg-[#7C3AED]/15 text-[#D8B4FE] border-[#7C3AED]/20",
    teal: "bg-[#14b8a6]/10 text-[#14b8a6] border-[#14b8a6]/20",
    pink: "bg-[#ff7eb3]/10 text-[#ff7eb3] border-[#ff7eb3]/20 shadow-[0_0_15px_rgba(255,126,179,0.1)]",
    neutral: "bg-white/5 text-white/60 border-white/10"
  };

  const fontStyle = mono ? "font-mono" : "font-body";
  
  const dotColors = {
    emerald: "bg-emerald-400",
    purple: "bg-[#D8B4FE]",
    teal: "bg-[#14b8a6]",
    pink: "bg-[#ff7eb3]",
    neutral: "bg-white/60"
  };

  return (
    <span className={`${baseStyle} ${variants[variant] || variants.neutral} ${fontStyle} ${className}`}>
      {pulse && (
        <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${dotColors[variant] || dotColors.neutral}`} />
      )}
      {children}
    </span>
  );
};

export default Badge;
