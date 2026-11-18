/**
 * Semua teks website ada di file ini.
 * Placeholder ditandai [[ ... ]] — ganti dengan data asli, lalu simpan.
 * Web akan otomatis ter-update (mode dev) atau setelah build ulang (produksi).
 */

export type Social = { label: string; href: string };

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  blurb: string;
  points: string[];
  format: string;
};

export type Highlight = {
  title: string;
  channel: string;
  result: string;
  href: string;
};

export const site = {
  name: "[[SENA]]",
  role: "Marketing & Content Creator",
  location: "[[Kota, Indonesia]]",
  tagline:
    "Aku bantu brand, komunitas, dan kreator mengubah ide jadi konten yang ditonton sampai habis — lalu berubah jadi komunitas yang ikut bicara.",

  email: "[[halo@domainmu.com]]",
  whatsapp: "[[+62 8xx-xxxx-xxxx]]",
  socials: [
    { label: "Instagram", href: "[[https://instagram.com/username]]" },
    { label: "TikTok", href: "[[https://tiktok.com/@username]]" },
    { label: "LinkedIn", href: "[[https://linkedin.com/in/username]]" },
  ] satisfies Social[],

  nav: [
    { label: "Beranda", href: "/" },
    { label: "Layanan", href: "/layanan" },
    { label: "Kontak", href: "/kontak" },
  ],

  topics: [
    "strategi konten",
    "video pendek",
    "copywriting",
    "kampanye",
    "membangun komunitas",
    "personal branding",
    "riset audiens",
    "kolaborasi brand",
  ],

  about: {
    heading: "Bukan cuma bikin konten — aku bantu orang jatuh cinta sama ceritanya.",
    paragraphs: [
      "[[Ceritakan 2–3 baris tentang siapa kamu, sudah berapa lama bergerak di konten, dan kenapa kamu peduli pada cerita brand.]]",
      "Biasanya aku masuk di titik paling ribet: ide masih abstrak, tim masih kecil, dan target kelihatan jauh. Aku bantu dari riset audiens, menyusun pesan, produksi, sampai evaluasi angka — supaya konten bukan cuma ramai, tapi jelas mau ke mana.",
    ],
    facts: [
      "[[3+ tahun]] menangani konten organik",
      "[[20+]] brand & komunitas dibantu",
      "Berbasis di [[kota]], kerja remote",
    ],
  },

  services: [
    {
      slug: "konten-sosial",
      title: "Konten sosial",
      tagline: "Dari ide jadi konten yang ditonton sampai habis.",
      blurb:
        "Riset hook, produksi short-form, dan kalender posting yang konsisten — bukan sekadar ikut tren.",
      points: [
        "Riset audiens & 10 hook awal",
        "Produksi 8–12 konten short-form",
        "Kalender posting + caption",
        "Laporan performa bulanan",
      ],
      format: "Retainer bulanan · 8–12 konten",
    },
    {
      slug: "kampanye",
      title: "Kampanye & peluncuran",
      tagline: "Satu pesan kunci, dieksekusi rapi di semua kanal.",
      blurb:
        "Konsep kampanye, pesan kunci, dan eksekusi lintas kanal untuk produk atau program baru.",
      points: [
        "Big idea & pesan kunci",
        "Peta kanal & jadwal tayang",
        "Aset utama + turunannya",
        "Evaluasi setelah kampanye",
      ],
      format: "Proyek · 3–6 minggu",
    },
    {
      slug: "kelas-workshop",
      title: "Kelas & workshop",
      tagline: "Materi yang bikin peserta langsung praktik.",
      blurb:
        "Kelas konten untuk tim, komunitas, atau kampus — dengan latihan dan contoh dari kerja nyata.",
      points: [
        "Materi disesuaikan level peserta",
        "Sesi 90–180 menit + latihan",
        "Template & lembar kerja",
        "Rekaman & sertifikat [[opsional]]",
      ],
      format: "Sesi tunggal atau 4 pertemuan",
    },
    {
      slug: "speaker",
      title: "Speaker & moderator",
      tagline: "Bicara soal konten tanpa jargon.",
      blurb:
        "Pembicara atau moderator untuk acara brand, komunitas, kampus, dan webinar.",
      points: [
        "Topik: [[strategi konten, personal branding]]",
        "Format: talk, panel, workshop",
        "Durasi 30–60 menit",
        "Slide & handout untuk peserta",
      ],
      format: "Per sesi · online atau offline",
    },
  ] satisfies Service[],

  highlights: [
    {
      title: "[[Judul konten 1]]",
      channel: "[[Instagram Reels]]",
      result: "[[120rb views dalam 3 hari — ganti dengan angka aslimu]]",
      href: "[[https://link-konten-1]]",
    },
    {
      title: "[[Judul konten 2]]",
      channel: "[[TikTok]]",
      result: "[[Ganti dengan hasil yang bisa kamu pertanggungjawabkan]]",
      href: "[[https://link-konten-2]]",
    },
    {
      title: "[[Judul konten 3]]",
      channel: "[[LinkedIn / YouTube]]",
      result: "[[Ganti dengan hasil yang bisa kamu pertanggungjawabkan]]",
      href: "[[https://link-konten-3]]",
    },
  ] satisfies Highlight[],

  stats: [
    { value: "[[24rb]]", label: "[[followers gabungan]]" },
    { value: "[[1,2jt]]", label: "[[total views]]" },
    { value: "[[180+]]", label: "[[peserta kelas]]" },
  ],

  testimonials: [
    {
      quote:
        "[[Kutipan testimoni pertama — satu atau dua kalimat spesifik tentang hasil kerja sama.]]",
      name: "[[Nama]]",
      role: "[[Peran, Nama Brand]]",
    },
    {
      quote:
        "[[Kutipan testimoni kedua — lebih baik kalau menyebut angka atau perubahan nyata.]]",
      name: "[[Nama]]",
      role: "[[Peran, Nama Komunitas]]",
    },
  ],

  process: [
    {
      step: "01",
      title: "Ngobrol dulu",
      text: "Sesi 30 menit untuk memahami tujuan, audiens, dan batasan waktu/tim.",
    },
    {
      step: "02",
      title: "Susun arah",
      text: "Aku kirim ringkasan pesan kunci, pilar konten, dan contoh format yang cocok.",
    },
    {
      step: "03",
      title: "Produksi",
      text: "Eksekusi per batch dengan revisi terbatas supaya ritme tetap jalan.",
    },
    {
      step: "04",
      title: "Evaluasi",
      text: "Lihat angka, tarik pelajaran, lalu putuskan apa yang diulang dan dihentikan.",
    },
  ],

  faq: [
    {
      q: "Bagaimana cara mulai kerja sama?",
      a: "Kirim pesan lewat form kontak berisi tujuan dan tenggat. Aku balas dengan pertanyaan singkat, lalu mengirim penawaran dan jadwal.",
    },
    {
      q: "Berapa lama waktu pengerjaannya?",
      a: "[[Sesuaikan: retainer bulanan mulai 1 minggu setelah brief disetujui; proyek kampanye 3–6 minggu.]]",
    },
    {
      q: "Bisa kerja remote?",
      a: "Bisa. Semua proses berjalan online, dengan sesi sinkron maksimal dua kali seminggu.",
    },
    {
      q: "Bisa bikin kelas untuk tim internal?",
      a: "Bisa. Materi disesuaikan level peserta, dan bisa dibarengi pendampingan setelah kelas.",
    },
  ],
};

export type SiteContent = typeof site;
