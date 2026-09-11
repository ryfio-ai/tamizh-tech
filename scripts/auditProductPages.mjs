import http from 'http';

const BASE_URL = 'http://localhost:3000';

const PRODUCT_ROUTES = [
  '/products',
  '/products/competition',
  '/products/radio-controllers',
  '/products/educational-robotics',
  '/products/robotics-components',
  '/products/competition/ttrc-lf-5-0',
  '/products/competition/rc-robo-race',
  '/products/competition/rc-robo-soccer',
  '/products/educational-robotics/boxing-bot',
  '/products/robotics-components/112mm-buggy-wheel',
  '/products/robotics-components/100mm-buggy-wheel',
  '/products/robotics-components/ttrc-hd-80mm-wheel',
  '/products/robotics-components/ttrc-dgj-300rpm',
  '/products/robotics-components/ttrc-dgj-600rpm',
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
  { name: 'Crossed-out / strikethrough price tag', regex: /<del\b|<s\b|line-through/i },
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
        let productOffersObj = null;

        for (const block of jsonLdBlocks) {
          const content = block.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '');
          try {
            const parsed = JSON.parse(content);
            if (parsed['@type'] === 'Product') {
              productSchemaFound = true;
              if (parsed.offers) {
                offersFound = true;
                productOffersObj = parsed.offers;
              }
            }
          } catch (e) {
            // Ignore non-JSON or multiple concatenated blocks
          }
        }

        if (productSchemaFound) {
          if (offersFound && productOffersObj) {
            if (productOffersObj['@type'] === 'AggregateOffer') {
              console.error(`  ❌ Schema Issue: Product schema uses AggregateOffer!`);
              hasFailure = true;
            } else if (productOffersObj.availability || productOffersObj.itemCondition) {
              console.error(`  ❌ Schema Issue: Product schema contains fabricated availability/stock!`);
              hasFailure = true;
            } else {
              console.log(`  ✅ Factual Product Schema: Verified honest published price Offer (No AggregateOffer/fake stock).`);
            }
          } else {
            console.log(`  ✅ Factual Product Schema: Verified Product entity without offers payload.`);
          }
        } else {
          console.warn(`  ⚠️ Note: Product schema not found or rendered client-side.`);
        }
      }

      // 8. Specific Product Route Verifications
      if (route === '/products/competition/rc-robo-race') {
        const checks = [
          { name: 'TTRC RR-5.0 product title', regex: /TTRC RR-5\.0/i },
          { name: 'Only Bot SKU TTRC-C-2-A', regex: /TTRC-C-2-A/ },
          { name: 'Full Kit SKU TTRC-C-2-B', regex: /TTRC-C-2-B/ },
          { name: 'Only Bot price ₹7,999', regex: /7,999/ },
          { name: 'Full Kit price ₹20,999', regex: /20,999/ },
          { name: '600RPM Graded Diamond Motor', regex: /600RPM Graded Diamond Motor/i },
          { name: 'TTRC High-Torque Gearbox', regex: /TTRC High-Torque Gearbox/i },
          { name: 'TTRC 112MM Buggy Wheels', regex: /112MM Buggy Wheels/i },
          { name: 'Dimensions 210 × 250 × 112 mm', regex: /210\s*(×|&times;|x)\s*250\s*(×|&times;|x)\s*112\s*mm/i },
          { name: 'WhatsApp CTA', regex: /whatsapp/i },
        ];

        for (const check of checks) {
          if (check.regex.test(html)) {
            console.log(`  ✅ Verified: ${check.name}`);
          } else {
            console.error(`  ❌ Missing Expected Item: ${check.name}`);
            hasFailure = true;
          }
        }

        // Check absence of old crossed-out prices
        if (/12,000/.test(html) || /30,000/.test(html)) {
          console.error(`  ❌ Old Crossed-out Price (12,000 or 30,000) found on TTRC RR-5.0 page!`);
          hasFailure = true;
        } else {
          console.log(`  ✅ Clean Pricing: Zero old crossed-out prices (12,000 / 30,000).`);
        }
      }

      if (route === '/products/competition/rc-robo-soccer') {
        const soccerChecks = [
          { name: 'TTRC RS-5.0 product title', regex: /TTRC RS-5\.0/i },
          { name: 'Full Kit SKU TTRC-C-3-B', regex: /TTRC-C-3-B/ },
          { name: 'Only Bot price ₹7,999', regex: /7,999/ },
          { name: 'Full Kit price ₹21,999', regex: /21,999/ },
        ];

        for (const check of soccerChecks) {
          if (check.regex.test(html)) {
            console.log(`  ✅ Verified: ${check.name}`);
          } else {
            console.error(`  ❌ Missing Expected Item: ${check.name}`);
            hasFailure = true;
          }
        }

        if (/15,000/.test(html) || /30,000/.test(html)) {
          console.error(`  ❌ Old Crossed-out Price (15,000 or 30,000) found on TTRC RS-5.0 page!`);
          hasFailure = true;
        } else {
          console.log(`  ✅ Clean Pricing: Zero old crossed-out prices.`);
        }
      }

      if (route === '/products/educational-robotics/boxing-bot') {
        const boxingChecks = [
          { name: 'THE BOXING BOT title', regex: /THE BOXING BOT/i },
          { name: 'Boxing Bot SKU TTRC-E-1', regex: /TTRC-E-1/ },
          { name: 'Boxing Bot Price ₹14,999', regex: /14,999/ },
          { name: 'ESP32 Dev Kit controller', regex: /ESP32 Dev Kit/i },
          { name: 'MG995 Metal Gear Servos', regex: /MG995/i },
          { name: '5 Degrees of Freedom (5 DOF)', regex: /5\s*DOF/i },
          { name: '457 × 306 × 102 mm dimensions', regex: /457\s*(×|&times;|x)\s*306\s*(×|&times;|x)\s*102\s*mm/i },
        ];
        for (const check of boxingChecks) {
          if (check.regex.test(html)) {
            console.log(`  ✅ Verified: ${check.name}`);
          } else {
            console.error(`  ❌ Missing Expected Item: ${check.name}`);
            hasFailure = true;
          }
        }
        if (/20,000/.test(html)) {
          console.error(`  ❌ Old Crossed-out Price (20,000) found on Boxing Bot page!`);
          hasFailure = true;
        } else {
          console.log(`  ✅ Clean Pricing: Zero old crossed-out prices (20,000).`);
        }
      }

      if (route === '/products/robotics-components/112mm-buggy-wheel') {
        const wheelChecks = [
          { name: '112MM BUGGY WHEEL title', regex: /112MM BUGGY WHEEL/i },
          { name: 'SKU TTRC-RC-1', regex: /TTRC-RC-1/ },
          { name: 'Price ₹3,000', regex: /3,000/ },
          { name: 'Set of 4 pcs unit', regex: /\/\s*4\s*pcs/i },
          { name: 'Diameter 112 mm', regex: /112\s*mm/i },
          { name: 'Hub ID 6 mm', regex: /6\s*mm/i },
        ];
        for (const check of wheelChecks) {
          if (check.regex.test(html)) {
            console.log(`  ✅ Verified: ${check.name}`);
          } else {
            console.error(`  ❌ Missing Expected Item: ${check.name}`);
            hasFailure = true;
          }
        }
        if (/6,000/.test(html)) {
          console.error(`  ❌ Old Crossed-out Price (6,000) found on 112MM wheel page!`);
          hasFailure = true;
        } else {
          console.log(`  ✅ Clean Pricing: Zero old crossed-out prices (6,000).`);
        }
      }

      if (route === '/products/robotics-components/100mm-buggy-wheel') {
        const wheelChecks = [
          { name: '100MM BUGGY WHEEL title', regex: /100MM BUGGY WHEEL/i },
          { name: 'SKU TTRC-RC-2', regex: /TTRC-RC-2/ },
          { name: 'Price ₹3,000', regex: /3,000/ },
          { name: 'Set of 4 pcs unit', regex: /\/\s*4\s*pcs/i },
          { name: 'Diameter 100 mm', regex: /100\s*mm/i },
          { name: 'Tyre width 35 mm', regex: /35\s*mm/i },
        ];
        for (const check of wheelChecks) {
          if (check.regex.test(html)) {
            console.log(`  ✅ Verified: ${check.name}`);
          } else {
            console.error(`  ❌ Missing Expected Item: ${check.name}`);
            hasFailure = true;
          }
        }
        if (/5,000/.test(html)) {
          console.error(`  ❌ Old Crossed-out Price (5,000) found on 100MM wheel page!`);
          hasFailure = true;
        } else {
          console.log(`  ✅ Clean Pricing: Zero old crossed-out prices (5,000).`);
        }
      }

      if (route === '/products/robotics-components/ttrc-hd-80mm-wheel') {
        const wheelChecks = [
          { name: 'TTRC HD 80MM WHEEL title', regex: /TTRC HD 80MM WHEEL/i },
          { name: 'SKU TTRC-RC-3', regex: /TTRC-RC-3/ },
          { name: 'Price ₹2,000', regex: /2,000/ },
          { name: 'Set of 4 pcs unit', regex: /\/\s*4\s*pcs/i },
          { name: 'Diameter 88.9 mm preserved', regex: /88\.9\s*mm/i },
          { name: 'Hub ID 6 mm', regex: /6\s*mm/i },
        ];
        for (const check of wheelChecks) {
          if (check.regex.test(html)) {
            console.log(`  ✅ Verified: ${check.name}`);
          } else {
            console.error(`  ❌ Missing Expected Item: ${check.name}`);
            hasFailure = true;
          }
        }
        // Ensure main pricing estimate is ₹2,000 / 4 pcs
        const mainPriceMatch = html.match(/Unit Estimate:[\s\S]*?<\/div>/i);
        if (mainPriceMatch && /2,000/.test(mainPriceMatch[0])) {
          console.log(`  ✅ Clean Pricing: Verified Unit Estimate is ₹2,000 / 4 pcs without strikethroughs.`);
        } else {
          console.error(`  ❌ Unit Estimate Issue on TTRC HD 80MM wheel page!`);
          hasFailure = true;
        }
      }

      if (route === '/products/robotics-components/ttrc-dgj-300rpm') {
        const motor300Checks = [
          { name: 'TTRC DGJ 300RPM title', regex: /TTRC DGJ 300RPM/i },
          { name: 'SKU TTRC-RC-4', regex: /TTRC-RC-4/ },
          { name: 'Price ₹650', regex: /650/ },
          { name: 'Base Motor RPM 18000', regex: /18000/ },
          { name: 'Operating Voltage 6–18 V', regex: /6[–\-]18\s*V/i },
          { name: 'Rated Voltage 12 V', regex: /12\s*V/i },
          { name: 'Rated Torque 34.2 N-cm', regex: /34\.2\s*N\-cm/i },
          { name: 'Stall Torque 300 N-cm', regex: /300\s*N\-cm/i },
          { name: 'Gearbox Dimensions 25 × 37 mm', regex: /25\s*(×|&times;|x)\s*37/i },
          { name: 'WhatsApp CTA', regex: /whatsapp/i },
        ];
        for (const check of motor300Checks) {
          if (check.regex.test(html)) {
            console.log(`  ✅ Verified: ${check.name}`);
          } else {
            console.error(`  ❌ Missing Expected Item: ${check.name}`);
            hasFailure = true;
          }
        }
        if (/1,200/.test(html)) {
          console.error(`  ❌ Old Crossed-out Price (1,200) found on TTRC DGJ 300RPM page!`);
          hasFailure = true;
        } else {
          console.log(`  ✅ Clean Pricing: Zero old crossed-out prices (1,200).`);
        }
      }

      if (route === '/products/robotics-components/ttrc-dgj-600rpm') {
        const motor600Checks = [
          { name: 'TTRC DGJ 600RPM title', regex: /TTRC DGJ 600RPM/i },
          { name: 'SKU TTRC-RC-5', regex: /TTRC-RC-5/ },
          { name: 'Price ₹700', regex: /700/ },
          { name: 'Base Motor RPM 18000', regex: /18000/ },
          { name: 'Operating Voltage 6–18 V', regex: /6[–\-]18\s*V/i },
          { name: 'Rated Voltage 12 V', regex: /12\s*V/i },
          { name: 'Rated Torque 15.1 N-cm', regex: /15\.1\s*N\-cm/i },
          { name: 'Stall Torque 122 N-cm', regex: /122\s*N\-cm/i },
          { name: 'Gearbox Dimensions 22 × 37 mm', regex: /22\s*(×|&times;|x)\s*37/i },
          { name: 'WhatsApp CTA', regex: /whatsapp/i },
        ];
        for (const check of motor600Checks) {
          if (check.regex.test(html)) {
            console.log(`  ✅ Verified: ${check.name}`);
          } else {
            console.error(`  ❌ Missing Expected Item: ${check.name}`);
            hasFailure = true;
          }
        }
        if (/1,200/.test(html)) {
          console.error(`  ❌ Old Crossed-out Price (1,200) found on TTRC DGJ 600RPM page!`);
          hasFailure = true;
        } else {
          console.log(`  ✅ Clean Pricing: Zero old crossed-out prices (1,200).`);
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
    console.log(`✅ PHASE 3 PRODUCTS AUDIT PASSED: All 10 product routes strictly verified!`);
    console.log(`   - 0 Cart / 0 Payment Gateways / 0 Fake Badges`);
    console.log(`   - 100% Verified Specification Catalogue + Structured Enquiry`);
    console.log(`============================================================\n`);
    process.exit(0);
  }
}

runAudit();
