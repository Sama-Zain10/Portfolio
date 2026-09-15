import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";
import type { ProjectItem } from "../types";
import { projects } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function ProjectVisual({ name }: { name: string }) {
  return (
    <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-lg border border-white/8 bg-base-900">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-grad-radial-glow opacity-70" aria-hidden />
      <span className="relative font-mono text-sm text-ink-500">{`</>`} {name}</span>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8">
      <SectionHeading
        title="Projects"
        description="Backend-focused builds from training programs and independent practice."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.07}>
            <motion.button
              type="button"
              onClick={() => setSelected(project)}
              whileHover={{ y: -4 }}
              className="focus-ring flex h-full w-full flex-col rounded-2xl border border-white/8 bg-base-850/50 p-6 text-left transition-colors hover:border-accent-violet/30 hover:bg-base-850/80"
            >
              <ProjectVisual name={project.name} />
              <h3 className="mt-5 font-display text-lg font-semibold text-ink-100">
                {project.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-white/8 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-ink-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-5 text-xs text-accent-cyan">View details →</div>
            </motion.button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-base-950/80 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-xl border border-white/10 bg-base-900 p-6"
              role="dialog"
              aria-modal="true"
              aria-label={selected.name}
            >
              <div className="flex items-start justify-between">
                <h3 className="font-display text-lg font-semibold text-ink-100">
                  {selected.name}
                </h3>
                <button
                  onClick={() => setSelected(null)}
                  className="focus-ring rounded-md p-1 text-ink-500 hover:text-ink-100"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
              <ul className="mt-4 space-y-2">
                {selected.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-ink-300">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-700" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {selected.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-white/8 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-ink-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {selected.github && (
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex items-center gap-1.5 rounded-md border border-white/15 px-4 py-2 text-sm text-ink-100 hover:border-accent-violet/50 hover:bg-white/5"
                  >
                    <GithubIcon size={15} /> Code
                  </a>
                )}
                {selected.githubPlaceholder && (
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-white/15 px-4 py-2 text-sm text-ink-700">
                    <GithubIcon size={15} /> TODO: Add GitHub link
                  </span>
                )}
                {selected.live && (
                  <a
                    href={selected.live}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex items-center gap-1.5 rounded-md bg-grad-primary px-4 py-2 text-sm font-medium text-base-950"
                  >
                    <ExternalLink size={15} /> Live demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
