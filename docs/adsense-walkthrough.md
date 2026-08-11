# Cadelo — Google AdSense Application Walkthrough

Goal: get AdSense approved on cadelo.app, then wire the ad units into the
site. The site already satisfies AdSense's content requirements — this doc
walks through the application, what reviewers check, and the post-approval
setup.

## 1. Pre-flight: does the site meet AdSense requirements?

AdSense's hard requirements for a new site:

| Requirement | Cadelo status |
|---|---|
| Live site on a custom domain (free-host subdomains like `.pages.dev` are rejected) | ✅ cadelo.app (Cloudflare Pages, apex + www) |
| Real, original content — not under construction, no placeholder pages | ✅ landing, 3 blog posts, 15 docs pages, about, contact, privacy |
| Privacy policy (required for AdSense accounts in most regions, esp. EU/GDPR) | ✅ `/privacy/` |
| About page (site owner info) | ✅ `/about/` |
| Contact page / contact info | ✅ `/contact/` |
| Site-wide crawlable: robots.txt + sitemap | ✅ `/robots.txt`, `/sitemap.xml` (24 URLs) |
| Working HTTPS with valid cert | ✅ Cloudflare edge cert, HSTS |
| All pages load without errors (no 500s, no broken layout) | ✅ verified |
| Proper 404 for dead URLs | ✅ `/404` page |
| No adult/illegal/copyright-infringing content | ✅ CAD tool + tech content |
| Sufficient "body" text on key pages (AdSense reviewers read pages) | ✅ blog + docs are long-form |

One gap to close **before applying**: the blog has only 3 posts. Google's
reviewers like to see evidence of *ongoing* publishing intent. Not a hard
block, but 5-6 posts improves approval odds. The YouTube tutorial series
(12 scripts ready) doubles as blog material — convert each script into a
written guide and publish on the blog.

## 2. The application (20-30 minutes)

1. Go to https://adsense.google.com and sign in with the Google account that
   will own the AdSense account (recommend a dedicated one: cynixdev@gmail.com
   is fine if it's the account you'll manage ads with).
2. Click **Get started** → enter the site URL: `https://cadelo.app`
   (use the apex domain, not www).
3. Choose the account type:
   - **Business** if you have an entity (company/LLC) — recommended once the
     site earns, for tax purposes.
   - **Individual** for a personal account. You'll need a tax form (W-9 US /
     W-8BEN non-US).
4. Enter the payee name and address (must match your tax/bank records).
5. Accept the terms, then hit **Submit**.

## 3. What happens next (the waiting game)

- **Site review (2-4 weeks typical, can be faster):** Google's reviewers
  manually check the site against the requirements above. They visit
  `cadelo.app` directly — so it must be live, fast, and complete *the whole
  time*, not just on application day.
- During review the site can run normally. Do NOT put placeholder content
  "just to get approved" — they check history.
- You'll get an email when the review completes. Check the AdSense dashboard
  → **Account status** for the current state.

### If rejected
The rejection email names the reason. Common ones and fixes:

- **"Low value content"** → add more long-form blog posts (convert the 12
  video scripts to written guides), make sure every page has unique,
  substantial text.
- **"Insufficient content"** → publish 2-3 more blog posts, ensure the FAQ
  and docs are indexed.
- **"Site under construction / not enough history"** → wait 2-4 weeks,
  keep publishing, re-apply. A brand-new domain is the #1 rejection reason;
  the fix is time + content.
- **"Copyright / policy"** → check no copyrighted assets; all copy is
  original.

## 4. After approval — wiring ads into the site

Once approved:

1. Create ad units in AdSense:
   - **Display — Leaderboard (728x90)** — for the two slots on `/app/`
     (above/below the CAD frame) and the landing page.
   - **Display — In-article** — for the slot in blog posts and docs pages.
   - Get each unit's **slot ID** (e.g. `1234567890`) and the **client ID**
     (`ca-pub-XXXXXXXXXXXXXXXX`).

2. Set the IDs in the site. `AdSlot.astro` reads them from props; the call
   sites currently pass empty strings. Fill them in:

   `site/src/pages/index.astro` (landing):
   ```
   <AdSlot format="leaderboard" slot="SLOT_ID" client="ca-pub-XXXX" />
   ```

   `site/src/pages/app.astro` (host page, two slots):
   ```
   <AdSlot format="leaderboard" slot="SLOT_ID" client="ca-pub-XXXX" />
   ```

   `site/src/layouts/BlogPost.astro` (in-article):
   ```
   <AdSlot format="inarticle" slot="SLOT_ID" client="ca-pub-XXXX" />
   ```

   `site/src/layouts/DocsLayout.astro` (in-article on docs pages):
   ```
   <AdSlot format="inarticle" slot="SLOT_ID" client="ca-pub-XXXX" />
   ```

3. **Important:** with an explicit `frame-src` CSP that lists AdSense domains
   (pagead2.googlesyndication.com, googleads.g.doubleclick.net,
   tpc.googlesyndication.com) — already in `public/_headers` — ads will load.
   If a new ad format needs a different domain, add it to both `frame-src`
   and `script-src` in the CSP.

4. Rebuild + deploy:
   ```
   ./scripts/build-web-site.sh
   npx wrangler@4 pages deploy site/dist --project-name=cadelo --branch main
   ```
   (or push to main if CI secrets are set).

5. Verify: open `/app/` and a blog post — ads should render in the slots.
   If they don't, open DevTools console: CSP violations appear as red errors
   naming the blocked domain.

6. Also in AdSense: add **Cloudflare Web Analytics** note — the site runs
   cookieless analytics; AdSense has its own cookie consent requirements in
   the EU (GDPR) — consider a consent banner (e.g. Google's own CMP or a
   lightweight one) once ads are live in the EU.

## 5. Post-approval housekeeping

- Keep publishing. 1-2 posts/week signals an active site; AdSense reserves
  the right to re-review.
- Watch the dashboard for policy violations in the first month — the most
  common surprise is "ads on the app page overlap content": the iframe
  architecture already prevents this (ads are outside the iframe).
- Payment: AdSense pays ~68% of ad revenue, monthly when balance ≥ $100
  (Payoneer/bank transfer by region). CAD niche RPM is roughly $5-15 for
  Tier-1 traffic; 100k visits/mo at $10 RPM ≈ $1k/mo.

## Checklist before applying

- [ ] cadelo.app loads fast (wasm app is 46 MB but content pages are light)
- [ ] robots.txt + sitemap.xml live and referenced
- [ ] Privacy policy, About, Contact all live
- [ ] 404 page live
- [ ] No placeholder text anywhere (search for "TODO", "lorem", "example.com")
- [ ] (Recommended) 2+ more blog posts published
- [ ] Apply at https://adsense.google.com with URL https://cadelo.app
