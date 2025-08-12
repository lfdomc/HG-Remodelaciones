'use client'

import { siteConfig } from '@/lib/config'

export default function SocialMetaTags() {
  return (
    <>
      {/* Metadatos adicionales para WhatsApp y redes sociales */}
      <meta property="og:image" content={siteConfig.logo} />
      <meta property="og:image:secure_url" content={siteConfig.logo} />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="HG Remodelaciones - Empresa de Construcción Costa Rica" />
      
      {/* Imagen alternativa en JPEG para mayor compatibilidad */}
      <meta property="og:image" content={siteConfig.logoJpeg} />
      <meta property="og:image:secure_url" content={siteConfig.logoJpeg} />
      <meta property="og:image:type" content="image/jpeg" />
      
      {/* Metadatos específicos para WhatsApp */}
      <meta name="whatsapp:image" content={siteConfig.logo} />
      
      {/* Metadatos para Telegram */}
      <meta name="telegram:image" content={siteConfig.logo} />
      
      {/* Link rel para precargar la imagen */}
      <link rel="preload" href={siteConfig.logo} as="image" type="image/webp" />
    </>
  )
}