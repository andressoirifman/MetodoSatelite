import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Método Satélite | Ingeniería del Aprendizaje",
  description:
    "De la infoxicación a la arquitectura mental. 4 módulos, 16 lecciones, técnica de aprendizaje basada en neurociencia. Curso online + mentoría 1a1.",
  openGraph: {
    title: "Método Satélite | Ingeniería del Aprendizaje",
    description:
      "Procesa en 1 hora lo que antes tomaba 5. El sistema de aprendizaje basado en neurociencia y analogías agronómicas.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Fira+Code:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
