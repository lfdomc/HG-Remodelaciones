import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, Award, Clock, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/lib/projects-data"


export const metadata = {
  title: "HG Remodelaciones | Construcción y Proyectos",
  description:
    "HG Remodelaciones es una empresa líder en construcción y remodelación de proyectos residenciales y comerciales en Costa Rica.",
  alternates: {
    canonical: "https://hg-remodelaciones.vercel.app//",
  },
  openGraph: {
    url: "https://hg-remodelaciones.vercel.app//",
    title: "HG Remodelaciones | Construcción y Proyectos",
    description:
      "HG Remodelaciones es una empresa líder en construcción y remodelación de proyectos residenciales y comerciales en Costa Rica.",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "HG Remodelaciones Construcción y Proyectos",
      },
    ],
  },
};




export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Construimos el
                <span className="text-blue-300"> Futuro</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Más de 20 años de experiencia en construcción y desarrollo de proyectos residenciales y comerciales de
                alta calidad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/proyectos">
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                    Ver Proyectos
                  </Button>
                </Link>
                <Link href="/contacto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
                  >
                    Contactar
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/conste.webp"
                alt="Proyecto de construcción residencial realizado por HG Remodelaciones en Costa Rica"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl w-full h-auto"
                priority
                sizes="(max-width: 568px) 100vw, (max-width: 800px) 30vw, 400px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones integrales en construcción con los más altos estándares de calidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: "Construcción Residencial",
                description: "Casas y edificios residenciales con diseños modernos y funcionales",
              },
              {
                icon: Users,
                title: "Proyectos Comerciales",
                description: "Oficinas, centros comerciales y espacios corporativos",
              },
              {
                icon: Award,
                title: "Remodelaciones",
                description: "Renovación y modernización de espacios existentes",
              },
              {
                icon: Clock,
                title: "Mantenimiento",
                description: "Servicios de mantenimiento preventivo y correctivo",
              },
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nuestros Proyectos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conoce algunos de nuestros proyectos más destacados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "100+", label: "Proyectos Completados" },
              { number: "20+", label: "Años de Experiencia" },
              { number: "80+", label: "Clientes Satisfechos" },
              
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl lg:text-5xl font-bold text-blue-300 mb-2">{stat.number}</div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos listos para hacer realidad tu próximo proyecto
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: "Teléfono",
                info: "+506 8896 9195",
                link: "tel:+50688969195",
              },
              {
                icon: Mail,
                title: "Email",
                info: "info@hgremodelaciones.com",
                link: "mailto:info@hgremodelaciones.com",
              },
              {
                icon: MapPin,
                title: "Dirección",
                info: "Alajuela, Costa Rica",
                link: "#",
              },
            ].map((contact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <contact.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-gray-900">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Link href={contact.link} className="text-gray-600 hover:text-blue-600 transition-colors">
                    {contact.info}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
