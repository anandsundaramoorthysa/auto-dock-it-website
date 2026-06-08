/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for Cloudflare Pages (no Node server at runtime).
  output: "export",
  // Cloudflare Pages serves the static files directly; Next's image optimizer
  // needs a server, so opt out and ship the source images as-is.
  images: { unoptimized: true },
  // Default trailingSlash (false) so the export emits out/404.html, which
  // Cloudflare Pages auto-serves for unknown routes.
  reactStrictMode: true,
};

export default nextConfig;
