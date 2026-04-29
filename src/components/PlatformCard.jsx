import React from 'react'

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
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative overflow-hidden block group cursor-pointer"
      style={{ borderRadius: '20px' }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = ((y - centerY) / centerY) * -8
        const rotateY = ((x - centerX) / centerX) * 8
        e.currentTarget.style.transform =
          `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.02)`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)'
        e.currentTarget.style.transition = 'transform 0.5s cubic-bezier(0.23,1,0.32,1)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transition = 'transform 0.1s ease'
      }}
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
          border: '1px solid rgba(255,255,255,0.08)',
          // Layered shadow for depth
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 24px 48px rgba(0,0,0,0.4)',
        }}
      >
        {/* Icon with 3D lift */}
        <div
          className="w-16 h-16 flex items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 text-5xl"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
          }}
        >
          {icon}
        </div>

        {/* Platform name */}
        <p className="font-body text-xs text-white/40 tracking-[0.3em] uppercase">
          {platform}
        </p>

        {/* Main stat — larger, bolder */}
        <p className={`font-display text-5xl font-bold leading-none ${statStyle}`}>
          {stat}
        </p>

        {/* Stat label */}
        <p className="font-body text-xs text-white/30 tracking-wide">
          {statLabel}
        </p>
      </div>
    </a>
  )
}
