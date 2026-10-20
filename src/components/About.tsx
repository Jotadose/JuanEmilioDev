import Image from "next/image";
import { GraduationCap, Award, MapPin, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3 space-y-5">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold px-3 py-1 rounded-full">
              <GraduationCap className="w-3.5 h-3.5" /> Sobre Mí &amp; Filosofía de Trabajo
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Ingeniería de software con foco en soluciones reales
            </h2>

            <p className="text-slate-200 text-base leading-relaxed">
              Soy <strong className="text-white font-semibold">Juan Elgueda</strong>, Técnico de Nivel Superior en Programación y Análisis de Sistemas, titulado con <span className="text-emerald-400 font-semibold">máxima distinción</span>.
            </p>

            <p className="text-slate-300 text-sm leading-relaxed">
              Mi enfoque va más allá de desarrollar funcionalidades: <strong className="text-white">analizo problemas, diseño arquitecturas y construyo software preparado para funcionar en producción</strong>.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              He trabajado en el desarrollo de aplicaciones web y sistemas SaaS utilizando tecnologías como <strong className="text-slate-200">Next.js, React, TypeScript, PostgreSQL, Supabase y Python</strong>, incluyendo arquitecturas multi-tenant, control de acceso mediante RLS, aplicaciones en tiempo real, integraciones de pago y despliegues multiplataforma.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              Actualmente desarrollo <strong className="text-indigo-300">Agendex</strong>, una plataforma SaaS en producción que me ha permitido trabajar de extremo a extremo: desde el modelado de datos y la arquitectura hasta el frontend, backend, seguridad, rendimiento y experiencia de usuario.
            </p>

            <p className="text-slate-300 text-sm leading-relaxed border-l-2 border-indigo-500/60 pl-3.5 italic bg-indigo-950/20 py-1.5 rounded-r">
              Me interesa especialmente transformar <strong className="text-white not-italic">problemas complejos en sistemas simples, mantenibles y útiles</strong>, combinando análisis de sistemas con ingeniería de software para construir soluciones que realmente funcionen.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-xl">
                <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-emerald-400" /> Máxima Distinción
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Analista de Sistemas &amp; Programador</div>
              </div>

              <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-xl">
                <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-indigo-400" /> Disponibilidad
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Remoto &amp; Híbrido (Chile / Internacional)</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl bg-slate-800/80 p-2 overflow-hidden border border-indigo-500/30 shadow-2xl shadow-indigo-500/10">
              <Image
                src="/images/porta01.jpg"
                alt="Juan Elgueda"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
