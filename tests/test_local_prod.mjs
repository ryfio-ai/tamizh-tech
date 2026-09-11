import { chromium, devices } from '@playwright/test';

async function testLocal() {
  console.log('--- TESTING LOCAL PRODUCTION SERVER: http://localhost:3000 ---');
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  
  // Mobile Pixel 5
  const context = await browser.newContext({
    ...devices['Pixel 5'],
  });

  const page = await context.newPage();

  const consoleErrors = [];
  const networkRequests = [];
  let videoDownloaded = false;

  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push({ text: msg.text(), location: msg.location() });
    }
  });

  page.on('request', req => {
    networkRequests.push(req.url());
    if (req.url().includes('3d%20printing.mp4') || req.url().includes('3d printing.mp4')) {
      videoDownloaded = true;
    }
  });

  console.log('Navigating to http://localhost:3000 ...');
  const res = await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
  console.log(`Navigation status: ${res.status()}`);

  // 1. Check GTM and Google tag presence in HTML
  const content = await page.content();
  const hasGtag = content.includes('G-T1RM1F2DEC');
  const hasGTM = content.includes('GTM-W4R5BHLW');
  const hasGTMNoscript = content.includes('https://www.googletagmanager.com/ns.html?id=GTM-W4R5BHLW');

  console.log(`Google tag (G-T1RM1F2DEC) present: ${hasGtag ? 'YES ✅' : 'NO ❌'}`);
  console.log(`GTM (GTM-W4R5BHLW) script present: ${hasGTM ? 'YES ✅' : 'NO ❌'}`);
  console.log(`GTM noscript iframe present:       ${hasGTMNoscript ? 'YES ✅' : 'NO ❌'}`);

  // 2. Check 3D printing video download
  console.log(`3.5MB video downloaded on initial load: ${videoDownloaded ? 'YES (Bandwidth wasted) ❌' : 'NO (Preload disabled) ✅'}`);

  // 3. Performance & LCP
  const lcpData = await page.evaluate(() => {
    return new Promise((resolve) => {
      let lcp = null;
      try {
        const obs = new PerformanceObserver(entryList => {
          const entries = entryList.getEntries();
          if (entries.length > 0) lcp = entries[entries.length - 1];
        });
        obs.observe({ type: 'largest-contentful-paint', buffered: true });
      } catch (e) {}

      setTimeout(() => {
        const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
        resolve({
          fcp: fcpEntry ? fcpEntry.startTime : null,
          lcpTime: lcp ? lcp.startTime : null,
          lcpElement: lcp && lcp.element ? lcp.element.tagName + (lcp.element.src ? ' ' + lcp.element.src : '') : null
        });
      }, 2000);
    });
  });

  console.log('\n--- PERFORMANCE METRICS ---');
  console.log(`FCP: ${lcpData.fcp ? Math.round(lcpData.fcp) + 'ms' : 'N/A'}`);
  console.log(`LCP: ${lcpData.lcpTime ? Math.round(lcpData.lcpTime) + 'ms' : 'N/A'}`);
  console.log(`LCP Element: ${lcpData.lcpElement || 'N/A'}`);

  // 4. Console errors
  console.log('\n--- APPLICATION CONSOLE ERRORS ---');
  console.log(`Total console errors: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    consoleErrors.forEach(e => console.log('  ❌', e.text));
  } else {
    console.log('  ✅ 0 Console errors detected.');
  }

  // 5. Responsive viewport testing
  const viewports = [320, 375, 390, 430, 768, 1024, 1440];
  console.log('\n--- RESPONSIVE VIEWPORT TESTING ---');
  for (const width of viewports) {
    await page.setViewportSize({ width, height: 800 });
    const overflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    console.log(`Viewport ${width}px: Horizontal overflow = ${overflow ? 'FAIL ❌' : 'PASS (No overflow) ✅'}`);
  }

  // 6. Descriptive anchor verification
  const anchorText = await page.evaluate(() => {
    const link = document.querySelector('a[href="/robotics-club"]');
    return link ? link.textContent.trim() : null;
  });
  console.log(`\nDescriptive Anchor for /robotics-club: "${anchorText}" ${anchorText?.includes('Explore Robotics Club') ? '✅' : '❌'}`);

  await browser.close();
}

testLocal().catch(console.error);
