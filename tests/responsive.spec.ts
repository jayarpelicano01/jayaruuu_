import { test, expect } from "@playwright/test";

// Real routes in this portfolio: home, project index, one entry per slug in data/projects.ts.
// Add every new page here once its route exists.
const ROUTES = [
  "/",
  "/projects",
  "/projects/gsu-system",
  "/projects/faura-farmer",
  "/projects/campuschoice",
  "/projects/urds-system",
  "/projects/smart-farming",
  "/projects/portfolio",
];

for (const route of ROUTES) {
  test.describe(route, () => {
    // Wait for the browser to finish pulling images before checking them.
    // Scrolls each image into view first: below-fold lazy images never start
    // loading until near the viewport, so without this they stay incomplete.
    const settle = async (page: import("@playwright/test").Page) => {
      await page.goto(route);
      for (const img of await page.$$("img")) {
        await img.scrollIntoViewIfNeeded();
        await page.waitForFunction(
          (el) => (el as HTMLImageElement).complete,
          img
        );
      }
      await page.evaluate(() => window.scrollTo(0, 0));
    };

    test("does not scroll sideways", async ({ page }) => {
      await page.goto(route);
      const { scrollWidth, clientWidth } = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));
      expect(scrollWidth, "page is wider than the screen").toBeLessThanOrEqual(
        clientWidth + 1
      );
    });

    test("no element spills past the screen edge", async ({ page }) => {
      await page.goto(route);
      const spills = await page.evaluate(() => {
        const width = document.documentElement.clientWidth;
        const offenders: string[] = [];
        for (const el of Array.from(document.querySelectorAll("body *"))) {
          if (el.closest("[data-allow-overflow]")) continue;
          const rect = el.getBoundingClientRect();
          if (rect.width === 0 || rect.height === 0) continue;
          if (rect.right > width + 1 || rect.left < -1) {
            offenders.push(`${el.tagName.toLowerCase()} ${describe(el)}`);
          }
        }
        return offenders;

        function describe(el: Element): string {
          const cls = typeof el.className === "string" ? el.className : "";
          const text = (el.textContent ?? "").trim().slice(0, 30);
          return `${cls} ${text}`.trim().slice(0, 90);
        }
      });
      expect(spills, "elements past the screen edge").toEqual([]);
    });

    test("images load", async ({ page }) => {
      await settle(page);
      const broken = await page.evaluate(() =>
        Array.from(document.images)
          .filter((img) => img.complete && img.naturalWidth === 0)
          .map((img) => img.currentSrc || img.src)
      );
      expect(broken, "images that failed to load").toEqual([]);
    });

    test("no console errors", async ({ page }) => {
      const errors: string[] = [];
      page.on("console", (msg) => {
        if (msg.type() === "error") errors.push(msg.text());
      });
      page.on("pageerror", (err) => errors.push(err.message));
      await settle(page);
      expect(errors, "console errors").toEqual([]);
    });

    test("tap targets are finger-sized", async ({ page }) => {
      const width = page.viewportSize()?.width ?? 0;
      test.skip(width > 500, "phone check, pointless on wide screens");
      await page.goto(route);
      const tiny = await page.evaluate(() => {
        const offenders: string[] = [];
        const targets = document.querySelectorAll(
          "a, button, [role=button], input, select, textarea"
        );
        for (const el of Array.from(targets)) {
          // Visually-hidden helpers (e.g. the skip link) are not tappable UI.
          if (el.closest(".sr-only")) continue;
          const rect = el.getBoundingClientRect();
          if (rect.width === 0 || rect.height === 0) continue;
          if (rect.width < 24 || rect.height < 24) {
            const text = (el.textContent ?? "").trim().slice(0, 30);
            offenders.push(`${el.tagName.toLowerCase()} "${text}"`);
          }
        }
        return offenders;
      });
      expect(tiny, "tap targets smaller than 24px").toEqual([]);
    });
  });
}
