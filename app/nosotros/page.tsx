import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Users, Target, Heart, Building2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NosotrosPage() {
  const values = [
    {
      icon: Award,
      title: "Excelencia",
      description:
        "Nos comprometemos a entregar proyectos de la más alta calidad, superando las expectativas de nuestros clientes.",
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Creemos en la colaboración y el trabajo conjunto para lograr resultados excepcionales.",
    },
    {
      icon: Target,
      title: "Innovación",
      description: "Adoptamos las últimas tecnologías y metodologías para mantenernos a la vanguardia del sector.",
    },
    {
      icon: Heart,
      title: "Compromiso",
      description: "Estamos dedicados al éxito de cada proyecto y a la satisfacción total de nuestros clientes.",
    },
  ]
{/*
  const team = [
    {
      name: "Ing. Carlos Mendoza",
      position: "Director General",
      image: "/placeholder.svg?height=300&width=300&text=Carlos+Mendoza",
      description: "20+ años de experiencia en construcción y desarrollo de proyectos.",
    },
    {
      name: "Arq. María González",
      position: "Directora de Diseño",
      image: "/placeholder.svg?height=300&width=300&text=María+González",
      description: "Especialista en diseño arquitectónico y planificación urbana.",
    },
    {
      name: "Ing. Roberto Silva",
      position: "Gerente de Proyectos",
      image: "/placeholder.svg?height=300&width=300&text=Roberto+Silva",
      description: "Experto en gestión de proyectos complejos y coordinación técnica.",
    },
    {
      name: "Ing. Ana Rodríguez",
      position: "Directora de Calidad",
      image: "/placeholder.svg?height=300&width=300&text=Ana+Rodríguez",
      description: "Especialista en control de calidad y certificaciones internacionales.",
    },
  ]*/}

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Sobre Nosotros</h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Con más de 20 años de experiencia, somos una empresa líder en construcción comprometida con la
                excelencia, la innovación y la satisfacción de nuestros clientes.
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
                src="/images/co1.webp?height=500&width=600&text=Equipo+ConstructPro"
                alt="Equipo"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader className="text-center">
                <Target className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl text-gray-900">Nuestra Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  Construir espacios que transformen vidas y comunidades, ofreciendo soluciones integrales de
                  construcción con los más altos estándares de calidad, innovación y responsabilidad social.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader className="text-center">
                <Building2 className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl text-gray-900">Nuestra Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  Ser la empresa de construcción más reconocida y confiable de la región, líder en innovación,
                  sostenibilidad y excelencia en el desarrollo de proyectos que marquen la diferencia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían cada uno de nuestros proyectos y decisiones empresariales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team 
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nuestro Equipo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesionales altamente calificados comprometidos con la excelencia en cada proyecto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-gray-900">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{member.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Stats */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-blue-300 mb-2">500+</div>
              <div className="text-lg text-blue-100">Proyectos Completados</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-blue-300 mb-2">20+</div>
              <div className="text-lg text-blue-100">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-blue-300 mb-2">100+</div>
              <div className="text-lg text-blue-100">Clientes Satisfechos</div>
            </div>
           
          </div>
        </div>
      </section>
    </div>
  )
}
