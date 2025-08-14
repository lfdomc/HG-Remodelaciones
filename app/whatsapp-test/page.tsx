import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ExternalLink, MessageCircle, Share2 } from "lucide-react"
import Link from "next/link"

export default function WhatsAppTestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-olive-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-600">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Integration
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Prueba del Logo en WhatsApp
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Guía completa para verificar que el logo de HG Remodelaciones aparezca correctamente cuando compartas enlaces en WhatsApp
            </p>
          </div>

          {/* Status Card */}
          <Card className="mb-8 border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="flex items-center text-green-800">
                <CheckCircle className="w-5 h-5 mr-2" />
                Estado de Configuración
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">✅ Configurado:</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Metadatos Open Graph</li>
                    <li>• URLs absolutas para imágenes</li>
                    <li>• Headers CORS para imágenes</li>
                    <li>• Múltiples formatos de imagen</li>
                    <li>• Metadatos específicos para WhatsApp</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">📱 Compatible con:</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• WhatsApp</li>
                    <li>• Facebook Messenger</li>
                    <li>• Telegram</li>
                    <li>• Twitter/X</li>
                    <li>• LinkedIn</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Test Instructions */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Share2 className="w-5 h-5 mr-2" />
                  Cómo Probar en WhatsApp
                </CardTitle>
                <CardDescription>
                  Sigue estos pasos para verificar que el logo aparezca
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-olive-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                    <div>
                      <p className="font-medium">Copia la URL del sitio</p>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded mt-1 block">
                        https://hgremodelaciones.com
                      </code>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-olive-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                    <div>
                      <p className="font-medium">Abre WhatsApp</p>
                      <p className="text-sm text-gray-600">En tu teléfono o WhatsApp Web</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-olive-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                    <div>
                      <p className="font-medium">Pega la URL en un chat</p>
                      <p className="text-sm text-gray-600">Puede ser en cualquier conversación</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-olive-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                    <div>
                      <p className="font-medium">Espera la vista previa</p>
                      <p className="text-sm text-gray-600">WhatsApp procesará la URL y mostrará el logo</p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Herramientas de Debugging</CardTitle>
                <CardDescription>
                  Usa estas herramientas para verificar los metadatos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Facebook Sharing Debugger</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Verifica cómo se ve tu enlace en Facebook y WhatsApp
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href="https://developers.facebook.com/tools/debug/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        Abrir Debugger
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Twitter Card Validator</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Verifica cómo se ve en Twitter/X
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href="https://cards-dev.twitter.com/validator" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        Abrir Validator
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Información de Configuración</h4>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600"><strong>URL de la imagen:</strong> https://hg-remodelaciones.vercel.app/images/og-image.jpg</p>
                      <p className="text-sm text-gray-600"><strong>Dimensiones:</strong> 1200x630 px</p>
                      <p className="text-sm text-gray-600"><strong>Tipo:</strong> image/jpeg (optimizado para WhatsApp)</p>
                      <p className="text-sm text-gray-600"><strong>URL del sitio:</strong> https://hg-remodelaciones.vercel.app</p>
                      <p className="text-sm text-gray-600"><strong>URL de producción:</strong> https://hg-remodelaciones.vercel.app</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Troubleshooting */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Solución de Problemas</CardTitle>
              <CardDescription>
                Si el logo no aparece, prueba estas soluciones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Problemas Comunes:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Cache de WhatsApp:</strong> WhatsApp puede tardar hasta 24 horas en actualizar</li>
                    <li>• <strong>Tamaño de imagen:</strong> La imagen debe ser al menos 200x200px</li>
                    <li>• <strong>Formato:</strong> Usa JPG, PNG o WebP</li>
                    <li>• <strong>URL absoluta:</strong> Debe incluir https://</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Soluciones:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Usa el Facebook Debugger para limpiar cache</li>
                    <li>• Verifica que la imagen sea accesible públicamente</li>
                    <li>• Prueba con diferentes URLs de la página</li>
                    <li>• Espera unos minutos y vuelve a intentar</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Back to Home */}
          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/">
                Volver al Inicio
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}