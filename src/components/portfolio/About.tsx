import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpg";
import { Brain, Code2, Database } from "lucide-react";

export const About = () => {
  const highlights = [
    { icon: Code2, title: "Full-stack web", text: "React + TypeScript frontends, FastAPI backends." },
    { icon: Brain, title: "AI & ML", text: "Building models and integrating LLMs into products." },
    { icon: Database, title: "Data engineering", text: "PostgreSQL, Neon, SQLAlchemy, Alembic migrations." },
  ];

  return (
    <section id="about" className="relative py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-14 items-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary rounded-[2rem] blur-2xl opacity-30" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border glow-border">
              <img
                src={portrait}
                alt="Muhammad Zain-ul-Abdin portrait"
                width={768}
                height={960}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>

          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-mono">
              // About me
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
              Engineer at the <span className="text-gradient">edge of web & AI</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              I'm a student at Saylani Mass IT Training (SMIT) specializing in Web Development
              and Artificial Intelligence & Data Science. I love building clean, fast interfaces
              and backing them with intelligent APIs — from token-based auth to LLM pipelines.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              My current focus: shipping production-grade FastAPI services with PostgreSQL on
              Neon, clean React UIs, and practical ML experiments.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="glass rounded-2xl p-5 transition-transform hover:-translate-y-1"
                >
                  <h.icon className="h-6 w-6 text-primary" />
                  <div className="mt-3 font-display font-semibold">{h.title}</div>
                  <p className="mt-1 text-xs text-muted-foreground">{h.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
