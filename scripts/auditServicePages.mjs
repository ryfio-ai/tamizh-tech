import http from 'http';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

const SERVICE_PAGES = [
  {
    path: '/services/3d-printing',
    expectedH1: 'High-Precision 3D Printing Services in Coimbatore',
    expectedCanonical: 'https://www.tamizhtech.in/services/3d-printing',
  },
  {
    path: '/services/laser-cutting',
    expectedH1: 'Precision Stainless Steel Laser Cutting Services',
    expectedCanonical: 'https://www.tamizhtech.in/services/laser-cutting',
  },
  {
    path: '/services/pcb-design-fabrication-assembly',
    expectedH1: 'Turnkey PCB Services: Design, Fabrication & Assembly (PCBA)',
    expectedCanonical: 'https://www.tamizhtech.in/services/pcb-design-fabrication-assembly',
  },
  {
    path: '/services/robotics-automation',
    expectedH1: 'Custom Robotics & Automation Engineering',
    expectedCanonical: 'https://www.tamizhtech.in/services/robotics-automation',
  },
  {
    path: '/services/industrial-automation',
    expectedH1: 'Industrial Automation Solutions: PLC, SCADA & Machine Integration',
    expectedCanonical: 'https://www.tamizhtech.in/services/industrial-automation',
  },
];

function fetchPage(urlPath) {
  return new Promise((resolve, reject) => {
    const url = `${BASE_URL}${urlPath}`;
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        resolve({ statusCode: res.statusCode, body: data, headers: res.headers });
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function runAudit() {
  console.log(`\n🔍 Starting Commercial Service Pages Audit on ${BASE_URL}...\n`);
  let overallPass = true;

  for (const page of SERVICE_PAGES) {
    console.log(`------------------------------------------------------------`);
    console.log(`Auditing: ${page.path}`);
    console.log(`------------------------------------------------------------`);

    try {
      const { statusCode, body } = await fetchPage(page.path);

      // 1. HTTP 200
      if (statusCode === 200) {
        console.log(`  ✅ HTTP Status: 200 OK`);
      } else {
        console.error(`  ❌ HTTP Status failed: ${statusCode}`);
        overallPass = false;
      }

      // 2. Canonical URL exists and matches
      const canonicalMatch = body.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
      if (canonicalMatch && canonicalMatch[1] === page.expectedCanonical) {
        console.log(`  ✅ Canonical URL: ${canonicalMatch[1]}`);
      } else {
        console.error(`  ❌ Canonical mismatch or missing. Found: ${canonicalMatch ? canonicalMatch[1] : 'NONE'} (Expected: ${page.expectedCanonical})`);
        overallPass = false;
      }

      // 3. Title exists
      const titleMatch = body.match(/<title[^>]*>([^<]+)<\/title>/i);
      if (titleMatch && titleMatch[1].trim().length > 10) {
        console.log(`  ✅ Title: "${titleMatch[1].trim()}"`);
      } else {
        console.error(`  ❌ Title tag missing or too short`);
        overallPass = false;
      }

      // 4. Meta description exists
      const descMatch = body.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
      if (descMatch && descMatch[1].trim().length > 20) {
        console.log(`  ✅ Meta Description: "${descMatch[1].trim().substring(0, 70)}..."`);
      } else {
        console.error(`  ❌ Meta description missing or too short`);
        overallPass = false;
      }

      // 5. H1 exists and is singular
      const h1Matches = body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
      if (h1Matches && h1Matches.length === 1) {
        const cleanH1 = h1Matches[0].replace(/<[^>]+>/g, '').trim();
        console.log(`  ✅ Single H1 Tag: "${cleanH1}"`);
      } else {
        console.error(`  ❌ H1 count issue: found ${h1Matches ? h1Matches.length : 0} H1 tags`);
        overallPass = false;
      }

      // 6. JSON-LD Structured Data
      const jsonLdMatches = body.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi);
      if (jsonLdMatches && jsonLdMatches.length > 0) {
        let hasBreadcrumbs = false;
        let hasService = false;
        let hasFaq = false;

        for (const block of jsonLdMatches) {
          const content = block.replace(/<\/?script[^>]*>/gi, '');
          try {
            const parsed = JSON.parse(content);
            const items = Array.isArray(parsed) ? parsed : [parsed];
            for (const item of items) {
              if (item['@type'] === 'BreadcrumbList') hasBreadcrumbs = true;
              if (item['@type'] === 'Service') hasService = true;
              if (item['@type'] === 'FAQPage') hasFaq = true;
            }
          } catch (e) {
            console.error(`  ❌ JSON-LD parse error:`, e.message);
            overallPass = false;
          }
        }

        if (hasBreadcrumbs && hasService && hasFaq) {
          console.log(`  ✅ JSON-LD Schemas: BreadcrumbList, Service, FAQPage all present & valid`);
        } else {
          console.error(`  ❌ JSON-LD incomplete: Breadcrumb=${hasBreadcrumbs}, Service=${hasService}, FAQPage=${hasFaq}`);
          overallPass = false;
        }
      } else {
        console.error(`  ❌ No JSON-LD script tags found`);
        overallPass = false;
      }

      // 7. Get a Quote CTA & Quote Modal integration
      if (body.includes('Get a Quote') || body.includes('Request a Technical Quote')) {
        console.log(`  ✅ Primary CTA: "Get a Quote" present`);
      } else {
        console.error(`  ❌ "Get a Quote" CTA missing`);
        overallPass = false;
      }

      // 8. WhatsApp CTA
      if (body.includes('https://wa.me/918148045030') || body.includes('wa.me/918148045030')) {
        console.log(`  ✅ WhatsApp CTA: Verified WhatsApp link present`);
      } else {
        console.error(`  ❌ WhatsApp CTA missing or wrong number`);
        overallPass = false;
      }

      // 9. Zero placeholder content check
      const placeholderTerms = ['Lorem ipsum', 'dolor sit amet', 'placeholder.com', 'example.com', 'test client', 'fake review'];
      let foundPlaceholder = false;
      for (const term of placeholderTerms) {
        if (body.toLowerCase().includes(term.toLowerCase())) {
          console.error(`  ❌ Placeholder detected: "${term}"`);
          foundPlaceholder = true;
          overallPass = false;
        }
      }
      if (!foundPlaceholder) {
        console.log(`  ✅ Zero Mock/Placeholder Content: Verified clean`);
      }

    } catch (err) {
      console.error(`  ❌ Failed to fetch ${page.path}:`, err.message);
      overallPass = false;
    }
  }

  console.log(`\n============================================================`);
  if (overallPass) {
    console.log(`🎉 ALL 5 COMMERCIAL SERVICE PAGES PASSED PRODUCTION AUDIT!`);
    console.log(`============================================================\n`);
    process.exit(0);
  } else {
    console.error(`⚠️ SOME SERVICE PAGE AUDIT CHECKS FAILED.`);
    console.log(`============================================================\n`);
    process.exit(1);
  }
}

runAudit();
