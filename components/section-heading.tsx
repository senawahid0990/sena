export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "dark" | "light";
}) {
  const muted = tone === "light" ? "text-cream/80" : "text-ink/70";

  return (
    <div className="max-w-2xl">
      <span className="pill bg-lime text-ink">{eyebrow}</span>
      <h2 className="mt-4 font-display text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? <p className={`mt-3 text-base ${muted}`}>{description}</p> : null}
    </div>
  );
}
