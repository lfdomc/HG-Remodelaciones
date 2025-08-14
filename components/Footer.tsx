import {  Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-1">
      <div className="max-w-7xl mx-auto" style={{padding: '3rem 1.5rem 3rem 1.5rem', paddingTop: '1.5rem'}}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                            src="/images/logo2.webp"
                            alt="HG Remodelaciones Logo"
                            width={80}
                            height={80}
                            className="h-16 w-auto"
                            sizes="80px"
                          />
              <span className="text-2xl font-bold"></span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empresa líder en construcción y remodelaciones con más de 20 años de experiencia creando espacios de calidad y
              funcionalidad.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-olive-400 mb-3">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {[
                { name: "Inicio", href: "/" },
                { name: "Servicios", href: "/servicios" },
                { name: "Proyectos", href: "/proyectos" },
                { name: "Nosotros", href: "/nosotros" },
                { name: "Contacto", href: "/contacto" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-olive-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-olive-400 mb-3">Servicios</h3>
            <ul className="space-y-2">
              {[
                "Construcción Residencial",
                "Proyectos Comerciales",
                "Remodelaciones",
                "Mantenimiento",
                "Consultoría",
              ].map((service) => (
                <li key={service}>
                  <Link href="/servicios" className="text-gray-300 hover:text-olive-400 transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-olive-400 mb-3">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-olive-400" />
                <span className="text-gray-300">+506 7071-6550</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-olive-400" />
                <span className="text-gray-300">info@hgremodelaciones.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-olive-400" />
                <span className="text-gray-300">Alajuela, Costa Rica</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/*
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-olive-400 transition-colors" aria-label="Síguenos en Facebook">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-olive-400 transition-colors" aria-label="Síguenos en Instagram">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-olive-400 transition-colors" aria-label="Síguenos en Twitter">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-olive-400 transition-colors" aria-label="Conéctate en LinkedIn">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
            */}
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Temsa Tecnología. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
