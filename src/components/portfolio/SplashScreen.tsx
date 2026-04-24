import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

interface SplashScreenProps {
  onFinish: () => void;
}

export const SplashScreen = ({ onFinish }: SplashScreenProps) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
        >
          {/* animated background orbs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
            <div
              className="absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full bg-secondary/20 blur-3xl animate-pulse-glow"
              style={{ animationDelay: "1s" }}
            />
          </div>
          <div className="absolute inset-0 grid-bg opacity-30" />

          {/* logo */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.4, opacity: 0, rotate: -15 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* glow ring */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.3, 0.6] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 -m-8 rounded-full bg-gradient-primary blur-3xl"
              />
              <motion.img
                src={logo}
                alt="Muhammad Zain-ul-Abdin logo"
                width={180}
                height={180}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-36 w-36 sm:h-44 sm:w-44 object-contain drop-shadow-[0_0_30px_hsl(var(--primary)/0.6)]"
              />
            </motion.div>

            {/* name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 text-center"
            >
              <div className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
                <span className="text-gradient">MUHAMMAD ZAIN-UL-ABDIN</span>
              </div>
              <div className="mt-2 text-xs sm:text-sm text-muted-foreground font-mono tracking-widest uppercase">
                Web Dev · AI · Data Science
              </div>
            </motion.div>

            {/* loader bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 h-[2px] w-48 overflow-hidden rounded-full bg-muted/40"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-1/2 bg-gradient-primary"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
