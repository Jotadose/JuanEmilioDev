import Image from "next/image";
import { Github, ArrowUpRight } from "lucide-react";
import { featuredProject, otherProjects } from "@/data/projects";
import ProjectPlaceholder from "@/components/ProjectPlaceholder";

const Portfolio = () => {
  return (
    <section id="projects" className="py-20 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Projects
          </h2>
          <p className="text-slate-400">Real products shipped to real users.</p>
        </div>

        {/* Featured project (Agendex) */}
        <div className="bg-slate-800/40 rounded-2xl border border-slate-700 overflow-hidden mb-8 hover:border-indigo-500/40 transition-all duration-300">
          <div className="border-b border-slate-700/60">
            {featuredProject.image ? (
              <div className="relative w-full aspect-video">
                <Image src={featuredProject.image} alt={featuredProject.title} fill className="object-cover" />
              </div>
            ) : (
              <ProjectPlaceholder title={featuredProject.title} brandColor={featuredProject.brandColor} />
            )}
          </div>
          <div className="p-8 md:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-semibold text-green-500 uppercase tracking-widest">
                  Proyecto Destacado  En Producción
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mt-1">
                  {featuredProject.title}
                  <span className="text-slate-400 font-normal text-xl">  {featuredProject.tagline}</span>
                </h3>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                {featuredProject.githubUrl && (
                  <a href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors py-1.5 px-3 rounded-lg border border-slate-700 hover:border-slate-500">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                )}
                {featuredProject.liveUrl && (
                  <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-indigo-600 text-white text-sm font-medium px-4 py-1.5 rounded-lg hover:bg-indigo-500 transition-colors">
                    Live Demo <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
            <p className="text-slate-400 text-base mb-6 leading-relaxed max-w-3xl">{featuredProject.description}</p>
            <ul className="space-y-2 mb-6">
              {featuredProject.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-slate-300 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 mt-1.5" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {featuredProject.stack.map((tech) => (
                <span key={tech} className="bg-slate-700/80 text-slate-300 text-xs font-medium px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Other projects */}
        <div className="grid md:grid-cols-3 gap-5">
          {otherProjects.map((project) => (
            <div key={project.slug} className="bg-slate-800/20 rounded-xl border border-slate-700/50 overflow-hidden hover:border-slate-600 transition-all duration-300 flex flex-col">
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
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="text-slate-500 hover:text-slate-300 transition-colors flex-shrink-0">
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                <ul className="space-y-1.5 mb-4 flex-1">
                  {project.features.map((f) => (
                    <li key={f} className="text-slate-500 text-xs flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-slate-600 flex-shrink-0 mt-1.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="bg-slate-700/60 text-slate-400 text-xs px-2 py-0.5 rounded">
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