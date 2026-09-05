import { chromium } from 'playwright';

const OUT = '/private/tmp/claude-501/-Users-harikrishna-Downloads-GetHub-files-Portfolio2026/065aa211-fbe2-4d3b-9cc0-7a24d029ef9a/scratchpad/shots';

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1200, height: 900 }, reducedMotion: 'reduce' });
const page = await context.newPage();
await page.goto('http://localhost:4174/resume', { waitUntil: 'networkidle' });
const section = page.locator('text=Experience').first().locator('xpath=ancestor::section');
await section.scrollIntoViewIfNeeded();
await page.waitForTimeout(300);
await section.screenshot({ path: `${OUT}/resume-experience-logos-fixed.png` });

// Log rendered widths/heights of each experience logo
const boxes = await page.evaluate(() => {
  const imgs = Array.from(document.querySelectorAll('section img')).filter(img =>
    img.closest('section')?.textContent?.includes('Experience')
  );
  return imgs.map(img => ({ src: img.getAttribute('src'), w: img.getBoundingClientRect().width, h: img.getBoundingClientRect().height }));
});
console.log(JSON.stringify(boxes, null, 2));

await browser.close();
console.log('DONE');
