import Reveal from "./Reveal";

export default function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <h2 className="font-display text-3xl font-semibold text-ink-100 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-ink-500">{description}</p>
      )}
    </Reveal>
  );
}
