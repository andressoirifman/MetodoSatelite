import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Paleta fusionada: Pizarra Técnica × Pomelli ──
      colors: {
        // Fondos (profundidad Pomelli + temperatura pizarra)
        "bg-deep":        "#0B0E21",  // Negro Obsidiana Pomelli
        "bg-surface":     "#0f172a",  // Slate 900
        "bg-card":        "#1e293b",  // Slate 800
        "bg-card-hover":  "#263548",
        "bg-border":      "#334155",  // Slate 700

        // Tipografía
        "chalk-white":    "#f8fafc",  // Tiza blanca
        "chalk-gray":     "#94a3b8",  // Gris técnico
        "chalk-muted":    "#64748b",

        // Acentos
        "emerald-cta":    "#10b981",  // Verde esmeralda — CTAs primarios
        "emerald-hover":  "#059669",
        "green-pomelli":  "#22C55E",  // Verde Pomelli
        "cyan-electric":  "#00E5FF",  // Cian eléctrico Pomelli
        "orange-node":    "#f97316",  // Naranja nodo — énfasis técnico
      },

      // ── Tipografía ──
      fontFamily: {
        headline: ["Space Grotesk", "sans-serif"],
        body:     ["Inter", "sans-serif"],
        mono:     ["Fira Code", "monospace"],
      },

      // ── Gradientes de marca ──
      backgroundImage: {
        "gradient-hero":    "linear-gradient(135deg, #0B0E21 0%, #0f172a 50%, #162032 100%)",
        "gradient-cta":     "linear-gradient(135deg, #059669 0%, #00E5FF 100%)",
        "gradient-card":    "linear-gradient(145deg, #1e293b 0%, #0f172a 100%)",
        "gradient-emerald-cyan": "linear-gradient(135deg, #10b981, #00E5FF)",
      },

      // ── Bordes redondeados ──
      borderRadius: {
        sm:  "0.25rem",
        DEFAULT: "0.375rem",
        md:  "0.5rem",
        lg:  "0.75rem",
        xl:  "1rem",
        "2xl": "1.25rem",
      },

      // ── Animaciones ──
      animation: {
        "fade-in-up":   "fadeInUp 0.7s ease both",
        "fade-in":      "fadeIn 0.5s ease both",
        "pulse-glow":   "pulseGlow 3s ease infinite",
        "bounce-slow":  "bounce 2s ease infinite",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)" },
          "50%":      { boxShadow: "0 0 50px rgba(16, 185, 129, 0.6)" },
        },
      },

      // ── Espaciado ──
      spacing: {
        "container-max": "1200px",
        "section-y":     "6rem",
        "section-y-lg":  "8rem",
      },

      // ── Box shadow ──
      boxShadow: {
        "glow-emerald": "0 0 40px rgba(16, 185, 129, 0.3)",
        "glow-cyan":    "0 0 40px rgba(0, 229, 255, 0.3)",
        "glow-orange":  "0 0 40px rgba(249, 115, 22, 0.3)",
        "card-hover":   "0 20px 60px rgba(0, 0, 0, 0.4)",
      },

      // ── Transición ──
      transitionDuration: {
        "250":  "250ms",
        "400":  "400ms",
      },
    },
  },
  plugins: [],
};

export default config;
