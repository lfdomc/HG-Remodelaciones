'use client'

import { useState, useEffect } from 'react'
import { siteConfig } from '@/lib/config'

export default function TestMetaPage() {
  const [currentUrl, setCurrentUrl] = useState('')
  
  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [])

  const testUrls = [
    'https://developers.facebook.com/tools/debug/',
    'https://cards-dev.twitter.com/validator',
    'https://www.linkedin.com/post-inspector/',
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Prueba de Metadatos Open Graph</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Información de la página</h2>
        <div className="space-y-2">
          <p><strong>URL actual:</strong> {currentUrl}</p>
          <p><strong>Título:</strong> {siteConfig.title}</p>
          <p><strong>Descripción:</strong> {siteConfig.description}</p>
          <p><strong>Imagen OG:</strong> {siteConfig.ogImage}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Vista previa de la imagen</h2>
        <div className="border rounded-lg p-4">
          <img 
            src={siteConfig.ogImage} 
            alt="Open Graph Image" 
            className="w-full max-w-md mx-auto"
            style={{ aspectRatio: '1200/630' }}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Herramientas de validación</h2>
        <p className="mb-4">Usa estas herramientas para validar los metadatos:</p>
        <div className="space-y-2">
          {testUrls.map((url, index) => (
            <div key={index}>
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                {url}
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <p className="text-sm text-gray-600">
            <strong>Para WhatsApp:</strong> Comparte este enlace en WhatsApp para probar: {currentUrl}
          </p>
        </div>
      </div>
    </div>
  )
}