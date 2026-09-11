import { chromium, devices } from '@playwright/test';

async function auditProduction() {
  console.log('--- AUDITING PRODUCTION: https://www.tamizhtech.in/ ---');
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  
  // Test Mobile Viewport (Pixel 5)
  const mobileContext = await browser.newContext({
    ...devices['Pixel 5'],
    userAgent: 'Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36',
  });

  const page = await mobileContext.newPage();
  
  const consoleMessages = [];
  const errors = [];
  const failedRequests = [];
  const requests = [];

  page.on('console', msg => {
    consoleMessages.push({ type: msg.type(), text: msg.text(), location: msg.location() });
    if (msg.type() === 'error') {
      errors.push({ type: 'console.error', text: msg.text(), location: msg.location() });
    }
  });

  page.on('pageerror', error => {
    errors.push({ type: 'pageerror', text: error.message, stack: error.stack });
  });

  page.on('requestfailed', request => {
    failedRequests.push({ url: request.url(), failure: request.failure() });
  });

  page.on('response', response => {
    requests.push({
      url: response.url(),
      status: response.status(),
      contentType: response.headers()['content-type'] || '',
      size: response.headers()['content-length'] || 0
    });
  });

  console.log('Navigating to https://www.tamizhtech.in/ ...');
  const navResponse = await page.goto('https://www.tamizhtech.in/', { waitUntil: 'networkidle', timeout: 60000 });
  console.log(`Navigation status: ${navResponse.status()}`);

  // Evaluate performance metrics and LCP
  const perfData = await page.evaluate(async () => {
    return new Promise((resolve) => {
      let lcpEntry = null;
      try {
        const observer = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          if (entries.length > 0) {
            lcpEntry = entries[entries.length - 1];
          }
        });
        observer.observe({ type: 'largest-contentful-paint', buffered: true });
      } catch (e) {
        console.error('LCP observer error', e);
      }

      setTimeout(() => {
        const navEntries = performance.getEntriesByType('navigation');
        const nav = navEntries[0] || {};
        const paintEntries = performance.getEntriesByType('paint');
        const fcp = paintEntries.find(p => p.name === 'first-contentful-paint');

        let lcpDetails = null;
        if (lcpEntry) {
          lcpDetails = {
            startTime: lcpEntry.startTime,
            duration: lcpEntry.duration,
            size: lcpEntry.size,
            id: lcpEntry.id,
            url: lcpEntry.url,
            elementTagName: lcpEntry.element ? lcpEntry.element.tagName : null,
            elementId: lcpEntry.element ? lcpEntry.element.id : null,
            elementClassName: lcpEntry.element ? lcpEntry.element.className : null,
            elementOuterHTML: lcpEntry.element ? lcpEntry.element.outerHTML.substring(0, 300) : null
          };
        }

        resolve({
          navigation: {
            domContentLoaded: nav.domContentLoadedEventEnd - nav.startTime,
            load: nav.loadEventEnd - nav.startTime,
          },
          fcp: fcp ? fcp.startTime : null,
          lcp: lcpDetails,
        });
      }, 3000);
    });
  });

  console.log('\n--- PERFORMANCE DATA ---');
  console.log(JSON.stringify(perfData, null, 2));

  console.log('\n--- CONSOLE ERRORS & PAGE ERRORS ---');
  console.log(JSON.stringify(errors, null, 2));

  console.log('\n--- ALL CONSOLE MESSAGES ---');
  console.log(JSON.stringify(consoleMessages, null, 2));

  console.log('\n--- FAILED REQUESTS ---');
  console.log(JSON.stringify(failedRequests, null, 2));

  console.log('\n--- TOTAL REQUESTS ---');
  console.log(`Count: ${requests.length}`);
  const jsRequests = requests.filter(r => r.url.endsWith('.js') || r.contentType.includes('javascript'));
  console.log(`JS requests: ${jsRequests.length}`);

  // Test redirect chains
  console.log('\n--- REDIRECT CHAINS AUDIT ---');
  const urlsToTest = [
    'http://tamizhtech.in/',
    'http://www.tamizhtech.in/',
    'https://tamizhtech.in/',
    'https://www.tamizhtech.in/'
  ];

  for (const testUrl of urlsToTest) {
    const chain = [];
    const testPage = await browser.newPage();
    testPage.on('response', resp => {
      if ([301, 302, 307, 308].includes(resp.status())) {
        chain.push(`${resp.status()} -> ${resp.headers()['location'] || ''}`);
      }
    });
    try {
      const resp = await testPage.goto(testUrl, { waitUntil: 'domcontentloaded', timeout: 20000 });
      console.log(`URL: ${testUrl}`);
      console.log(`Chain: ${chain.length > 0 ? chain.join(' | ') : 'Direct (No redirect)'}`);
      console.log(`Final URL: ${resp.url()} (Status: ${resp.status()})\n`);
    } catch (e) {
      console.log(`URL: ${testUrl} Error: ${e.message}`);
    }
    await testPage.close();
  }

  await browser.close();
}

auditProduction().catch(console.error);
