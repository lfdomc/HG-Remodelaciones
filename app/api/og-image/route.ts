import { NextRequest, NextResponse } from 'next/server'
import { getBaseUrl } from '@/lib/config'

export async function GET(request: NextRequest) {
  try {
    // Obtener el SVG desde el archivo
    const svgPath = `${getBaseUrl()}/images/og-image.svg`
    
    // Para desarrollo, simplemente redirigir al SVG
    if (process.env.NODE_ENV === 'development') {
      return NextResponse.redirect(svgPath)
    }
    
    // En producción, también redirigir al SVG por ahora
    // En el futuro se puede implementar conversión a PNG si es necesario
    return NextResponse.redirect(svgPath)
    
  } catch (error) {
    console.error('Error generating OG image:', error)
    
    // Fallback a la imagen JPEG del logo
    const fallbackUrl = `${getBaseUrl()}/images/logo.jpeg`
    return NextResponse.redirect(fallbackUrl)
  }
}

export const runtime = 'edge'