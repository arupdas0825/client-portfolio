"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export function CoverflowCarousel({
  slides,
  rotate = 38,
  depth = 0.55,
  perspective = 2.8,
  falloff = 0.58,
  fade = 0.15,
  cardWidth = "clamp(240px, 28vw, 340px)",
  gap = 0.06,
  loop = true,
  autoPlay = true,
  autoPlayInterval = 3600,
  autoPlaySpeed = 0.9,
  pauseOnHover = true,
  showCaption = true,
  showPagination = true,
  showNavigation = true,
  label = "Cover carousel",
  className,
  cardClassName,
}) {
  const count = slides.length;

  const frameRef = React.useRef(null);
  const cardRefs = React.useRef([]);
  const posRef = React.useRef(0);
  const targetRef = React.useRef(0);
  const widthRef = React.useRef(0);
  const rafRef = React.useRef(null);
  const dragRef = React.useRef(null);
  const isHoveredRef = React.useRef(false);
  const isDraggingRef = React.useRef(false);
  const isClickedPausedRef = React.useRef(false);
  const [isClickedPaused, setIsClickedPaused] = React.useState(false);
  const hasMovedRef = React.useRef(false);
  const autoPlayTimerRef = React.useRef(null);

  const setClickedPaused = React.useCallback((paused) => {
    isClickedPausedRef.current = paused;
    setIsClickedPaused(paused);
  }, []);

  const [selected, setSelected] = React.useState(0);

  const indexAt = React.useCallback(
    (pos) => ((Math.round(pos) % count) + count) % count,
    [count],
  );

  const paint = React.useCallback(() => {
    const width = widthRef.current;
    if (!width) return;
    const pitch = width * (1 + gap);
    const pos = posRef.current;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      let offset = index - pos;
      if (loop) {
        offset = ((offset % count) + count) % count;
        if (offset > count / 2) offset -= count;
      }

      const distance = Math.abs(offset);
      const ramp = Math.pow(distance, falloff);
      const tilt = Math.min(rotate * ramp, 82) * Math.sign(offset);

      card.style.transform =
        `translateX(calc(-50% + ${offset * pitch}px)) ` +
        `translateZ(${-depth * width * ramp}px) rotateY(${-tilt}deg)`;

      const edge = loop ? Math.min(1, Math.max(0, count / 2 - distance)) : 1;
      card.style.opacity = String(Math.max(0, 1 - fade * distance) * edge);
      card.style.zIndex = String(100 - Math.round(distance));
    });
  }, [count, depth, fade, falloff, gap, loop, rotate]);

  const settle = React.useCallback(
    (target, speedMultiplier = 1) => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      targetRef.current = target;
      setSelected(indexAt(target));

      const step = () => {
        const remaining = target - posRef.current;
        if (Math.abs(remaining) < 0.0004) {
          posRef.current = target;
          paint();
          rafRef.current = null;
          return;
        }
        // At 0.5x speed, the easing steps at half speed for a relaxed, slow-motion glide
        const easeRate = 0.16 * speedMultiplier;
        posRef.current += remaining * easeRate;
        paint();
        rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    },
    [indexAt, paint],
  );

  const clamp = React.useCallback(
    (pos) => (loop ? pos : Math.max(0, Math.min(count - 1, pos))),
    [count, loop],
  );

  const startAutoPlay = React.useCallback(() => {
    if (!autoPlay || count <= 1) return;
    if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    autoPlayTimerRef.current = setInterval(() => {
      if (!isHoveredRef.current && !isDraggingRef.current && !isClickedPausedRef.current) {
        // Automatically advance 1 card from right to left at autoPlaySpeed in an infinite loop
        settle(clamp(Math.round(targetRef.current) + 1), autoPlaySpeed);
      }
    }, autoPlayInterval);
  }, [autoPlay, autoPlayInterval, autoPlaySpeed, clamp, count, settle]);

  const goTo = React.useCallback(
    (index) => {
      const target = loop
        ? index + Math.round((targetRef.current - index) / count) * count
        : index;
      settle(clamp(target), 1);
      startAutoPlay();
    },
    [clamp, count, loop, settle, startAutoPlay],
  );

  const nudge = React.useCallback(
    (by) => {
      setClickedPaused(false);
      settle(clamp(Math.round(targetRef.current) + by), 1);
      startAutoPlay();
    },
    [clamp, setClickedPaused, settle, startAutoPlay],
  );

  const onPointerDown = (event) => {
    hasMovedRef.current = false;
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    isDraggingRef.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    targetRef.current = posRef.current;
    dragRef.current = {
      id: event.pointerId,
      x: event.clientX,
      pos: posRef.current,
      v: 0,
      t: performance.now(),
    };
  };

  const onPointerMove = (event) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;

    if (Math.abs(event.clientX - drag.x) > 6) {
      hasMovedRef.current = true;
    }

    const pitch = widthRef.current * (1 + gap);
    if (!pitch) return;

    const now = performance.now();
    const previous = posRef.current;
    posRef.current = clamp(drag.pos - (event.clientX - drag.x) / pitch);
    drag.v = ((posRef.current - previous) / Math.max(now - drag.t, 1)) * 1000;
    drag.t = now;

    const index = indexAt(posRef.current);
    if (index !== selected) setSelected(index);
    paint();
  };

  const endDrag = (event) => {
    const drag = dragRef.current;
    isDraggingRef.current = false;
    if (!drag || drag.id !== event.pointerId) return;
    dragRef.current = null;
    const carried = Math.max(-2, Math.min(2, drag.v * 0.18));
    settle(clamp(Math.round(posRef.current + carried)), 1);
    startAutoPlay();
  };

  // Resume automatic movement when user scrolls or navigates to another section
  React.useEffect(() => {
    const section =
      frameRef.current?.closest("#academic-journey") ||
      frameRef.current?.closest("section");
    if (!section) return;

    // 1. IntersectionObserver: triggers when academic journey section leaves viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.2) {
            if (isClickedPausedRef.current) {
              setClickedPaused(false);
              startAutoPlay();
            }
          }
        });
      },
      { threshold: [0, 0.2, 0.5] }
    );
    observer.observe(section);

    // 2. Window scroll: triggers when scrolled away from section bounds
    const handleScroll = () => {
      if (!isClickedPausedRef.current) return;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < vh * 0.15 || rect.top > vh * 0.85) {
        setClickedPaused(false);
        startAutoPlay();
      }
    };

    // 3. Pointerdown outside section (clicking another section or navbar)
    const handlePointerDown = (e) => {
      if (!isClickedPausedRef.current) return;
      if (!section.contains(e.target)) {
        setClickedPaused(false);
        startAutoPlay();
      }
    };

    // 4. Hash change (navbar link navigation)
    const handleHashChange = () => {
      if (isClickedPausedRef.current) {
        setClickedPaused(false);
        startAutoPlay();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [setClickedPaused, startAutoPlay]);

  React.useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [startAutoPlay]);

  useIsoLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const measure = () => {
      const card = cardRefs.current[0];
      if (!card) return;
      widthRef.current = card.offsetWidth;
      paint();
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(frame);
    return () => observer.disconnect();
  }, [paint]);

  React.useEffect(
    () => () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    },
    [],
  );

  const active = slides[selected];

  return (
    <div
      className={cn("w-full select-none", className)}
      style={{ ["--cf-card"]: cardWidth }}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div className="relative">
        <div
          ref={frameRef}
          tabIndex={0}
          onMouseEnter={() => {
            if (pauseOnHover) isHoveredRef.current = true;
          }}
          onMouseLeave={() => {
            if (pauseOnHover) isHoveredRef.current = false;
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              nudge(-1);
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              nudge(1);
            }
          }}
          className="cursor-grab overflow-hidden py-8 outline-none active:cursor-grabbing"
          style={{
            perspective: `calc(var(--cf-card) * ${perspective})`,
            touchAction: "pan-y",
          }}
        >
          <div
            className="relative select-none"
            style={{
              height: "calc(var(--cf-card) * 1.15)",
              transformStyle: "preserve-3d",
            }}
          >
            {slides.map((slide, index) => {
              const isCenter = index === selected;
              return (
                <div
                  key={index}
                  ref={(node) => {
                    cardRefs.current[index] = node;
                  }}
                  onClick={() => {
                    if (hasMovedRef.current) return;
                    if (isCenter && isClickedPausedRef.current) {
                      setClickedPaused(false);
                      startAutoPlay();
                    } else {
                      goTo(index);
                      setClickedPaused(true);
                    }
                  }}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${count}`}
                  className={cn(
                    "absolute left-1/2 top-0 aspect-[4/5] overflow-hidden rounded-[24px] shadow-2xl will-change-transform cursor-pointer border transition-[border-color,box-shadow] duration-300",
                    isCenter 
                      ? "border-[#ff7eb3]/40 shadow-[0_20px_60px_rgba(255,126,179,0.25)] ring-1 ring-[#ff7eb3]/30" 
                      : "border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.5)] opacity-80 hover:opacity-100",
                    cardClassName,
                  )}
                  style={{ width: "var(--cf-card)" }}
                >
                  {/* Background Image */}
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    draggable={false}
                    className="h-full w-full select-none object-cover transition-transform duration-700 hover:scale-105"
                    style={slide.objectPosition ? { objectPosition: slide.objectPosition } : undefined}
                  />

                  {/* Gradient Glass Overlay for High Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0618] via-[#0B0618]/55 to-black/35 pointer-events-none" />

                  {/* Central Logos Overlay (when slide.logos is provided) */}
                  {slide.logos && slide.logos.length > 0 && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 pointer-events-none z-10">
                      {/* Ambient light glow */}
                      <div className="absolute w-44 h-44 rounded-full bg-[#c084fc]/25 blur-3xl pointer-events-none" />
                      
                      {/* Logos Glass Container */}
                      <div className="relative z-10 flex items-center gap-3.5 p-3 px-4 rounded-2xl glass bg-[#0B0618]/70 border border-white/25 shadow-2xl backdrop-blur-xl">
                        <div className="w-11 h-11 rounded-xl bg-white/10 p-1.5 flex items-center justify-center">
                          <img src={slide.logos[0]} alt="CSIR" className="w-full h-full object-contain brightness-105" />
                        </div>
                        <div className="w-[1px] h-7 bg-white/20" />
                        <div className="w-11 h-11 rounded-xl bg-white/10 p-1.5 flex items-center justify-center">
                          <img src={slide.logos[1]} alt="CSIR-IICB" className="w-full h-full object-contain brightness-105" />
                        </div>
                      </div>

                      {/* Small highlight pill */}
                      <div className="relative z-10 mt-3.5 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-100 border border-purple-400/40 text-center shadow-lg backdrop-blur-md">
                        Selected Among 20 Candidates
                      </div>
                    </div>
                  )}

                  {/* Top Bar on Card: Badge & Year */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                    {slide.badge && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/10 backdrop-blur-md text-[#fdfbf7] border border-white/20 shadow-md">
                        {slide.badge}
                      </span>
                    )}
                    {slide.year && (
                      <span className="font-mono text-[11px] font-semibold text-white/80 bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                        {slide.year}
                      </span>
                    )}
                  </div>

                  {/* Bottom Text on Card */}
                  <div className="absolute bottom-4 left-4 right-4 pointer-events-none z-10">
                    {slide.icon && (
                      <div className="w-8 h-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-sm mb-2 shadow-sm overflow-hidden">
                        {typeof slide.icon === 'string' && (slide.icon.startsWith('/') || slide.icon.startsWith('http')) ? (
                          <img src={slide.icon} alt="" className="w-full h-full object-cover" />
                        ) : (
                          slide.icon
                        )}
                      </div>
                    )}
                    <h4 className="font-display text-base font-bold text-[#fdfbf7] leading-tight line-clamp-1 drop-shadow-md">
                      {slide.title}
                    </h4>
                    {slide.subtitle && (
                      <p className="text-[11px] text-[#14b8a6] font-body font-semibold tracking-wider uppercase mt-0.5 line-clamp-1 drop-shadow-sm">
                        {slide.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Buttons */}
        {showNavigation && (
          <>
            <button
              type="button"
              aria-label="Previous milestone"
              onClick={() => nudge(-1)}
              className="absolute left-2 sm:left-4 top-1/2 z-[150] -translate-y-1/2 w-11 h-11 rounded-2xl glass bg-[#0B0618]/70 border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:border-[#ff7eb3]/50 hover:bg-[#ff7eb3]/15 transition-all shadow-xl backdrop-blur-xl group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              type="button"
              aria-label="Next milestone"
              onClick={() => nudge(1)}
              className="absolute right-2 sm:right-4 top-1/2 z-[150] -translate-y-1/2 w-11 h-11 rounded-2xl glass bg-[#0B0618]/70 border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:border-[#ff7eb3]/50 hover:bg-[#ff7eb3]/15 transition-all shadow-xl backdrop-blur-xl group"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </>
        )}
      </div>

      {/* Pagination Dots */}
      {showPagination && (
        <div className="mt-4 flex flex-col items-center gap-3">
          {showPagination && (
            <div className="flex items-center justify-center gap-2.5">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === selected}
                  onClick={() => {
                    goTo(index);
                    setClickedPaused(true);
                  }}
                  className={cn(
                    "h-2 rounded-full transition-all duration-400",
                    index === selected 
                      ? "w-8 bg-gradient-to-r from-[#ff7eb3] to-[#c084fc] shadow-[0_0_12px_rgba(255,126,179,0.5)]" 
                      : "w-2 bg-white/20 hover:bg-white/40",
                  )}
                />
              ))}
            </div>
          )}

          {/* Subtle Pause / Resume status indicator */}
          {isClickedPaused && (
            <button
              type="button"
              onClick={() => {
                setClickedPaused(false);
                startAutoPlay();
              }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-mono text-purple-200 bg-purple-500/15 border border-purple-400/30 hover:bg-purple-500/25 transition-all shadow-lg backdrop-blur-md animate-in fade-in zoom-in-95 cursor-pointer group"
              title="Click to resume automatic movement or scroll to another section"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>Stopped on Card · Click to Resume</span>
              <span className="text-[#ff7eb3] text-xs group-hover:translate-x-0.5 transition-transform">▶</span>
            </button>
          )}
        </div>
      )}

      {/* Active Caption Details */}
      {showCaption && active && (
        <div
          key={selected}
          className="mt-8 max-w-2xl mx-auto px-6 duration-400 animate-in fade-in flex flex-col items-center text-center"
        >
          {/* Badge & Period Header */}
          <div className="flex items-center gap-2 mb-3">
            {active.badge && (
              <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-[#ff7eb3]/10 border border-[#ff7eb3]/30 text-[#ff7eb3]">
                {active.badge}
              </span>
            )}
            {active.year && (
              <span className="text-[11px] font-mono text-white/50 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                {active.year}
              </span>
            )}
          </div>

          {/* Milestone Title */}
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#fdfbf7] leading-tight mb-1">
            {active.title}
          </h3>

          {/* Subtitle / Institution */}
          {active.subtitle && (
            <p className="text-sm font-semibold text-[#14b8a6] tracking-wide uppercase mb-3">
              {active.subtitle}
            </p>
          )}

          {/* Description */}
          {active.description && (
            <p className="text-sm text-[#fdfbf7]/70 font-body leading-relaxed max-w-lg mb-4">
              {active.description}
            </p>
          )}

          {/* Stats if available */}
          {active.stats && (
            <div className="grid grid-cols-3 gap-3 w-full max-w-md my-3">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-2.5 text-center">
                <span className="text-[#ff7eb3] font-display font-bold text-lg">{active.stats.cgpa}</span>
                <span className="text-[#fdfbf7]/40 text-[9px] uppercase tracking-widest block">CGPA</span>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-2.5 text-center">
                <span className="text-[#14b8a6] font-display font-bold text-lg">{active.stats.semester}</span>
                <span className="text-[#fdfbf7]/40 text-[9px] uppercase tracking-widest block">Semester</span>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-2.5 text-center">
                <span className="text-[#fdfbf7] font-display font-bold text-lg">{active.stats.expectedGraduation}</span>
                <span className="text-[#fdfbf7]/40 text-[9px] uppercase tracking-widest block">Graduation</span>
              </div>
            </div>
          )}

          {/* Subject / Focus Pills */}
          {active.tags && active.tags.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2 my-2">
              {active.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[10px] font-medium text-[#fdfbf7]/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Meta Specifications List */}
          {active.meta && active.meta.length > 0 && (
            <dl className="mt-4 w-full max-w-xs text-xs divide-y divide-white/5 border-t border-b border-white/10 py-1">
              {active.meta.map((row) => (
                <div key={row.label} className="flex justify-between py-2">
                  <dt className="text-white/40 uppercase tracking-wider font-mono text-[10px]">{row.label}</dt>
                  <dd className="font-semibold text-white/90">{row.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      )}
    </div>
  );
}
