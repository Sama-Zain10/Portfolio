import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import LinkedinIcon from "./icons/LinkedinIcon";
import GithubIcon from "./icons/GithubIcon";
import { personal } from "../data/portfolio";
import CodePanel from "./CodePanel";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const, delay: 0.1 + i * 0.08 },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-grad-radial-glow"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden
      />

      <div className="section-container grid items-center gap-14 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-mono text-sm text-accent-cyan"
          >
            {personal.location} · Available for internships & junior roles
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-ink-100 sm:text-5xl lg:text-[3.4rem]"
          >
            {personal.name}
          </motion.h1>

          <motion.h2
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-3 text-xl text-ink-300 sm:text-2xl"
          >
            {personal.title}
          </motion.h2>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-500"
          >
            {personal.summary}
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="focus-ring rounded-md bg-grad-primary px-5 py-2.5 text-sm font-medium text-base-950 transition-transform hover:scale-[1.03]"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="focus-ring rounded-md border border-white/15 px-5 py-2.5 text-sm font-medium text-ink-100 transition-colors hover:border-accent-violet/50 hover:bg-white/5"
            >
              Contact me
            </a>
            <a
              href={`/${personal.resumeFile}`}
              download
              className="focus-ring inline-flex items-center gap-1.5 rounded-md border border-white/15 px-5 py-2.5 text-sm font-medium text-ink-100 transition-colors hover:border-accent-violet/50 hover:bg-white/5"
            >
              <Download size={15} /> Download CV
            </a>
          </motion.div>

          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex items-center gap-4 text-ink-500"
          >
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="focus-ring rounded-md p-2 transition-colors hover:text-ink-100"
              aria-label="GitHub"
            >
              <GithubIcon size={19} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="focus-ring rounded-md p-2 transition-colors hover:text-ink-100"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={19} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="focus-ring rounded-md p-2 transition-colors hover:text-ink-100"
              aria-label="Email"
            >
              <Mail size={19} />
            </a>
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <CodePanel />
        </div>
      </div>

      <a
        href="#about"
        className="focus-ring absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-ink-700 transition-colors hover:text-ink-300 sm:flex"
        aria-label="Scroll to About section"
      >
        <span className="font-mono text-[11px]">scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </a>
    </section>
  );
}
