import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export interface QuoteFormData {
  name: string
  email: string
  phone: string
  projectType: string
  area: string
  location: string
  budget?: string
  timeline?: string
  description: string
  services: string[]
}

export async function sendContactEmail(data: ContactFormData) {
  if (!process.env.RESEND_API_KEY) {
    console.log('Email service not configured. Contact form data:', data)
    return { success: true, message: 'Formulario procesado correctamente (modo desarrollo)' }
  }

  try {
    const { data: emailData, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@hgremodelaciones.com',
      to: [process.env.TO_EMAIL || 'info@hgremodelaciones.com'],
      subject: `Nuevo mensaje de contacto: ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">Nuevo Mensaje de Contacto</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Información del Cliente</h3>
            <p><strong>Nombre:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            ${data.phone ? `<p><strong>Teléfono:</strong> ${data.phone}</p>` : ''}
            <p><strong>Asunto:</strong> ${data.subject}</p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Mensaje</h3>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>Este mensaje fue enviado desde el formulario de contacto de HG Remodelaciones.</p>
            <p>Fecha: ${new Date().toLocaleString('es-CR', { timeZone: 'America/Costa_Rica' })}</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Error sending contact email:', error)
      return { success: false, error: 'Error al enviar el email' }
    }

    return { success: true, data: emailData }
  } catch (error) {
    console.error('Error in sendContactEmail:', error)
    return { success: false, error: 'Error interno del servicio de email' }
  }
}

export async function sendQuoteEmail(data: QuoteFormData) {
  if (!process.env.RESEND_API_KEY) {
    console.log('Email service not configured. Quote form data:', data)
    return { success: true, message: 'Cotización procesada correctamente (modo desarrollo)' }
  }

  try {
    const { data: emailData, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@hgremodelaciones.com',
      to: [process.env.TO_EMAIL || 'info@hgremodelaciones.com'],
      subject: `Nueva Solicitud de Cotización - ${data.projectType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">Nueva Solicitud de Cotización</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Información del Cliente</h3>
            <p><strong>Nombre:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Teléfono:</strong> ${data.phone}</p>
            <p><strong>Ubicación:</strong> ${data.location}</p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Detalles del Proyecto</h3>
            <p><strong>Tipo de Proyecto:</strong> ${data.projectType}</p>
            <p><strong>Área:</strong> ${data.area} m²</p>
            ${data.budget ? `<p><strong>Presupuesto:</strong> ${data.budget}</p>` : ''}
            ${data.timeline ? `<p><strong>Cronograma:</strong> ${data.timeline}</p>` : ''}
          </div>
          
          ${data.services.length > 0 ? `
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Servicios Solicitados</h3>
            <ul>
              ${data.services.map(service => `<li>${service}</li>`).join('')}
            </ul>
          </div>
          ` : ''}
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Descripción del Proyecto</h3>
            <p style="white-space: pre-wrap;">${data.description}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>Esta solicitud fue enviada desde el formulario de cotización de HG Remodelaciones.</p>
            <p>Fecha: ${new Date().toLocaleString('es-CR', { timeZone: 'America/Costa_Rica' })}</p>
            <p><strong>Prioridad:</strong> Responder en 24 horas</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Error sending quote email:', error)
      return { success: false, error: 'Error al enviar el email' }
    }

    return { success: true, data: emailData }
  } catch (error) {
    console.error('Error in sendQuoteEmail:', error)
    return { success: false, error: 'Error interno del servicio de email' }
  }
}