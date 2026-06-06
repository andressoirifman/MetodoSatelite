import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Método Satélite — Ingeniería del Aprendizaje para TI",
  description:
    "El sistema completo para aprobar, programar y conseguir tu primer trabajo en TI. Un sistema técnico basado en neurociencia para estructurar información compleja.",
  keywords: [
    "método satélite",
    "ingeniería del aprendizaje",
    "arquitectura del conocimiento",
    "mapas mentales técnicos",
    "cursapp",
    "mega pack informática",
  ],
  openGraph: {
    title: "Método Satélite — Ingeniería del Aprendizaje",
    description:
      "Un sistema técnico, basado en neurociencia, diseñado para estructurar información compleja.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <head>
        {/* Preconnect para carga rápida de Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
