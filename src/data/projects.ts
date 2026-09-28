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
  metrics?: { label: string; value: string }[];
}

export const featuredProject: Project = {
  slug: "agendex",
  title: "Agendex",
  tagline: "Plataforma SaaS Multi-Tenant & POS para Salones y Salud",
  description:
    "SaaS multi-tenant en producción con subdominios dinámicos ([slug].agendex.studio). Diseñado con arquitectura de aislamiento estricto vía PostgreSQL RLS, motor de calendario en tiempo real, prevención de colisiones de citas, módulo POS y sincronización móvil nativa.",
  features: [
    "Aislamiento estricto multi-tenant con Row Level Security (RLS) en PostgreSQL (cero fugas entre negocios)",
    "Reescritura de subdominios y validación de sesión en el Edge (Next.js 15 Middleware)",
    "Motor de agenda concurrente para múltiples profesionales con sincronización vía WebSockets",
    "Optimización SSR paralela con React.cache(), reduciendo las consultas iniciales en un 60%",
    "Módulo financiero y POS: Sesiones de caja, checkout multi-servicio (visits) y desglose de comisiones",
    "Integración con pasarelas de pago (MercadoPago y Webpay) y notificaciones push con Firebase FCM",
    "Distribución nativa para iOS y Android generada desde una sola base de código con Capacitor 7",
  ],
  stack: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Supabase",
    "PostgreSQL RLS",
    "Capacitor 7",
    "TailwindCSS",
    "MercadoPago",
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
    slug: "rc-reformas",
    title: "RC Reformas",
    tagline: "Sitio corporativo en producción con estimador interactivo de presupuestos",
    description:
      "Plataforma comercial para empresa de remodelaciones con motor de cotización en tiempo real según m² y calidades, captura de leads multicanal y fallback automático a WhatsApp.",
    features: [
      "Estimador algorítmico de presupuestos según superficie, materiales y multiplicadores comerciales",
      "Captura de leads resiliente con envío a Formspree y fallback automático a WhatsApp API",
      "Arquitectura modular en Next.js 15 y React 19 optimizada para SEO (sitemap dinámico y meta tags)",
      "Despliegue continuo en Vercel con cliente comercial real y soporte multicanal",
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "TailwindCSS 4", "Formspree", "WhatsApp API"],
    liveUrl: "https://rcreformas.vercel.app",
    githubUrl: "https://github.com/Jotadose/rcv2",
    image: undefined,
    brandColor: "#3B82F6",
    isProduction: true,
  },
  {
    slug: "fivem-admin",
    title: "FiveM Admin Platform",
    tagline: "Dashboard de administración remota para servidor de roleplay",
    description:
      "Panel web interactivo para gestionar remotamente la base de datos de usuarios, inventarios y permisos en un servidor FiveM.",
    features: [
      "Construido con React, TypeScript y TailwindCSS",
      "Operaciones remotas de base de datos seguras desde cualquier dispositivo",
      "Monitoreo de estado de jugadores en tiempo real",
    ],
    stack: ["React", "TypeScript", "TailwindCSS"],
    githubUrl: undefined,
    image: undefined,
    brandColor: "#F59E0B",
  },
  {
    slug: "inventory-system",
    title: "Inventory System",
    tagline: "Sistema empresarial de gestión de inventario y stock",
    description:
      "Sistema backend y web de control de inventario con gestión de movimientos, auditoría de stock y catálogo de proveedores.",
    features: [
      "Arquitectura dirigida por base de datos relacional con MySQL",
      "API REST modular desarrollada en Python (Flask)",
      "Historial de transacciones y cálculo automático de existencias mínimas",
    ],
    stack: ["Python", "Flask", "MySQL", "REST APIs"],
    githubUrl: undefined,
    image: undefined,
    brandColor: "#10B981",
  },
];
