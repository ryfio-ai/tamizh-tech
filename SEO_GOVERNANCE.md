# Tamizh Tech Robotics — SEO & Platform Governance Policy

**Audience**: All future engineers, content editors, and digital marketers contributing to `tamizh-tech`.  
**Core Standard**: Build genuine, defensible authority through verifiable engineering products and solutions.

---

## The 12 Immutable Platform Laws

1. **Zero Fake SEO Content**: Never generate thin, superficial AI articles merely to expand the site footprint. Every page must contain actionable, verified engineering or educational value.
2. **Zero Fake Backlinks**: Never participate in Private Blog Networks (PBNs), automated link-exchange schemes, paid link farms, or spam blog comment blasts. Backlinks must be editorial and earned.
3. **No Keyword Stuffing**: Maintain natural, readable prose. Never repeat primary target keywords unnaturally in headings, meta descriptions, or alt tags.
4. **No Doorway Pages**: Never build near-identical pages targeting arbitrary city variations (e.g. "Robotics in City X", "Robotics in City Y") where Tamizh Tech does not have legitimate operations.
5. **No Fabricated Claims**: Never claim certifications, patents, awards, or enterprise partnerships that have not been legally and operationally established.
6. **No Fake Reviews or Ratings**: Never display fabricated star ratings (`4.8/5.0`), synthetic review counts, or manufactured customer quotes. Let technical specifications and real institutional case studies speak for themselves.
7. **No Duplicate Pages**: Every canonical URL must have a unique purpose, distinct heading architecture, and dedicated value proposition.
8. **No Unnecessary URL Levels**: Adhere strictly to the canonical 3-tier hierarchy (`/products/{category}/{slug}`, `/courses/{category}/{slug}`, etc.). Do not invent deep, unneeded URL paths.
9. **No Broken Canonical Mismatches**: Every public page must contain a self-referencing `rel="canonical"` tag matching `https://www.tamizhtech.in`. Legacy paths must return **HTTP 308** directly without redirect chains.
10. **Zero Sitemap Pollution**: The XML sitemap (`/sitemap.xml`) must exclusively contain 200 OK canonical URLs. Never include redirects (301/308), 404s, internal API endpoints, or query-string URLs in the sitemap.
11. **Zero Exposed Credentials**: Never commit API keys (`RESEND_API_KEY`, `GOOGLE_SHEETS_SPREADSHEET_ID`), service account secrets, or private endpoints to public repositories or client-side bundles.
12. **Genuine Search Intent Only**: Every new landing page must solve a verifiable commercial, educational, or technical search intent aligned with Tamizh Tech's actual capabilities.

---

## Pre-Deployment Verification Checklist

Before pushing any commit to `main`:
1. `npm run lint` must pass with 0 errors.
2. `npm run build` must compile 100% of static routes with 0 errors.
3. `node scripts/seoAudit.mjs` must yield `FINAL PRODUCTION VERDICT: PASS ✅`.
4. Ensure all newly added form handlers route through `sendLeadNotifications` (`src/lib/email.ts`) and `appendLeadToGoogleSheet` (`src/lib/googleSheets.ts`).
