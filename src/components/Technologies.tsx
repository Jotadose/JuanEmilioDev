const stackCategories = [
  {
    title: "Frontend & Mobile",
    skills: ["Next.js 15 (App Router)", "React 19", "TypeScript", "Tailwind CSS", "Capacitor 7 (iOS/Android)"],
  },
  {
    title: "Backend & Base de Datos",
    skills: ["PostgreSQL (RLS Avanzado)", "Supabase", "Node.js", "Python (Flask / Data Science)", "WebSockets / Realtime"],
  },
  {
    title: "Integraciones & Producción",
    skills: ["MercadoPago & Webpay", "Firebase Cloud Messaging", "Playwright (E2E) & Vitest", "Vercel & Git CI/CD"],
  },
];

const Technologies = () => {
  return (
    <section id="stack" className="py-20 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            Habilidades Comprobadas
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Stack Tecnológico
          </h2>
          <p className="text-slate-400">
            Herramientas y tecnologías que utilizo para diseñar, construir y operar software en producción.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {stackCategories.map((cat) => (
            <div key={cat.title} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <h3 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-4">
                {cat.title}
              </h3>
              <ul className="space-y-3">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-slate-300 text-sm font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
