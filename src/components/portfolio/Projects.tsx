import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import portfolioPreview from "@/assets/portfolio-preview.webp";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  status: string;
  gradient: string;
  href: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "Student Portal",
    desc: "Dual-role login (Admin & Student) with separate dashboards, attendance system, monthly fee tracker (paid/unpaid) and application submissions. Powered by a cloud PostgreSQL database on Neon.",
    tags: ["Python", "HTML/CSS/JS", "SQL", "Neon DB"],
    status: "Complete",
    gradient: "from-primary/30 to-secondary/30",
    href: "https://github.com/zaini12121",
  },
  {
    title: "QR Menu System",
    desc: "Customers scan a QR code to open a digital restaurant menu, place online orders and book tables — all backed by a SQL database.",
    tags: ["Python", "HTML/CSS/JS", "SQL"],
    status: "Complete",
    gradient: "from-secondary/30 to-accent/30",
    href: "https://github.com/zaini12121",
  },
  {
    title: "Personal Portfolio",
    desc: "Responsive dark-theme portfolio with scroll animations, built with vanilla HTML5, CSS3 and JavaScript. Live on GitHub Pages.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    status: "Complete",
    gradient: "from-accent/30 to-primary/30",
    href: "https://mzainulabdin.lovable.app",
    image: portfolioPreview,
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
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 grid-bg opacity-40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="font-mono text-xs text-foreground/60 tracking-widest">
                        0{i + 1} / 0{projects.length}
                      </div>
                    </div>
                  </>
                )}
                <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-[10px] font-mono text-primary">
                  ✓ {p.status}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>

              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-semibold">{p.title}</h3>
                  <div className="flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full glass p-2 hover:text-primary transition-colors"
                      aria-label="View source"
                    >
                      <Code2 className="h-4 w-4" />
                    </a>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-gradient-primary p-2 text-primary-foreground"
                      aria-label="Open"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
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
