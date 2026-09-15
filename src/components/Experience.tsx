import { experience } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section-container py-24">
      <SectionHeading title="Experience & Training" />

      <div className="relative border-l border-white/10 pl-8">
        {experience.map((item, i) => (
          <Reveal key={item.title + item.org} delay={i * 0.08} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-grad-primary" />
            <p className="font-mono text-xs text-accent-cyan">{item.date}</p>
            <h3 className="mt-1 font-display text-lg font-semibold text-ink-100">
              {item.title}
            </h3>
            <p className="text-sm text-ink-500">
              {item.org} · {item.location}
            </p>
            <ul className="mt-3 space-y-2">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-ink-300">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-700" />
                  {bullet}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
