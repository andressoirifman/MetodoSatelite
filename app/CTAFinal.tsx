"use client";
import { ArrowRight, Satellite, MessageCircle, CheckCircle } from "lucide-react";

const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_CURSAPP_CHECKOUT ||
  "https://cursapp.com/cursos/metodo-satelite";

const WHATSAPP_URL =
  process.env.NEXT_PUBLIC_WHATSAPP_MENTORIA ||
  "https://wa.me/?text=info";

const cursoBenefits = [
  "16 lecciones en video (acceso de por vida)",
  "Plantillas editables (XMind, Coggle, PDF)",
  "Guías de referencia técnica",
  "Comunidad de alumnos en Cursapp",
  "Certificado digital de finalización",
  "Actualizaciones de contenido sin costo",
];

const mentoriaBenefits = [
  "Todo lo del Curso ($21.20 incluido)",
  "4 sesiones personalizadas (30-45 min c/u)",
  "Corrección de TUS mapas en tiempo real",
  "Diagnóstico de tu sistema actual (1ra sesión)",
  "Soporte por WhatsApp entre sesiones",
  "Grabación de cada sesión para tu archivo",
];

export default function CTAFinal() {
  return (
    <section
      id="cta-final"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: "var(--bg-surface)" }}
    >
      {/* Fondo con gradiente */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, #10b981 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, #00E5FF 0%, transparent 60%)",
        }}
      />

      {/* Grid de puntos */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--text-secondary) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-main relative z-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div
            className="flex items-center justify-center w-14 h-14 rounded-2xl mx-auto mb-6"
            style={{
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.3)",
              boxShadow: "0 0 40px rgba(16,185,129,0.2)",
            }}
          >
            <Satellite size={28} style={{ color: "var(--accent-cta)" }} />
          </div>

          <span className="badge-tech mb-4 inline-block">
            Elegí tu camino
          </span>

          <h2
            className="mb-4"
            style={{ color: "var(--text-primary)", lineHeight: 1.1 }}
          >
            Dos formas de{" "}
            <span
              style={{
                background: "var(--gradient-cta)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              activar el sistema
            </span>
          </h2>

          <p
            className="text-base md:text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            El curso funciona solo. La mentoría acelera tu maestría.
            Elegí según tu presupuesto y disponibilidad.
          </p>
        </div>

        {/* Cards de pricing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

          {/* OPCIÓN 1: Curso */}
          <div
            className="relative flex flex-col rounded-2xl p-8 transition-all duration-300"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--bg-border)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor =
                "rgba(0, 229, 255, 0.4)";
              (e.currentTarget as HTMLDivElement).style.transform =
                "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor =
                "var(--bg-border)";
              (e.currentTarget as HTMLDivElement).style.transform =
                "translateY(0)";
            }}
          >
            <div
              className="tag-mono mb-2"
              style={{ color: "var(--accent-cyan)" }}
            >
              Autodidacta
            </div>
            <h3
              className="text-xl font-bold mb-1"
              style={{
                fontFamily: "var(--font-headline)",
                color: "var(--text-primary)",
              }}
            >
              El Curso
            </h3>
            <p
              className="text-sm mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              Método Satélite completo, a tu ritmo
            </p>

            {/* Precio */}
            <div className="flex items-end gap-2 mb-6">
              <span
                style={{
                  fontFamily: "var(--font-headline)",
                  fontWeight: 700,
                  fontSize: "2.5rem",
                  color: "var(--text-primary)",
                  lineHeight: 1,
                }}
              >
                $25 USD
              </span>
              <span
                className="text-sm mb-1"
                style={{ color: "var(--text-muted)" }}
              >
                o $30.000 ARS · pago único
              </span>
            </div>

            {/* Beneficios */}
            <ul className="flex flex-col gap-3 mb-8 flex-grow">
              {cursoBenefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <CheckCircle
                    size={15}
                    style={{
                      color: "var(--accent-cyan)",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  />
                  {b}
                </li>
              ))}
            </ul>

            <a
              id="cta-final-curso"
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full justify-center"
            >
              Comprar curso en Cursapp
              <ArrowRight size={16} />
            </a>
          </div>

          {/* OPCIÓN 2: Combo Curso + Mentoría */}
          <div
            className="relative flex flex-col rounded-2xl p-8 transition-all duration-300"
            style={{
              background: "rgba(16, 185, 129, 0.04)",
              border: "1px solid rgba(16, 185, 129, 0.35)",
              boxShadow: "0 0 50px rgba(16, 185, 129, 0.08)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor =
                "rgba(16, 185, 129, 0.65)";
              (e.currentTarget as HTMLDivElement).style.transform =
                "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor =
                "rgba(16, 185, 129, 0.35)";
              (e.currentTarget as HTMLDivElement).style.transform =
                "translateY(0)";
            }}
          >
            {/* Badge recomendado */}
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
              style={{
                background: "var(--accent-cta)",
                color: "#0B0E21",
                fontFamily: "var(--font-headline)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              Máximo Rinde
            </div>

            <div
              className="tag-mono mb-2"
              style={{ color: "var(--accent-cta)" }}
            >
              Mentoría 1a1
            </div>
            <h3
              className="text-xl font-bold mb-1"
              style={{
                fontFamily: "var(--font-headline)",
                color: "var(--text-primary)",
              }}
            >
              Curso + Mentoría
            </h3>
            <p
              className="text-sm mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              4 sesiones personalizadas con Andrés
            </p>

            {/* Precio */}
            <div className="flex items-end gap-2 mb-6">
              <span
                style={{
                  fontFamily: "var(--font-headline)",
                  fontWeight: 700,
                  fontSize: "2.5rem",
                  color: "var(--text-primary)",
                  lineHeight: 1,
                }}
              >
                $100 USD
              </span>
              <span
                className="text-sm mb-1"
                style={{ color: "var(--text-muted)" }}
              >
                o $100.000 ARS · total
              </span>
            </div>

            {/* Desglose */}
            <div
              className="text-xs px-3 py-2 rounded-lg mb-5"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--accent-cta)",
                background: "rgba(16,185,129,0.06)",
                border: "1px solid rgba(16,185,129,0.15)",
                lineHeight: 1.7,
              }}
            >
              // Curso $25 USD + Mentoría $100 USD
              <br />
              // Horarios: Lun-Vie 18:00-21:00 ART
            </div>

            {/* Beneficios */}
            <ul className="flex flex-col gap-3 mb-8 flex-grow">
              {mentoriaBenefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <CheckCircle
                    size={15}
                    style={{
                      color: "var(--accent-cta)",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  />
                  {b}
                </li>
              ))}
            </ul>

            <a
              id="cta-final-mentoria"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center"
            >
              <MessageCircle size={16} />
              Reservar vacante por WhatsApp
            </a>
          </div>
        </div>

        {/* Nota de garantía */}
        <p
          className="mt-10 text-center text-xs"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--text-muted)",
            letterSpacing: "0.05em",
          }}
        >
          // Pago seguro via Cursapp · 7 días de garantía · Acceso inmediato al comprar
        </p>
      </div>
    </section>
  );
}
