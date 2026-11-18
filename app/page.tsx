import Link from "next/link";
import { Faq } from "@/components/faq";
import { Marquee } from "@/components/marquee";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { StickerCluster } from "@/components/sticker-cluster";
import { site } from "@/content/site";

function isPlaceholder(value: string) {
  return value.trim().startsWith("[[");
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="overflow-hidden border-b-2 border-ink">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-14 pt-12 md:grid-cols-[1.05fr_.95fr] md:pb-20 md:pt-16">
          <Reveal>
            <div className="flex flex-wrap items-center gap-2">
              <span className="pill bg-lime">{site.role}</span>
              <span className="pill bg-white">{site.location}</span>
            </div>

            <h1 className="mt-6 font-display text-[2.6rem] font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-[4.1rem]">
              Konten yang{" "}
              <span className="inline-block -rotate-1 rounded-2xl bg-orange px-2.5 pb-1.5 text-ink">
                ditonton
              </span>{" "}
              sampai habis, lalu jadi komunitas.
            </h1>

            <p className="mt-6 max-w-xl text-base text-ink/75 sm:text-lg">{site.tagline}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/kontak" className="btn-primary">
                Ajak kerja sama
              </Link>
              <Link href="#layanan" className="btn-ghost">
                Lihat yang aku kerjakan
              </Link>
            </div>

            <dl className="mt-10 grid max-w-lg gap-3 sm:grid-cols-3">
              {site.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border-2 border-ink bg-white px-4 py-3"
                >
                  <dt className="text-[10px] font-bold uppercase tracking-wider text-ink/65">
                    {stat.label}
                  </dt>
                  <dd className="mt-0.5 font-display text-2xl font-black leading-none">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <StickerCluster />
          </Reveal>
        </div>
      </section>

      <Marquee items={site.topics} />

      {/* TENTANG */}
      <section id="tentang" className="border-b-2 border-ink bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[.95fr_1.05fr] md:py-20">
          <Reveal>
            <SectionHeading eyebrow="Tentang" title={site.about.heading} />
            <ul className="mt-6 flex flex-wrap gap-2">
              {site.about.facts.map((fact) => (
                <li key={fact} className="pill bg-cream">
                  {fact}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-4 text-base leading-relaxed text-ink/80">
              {site.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* LAYANAN */}
      <section id="layanan" className="border-b-2 border-ink">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Yang aku kerjakan"
                title="Empat cara kita bisa bekerja sama."
              />
              <Link href="/layanan" className="btn-ghost w-fit shrink-0 self-start sm:self-auto">
                Detail layanan
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {site.services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 70}>
                <ServiceCard service={service} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* KONTEN PILIHAN */}
      <section id="karya" className="border-b-2 border-ink bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="Konten pilihan"
              title="Tiga slot untuk karya terbaikmu."
              description="Struktur kartunya sudah siap. Ganti judul, kanal, hasil, dan tautannya di content/site.ts — tampilan langsung penuh tanpa perlu ubah desain."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {site.highlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <article className="flex h-full flex-col rounded-3xl border-2 border-dashed border-ink bg-cream p-5">
                  <div className="grid aspect-video place-items-center rounded-2xl border-2 border-ink/15 bg-white text-xs font-semibold text-ink/60">
                    Gambar / thumbnail konten
                  </div>
                  <p className="mt-4 text-[11px] font-bold uppercase tracking-wider text-orange-deep">
                    {item.channel}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-black leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/70">{item.result}</p>

                  {isPlaceholder(item.href) ? (
                    <span className="mt-4 text-sm font-semibold text-ink/60">
                      Tautan belum diisi
                    </span>
                  ) : (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-4 text-sm font-bold underline decoration-2 underline-offset-4 hover:text-orange"
                    >
                      Lihat kontennya →
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BUKTI SOSIAL */}
      <section className="border-b-2 border-ink bg-lime">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <Reveal>
            <SectionHeading eyebrow="Bukti" title="Angka dan kata orang." />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {site.testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 90}>
                <figure className="flex h-full flex-col rounded-3xl border-2 border-ink bg-cream p-6 shadow-[5px_5px_0_0_#14100C]">
                  <span aria-hidden className="font-display text-4xl font-black leading-none">
                    &ldquo;
                  </span>
                  <blockquote className="mt-2 text-base leading-relaxed text-ink/85">
                    {testimonial.quote}
                  </blockquote>
                  <figcaption className="mt-5 text-sm">
                    <span className="font-display font-black">{testimonial.name}</span>
                    <span className="block text-ink/60">{testimonial.role}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b-2 border-ink bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[.8fr_1.2fr] md:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="F.A.Q"
              title="Pertanyaan yang paling sering masuk."
            />
          </Reveal>
          <Reveal delay={90}>
            <Faq items={site.faq} />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange text-ink">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <Reveal>
            <div className="grid items-center gap-8 md:grid-cols-[1.2fr_.8fr]">
              <div>
                <h2 className="font-display text-3xl font-black leading-[1.05] sm:text-5xl">
                  Punya ide yang masih abstrak?
                </h2>
                <p className="mt-4 max-w-xl text-ink/80">
                  Ceritakan tujuannya. Aku balas dengan pertanyaan yang tepat, bukan
                  penawaran yang panjang.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link
                  href="/kontak"
                  className="inline-flex items-center justify-center rounded-full border-2 border-ink bg-white px-6 py-3 text-sm font-bold text-ink shadow-[4px_4px_0_0_#14100C] transition-transform hover:-translate-y-0.5"
                >
                  Kirim pesan
                </Link>
                <Link
                  href="/layanan"
                  className="inline-flex items-center justify-center rounded-full border-2 border-ink px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-ink/10"
                >
                  Baca layanan
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
