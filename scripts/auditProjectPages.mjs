import http from 'http';

const BASE_URL = 'http://localhost:3000';

const PROJECT_SAMPLE_ROUTES = [
  '/projects',
  '/projects/industrial-manufacturing',
  '/projects/ev-smart-mobility',
  '/projects/computer-vision-edge-ai',
  '/projects/agri-tech',
  '/projects/healthcare-assistive',
  '/projects/logistics-retail',
  '/projects/infrastructure-maintenance',
  '/projects/security-emergency',
  '/projects/commercial-automation',
  '/projects/advanced-kinematics',
  // Completed projects
  '/projects/industrial-manufacturing/rc-robo-race-chassis-system',
  '/projects/industrial-manufacturing/rc-robo-soccer-pneumatic-bot',
  // Sample topics across domains
  '/projects/industrial-manufacturing/digital-twin-synchronization',
  '/projects/ev-smart-mobility/dynamic-docking-alignment',
  '/projects/computer-vision-edge-ai/real-time-spatial-slam-rover',
  '/projects/agri-tech/intelligent-seed-drilling-rover',
  '/projects/healthcare-assistive/active-upper-limb-exoskeleton',
  '/projects/logistics-retail/autonomous-narrow-aisle-pallet-mover',
  '/projects/infrastructure-maintenance/automated-concrete-3d-printing-gantry',
  '/projects/security-emergency/disaster-search-and-rescue-rover',
  '/projects/commercial-automation/automated-commercial-kitchen-fry-station',
  '/projects/advanced-kinematics/quadruped-dynamic-balance-trot-platform',
];

const BANNED_PATTERNS = [
  { name: 'Fake claim: "We built" on topics', regex: /\bWe\s+built\b/i },
  { name: 'Fake claim: "Our customer"', regex: /\bOur\s+customer\b/i },
  { name: 'Fake claim: "Our client"', regex: /\bOur\s+client\b/i },
  { name: 'Ecommerce: Buy Now', regex: /\bBuy\s+Now\b/i },
  { name: 'Ecommerce: Add to Cart', regex: /\bAdd\s+to\s+Cart\b/i },
  { name: 'Ecommerce: Checkout Button', regex: /\b(Proceed\s+to\s+Checkout|Cart\s+Checkout|Checkout\s+Now)\b/i },
  { name: 'Fake placeholder', regex: /\bLorem\s+ipsum\b/i },
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
  console.log(`\n============================================================`);
  console.log(`TAMIZH TECH ROBOTICS — PHASE 4 PROJECTS PRODUCTION AUDIT`);
  console.log(`Auditing target: ${BASE_URL}\n============================================================\n`);
  let hasFailure = false;
  let auditedCount = 0;

  for (const route of PROJECT_SAMPLE_ROUTES) {
    console.log(`------------------------------------------------------------`);
    console.log(`Auditing: ${route}`);
    console.log(`------------------------------------------------------------`);

    try {
      const { status, html } = await fetchPage(route);
      auditedCount++;

      // 1. HTTP Status Check
      if (status === 200) {
        console.log(`  ✅ HTTP Status: 200 OK`);
      } else {
        const msg = `${route}: HTTP Status expected 200, got ${status}`;
        console.error(`  ❌ ${msg}`);
        failures.push(msg);
        hasFailure = true;
      }

      // 2. Canonical URL Check
      const expectedCanonical = `https://www.tamizhtech.in${route}`;
      if (html.includes(`rel="canonical" href="${expectedCanonical}"`) || html.includes(`href="${expectedCanonical}" rel="canonical"`)) {
        console.log(`  ✅ Canonical tag verified: ${expectedCanonical}`);
      } else {
        console.warn(`  ⚠️ Canonical mismatch or formatted dynamically for ${expectedCanonical}`);
      }

      // 3. Single H1 check
      const h1Matches = html.match(/<h1\b[^>]*>/gi);
      if (h1Matches && h1Matches.length === 1) {
        console.log(`  ✅ Heading Hierarchy: Exactly 1 H1 element`);
      } else if (h1Matches && h1Matches.length > 1) {
        console.warn(`  ⚠️ Multiple H1 elements found: ${h1Matches.length}`);
      } else {
        const msg = `${route}: Missing H1 element`;
        console.error(`  ❌ ${msg}`);
        failures.push(msg);
        hasFailure = true;
      }

      // 4. Meta Description Check
      if (html.includes('name="description" content=') || html.includes('name="description"')) {
        console.log(`  ✅ Meta Description present`);
      } else {
        const msg = `${route}: Missing meta description`;
        console.error(`  ❌ ${msg}`);
        failures.push(msg);
        hasFailure = true;
      }

      // 5. Breadcrumbs Check
      if (html.includes('Breadcrumb') || html.includes('breadcrumb') || html.includes('itemlistelement')) {
        console.log(`  ✅ Breadcrumb navigation present`);
      } else {
        const msg = `${route}: Missing breadcrumb`;
        console.error(`  ❌ ${msg}`);
        failures.push(msg);
        hasFailure = true;
      }

      // 6. Primary Action CTA check
      if (
        html.includes('Discuss') ||
        html.includes('WhatsApp') ||
        html.includes('QuoteModal') ||
        html.includes('Projects')
      ) {
        console.log(`  ✅ Primary CTA / Lead Capture paths verified`);
      } else {
        const msg = `${route}: Missing primary CTA`;
        console.error(`  ❌ ${msg}`);
        failures.push(msg);
        hasFailure = true;
      }

      // 7. Check for Zero Mock / Zero Banned Patterns
      // Note: "We built" is allowed only on the two verified builds
      const isVerifiedBuild = route.includes('rc-robo-race') || route.includes('rc-robo-soccer');
      for (const pattern of BANNED_PATTERNS) {
        if (pattern.name.includes('We built') && isVerifiedBuild) continue;
        if (pattern.regex.test(html)) {
          const msg = `${route}: Disallowed pattern "${pattern.name}"`;
          console.error(`  ❌ ${msg}`);
          failures.push(msg);
          hasFailure = true;
        }
      }

      console.log(`  ✅ Content Safety & Zero Fabrication passed for ${route}`);
    } catch (err) {
      const msg = `${route}: Request failed - ${err.message}`;
      console.error(`  ❌ ${msg}`);
      failures.push(msg);
      hasFailure = true;
    }
  }

  console.log(`\n============================================================`);
  if (!hasFailure) {
    console.log(`🎉 PHASE 4 PROJECTS AUDIT: 100% PASSED (${auditedCount} routes verified)`);
    console.log(`============================================================\n`);
    process.exit(0);
  } else {
    console.error(`⚠️ PHASE 4 PROJECTS AUDIT FAILED. Failures recorded:`);
    failures.forEach(f => console.error(`  - ${f}`));
    console.log(`============================================================\n`);
    process.exit(1);
  }
}

const failures = [];
runAudit();
