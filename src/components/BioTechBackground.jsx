import React, { useEffect, useRef } from 'react';

/**
 * BioTechBackground — High-End SaaS Biotechnology Canvas
 * Crafted with Senior AI UI/UX Precision.
 *
 * Features:
 *  - High-DPI Retina aware (crisp 60fps, zero blur or scaling artifacts)
 *  - 3D Rotating DNA Double Helix with luminous base-pair rungs
 *  - Atomic Nucleus & Multi-Planar Electron Orbitals (Protons & Electrons)
 *  - Organic Chemistry Benzene Rings & Connected Molecular Structures
 *  - Interactive Constellation Network (molecular nodes & bond linkages)
 *  - Floating Bioinformatics Genomic & Chemical Coordinate Tags
 *  - Smooth Bioluminescent Deep Spatial Ambient Atmosphere
 */

const BioTechBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = null;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse coordinates (normalized and pixel)
    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false };

    // ─── 1. MOLECULAR CONSTELLATION NODES ───
    const NODE_COUNT = 65;
    const nodes = [];

    // ─── 2. FLOATING CHEMICAL / GENOMIC LABELS ───
    const bioTags = [
      { text: "5' ─── 3'", x: 0.12, y: 0.18, speed: 0.2 },
      { text: "C₂₁H₂₀O₆", x: 0.88, y: 0.28, speed: 0.15 },
      { text: "IC₅₀: 2.4 nM", x: 0.08, y: 0.62, speed: 0.18 },
      { text: "ΔG = -9.8 kcal/mol", x: 0.90, y: 0.74, speed: 0.22 },
      { text: "α-Helix [Leu-Ala-Gly]", x: 0.22, y: 0.88, speed: 0.16 },
      { text: "CADD • PDB: 7K45", x: 0.78, y: 0.92, speed: 0.19 },
    ];

    // Seeded random helper for uniform distribution
    let seed = 1337;
    const rnd = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    // Initialize/Reset Scene
    const initScene = () => {
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: rnd() * width,
          y: rnd() * height,
          vx: (rnd() - 0.5) * 0.35,
          vy: (rnd() - 0.5) * 0.35,
          radius: 1.2 + rnd() * 1.8,
          baseAlpha: 0.25 + rnd() * 0.45,
          pulseSpeed: 1 + rnd() * 2,
          pulseOffset: rnd() * Math.PI * 2,
          color: i % 4 === 0 ? '#14B8A6' : i % 4 === 1 ? '#C084FC' : i % 4 === 2 ? '#FF7EB3' : '#FDFBF7'
        });
      }
    };

    // Resize Handler with Retina DPR Handling
    const handleResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      initScene();
    };

    // Mouse handlers
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Initial resize trigger
    handleResize();

    // ─── PROCEDURAL DRAWING HELPERS ───

    // Draw 3D Rotating DNA Double Helix
    const drawDNAStrand = (startX, startY, length, time, scale = 1, alpha = 0.35) => {
      ctx.save();
      const rungs = 26;
      const stepY = length / rungs;
      const amplitude = 32 * scale;
      const frequency = 0.18;
      const rotSpeed = time * 0.8;

      for (let i = 0; i < rungs; i++) {
        const y = startY + i * stepY;
        const phase = i * frequency + rotSpeed;
        const sinVal = Math.sin(phase);
        const cosVal = Math.cos(phase);

        // Strand 1 and Strand 2 coordinates (3D rotation effect)
        const x1 = startX + sinVal * amplitude;
        const x2 = startX - sinVal * amplitude;
        const depth = cosVal; // -1 to 1 for 3D depth

        // Hydrogen bond rung connecting base pairs
        const rungAlpha = (0.15 + (depth + 1) * 0.25) * alpha;
        ctx.beginPath();
        ctx.moveTo(x1, y);
        ctx.lineTo(x2, y);
        ctx.strokeStyle = `rgba(192, 132, 252, ${rungAlpha})`;
        ctx.lineWidth = 1 * scale;
        ctx.stroke();

        // Nucleotide nodes (Adenine, Thymine, Guanine, Cytosine color-coding)
        const node1Color = depth > 0 ? '#14B8A6' : '#7C3AED';
        const node2Color = depth > 0 ? '#FF7EB3' : '#38BDF8';
        const nodeRadius = (depth > 0 ? 3.0 : 2.0) * scale;

        // Base pair 1
        ctx.beginPath();
        ctx.arc(x1, y, nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = node1Color;
        ctx.globalAlpha = (0.3 + (depth + 1) * 0.35) * alpha;
        ctx.fill();

        // Base pair 2
        ctx.beginPath();
        ctx.arc(x2, y, nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = node2Color;
        ctx.globalAlpha = (0.3 + (-depth + 1) * 0.35) * alpha;
        ctx.fill();
      }

      // Smooth backbone ribbon lines
      ctx.lineWidth = 1.6 * scale;
      ctx.globalAlpha = alpha * 0.75;

      // Backbone 1 (Teal)
      ctx.beginPath();
      for (let i = 0; i < rungs; i++) {
        const y = startY + i * stepY;
        const phase = i * frequency + rotSpeed;
        const x = startX + Math.sin(phase) * amplitude;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = '#14B8A6';
      ctx.stroke();

      // Backbone 2 (Violet)
      ctx.beginPath();
      for (let i = 0; i < rungs; i++) {
        const y = startY + i * stepY;
        const phase = i * frequency + rotSpeed;
        const x = startX - Math.sin(phase) * amplitude;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = '#C084FC';
      ctx.stroke();

      ctx.restore();
    };

    // Draw Multi-Planar Quantum Atom (Nucleus + Orbital Rings + Orbiting Electrons)
    const drawAtom = (cx, cy, radius, time, alpha = 0.35) => {
      ctx.save();
      ctx.globalAlpha = alpha;

      // Dense Nucleus Cluster (Protons & Neutrons)
      const nucleusRadius = radius * 0.18;
      
      // Nucleus Soft Glow
      const nucGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, nucleusRadius * 2.8);
      nucGlow.addColorStop(0, 'rgba(255, 126, 179, 0.45)');
      nucGlow.addColorStop(0.5, 'rgba(124, 58, 237, 0.2)');
      nucGlow.addColorStop(1, 'rgba(124, 58, 237, 0)');
      ctx.fillStyle = nucGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, nucleusRadius * 2.8, 0, Math.PI * 2);
      ctx.fill();

      // Core Protons & Neutrons
      const subParticles = [
        { dx: -2, dy: -2, c: '#FF7EB3' },
        { dx: 3, dy: -1, c: '#14B8A6' },
        { dx: -1, dy: 3, c: '#C084FC' },
        { dx: 2, dy: 2, c: '#FAF6F0' }
      ];
      subParticles.forEach(p => {
        ctx.beginPath();
        ctx.arc(cx + p.dx, cy + p.dy, 2.8, 0, Math.PI * 2);
        ctx.fillStyle = p.c;
        ctx.fill();
      });

      // 3 Orbital Ellipses rotated at 0°, 60°, 120°
      const planes = [0, Math.PI / 3, (2 * Math.PI) / 3];
      const orbitSpeed = 1.1;

      planes.forEach((baseAngle, idx) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(baseAngle + time * 0.08 * (idx % 2 === 0 ? 1 : -1));

        // Thin orbital trajectory
        ctx.beginPath();
        ctx.ellipse(0, 0, radius, radius * 0.36, 0, 0, Math.PI * 2);
        ctx.strokeStyle = idx === 0 ? 'rgba(20, 184, 166, 0.35)' : idx === 1 ? 'rgba(192, 132, 252, 0.35)' : 'rgba(255, 126, 179, 0.3)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Orbiting electron position
        const electronAngle = time * orbitSpeed * (1 + idx * 0.25);
        const ex = Math.cos(electronAngle) * radius;
        const ey = Math.sin(electronAngle) * (radius * 0.36);

        // Electron particle with glow
        ctx.beginPath();
        ctx.arc(ex, ey, 3, 0, Math.PI * 2);
        ctx.fillStyle = idx === 0 ? '#14B8A6' : idx === 1 ? '#C084FC' : '#FF7EB3';
        ctx.fill();

        // Subtle electron trailing spark
        ctx.beginPath();
        const prevAngle = electronAngle - 0.2;
        ctx.arc(Math.cos(prevAngle) * radius, Math.sin(prevAngle) * (radius * 0.36), 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(253, 251, 247, 0.4)';
        ctx.fill();

        ctx.restore();
      });

      ctx.restore();
    };

    // Draw Organic Chemistry Benzene Rings (Hexagonal Aromatic Molecule)
    const drawBenzeneStructure = (cx, cy, r, time, alpha = 0.3) => {
      ctx.save();
      ctx.globalAlpha = alpha;

      const angleOffset = Math.sin(time * 0.2) * 0.1;
      const pts = [];
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i + angleOffset;
        pts.push({ x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) });
      }

      // Outer hexagonal perimeter
      ctx.beginPath();
      pts.forEach((p, i) => {
        if (i === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      });
      ctx.closePath();
      ctx.strokeStyle = 'rgba(20, 184, 166, 0.6)';
      ctx.lineWidth = 1.3;
      ctx.stroke();

      // Inner aromatic resonance circle
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.52, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(192, 132, 252, 0.45)';
      ctx.lineWidth = 0.9;
      ctx.setLineDash([3, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Carbon/Nitrogen atom vertices
      pts.forEach((p, i) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 ? '#14B8A6' : '#FF7EB3';
        ctx.fill();
      });

      // Chemical functional group tail (e.g., -OH or -CH3 branch)
      const tailAngle = (Math.PI / 3) * 1 + angleOffset;
      const tailEnd = {
        x: cx + r * 1.7 * Math.cos(tailAngle),
        y: cy + r * 1.7 * Math.sin(tailAngle)
      };
      ctx.beginPath();
      ctx.moveTo(pts[1].x, pts[1].y);
      ctx.lineTo(tailEnd.x, tailEnd.y);
      ctx.strokeStyle = 'rgba(20, 184, 166, 0.5)';
      ctx.lineWidth = 1.2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(tailEnd.x, tailEnd.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#C084FC';
      ctx.fill();

      ctx.restore();
    };

    // ─── MAIN ANIMATION LOOP ───
    let startTime = performance.now();

    const render = (now) => {
      const elapsed = (now - startTime) * 0.001; // seconds

      // Mouse smooth interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // 1. Clear Viewport
      ctx.clearRect(0, 0, width, height);

      // 2. Base Dark Spatial Canvas Gradient
      const baseGrad = ctx.createLinearGradient(0, 0, 0, height);
      baseGrad.addColorStop(0, '#090514');
      baseGrad.addColorStop(0.35, '#0E0720');
      baseGrad.addColorStop(0.70, '#150A2D');
      baseGrad.addColorStop(1, '#090514');
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, width, height);

      // 3. Bioluminescent Atmospheric Gradient Glows
      const glows = [
        { x: width * 0.15, y: height * 0.20, r: width * 0.35, c: 'rgba(124, 58, 237, 0.12)' },
        { x: width * 0.85, y: height * 0.30, r: width * 0.32, c: 'rgba(20, 184, 166, 0.09)' },
        { x: width * 0.30, y: height * 0.75, r: width * 0.38, c: 'rgba(255, 126, 179, 0.07)' },
        { x: width * 0.80, y: height * 0.85, r: width * 0.30, c: 'rgba(124, 58, 237, 0.10)' },
      ];

      glows.forEach(g => {
        const rad = ctx.createRadialGradient(g.x, g.y, 0, g.x, g.y, g.r);
        rad.addColorStop(0, g.c);
        rad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = rad;
        ctx.fillRect(0, 0, width, height);
      });

      // 4. Interactive Molecular Constellation Network
      const MAX_LINK_DIST = 115;
      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i];

        // Move node
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundary
        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        else if (p.x > width) { p.x = width; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        else if (p.y > height) { p.y = height; p.vy *= -1; }

        // Subtle interactive mouse repulsion/field
        if (mouse.active) {
          const mdx = mouse.x - p.x;
          const mdy = mouse.y - p.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < 160 && mDist > 0) {
            const force = (160 - mDist) / 160;
            p.x -= (mdx / mDist) * force * 1.2;
            p.y -= (mdy / mDist) * force * 1.2;
          }
        }

        // Draw connections to nearby nodes (Molecular Bonds)
        for (let j = i + 1; j < nodes.length; j++) {
          const p2 = nodes[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_LINK_DIST) {
            const linkAlpha = (1 - dist / MAX_LINK_DIST) * 0.16;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(192, 132, 252, ${linkAlpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }

        // Draw node dot with subtle breathing pulse
        const pulse = Math.sin(elapsed * p.pulseSpeed + p.pulseOffset) * 0.2;
        const currentAlpha = Math.max(0.1, p.baseAlpha + pulse);
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = currentAlpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // 5. Hero & Content Strategic Biology Visual Placements
      // ── DNA Double Helix (Left Margin — graceful vertical rotation)
      drawDNAStrand(width * 0.05, height * 0.08, height * 0.85, elapsed, 0.95, 0.32);

      // ── DNA Double Helix (Right Margin — complementary subtle rotation)
      drawDNAStrand(width * 0.95, height * 0.12, height * 0.80, elapsed + 2.0, 0.85, 0.26);

      // ── Quantum Atomic Models with Revolving Electrons
      // Top-Right Atom
      drawAtom(width * 0.86, height * 0.18, 52, elapsed, 0.38);
      // Bottom-Left Mid Atom
      drawAtom(width * 0.14, height * 0.68, 44, elapsed * 1.1, 0.32);
      // Mid-Right Secondary Atom
      drawAtom(width * 0.78, height * 0.72, 38, elapsed * 0.9, 0.28);

      // ── Benzene Organic Chemical Rings
      // Upper Left Benzene Group
      drawBenzeneStructure(width * 0.24, height * 0.16, 26, elapsed, 0.34);
      // Lower Right Benzene Group
      drawBenzeneStructure(width * 0.70, height * 0.40, 22, elapsed + 1.2, 0.28);
      // Center-Lower Benzene Group
      drawBenzeneStructure(width * 0.38, height * 0.84, 24, elapsed + 2.4, 0.26);

      // 6. Monospace Bioinformatics Genomic Tags (Floating quietly)
      ctx.save();
      ctx.font = "500 11px 'JetBrains Mono', 'Fira Code', monospace";
      ctx.letterSpacing = "0.14em";

      bioTags.forEach((tag, idx) => {
        const floatY = (Math.sin(elapsed * tag.speed + idx) * 8);
        const px = tag.x * width;
        const py = tag.y * height + floatY;
        const textAlpha = 0.18 + Math.sin(elapsed * 0.5 + idx) * 0.08;

        ctx.fillStyle = idx % 2 === 0 ? `rgba(20, 184, 166, ${textAlpha})` : `rgba(192, 132, 252, ${textAlpha})`;
        ctx.fillText(tag.text, px, py);
      });
      ctx.restore();

      // 7. Microscopic Grid Overlay (Precision Lab Instrument Horizon)
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.012)';
      ctx.lineWidth = 0.5;
      const gridStep = 80;
      for (let x = 0; x < width; x += gridStep) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridStep) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();

      // 8. Subtle Vignette Edge Masking
      const vignette = ctx.createRadialGradient(
        width / 2, height / 2, Math.min(width, height) * 0.45,
        width / 2, height / 2, Math.max(width, height) * 0.75
      );
      vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
      vignette.addColorStop(1, 'rgba(9, 5, 20, 0.55)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 0,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
      }}
      aria-hidden="true"
    />
  );
};

export default BioTechBackground;
