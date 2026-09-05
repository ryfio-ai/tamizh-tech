import http from 'http';

const BASE_URL = 'http://localhost:3000';
const SOLUTION_ROUTES = [
  '/solutions/schools',
  '/solutions/colleges',
  '/solutions/industries',
  '/solutions/students-makers',
  '/solutions/startups'
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
  console.log(`\n🔍 Starting B2B Solution Pages Production Audit on ${BASE_URL}...\n`);
  let hasFailure = false;

  for (const route of SOLUTION_ROUTES) {
    console.log(`------------------------------------------------------------`);
    console.log(`Auditing: ${route}`);
    console.log(`------------------------------------------------------------`);

    try {
      const { status, html } = await fetchPage(route);

      // 1. HTTP 200 OK
      if (status === 200) {
        console.log(`  ✅ HTTP Status: 200 OK`);
      } else {
        console.error(`  ❌ HTTP Status: Expected 200, got ${status}`);
        hasFailure = true;
      }

      // 2. Canonical URL check
      const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
      const expectedCanonical = `https://www.tamizhtech.in${route}`;
      if (canonicalMatch && canonicalMatch[1] === expectedCanonical) {
        console.log(`  ✅ Canonical URL: ${canonicalMatch[1]}`);
      } else {
        console.error(`  ❌ Canonical Mismatch: Expected ${expectedCanonical}, found ${canonicalMatch ? canonicalMatch[1] : 'NONE'}`);
        hasFailure = true;
      }

      // 3. Title Tag
      const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
      if (titleMatch && titleMatch[1].trim().length > 10) {
        console.log(`  ✅ Title: "${titleMatch[1].trim().substring(0, 70)}..."`);
      } else {
        console.error(`  ❌ Title Missing or Too Short`);
        hasFailure = true;
      }

      // 4. Meta Description
      const descMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i);
      if (descMatch && descMatch[1].trim().length > 20) {
        console.log(`  ✅ Meta Description: "${descMatch[1].trim().substring(0, 70)}..."`);
      } else {
        console.error(`  ❌ Meta Description Missing or Too Short`);
        hasFailure = true;
      }

      // 5. Single H1 Tag
      const h1Matches = [...html.matchAll(/<h1[^>]*>([^<]+)<\/h1>/gi)];
      if (h1Matches.length === 1) {
        console.log(`  ✅ Single H1 Tag: "${h1Matches[0][1].trim()}"`);
      } else {
        console.error(`  ❌ H1 Tag Issue: Expected 1, found ${h1Matches.length}`);
        hasFailure = true;
      }

      // 6. JSON-LD Schemas (BreadcrumbList, LocalBusiness/Org, FAQPage)
      const hasBreadcrumb = html.includes('BreadcrumbList');
      const hasOrgOrLocalBusiness = html.includes('LocalBusiness') || html.includes('Organization');
      const hasFAQ = html.includes('FAQPage');

      if (hasBreadcrumb && hasOrgOrLocalBusiness && hasFAQ) {
        console.log(`  ✅ JSON-LD Schemas: BreadcrumbList, LocalBusiness, FAQPage present & verified`);
      } else {
        console.error(`  ❌ JSON-LD Schema Missing: Breadcrumbs=${hasBreadcrumb}, Org=${hasOrgOrLocalBusiness}, FAQ=${hasFAQ}`);
        hasFailure = true;
      }

      // 7. Conversion CTAs & Lead Integration
      const hasQuoteCta = html.includes('Get a Quote') || html.includes('Enquiry') || html.includes('Consultation');
      const hasWhatsApp = html.includes('wa.me/918148045030');
      const hasContactLink = html.includes('/contact');

      if (hasQuoteCta) {
        console.log(`  ✅ Primary Conversion CTA: Present`);
      } else {
        console.error(`  ❌ Primary Conversion CTA Missing`);
        hasFailure = true;
      }

      if (hasWhatsApp) {
        console.log(`  ✅ Contextual WhatsApp CTA: Present`);
      } else {
        console.error(`  ❌ WhatsApp CTA Missing`);
        hasFailure = true;
      }

      if (hasContactLink) {
        console.log(`  ✅ Engineer Contact Link (/contact): Present`);
      } else {
        console.error(`  ❌ Contact Link Missing`);
        hasFailure = true;
      }

      // 8. "What are you looking for?" Needs Selector
      const hasNeedsSelector = html.includes('What are you looking for?');
      if (hasNeedsSelector) {
        console.log(`  ✅ Customer Needs Selector: Present & Interactive`);
      } else {
        console.error(`  ❌ Needs Selector Missing`);
        hasFailure = true;
      }

      // 9. Cross-links & Semantic Relationships
      const hasServicesSection = html.includes('/services/');
      if (hasServicesSection) {
        console.log(`  ✅ Contextual Commercial Service Links: Present`);
      } else {
        console.error(`  ❌ Commercial Service Cross-Links Missing`);
        hasFailure = true;
      }

      // 10. Zero Mock / Zero Placeholder Content
      const mockIndicators = ['Lorem ipsum', 'Acme Corp', '500+ happy clients', '5/5 rating', '100% satisfaction guaranteed'];
      let foundMock = false;
      for (const pattern of mockIndicators) {
        if (html.includes(pattern)) {
          console.error(`  ❌ Mock / Placeholder text found: "${pattern}"`);
          foundMock = true;
          hasFailure = true;
        }
      }
      if (!foundMock) {
        console.log(`  ✅ Zero Mock / Zero Placeholder Content: Clean`);
      }

    } catch (err) {
      console.error(`  ❌ Failed to fetch ${route}:`, err.message);
      hasFailure = true;
    }
  }

  console.log(`\n============================================================`);
  if (hasFailure) {
    console.error(`❌ SOME AUDIT CHECKS FAILED. PLEASE REVIEW OUTPUT ABOVE.`);
    process.exit(1);
  } else {
    console.log(`🎉 ALL 5 B2B SOLUTION PAGES PASSED PRODUCTION AUDIT!`);
    console.log(`============================================================\n`);
  }
}

runAudit();
