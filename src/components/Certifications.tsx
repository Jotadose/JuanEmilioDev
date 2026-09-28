import Image from "next/image";
import { Award, CheckCircle, ExternalLink } from "lucide-react";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            <Award className="w-3.5 h-3.5" /> Credenciales Oficiales Verificables
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Certificaciones
          </h2>
          <p className="text-slate-400">
            Acreditaciones internacionales emitidas por Cisco y el Python Institute respaldadas en Credly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-slate-800/30 rounded-2xl border border-slate-700/60 p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5 hover:border-emerald-500/40 transition-all duration-300 shadow-lg group"
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 bg-slate-900 rounded-xl p-2 border border-slate-800 flex items-center justify-center">
                <Image
                  src={cert.badgeUrl}
                  alt={cert.title}
                  width={100}
                  height={100}
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex flex-col flex-1 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {cert.title}
                  </h3>
                </div>

                <div className="text-xs font-medium text-emerald-400 mb-3 flex items-center justify-center sm:justify-start gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Emisor: {cert.issuer}
                </div>

                <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-slate-900 text-slate-300 text-[11px] px-2.5 py-0.5 rounded-md border border-slate-800 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-emerald-600/20 hover:border-emerald-500/40 border border-slate-700 px-3 py-1.5 rounded-lg transition-all"
                  >
                    Verificar en Credly <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
