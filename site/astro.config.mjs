// @ts-check
import { defineConfig } from "astro/config";

// Canonical domain for SEO/sitemap. Override with PUBLIC_SITE_URL at build
// time (e.g. CI). Defaults to opencad.app until the real domain is decided.
const SITE = process.env.PUBLIC_SITE_URL || "https://opencad.app";

// https://astro.build/config
export default defineConfig({
  site: SITE,
});
