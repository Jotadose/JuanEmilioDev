const experiences = [
  {
    role: "Founder & Full-Stack Architect",
    company: "Agendex",
    period: "2024 — Present",
    description:
      "Diseño, desarrollo y operación en producción de plataforma SaaS multi-tenant para salones de belleza y consultas de salud con clientes reales.",
    bullets: [
      "Arquitectura multi-tenant con aislamiento estricto vía PostgreSQL RLS y subdominios dinámicos en Edge Middleware (Next.js 15)",
      "Desarrollo del motor de agenda concurrente en tiempo real con prevención transaccional de colisiones y actualizaciones WebSockets",
      "Optimización del rendimiento de renderizado en servidor (SSR) reduciendo round-trips en un 60% mediante deduplicación en memoria (React.cache())",
      "Implementación del módulo financiero y POS: flujo completo de caja diaria, tickets multi-servicio (visits) y pagos con MercadoPago y Webpay",
      "Generación y distribución multiplataforma nativa para iOS y Android utilizando Capacitor 7",
    ],
    isCurrent: true,
  },
  {
    role: "IT Lab Assistant",
    company: "AIEP",
    period: "2023",
    description:
      "Soporte técnico integral para docentes y estudiantes, administración de infraestructura de laboratorio y gestión de cuentas institucionales Microsoft 365.",
    bullets: [],
    isCurrent: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Experiencia
          </h2>
          <p className="text-slate-400">Construcción y despliegue de sistemas en producción real.</p>
        </div>
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div
                  className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${
                    exp.isCurrent ? "bg-green-500" : "bg-slate-600"
                  }`}
                />
                {i < experiences.length - 1 && (
                  <div className="w-px flex-1 bg-slate-700/60 mt-2" />
                )}
              </div>
              <div className="pb-10">
                <div className="flex flex-wrap gap-x-2 gap-y-1 items-baseline mb-1">
                  <h3 className="text-lg font-semibold text-white">
                    {exp.role}
                  </h3>
                  <span className="text-indigo-400 font-medium">
                    @ {exp.company}
                  </span>
                  {exp.isCurrent && (
                    <span className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full">
                      Actual
                    </span>
                  )}
                </div>
                <p className="text-slate-500 text-sm mb-3">{exp.period}</p>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>
                {exp.bullets.length > 0 && (
                  <ul className="space-y-2">
                    {exp.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        className="flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0 mt-2" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
