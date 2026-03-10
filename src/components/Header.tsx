"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Stack", href: "/#stack" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
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

        <nav className="hidden md:flex items-center gap-8">
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
          Hire Me
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
              className="block text-center py-3 px-4 text-slate-300 hover:bg-slate-800 text-sm transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:juanemilioelgueda@gmail.com"
            className="block text-center py-3 px-4 text-indigo-400 font-medium text-sm border-t border-slate-800 hover:bg-slate-800 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
