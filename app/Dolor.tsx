"use client";
import { AlertTriangle, Zap, Brain, FileX } from "lucide-react";

const problemas = [
  {
    icon: FileX,
    titulo: "Lectura lineal sin depósito",
    descripcion:
      "Leer 10 páginas técnicas de corrido y quedar con la mente en blanco. La información entra, pero no infiltra: tasa de infiltración bajísima.",
    color: "var(--accent-orange)",
  },
  {
    icon: AlertTriangle,
    titulo: "Sembrar en cemento",
    descripcion:
      "El problema no es tu capacidad. Es el error de diseño en tu método. Un sistema lineal no puede sostener información compleja: es como plantar en roca.",
    color: "var(--accent-orange)",
  },
  {
    icon: Brain,
    titulo: "Falla del sistema lineal",
    descripcion:
      "Tu cerebro procesa en redes, no en líneas. Forzarlo a un modelo lineal produce ansiedad, olvido y la sensación de estudiar mucho sin resultados.",
    color: "var(--accent-orange)",
  },
  {
    icon: Zap,
    titulo: "Infoxicación estructural",
    descripcion:
      "No es falta de información: es sobrecarga sin arquitectura. Sin un sistema de nodos maestros, la información satura el disco sin indexarse.",
    color: "var(--accent-orange)",
  },
];

export default function Dolor() {
  return (
    <section
      id="problema"
      className="relative py-24 md:py-32"
      style={{ background: "var(--bg-surface)" }}
    >
      {/* Línea decorativa superior */}
      <div className="section-divider" />

      <div className="container-main">
        {/* Header de sección */}
        <div className="max-w-2xl mb-16">
          <span className="badge-tech mb-4 inline-block">
            Diagnóstico del Sistema
          </span>
          <span className="accent-line" />
          <h2 className="mb-4" style={{ color: "var(--text-primary)" }}>
            El error no sos vos.
            <br />
            Es el{" "}
            <span style={{ color: "var(--accent-orange)" }}>
              método que usás.
            </span>
          </h2>
          <p className="text-base md:text-lg">
            Si sentís que tu memoria falla, que estudiás horas sin retener nada, o que
            la información se te escapa en cuanto cerrás el libro — no es un problema de
            inteligencia. Es un problema de{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              ingeniería del proceso
            </strong>
            .
          </p>
        </div>

        {/* Grid de problemas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {problemas.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.titulo}
                className="group relative p-6 rounded-xl transition-all duration-300 cursor-default"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--bg-border)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(249, 115, 22, 0.4)";
                  (e.currentTarget as HTMLDivElement).style.background =
                    "var(--bg-card-hover)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "var(--bg-border)";
                  (e.currentTarget as HTMLDivElement).style.background =
                    "var(--bg-card)";
                }}
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-lg mb-4"
                  style={{ background: "rgba(249, 115, 22, 0.1)" }}
                >
                  <Icon size={20} style={{ color: item.color }} />
                </div>
                <h3
                  className="mb-2 text-base font-semibold"
                  style={{
                    fontFamily: "var(--font-headline)",
                    color: "var(--text-primary)",
                  }}
                >
                  {item.titulo}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {item.descripcion}
                </p>
              </div>
            );
          })}
        </div>

        {/* Contraste visual: Lineal vs Irradiante */}
        <div
          className="rounded-2xl p-8 md:p-12"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--bg-border)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Lado caos */}
            <div
              className="p-6 rounded-xl text-center"
              style={{
                background: "rgba(249, 115, 22, 0.06)",
                border: "1px dashed rgba(249, 115, 22, 0.3)",
              }}
            >
              <div
                className="tag-mono mb-4 block"
                style={{ color: "var(--accent-orange)" }}
              >
                ❌ Sistema Lineal
              </div>

              <p
                className="text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Información que entra sin arquitectura, se pierde sin dejar
                nodos. Tasa de retención:{" "}
                <strong style={{ color: "var(--accent-orange)" }}>
                  &lt; 10%
                </strong>
              </p>
            </div>

            {/* Divisor con flecha */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--bg-border)",
                }}
              >
                <span style={{ color: "var(--accent-cyan)", fontSize: "1.2rem" }}>
                  →
                </span>
              </div>
            </div>

            {/* Lado orden */}
            <div
              className="p-6 rounded-xl text-center"
              style={{
                background: "rgba(16, 185, 129, 0.06)",
                border: "1px dashed rgba(16, 185, 129, 0.3)",
              }}
            >
              <div
                className="tag-mono mb-4 block"
                style={{ color: "var(--accent-cta)" }}
              >
                ✓ Pensamiento Irradiante
              </div>

              <p
                className="text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Información indexada en nodos maestros, organizada para la
                recuperación. Tasa de retención:{" "}
                <strong style={{ color: "var(--accent-cta)" }}>90%+</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Línea decorativa inferior */}
      <div className="section-divider mt-24" />
    </section>
  );
}
