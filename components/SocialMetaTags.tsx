'use client'

import { siteConfig } from '@/lib/config'

export default function SocialMetaTags() {
  return (
    <>
      {/* Metadatos adicionales para WhatsApp y redes sociales */}
      <meta property="og:image" content={siteConfig.ogImage} />
      <meta property="og:image:secure_url" content={siteConfig.ogImage} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="HG Remodelaciones - Empresa de Construcción Costa Rica" />
      
      {/* Metadatos específicos para WhatsApp */}
      <meta name="whatsapp:image" content={siteConfig.ogImage} />
      <meta name="whatsapp:title" content="HG Remodelaciones - Construcción y Remodelaciones en Costa Rica" />
      <meta name="whatsapp:description" content="Empresa líder en construcción y remodelaciones en Costa Rica con más de 20 años de experiencia." />
      
      {/* Metadatos para Telegram */}
      <meta name="telegram:image" content={siteConfig.ogImage} />
      <meta name="telegram:title" content="HG Remodelaciones - Construcción y Remodelaciones en Costa Rica" />
      <meta name="telegram:description" content="Empresa líder en construcción y remodelaciones en Costa Rica con más de 20 años de experiencia." />
      
      {/* Link rel para precargar la imagen */}
      <link rel="preload" href={siteConfig.ogImage} as="image" type="image/jpeg" />
      
      {/* Metadatos adicionales para mejorar compatibilidad con WhatsApp */}
      <meta property="og:site_name" content="HG Remodelaciones" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_CR" />
      <meta property="og:title" content="HG Remodelaciones - Construcción y Remodelaciones en Costa Rica" />
      <meta property="og:description" content="Empresa líder en construcción y remodelaciones en Costa Rica con más de 20 años de experiencia." />
      <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
      
      {/* Metadatos específicos para el cache de WhatsApp */}
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="cache-control" content="public, max-age=31536000" />
      <meta httpEquiv="expires" content="31536000" />
    </>
  )
}