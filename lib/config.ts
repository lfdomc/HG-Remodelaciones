// Configuración de URLs según el entorno
export const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    // En el cliente, usar la URL actual
    return window.location.origin
  }
  
  // En el servidor
  if (process.env.NODE_ENV === 'production') {
    // Usar VERCEL_URL si está disponible, sino usar la URL de producción configurada
    return process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : process.env.NEXT_PUBLIC_PRODUCTION_URL || 'https://hg-remodelaciones.vercel.app'
  }
  
  // En desarrollo
  return process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
}

export const getImageUrl = (path: string) => {
  // En desarrollo, usar rutas relativas para imágenes estáticas
  if (process.env.NODE_ENV !== 'production') {
    return path.startsWith('/') ? path : `/${path}`
  }
  
  // En producción, usar URLs absolutas
  const baseUrl = getBaseUrl()
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`
}

// Configuración de metadatos
export const siteConfig = {
  name: 'HG Remodelaciones',
  title: 'HG Remodelaciones - Construcción y Remodelaciones en Costa Rica',
  description: 'Empresa líder en construcción y remodelaciones en Costa Rica con más de 20 años de experiencia.',
  url: getBaseUrl(),
  ogImage: getImageUrl('/images/logo.jpeg'),
  logo: getImageUrl('/images/logo.webp'),
  logoJpeg: getImageUrl('/images/logo.jpeg'),
}