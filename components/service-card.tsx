import type { Service } from "@/content/site";

const tones = [
  "bg-lime text-ink",
  "bg-white text-ink",
  "bg-violet text-cream",
  "bg-orange text-ink",
];

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <article
      className={`flex h-full flex-col rounded-3xl border-2 border-ink p-6 shadow-[5px_5px_0_0_#14100C] transition-transform duration-200 hover:-translate-y-1 hover:-rotate-1 ${
        tones[index % tones.length]
      }`}
    >
      <span className="font-display text-sm font-black opacity-60">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-2 font-display text-2xl font-black leading-[1.05]">{service.title}</h3>
      <p className="mt-2 text-sm opacity-80">{service.tagline}</p>

      <ul className="mt-4 space-y-1.5 text-sm">
        {service.points.slice(0, 3).map((point) => (
          <li key={point} className="flex gap-2">
            <span aria-hidden className="opacity-60">
              →
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <p className="mt-auto border-t-2 border-ink/15 pt-3 text-[11px] font-bold uppercase tracking-wider opacity-70">
        {service.format}
      </p>
    </article>
  );
}
