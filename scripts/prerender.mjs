// Renders the built SPA in headless Chromium and writes the fully-rendered
// HTML back to dist/index.html, so crawlers/social bots that don't execute
// JS (and the very first paint for real users) get real content instead of
// an empty <div id="root"></div>. Client-side React still takes over and
// re-renders on top after the JS bundle loads.
//
// This step is a best-effort enhancement, not a build requirement: some
// hosts (e.g. Netlify's build image) may not have a working headless
// Chromium available (missing browser binary, missing system libraries, or
// no network access to download one). If anything here fails, we log a
// warning and exit 0 so the deploy still ships the plain SPA build instead
// of breaking entirely.
import { preview } from "vite";
import { writeFileSync } from "node:fs";
import path from "node:path";

async function main() {
  let chromium;
  try {
    ({ chromium } = await import("playwright"));
  } catch {
    console.warn(
      "[prerender] Playwright is not installed — skipping prerender, shipping the plain SPA build."
    );
    return;
  }

  const server = await preview({ preview: { port: 4321, strictPort: true } });
  const url = server.resolvedUrls.local[0];

  try {
    const browser = await chromium.launch();
    try {
      const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

      await page.goto(url, { waitUntil: "networkidle" });
      await page.waitForSelector("#top h1", { timeout: 15000 });
      // let the loading screen finish its exit transition
      await page.waitForTimeout(2200);

      // scroll the full page so viewport-triggered (whileInView / ScrollTrigger)
      // animations fire and settle into their revealed end-state before capture
      const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
      const viewportHeight = 900;
      for (let y = 0; y <= scrollHeight; y += viewportHeight) {
        await page.evaluate((pos) => window.scrollTo(0, pos), y);
        await page.waitForTimeout(350);
      }
      await page.waitForTimeout(800);

      const html = await page.content();
      const distIndex = path.resolve("dist/index.html");
      writeFileSync(distIndex, html, "utf-8");

      console.log(`[prerender] Wrote dist/index.html (${(html.length / 1024).toFixed(1)} KB)`);
    } finally {
      await browser.close();
    }
  } catch (err) {
    console.warn(
      "[prerender] Could not run headless Chromium — skipping prerender, shipping the plain SPA build."
    );
    console.warn(`[prerender] Reason: ${err?.message ?? err}`);
  } finally {
    await server.httpServer.close();
  }
}

await main();
