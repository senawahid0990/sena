import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-2xl font-black">{site.name}</p>
            <p className="mt-2 text-sm text-cream/70">{site.role}</p>
            <p className="mt-4 text-xs text-cream/65">
              Semua teks bertanda [[ ]] adalah placeholder. Ganti di{" "}
              <code className="rounded bg-cream/10 px-1.5 py-0.5 text-cream/80">content/site.ts</code>.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-cream/60">
              Halaman
            </span>
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-cream/80 hover:text-lime">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-cream/60">
              Terhubung
            </span>
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-cream/80 hover:text-lime"
                rel="noreferrer noopener"
                target="_blank"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-cream/15 pt-6 text-xs text-cream/60">
          © {new Date().getFullYear()} {site.name}. Dibuat dengan Next.js.
        </div>
      </div>
    </footer>
  );
}
