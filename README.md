# HG Remodelaciones - Sitio Web

Sitio web corporativo para HG Remodelaciones, empresa líder en construcción y desarrollo de proyectos residenciales y comerciales.

## 🚀 Características

- **Diseño Moderno y Responsivo**: Interfaz atractiva que se adapta a todos los dispositivos
- **Formularios Funcionales**: Contacto y cotización con validación y envío de emails
- **Sistema de Notificaciones**: Toast notifications para mejor UX
- **Analytics Integrado**: Seguimiento de eventos y conversiones
- **Optimizado para SEO**: Metadatos y estructura optimizada
- **Componentes Reutilizables**: Arquitectura modular con Radix UI

## 🛠️ Tecnologías

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Forms**: React Hook Form + Zod
- **Email**: Resend
- **Icons**: Lucide React
- **TypeScript**: Para type safety

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

## 🎨 Personalización

### Colores y Tema

Los colores principales se configuran en `tailwind.config.ts`:
```js
colors: {
  primary: {
    // Azul corporativo
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    // ...
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

- Envío de formularios (éxito/error)
- Clics en WhatsApp
- Navegación entre páginas
- Clics en botones importantes

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

Para soporte técnico:
- Email: soporte@hgremodelaciones.com
- WhatsApp: +506 8896 9195

---

Desarrollado con ❤️ por [Temsa Tecnología](https://crtemsa.com)