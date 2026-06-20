"use client";
import Image from "next/image";
import { ArrowRight, Satellite, ChevronDown } from "lucide-react";

const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_CURSAPP_CHECKOUT ||
  "https://cursapp.com/cursos/metodo-satelite";

const STATS = [
  { label: "Retención",  value: "90%",      color: "#22C55E" },
  { label: "Módulos",    value: "4",         color: "#00E5FF" },
  { label: "Enfoque",    value: "Sistemas",  color: "#f97316" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position:       "relative",
        minHeight:      "100vh",
        display:        "flex",
        flexDirection:  "column",
        justifyContent: "center",
        overflow:       "hidden",
        backgroundColor: "#0B0E21",  // Negro Obsidiana Pomelli
      }}
    >

      {/* ── IMAGEN DE FONDO: solo en Hero, baja opacidad ── */}
      {/* Regla Manual de Operaciones §5: Portada_MM.jpg únicamente en cabecera */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/Portada_MM.jpg"
          alt="Árbol de ideas irradiante y colorido que representa la explosión cognitiva antes del orden estructural"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit:    "cover",
            objectPosition: "center",
            opacity:      0.30,
            filter:       "contrast(1.4) brightness(1.1) saturate(1.1)",
          }}
        />
        {/* Overlay: asegura legibilidad total sobre la imagen */}
        <div
          style={{
            position:   "absolute",
            inset:      0,
            background: "linear-gradient(to bottom, rgba(11,14,33,0.75) 0%, rgba(11,14,33,0.92) 60%, #0B0E21 100%)",
          }}
        />
      </div>

      {/* ── LÍNEA TÉCNICA DECORATIVA ── */}
      <div
        style={{
          position:   "absolute",
          left:       0,
          right:      0,
          top:        "38%",
          height:     "1px",
          zIndex:     1,
          pointerEvents: "none",
          background: "linear-gradient(90deg, transparent 0%, rgba(0,229,255,0.18) 50%, transparent 100%)",
        }}
      />

      {/* ── CONTENIDO PRINCIPAL ── */}
      <div
        style={{
          maxWidth:   "1200px",
          margin:     "0 auto",
          padding:    "8rem 1.5rem 6rem",
          position:   "relative",
          zIndex:     2,
          width:      "100%",
        }}
      >
        <div style={{ maxWidth: "52rem" }}>

          {/* BADGE TÉCNICO */}
          <div
            style={{
              display:        "inline-flex",
              alignItems:     "center",
              gap:            "0.4rem",
              background:     "rgba(0, 229, 255, 0.06)",
              border:         "1px solid rgba(0, 229, 255, 0.2)",
              color:          "#00E5FF",
              fontFamily:     "'Fira Code', monospace",
              fontSize:       "0.7rem",
              letterSpacing:  "0.1em",
              textTransform:  "uppercase",
              padding:        "0.3rem 0.75rem",
              borderRadius:   "4px",
              marginBottom:   "1.5rem",
            }}
          >
            <Satellite size={12} />
            Ingeniería del Aprendizaje · Método Satélite
          </div>

          {/* H1: HEADLINE OFICIAL MÉTODO SATÉLITE */}
          <h1
            style={{
              fontFamily:    "'Space Grotesk', sans-serif",
              fontWeight:     700,
              fontSize:       "clamp(2.25rem, 5.5vw, 4rem)",
              lineHeight:     1.1,
              letterSpacing: "-0.02em",
              color:          "#f8fafc",
              marginBottom:   "1.5rem",
            }}
          >
            De la{" "}
            <span
              style={{
                color:          "#94a3b8",
                textDecoration: "line-through",
                textDecorationColor: "rgba(239,68,68,0.5)",
              }}
            >
              Infoxicación
            </span>
            {" "}a la{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00E5FF 0%, #22C55E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Arquitectura Mental
            </span>
          </h1>

          {/* SUBTÍTULO */}
          <p
            style={{
              fontFamily:   "'Inter', sans-serif",
              fontSize:     "clamp(1rem, 2vw, 1.2rem)",
              lineHeight:   1.75,
              color:        "#94a3b8",
              marginBottom: "0.75rem",
              maxWidth:     "42rem",
            }}
          >
            Procesá en{" "}
            <strong style={{ color: "#f8fafc", fontWeight: 600 }}>
              1 hora
            </strong>{" "}
            lo que antes tomaba 5. Ingeniería del aprendizaje basada en
            neurociencia y analogías agronómicas. 4 módulos. 16 lecciones.
            Retención del{" "}
            <span
              style={{
                color:      "#f97316",
                fontFamily: "'Fira Code', monospace",
                fontWeight:  600,
              }}
            >
              90%
            </span>{" "}
            real y medible.
          </p>

          {/* ETIQUETA TÉCNICA */}
          <p
            style={{
              fontFamily:   "'Fira Code', monospace",
              fontSize:     "0.78rem",
              letterSpacing:"0.05em",
              color:        "#64748b",
              marginBottom: "2.5rem",
            }}
          >
            {"// Neurociencia aplicada · Analogías agronómicas · Ingeniería del aprendizaje"}
          </p>

          {/* CTAs */}
          <div
            style={{
              display:    "flex",
              flexWrap:   "wrap",
              gap:        "1rem",
              alignItems: "center",
            }}
          >
            {/* CTA PRIMARIO — Azul Cian (Pomelli) */}
            <a
              id="cta-hero-principal"
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                gap:            "0.5rem",
                background:     "#00E5FF",
                color:          "#0B0E21",
                fontFamily:     "'Space Grotesk', sans-serif",
                fontWeight:      700,
                fontSize:       "1rem",
                padding:        "0.9rem 2rem",
                borderRadius:   "6px",
                textDecoration: "none",
                boxShadow:      "0 0 30px rgba(0, 229, 255, 0.3)",
                transition:     "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background  = "#00b5cc";
                el.style.transform   = "translateY(-2px)";
                el.style.boxShadow   = "0 0 50px rgba(0, 229, 255, 0.5)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background  = "#00E5FF";
                el.style.transform   = "translateY(0)";
                el.style.boxShadow   = "0 0 30px rgba(0, 229, 255, 0.3)";
              }}
            >
              Comenzar ahora en Cursapp
              <ArrowRight size={18} />
            </a>

            {/* CTA SECUNDARIO — outline cian */}
            <a
              id="cta-hero-ver-mas"
              href="#modulos"
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                gap:            "0.5rem",
                background:     "transparent",
                color:          "#00E5FF",
                fontFamily:     "'Space Grotesk', sans-serif",
                fontWeight:      600,
                fontSize:       "1rem",
                padding:        "0.9rem 2rem",
                borderRadius:   "6px",
                border:         "1.5px solid rgba(0, 229, 255, 0.3)",
                textDecoration: "none",
                transition:     "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background   = "rgba(0, 229, 255, 0.08)";
                el.style.borderColor  = "rgba(0, 229, 255, 0.6)";
                el.style.transform    = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background   = "transparent";
                el.style.borderColor  = "rgba(0, 229, 255, 0.3)";
                el.style.transform    = "translateY(0)";
              }}
            >
              Ver los 4 módulos
            </a>
          </div>
        </div>
      </div>

      {/* ── MÉTRICAS FLOTANTES (solo desktop) ── */}
      <div
        style={{
          position:      "absolute",
          right:         "3rem",
          top:           "50%",
          transform:     "translateY(-50%)",
          zIndex:        2,
          display:       "flex",
          flexDirection: "column",
          gap:           "1.75rem",
          opacity:       0.9,
        }}
        className="hidden lg:flex"
      >
        {STATS.map((stat) => (
          <div
            key={stat.label}
            style={{
              textAlign:    "right",
              borderRight:  `2px solid ${stat.color}`,
              paddingRight: "1rem",
            }}
          >
            <div
              style={{
                fontFamily:  "'Space Grotesk', sans-serif",
                fontWeight:   700,
                fontSize:    "1.6rem",
                color:        stat.color,
                lineHeight:   1,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontFamily:    "'Fira Code', monospace",
                fontSize:      "0.62rem",
                letterSpacing: "0.1em",
                color:         "#64748b",
                textTransform: "uppercase",
                marginTop:     "3px",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* ── INDICADOR DE SCROLL ── */}
      <div
        style={{
          position:  "absolute",
          bottom:    "2rem",
          left:      "50%",
          transform: "translateX(-50%)",
          zIndex:    2,
          color:     "#64748b",
          animation: "bounce 2s ease infinite",
        }}
      >
        <ChevronDown size={24} />
      </div>

    </section>
  );
}
