"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, ArrowUpRight, Send, CheckCircle2, MessageSquare } from "lucide-react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("juanemilioelgueda@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Column: Direct Info */}
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              <MessageSquare className="w-3.5 h-3.5" /> Hablemos de Ingeniería
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
              ¿Listo para construir algo sólido?
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Disponible para roles Full-Stack / Frontend (Next.js, TypeScript, PostgreSQL) y proyectos de software de alta exigencia. Respuesta rápida garantizada.
            </p>

            <div className="space-y-3">
              <div className="p-4 bg-slate-800/40 border border-slate-700/80 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">Correo Electrónico Directo</p>
                  <p className="text-white font-mono text-sm mt-0.5">juanemilioelgueda@gmail.com</p>
                </div>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-600 text-xs font-medium text-slate-200 transition-colors"
                >
                  {copied ? "¡Copiado!" : "Copiar"}
                </button>
              </div>

              <div className="p-4 bg-slate-800/40 border border-slate-700/80 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">Ubicación &amp; Zona Horaria</p>
                  <p className="text-white font-medium text-sm mt-0.5">Chile (GMT-3 / GMT-4) • Disponible Remoto</p>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Right Column: Channels */}
          <div className="space-y-3.5 pt-2">
            <a
              href="mailto:juanemilioelgueda@gmail.com"
              className="flex items-center justify-between p-4 bg-slate-800/50 border border-slate-700/80 rounded-xl hover:border-indigo-500/60 hover:bg-slate-800 transition-all duration-200 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-indigo-600/20 transition-colors">
                  <Mail className="w-5 h-5 text-slate-300" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Enviar Correo</p>
                  <p className="text-white font-semibold text-sm">
                    juanemilioelgueda@gmail.com
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
            </a>

            <a
              href="https://www.linkedin.com/in/juan-emilio-elgueda-lillo-75363219a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-slate-800/50 border border-slate-700/80 rounded-xl hover:border-indigo-500/60 hover:bg-slate-800 transition-all duration-200 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-indigo-600/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-slate-300" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Conectar en LinkedIn</p>
                  <p className="text-white font-semibold text-sm">
                    juan-emilio-elgueda-lillo
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
            </a>

            <a
              href="https://github.com/Jotadose"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-slate-800/50 border border-slate-700/80 rounded-xl hover:border-indigo-500/60 hover:bg-slate-800 transition-all duration-200 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-indigo-600/20 transition-colors">
                  <Github className="w-5 h-5 text-slate-300" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Explorar Repositorios</p>
                  <p className="text-white font-semibold text-sm">github.com/Jotadose</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
