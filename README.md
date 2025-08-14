# HG Remodelaciones - Sitio Web

Sitio web corporativo para HG Remodelaciones, empresa líder en construcción y desarrollo de proyectos residenciales y comerciales.

## 🚀 Características

- **Diseño Moderno y Responsivo**: Interfaz atractiva optimizada para móviles y desktop
- **Integración con WhatsApp**: Formularios que redirigen directamente a WhatsApp con mensajes pre-formateados
- **Botón Flotante de WhatsApp**: Acceso rápido para contacto directo
- **Formularios Inteligentes**: Contacto y cotización que generan mensajes estructurados para WhatsApp
- **UI Mejorada**: Menús desplegables con fondo olive, mejor contraste y legibilidad
- **Optimización Móvil**: Layout adaptativo con mejor visualización en dispositivos móviles
- **Sistema de Notificaciones**: Toast notifications para mejor UX
- **Analytics Integrado**: Seguimiento completo de eventos, conversiones y clics de WhatsApp
- **SEO Avanzado**: Metadatos Open Graph, sitemap dinámico, datos estructurados
- **Componentes Reutilizables**: Arquitectura modular con Radix UI y Tailwind CSS

## 🛠️ Tecnologías

- **Framework**: Next.js 15.2.4 (App Router)
- **Styling**: Tailwind CSS con colores personalizados (olive, orangered, blue)
- **UI Components**: Radix UI con componentes personalizados
- **Forms**: React Hook Form + Zod para validación
- **Email**: Resend para notificaciones
- **Icons**: Lucide React
- **TypeScript**: Para type safety completo
- **Analytics**: Google Analytics 4 integrado
- **SEO**: Sitemap dinámico, metadatos avanzados, datos estructurados
- **Deployment**: Optimizado para Vercel y otras plataformas

## 📦 Instalación

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd hg-remodelaciones
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env.local
```

Edita `.env.local` con tus configuraciones:
```env
# Email Configuration (Resend)
RESEND_API_KEY=your_resend_api_key_here
RESEND_FROM_EMAIL=noreply@yourdomain.com
RESEND_TO_EMAIL=info@yourdomain.com

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_COMPANY_NAME=HG Remodelaciones
NEXT_PUBLIC_COMPANY_PHONE=+506 8896 9195
NEXT_PUBLIC_COMPANY_EMAIL=info@hgremodelaciones.com
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

## 📧 Configuración de Email

### Resend Setup

