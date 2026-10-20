export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  /** Path inside /public/images — leave undefined to render the placeholder */
  image?: string;
  /** Brand color used by ProjectPlaceholder (hex) */
  brandColor: string;
  isFeatured?: boolean;
  isProduction?: boolean;
  statusBadge?: string;
  metrics?: { label: string; value: string }[];
}

export const featuredProject: Project = {
  slug: "agendex",
  title: "Agendex",
  tagline: "Plataforma SaaS Multi-Tenant & POS para Salones y Centros de Servicios",
  description:
    "SaaS multi-tenant en producción con subdominios dinámicos ([slug].agendex.studio). Diseñado con arquitectura de aislamiento estricto vía PostgreSQL RLS, motor de calendario en tiempo real, prevención de colisiones de citas, módulo POS y sincronización móvil nativa.",
  features: [
    "Aislamiento estricto multi-tenant con Row Level Security (RLS) en PostgreSQL (cero fugas de datos entre organizaciones)",
    "Reescritura de subdominios y validación de sesión en el Edge mediante Next.js 15 Middleware",
    "Motor de agenda concurrente para múltiples profesionales con sincronización en tiempo real",
    "Optimización SSR paralela con React.cache(), reduciendo las consultas iniciales a base de datos en un 60%",
    "Módulo financiero y POS: Sesiones de caja, checkout multi-servicio (visits) y desglose de comisiones por profesional",
    "Integración con pasarelas de pago (Mercado Pago y Webpay) y notificaciones automáticas por WhatsApp / push",
    "Distribución nativa para iOS y Android compilada desde una sola base de código con Capacitor 7",
  ],
  stack: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Supabase",
    "PostgreSQL RLS",
    "Capacitor 7",
    "TailwindCSS",
    "Mercado Pago",
    "Webpay",
  ],
  liveUrl: "https://agendex.studio",
  githubUrl: "https://github.com/Jotadose/Reserva",
  image: undefined,
  brandColor: "#6366F1",
  isFeatured: true,
  isProduction: true,
  metrics: [
    { label: "Seguridad RLS", value: "100%" },
    { label: "Queries SSR", value: "-60%" },
    { label: "Plataformas", value: "Web + Móvil" },
  ],
};

export const otherProjects: Project[] = [
  {
    slug: "rcreformas",
    title: "RC Reformas",
    tagline: "Sitio corporativo en producción con estimador interactivo de presupuestos",
    description:
      "Plataforma comercial para empresa de remodelaciones con motor de cotización en tiempo real según m² y calidades, captura de leads multicanal y fallback automático a WhatsApp.",
    features: [
      "Estimador algorítmico de presupuestos según superficie, materiales seleccionados y multiplicadores comerciales",
      "Captura de prospectos resiliente: envío de formulario a Formspree con fallback automático a WhatsApp API",
      "Arquitectura modular en Next.js 15 y React 19 optimizada para SEO (sitemap dinámico, schema org y OpenGraph)",
      "Despliegue continuo en Vercel con cliente comercial activo y dominio corporativo propio",
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "TailwindCSS 4", "Formspree", "WhatsApp API"],
    liveUrl: "https://rcreformas.vercel.app",
    githubUrl: "https://github.com/Jotadose/rcv2",
    image: undefined,
    brandColor: "#3B82F6",
    isProduction: true,
  },
  {
    slug: "joyas-erem",
    title: "Joyas Erem",
    tagline: "E-Commerce Integral con Checkout Mercado Pago y Panel Administrativo",
    description:
      "Plataforma de comercio electrónico con arquitectura moderna en Next.js 16 y Supabase. Cuenta con integración completa de pagos vía Mercado Pago SDK, reconciliación automática por webhooks, gestión de stock por variantes y panel de administración.",
    features: [
      "Pasarela de pago Mercado Pago integrada de extremo a extremo: Preferences API, webhooks IPN y reconciliación de órdenes",
      "Seguridad de datos y sesiones de usuario con SSR cookies y políticas RLS sobre PostgreSQL",
      "Panel de administración privado (/admin): control de pedidos en tiempo real, cambio de estados y sincronización de pagos",
      "Gestor de catálogo dinámico: creación de productos con múltiples variantes (talla, metal, piedras) y subida de imágenes a Supabase Storage",
      "Carrito de compras reactivo con persistencia local, validación de inventario y optimización SEO integral",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Mercado Pago SDK", "Supabase", "PostgreSQL", "TailwindCSS 4"],
    githubUrl: "https://github.com/Jotadose/joyas-erem",
    image: undefined,
    brandColor: "#F59E0B",
    isProduction: true,
    statusBadge: "E-Commerce & Pagos",
  },
];
