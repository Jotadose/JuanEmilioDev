import Image from "next/image";
import { Github, ArrowUpRight, ShieldCheck, Zap, Smartphone } from "lucide-react";
import { featuredProject, otherProjects } from "@/data/projects";
import ProjectPlaceholder from "@/components/ProjectPlaceholder";
import AgendexPreview from "@/components/AgendexPreview";

const Portfolio = () => {
  return (
    <section id="projects" className="py-20 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            SaaS & Ingeniería de Producción
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
            Proyectos Destacados
          </h2>
          <p className="text-slate-400">
            Sistemas reales construidos para resolver problemas de escala, concurrencia y negocio.
          </p>
        </div>

        {/* Featured project (Agendex) */}
        <div className="bg-slate-800/40 rounded-2xl border border-slate-700/80 overflow-hidden mb-12 hover:border-indigo-500/40 transition-all duration-300 shadow-xl">
          {/* Interactive Agendex Preview (replaces placeholder) */}
          <AgendexPreview />

          <div className="p-6 sm:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
              <div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                  Proyecto Estrella • En Producción
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                  {featuredProject.title}
                  <span className="text-slate-400 font-normal text-lg sm:text-xl block sm:inline sm:ml-2">
                    — {featuredProject.tagline}
                  </span>
                </h3>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2.5 flex-shrink-0">
                {featuredProject.githubUrl && (
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white text-xs sm:text-sm font-medium transition-colors py-2 px-3.5 rounded-lg border border-slate-700 bg-slate-800/60 hover:border-slate-500 shadow-sm"
                  >
                    <Github className="w-4 h-4" /> Ver Código en GitHub
                  </a>
                )}
                {featuredProject.liveUrl && (
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-indigo-600 text-white text-xs sm:text-sm font-semibold py-2 px-4 rounded-lg hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/25"
                  >
                    agendex.studio <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Senior Metrics Banner */}
            {featuredProject.metrics && (
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4 my-5 p-3 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 text-center">
                <div className="space-y-0.5">
                  <div className="text-lg sm:text-2xl font-bold text-emerald-400 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-4 h-4 hidden sm:inline" /> 100%
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-300 font-medium">Aislamiento RLS</div>
                  <div className="text-[10px] text-slate-500 hidden sm:block">A nivel de PostgreSQL</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-lg sm:text-2xl font-bold text-indigo-400 flex items-center justify-center gap-1">
                    <Zap className="w-4 h-4 hidden sm:inline" /> -60%
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-300 font-medium">Queries SSR</div>
                  <div className="text-[10px] text-slate-500 hidden sm:block">React.cache() in-memory</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-lg sm:text-2xl font-bold text-violet-400 flex items-center justify-center gap-1">
                    <Smartphone className="w-4 h-4 hidden sm:inline" /> Web + App
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-300 font-medium">Multiplataforma</div>
                  <div className="text-[10px] text-slate-500 hidden sm:block">Capacitor 7 (iOS / Android)</div>
                </div>
              </div>
            )}

            <p className="text-slate-300 text-sm sm:text-base mb-6 leading-relaxed max-w-3xl">
              {featuredProject.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Decisiones de Ingeniería & Características Clave:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {featuredProject.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 mt-1.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-700/60">
              {featuredProject.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-800 text-slate-300 text-xs font-medium px-3 py-1 rounded-full border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Other projects header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-1">Otros Proyectos</h3>
          <p className="text-slate-400 text-sm">Desarrollo de herramientas y aplicaciones prácticas.</p>
        </div>

        {/* Other projects grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {otherProjects.map((project) => (
            <div
              key={project.slug}
              className="bg-slate-800/20 rounded-xl border border-slate-700/50 overflow-hidden hover:border-slate-600 transition-all duration-300 flex flex-col"
            >
              {project.image ? (
                <div className="relative w-full aspect-video">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
              ) : (
                <ProjectPlaceholder title={project.title} brandColor={project.brandColor} />
              )}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-base font-semibold text-white">{project.title}</h3>
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-slate-300 transition-colors flex-shrink-0"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-slate-400 text-xs sm:text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <ul className="space-y-1.5 mb-4 flex-1">
                  {project.features.map((f) => (
                    <li key={f} className="text-slate-400 text-xs flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-slate-500 flex-shrink-0 mt-1.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-700/50 text-slate-300 text-[11px] px-2 py-0.5 rounded border border-slate-700"
                    >
                      {tech}
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
