"use client";
import { ArrowRight, Satellite } from "lucide-react";

const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_CURSAPP_CHECKOUT ||
  "https://cursapp.com/cursos/metodo-satelite";

export default function CTAFinal() {
  return (
    <section
      id="cta-final"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: "var(--bg-surface)" }}
    >
      {/* Fondo con gradiente de marca Pomelli-tech */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, #10b981 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, #00E5FF 0%, transparent 60%)",
        }}
      />

      {/* Grid de puntos decorativos */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--text-secondary) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Ícono */}
          <div
            className="flex items-center justify-center w-16 h-16 rounded-2xl mx-auto mb-8"
            style={{
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.3)",
              boxShadow: "0 0 40px rgba(16,185,129,0.2)",
            }}
          >
            <Satellite size={32} style={{ color: "var(--accent-cta)" }} />
          </div>

          {/* Badge */}
          <span className="badge-tech mb-6 inline-block">
            Sistema Activo · Listos para operar
          </span>

          {/* Headline */}
          <h2
            className="mb-6"
            style={{ color: "var(--text-primary)", lineHeight: 1.1 }}
          >
            Iniciá tu{" "}
            <span
              style={{
                background: "var(--gradient-cta)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Remake Profesional
            </span>{" "}
            hoy.
          </h2>

          {/* Subtítulo */}
          <p
            className="text-lg mb-10 max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
          >
            El Método Satélite no es el primer curso que vas a hacer. Pero sí puede
            ser el que cambie{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              cómo operás con todo el conocimiento que ya tenés
            </strong>{" "}
            — y con el que seguirás adquiriendo.
          </p>

          {/* Bloque de código motivacional */}
          <div
            className="inline-block text-left p-4 rounded-lg mb-10"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--bg-border)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              lineHeight: 1.8,
            }}
          >
            <span style={{ color: "var(--accent-cyan)" }}>const</span>{" "}
            <span style={{ color: "var(--text-primary)" }}>vos</span>{" "}
            <span style={{ color: "var(--text-secondary)" }}>=</span>{" "}
            <span style={{ color: "var(--accent-cta)" }}>
              MetodoSatelite
            </span>
            <span style={{ color: "var(--text-secondary)" }}>.</span>
            <span style={{ color: "var(--accent-orange)" }}>activar</span>
            <span style={{ color: "var(--text-secondary)" }}>();</span>
            <br />
            <span style={{ color: "var(--text-muted)" }}>
              // retención: 90% · sistema: online · estado: listo
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              id="cta-final-principal"
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base"
            >
              Acceder al Método Satélite en Cursapp
              <ArrowRight size={18} />
            </a>
            <a
              id="cta-final-modulos"
              href="#modulos"
              className="btn-secondary text-base"
            >
              Revisar los módulos
            </a>
          </div>

          {/* Garantía/apoyo */}
          <p
            className="mt-8 text-xs"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--text-muted)",
              letterSpacing: "0.05em",
            }}
          >
            // Acceso en Cursapp · Pago seguro · Soporte incluido
          </p>
        </div>
      </div>
    </section>
  );
}
