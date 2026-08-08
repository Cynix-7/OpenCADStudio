// Boot test: load the app, verify splash -> canvas, capture console errors.
const { chromium } = require("@playwright/test");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text().slice(0, 200));
  });
  page.on("pageerror", (err) => errors.push("PAGEERROR: " + String(err).slice(0, 200)));

  // 1. Landing page
  await page.goto("http://127.0.0.1:8090/", { waitUntil: "networkidle", timeout: 30000 });
  const title = await page.title();
  const cta = await page.locator("a.btn:has-text('Start Drawing')").count();
  const adSlot = await page.locator(".ad-slot").count();
  console.log("LANDING title:", title, "| CTA:", cta, "| ad-slots:", adSlot);

  // 2. Blog post
  await page.goto("http://127.0.0.1:8090/blog/open-dwg-online-free/", { waitUntil: "networkidle" });
  console.log("BLOG ad-slots:", await page.locator(".ad-slot").count(), "| first-heading:", await page.locator("main h1, main h2, main strong").first().textContent());

  // 3. App host page -> iframe
  await page.goto("http://127.0.0.1:8090/app/", { waitUntil: "domcontentloaded" });
  console.log("APP ad-slots:", await page.locator(".ad-slot").count(), "| iframes:", await page.locator("iframe").count());

  // 4. The WASM app itself (direct)
  await page.goto("http://127.0.0.1:8090/studio/", { waitUntil: "domcontentloaded" });
  // wait for canvas to mount (app init can take a few seconds on first load)
  try {
    await page.waitForSelector("canvas", { timeout: 60000 });
    console.log("STUDIO canvas mounted ✓");
    // give it a moment to run a frame
    await page.waitForTimeout(4000);
    const hasCanvas = await page.locator("canvas").count();
    const splashGone = await page.locator("#loading").count();
    console.log("STUDIO canvas count:", hasCanvas, "| splash visible:", splashGone);
  } catch (e) {
    console.log("STUDIO canvas timeout:", e.message.slice(0, 150));
  }

  console.log("CONSOLE ERRORS:", errors.length ? errors : "none");
  await browser.close();
  process.exit(0);
})();
