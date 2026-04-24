import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    period: "2024 — Present",
    title: "AI & Data Science",
    org: "SMIT (Saylani Mass IT Training)",
    text: "Studying Python, machine learning, data analysis with Pandas/NumPy, and model deployment.",
  },
  {
    icon: GraduationCap,
    period: "2023 — 2024",
    title: "Web Development",
    org: "SMIT (Saylani Mass IT Training)",
    text: "Mastered HTML, CSS, JavaScript, React, and modern tooling for production-grade UIs.",
  },
  {
    icon: Briefcase,
    period: "2024 — Present",
    title: "Freelance Developer",
    org: "Self-employed",
    text: "Delivering React frontends and FastAPI + PostgreSQL backends for small business clients.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="relative py-28">
      <div className="container">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-mono">
            // journey
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            Education & <span className="text-gradient">Experience</span>
          </h2>
        </div>

        <div className="mt-14 relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent md:left-1/2" />

          <div className="space-y-10">
            {timeline.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative md:grid md:grid-cols-2 md:gap-16 ${
                  i % 2 === 0 ? "" : "md:[&>div:first-child]:col-start-2"
                }`}
              >
                <div className="pl-16 md:pl-0 md:pr-8 md:text-right relative">
                  <div className="absolute left-4 md:left-auto md:right-[-36px] top-2 h-4 w-4 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />
                  <div className="glass rounded-2xl p-6 glow-border inline-block md:block">
                    <div className="flex items-center gap-2 md:justify-end">
                      <t.icon className="h-4 w-4 text-primary" />
                      <span className="text-xs font-mono text-muted-foreground">{t.period}</span>
                    </div>
                    <h3 className="mt-2 font-display text-xl font-semibold">{t.title}</h3>
                    <div className="text-sm text-primary">{t.org}</div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.text}</p>
                  </div>
                </div>
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
