"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_CURSAPP_CHECKOUT ||
  "https://cursapp.com/cursos/metodo-satelite";

const modulos = [
  {
    numero: "M·01",
    titulo: "El Diagnóstico",
    subtitulo: "Fundamentos",
    descripcion:
      "Limpieza de maleza mental y neurociencia de la visión. Identificás los patrones de falla en tu sistema actual y establecés la base para una nueva arquitectura cognitiva.",
    imagen: "/M1_Fundamentos.jpg",
    alt: "Fundamentos: Contraste entre sistema lineal y pensamiento irradiante",
    tags: ["Neurociencia", "Diagnóstico", "Baseline"],
    accentColor: "var(--accent-cyan)",
  },
  {
    numero: "M·02",
    titulo: "El Plano de Construcción",
    subtitulo: "Arquitectura Visual",
    descripcion:
      "Técnica de precisión: los 7 pasos de la arquitectura visual y los Nodos Maestros. El plano estructural de tu sistema de conocimiento.",
    imagen: "/M2_Plano_de_construccions.jpg",
    alt: "Plano de Construcción: Grilla de ingeniería y los 7 pasos visuales",
    tags: ["7 Pasos", "Nodos Maestros", "Arquitectura"],
    accentColor: "var(--accent-cta)",
  },
  {
    numero: "M·03",
    titulo: "Cultivo de Conocimiento",
    subtitulo: "Operaciones de Alto Rinde",
    descripcion:
      "Lectura de alto rinde, gestión de proyectos con WBS y simulador de escenarios. Convertís información en activos operativos productivos.",
    imagen: "/M3_Cultivo_de_conocimiento.jpg",
    alt: "Cultivo: Aplicaciones operativas de alto rinde y simulación de escenarios",
    tags: ["WBS", "Alto Rinde", "Simulación"],
    accentColor: "var(--accent-green)",
  },
  {
    numero: "M·04",
    titulo: "La Cosecha",
    subtitulo: "Escalamiento y Red",
    descripcion:
      "Optimización, escalamiento, archivo de inteligencia y polinización cruzada de ideas. Tu ecosistema satélite operando en plenitud.",
    imagen: "/M4_la_cosecha.jpg",
    alt: "Cosecha: Ecosistema satélite, escalamiento y proyección de red",
    tags: ["Escalamiento", "Archivo", "Red"],
    accentColor: "var(--accent-orange)",
  },
];

export default function Modulos() {
  return (
    <section
      id="modulos"
      className="relative py-24 md:py-32"
      style={{ background: "var(--bg-deep)" }}
    >
      <div className="container-main">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="badge-tech mb-4 inline-block">
            Arquitectura del Programa
          </span>
          <span className="accent-line" />
          <h2 className="mb-4" style={{ color: "var(--text-primary)" }}>
            El Ecosistema{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #10b981, #00E5FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Satélite
            </span>
          </h2>
          <p className="text-base md:text-lg">
            4 módulos diseñados como un sistema de ingeniería. Cada uno es un
            componente necesario — no hay atajos, hay{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              arquitectura
            </strong>
            .
          </p>
        </div>

        {/* Grid 2×2 (NO carrusel — ver restricciones UI) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modulos.map((mod) => (
            <div
              key={mod.numero}
              id={`modulo-${mod.numero.toLowerCase().replace("·", "")}`}
              className="group relative rounded-2xl overflow-hidden transition-all duration-400"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--bg-border)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = mod.accentColor;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4)`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "var(--bg-border)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Imagen del módulo */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={mod.imagen}
                  alt={mod.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay de imagen */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(11,14,33,0.95) 0%, rgba(11,14,33,0.3) 100%)",
                  }}
                />
                {/* Número de módulo flotante */}
                <div className="absolute top-4 left-4">
                  <span
                    className="module-number"
                    style={{
                      background: "rgba(11,14,33,0.8)",
                      padding: "0.3rem 0.6rem",
                      borderRadius: "4px",
                      border: `1px solid ${mod.accentColor}`,
                      color: mod.accentColor,
                    }}
                  >
                    {mod.numero}
                  </span>
                </div>
              </div>

              {/* Contenido de la card */}
              <div className="p-6">
                <div
                  className="tag-mono mb-1"
                  style={{ color: mod.accentColor }}
                >
                  {mod.subtitulo}
                </div>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-headline)",
                    color: "var(--text-primary)",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                  }}
                >
                  {mod.titulo}
                </h3>
                <p
                  className="text-sm mb-5"
                  style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
                >
                  {mod.descripcion}
                </p>

                {/* Tags técnicas */}
                <div className="flex flex-wrap gap-2">
                  {mod.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag-mono"
                      style={{
                        background: "rgba(51,65,85,0.5)",
                        border: "1px solid var(--bg-border)",
                        color: "var(--text-muted)",
                        padding: "0.2rem 0.5rem",
                        borderRadius: "3px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bajo los módulos */}
        <div className="mt-14 text-center">
          <a
            id="cta-modulos"
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base inline-flex"
          >
            Accedé a los 4 módulos en Cursapp
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
