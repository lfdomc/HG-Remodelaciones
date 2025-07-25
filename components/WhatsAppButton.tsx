"use client"

import { MessageCircle } from "lucide-react"
import Link from "next/link"

export default function WhatsAppButton() {
  const phoneNumber = "+50688969195" // Reemplaza con el número real
  const message = "Hola, me interesa obtener más información sobre sus servicios de construcción."

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Link>
  )
}
