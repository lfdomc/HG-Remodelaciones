import {  Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                            src="/images/logo2.webp"
                            alt="Logo"
                            width={120}
                            height={120}
                            className=""
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
            <h3 className="text-lg font-semibold text-blue-400">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {["Inicio", "Servicios", "Proyectos", "Nosotros", "Contacto"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Servicios</h3>
            <ul className="space-y-2">
              {[
                "Construcción Residencial",
                "Proyectos Comerciales",
                "Remodelaciones",
                "Mantenimiento",
                "Consultoría",
              ].map((service) => (
                <li key={service}>
                  <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+506 8896 9195</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@hgremodelaciones.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Alajuela, Costa Rica</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Temsa Tecnología. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
