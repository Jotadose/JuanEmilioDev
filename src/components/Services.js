"use client"; // Marcamos como Client Component por el uso de íconos interactivos.

import { Server, LayoutTemplate, Database, FileCheck2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Server />,
      title: "Desarrollo Backend a Medida",
      description:
        "Creo sistemas internos, APIs y lógica de negocio con Python (Flask) y Node.js para garantizar un rendimiento seguro, rápido y escalable.",
    },
    {
      icon: <LayoutTemplate />,
      title: "Aplicaciones Web Full-Stack",
      description:
        "Desarrollo aplicaciones web completas y responsivas, combinando un backend potente con una interfaz de usuario moderna (HTML, CSS, JS, Astro).",
    },
    {
      icon: <Database />,
      title: "Gestión de Bases de Datos",
      description:
        "Diseño, implemento y optimizo bases de datos relacionales (MySQL) para asegurar la integridad, seguridad y acceso rápido a la información.",
    },
    {
      icon: <FileCheck2 />,
      title: "Análisis de Sistemas",
      description:
        "Realizo un levantamiento detallado de tus necesidades para traducir requerimientos de negocio en especificaciones técnicas claras.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Soluciones a la Medida de tus Objetivos
          </h2>
          <p className="text-lg text-gray-400">
            Ofrezco un conjunto de servicios enfocados en construir la
            infraestructura digital que tu empresa realmente necesita para
            escalar.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-bg border border-gray-800 rounded-xl p-8 hover:border-indigo-500 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-indigo-600/10 text-indigo-400 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
