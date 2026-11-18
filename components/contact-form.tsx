"use client";

import { useState } from "react";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "ok"; message: string }
  | { kind: "error"; message: string };

const collaborationTypes = [
  "Konten sosial",
  "Kampanye / peluncuran",
  "Kelas / workshop",
  "Speaker / moderator",
  "Lainnya",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus({ kind: "sending" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => null)) as
        | { ok?: boolean; message?: string; error?: string }
        | null;

      if (!response.ok) {
        setStatus({
          kind: "error",
          message: data?.error ?? "Pesan gagal dikirim. Coba lagi sebentar lagi.",
        });
        return;
      }

      form.reset();
      setStatus({
        kind: "ok",
        message: data?.message ?? "Pesan terkirim. Terima kasih!",
      });
    } catch {
      setStatus({
        kind: "error",
        message: "Jaringan bermasalah. Coba lagi atau kirim email langsung.",
      });
    }
  }

  const sending = status.kind === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border-2 border-ink bg-white p-6 shadow-[5px_5px_0_0_#14100C] sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="name">
            Nama
          </label>
          <input
            className="field"
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Nama kamu"
            required
          />
        </div>

        <div>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="field"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="nama@email.com"
            required
          />
        </div>
      </div>

      <div className="mt-5">
        <label className="label" htmlFor="type">
          Jenis kerja sama
        </label>
        <select className="field" id="type" name="type" defaultValue={collaborationTypes[0]}>
          {collaborationTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label className="label" htmlFor="message">
          Pesan
        </label>
        <textarea
          className="field min-h-32 resize-y"
          id="message"
          name="message"
          placeholder="Ceritakan tujuan, audiens, dan tenggat waktunya."
          required
        />
      </div>

      {/* Honeypot: disembunyikan dari manusia, diisi bot. */}
      <div aria-hidden className="hidden">
        <label htmlFor="company_website">Website</label>
        <input id="company_website" name="company_website" tabIndex={-1} type="text" />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button className="btn-primary" type="submit" disabled={sending}>
          {sending ? "Mengirim…" : "Kirim pesan"}
        </button>
        <p className="text-xs text-ink/65">
          Data hanya dipakai untuk membalas pesanmu.
        </p>
      </div>

      {status.kind === "ok" ? (
        <p
          role="status"
          className="mt-5 rounded-2xl border-2 border-ink bg-lime px-4 py-3 text-sm font-semibold"
        >
          {status.message}
        </p>
      ) : null}

      {status.kind === "error" ? (
        <p
          role="alert"
          className="mt-5 rounded-2xl border-2 border-ink bg-orange px-4 py-3 text-sm font-semibold text-ink"
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
