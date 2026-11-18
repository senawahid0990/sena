import Link from "next/link";
import { site } from "@/content/site";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg font-black tracking-tight"
        >
          <span aria-hidden className="h-4 w-4 rounded-full border-2 border-ink bg-lime" />
          {site.name}
        </Link>

        <nav className="flex items-center gap-0.5 text-sm font-semibold sm:gap-1">
          {site.nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition-colors hover:bg-lime"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/kontak"
            className="ml-1 hidden rounded-full border-2 border-ink bg-orange px-4 py-2 text-ink shadow-[3px_3px_0_0_#14100C] sm:inline-flex"
          >
            Ajak kerja sama
          </Link>
        </nav>
      </div>
    </header>
  );
}
