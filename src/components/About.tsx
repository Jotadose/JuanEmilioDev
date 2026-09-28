import Image from "next/image";
import { GraduationCap, Award, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3 space-y-4">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold px-3 py-1 rounded-full">
              <GraduationCap className="w-3.5 h-3.5" /> Perfil &amp; Trayectoria
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              De Analista de Sistemas a Constructor de SaaS en Producción
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Soy <strong className="text-white">Juan Emilio Elgueda</strong>, Técnico de Nivel Superior en Programación y Analista de Sistemas titulado con <span className="text-emerald-400 font-semibold">máxima distinción</span> en AIEP.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              Mi enfoque une el análisis riguroso de modelos de datos relacionales con la ejecución moderna de productos web. No construyo maquetas aisladas: diseño arquitecturas con aislamiento estricto multi-tenant, manejo concurrente de transacciones y distribución multiplataforma nativa.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-xl">
                <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-emerald-400" /> Titulado con Distinción
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Analista de Sistemas &amp; Programador (AIEP)</div>
              </div>

              <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-xl">
                <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-indigo-400" /> Ubicación &amp; Modalidad
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Chile (Remoto / Presencial)</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl bg-slate-800/80 p-2 overflow-hidden border border-indigo-500/30 shadow-2xl shadow-indigo-500/10">
              <Image
                src="/images/porta01.jpg"
                alt="Juan Emilio Elgueda"
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
