import { motion } from "framer-motion";
import { User, Code2, Home, FolderGit2, Mail } from "lucide-react";

const items = [
  { href: "#about", label: "About", icon: User },
  { href: "#skills", label: "Skills", icon: Code2 },
  { href: "#home", label: "Home", icon: Home, center: true },
  { href: "#projects", label: "Projects", icon: FolderGit2 },
  { href: "#contact", label: "Contact", icon: Mail },
];

export const MobileBottomNav = () => {
  return (
    <motion.nav
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 120 }}
      className="md:hidden fixed bottom-4 inset-x-4 z-50"
      aria-label="Mobile navigation"
    >
      <ul className="glass shadow-card-elegant rounded-full flex items-center justify-around px-3 py-2 relative">
        {items.map((item, i) => {
          const Icon = item.icon;
          if (item.center) {
            return (
              <li key={item.href} className="relative -mt-8">
                <motion.a
                  href={item.href}
                  aria-label={item.label}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-primary shadow-glow text-primary-foreground ring-4 ring-background"
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              </li>
            );
          }
          return (
            <li key={item.href}>
              <motion.a
                href={item.href}
                aria-label={item.label}
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.15, y: -2 }}
                className="flex flex-col items-center justify-center gap-0.5 px-3 py-1.5 text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="h-5 w-5" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </motion.a>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
};
