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
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setPhase("deleting"), 1400);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, roleIndex]);

  const particles = Array.from({ length: 14 });

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

      {/* animated drifting particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((_, i) => {
          const left = (i * 37) % 100;
          const delay = (i % 7) * 0.6;
          const dur = 8 + (i % 5) * 2;
          const size = 4 + (i % 3) * 2;
          return (
            <motion.span
              key={i}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "-10%", opacity: [0, 0.7, 0] }}
              transition={{ duration: dur, delay, repeat: Infinity, ease: "linear" }}
              style={{ left: `${left}%`, width: size, height: size }}
              className="absolute bottom-0 rounded-full bg-primary/60 blur-[1px]"
            />
          );
        })}
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground shadow-glow/30"
            >
              <motion.span
                animate={{ rotate: [0, 15, -10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="h-3.5 w-3.5 text-primary" />
              </motion.span>
              Available for internships & freelance
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary/70 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
              }}
              className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95] text-center"
            >
              {["Muhammad", "Zain-ul-Abdin"].map((word, idx) => (
                <span key={word} className="inline-block">
                  {idx === 1 && <br />}
                  {word.split("").map((ch, i) => (
                    <motion.span
                      key={`${word}-${i}`}
                      variants={{
                        hidden: { opacity: 0, y: 30, rotateX: -90 },
                        visible: { opacity: 1, y: 0, rotateX: 0 },
                      }}
                      transition={{ type: "spring", damping: 14, stiffness: 140 }}
                      className={`inline-block ${idx === 1 ? "text-gradient animate-gradient" : ""}`}
                    >
                      {ch}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h1>

            <div className="mt-5 sm:mt-6 h-9 sm:h-10 flex items-center justify-center tracking-wide">
              <span className="text-lg md:text-xl font-semibold text-gradient animate-gradient leading-none">
                {displayed}
              </span>
              <span
                className="ml-1 inline-block w-[2px] h-5 md:h-6 bg-primary align-middle animate-pulse"
                aria-hidden="true"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
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
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground"
            >
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <MapPin className="h-4 w-4 text-primary" />
              </motion.span>
              Faisalabad, Pakistan
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-10 flex flex-wrap gap-4 justify-center"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 font-medium text-primary-foreground shadow-glow overflow-hidden"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 font-medium text-foreground transition-colors hover:border-primary/60"
              >
                Get in touch
              </motion.a>
              <motion.a
                href="/Muhammad_Zain_CV.docx"
                download
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 font-medium text-foreground transition-colors hover:border-primary/60"
              >
                <motion.span
                  animate={{ y: [0, 2, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Download className="h-4 w-4 text-primary" />
                </motion.span>
                Download CV
              </motion.a>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15, delayChildren: 0.9 } },
              }}
              className="mt-12 grid grid-cols-3 max-w-md mx-auto gap-6 border-t border-border/50 pt-8"
            >
              {[
                { n: "3+", l: "Real projects" },
                { n: "SMIT", l: "AI & DS '25" },
                { n: "ICS", l: "In progress" },
              ].map((s) => (
                <motion.div
                  key={s.l}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  transition={{ type: "spring", damping: 12, stiffness: 150 }}
                  className="cursor-default"
                >
                  <div className="font-display text-2xl md:text-3xl font-bold text-gradient animate-gradient">
                    {s.n}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* floating orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-1/4 right-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-10 left-1/4 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl"
      />

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[10px] text-muted-foreground"
      >
        <span className="uppercase tracking-[0.2em]">Scroll</span>
        <div className="h-8 w-[1.5px] bg-gradient-to-b from-primary to-transparent overflow-hidden">
          <motion.div
            animate={{ y: [-32, 32] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-3 w-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};
