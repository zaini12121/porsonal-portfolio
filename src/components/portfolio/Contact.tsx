import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Mail, label: "Email", href: "mailto:hello@zain.dev" },
];

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent — I'll get back to you soon!");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] glass p-10 md:p-16"
        >
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-mono">
                // say hello
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">
                Let's build something <span className="text-gradient">intelligent</span>.
              </h2>
              <p className="mt-5 text-muted-foreground max-w-md">
                Have a project, internship opportunity, or just want to chat about AI and web
                development? My inbox is open.
              </p>

              <div className="mt-8 flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noreferrer"
                    className="glass rounded-2xl p-4 transition-all hover:-translate-y-1 hover:text-primary"
                  >
                    <s.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-2xl bg-input/60 border border-border px-5 py-4 text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="w-full rounded-2xl bg-input/60 border border-border px-5 py-4 text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <input
                name="subject"
                placeholder="Subject"
                className="w-full rounded-2xl bg-input/60 border border-border px-5 py-4 text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full rounded-2xl bg-input/60 border border-border px-5 py-4 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105"
              >
                Send message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </motion.div>

        <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground border-t border-border pt-6">
          <span>© {new Date().getFullYear()} Muhammad Zain-ul-Abdin. All rights reserved.</span>
          <span className="font-mono">Built with React · FastAPI · ♥</span>
        </footer>
      </div>
    </section>
  );
};
