import { Github, ArrowUpRight } from "lucide-react";

const featuredProject = {
  title: "Agendex",
  tagline: "SaaS Booking Platform",
  description:
    "Agendex is a multi-tenant SaaS platform designed for beauty salons to manage reservations, professionals, services and payments. The system is currently running in production with real users and supports complex scheduling workflows.",
  features: [
    "Multi-tenant architecture with PostgreSQL Row Level Security",
    "Calendar system for multi-professional scheduling",
    "Checkout system with automatic commissions per professional",
    "Gift cards and price adjustments with audit history",
    "Production deployment on Vercel + Supabase",
  ],
  stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "TailwindCSS"],
  liveUrl: "#",
  githubUrl: "#",
};

const otherProjects = [
  {
    title: "FiveM Admin Platform",
    description:
      "Web dashboard for managing a roleplay server database remotely.",
    features: [
      "Built with React + Tailwind",
      "Allows database operations from any device",
      "Published as open source project",
    ],
    stack: ["React", "TailwindCSS"],
    githubUrl: "#",
  },
  {
    title: "Inventory System",
    description:
      "Inventory management system built with Python + Flask + MySQL.",
    features: [
      "CRUD operations for products",
      "Category and supplier management",
      "Database driven architecture",
    ],
    stack: ["Python", "Flask", "MySQL"],
    githubUrl: "#",
  },
  {
    title: "Pokédex Mobile App",
    description:
      "Mobile app built with Ionic + Angular that consumes the Pokémon API.",
    features: [
      "Search Pokémon by ID",
      "Displays stats and images",
      "Cross-platform mobile interface",
    ],
    stack: ["Ionic", "Angular"],
    githubUrl: "#",
  },
];

const Portfolio = () => {
  return (
    <section id="projects" className="py-20 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Projects
          </h2>
          <p className="text-slate-400">Real products shipped to real users.</p>
        </div>

        {/* Featured — Agendex */}
        <div className="bg-slate-800/40 rounded-2xl border border-slate-700 p-8 md:p-10 mb-8 hover:border-indigo-500/40 transition-all duration-300">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <span className="text-xs font-semibold text-green-500 uppercase tracking-widest">
                Featured Project · In Production
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mt-1">
                {featuredProject.title}
                <span className="text-slate-400 font-normal text-xl">
                  {" "}
                  — {featuredProject.tagline}
                </span>
              </h3>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors py-1.5 px-3 rounded-lg border border-slate-700 hover:border-slate-500"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href={featuredProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-indigo-600 text-white text-sm font-medium px-4 py-1.5 rounded-lg hover:bg-indigo-500 transition-colors"
              >
                Live Demo <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <p className="text-slate-400 text-base mb-6 leading-relaxed max-w-3xl">
            {featuredProject.description}
          </p>

          <ul className="space-y-2 mb-6">
            {featuredProject.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-slate-300 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 mt-1.5" />
                {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {featuredProject.stack.map((tech) => (
              <span
                key={tech}
                className="bg-slate-700/80 text-slate-300 text-xs font-medium px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-3 gap-5">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-800/20 rounded-xl border border-slate-700/50 p-6 hover:border-slate-600 transition-all duration-300 flex flex-col"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-base font-semibold text-white">
                  {project.title}
                </h3>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-300 transition-colors flex-shrink-0"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <ul className="space-y-1.5 mb-4 flex-1">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="text-slate-500 text-xs flex items-start gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 flex-shrink-0 mt-1.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-slate-700/60 text-slate-400 text-xs px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
    {
      image: "/images/porta03.jpg",
      alt: "Sistema SISGEA",
      title: "SISGEA - Citofonía y Video-Citofonía Inalámbrica",
      description:
        "Sistema integral con backend, UI/UX y documentación técnica para control de acceso inalámbrico en comunidades y empresas, con arquitectura escalable y pruebas de seguridad.",
      tags: ["Java", "MySQL", "UML", "Arquitectura de Software"],
    },
    {
      image: "/images/porta01.jpg",
      alt: "Palelo SPA App",
      title: "Palelo SPA App",
      description:
        "Aplicación para gestión de inventario y ventas en eventos VIP, optimizada para flujo rápido y control en tiempo real, usada en Estadio La Portada.",
      tags: ["JavaScript", "React", "Node.js", "MySQL"],
    },
    {
      image: "/images/porta03.jpg",
      alt: "RC Reformas Web",
      title: "RC Reformas & Mantenciones",
      description:
        "Sitio web corporativo optimizado para SEO y conversión de clientes, con integración de redes sociales y diseño responsivo.",
      tags: ["Next.js", "Tailwind CSS", "Vercel", "SEO"],
    },
    {
      image: "/images/porta02.jpg",
      alt: "Rediseño web Club Depoortivo",
      title: "Rediseño Club Deportivo",
      description:
        "Propuesta integral de rediseño web con mejoras técnicas, optimización de carga y actualización estética para aumentar la interacción con hinchas y patrocinadores.",
      tags: ["Astro", "Tailwind CSS", "Optimización SEO", "UI/UX"],
    },
    {
      image: "/images/porta01.jpg",
      alt: "AstroAuthLucia",
      title: "AstroAuthLucia",
      description:
        "Sistema de autenticación en Astro con Lucia Auth, diseñado para proyectos escalables y con control avanzado de roles y sesiones.",
      tags: ["Astro", "Lucia Auth", "TypeScript", "Tailwind CSS"],
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proyectos que Crean Valor
          </h2>
          <p className="text-lg text-gray-400">
            La tecnología es el puente entre las ideas y la realidad. Aquí
            puedes ver algunos ejemplos de cómo he ayudado a construir ese
            puente.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-bg rounded-xl overflow-hidden group border border-gray-800"
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-700 text-gray-300 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
