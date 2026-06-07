import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metodo Satelite",
  description: "Plataforma de despliegue",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
