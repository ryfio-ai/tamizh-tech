# Robotics Event SEO & Topic Funnel Architecture

Production Canonical: [tamizhtech.in](https://www.tamizhtech.in/)  
Strategic Topic Funnels connecting **Competition Information → Hardware Products → Training Courses → Commercial Enquiry**.

---

## 1. The Core Event-to-Lead Ecosystem

Rather than attempting to rank a single generic page for all queries, Tamizh Tech operates focused topic funnels:

```text
Event / Rules Search (Top of Funnel)
          ↓
High-Authority Competition Guide (/events/competition/*)
          ↓
Tuned Hardware Product / Kit (/products/*)
          ↓
Engineering Training / Workshop (/learn/* or /courses)
          ↓
Official Technical Enquiry / Quote Request (Lead)
```

---

## 2. Pillar Funnel Mappings

### A. Robo Soccer Funnel
* **Search Queries**: `robo soccer`, `robo soccer competition`, `robo soccer rules`, `robo soccer arena dimensions`
* **Informational Pillar**: [`/events/competition/robo-soccer`](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/competitionGuides.ts)
* **Mapped Hardware Products**:
  * [TTRC RS-5.0 Robo Soccer Robot](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/products.ts) (₹7,999 – ₹20,999)
  * [TTRC DGJ 300RPM Motor](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/products.ts) (₹650)
  * [100MM Buggy Wheel](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/products.ts) (₹320)
  * [FlySky FS-i6 6CH Transmitter](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/products.ts) (₹4,500)
* **Training Upsell**: Hands-on collegiate competition workshops (`/learn/engineering-students`).
* **Conversion Action**: "Enquire About Robo Soccer Kit" modal.

### B. Robo Race Funnel
* **Search Queries**: `robo race`, `robo race competition`, `robo race track rules`, `high speed robot race`
* **Informational Pillar**: [`/events/competition/robo-race`](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/competitionGuides.ts)
* **Mapped Hardware Products**:
  * [TTRC RR-5.0 Robo Race Robot](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/products.ts) (₹7,999 – ₹20,999)
  * [TTRC DGJ 600RPM High Speed Motor](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/products.ts) (₹700)
  * [112MM Buggy Wheel](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/products.ts) (₹350)
* **Training Upsell**: Chassis geometry & high-speed differential steering dynamics.
* **Conversion Action**: "Enquire About Robo Race Platform".

### C. Line Follower Funnel
* **Search Queries**: `line follower robot`, `PID line follower`, `line follower competition India`, `fast line follower`
* **Informational Pillar**: [`/events/competition/line-follower`](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/competitionGuides.ts)
* **Mapped Hardware Products**:
  * [TTRC LF 5.0 Line Follower Robot](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/products.ts) (₹3,800 – ₹4,800)
  * Custom sensor PCB arrays & micro-metal gear motors.
* **Training Upsell**: PID algorithm tuning and sensor calibration workshops.
* **Conversion Action**: "Enquire About TTRC LF 5.0".

### D. Robo War & Combat Robotics Funnel
* **Search Queries**: `robo war competition`, `combat robotics India`, `robot combat championship`
* **Informational Pillar**: [`/events/competition/robo-war`](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/competitionGuides.ts)
* **Mapped Hardware Products**:
  * Heavy-duty competition chassis components, high-current ESCs, hardened armor plates via [Laser Cutting Service](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/commercialServices.ts).
* **Conversion Action**: Custom engineering quotation.

### E. Robo Sumo Funnel
* **Search Queries**: `robo sumo competition`, `sumo robot tournament`, `dohyo arena rules`
* **Informational Pillar**: [`/events/competition/robo-sumo`](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/competitionGuides.ts)
* **Mapped Hardware Products**:
  * High-traction silicone wheels, high-torque geared motors (TTRC DGJ 300RPM), low-profile wedge chassis.
* **Conversion Action**: Technical enquiry.

### F. Drone Race Funnel
* **Search Queries**: `drone race competition`, `drone racing India`, `FPV drone tournament`
* **Informational Pillar**: [`/events/competition/drone-race`](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/competitionGuides.ts)
* **Mapped Hardware Products**:
  * Carbon fiber frame fabrication via CNC/Laser Cutting, [FlySky FS-i6X 10CH Transmitter](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/products.ts).
* **Conversion Action**: Drone lab / competition enquiry.

### G. Maze Solver Funnel
* **Search Queries**: `maze solver competition`, `micromouse maze solver`, `autonomous maze robot`
* **Informational Pillar**: [`/events/competition/maze-solver`](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/competitionGuides.ts)
* **Mapped Hardware Products**:
  * High-precision sensor kits, micro-chassis, motor encoder feedback units.
* **Conversion Action**: Educational kit enquiry.

---

## 3. Strict Google Compliance Rules
1. **Never use Event Schema for Evergreen Competition Guides**: Competition guides use `Article` + `BreadcrumbList` schema. `Event` schema with startDate/location is strictly reserved for real scheduled events.
2. **No Fictitious Ranking Claims**: All landing pages present factual engineering specifications, real approved prices, and genuine enquiry forms.
