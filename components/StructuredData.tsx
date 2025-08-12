import { getBaseUrl } from '@/lib/config'

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ConstructionCompany",
    "name": "HG Remodelaciones",
    "description": "Empresa líder en construcción y remodelaciones en Costa Rica con más de 20 años de experiencia",
    "url": getBaseUrl(),
    "logo": `${getBaseUrl()}/images/logo.webp`,
    "image": `${getBaseUrl()}/images/logo.webp`,
    "telephone": "+506 8896 9195",
    "email": "info@hgremodelaciones.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Alajuela",
      "addressCountry": "Costa Rica",
      "addressRegion": "Alajuela"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "10.0162",
      "longitude": "-84.2103"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Costa Rica"
    },
    "serviceType": [
      "Construcción Residencial",
      "Construcción Comercial", 
      "Construcción Industrial",
      "Remodelaciones",
      "Mantenimiento",
      "Consultoría en Construcción"
    ],
    "foundingDate": "2004",
    "numberOfEmployees": "50-100",
    "sameAs": [
      "https://www.facebook.com/hgremodelaciones",
      "https://www.instagram.com/hgremodelaciones"
    ]
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "HG Remodelaciones",
    "description": "Empresa de construcción y remodelaciones en Costa Rica",
    "url": getBaseUrl(),
    "telephone": "+506 8896 9195",
    "email": "info@hgremodelaciones.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Alajuela",
      "addressCountry": "Costa Rica"
    },
    "openingHours": "Mo-Fr 08:00-17:00",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  )
}