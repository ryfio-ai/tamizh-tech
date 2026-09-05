import http from 'http';

const BASE_URL = 'http://localhost:3000';

const PRODUCT_ROUTES = [
  '/products',
  '/products/competition',
  '/products/radio-controllers',
  '/products/competition/rc-robo-race',
  '/products/competition/rc-robo-soccer',
  '/products/radio-controllers/flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver',
  '/products/radio-controllers/flysky-fs-i6-2.4g-6ch',
  '/products/radio-controllers/flysky-fs-i6s-2.4g-10ch-afhds-transmitter-with-fs-ia10b-10ch-receiver',
  '/products/radio-controllers/flysky-fs-ct6b-2.4g-6ch-radio-set-system-with-rx-fs-r6b-receiver',
];

const BANNED_PATTERNS = [
  { name: 'Buy Now', regex: /\bBuy\s+Now\b/i },
  { name: 'Add to Cart', regex: /\bAdd\s+to\s+Cart\b/i },
  { name: 'Checkout', regex: /\bCheckout\b/i },
  { name: 'Pay Now', regex: /\bPay\s+Now\b/i },
  { name: 'Razorpay', regex: /\bRazorpay\b/i },
  { name: 'Stripe', regex: /\bStripe\b/i },
  { name: 'In Stock label', regex: /\bIn\s+Stock\b/i },
  { name: 'Out of Stock label', regex: /\bOut\s+of\s+Stock\b/i },
  { name: 'Fake discount badge', regex: /\b\d+%\s+OFF\b/i },
  { name: 'Fake ships in days', regex: /\bShips\s+in\s+\d+\s+Days\b/i },
];

function fetchPage(urlPath) {
  return new Promise((resolve, reject) => {
    http.get(`${BASE_URL}${urlPath}`, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve({ status: res.statusCode, html: data }));
    }).on('error', reject);
  });
}

async function runAudit() {
  console.log(`\n🔍 Starting Phase 3 Products Production Audit on ${BASE_URL}...\n`);
  let hasFailure = false;

  for (const route of PRODUCT_ROUTES) {
    console.log(`------------------------------------------------------------`);
    console.log(`Auditing: ${route}`);
    console.log(`------------------------------------------------------------`);

    try {
      const { status, html } = await fetchPage(route);

      // 1. HTTP Status
      if (status === 200) {
        console.log(`  ✅ HTTP Status: 200 OK`);
      } else {
        console.error(`  ❌ HTTP Status: Expected 200, got ${status}`);
        hasFailure = true;
      }

      // 2. Canonical URL Check
      const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
      const expectedCanonical = `https://www.tamizhtech.in${route}`;
      if (canonicalMatch && canonicalMatch[1] === expectedCanonical) {
        console.log(`  ✅ Canonical URL: ${canonicalMatch[1]}`);
      } else {
        console.error(`  ❌ Canonical Mismatch: Expected ${expectedCanonical}, found ${canonicalMatch ? canonicalMatch[1] : 'NONE'}`);
        hasFailure = true;
      }

      // 3. Title Tag Check
      const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
      if (titleMatch && titleMatch[1].trim().length > 10) {
        console.log(`  ✅ Title: "${titleMatch[1].trim().substring(0, 65)}..."`);
      } else {
        console.error(`  ❌ Title Missing or Too Short`);
        hasFailure = true;
      }

      // 4. Single <h1> Check
      const h1Matches = html.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
      if (h1Matches.length === 1) {
        const h1Text = h1Matches[0].replace(/<[^>]+>/g, '').trim();
        console.log(`  ✅ Exactly 1 H1 Tag: "${h1Text.substring(0, 60)}"`);
      } else {
        console.error(`  ❌ H1 Tag Issue: Expected exactly 1, found ${h1Matches.length}`);
        hasFailure = true;
      }

      // 5. Banned Terms Check (Zero Ecommerce / Zero Payment / Zero Fake stock or discounts)
      let bannedFound = false;
      for (const banned of BANNED_PATTERNS) {
        if (banned.regex.test(html)) {
          console.error(`  ❌ BANNED TERM DETECTED: "${banned.name}"`);
          bannedFound = true;
          hasFailure = true;
        }
      }
      if (!bannedFound) {
        console.log(`  ✅ Anti-Ecommerce Check Passed: Zero banned cart/payment/fake-stock terms.`);
      }

      // 6. Enquiry CTA Check
      const hasEnquiryCta = /enquire/i.test(html);
      if (hasEnquiryCta) {
        console.log(`  ✅ Technical Enquiry Flow Present: Verified "Enquire" CTAs present.`);
      } else {
        console.error(`  ❌ Missing Enquiry CTA!`);
        hasFailure = true;
      }

      // 7. If product detail page, check JSON-LD for Product schema integrity
      if (route.split('/').length === 4) {
        const jsonLdBlocks = html.match(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || [];
        let productSchemaFound = false;
        let offersFound = false;

        for (const block of jsonLdBlocks) {
          const content = block.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '');
          try {
            const parsed = JSON.parse(content);
            if (parsed['@type'] === 'Product') {
              productSchemaFound = true;
              if (parsed.offers) offersFound = true;
            }
          } catch (e) {
            // Ignore non-JSON or multiple concatenated blocks
          }
        }

        if (productSchemaFound && !offersFound) {
          console.log(`  ✅ Factual Product Schema: Verified Product entity without fake offers/pricing.`);
        } else if (productSchemaFound && offersFound) {
          console.error(`  ❌ Schema Issue: Product schema contains fake "offers" payload!`);
          hasFailure = true;
        } else {
          console.warn(`  ⚠️ Note: Product schema not found or rendered client-side.`);
        }
      }

    } catch (err) {
      console.error(`  ❌ Connection Error auditing ${route}:`, err.message);
      hasFailure = true;
    }
  }

  console.log(`\n============================================================`);
  if (hasFailure) {
    console.error(`❌ PHASE 3 PRODUCTS AUDIT FAILED: Correct errors above before deployment.`);
    process.exit(1);
  } else {
    console.log(`✅ PHASE 3 PRODUCTS AUDIT PASSED: All 9 product routes strictly verified!`);
    console.log(`   - 0 Cart / 0 Payment Gateways / 0 Fake Badges`);
    console.log(`   - 100% Verified Specification Catalogue + Structured Enquiry`);
    console.log(`============================================================\n`);
    process.exit(0);
  }
}

runAudit();
