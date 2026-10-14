import { test } from "@playwright/test";

test("debug pending resources on mobile /", async ({ page }) => {
  test.setTimeout(60_000);
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(15_000);
  const resources = await page.evaluate(() =>
    performance.getEntriesByType("resource").map((r) => {
      const e = r as PerformanceResourceTiming;
      return {
        name: e.name.slice(-110),
        duration: Math.round(e.duration),
        size: e.transferSize,
        pending: e.responseEnd === 0,
      };
    })
  );
  console.log(JSON.stringify(resources, null, 1));
  const styleChain = await page.evaluate(() => {
    const out: Record<string, string>[] = [];
    let el: Element | null = document.querySelector("article img");
    while (el && out.length < 6) {
      const cs = getComputedStyle(el);
      out.push({
        tag: el.tagName.toLowerCase(),
        cls: (el.className as string).slice(0, 60),
        display: cs.display,
        visibility: cs.visibility,
        opacity: cs.opacity,
        contentVisibility: cs.contentVisibility,
      });
      el = el.parentElement;
    }
    return out;
  });
  console.log(JSON.stringify(styleChain, null, 1));
});
