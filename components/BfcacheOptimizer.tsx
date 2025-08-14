"use client"

import { useEffect } from 'react'

export default function BfcacheOptimizer() {
  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window === 'undefined') return

    // Detectar si la página fue restaurada desde bfcache
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        // La página fue restaurada desde bfcache
        console.log('Page restored from bfcache')
        
        // Reactivar Google Analytics si está disponible
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'page_show_from_cache', {
            transport_type: 'beacon'
          })
        }
        
        // Reactivar cualquier funcionalidad que pueda haberse pausado
        // Por ejemplo, timers, conexiones WebSocket, etc.
      }
    }

    // Optimizar para bfcache antes de que la página se oculte
    const handlePageHide = (event: PageTransitionEvent) => {
      if (event.persisted) {
        // La página será almacenada en bfcache
        console.log('Page will be stored in bfcache')
        
        // Limpiar recursos que podrían impedir bfcache
        // Pausar timers, cerrar conexiones, etc.
      }
    }

    // Detectar cuando la página está siendo descargada
    const handleBeforeUnload = () => {
      // Enviar eventos pendientes usando sendBeacon para mejor compatibilidad con bfcache
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'page_unload', {
          transport_type: 'beacon'
        })
      }
    }

    // Agregar event listeners
    window.addEventListener('pageshow', handlePageShow)
    window.addEventListener('pagehide', handlePageHide)
    window.addEventListener('beforeunload', handleBeforeUnload)

    // Cleanup
    return () => {
      window.removeEventListener('pageshow', handlePageShow)
      window.removeEventListener('pagehide', handlePageHide)
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  // Este componente no renderiza nada visible
  return null
}

// Declaración de tipos para TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}