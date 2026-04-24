import { motion } from "framer-motion";

const groups = [
  {
    title: "Frontend",
    tag: "ui / ux",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS"],
  },
  {
    title: "Backend",
    tag: "python / apis",
    items: ["Python", "FastAPI", "SQLAlchemy", "Alembic", "REST APIs", "Auth / JWT"],
  },
  {
    title: "Database",
    tag: "data layer",
    items: ["PostgreSQL", "Neon", "SQL", "Migrations", "Schema design"],
  },
  {
    title: "AI & Data Science",
    tag: "intelligence",
    items: ["NumPy", "Pandas", "scikit-learn", "LLMs", "Data viz", "ML basics"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="container">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-mono">
            // tech stack
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            Tools I build <span className="text-gradient">with</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A modern, typed, end-to-end stack — from pixels to production databases.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-3xl glass p-6 glow-border overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
                  {g.tag}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold">{g.title}</h3>
                <ul className="mt-5 space-y-2">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
