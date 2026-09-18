import { ArrowRight, Github, Linkedin, Mail, FileText, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#0F172A" }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(to right, #E2E8F0 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Indigo glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-28 text-center max-w-4xl">
        {/* Currently Building badge */}
        <div
          className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700 rounded-full px-4 py-1.5 text-sm text-slate-300 mb-8 animate-fade-in-up shadow-sm"
          style={{ animationDelay: "0s" }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
          <span className="font-medium text-white">Actualmente Creando:</span> Agendex SaaS Platform
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Full-Stack &amp;
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400">
            SaaS Architect
          </span>
        </h1>

        <p
          className="text-lg md:text-xl text-slate-300 mb-4 max-w-2xl mx-auto font-normal leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Diseño, construyo y opero productos web de alta concurrencia con arquitecturas multi-tenant en producción.
        </p>

        <p
          className="max-w-xl mx-auto text-slate-400 text-sm md:text-base mb-6 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Creador de <span className="text-indigo-400 font-semibold">Agendex</span> (Next.js 15, PostgreSQL RLS, WebSockets y Capacitor 7). Especializado en rendimiento en el Edge, bases de datos aisladas y experiencias de usuario ultra-fluidas.
        </p>

        {/* Recruiter availability badge */}
        <div
          className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 text-xs md:text-sm text-emerald-400 mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.35s" }}
        >
          <Sparkles className="w-3.5 h-3.5" />
          Disponible para roles Full-Stack / Frontend Senior y proyectos de alto impacto
        </div>

        <div
          className="flex justify-center items-center gap-3 flex-wrap animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-500 transition-all duration-200 shadow-lg shadow-indigo-600/25"
          >
            Ver Proyectos <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/Jotadose"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-800 text-slate-200 font-medium py-3 px-6 rounded-lg border border-slate-700 hover:border-slate-500 hover:text-white transition-all duration-200"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/juan-emilio-elgueda-lillo-75363219a/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-800 text-slate-200 font-medium py-3 px-6 rounded-lg border border-slate-700 hover:border-slate-500 hover:text-white transition-all duration-200"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-slate-400 font-medium py-3 px-4 rounded-lg hover:text-white transition-all duration-200"
          >
            <Mail className="w-4 h-4" /> Contacto
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 font-medium py-3 px-4 rounded-lg hover:text-white transition-all duration-200"
          >
            <FileText className="w-4 h-4" /> Ver CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
