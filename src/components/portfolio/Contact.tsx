import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { toast } from "sonner";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.38.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.57.23 2.73.11 3.02.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.68.41.35.78 1.05.78 2.12v3.14c0 .31.21.68.8.56A10.5 10.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .78 0 1.74v20.52C0 23.22.79 24 1.77 24h20.45C23.2 24 24 23.22 24 22.26V1.74C24 .78 23.2 0 22.22 0z" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
  </svg>
);

const socials = [
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/zaini12121" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/zain-ul-abdin-281985378" },
  { icon: Mail, label: "Email", href: "mailto:zzawar521@gmail.com" },
  { icon: FacebookIcon, label: "Facebook", href: "https://facebook.com" },
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com" },
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
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105"
                >
                  Send message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
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
