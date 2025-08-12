import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { siteConfig } from "@/lib/config"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import StructuredData from "@/components/StructuredData"
import Breadcrumbs from "@/components/Breadcrumbs"
import Analytics from "@/components/Analytics"
import SocialMetaTags from "@/components/SocialMetaTags"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | HG Remodelaciones"
  },
  description: siteConfig.description,
  keywords: [
    "construcción Costa Rica",
    "remodelaciones Alajuela", 
    "empresa construcción Costa Rica",
    "proyectos residenciales",
    "construcción comercial",
    "remodelación casas",
    "constructora Costa Rica",
    "edificación",
    "arquitectura",
    "ingeniería civil"
  ],
  authors: [{ name: "HG Remodelaciones", url: "https://hgremodelaciones.com" }],
  creator: "HG Remodelaciones",
  publisher: "HG Remodelaciones",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CR',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.title,
          type: 'image/jpeg',
        },
      ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  verification: {
    google: 'your-verification-code', // Agregar cuando tengas el código
  },
  other: {
    'msvalidate.01': 'your-bing-verification-code',
    'facebook-domain-verification': 'your-facebook-verification-code',
    // Metadatos específicos para WhatsApp
    'og:image:secure_url': siteConfig.ogImage,
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:type': 'image/jpeg',
    'og:image:alt': siteConfig.title,
    'whatsapp:image': siteConfig.ogImage,
    'telegram:image': siteConfig.ogImage,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <SocialMetaTags />
      </head>
      <body className={inter.className}>
        <Analytics />
        <StructuredData />
        <Header />
        
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  )
}
