"use client";

import Image from "next/image";

const Portfolio = () => {
  const projects = [
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
