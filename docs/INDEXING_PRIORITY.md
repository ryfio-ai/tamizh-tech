# Tamizh Tech Robotics Company — Indexing Priority Architecture

This document defines the strict indexing priority hierarchy for Google Search Console (GSC) URL Inspection, sitemap submissions, and internal linking authority flows.

---

## Priority Tiers

### Tier P0 — Commercial, Product & Core Authority (Highest Priority)
These pages generate commercial leads, represent verified robotics hardware and manufacturing capabilities, and anchor the brand's primary search intent clusters.

| URL | Content Type | Discovery Path | Primary Intent |
| :--- | :--- | :--- | :--- |
| `https://www.tamizhtech.in/` | Homepage / Brand Hub | Direct / Nav Root | Brand & Engineering Innovation |
| `https://www.tamizhtech.in/products` | Product Catalog Hub | Navbar / Footer | Robotics Hardware & Kits |
| `https://www.tamizhtech.in/products/competition` | Category Hub | Navbar / Catalog | Combat & Race Robotics |
| `https://www.tamizhtech.in/products/competition/ttrc-lf-5-0` | Product Detail | Category / Sitemap | Line Follower Robotics Kit |
| `https://www.tamizhtech.in/products/competition/rc-robo-race` | Product Detail | Category / Sitemap | RC Robo Race Drift Platform |
| `https://www.tamizhtech.in/products/competition/rc-robo-soccer` | Product Detail | Category / Sitemap | RC Robo Soccer Pneumatic Bot |
| `https://www.tamizhtech.in/products/radio-controllers` | Category Hub | Navbar / Catalog | RC Transmitters & Receivers |
| `https://www.tamizhtech.in/products/radio-controllers/flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver` | Product Detail | Category / Sitemap | Flysky FS-i6X 10CH Controller |
| `https://www.tamizhtech.in/products/radio-controllers/flysky-fs-i6-2.4g-6ch` | Product Detail | Category / Sitemap | Flysky FS-i6 6CH Controller |
| `https://www.tamizhtech.in/products/radio-controllers/flysky-fs-i6s-2.4g-10ch-afhds-transmitter-with-fs-ia10b-10ch-receiver` | Product Detail | Category / Sitemap | Flysky FS-i6S Touchscreen |
| `https://www.tamizhtech.in/products/radio-controllers/flysky-fs-ct6b-2.4g-6ch-radio-set-system-with-rx-fs-r6b-receiver` | Product Detail | Category / Sitemap | Flysky FS-CT6B System |
| `https://www.tamizhtech.in/products/educational-robotics` | Category Hub | Navbar / Catalog | STEM & Student Robotics |
| `https://www.tamizhtech.in/products/educational-robotics/boxing-bot` | Product Detail | Category / Sitemap | Boxing Bot Fighting Robot |
| `https://www.tamizhtech.in/products/robotics-components` | Category Hub | Navbar / Catalog | Robot Wheels & DC Motors |
| `https://www.tamizhtech.in/products/robotics-components/112mm-buggy-wheel` | Product Detail | Category / Sitemap | 112mm Buggy Wheel |
| `https://www.tamizhtech.in/products/robotics-components/100mm-buggy-wheel` | Product Detail | Category / Sitemap | 100mm Buggy Wheel |
| `https://www.tamizhtech.in/products/robotics-components/ttrc-hd-80mm-wheel` | Product Detail | Category / Sitemap | TTRC Heavy Duty 80mm Wheel |
| `https://www.tamizhtech.in/products/robotics-components/ttrc-dgj-300rpm` | Product Detail | Category / Sitemap | TTRC 300 RPM DC Geared Motor |
| `https://www.tamizhtech.in/products/robotics-components/ttrc-dgj-600rpm` | Product Detail | Category / Sitemap | TTRC 600 RPM DC Geared Motor |
| `https://www.tamizhtech.in/services` | Services Hub | Navbar / Footer | B2B Engineering Services |
| `https://www.tamizhtech.in/services/3d-printing` | Commercial Service | Navbar / Footer | Rapid Prototyping & FDM |
| `https://www.tamizhtech.in/services/laser-cutting` | Commercial Service | Navbar / Footer | CNC Acrylic / Sheet Metal |
| `https://www.tamizhtech.in/services/pcb-design-fabrication-assembly` | Commercial Service | Navbar / Footer | Custom PCB Fabrication |
| `https://www.tamizhtech.in/services/robotics-automation` | Commercial Service | Navbar / Footer | Custom Robotic Solutions |
| `https://www.tamizhtech.in/services/industrial-automation` | Commercial Service | Navbar / Footer | PLC / SCADA / Turnkey SPM |
| `https://www.tamizhtech.in/solutions` | Solutions Hub | Navbar / Footer | Institutional & B2B Solutions |
| `https://www.tamizhtech.in/solutions/schools` | B2B Solution | Navbar / Footer | Turnkey STEM Tinkering Labs |
| `https://www.tamizhtech.in/solutions/colleges` | B2B Solution | Navbar / Footer | College Center of Excellence |
| `https://www.tamizhtech.in/solutions/industries` | B2B Solution | Navbar / Footer | Factory Automation & AGVs |
| `https://www.tamizhtech.in/solutions/students-makers` | Community Solution | Navbar / Footer | Engineering Internships |
| `https://www.tamizhtech.in/solutions/startups` | B2B Solution | Navbar / Footer | Hardware Prototyping |

---

### Tier P1 — Supporting High-Intent Educational & Event Guides
- `https://www.tamizhtech.in/events/competition/robo-soccer`
- `https://www.tamizhtech.in/events/competition/robo-race`
- `https://www.tamizhtech.in/events/competition/line-follower`
- `https://www.tamizhtech.in/events/competition/robo-war`
- `https://www.tamizhtech.in/events/competition/robo-sumo`
- `https://www.tamizhtech.in/events/competition/drone-race`
- `https://www.tamizhtech.in/events/competition/maze-solver`
- `https://www.tamizhtech.in/events/competition/general-robotics`
- `https://www.tamizhtech.in/robotics-company-in-coimbatore`
- `https://www.tamizhtech.in/stem-education-india`
- `https://www.tamizhtech.in/robotics-products-india`
- `https://www.tamizhtech.in/industrial-automation-coimbatore`

---

### Tier P2 — Informational Blogs, Newsletters & Deep Portfolio Projects
- 10 Project Category Hubs & 100+ Engineering Case Studies
- Educational Courses (`/courses/school`, `/courses/college`, `/courses/professionals`)
- Technical Knowledge Base Articles (`/blog/robotics/*`)

---

### Excluded / Non-Indexable Tiers (Never Request Indexing)
- `/docs/icons` (Internal developer component library — set to `noindex, nofollow`)
- `/api/*` (JSON REST API endpoints)
- Legacy flat product URLs (permanent 308 redirects to canonical URLs)
