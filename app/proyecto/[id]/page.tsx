import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, MapPin, Ruler, User, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/lib/projects-data"
import { notFound } from "next/navigation"
import ProjectGallery from "@/components/ProjectGallery"
import type { Metadata } from "next"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return {
      title: "Proyecto no encontrado - HG Remodelaciones",
      description: "El proyecto solicitado no fue encontrado."
    }
  }

  return {
    title: `${project.title} - Proyecto de ${project.category}`,
    description: `${project.description} Proyecto de ${project.category.toLowerCase()} ubicado en ${project.location}, Costa Rica. Área: ${project.area}, completado en ${project.year}.`,
    keywords: [
      project.category.toLowerCase(),
      `proyecto ${project.category.toLowerCase()} Costa Rica`,
      `construcción ${project.location}`,
      project.title,
      "HG Remodelaciones",
      "construcción Costa Rica",
      `${project.category} ${project.location}`
    ],
    openGraph: {
      title: `${project.title} - HG Remodelaciones`,
      description: `${project.description} Proyecto de ${project.category.toLowerCase()} en ${project.location}, Costa Rica.`,
      url: `https://hgremodelaciones.com/proyecto/${project.id}`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.title} - Proyecto de ${project.category} en ${project.location}`,
        },
      ],
      type: "article",
    },
    alternates: {
      canonical: `https://hgremodelaciones.com/proyecto/${project.id}`,
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/proyectos">
          <Button variant="outline" className="mb-6 bg-transparent">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Proyectos
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="bg-olive-100 text-olive-800 mb-4">
                {project.category}
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{project.title}</h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">{project.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-olive-600" />
                    <span className="text-gray-700 text-base md:text-lg font-medium">Ubicación:</span>
                  </div>
                  <span className="text-gray-700 text-base md:text-lg ml-8 break-words whitespace-pre-line">{project.location.replace(', ', '\n')}</span>
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-3">
                    <Ruler className="h-5 w-5 text-olive-600" />
                    <span className="text-gray-700 text-base md:text-lg font-medium">Área:</span>
                  </div>
                  <span className="text-gray-700 text-base md:text-lg ml-8">{project.area}</span>
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-olive-600" />
                    <span className="text-gray-700 text-base md:text-lg font-medium">Año:</span>
                  </div>
                  <span className="text-gray-700 text-base md:text-lg ml-8">{project.year}</span>
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-olive-600" />
                    <span className="text-gray-700 text-base md:text-lg font-medium">Cliente:</span>
                  </div>
                  <span className="text-gray-700 text-base md:text-lg ml-8">{project.client}</span>
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-olive-600" />
                    <span className="text-gray-700 text-base md:text-lg font-medium">Duración:</span>
                  </div>
                  <span className="text-gray-700 text-base md:text-lg ml-8">{project.duration}</span>
                </div>
              </div>
            </div>

            <div className="relative aspect-[3/2]">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="rounded-lg shadow-xl object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </div>
        </div>
      </section>

      <ProjectGallery gallery={project.gallery} projectTitle={project.title} />

      {/* Project Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Project Info */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Detalles del Proyecto</h2>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                    Características Principales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-olive-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Descripción Completa</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {project.description} Cada detalle fue cuidadosamente planificado y
                  ejecutado para superar las expectativas del cliente.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  El desarrollo de este proyecto involucró un equipo multidisciplinario para entregar un resultado
                  excepcional dentro del tiempo y presupuesto establecidos.
                </p>
              </div>
            </div>

            {/* Project Specs */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Especificaciones</CardTitle>
                  <CardDescription>Información técnica del proyecto</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col space-y-1 py-2 border-b border-gray-100">
                    <span className="text-gray-600 text-base font-bold">Categoría:</span>
                    <Badge variant="secondary" className="self-start">{project.category}</Badge>
                  </div>
                  <div className="flex flex-col space-y-1 py-2 border-b border-gray-100">
                    <span className="text-gray-600 text-base font-bold">Área:</span>
                    <span className="font-medium">{project.area}</span>
                  </div>
                  <div className="flex flex-col space-y-1 py-2 border-b border-gray-100">
                    <span className="text-gray-600 text-base font-bold">Ubicación:</span>
                    <span className="font-medium whitespace-pre-line">{project.location.replace(', ', '\n')}</span>
                  </div>
                  <div className="flex flex-col space-y-1 py-2 border-b border-gray-100">
                    <span className="text-gray-600 text-base font-bold">Año:</span>
                    <span className="font-medium">{project.year}</span>
                  </div>
                  <div className="flex flex-col space-y-1 py-2 border-b border-gray-100">
                    <span className="text-gray-600 text-base font-bold">Cliente:</span>
                    <span className="font-medium">{project.client}</span>
                  </div>
                  <div className="flex flex-col space-y-1 py-2">
                    <span className="text-gray-600 text-base font-bold">Duración:</span>
                    <span className="font-medium">{project.duration}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>¿Te interesa un proyecto similar?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">
                    Podemos ayudarte a desarrollar un proyecto similar adaptado a tus necesidades específicas.
                  </p>
                  <div className="space-y-3">
                    <Link href="/cotizacion" className="block">
                      <Button className="w-full bg-orangered-600 hover:bg-orangered-700">Solicitar Cotización</Button>
                    </Link>
                    <Link href="/contacto" className="block">
                      <Button variant="outline" className="w-full bg-transparent">
                        Contactar
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Proyectos Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.id !== project.id && p.category === project.category)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link key={relatedProject.id} href={`/proyecto/${relatedProject.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="relative h-48">
                      <Image
                        src={relatedProject.image || "/placeholder.svg"}
                        alt={relatedProject.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-gray-900 hover:text-olive-600 transition-colors">
                        {relatedProject.title}
                      </CardTitle>
                      <CardDescription>{relatedProject.location}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
