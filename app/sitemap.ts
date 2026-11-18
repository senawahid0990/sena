import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sena.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/layanan`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/kontak`, changeFrequency: "yearly", priority: 0.6 },
  ];
}
