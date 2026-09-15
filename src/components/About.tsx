import { aboutFacts, personal } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-container py-24">
      <SectionHeading title="About" />

      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <Reveal delay={0.05}>
          <p className="text-lg leading-relaxed text-ink-300">
            {personal.summary}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <dl className="grid grid-cols-2 gap-4">
            {aboutFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-lg border border-white/8 bg-base-850/60 p-4"
              >
                <dt className="font-mono text-xs text-ink-700">{fact.label}</dt>
                <dd className="mt-1 text-sm text-ink-100">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
