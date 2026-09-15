import { education } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="section-container py-24">
      <SectionHeading title="Education" />

      <Reveal>
        <div className="rounded-xl border border-white/8 bg-base-850/50 p-6 sm:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-lg font-semibold text-ink-100">
              {education.degree}
            </h3>
            <span className="font-mono text-xs text-accent-cyan">{education.date}</span>
          </div>
          <p className="mt-1 text-sm text-ink-500">{education.university}</p>

          <div className="mt-5 flex flex-wrap gap-6 text-sm">
            <div>
              <p className="font-mono text-xs text-ink-700">GPA</p>
              <p className="mt-1 text-ink-100">{education.gpa}</p>
            </div>
          </div>

          <div className="mt-5">
            <p className="font-mono text-xs text-ink-700">Key coursework</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {education.coursework.map((course) => (
                <span
                  key={course}
                  className="rounded-md border border-white/8 bg-white/5 px-2.5 py-1 text-xs text-ink-300"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
