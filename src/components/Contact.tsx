import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import LinkedinIcon from "./icons/LinkedinIcon";
import GithubIcon from "./icons/GithubIcon";
import { personal } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-container py-24">
      <SectionHeading
        title="Contact"
        description="Open to internships, junior backend roles, and collaboration."
      />

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="space-y-4">
            <a
              href={`mailto:${personal.email}`}
              className="focus-ring flex items-center gap-3 rounded-lg border border-white/8 bg-base-850/50 p-4 text-sm text-ink-300 transition-colors hover:border-accent-violet/30"
            >
              <Mail size={16} className="text-accent-cyan" /> {personal.email}
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="focus-ring flex items-center gap-3 rounded-lg border border-white/8 bg-base-850/50 p-4 text-sm text-ink-300 transition-colors hover:border-accent-violet/30"
            >
              <LinkedinIcon size={16} className="text-accent-cyan" /> LinkedIn profile
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="focus-ring flex items-center gap-3 rounded-lg border border-white/8 bg-base-850/50 p-4 text-sm text-ink-300 transition-colors hover:border-accent-violet/30"
            >
              <GithubIcon size={16} className="text-accent-cyan" /> GitHub profile
            </a>
            <div className="flex items-center gap-3 rounded-lg border border-white/8 bg-base-850/50 p-4 text-sm text-ink-300">
              <MapPin size={16} className="text-accent-cyan" /> {personal.location}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="text-xs text-ink-500">
                Name
              </label>
              <input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="focus-ring mt-1.5 w-full rounded-lg border border-white/10 bg-base-850/60 px-3.5 py-2.5 text-sm text-ink-100 placeholder:text-ink-700"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs text-ink-500">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="focus-ring mt-1.5 w-full rounded-lg border border-white/10 bg-base-850/60 px-3.5 py-2.5 text-sm text-ink-100 placeholder:text-ink-700"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs text-ink-500">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="focus-ring mt-1.5 w-full resize-none rounded-lg border border-white/10 bg-base-850/60 px-3.5 py-2.5 text-sm text-ink-100 placeholder:text-ink-700"
                placeholder="What would you like to talk about?"
              />
            </div>
            <button
              type="submit"
              className="focus-ring inline-flex items-center gap-2 rounded-md bg-grad-primary px-5 py-2.5 text-sm font-medium text-base-950 transition-transform hover:scale-[1.02]"
            >
              <Send size={15} /> Send message
            </button>
            <p className="text-xs text-ink-700">
              This form opens your email client — no messages are sent from this
              page. TODO: connect a form backend (e.g. Formspree) to send directly.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
