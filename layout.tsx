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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Tipografías: Space Grotesk (headlines), Inter (body), Fira Code (mono/técnico) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Fira+Code:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      {/*
        bg-[#0B0E21] = Negro Obsidiana Pomelli aplicado a nivel raíz
        font-sans = fallback seguro mientras cargan las Google Fonts
        text-[#f8fafc] = Tiza Blanca como color de texto base
        antialiased = suavizado de fuentes
      */}
      <body
        className="bg-[#0B0E21] text-[#f8fafc] font-sans antialiased overflow-x-hidden"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}