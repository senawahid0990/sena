import type { NextConfig } from "next";

/**
 * Origin tambahan untuk dev server (mis. hostname preview cloud).
 * Diisi lewat env saat menjalankan `next dev`, bukan di-hardcode.
 */
const allowedDevOrigins = (process.env.ALLOWED_DEV_ORIGINS ?? "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const nextConfig: NextConfig = {
  allowedDevOrigins,
};

export default nextConfig;
