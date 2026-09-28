"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Sobre Mí", href: "/#about" },
  { label: "Stack", href: "/#stack" },
  { label: "Proyectos", href: "/#projects" },
  { label: "Certificaciones", href: "/#certifications" },
  { label: "Experiencia", href: "/#experience" },
  { label: "Contacto", href: "/#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-5xl">
        <Link
          href="/"
          className="text-lg font-bold text-white tracking-tight"
          onClick={() => setIsOpen(false)}
        >
          Juan Elgueda<span className="text-indigo-400">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-slate-400 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="mailto:juanemilioelgueda@gmail.com"
          className="hidden md:inline-flex items-center gap-2 bg-indigo-600 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-indigo-500 transition-colors duration-200"
        >
          Contactar
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          <div className="p-4 border-t border-slate-800">
            <a
              href="mailto:juanemilioelgueda@gmail.com"
              className="w-full inline-flex justify-center items-center gap-2 bg-indigo-600 text-white text-sm font-semibold py-2.5 px-4 rounded-lg hover:bg-indigo-500 transition-colors"
            >
              Contactar
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
