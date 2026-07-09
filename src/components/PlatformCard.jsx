import React from 'react'
import useTilt from '../hooks/useTilt'

export default function PlatformCard({
  href,
  gradientColors,   // CSS gradient string
  animationClass,   // e.g. "animate-gradientIG"
  icon,             // React icon component
  platform,         // "INSTAGRAM"
  stat,             // "1K+"
  statLabel,        // "Followers"
  statStyle,        // Tailwind text color class
}) {
  const cardRef = useTilt();

  return (
    <a
      ref={cardRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative overflow-hidden block group cursor-pointer"
      style={{ borderRadius: '20px', transformStyle: 'preserve-3d' }}
    >
      {/* Animated gradient border/glow layer */}
      <div
        className={`absolute inset-0 ${animationClass} opacity-80 group-hover:opacity-100 transition-opacity duration-500`}
        style={{
          background: gradientColors,
          backgroundSize: '300% 300%',
          borderRadius: '20px',
          filter: 'blur(8px)',
          zIndex: 0,
        }}
      />

      {/* Glass card surface */}
      <div
        className="relative z-10 flex flex-col items-center justify-center gap-5 p-12 transition-all duration-500"
        style={{
          background: 'rgba(26, 10, 46, 0.88)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderRadius: '18px',
          border: '1px solid rgba(253, 251, 247,0.08)',
          // Layered shadow for depth
          boxShadow: 'inset 0 1px 0 rgba(253, 251, 247,0.06), 0 24px 48px rgba(0,0,0,0.4)',
          transformStyle: 'preserve-3d',
          transform: 'translateZ(10px)',
        }}
      >
        {/* Icon with 3D lift */}
        <div
          className="w-16 h-16 flex items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 text-5xl"
          style={{
            background: 'rgba(253, 251, 247,0.05)',
            border: '1px solid rgba(253, 251, 247,0.1)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
          }}
        >
          {icon}
        </div>

        {/* Platform name */}
        <p className="font-body text-xs text-[#fdfbf7]/40 tracking-[0.3em] uppercase">
          {platform}
        </p>

        {/* Main stat — larger, bolder */}
        <p className={`font-display text-5xl font-bold leading-none ${statStyle}`}>
          {stat}
        </p>

        {/* Stat label */}
        <p className="font-body text-xs text-[#fdfbf7]/30 tracking-wide">
          {statLabel}
        </p>
      </div>
    </a>
  )
}
