'use client'

import { siteConfig } from '@/lib/config'
import { useState } from 'react'

export default function TestOGImagePage() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Prueba de Imagen Open Graph
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Información de la Imagen</h2>
          <div className="space-y-2">
            <p><strong>URL de la imagen:</strong> {siteConfig.ogImage}</p>
            <p><strong>Dimensiones:</strong> 1200x630 px</p>
            <p><strong>Tipo:</strong> image/png</p>
            <p><strong>URL del sitio:</strong> {siteConfig.url}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Vista Previa de la Imagen</h2>
          <div className="border rounded-lg p-4">
            {!imageLoaded && !imageError && (
              <div className="flex items-center justify-center h-64 bg-gray-100 rounded">
                <p className="text-gray-500">Cargando imagen...</p>
              </div>
            )}
            
            {imageError && (
              <div className="flex items-center justify-center h-64 bg-red-100 rounded">
                <p className="text-red-500">Error al cargar la imagen</p>
              </div>
            )}

            <img
              src={siteConfig.ogImage}
              alt="Open Graph Image"
              className={`max-w-full h-auto rounded ${!imageLoaded ? 'hidden' : ''}`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Herramientas de Validación</h2>
          <div className="space-y-3">
            <a
              href={`https://developers.facebook.com/tools/debug/?q=${encodeURIComponent(siteConfig.url)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-olive-600 text-white px-4 py-2 rounded hover:bg-olive-700 transition-colors"
            >
              🔍 Validar en Facebook Debugger
            </a>
            
            <a
              href={`https://cards-dev.twitter.com/validator`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600 transition-colors"
            >
              🐦 Validar en Twitter Card Validator
            </a>
            
            <a
              href={`https://www.linkedin.com/post-inspector/inspect/${encodeURIComponent(siteConfig.url)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-olive-700 text-white px-4 py-2 rounded hover:bg-olive-800 transition-colors"
            >
              💼 Validar en LinkedIn Post Inspector
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Instrucciones para WhatsApp</h2>
          <div className="space-y-3">
            <p className="text-gray-700">
              1. Copia la URL del sitio: <code className="bg-gray-100 px-2 py-1 rounded">{siteConfig.url}</code>
            </p>
            <p className="text-gray-700">
              2. Pégala en WhatsApp y envía el mensaje
            </p>
            <p className="text-gray-700">
              3. WhatsApp debería mostrar la imagen, título y descripción automáticamente
            </p>
            <p className="text-sm text-gray-500">
              <strong>Nota:</strong> WhatsApp puede tardar unos minutos en actualizar la vista previa si había una versión anterior en caché.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}