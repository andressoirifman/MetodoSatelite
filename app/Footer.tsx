"use client";
import { Satellite } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-12 border-t"
      style={{
        background: "var(--bg-deep)",
        borderColor: "var(--bg-border)",
      }}
    >
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Marca */}
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center w-9 h-9 rounded-lg"
              style={{
                background: "rgba(16,185,129,0.1)",
                border: "1px solid rgba(16,185,129,0.25)",
              }}
            >
              <Satellite size={18} style={{ color: "var(--accent-cta)" }} />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-headline)",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "var(--text-primary)",
                }}
              >
                Método Satélite
              </div>
              <div
                className="tag-mono"
                style={{ color: "var(--text-muted)", fontSize: "0.6rem" }}
              >
                Ingeniería del Aprendizaje
              </div>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center gap-6">
            {[
              { label: "Solución", href: "#problema" },
              { label: "Programa", href: "#modulos" },
              { label: "Sistema", href: "#entregables" },
              { label: "Casos", href: "#testimonios" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--text-secondary)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--text-muted)";
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div
            className="text-xs text-center md:text-right"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--text-muted)",
              letterSpacing: "0.05em",
            }}
          >
            © {year} Método Satélite
            <br />
            <span style={{ color: "var(--accent-cyan)", opacity: 0.6 }}>
              // Todos los derechos reservados
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
