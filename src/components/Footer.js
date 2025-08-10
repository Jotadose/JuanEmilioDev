// src/components/Footer.js

"use client"; // Es client component por los íconos y el script del año.

import { useState, useEffect } from "react";
import { Linkedin, Github } from "lucide-react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  // Aunque el estado inicial es correcto, esto es para mostrar cómo se haría
  // si la lógica fuera más compleja o necesitara actualizarse.
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="container mx-auto px-6 text-center text-gray-500">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.linkedin.com/in/juan-emilio-elgueda-lillo-75363219a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/Jotadose"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
        <p>&copy; {year} Juan Elgueda. Todos los derechos reservados.</p>
        <p className="text-sm mt-2">
          Diseñado y desarrollado con pasión en La Serena, Chile.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
