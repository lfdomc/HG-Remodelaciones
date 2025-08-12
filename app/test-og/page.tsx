import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Test Open Graph - HG Remodelaciones",
  description: "Página de prueba para verificar metadatos de Open Graph",
  openGraph: {
    title: "HG Remodelaciones - Construcción y Remodelaciones en Costa Rica",
    description: "Empresa líder en construcción y remodelaciones en Costa Rica con más de 20 años de experiencia.",
    url: "https://hgremodelaciones.com",
    siteName: "HG Remodelaciones",
    images: [
      {
        url: `${typeof window !== 'undefined' ? window.location.origin : 'https://hg-remodelaciones.vercel.app'}/images/logo.webp`,
        width: 1200,
        height: 630,
        alt: "HG Remodelaciones - Empresa de Construcción Costa Rica",
        type: "image/webp",
      },
    ],
    locale: "es_CR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HG Remodelaciones - Construcción en Costa Rica",
    description: "Empresa líder en construcción y remodelaciones en Costa Rica con más de 20 años de experiencia.",
    images: [`${typeof window !== 'undefined' ? window.location.origin : 'https://hg-remodelaciones.vercel.app'}/images/logo.webp`],
  },
}

export default function TestOGPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Prueba de Metadatos Open Graph
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Información de la página:</h2>
          <ul className="space-y-2">
            <li><strong>URL:</strong> https://hgremodelaciones.com</li>
            <li><strong>Título:</strong> HG Remodelaciones - Construcción y Remodelaciones en Costa Rica</li>
            <li><strong>Descripción:</strong> Empresa líder en construcción y remodelaciones en Costa Rica con más de 20 años de experiencia.</li>
            <li><strong>Imagen:</strong> {typeof window !== 'undefined' ? window.location.origin : 'https://hg-remodelaciones.vercel.app'}/images/logo.webp</li>
          </ul>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cómo probar en WhatsApp:</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Copia esta URL: <code className="bg-gray-200 px-2 py-1 rounded">https://hgremodelaciones.com</code></li>
            <li>Pégala en un chat de WhatsApp</li>
            <li>WhatsApp debería mostrar una vista previa con el logo de HG Remodelaciones</li>
            <li>Si no aparece inmediatamente, espera unos segundos para que WhatsApp procese la URL</li>
          </ol>
        </div>

        <div className="bg-yellow-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Herramientas de prueba:</h2>
          <ul className="space-y-2">
            <li>
              <a 
                href="https://developers.facebook.com/tools/debug/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Facebook Sharing Debugger
              </a>
            </li>
            <li>
              <a 
                href="https://cards-dev.twitter.com/validator" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Twitter Card Validator
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/post-inspector/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn Post Inspector
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}