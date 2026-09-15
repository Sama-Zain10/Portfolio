import { Award, ExternalLink } from "lucide-react";
import { certifications } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="section-container py-24">
      <SectionHeading title="Certifications & Achievements" />

      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={i * 0.06}>
            <div className="flex h-full gap-4 rounded-xl border border-white/8 bg-base-850/50 p-5 transition-colors hover:border-accent-violet/30">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-accent-cyan">
                <Award size={17} />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-ink-100">
                  {cert.name}
                </h3>
                <p className="mt-0.5 text-xs text-ink-500">
                  {cert.org} · {cert.date}
                </p>
                {cert.detail && (
                  <p className="mt-2 text-sm text-ink-300">{cert.detail}</p>
                )}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent-cyan transition-colors hover:text-accent-blue"
                  >
                    View certificate <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
