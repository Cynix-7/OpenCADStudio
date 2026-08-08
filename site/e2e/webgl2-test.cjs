// WebGL2 fallback test: force-disable WebGPU, verify the app still boots.
const { chromium } = require("@playwright/test");

(async () => {
  const browser = await chromium.launch({
    args: ["--disable-features=WebGPU", "--enable-unsafe-swiftshader"],
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text().slice(0, 150));
  });
  page.on("pageerror", (err) => errors.push("PAGEERROR: " + String(err).slice(0, 150)));

  const webgpuAvailable = await page.evaluate(() => typeof navigator.gpu !== "undefined");
  console.log("navigator.gpu present (expect false):", webgpuAvailable);

  await page.goto("http://127.0.0.1:8090/studio/", { waitUntil: "domcontentloaded" });
  try {
    await page.waitForSelector("canvas", { timeout: 60000 });
    console.log("WEBGL2-FALLBACK canvas mounted ✓");
  } catch (e) {
    console.log("canvas timeout:", e.message.slice(0, 120));
  }
  await page.waitForTimeout(4000);
  console.log("CONSOLE ERRORS:", errors.length ? errors : "none");
  await browser.close();
  process.exit(0);
})();
