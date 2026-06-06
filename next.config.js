import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Permitir imágenes locales del directorio public/assets
    unoptimized: false,
    formats: ["image/webp", "image/avif"],
  },
  // Preparado para variables de entorno públicas
  env: {
    NEXT_PUBLIC_CURSAPP_CHECKOUT:
      process.env.NEXT_PUBLIC_CURSAPP_CHECKOUT ||
      "https://cursapp.com/cursos/metodo-satelite",
  },
};

export default nextConfig;
