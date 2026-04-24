import { motion } from "framer-motion";
import zainAbout from "@/assets/zain-about.png";
import { Brain, Code2, Database } from "lucide-react";

export const About = () => {
  const highlights = [
    { icon: Code2, title: "Full-stack web", text: "Python backends, HTML/CSS/JS frontends, responsive UIs." },
    { icon: Brain, title: "AI & ML", text: "Learning modern AI at SMIT + Cisco Networking Academy." },
    { icon: Database, title: "Cloud DB", text: "PostgreSQL on Neon, schema design and SQL." },
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
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-6 bg-gradient-primary rounded-[2.5rem] blur-3xl opacity-25" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border glow-border bg-gradient-to-br from-muted/40 to-background">
              <img
                src={zainAbout}
                alt="Muhammad Zain-ul-Abdin portrait"
                width={600}
                height={600}
                loading="lazy"
                className="w-full h-auto object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-3 text-xs font-mono">
                <span className="text-primary">$</span> whoami → zain-ul-abdin · faisalabad
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-mono">
              // About me
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
              Self-driven student at the <span className="text-gradient">edge of web & AI</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              I'm an AI & Data Science student at <span className="text-foreground">SMIT</span>{" "}
              (Saylani Mass IT Training) in Faisalabad, with hands-on experience in Python and
              full-stack web development. I've already shipped real-world projects — a
              cloud-connected Student Portal and a QR-based Restaurant System.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Currently completing my ICS at M.C. Model Higher Secondary School while actively
              growing in AI and Machine Learning.
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
