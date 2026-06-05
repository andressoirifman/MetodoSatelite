"use client";
import { Quote } from "lucide-react";

// ──────────────────────────────────────────────────────────────
// TESTIMONIOS ESTRUCTURALES — Reemplazar con reales cuando estén
// disponibles. Perfiles calibrados al buyer persona del Método
// Satélite: ingenieros, estudiantes avanzados, profesionales.
// ──────────────────────────────────────────────────────────────
const testimonios = [
  {
    id: "t1",
    nombre: "Valentina R.",
    perfil: "Estudiante de Ingeniería Agronómica · 4to año",
    ubicacion: "Paraná, Entre Ríos",
    cita:
      "Antes del Método Satélite, rendir Fisiología Vegetal era sembrar en cemento: estudiaba 12 horas y en el examen la mente en blanco. Con los nodos maestros estructuré toda la unidad de fotosíntesis en una sesión. Aprobé con 9.",
    resultado: "Retención +80% en materia técnica",
    accentColor: "var(--accent-cta)",
  },
  {
    id: "t2",
    nombre: "Lucas M.",
    perfil: "Ingeniero de Sistemas · PM en startup",
    ubicacion: "Córdoba, Argentina",
    cita:
      "Empecé a usar el WBS del módulo 3 para gestión de proyectos. Lo que antes tardaba 3 reuniones en definir, ahora lo tengo mapeado en 40 minutos con un plano satélite. El equipo lo adopté por completo.",
    resultado: "Reducción de ciclos de planificación en 60%",
    accentColor: "var(--accent-cyan)",
  },
  {
    id: "t3",
    nombre: "Sofía B.",
    perfil: "Profesional en RRHH · Maestranda",
    ubicacion: "Buenos Aires, Argentina",
    cita:
      "Pensé que era un curso de mapas mentales con colores. Es completamente distinto. Es ingeniería del conocimiento. Procesé los 300 papers de mi marco teórico usando el sistema de archivo del módulo 4 y la tesis avanzó de otra manera.",
    resultado: "Marco teórico de 300 papers indexados",
    accentColor: "var(--accent-green)",
  },
];

export default function Testimonios() {
  return (
    <section
      id="testimonios"
      className="relative py-24 md:py-32"
      style={{ background: "var(--bg-deep)" }}
    >
      <div className="container-main">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="badge-tech mb-4 inline-block">
            Casos de Uso Verificados
          </span>
          <span className="accent-line" />
          <h2 className="mb-4" style={{ color: "var(--text-primary)" }}>
            El sistema en{" "}
            <span style={{ color: "var(--accent-orange)" }}>operación real</span>
          </h2>
          <p className="text-base md:text-lg">
            Estudiantes de agronomía, ingenieros en producción, y profesionales con
            sobrecarga de información. El Método Satélite opera en campo.
          </p>
        </div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonios.map((test) => (
            <div
              key={test.id}
              id={`testimonio-${test.id}`}
              className="relative flex flex-col p-6 rounded-2xl transition-all duration-300"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--bg-border)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = test.accentColor;
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "var(--bg-border)";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Ícono de cita */}
              <Quote
                size={24}
                style={{ color: test.accentColor, opacity: 0.6, marginBottom: "1rem" }}
              />

              {/* Cita */}
              <p
                className="flex-1 text-sm mb-5"
                style={{
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{test.cita}&rdquo;
              </p>

              {/* Resultado técnico */}
              <div
                className="mb-4 px-3 py-2 rounded-lg"
                style={{
                  background: `${test.accentColor}10`,
                  border: `1px solid ${test.accentColor}25`,
                }}
              >
                <span
                  className="tag-mono"
                  style={{ color: test.accentColor, fontSize: "0.65rem" }}
                >
                  ✓ {test.resultado}
                </span>
              </div>

              {/* Separador */}
              <div
                style={{ height: "1px", background: "var(--bg-border)", marginBottom: "1rem" }}
              />

              {/* Perfil */}
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    color: "var(--text-primary)",
                  }}
                >
                  {test.nombre}
                </div>
                <div
                  className="text-xs mt-0.5"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
                >
                  {test.perfil}
                </div>
                <div
                  className="text-xs mt-0.5"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.05em",
                  }}
                >
                  // {test.ubicacion}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nota de placeholder */}
        <div
          className="mt-8 text-center"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            color: "var(--text-muted)",
            letterSpacing: "0.05em",
          }}
        >
          {/* Esta nota es solo para desarrollo — remover antes de publicar */}
          {/* // PLACEHOLDER: Reemplazar testimonios con casos reales */}
        </div>
      </div>
    </section>
  );
}
