import { NextResponse } from "next/server";

export const runtime = "nodejs";

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 3;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();

  for (const [key, times] of hits) {
    if (times.every((time) => now - time > WINDOW_MS)) hits.delete(key);
  }

  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  return recent.length > MAX_REQUESTS;
}

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for") ?? "";
  const ip = forwardedFor.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Terlalu banyak kiriman. Tunggu satu menit lalu coba lagi." },
      { status: 429 },
    );
  }

  const payload = (await request.json().catch(() => null)) as Record<string, unknown> | null;

  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ error: "Format permintaan tidak valid." }, { status: 400 });
  }

  // Honeypot: bot mengisi field tersembunyi, manusia tidak.
  if (text(payload.company_website)) {
    return NextResponse.json({ ok: true, message: "Pesan terkirim. Terima kasih!" });
  }

  const name = text(payload.name);
  const email = text(payload.email);
  const type = text(payload.type);
  const message = text(payload.message);

  if (name.length < 2) {
    return NextResponse.json({ error: "Nama wajib diisi (minimal 2 karakter)." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json({ error: "Alamat email tidak valid." }, { status: 400 });
  }

  if (message.length < 10) {
    return NextResponse.json(
      { error: "Pesan terlalu pendek (minimal 10 karakter)." },
      { status: 400 },
    );
  }

  if (message.length > 5000) {
    return NextResponse.json({ error: "Pesan terlalu panjang (maksimal 5000 karakter)." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Form belum tersambung ke email: RESEND_API_KEY belum diisi. Sementara itu, kirim pesan langsung ke email yang tertera di halaman ini.",
      },
      { status: 503 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL;
  if (!to) {
    return NextResponse.json(
      {
        error:
          "Form belum tersambung ke email: CONTACT_TO_EMAIL belum diisi. Hubungi pemilik situs untuk melengkapi konfigurasi.",
      },
      { status: 503 },
    );
  }

  const from = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Pesan baru dari ${name} — ${type || "kerja sama"}`,
      html: `
        <h2>Pesan baru dari form kontak</h2>
        <p><strong>Nama:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Jenis kerja sama:</strong> ${escapeHtml(type || "-")}</p>
        <p><strong>Pesan:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.error("Resend error", response.status, detail);

    return NextResponse.json(
      { error: "Email gagal dikirim. Coba lagi sebentar lagi atau hubungi lewat sosial." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Pesan terkirim. Aku balas lewat email, ya.",
  });
}
