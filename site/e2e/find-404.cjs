// Find 404 resources on the studio app.
const { chromium } = require("@playwright/test");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const failed = [];
  page.on("response", (resp) => {
    if (resp.status() >= 400) failed.push(resp.status() + " " + resp.url());
  });
  await page.goto("http://127.0.0.1:8090/studio/", { waitUntil: "domcontentloaded" });
  try { await page.waitForSelector("canvas", { timeout: 60000 }); } catch {}
  await page.waitForTimeout(6000);
  console.log("FAILED REQUESTS:");
  failed.forEach((f) => console.log(" ", f));
  await browser.close();
  process.exit(0);
})();
