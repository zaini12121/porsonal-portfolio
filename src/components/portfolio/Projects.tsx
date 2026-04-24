import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "NeuraChat — AI Assistant",
    desc: "Full-stack chat app with LLM streaming responses, conversation memory and markdown rendering.",
    tags: ["React", "FastAPI", "OpenAI", "PostgreSQL"],
    gradient: "from-primary/30 to-secondary/30",
  },
  {
    title: "DataPulse — Analytics Dashboard",
    desc: "Real-time analytics dashboard consuming a FastAPI backend with SQLAlchemy + Alembic migrations.",
    tags: ["TypeScript", "React", "FastAPI", "Neon"],
    gradient: "from-secondary/30 to-accent/30",
  },
  {
    title: "SpamSense — ML Classifier",
    desc: "Trained a text classifier with scikit-learn, served via FastAPI endpoint, demoed in a React UI.",
    tags: ["Python", "scikit-learn", "Pandas", "FastAPI"],
    gradient: "from-accent/30 to-primary/30",
  },
  {
    title: "SMIT Study Hub",
    desc: "Student resource portal with auth, role-based access, and a content management layer.",
    tags: ["React", "Tailwind", "PostgreSQL", "JWT"],
    gradient: "from-primary/30 to-accent/30",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative py-28">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-mono">
              // selected work
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
              Projects that <span className="text-gradient">ship</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            A mix of web apps, AI experiments and data-driven tools. More on GitHub.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative rounded-3xl overflow-hidden glass glow-border"
            >
              <div
                className={`aspect-[16/10] relative overflow-hidden bg-gradient-to-br ${p.gradient}`}
              >
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-mono text-xs text-foreground/60 tracking-widest">
                    0{i + 1} / 0{projects.length}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>

              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-semibold">{p.title}</h3>
                  <div className="flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    <button className="rounded-full glass p-2 hover:text-primary transition-colors" aria-label="GitHub">
                      <Github className="h-4 w-4" />
                    </button>
                    <button className="rounded-full bg-gradient-primary p-2 text-primary-foreground" aria-label="Open">
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-muted/40 px-3 py-1 text-[11px] font-mono text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
