const stackCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Supabase", "PostgreSQL", "REST APIs"],
  },
  {
    title: "DevOps / Tools",
    skills: ["Git", "Vercel", "Linux", "Playwright"],
  },
];



const Technologies = () => {
  return (
    <section id="stack" className="py-20 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Tech Stack
          </h2>
          <p className="text-slate-400">
            The tools I use to ship production systems.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {stackCategories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-4">
                {cat.title}
              </h3>
              <ul className="space-y-3">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-slate-300 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
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
