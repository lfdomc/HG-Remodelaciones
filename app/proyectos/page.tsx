import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/lib/projects-data"
import Link from "next/link"

export default function ProyectosPage() {
  const categories = ["Todos", "Residencial", "Comercial", "Corporativo", "Salud", "Educativo"]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Nuestros Proyectos</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Descubre nuestra amplia experiencia a través de los proyectos que hemos desarrollado con éxito
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Proyectos Completados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1M+</div>
              <div className="text-gray-600">m² Construidos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proyectos Destacados</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cada proyecto representa nuestro compromiso con la excelencia y la innovación en construcción
            </p>
          </div>

          {/* Category Filter 
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="secondary"
                className="px-4 py-2 cursor-pointer hover:bg-blue-100 hover:text-blue-800 transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>*/}

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Tienes un proyecto en mente?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Permítenos ser parte de tu próximo proyecto y crear algo extraordinario juntos
          </p>
          <Link href="/cotizacion" className="">
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
            Iniciar Proyecto
          </Button>
          </Link>
          
        </div>
      </section>
    </div>
  )
}
