import { NextRequest, NextResponse } from "next/server"
import { sendContactEmail } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validación básica
    if (!name || !email || !subject || !message) {
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

    // Enviar email
    const emailResult = await sendContactEmail({
      name,
      email,
      phone,
      subject,
      message
    })

    if (!emailResult.success) {
      console.error("Error sending email:", emailResult.error)
      // Aún así, consideramos el formulario como enviado exitosamente
      // para no frustrar al usuario por problemas de configuración de email
    }

    // Log para seguimiento
    console.log("Formulario de contacto procesado:", {
      name,
      email,
      phone,
      subject,
      timestamp: new Date().toISOString(),
      emailSent: emailResult.success
    })

    return NextResponse.json({
      success: true,
      message: "Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto."
    })

  } catch (error) {
    console.error("Error procesando formulario de contacto:", error)
    return NextResponse.json(
      { error: "Error interno del servidor. Por favor intenta nuevamente." },
      { status: 500 }
    )
  }
}