// Generated sitemap endpoint — uses Astro.site from astro.config.mjs
// (env-configurable via PUBLIC_SITE_URL). Includes every public page with
// priority + lastmod so search engines crawl the site in importance order.
import type { APIRoute } from "astro";

const LAST = "2026-08-11";

const paths = [
  { path: "/", priority: "1.0", lastmod: LAST },
  { path: "/app/", priority: "0.9", lastmod: LAST },
  { path: "/docs/", priority: "0.9", lastmod: LAST },
  { path: "/docs/getting-started/", priority: "0.8", lastmod: LAST },
  { path: "/docs/interface/", priority: "0.7", lastmod: LAST },
  { path: "/docs/keyboard-shortcuts/", priority: "0.7", lastmod: LAST },
  { path: "/docs/drawing-basics/", priority: "0.8", lastmod: LAST },
  { path: "/docs/layers/", priority: "0.7", lastmod: LAST },
  { path: "/docs/dimensions/", priority: "0.7", lastmod: LAST },
  { path: "/docs/blocks/", priority: "0.7", lastmod: LAST },
  { path: "/docs/text/", priority: "0.6", lastmod: LAST },
  { path: "/docs/file-formats/", priority: "0.8", lastmod: LAST },
  { path: "/docs/saving-exporting/", priority: "0.7", lastmod: LAST },
  { path: "/docs/printing/", priority: "0.7", lastmod: LAST },
  { path: "/docs/3d-modeling/", priority: "0.7", lastmod: LAST },
  { path: "/docs/troubleshooting/", priority: "0.7", lastmod: LAST },
  { path: "/docs/faq/", priority: "0.7", lastmod: LAST },
  { path: "/tutorials/", priority: "0.8", lastmod: LAST },
  { path: "/about/", priority: "0.5", lastmod: LAST },
  { path: "/privacy/", priority: "0.5", lastmod: LAST },
  { path: "/contact/", priority: "0.5", lastmod: LAST },
];

export const GET: APIRoute = ({ site }) => {
  const base = (site?.toString() || "https://cadelo.app").replace(/\/$/, "");
  const urls = paths
    .map(
      (u) => `  <url>
    <loc>${base}${u.path}</loc>
    <lastmod>${u.lastmod}</lastmod>
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
