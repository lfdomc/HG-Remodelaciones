"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Calculator, Clock, Shield, Award, Loader2, FileText, CheckCircle } from "lucide-react"
import { useAnalytics } from "@/hooks/use-analytics"
import { useToast } from "@/components/ui/use-toast"

export default function CotizacionPage() {
  const { trackFormSubmission } = useAnalytics()
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    area: "",
    location: "",
    budget: "",
    timeline: "",
    description: "",
    services: [] as string[],
  })

  const projectTypes = [
    "Construcción Residencial",
    "Construcción Comercial",
    "Construcción Industrial",
    "Remodelación",
    "Mantenimiento",
    "Consultoría",
  ]

  const services = [
    "Diseño Arquitectónico",
    "Construcción Completa",
    "Supervisión de Obra",
    "Gestión de Permisos",
    "Acabados Especializados",
    "Paisajismo",
    "Instalaciones Especiales",
  ]

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        const message = data.quoteId 
          ? `${data.message} Tu número de referencia es: ${data.quoteId}`
          : data.message
        
        toast({
          title: "¡Cotización enviada!",
          description: message,
        })
        trackFormSubmission('quote', true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          area: "",
          location: "",
          budget: "",
          timeline: "",
          description: "",
          services: [],
        })
      } else {
        toast({
          title: "Error al enviar",
          description: data.error || "Error al enviar la solicitud. Por favor intenta nuevamente.",
          variant: "destructive",
        })
        trackFormSubmission('quote', false)
      }
    } catch (error) {
      toast({
        title: "Error de conexión",
        description: "No se pudo enviar la solicitud. Por favor intenta nuevamente.",
        variant: "destructive",
      })
      trackFormSubmission('quote', false)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        services: [...formData.services, service],
      })
    } else {
      setFormData({
        ...formData,
        services: formData.services.filter((s) => s !== service),
      })
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Calculator className="h-16 w-16 text-blue-300 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Solicitar Cotización</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Obtén una cotización personalizada para tu proyecto. Nuestro equipo de expertos te proporcionará una
              estimación detallada y profesional.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">1. Completa el Formulario</h3>
              <p className="text-gray-600 text-sm">Proporciona los detalles de tu proyecto</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">2. Análisis Técnico</h3>
              <p className="text-gray-600 text-sm">Nuestro equipo evalúa tu proyecto</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">3. Cotización Detallada</h3>
              <p className="text-gray-600 text-sm">Recibe una propuesta completa</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">4. Reunión de Seguimiento</h3>
              <p className="text-gray-600 text-sm">Discutimos los detalles contigo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">Información del Proyecto</CardTitle>
                <CardDescription>
                  Completa todos los campos para recibir una cotización precisa y detallada
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Información Personal</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo *</label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Tu nombre completo"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="tu@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono *</label>
                        <Input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Ubicación del Proyecto *</label>
                        <Input
                          required
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="Ciudad, Estado"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Detalles del Proyecto</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Proyecto *</label>
                        <Select onValueChange={(value) => setFormData({ ...formData, projectType: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona el tipo de proyecto" />
                          </SelectTrigger>
                          <SelectContent>
                            {projectTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Área Aproximada (m²) *</label>
                        <Input
                          required
                          value={formData.area}
                          onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                          placeholder="ej. 150"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Presupuesto Estimado</label>
                        <Select onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona tu rango de presupuesto" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                            <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                            <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                            <SelectItem value="1m+">Más de $1,000,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Tiempo Estimado</label>
                        <Select onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="¿Cuándo quieres iniciar?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="inmediato">Inmediatamente</SelectItem>
                            <SelectItem value="1-3-meses">En 1-3 meses</SelectItem>
                            <SelectItem value="3-6-meses">En 3-6 meses</SelectItem>
                            <SelectItem value="6-12-meses">En 6-12 meses</SelectItem>
                            <SelectItem value="mas-12-meses">Más de 12 meses</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Servicios Requeridos</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <Checkbox
                            id={service}
                            onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                          />
                          <label htmlFor={service} className="text-sm text-gray-700">
                            {service}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Descripción del Proyecto *</label>
                    <Textarea
                      required
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe tu proyecto en detalle: objetivos, características especiales, requisitos específicos, etc."
                      rows={6}
                    />
                  </div>



                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Procesando...
                      </>
                    ) : (
                      <>
                        <Calculator className="h-5 w-5 mr-2" />
                        Solicitar Cotización Gratuita
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué elegir nuestra cotización?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Gratuita y Sin Compromiso</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Recibe una cotización detallada completamente gratis, sin ningún compromiso de tu parte.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Respuesta en 24 Horas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Nuestro equipo te contactará en menos de 24 horas con una propuesta inicial.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <FileText className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Cotización Detallada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Recibe un desglose completo de costos, materiales y cronograma de trabajo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
