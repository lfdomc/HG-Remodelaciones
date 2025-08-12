// Configuración de URLs según el entorno
export const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    // En el cliente, usar la URL actual
    return window.location.origin
  }
  
  // En el servidor
  if (process.env.NODE_ENV === 'production') {
    return 'https://hgremodelaciones.com'
  }
  
  // En desarrollo
  return process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001'
}

export const getImageUrl = (path: string) => {
  const baseUrl = getBaseUrl()
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`
}

// Configuración de metadatos
export const siteConfig = {
  name: 'HG Remodelaciones',
  title: 'HG Remodelaciones - Construcción y Remodelaciones en Costa Rica',
  description: 'Empresa líder en construcción y remodelaciones en Costa Rica con más de 20 años de experiencia.',
  url: getBaseUrl(),
  ogImage: getImageUrl('/images/logo.webp'),
  logo: getImageUrl('/images/logo.webp'),
  logoJpeg: getImageUrl('/images/logo.jpeg'),
}