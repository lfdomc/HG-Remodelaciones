import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, Wrench, Home, Building, Hammer } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servicios de Construcción y Remodelación",
  description: "Servicios integrales de construcción en Costa Rica: residencial, comercial, industrial, remodelaciones, mantenimiento y consultoría. Más de 20 años de experiencia.",
  keywords: [
    "servicios construcción Costa Rica",
    "construcción residencial Alajuela",
    "proyectos comerciales Costa Rica", 
    "construcción industrial",
    "remodelaciones Costa Rica",
    "mantenimiento edificios",
    "consultoría construcción",
    "empresa constructora"
  ],
  openGraph: {
    title: "Servicios de Construcción - HG Remodelaciones",
    description: "Servicios integrales de construcción en Costa Rica: residencial, comercial, industrial y más.",
    url: "https://hgremodelaciones.com/servicios",
    images: [
      {
        url: "/images/conste.webp",
        width: 1200,
        height: 630,
        alt: "Servicios de Construcción HG Remodelaciones",
      },
    ],
  },
}

export default function ServiciosPage() {
  const services = [
    {
      icon: Home,
      title: "Construcción Residencial",
      description:
        "Construcción de casas, condominios y desarrollos habitacionales con los más altos estándares de calidad.",
      features: ["Diseño arquitectónico", "Construcción completa", "Acabados de lujo", "Jardines y paisajismo"],
      image: "/images/residencial.webp?height=300&width=400&text=Construcción+Residencial",
    },
    {
      icon: Building,
      title: "Proyectos Comerciales",
      description: "Desarrollo de centros comerciales, oficinas y espacios corporativos modernos y funcionales.",
      features: ["Centros comerciales", "Edificios de oficinas", "Locales comerciales", "Espacios corporativos"],
      image: "/images/comercial.webp?height=300&width=400&text=Proyectos+Comerciales",
    },
    {
      icon: Building2,
      title: "Construcción Industrial",
      description: "Naves industriales, bodegas y plantas de producción con tecnología de vanguardia.",
      features: ["Naves industriales", "Bodegas logísticas", "Plantas de producción", "Instalaciones especializadas"],
      image: "/images/industrial.webp?height=300&width=400&text=Construcción+Industrial",
    },
    {
      icon: Hammer,
      title: "Remodelaciones",
      description: "Renovación y modernización de espacios existentes para maximizar su potencial.",
      features: ["Remodelación integral", "Ampliaciones", "Modernización", "Restauración"],
      image: "/images/remodelaciones.webp?height=300&width=400&text=Remodelaciones",
    },
    {
      icon: Wrench,
      title: "Mantenimiento",
      description: "Servicios de mantenimiento preventivo y correctivo para preservar sus inversiones.",
      features: ["Mantenimiento preventivo", "Reparaciones", "Inspecciones técnicas", "Servicios de emergencia"],
      image: "/images/mant1.webp?height=300&width=400&text=Mantenimiento",
    },
    {
      icon: Users,
      title: "Consultoría",
      description: "Asesoría especializada en proyectos de construcción desde la planificación hasta la ejecución.",
      features: ["Estudios de factibilidad", "Gestión de proyectos", "Supervisión técnica", "Asesoría legal"],
      image: "/images/consultoria.webp?height=300&width=400&text=Consultoría",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-olive-900 to-olive-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Nuestros Servicios</h1>
            <p className="text-xl text-olive-100 max-w-3xl mx-auto">
              Ofrecemos soluciones integrales en construcción con más de 20 años de experiencia y los más altos
              estándares de calidad
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <service.icon className="h-12 w-12 text-olive-600 mb-4" />
                      <CardTitle className="text-gray-900">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-olive-600 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Listo para comenzar tu proyecto?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo para una consulta gratuita y descubre cómo podemos hacer realidad tu visión
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cotizacion">
              <Button size="lg" className="bg-orangered-600 hover:bg-orangered-700">
                Solicitar Cotización
              </Button>
            </Link>
            <Link href="/contacto">
              <Button size="lg" variant="outline">
                Contactar
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
