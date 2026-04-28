/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        biotech: {
          bg: "#020818",
          panel: "#0A2540",
          cyan: "#00D4FF",
          green: "#00FFA3",
          border: "rgba(0,212,255,0.15)",
        },
        beauty: {
          bg: "#0D0618",
          magenta: "#E040FB",
          lavender: "#B39DDB",
        },
      },
      animation: {
        float1: "floatY1 6s ease-in-out infinite",
        float2: "floatY2 8s ease-in-out infinite",
        float3: "floatY3 7s ease-in-out infinite",
        pulse_glow: "pulseGlow 3s ease-in-out infinite",
        scanline: "scanline 4s linear infinite",
        drift_in: "driftIn 0.8s cubic-bezier(0.23,1,0.32,1) forwards",
        glow_sweep: "glowSweep 4s ease-in-out infinite",
      },
      keyframes: {
        floatY1: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        floatY2: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        floatY3: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%,100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        scanline: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 100%" },
        },
        driftIn: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowSweep: {
          "0%,100%": { backgroundPosition: "-200% center" },
          "50%": { backgroundPosition: "200% center" },
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backdropBlur: {
        glass: "24px",
      },
    },
  },
  plugins: [],
}