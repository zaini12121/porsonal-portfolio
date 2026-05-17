import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import portfolioPreview from "@/assets/portfolio-preview.webp";
import paperGenaiPreview from "@/assets/paper-genai.png";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  status: string;
  gradient: string;
  codeUrl?: string;
  liveUrl?: string;
  image?: string;
};

const liveProjects: Project[] = [
  {
    title: "Paper GenAI",
    desc: "An AI-powered tool designed to streamline document and paper generation using advanced language models.",
    tags: ["React", "AI", "Web App"],
    status: "Live",
    gradient: "from-primary/30 to-secondary/30",
    liveUrl: "https://paper-genai.lovable.app",
    image: paperGenaiPreview,
  },
  {
    title: "Speed Lab",
    desc: "A feature-rich typing speed testing and network diagnostic tool built for performance tracking.",
    tags: ["React", "TypeScript", "Vercel"],
    status: "Live",
    gradient: "from-secondary/30 to-accent/30",
    liveUrl: "https://speed-lab.vercel.app",
  },
  {
    title: "Zainulabdin Project",
    desc: "Modern personal project showcase and portfolio with interactive UI and animations.",
    tags: ["HTML/CSS/JS", "Web Dev", "Vercel"],
    status: "Live",
    gradient: "from-accent/30 to-primary/30",
    liveUrl: "https://zainulabdin-project.vercel.app",
    image: portfolioPreview,
  },
];

const privateProjects: Project[] = [
  {
    title: "Student Portal",
    desc: "Dual-role login (Admin & Student) with separate dashboards, attendance system, monthly fee tracker (paid/unpaid) and application submissions. Powered by a cloud PostgreSQL database on Neon.",
    tags: ["Python", "HTML/CSS/JS", "SQL", "Neon DB"],
    status: "Private Code",
    gradient: "from-primary/20 to-accent/20",
    codeUrl: "https://github.com/zaini12121",
  },
  {
    title: "QR Menu System",
    desc: "Customers scan a QR code to open a digital restaurant menu, place online orders and book tables — all backed by a SQL database.",
    tags: ["Python", "HTML/CSS/JS", "SQL"],
    status: "Private Code",
    gradient: "from-muted/50 to-secondary/20",
    codeUrl: "https://github.com/zaini12121",
  },
];

const ProjectCard = ({ p, i }: { p: Project; i: number }) => (
  <motion.article
    key={p.title}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: i * 0.08 }}
    className="group relative rounded-3xl overflow-hidden glass glow-border"
  >
    <div className={`aspect-[16/10] relative overflow-hidden bg-gradient-to-br ${p.gradient}`}>
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
            <div className="font-mono text-xs text-foreground/60 tracking-widest uppercase">
              {p.status}
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
          {p.codeUrl && (
            <a
              href={p.codeUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full glass p-2 hover:text-primary transition-colors flex items-center justify-center"
              aria-label="View source code"
              title="View Source Code"
            >
              <Code2 className="h-4 w-4" />
            </a>
          )}
          {p.liveUrl && (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gradient-primary p-2 text-primary-foreground flex items-center justify-center"
              aria-label="Open live site"
              title="Open Live Site"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
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
);

export const Projects = () => {
  return (
    <section id="projects" className="relative py-28">
      <div className="container">
        
        {/* Live Projects Section */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-mono">
              // Live Projects
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
              Projects that <span className="text-gradient">ship</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Web applications and tools that are currently live and in production.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {liveProjects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>

        {/* Private Projects Section */}
        <div className="mt-28 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-mono">
              // Private Projects
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
              Behind the <span className="text-gradient">scenes</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Backend systems and academic projects where only the source code is accessible.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {privateProjects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>

      </div>
    </section>
  );
};