1. Crea una cuenta en [Resend](https://resend.com)
2. Obtén tu API key
3. Configura tu dominio (opcional pero recomendado)
4. Agrega la API key a tu `.env.local`

### Personalización de Emails

Los templates de email se encuentran en `lib/email.ts`. Puedes personalizar:
- Asunto de los emails
- Contenido HTML
- Información de la empresa
- Styling inline

## 📱 Integración con WhatsApp

### Funcionalidades Implementadas

- **Formulario de Contacto**: Redirige a WhatsApp con mensaje pre-formateado
- **Formulario de Cotización**: Genera mensaje estructurado con todos los datos del proyecto
- **Botón Flotante**: Acceso rápido desde cualquier página
- **Analytics**: Seguimiento de clics y conversiones

### Configuración del Número de WhatsApp

El número de WhatsApp se configura en múltiples archivos:

```typescript
// En components/WhatsAppButton.tsx
const phoneNumber = "+50688969195"

// En app/contacto/page.tsx y app/cotizacion/page.tsx
const phoneNumber = "+50688969195"
```

### Personalización de Mensajes

#### Formulario de Contacto
Genera un mensaje simple con:
- Datos personales (nombre, email, teléfono)
- Asunto del mensaje
- Contenido del mensaje

#### Formulario de Cotización
Genera un mensaje estructurado con:
- Datos personales completos
- Detalles del proyecto (tipo, área, presupuesto)
- Servicios requeridos
- Descripción detallada
- Formato profesional con emojis

### Ventajas de la Integración

- **Comunicación Directa**: Los clientes contactan inmediatamente
- **Datos Estructurados**: Información organizada y fácil de procesar
- **Mayor Conversión**: Reduce fricción en el proceso de contacto
- **Seguimiento**: Analytics integrado para medir efectividad

## 🆕 Mejoras Recientes

### Optimización de UI/UX
- **Menús Desplegables Mejorados**: Fondo olive para mejor contraste y legibilidad
- **Responsive Design**: Layout optimizado para dispositivos móviles
- **Especificaciones de Proyecto**: Diseño vertical para mejor organización de datos
- **Tipografía Mejorada**: Tamaños de fuente y pesos optimizados para mejor legibilidad

### Mejoras SEO
- **Sitemap Dinámico**: Generación automática con páginas de proyectos
- **Metadatos Avanzados**: Open Graph optimizado para redes sociales
- **Datos Estructurados**: Schema.org para mejor indexación
- **Robots.txt**: Configuración optimizada para crawlers

### Funcionalidades Técnicas
- **Filtrado de Proyectos**: Sistema de categorías dinámico
- **Galería de Imágenes**: Visualización optimizada de proyectos
- **Analytics Avanzado**: Seguimiento detallado de interacciones
- **Optimización de Rendimiento**: Carga mejorada y experiencia fluida

## 🎨 Personalización

### Colores y Tema

Los colores principales se configuran en `tailwind.config.ts`:
```js
colors: {
  // Colores personalizados para la empresa de construcción
  blue: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    // Azul corporativo completo
  },
  olive: {
    50: '#f7f8f0',
    500: '#9aab5a',
    600: '#7a8a44',
    // Verde olivo para elementos principales
  },
  orangered: {
    50: '#fef7f0',
    500: '#eb7544',
    600: '#dc5a2a',
    // Naranja rojizo para acentos
  }
}
```

### Información de la Empresa

Actualiza la información en:
- `app/layout.tsx` - Metadatos SEO
- `components/Header.tsx` - Navegación
- `components/Footer.tsx` - Información de contacto
- `components/WhatsAppButton.tsx` - Número de WhatsApp

### Proyectos y Servicios

Los datos se encuentran en:
- `lib/projects-data.ts` - Información de proyectos
- Servicios definidos directamente en los componentes

## 📊 Analytics

### Google Analytics

Para habilitar Google Analytics:

1. Agrega tu tracking ID en `app/layout.tsx`
2. El hook `useAnalytics` ya está configurado para enviar eventos

### Eventos Tracked

- **Formularios**: Envío exitoso/fallido de contacto y cotización
- **WhatsApp**: Clics en botón flotante y redirecciones desde formularios
- **Navegación**: Vistas de página y navegación entre secciones
- **Engagement**: Clics en botones importantes y CTAs
- **Conversiones**: Seguimiento completo del funnel de contacto

## 🚀 Deployment

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. Deploy automático en cada push

### Otras Plataformas

El proyecto es compatible con:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📁 Estructura del Proyecto

```
├── app/                    # App Router (Next.js 14)
│   ├── api/               # API Routes
│   │   ├── contact/       # Endpoint de contacto
│   │   ├── projects/      # Endpoint de proyectos
│   │   └── quote/         # Endpoint de cotización
│   ├── contacto/          # Página de contacto
│   ├── cotizacion/        # Página de cotización
│   ├── nosotros/          # Página sobre nosotros
│   ├── proyectos/         # Página de proyectos
│   ├── servicios/         # Página de servicios
│   └── layout.tsx         # Layout principal
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes UI base
│   ├── Header.tsx        # Navegación principal
│   ├── Footer.tsx        # Pie de página
│   └── WhatsAppButton.tsx # Botón flotante WhatsApp
├── hooks/                # Custom hooks
│   ├── use-analytics.ts  # Hook de analytics
│   └── use-toast.ts      # Hook de notificaciones
├── lib/                  # Utilidades y configuración
│   ├── email.ts          # Configuración de emails
│   ├── projects-data.ts  # Datos de proyectos
│   └── utils.ts          # Utilidades generales
└── public/               # Archivos estáticos
    └── images/           # Imágenes del sitio
```

## 🔧 Scripts Disponibles

```bash
npm run dev          # Desarrollo
npm run build        # Build para producción
npm run start        # Servidor de producción
npm run lint         # Linting
npm run type-check   # Verificación de tipos
```

## 📝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🆘 Soporte

Para soporte técnico y consultas:
- **Email**: info@hgremodelaciones.com
- **WhatsApp**: +506 8896 9195
- **Sitio Web**: [hgremodelaciones.com](https://hgremodelaciones.com)

### Funcionalidades de Contacto
- **Formulario de Contacto**: Redirección directa a WhatsApp
- **Formulario de Cotización**: Mensajes estructurados para proyectos
- **Botón Flotante**: Acceso rápido desde cualquier página

---

**HG Remodelaciones** - Construyendo el futuro, un proyecto a la vez 🏗️

Desarrollado con ❤️ por [Temsa Tecnología](https://crtemsa.com)