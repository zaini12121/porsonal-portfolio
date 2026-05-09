import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, MapPin, Sparkles, Download, Eye } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const roles = [
    "AI & Data Science Student",
    "AI-Driven Developer",
    "Web Designer",
    "Frontend Developer",
    "Backend Developer",
    "Vibe Coder",
    "Full-Stack Developer",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2200);
    return () => clearInterval(id);
  }, []);

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
        <div className="max-w-4xl mx-auto text-center">
          {/* text */}
          <div className="flex flex-col items-center">
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
              className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95] text-center"
            >
              Muhammad <br />
              <span className="text-gradient animate-gradient">Zain-ul-Abdin</span>
            </motion.h1>

            <div className="mt-5 sm:mt-6 h-9 sm:h-10 flex items-center justify-center overflow-hidden tracking-wide">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="text-lg md:text-xl font-semibold text-gradient animate-gradient leading-none"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed text-center"
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
              className="mt-10 flex flex-wrap gap-4 justify-center"
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 grid grid-cols-3 max-w-md mx-auto gap-6 border-t border-border/50 pt-8"
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
