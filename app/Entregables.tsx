"use client";
import { CheckCircle, BookOpen, Users, FileText, Video, Wrench } from "lucide-react";

const entregables = [
  {
    icon: Video,
    titulo: "4 módulos en video",
    descripcion:
      "Clases estructuradas con la lógica del sistema Satélite. Podés avanzar a tu ritmo, pausar y volver a los nodos que necesitás reforzar.",
    color: "var(--accent-cta)",
  },
  {
    icon: FileText,
    titulo: "Plantillas de arquitectura",
    descripcion:
      "Los templates exactos que usás para construir tus mapas satélite, WBS de proyectos y archivos de inteligencia. Listos para usar en digital o papel.",
    color: "var(--accent-cyan)",
  },
  {
    icon: BookOpen,
    titulo: "Guías de referencia técnica",
    descripcion:
      "Documentación de los 7 pasos, las reglas de indexación cromática y los protocolos de activación de nodos maestros.",
    color: "var(--accent-green)",
  },
];

const checks = [
  "Acceso de por vida al contenido en Cursapp",
  "Actualizaciones del método sin costo adicional",
  "Certificado de finalización del programa",
  "Soporte técnico sobre la plataforma",
];

export default function Entregables() {
  return (
    <section
      id="entregables"
      className="relative py-24 md:py-32"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="section-divider" />

      <div className="container-main">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="badge-tech mb-4 inline-block">
            Inventario de Acceso
          </span>
          <span className="accent-line" />
          <h2 className="mb-4" style={{ color: "var(--text-primary)" }}>
            ¿Qué incluye el{" "}
            <span style={{ color: "var(--accent-cyan)" }}>acceso completo</span>
            ?
          </h2>
          <p className="text-base md:text-lg">
            No es un PDF y una clase grabada. Es un sistema operativo completo para
            tu arquitectura cognitiva.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Grid de entregables principales */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {entregables.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.titulo}
                  className="p-5 rounded-xl transition-all duration-300"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--bg-border)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = item.color;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "var(--bg-border)";
                  }}
                >
                  <div
                    className="flex items-center justify-center w-9 h-9 rounded-lg mb-3"
                    style={{ background: `${item.color}18` }}
                  >
                    <Icon size={18} style={{ color: item.color }} />
                  </div>
                  <h3
                    className="text-sm font-semibold mb-2"
                    style={{
                      fontFamily: "var(--font-headline)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {item.titulo}
                  </h3>
                  <p className="text-xs" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                    {item.descripcion}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Sidebar — Condiciones de acceso */}
          <div className="sticky top-8">
            <div
              className="p-6 rounded-2xl"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--bg-border)",
                boxShadow: "0 0 40px rgba(16,185,129,0.08)",
              }}
            >
              <div
                className="tag-mono mb-4 block"
                style={{ color: "var(--accent-cta)" }}
              >
                ✓ Acceso en Cursapp
              </div>
              <h3
                className="text-xl font-bold mb-5"
                style={{
                  fontFamily: "var(--font-headline)",
                  color: "var(--text-primary)",
                }}
              >
                Todo lo que necesitás para operar el sistema
              </h3>
              <ul className="space-y-3 mb-6">
                {checks.map((check) => (
                  <li
                    key={check}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <CheckCircle
                      size={16}
                      style={{
                        color: "var(--accent-cta)",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    {check}
                  </li>
                ))}
              </ul>

              {/* Separador */}
              <div
                className="my-5"
                style={{
                  height: "1px",
                  background: "var(--bg-border)",
                }}
              />

              <div
                className="text-xs mb-5 p-3 rounded-lg"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--accent-cyan)",
                  background: "rgba(0,229,255,0.06)",
                  border: "1px solid rgba(0,229,255,0.15)",
                  lineHeight: 1.6,
                }}
              >
                // Plataforma: Cursapp
                <br />
                // Acceso: inmediato al pagar
                <br />
                // Formato: async · on-demand
              </div>

              <a
                id="cta-entregables"
                href={
                  process.env.NEXT_PUBLIC_CURSAPP_CHECKOUT ||
                  "https://cursapp.com/cursos/metodo-satelite"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-sm"
              >
                Acceder al programa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
