import { NextResponse } from 'next/server'

export async function GET() {
  const ogData = {
    title: "HG Remodelaciones - Construcción y Remodelaciones en Costa Rica",
    description: "Empresa líder en construcción y remodelaciones en Costa Rica con más de 20 años de experiencia.",
    image: `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://hg-remodelaciones.vercel.app'}/images/logo.webp`,
    imageAlt: "HG Remodelaciones - Empresa de Construcción Costa Rica",
    url: "https://hgremodelaciones.com",
    siteName: "HG Remodelaciones",
    locale: "es_CR",
    type: "website",
    imageWidth: 1200,
    imageHeight: 630,
    imageType: "image/webp"
  }

  return NextResponse.json({
    success: true,
    data: ogData,
    instructions: {
      whatsapp: "Para probar en WhatsApp, comparte la URL: https://hgremodelaciones.com",
      facebook: "Usa Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/",
      twitter: "Usa Twitter Card Validator: https://cards-dev.twitter.com/validator",
      tips: [
        "WhatsApp puede tardar unos minutos en actualizar la vista previa",
        "Si no funciona, intenta limpiar la caché de WhatsApp",
        "Asegúrate de que la imagen sea accesible públicamente"
      ]
    }
  })
}