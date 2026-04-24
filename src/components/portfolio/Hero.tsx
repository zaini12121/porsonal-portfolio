import { motion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles, Download, Eye } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import zainHero from "@/assets/zain-hero.png";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-screen"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Available for internships & freelance
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95]"
            >
              Muhammad <br />
              <span className="text-gradient animate-gradient">Zain-ul-Abdin</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
            >
              AI & Data Science student at{" "}
              <span className="text-foreground font-medium">SMIT</span> · Python Developer ·
              Full-Stack Web Developer. I build real-world apps with Python, JavaScript and
              cloud PostgreSQL.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground"
            >
              <MapPin className="h-4 w-4 text-primary" />
              Faisalabad, Pakistan
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 font-medium text-foreground transition-colors hover:border-primary/60"
              >
                Get in touch
              </a>
              <a
                href="/Muhammad_Zain_CV.docx"
                download
                className="group inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 font-medium text-foreground transition-colors hover:border-primary/60"
              >
                <Download className="h-4 w-4 text-primary transition-transform group-hover:translate-y-0.5" />
                Download CV
              </a>
              <a
                href="/Muhammad_Zain_CV.docx"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 font-medium text-foreground transition-colors hover:border-primary/60"
              >
                <Eye className="h-4 w-4 text-primary" />
                View CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 grid grid-cols-3 max-w-md gap-6 border-t border-border/50 pt-8"
            >
              {[
                { n: "3+", l: "Real projects" },
                { n: "SMIT", l: "AI & DS '25" },
                { n: "ICS", l: "In progress" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl md:text-3xl font-bold text-gradient">
                    {s.n}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute inset-0 -m-6 rounded-[3rem] bg-gradient-primary blur-3xl opacity-30 animate-pulse-glow" />
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
              <img
                src={zainHero}
                alt="Muhammad Zain-ul-Abdin"
                width={600}
                height={800}
                className="relative w-full h-auto object-contain drop-shadow-2xl"
                style={{ filter: "drop-shadow(0 20px 40px hsl(var(--primary) / 0.25))" }}
              />
            </div>
            {/* floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-6 -left-4 glass rounded-2xl px-4 py-2.5 text-xs font-mono"
            >
              <div className="text-primary">● Python</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute bottom-20 -right-2 glass rounded-2xl px-4 py-2.5 text-xs font-mono"
            >
              <div className="text-primary">{"{ } Full Stack"}</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              className="absolute top-1/2 -right-6 glass rounded-2xl px-4 py-2.5 text-xs font-mono"
            >
              <div className="text-primary">AI / ML</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* floating orbs */}
      <div className="pointer-events-none absolute top-1/4 right-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-float" />
      <div
        className="pointer-events-none absolute bottom-10 left-1/4 h-64 w-64 rounded-full bg-secondary/20 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
    </section>
  );
};
