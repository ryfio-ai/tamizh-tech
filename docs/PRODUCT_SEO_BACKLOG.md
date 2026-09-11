# Product SEO & AEO Organic Growth Backlog

**Domain**: [https://www.tamizhtech.in/](https://www.tamizhtech.in/)  
**Document Status**: Active Implementation Backlog  
**Phase**: Phase 7 Post-Launch Continuous Optimization  
**Framework**: GSC Data → Product Query → Search Intent → Page Optimization → Internal Links → AEO Content → Enquiry

---

## 1. Post-Deployment Search Console Monitoring Cadence

In accordance with Google Search Central guidelines, structured data and metadata deployment does not immediately yield ranking changes or guaranteed rich snippets. The following inspection and tracking cadence is established:

```text
WEEK 1–2: Indexing & Rendering Inspection
├── Inspect all 13 product URLs in Google Search Console URL Inspection Tool
├── Confirm Googlebot Smartphone renders complete DOM including H2 questions and Quick Answers
├── Verify zero "Unparsable structured data" errors in GSC Structured Data report
└── Submit sitemap.xml to trigger priority recrawl

WEEK 3–4: Initial Impressions & Query Mapping
├── Export performance report filtered by Page: /products/
├── Cluster queries into Primary, Brand, Spec-driven, and Intent-driven buckets
├── Identify high-impression, low-CTR queries (candidates for Title & Snippet fine-tuning)
└── Note zero-click searches answered directly by Google Knowledge Graph / AI Overviews

MONTH 2+: Search Intent Iteration & Semantic Link Expansion
├── Update FAQPage schema with emerging technical questions asked by users
├── Expand internal links from high-performing blog and service pages to relevant hardware
└── Monitor WhatsApp & QuoteModal enquiry conversions tagged with product slugs
```

---

## 2. Priority Backlog Items

### High Priority (Sprint 1: Weeks 1–4)
1. **Google Search Console Live Query Audit**
   - Track live impressions for `line follower robot`, `robo race robot`, `robo soccer robot`, and `FlySky FS-i6X`.
   - Compare click-through rates against baseline title click curves.
2. **AI Overviews & Perplexity/ChatGPT Citation Tracking**
   - Prompt AI answer engines (Perplexity, ChatGPT Search, Google Gemini) with queries:
     - *"What are the specifications of TTRC DGJ 600RPM motor?"*
     - *"Best robo race competition robot kit in India"*
     - *"Where to buy 112mm robotics buggy wheels in Tamil Nadu"*
   - Verify whether Tamizh Tech's Quick Answers and URLs are cited as primary sources.
3. **Structured Data Rich Results Test Validation**
   - Run Google Rich Results Test on all 13 live URLs.
   - Confirm valid Product snippet eligibility with honest single Offer.

---

### Medium Priority (Sprint 2: Month 2)
1. **Regional & Multilingual Query Expansion (Tamil Mechatronics Terms)**
   - Research high-volume Tamil search variants for motors, robots, and wheels (e.g., `ரோபோ ரேஸ் கிட்`, `லைன் ஃபாலோயர் ரோபோட்`).
   - Introduce natural bilingual contextual terms in the FAQ answers and descriptions.
2. **Downloadable CAD & Pinout Assets**
   - Provide direct 3D STEP/STL CAD file downloads and pinout diagrams for TTRC C-Board 5.0 and DGJ motors.
   - Attach PDF/CAD schema markup to increase engineering student retention.
3. **Long-Tail Question Expansion from Live Customer WhatsApp Chats**
   - Harvest recurring questions received via WhatsApp enquiries and incorporate them into the visible FAQ accordion and FAQPage schema.

---

### Lower Priority / Long-Term (Month 3+)
1. **Product Video Schema (`VideoObject`)**
   - Embed YouTube short demonstration clips of TTRC RR-5.0 on track, Boxing Bot sparring, and DGJ motors under dynamometer load.
   - Annotate with `VideoObject` structured data.
2. **Competitor SERP Share of Voice Dashboard**
   - Benchmark Tamizh Tech's ranking against regional electronics suppliers for competition hardware keywords.
