// Renders the built SPA in headless Chromium and writes the fully-rendered
// HTML back to dist/index.html, so crawlers/social bots that don't execute
// JS (and the very first paint for real users) get real content instead of
// an empty <div id="root"></div>. Client-side React still takes over and
// re-renders on top after the JS bundle loads.
import { preview } from "vite";
import { chromium } from "playwright";
import { writeFileSync } from "node:fs";
import path from "node:path";

const server = await preview({ preview: { port: 4321, strictPort: true } });
const url = server.resolvedUrls.local[0];

const browser = await chromium.launch();
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

await browser.close();
await server.httpServer.close();

console.log(`Prerendered dist/index.html (${(html.length / 1024).toFixed(1)} KB)`);
