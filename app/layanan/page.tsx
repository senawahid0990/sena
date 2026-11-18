import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Empat cara kerja sama: konten sosial, kampanye, kelas & workshop, dan speaker. Lihat detail, format, dan cara mulai.",
};

export default function LayananPage() {
  return (
    <>
      <section className="border-b-2 border-ink">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <Reveal>
            <span className="pill bg-lime">Layanan</span>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-black leading-[0.98] tracking-tight sm:text-6xl">
              Kerja sama yang jelas, dari brief sampai evaluasi.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-ink/75 sm:text-lg">
              Tidak ada paket misterius. Tiap layanan punya cakupan, format, dan keluaran yang
              bisa kamu cek sebelum memutuskan.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b-2 border-ink bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <div className="space-y-6">
            {site.services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 60}>
                <article className="grid gap-6 rounded-3xl border-2 border-ink bg-cream p-6 shadow-[5px_5px_0_0_#14100C] md:grid-cols-[1fr_1fr] md:p-8">
                  <div>
                    <span className="font-display text-sm font-black text-orange-deep">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-1 font-display text-3xl font-black leading-tight">
                      {service.title}
                    </h2>
                    <p className="mt-2 font-semibold text-ink/80">{service.tagline}</p>
                    <p className="mt-4 text-sm leading-relaxed text-ink/70">{service.blurb}</p>
                    <p className="mt-5 inline-flex rounded-full border-2 border-ink bg-white px-3.5 py-1.5 text-xs font-bold">
                      {service.format}
                    </p>
                  </div>

                  <div className="rounded-2xl border-2 border-ink bg-white p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-ink/65">
                      Yang kamu dapat
                    </p>
                    <ul className="mt-3 space-y-2 text-sm">
                      {service.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span aria-hidden className="text-orange">
                            ●
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-2 border-ink bg-lime">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <Reveal>
            <SectionHeading eyebrow="Cara kerja" title="Empat langkah, tanpa kejutan." />
          </Reveal>

          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {site.process.map((step, index) => (
              <Reveal key={step.step} delay={index * 70}>
                <li className="flex h-full flex-col rounded-3xl border-2 border-ink bg-cream p-5">
                  <span className="font-display text-3xl font-black leading-none text-orange-deep">
                    {step.step}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-black">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-violet text-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-14 md:flex-row md:items-center md:justify-between md:py-16">
          <div>
            <h2 className="font-display text-3xl font-black leading-tight sm:text-4xl">
              Mau mulai dari yang paling kecil?
            </h2>
            <p className="mt-2 max-w-xl text-cream/80">
              Satu sesi konsultasi 30 menit sudah cukup untuk tahu langkah berikutnya.
            </p>
          </div>
          <Link href="/kontak" className="btn-primary shrink-0">
            Ajak kerja sama
          </Link>
        </div>
      </section>
    </>
  );
}
