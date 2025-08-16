"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface ProjectGalleryProps {
  gallery: string[]
  projectTitle: string
}

export default function ProjectGallery({ gallery, projectTitle }: ProjectGalleryProps) {
  const [expandedImage, setExpandedImage] = useState<string | null>(null)

  const handleImageClick = (image: string) => {
    setExpandedImage(image)
  }

  const handleCloseModal = () => {
    setExpandedImage(null)
  }

  return (
    <>
      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Galería del Proyecto</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((image, index) => (
              <div key={index} className="relative h-64 group overflow-hidden rounded-lg cursor-pointer" onClick={() => handleImageClick(image)}>
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${projectTitle} - Imagen ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {expandedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={handleCloseModal}
        >
          <div className="relative max-w-[80vw] max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handleCloseModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative cursor-pointer" style={{ transform: 'scale(2)', transformOrigin: 'center' }} onClick={handleCloseModal}>
              <Image
                src={expandedImage}
                alt="Imagen expandida"
                width={400}
                height={300}
                style={{ width: 'auto', height: 'auto' }}
                className="rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}