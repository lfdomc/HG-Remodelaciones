import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Proyectos de Construcción Realizados",
  description: "Galería de proyectos de construcción y remodelación realizados por HG Remodelaciones en Costa Rica. Más de 500 proyectos completados en 20 años.",
  keywords: [
    "proyectos construcción Costa Rica",
    "obras realizadas HG Remodelaciones",
    "proyectos residenciales Costa Rica",
    "construcciones comerciales",
    "galería proyectos construcción",
    "obras terminadas Alajuela",
    "portfolio construcción"
  ],
  openGraph: {
    title: "Proyectos Realizados - HG Remodelaciones",
    description: "Descubre nuestros proyectos de construcción y remodelación en Costa Rica. Más de 500 proyectos completados.",
    url: "https://hgremodelaciones.com/proyectos",
    images: [
      {
        url: "/images/ampliacion_rancho/1-6.webp",
        width: 1200,
        height: 630,
        alt: "Proyectos de Construcción HG Remodelaciones",
      },
    ],
  },
}

export default function ProyectosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}