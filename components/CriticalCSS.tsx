"use client"

import { useEffect } from 'react'

export default function CriticalCSS() {
  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window === 'undefined') return

    // Cargar CSS no crítico de forma diferida
    const loadDeferredCSS = () => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = '/styles/deferred.css'
      link.media = 'print'
      link.onload = function() {
        (this as HTMLLinkElement).media = 'all'
      }
      document.head.appendChild(link)
    }

    // Cargar CSS diferido después de que la página esté lista
    if (document.readyState === 'complete') {
      loadDeferredCSS()
    } else {
      window.addEventListener('load', loadDeferredCSS)
    }

    return () => {
      window.removeEventListener('load', loadDeferredCSS)
    }
  }, [])

  return (
    <>
      {/* CSS crítico inline para evitar bloqueo del render */}
      <style jsx global>{`
        /* Variables CSS críticas */
        :root {
          --background: 0 0% 100%;
          --foreground: 222.2 84% 4.9%;
          --primary: 82 28% 40%;
          --primary-foreground: 210 40% 98%;
          --border: 214.3 31.8% 91.4%;
          --radius: 0.5rem;
        }

        .dark {
          --background: 222.2 84% 4.9%;
          --foreground: 210 40% 98%;
          --primary: 82 35% 55%;
          --primary-foreground: 222.2 84% 4.9%;
          --border: 217.2 32.6% 17.5%;
        }

        /* Estilos críticos del body */
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: var(--font-inter), system-ui, -apple-system, sans-serif;
          background: hsl(var(--background));
          color: hsl(var(--foreground));
          line-height: 1.6;
        }

        /* Layout crítico */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        /* Header crítico */
        header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: hsl(var(--background) / 0.95);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid hsl(var(--border));
        }

        /* Navegación crítica */
        nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }

        /* Botones críticos */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 1rem;
          border-radius: calc(var(--radius) - 2px);
          font-weight: 500;
          transition: all 0.2s;
          text-decoration: none;
          border: none;
          cursor: pointer;
        }

        .btn-primary {
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
        }

        .btn-primary:hover {
          opacity: 0.9;
        }

        /* Ocultar contenido no crítico inicialmente */
        .deferred-content {
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }

        .deferred-content.loaded {
          opacity: 1;
        }

        /* Prevenir FOUC */
        .no-js .deferred-content {
          opacity: 1;
        }
      `}</style>
    </>
  )
}