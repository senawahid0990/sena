export function StickerCluster() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="relative aspect-square">
        <div
          aria-hidden
          className="absolute inset-0 rotate-6 rounded-[2.5rem] border-2 border-ink bg-violet shadow-[6px_6px_0_0_#14100C]"
        />
        <div
          aria-hidden
          className="absolute inset-8 -rotate-3 rounded-[2rem] border-2 border-ink bg-lime shadow-[6px_6px_0_0_#14100C]"
        />
        <div className="absolute inset-16 grid place-items-center rounded-[1.5rem] border-2 border-ink bg-cream p-5 text-center shadow-[6px_6px_0_0_#14100C]">
          <div>
            <p className="font-display text-xl font-black leading-tight">Slot foto / video</p>
            <p className="mt-1 text-xs text-ink/60">
              Ganti blok ini dengan foto profesional atau cuplikan kontenmu.
            </p>
          </div>
        </div>
      </div>

      <span className="absolute -left-2 top-8 -rotate-6 rounded-full border-2 border-ink bg-orange px-3 py-1.5 text-[11px] font-bold text-ink shadow-[3px_3px_0_0_#14100C]">
        short-form
      </span>
      <span className="absolute -right-2 top-1/2 rotate-6 rounded-full border-2 border-ink bg-white px-3 py-1.5 text-[11px] font-bold shadow-[3px_3px_0_0_#14100C]">
        storytelling
      </span>
      <span className="absolute bottom-6 left-8 rotate-3 rounded-full border-2 border-ink bg-ink px-3 py-1.5 text-[11px] font-bold text-cream shadow-[3px_3px_0_0_#14100C]">
        community
      </span>
    </div>
  );
}
