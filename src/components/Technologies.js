"use client";

import { useState } from "react";
import { Reorder } from "framer-motion"; // Importa los componentes de Framer Motion
import {
  SquarePi,
  Braces,
  RectangleEllipsis,
  Terminal,
  SquareChartGantt,
  Palette,
  Router,
  DatabaseZap,
  ChartNetwork,
  DatabaseBackup,
  Fingerprint,
  MessageSquareDiff,
  Presentation,
  Github,
  BookDown,
} from "lucide-react";
import CyberCard from "./CyberCard";

// Se saca la data inicial fuera del componente
const initialTechCategories = [
  {
    title: "Backend",
    skills: [
      { icon: <SquarePi />, name: "Python & Flask" },
      { icon: <Braces />, name: "JavaScript & Node.js" },
      { icon: <RectangleEllipsis />, name: "API REST" },
      { icon: <Terminal />, name: "Lógica de Programación" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { icon: <SquareChartGantt />, name: "HTML5" },
      { icon: <Palette />, name: "CSS3 & TailwindCSS" },
      { icon: <Braces />, name: "JavaScript" },
      { icon: <Router />, name: "Astro" },
    ],
  },
  {
    title: "Bases de Datos",
    skills: [
      { icon: <DatabaseZap />, name: "MySQL" },
      { icon: <ChartNetwork />, name: "Diseño Relacional" },
      { icon: <DatabaseBackup />, name: "Optimización de Consultas" },
      { icon: <Fingerprint />, name: "Integridad de Datos" },
    ],
  },
  {
    title: "Metodologías",
    skills: [
      { icon: <MessageSquareDiff />, name: "Metodologías Ágiles" },
      { icon: <Presentation />, name: "Jira & JSM" },
      { icon: <Github />, name: "Git & GitHub" },
      { icon: <BookDown />, name: "Análisis de Requerimientos" },
    ],
  },
];

const Technologies = () => {
  // Maneja el orden de las categorías con el estado de React
  const [categories, setCategories] = useState(initialTechCategories);

  return (
    <section id="tech" className="relative z-10 py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tecnologías y Herramientas
          </h2>
          <p className="text-lg text-gray-400">
            Utilizo un stack de tecnologías moderno y robusto, y me adapto a las
            herramientas que impulsan los proyectos exitosos.
          </p>
        </div>

        {/* Reorder.Group se encarga de la lógica de arrastrar y reordenar */}
        <Reorder.Group
          // Se elimina 'axis' para permitir el arrastre en cualquier dirección
          values={categories}
          onReorder={setCategories}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {categories.map((category) => (
            // Reorder.Item hace que cada elemento sea arrastrable
            <Reorder.Item
              key={category.title}
              value={category}
              // Animación al levantar la tarjeta (se añade y: -10)
              whileDrag={{
                scale: 1.05,
                y: -10,
                zIndex: 20,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
              }}
              // Transición suave al soltar
              transition={{ duration: 0.2 }}
            >
              <CyberCard title={category.title} skills={category.skills} />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
    </section>
  );
};

export default Technologies;
