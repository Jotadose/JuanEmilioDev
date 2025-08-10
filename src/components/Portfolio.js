"use client";

import Image from "next/image";

const Portfolio = () => {
  const projects = [
    {
      image: "/images/porta02.jpg", // Asegúrate de que la imagen esté en public/images/
      alt: "Captura de pantalla del Sistema de Gestión Interno",
      title: "Sistema de Gestión Interno",
      description:
        "Una solución backend para automatizar procesos de inventario y reportes para una empresa local.",
      tags: ["Python", "Flask", "MySQL", "API REST"],
    },
    {
      image: "/images/porta03.jpg", // Asegúrate de que la imagen esté en public/images/
      alt: "Captura de pantalla de la Plataforma Web de Reservas",
      title: "Punto de Venta",
      description:
        "Aplicación full-stack que permite a los usuarios registrar ventas y gestionar productos de manera intuitiva.",
      tags: ["Node.js", "JavaScript", "Astro", "HTML/CSS"],
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
              {/* Contenedor con proporción fija (16:9) */}
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
