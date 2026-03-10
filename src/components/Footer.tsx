// src/components/Footer.js

"use client";

import { useState, useEffect } from "react";
import { Linkedin, Github } from "lucide-react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-slate-800 py-10">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          &copy; {year} Juan Elgueda. Built with Next.js & TailwindCSS.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/juan-emilio-elgueda-lillo-75363219a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-indigo-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/Jotadose"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-indigo-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
