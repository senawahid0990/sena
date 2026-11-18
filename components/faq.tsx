export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="overflow-hidden rounded-3xl border-2 border-ink bg-cream">
      {items.map((item) => (
        <details key={item.q} className="group border-b-2 border-ink/10 last:border-b-0">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold [&::-webkit-details-marker]:hidden">
            <span>{item.q}</span>
            <span
              aria-hidden
              className="grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-ink bg-lime text-sm transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="px-5 pb-5 text-sm leading-relaxed text-ink/75">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
