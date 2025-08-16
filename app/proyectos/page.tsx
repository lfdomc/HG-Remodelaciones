"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/lib/projects-data"
import Link from "next/link"
import { useState, useMemo, useEffect } from "react"
import { Download } from "lucide-react"

export default function ProyectosPage() {
  // Get unique categories from projects data with consistent ordering
  const uniqueCategories = useMemo(() => {
    const cats = Array.from(new Set(projects.map(project => project.category))).sort()
    return ["Todos", ...cats]
  }, [])

  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Filter projects based on selected category and sort by ID descending
  const filteredProjects = useMemo(() => {
    let filtered
    if (selectedCategory === "Todos") {
      filtered = projects
    } else {
      filtered = projects.filter(project => project.category === selectedCategory)
    }
    // Sort by ID in descending order (highest ID first)
    return filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id))
  }, [selectedCategory])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-olive-900 to-olive-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Nuestros Proyectos</h1>
            <p className="text-xl text-olive-100 max-w-3xl mx-auto">
              Descubre nuestra amplia experiencia a través de los proyectos que hemos desarrollado con éxito
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section 
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-olive-600 mb-2">100+</div>
              <div className="text-gray-600">Proyectos Completados</div>
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

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {isClient && uniqueCategories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className={`px-4 py-2 cursor-pointer transition-colors ${
                  selectedCategory === category
                    ? "bg-olive-600 text-white hover:bg-olive-700"
                    : "hover:bg-olive-100 hover:text-olive-800"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* No projects message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No se encontraron proyectos en la categoría "{selectedCategory}"
              </p>
            </div>
          )}

          {/* Download CV Section */}
          <div className="text-center mt-16 pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Currículum Completo</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Descarga nuestro currículum completo para conocer más detalles sobre nuestra experiencia, 
              proyectos realizados y capacidades técnicas.
            </p>
            <a 
              href="/curriculum-hg-remodelaciones.pdf" 
              download="HG-Remodelaciones-Curriculum.pdf"
              className="inline-flex"
            >
              <Button size="lg" className="bg-olive-600 hover:bg-olive-700 text-white">
                <Download className="h-5 w-5 mr-2" />
                Descargar Currículum PDF
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-olive-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Tienes un proyecto en mente?</h2>
          <p className="text-xl text-olive-100 mb-8 max-w-2xl mx-auto">
            Permítenos ser parte de tu próximo proyecto y crear algo extraordinario juntos
          </p>
          <Link href="/cotizacion" className="">
          <Button size="lg" className="bg-white text-olive-900 hover:bg-gray-100">
            Iniciar Proyecto
          </Button>
          </Link>
          
        </div>
      </section>
    </div>
  )
}
