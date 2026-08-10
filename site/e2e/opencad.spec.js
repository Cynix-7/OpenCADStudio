// @ts-check
import { test, expect } from "@playwright/test";

// E2E for OpenCAD Web. Requires: `npm run preview` (Astro) or a live URL.
// Usage:
//   BASE_URL=http://localhost:4321 npx playwright test
const BASE_URL = process.env.BASE_URL || "http://127.0.0.1:8090";

test.describe("OpenCAD Web", () => {
  test("landing page renders with ad slot and CTA", async ({ page }) => {
    await page.goto(BASE_URL + "/", { waitUntil: "domcontentloaded" });
    await expect(page).toHaveTitle(/Free Browser CAD/);
    await expect(page.getByRole("link", { name: /Start Drawing/ })).toBeVisible();
    await expect(page.locator(".ad-slot").first()).toBeVisible();
  });

  test("blog has 3 posts with in-article ad slots", async ({ page }) => {
    await page.goto(BASE_URL + "/blog/", { waitUntil: "domcontentloaded" });
    const cards = page.locator("a[href*='/blog/']");
    const count = await cards.count();
    expect(count).toBeGreaterThanOrEqual(3);
    // open a post and check the in-article ad slot
    await page.goto(BASE_URL + "/blog/open-dwg-online-free/", { waitUntil: "domcontentloaded" });
    await expect(page.locator(".ad-slot")).toHaveCount(1);
    await expect(page.getByText(/What is a DWG file/)).toBeVisible();
  });

  test("legal pages exist", async ({ page }) => {
    for (const path of ["/privacy/", "/about/", "/contact/"]) {
      await page.goto(BASE_URL + path, { waitUntil: "domcontentloaded" });
      const status = await page.evaluate(() => document.title);
      expect(status.length).toBeGreaterThan(0);
    }
  });

  test("app host page iframes the studio app", async ({ page }) => {
    await page.goto(BASE_URL + "/app/", { waitUntil: "domcontentloaded" });
    await expect(page.locator("iframe[src='/studio/']")).toBeVisible();
    const frame = page.frameLocator("iframe[src='/studio/']");
    await expect(frame.locator("canvas, #loading")).toHaveCount(1, { timeout: 60000 });
    // ad slots present above/below the iframe
    await expect(page.locator(".ad-slot")).toHaveCount(2);
    // maximize toggle: pure CSS resize (hides ad slots, grows the frame).
    // Not the Fullscreen API — so we assert the class flips and the ads hide.
    const fsBtn = page.locator("#max-toggle");
    await expect(fsBtn).toBeVisible();
    await expect(page.locator("#max-label")).toHaveText("Maximize");
    await expect(page.locator(".app-stage")).not.toHaveClass(/maximized/);
    await fsBtn.click();
    await expect(page.locator(".app-stage")).toHaveClass(/maximized/);
    await expect(page.locator("#max-label")).toHaveText("Restore");
    await expect(page.locator(".ad-slot").first()).toBeHidden();
    await expect(page.getByRole("heading", { name: "Cadelo — Free Browser CAD" })).toBeVisible();
    // click again to restore
    await fsBtn.click();
    await expect(page.locator(".app-stage")).not.toHaveClass(/maximized/);
    await expect(page.locator(".ad-slot").first()).toBeVisible();
  });
});
