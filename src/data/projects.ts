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
}

export const featuredProject: Project = {
  slug: "agendex",
  title: "Agendex",
  tagline: "Plataforma SaaS para salones de belleza",
  description:
    "SaaS multi-tenant con gestión de visitas, checkout, comisiones por profesional, reportes financieros y app móvil. Piloto activo con cliente real.",
  features: [
    "Arquitectura multi-tenant con Row Level Security en PostgreSQL",
    "Calendario de reservas para múltiples profesionales",
    "Checkout con cálculo automático de comisiones",
    "Tarjetas de regalo y ajustes de precio con historial de auditoría",
    "Reportes financieros por período y profesional",
    "Deploy en producción con Vercel + Supabase",
  ],
  stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "React Query", "TailwindCSS"],
  liveUrl: "https://agendex.studio",
  githubUrl: undefined,
  image: undefined,
  brandColor: "#6366F1",
  isFeatured: true,
  isProduction: true,
};

export const otherProjects: Project[] = [
  {
    slug: "fivem-admin",
    title: "FiveM Admin Platform",
    tagline: "Dashboard de administración para servidor de roleplay",
    description:
      "Panel web para gestionar remotamente la base de datos de un servidor FiveM de roleplay.",
    features: [
      "Construido con React + Tailwind",
      "Operaciones de base de datos desde cualquier dispositivo",
      "Publicado como proyecto open source",
    ],
    stack: ["React", "TailwindCSS"],
    githubUrl: "#",
    image: undefined,
    brandColor: "#F59E0B",
  },
  {
    slug: "inventory-system",
    title: "Inventory System",
    tagline: "Sistema de gestión de inventario",
    description:
      "Sistema de gestión de inventario construido con Python + Flask + MySQL.",
    features: [
      "CRUD completo de productos",
      "Gestión de categorías y proveedores",
      "Arquitectura dirigida por base de datos",
    ],
    stack: ["Python", "Flask", "MySQL"],
    githubUrl: "#",
    image: undefined,
    brandColor: "#10B981",
  },
  {
    slug: "pokedex",
    title: "Pokédex Mobile App",
    tagline: "App móvil multiplataforma con la PokéAPI",
    description:
      "Aplicación móvil construida con Ionic + Angular que consume la API oficial de Pokémon.",
    features: [
      "Búsqueda de Pokémon por ID o nombre",
      "Muestra estadísticas e imágenes",
      "Interfaz móvil multiplataforma",
    ],
    stack: ["Ionic", "Angular"],
    githubUrl: "#",
    image: undefined,
    brandColor: "#EF4444",
  },
];
