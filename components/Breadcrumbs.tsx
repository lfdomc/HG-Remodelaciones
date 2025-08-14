"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
}

export default function Breadcrumbs() {
  const pathname = usePathname()
  
  // No mostrar breadcrumbs en la página principal
  if (pathname === "/") return null

  const pathSegments = pathname.split("/").filter(Boolean)
  
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Inicio", href: "/" },
  ]

  // Mapear segmentos de URL a nombres legibles
  const segmentNames: Record<string, string> = {
    servicios: "Servicios",
    proyectos: "Proyectos", 
    proyecto: "Proyecto",
    nosotros: "Nosotros",
    contacto: "Contacto",
    cotizacion: "Cotización"
  }

  let currentPath = ""
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`
    const isLast = index === pathSegments.length - 1
    
    breadcrumbs.push({
      label: segmentNames[segment] || segment,
      href: isLast ? "" : currentPath // No link en el último elemento
    })
  })

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href ? `https://hgremodelaciones.com${item.href}` : undefined
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <nav aria-label="Breadcrumb" className="bg-gray-50 py-3">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((item, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
                )}
                {index === 0 && (
                  <Home className="h-4 w-4 text-gray-500 mr-1" />
                )}
                {item.href ? (
                  <Link 
                    href={item.href}
                    className="text-olive-600 hover:text-olive-800 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-700 font-medium">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}