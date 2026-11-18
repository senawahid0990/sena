import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Ajak kerja sama untuk konten sosial, kampanye, kelas, atau sesi speaking. Kirim pesan lewat form atau hubungi langsung.",
};

export default function KontakPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <div className="grid gap-10 md:grid-cols-[1.15fr_.85fr]">
        <Reveal>
          <span className="pill bg-lime">Kontak</span>
          <h1 className="mt-5 font-display text-4xl font-black leading-[0.98] tracking-tight sm:text-5xl">
            Ceritakan rencanamu.
          </h1>
          <p className="mt-4 max-w-xl text-base text-ink/75">
            Makin jelas tujuannya, makin cepat aku bisa bilang cocok atau tidak. Balasan biasanya
            dalam [[1–2 hari kerja]].
          </p>

          <div className="mt-8">
            <ContactForm />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <aside className="space-y-4">
            <div className="rounded-3xl border-2 border-ink bg-lime p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-ink/60">
                Langsung
              </p>
              <p className="mt-2 font-display text-lg font-black break-words">{site.email}</p>
              <p className="mt-1 text-sm text-ink/70">{site.whatsapp}</p>
            </div>

            <div className="rounded-3xl border-2 border-ink bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-ink/60">Sosial</p>
              <ul className="mt-3 space-y-2 text-sm font-semibold">
                {site.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="underline decoration-2 underline-offset-4 hover:text-orange"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border-2 border-dashed border-ink bg-cream p-6 text-sm text-ink/70">
              <p className="font-bold text-ink">Catatan untuk pemilik situs</p>
              <p className="mt-2">
                Form baru benar-benar mengirim email setelah{" "}
                <code className="rounded bg-ink/10 px-1.5 py-0.5">RESEND_API_KEY</code> dan{" "}
                <code className="rounded bg-ink/10 px-1.5 py-0.5">CONTACT_TO_EMAIL</code> diisi di
                Vercel. Tanpa itu, form menjawab dengan pesan 503 yang jelas.
              </p>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
