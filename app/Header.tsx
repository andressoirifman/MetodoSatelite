"use client";
import { useState, useEffect } from "react";
import { Satellite, Menu, X, ArrowRight } from "lucide-react";

const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_CURSAPP_CHECKOUT ||
  "https://cursapp.com/cursos/metodo-satelite";

const NAV_LINKS = [
  { name: "Solución",     href: "#problema"     },
  { name: "Programa",     href: "#modulos"      },
  { name: "Sistema",      href: "#entregables"  },
  { name: "Casos",        href: "#testimonios"  },
];

export default function Header() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detecta scroll para activar fondo translúcido
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position:   "fixed",
        top:        0,
        left:       0,
        right:      0,
        zIndex:     50,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(11, 14, 33, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(51, 65, 85, 0.4)" : "none",
        padding: scrolled ? "1rem 0" : "1.5rem 0",
      }}
    >
      {/*
        Contenedor principal con márgenes generosos
        Se respeta la regla del Manual de Marca Pomelli:
        espacio de respiro de 50px alrededor del logotipo
      */}
      <div
        style={{
          maxWidth:      "1400px",
          margin:        "0 auto",
          padding:       "0 3rem",
          display:       "flex",
          alignItems:    "center",
          justifyContent:"space-between",
        }}
      >

        {/* ── LOGOTIPO ──
            Reglas del 06_Manual_Marca_Pomelli aplicadas:
            - Espacio de respiro: 50px a cada lado (margen + padding del contenedor)
            - Tamaño mínimo: 108px de ancho
            - Color: Negro Obsidiana + Azul Cian como acento
        */}
        <div
          aria-label="Logo Mega Pack Informática"
          style={{
            display:    "flex",
            alignItems: "center",
            gap:        "0.5rem",
            minWidth:   "108px",
            userSelect: "none",
          }}
        >
          {/* Isotipo: ícono satélite en contenedor cian */}
          <div
            style={{
              width:           "32px",
              height:          "32px",
              borderRadius:    "6px",
              background:      "rgba(0, 229, 255, 0.08)",
              border:          "1px solid rgba(0, 229, 255, 0.35)",
              display:         "flex",
              alignItems:      "center",
              justifyContent:  "center",
              color:           "#00E5FF",
              boxShadow:       "0 0 12px rgba(0, 229, 255, 0.15)",
            }}
          >
            <Satellite size={15} />
          </div>

          {/* Logotipo tipográfico */}
          <span
            style={{
              fontFamily:  "'Space Grotesk', sans-serif",
              fontWeight:   700,
              fontSize:    "1.15rem",
              letterSpacing: "-0.02em",
              color:        "#f8fafc",
            }}
          >
            Método<span style={{ color: "#00E5FF" }}>Satélite</span>
          </span>
        </div>

        {/* ── NAVEGACIÓN DESKTOP ── */}
        <nav
          style={{
            display:    "flex",
            alignItems: "center",
            gap:        "2rem",
          }}
          className="hidden md:flex"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              style={{
                fontFamily:  "'Inter', sans-serif",
                fontWeight:   600,
                fontSize:    "0.875rem",
                color:        "#ffffff",
                textDecoration: "none",
                transition:  "color 0.2s ease",
                textShadow: "1px 1px 0px rgba(0,0,0,1), 0 0 10px rgba(0,0,0,1)",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "#00E5FF")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "#ffffff")
              }
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* ── CTA DESKTOP ── */}
        <a
          id="cta-header-desktop"
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex"
          style={{
            alignItems:     "center",
            gap:            "0.4rem",
            background:     "#00E5FF",
            color:          "#0B0E21",
            fontFamily:     "'Space Grotesk', sans-serif",
            fontWeight:      700,
            fontSize:       "0.875rem",
            padding:        "0.6rem 1.25rem",
            borderRadius:   "6px",
            textDecoration: "none",
            boxShadow:      "0 0 20px rgba(0, 229, 255, 0.25)",
            transition:     "all 0.25s ease",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background  = "#00b5cc";
            el.style.transform   = "translateY(-2px)";
            el.style.boxShadow   = "0 0 35px rgba(0, 229, 255, 0.45)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background  = "#00E5FF";
            el.style.transform   = "translateY(0)";
            el.style.boxShadow   = "0 0 20px rgba(0, 229, 255, 0.25)";
          }}
        >
          Acceder
          <ArrowRight size={14} />
        </a>

        {/* ── BOTÓN HAMBURGUESA MOBILE — OCULTO ── */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Abrir menú de navegación"
          style={{
            display:     "none", /* ← OCULTO */
            background:  "transparent",
            border:      "none",
            cursor:      "pointer",
            color:       "#f8fafc",
            padding:     "0.5rem",
            transition:  "color 0.2s ease",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.color = "#00E5FF")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.color = "#f8fafc")
          }
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── MENÚ MOBILE DESPLEGABLE ── */}
      {isOpen && (
        <div
          style={{
            background:   "#0B0E21",
            borderTop:    "1px solid rgba(51, 65, 85, 0.5)",
            padding:      "1.5rem",
            display:      "flex",
            flexDirection:"column",
            gap:          "1rem",
            animation:    "fadeIn 0.2s ease",
          }}
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              style={{
                fontFamily:    "'Inter', sans-serif",
                fontWeight:     500,
                fontSize:      "1rem",
                color:         "#94a3b8",
                textDecoration:"none",
                paddingBottom: "0.75rem",
                borderBottom:  "1px solid rgba(51, 65, 85, 0.2)",
                transition:    "color 0.2s ease",
              }}
            >
              {item.name}
            </a>
          ))}

          <a
            id="cta-header-mobile"
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            style={{
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              gap:            "0.4rem",
              background:     "#00E5FF",
              color:          "#0B0E21",
              fontFamily:     "'Space Grotesk', sans-serif",
              fontWeight:      700,
              fontSize:       "0.95rem",
              padding:        "0.875rem",
              borderRadius:   "6px",
              textDecoration: "none",
              marginTop:      "0.5rem",
            }}
          >
            Acceder al Método Satélite
            <ArrowRight size={15} />
          </a>
        </div>
      )}
    </header>
  );
}
