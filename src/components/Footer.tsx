import { motion, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { personal } from "../data/portfolio";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => setVisible(v > 0.15));
    return () => unsub();
  }, [scrollYProgress]);

  if (!visible) return null;

  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="focus-ring fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-base-850/90 text-ink-100 shadow-glow backdrop-blur-sm transition-colors hover:border-accent-violet/50"
      aria-label="Back to top"
    >
      <ArrowUp size={16} />
    </motion.button>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="section-container flex flex-col items-center justify-between gap-2 text-xs text-ink-700 sm:flex-row">
        <p>© {new Date().getFullYear()} {personal.name}</p>
        <p>Built with React, TypeScript & Tailwind CSS</p>
      </div>
    </footer>
  );
}
