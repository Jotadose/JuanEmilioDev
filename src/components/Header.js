"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-black/60 backdrop-blur-md sticky top-0 left-0 right-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold text-white"
          onClick={closeMenu}
        >
          Juan Elgueda<span className="text-indigo-500">.</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/about"
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
          >
            Sobre Mí
          </Link>
          <Link
            href="/services"
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
          >
            Servicios
          </Link>
          <Link
            href="/technologies"
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
          >
            Tecnologías
          </Link>
          <Link
            href="/portfolio"
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
          >
            Proyectos
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
          >
            Contacto
          </Link>
        </nav>
        <Link
          href="/contact"
          className="hidden md:inline-block bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-300"
        >
          Hablemos
        </Link>
        <button
          onClick={toggleMenu}
          className="md:hidden text-white"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Menú para el celu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/90 backdrop-blur-lg">
          <Link
            href="/about"
            className="block text-center py-3 px-4 text-gray-200 hover:bg-gray-800"
            onClick={closeMenu}
          >
            Sobre Mí
          </Link>
          <Link
            href="/services"
            className="block text-center py-3 px-4 text-gray-200 hover:bg-gray-800"
            onClick={closeMenu}
          >
            Servicios
          </Link>
          <Link
            href="/technologies"
            className="block text-center py-3 px-4 text-gray-200 hover:bg-gray-800"
            onClick={closeMenu}
          >
            Tecnologías
          </Link>
          <Link
            href="/portfolio"
            className="block text-center py-3 px-4 text-gray-200 hover:bg-gray-800"
            onClick={closeMenu}
          >
            Proyectos
          </Link>
          <Link
            href="/contact"
            className="block text-center py-3 px-4 text-gray-200 hover:bg-gray-800"
            onClick={closeMenu}
          >
            Contacto
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
