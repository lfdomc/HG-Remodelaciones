import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HG Remodelaciones - Empresa de Construcción",
  description: "Empresa líder en construcción y desarrollo de proyectos residenciales y comerciales",
  keywords: "construcción, edificación, proyectos, arquitectura, ingeniería",
  authors: [{ name: "Temsa Tecnología", url: "https://crtemsa.com" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
