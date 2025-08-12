import { NextRequest, NextResponse } from "next/server"
import { sendQuoteEmail } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      name, 
      email, 
      phone, 
      projectType, 
      area, 
      location, 
      budget, 
      timeline, 
      description, 
      services 
    } = body

    // Validación básica
    if (!name || !email || !phone || !projectType || !area || !location) {
      return NextResponse.json(
        { error: "Todos los campos obligatorios deben ser completados" },
        { status: 400 }
      )
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Por favor ingresa un email válido" },
        { status: 400 }
      )
    }

    // Validación de área (debe ser un número)
    if (isNaN(Number(area)) || Number(area) <= 0) {
      return NextResponse.json(
        { error: "Por favor ingresa un área válida en metros cuadrados" },
        { status: 400 }
      )
    }

    const quoteId = generateQuoteId()

    // Enviar email
    const emailResult = await sendQuoteEmail({
      name,
      email,
      phone,
      projectType,
      area,
      location,
      budget,
      timeline,
      description,
      services: services || []
    })

    if (!emailResult.success) {
      console.error("Error sending quote email:", emailResult.error)
      // Aún así, consideramos la cotización como enviada exitosamente
    }

    // Log para seguimiento
    console.log("Solicitud de cotización procesada:", {
      quoteId,
      name,
      email,
      phone,
      projectType,
      area: `${area} m²`,
      location,
      budget,
      timeline,
      description,
      services,
      timestamp: new Date().toISOString(),
      estimatedValue: calculateEstimatedValue(projectType, Number(area)),
      emailSent: emailResult.success
    })

    return NextResponse.json({
      success: true,
      message: "Solicitud de cotización enviada correctamente. Nos pondremos en contacto contigo en las próximas 24 horas.",
      quoteId
    })

  } catch (error) {
    console.error("Error procesando solicitud de cotización:", error)
    return NextResponse.json(
      { error: "Error interno del servidor. Por favor intenta nuevamente." },
      { status: 500 }
    )
  }
}

// Función auxiliar para calcular valor estimado
function calculateEstimatedValue(projectType: string, area: number): string {
  const pricePerM2: { [key: string]: number } = {
    "Construcción Residencial": 800,
    "Construcción Comercial": 1200,
    "Construcción Industrial": 600,
    "Remodelación": 400,
    "Mantenimiento": 200,
    "Consultoría": 100
  }

  const basePrice = pricePerM2[projectType] || 500
  const estimatedValue = area * basePrice
  
  return `$${estimatedValue.toLocaleString()} - $${(estimatedValue * 1.3).toLocaleString()}`
}

// Función auxiliar para generar ID de cotización
function generateQuoteId(): string {
  const timestamp = Date.now().toString(36)
  const random = Math.random().toString(36).substr(2, 5)
  return `HG-${timestamp}-${random}`.toUpperCase()
}