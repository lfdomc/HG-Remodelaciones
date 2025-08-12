"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Loader2, MessageCircle } from "lucide-react"
import { useAnalytics } from "@/hooks/use-analytics"
import { useToast } from "@/components/ui/use-toast"

export default function ContactoPage() {
  const { trackFormSubmission, trackPageView } = useAnalytics()
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Crear mensaje para WhatsApp
      const whatsappMessage = `*Nuevo mensaje de contacto desde la web*

*Nombre:* ${formData.name}
*Email:* ${formData.email}
*Teléfono:* ${formData.phone || 'No proporcionado'}
*Asunto:* ${formData.subject}

*Mensaje:*
${formData.message}

---
Enviado desde: hgremodelaciones.com`

      const phoneNumber = "+50688969195"
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`

      // Abrir WhatsApp en una nueva ventana
      window.open(whatsappUrl, '_blank')

      toast({
        title: "¡Redirigiendo a WhatsApp!",
        description: "Se abrirá WhatsApp con tu mensaje prellenado. Solo tienes que enviarlo.",
      })
      
      trackFormSubmission('contact', true)
      
      // Limpiar formulario después de un breve delay
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      }, 1000)

    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo abrir WhatsApp. Por favor intenta nuevamente.",
        variant: "destructive",
      })
      trackFormSubmission('contact', false)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contáctanos</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Estamos aquí para ayudarte a hacer realidad tu proyecto. Ponte en contacto con nosotros y descubre cómo
              podemos trabajar juntos.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Envíanos un Mensaje por WhatsApp</h2>
              <p className="text-gray-600 mb-6">
                Completa el formulario y te redirigiremos a WhatsApp con tu mensaje prellenado. 
                Solo tendrás que enviarlo para contactarnos directamente.
              </p>
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nombre Completo *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Tu nombre completo"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Teléfono
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+506 123-4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Asunto *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Asunto de tu consulta"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensaje *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Cuéntanos sobre tu proyecto..."
                        rows={6}
                      />
                    </div>



                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Abriendo WhatsApp...
                        </>
                      ) : (
                        <>
                          <MessageCircle className="h-5 w-5 mr-2" />
                          Enviar por WhatsApp
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Información de Contacto</h2>

              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Phone className="h-8 w-8 text-blue-600" />
                      <div>
                        <CardTitle className="text-gray-900">Teléfono</CardTitle>
                        <CardDescription>Llámanos directamente</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 font-medium">+506 7071 6550</p>
                    <p className="text-gray-600 text-sm">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Mail className="h-8 w-8 text-blue-600" />
                      <div>
                        <CardTitle className="text-gray-900">Email</CardTitle>
                        <CardDescription>Envíanos un correo</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 font-medium">info@hgremodelaciones.com</p>
                    <p className="text-gray-600 text-sm"></p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <MapPin className="h-8 w-8 text-blue-600" />
                      <div>
                        <CardTitle className="text-gray-900">Oficina Principal</CardTitle>
                        <CardDescription>Visítanos</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 font-medium">Provincia Alajuela</p>
                    <p className="text-gray-700 font-medium"></p>
                    <p className="text-gray-600 text-sm">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Clock className="h-8 w-8 text-blue-600" />
                      <div>
                        <CardTitle className="text-gray-900">Horarios</CardTitle>
                        <CardDescription>Estamos disponibles</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1 text-sm">
                      <p className="text-gray-700">
                        <span className="font-medium">Lunes - Viernes:</span> 8:00 AM - 6:00 PM
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">Sábados:</span> 9:00 AM - 2:00 PM
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">Domingos:</span> Cerrado
                      </p>
                      
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section 
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Ubicación</h2>
            <p className="text-gray-600">Encuéntranos fácilmente en el corazón de la ciudad</p>
          </div>

          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Mapa interactivo - Integrar con Google Maps</p>
          </div>
        </div>
      </section>
      */}
    </div>
  )
}
