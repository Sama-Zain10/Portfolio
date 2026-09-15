import { motion } from "framer-motion";
import { skillCategories } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section-container py-24">
      <SectionHeading
        title="Skills"
        description="Technologies and practices from coursework, training programs, and side projects."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => (
          <Reveal key={category.name} delay={i * 0.06}>
            <div className="h-full rounded-xl border border-white/8 bg-base-850/50 p-5 transition-colors hover:border-accent-violet/30">
              <h3 className="font-display text-sm font-semibold text-ink-100">
                {category.name}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ y: -2 }}
                    className="rounded-md border border-white/8 bg-white/5 px-2.5 py-1 font-mono text-xs text-ink-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
