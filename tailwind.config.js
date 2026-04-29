export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pastel: {
          lavender: "#e8d5f5",
          pink: "#ffd6e7",
          peach: "#ffe5d0",
          rose: "#f9a8d4",
          purple: "#c084fc",
          softwhite: "#fdf6ff",
        },
        brand: {
          bg: "#1a0a2e",
          card: "rgba(255,255,255,0.07)",
          border: "rgba(255,255,255,0.15)",
          magenta: "#e040fb",
          lavender: "#b39ddb",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["DM Sans", "sans-serif"],
        accent: ["Cormorant Garamond", "serif"],
      },
      animation: {
        float: "floatUp 6s ease-in-out infinite",
        float2: "floatUp2 8s ease-in-out infinite",
        float3: "floatUp3 7s ease-in-out infinite",
        blob: "blobPulse 8s ease-in-out infinite",
        fadein: "fadeInUp 0.8s cubic-bezier(0.23,1,0.32,1) forwards",
        shimmer: "shimmer 3s ease-in-out infinite",
        collab: "collabPulse 2s ease-in-out infinite",
        gradientIG: "gradientRotateIG 4s ease infinite",
        gradientYT: "gradientRotateYT 4s ease infinite",
        gradientFB: "gradientRotateFB 4s ease infinite",
        cardIdle: "cardTiltReset 6s ease-in-out infinite",
      },
      keyframes: {
        floatUp: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        floatUp2: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        floatUp3: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blobPulse: {
          "0%,100%": { transform: "scale(1) translate(0,0)" },
          "33%": { transform: "scale(1.1) translate(10px,-10px)" },
          "66%": { transform: "scale(0.95) translate(-10px,10px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%,100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
        collabPulse: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(224,64,251,0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(224,64,251,0)" },
        },
        gradientRotateIG: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        gradientRotateYT: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        gradientRotateFB: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        cardTiltReset: {
          "0%,100%": { transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)" },
          "50%": { transform: "perspective(1000px) rotateX(1deg) rotateY(1deg) translateY(-6px)" },
        },
      },
      backdropBlur: {
        glass: "20px",
      },
    },
  },
  plugins: [],
}