// Generated sitemap endpoint — uses Astro.site from astro.config.mjs
// (env-configurable via PUBLIC_SITE_URL).
import type { APIRoute } from "astro";

const paths = [
  { path: "/", priority: "1.0" },
  { path: "/app/", priority: "0.9" },
  { path: "/docs/", priority: "0.9" },
  { path: "/docs/getting-started/", priority: "0.8" },
  { path: "/docs/interface/", priority: "0.7" },
  { path: "/docs/keyboard-shortcuts/", priority: "0.7" },
  { path: "/docs/drawing-basics/", priority: "0.8" },
  { path: "/docs/layers/", priority: "0.7" },
  { path: "/docs/dimensions/", priority: "0.7" },
  { path: "/docs/blocks/", priority: "0.7" },
  { path: "/docs/text/", priority: "0.6" },
  { path: "/docs/file-formats/", priority: "0.8" },
  { path: "/docs/saving-exporting/", priority: "0.7" },
  { path: "/docs/printing/", priority: "0.7" },
  { path: "/docs/3d-modeling/", priority: "0.7" },
  { path: "/docs/troubleshooting/", priority: "0.7" },
  { path: "/docs/faq/", priority: "0.7" },
  { path: "/blog/", priority: "0.8" },
  { path: "/blog/open-dwg-online-free/", priority: "0.7" },
  { path: "/blog/what-is-dxf-file/", priority: "0.7" },
  { path: "/blog/browser-cad-webassembly/", priority: "0.7" },
  { path: "/about/", priority: "0.5" },
  { path: "/privacy/", priority: "0.5" },
  { path: "/contact/", priority: "0.5" },
];

export const GET: APIRoute = ({ site }) => {
  const base = (site?.toString() || "https://cadelo.app").replace(/\/$/, "");
  const urls = paths
    .map(
      (u) => `  <url>
    <loc>${base}${u.path}</loc>
    <priority>${u.priority}</priority>
  </url>`
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
