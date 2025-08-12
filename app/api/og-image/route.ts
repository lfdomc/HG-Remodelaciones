import { NextRequest, NextResponse } from 'next/server'
import { getBaseUrl } from '@/lib/config'

export async function GET(request: NextRequest) {
  try {
    // Para WhatsApp, usar directamente JPEG para mejor compatibilidad
    const jpegUrl = `${getBaseUrl()}/images/logo.jpeg`
    return NextResponse.redirect(jpegUrl)
    
  } catch (error) {
    console.error('Error generating OG image:', error)
    
    // Fallback a la imagen JPEG del logo
    const fallbackUrl = `${getBaseUrl()}/images/logo.jpeg`
    return NextResponse.redirect(fallbackUrl)
  }
}

export const runtime = 'edge'