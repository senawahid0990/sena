export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];

  return (
    <div className="overflow-hidden border-y-2 border-ink bg-violet py-3 text-cream">
      <div className="flex w-max animate-marquee items-center">
        {row.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-3 whitespace-nowrap px-4 font-display text-base font-bold uppercase tracking-wide"
          >
            {item}
            <span aria-hidden className="h-2 w-2 rounded-full bg-lime" />
          </span>
        ))}
      </div>
    </div>
  );
}
