export interface BlogPost {
  id?: string;
  slug: string;
  title: string;
  category: string;
  categorySlug?: string;
  excerpt?: string;
  featuredImage?: string;
  publishedAt?: string;
  updatedAt?: string;
  published?: boolean;
  img: string;
  date: string;
  author: string;
  authorTitle: string;
  readTime: string;
  summary: string;
  content: BlogSection[];
  faq: { q: string; a: string }[];
  internalLinks: { text: string; href: string }[];
  metaTitle: string;
  metaDescription: string;
}

export interface BlogSection {
  type: 'h2' | 'h3' | 'p' | 'ul' | 'ol' | 'table' | 'cta';
  heading?: string;
  text?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
  ctaText?: string;
  ctaHref?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-build-a-combat-robot',
    title: 'How to Build a Combat Robot: A Beginner\'s Guide',
    category: 'Robotics',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    date: '2026-07-10',
    author: 'Er. K. Tamizharasan',
    authorTitle: 'Founder & Lead Robotics Engineer, TamizhTech Robotics Company',
    readTime: '10 min read',
    summary: 'A complete beginner\'s guide to building a combat robot — covering weight classes, chassis materials, weapon types, motor selection, and safety rules for competitions in India.',
    metaTitle: 'How to Build a Combat Robot — Beginner\'s Guide | TamizhTech',
    metaDescription: 'Step-by-step guide to building your first combat robot. Covers weight classes, armor materials, weapon types, motor selection & Indian competition rules. By TamizhTech engineers.',
    content: [
      { type: 'p', text: 'A combat robot is a remote-controlled machine designed to disable or destroy opponent robots in a controlled arena. Building one requires understanding mechanical design, electronics, and competition rules — but it is achievable for beginners with the right guidance and components.' },
      { type: 'h2', heading: 'Understanding Weight Classes' },
      { type: 'p', text: 'Indian robotics competitions typically use the following weight classes:' },
      { type: 'ul', items: ['150g Antweight — great for first builds', '1 kg Beetleweight — most common student category', '3 kg Featherweight — intermediate level', '15 kg Middleweight — advanced, used in national events', '60 kg Heavyweight — professional/industry level'] },
      { type: 'h2', heading: 'Choosing Your Chassis and Armor' },
      { type: 'p', text: 'The chassis is the frame that holds everything together. For beginners, aluminium alloy (6061 grade) offers the best balance of weight and strength. For armor facing the opponent, use hardened steel plate (AR400 or EN8) which absorbs spinner impacts without cracking.' },
      { type: 'table', headers: ['Material', 'Weight', 'Impact Resistance', 'Best For'], rows: [['Aluminium 6061', 'Light', 'Medium', 'Chassis frame'], ['Hardened Steel AR400', 'Heavy', 'Excellent', 'Armor plating'], ['HDPE Plastic', 'Very light', 'Low', 'Non-combat panels'], ['Carbon Fibre', 'Very light', 'Good', 'Top panels, covers']] },
      { type: 'h2', heading: 'Weapon Types Explained' },
      { type: 'p', text: 'The weapon is what makes your robot dangerous. The three most common types in Indian competitions are:' },
      { type: 'ol', items: ['Spinner — a rotating disc or bar that deals massive kinetic energy damage. Hardest to control but most destructive.', 'Lifter — a wedge or arm that gets under opponents and flips them. Simpler to build and very effective.', 'Flipper — uses a pneumatic or spring mechanism to launch opponents into the air. Common in UK/European-style events.'] },
      { type: 'h2', heading: 'Motor and Battery Selection' },
      { type: 'p', text: 'For drive motors, use brushed DC motors rated 12V–24V with metal gear reduction for torque. Recommended: Johnson 550, RS550, or Cytron MDD10A driver pairs. For weapon motors, brushless outrunner motors (1000–2300 KV) give maximum spin-up speed.' },
      { type: 'p', text: 'Use LiPo batteries (3S to 6S, 1300–2200 mAh) for best power-to-weight ratio. Always use a LiPo-safe charging bag and never leave batteries charging unattended.' },
      { type: 'h2', heading: 'Safety and Competition Rules' },
      { type: 'ul', items: ['Always use a hardware safety switch (removable link) that cuts power to the entire robot', 'Weapon activation must require a separate arming step after the drive is enabled', 'Arena walls are typically 100–150mm polycarbonate — design weapons that won\'t breach them', 'Register with official bodies like BotBrawl or college-level tech fests that follow standard rules'] },
      { type: 'cta', ctaText: 'Buy Ready-to-Compete Combat Robot Kits →', ctaHref: '/products' },
    ],
    faq: [
      { q: 'How much does it cost to build a combat robot in India?', a: 'A beginner 1 kg combat robot (Beetleweight) typically costs ₹3,000–₹8,000 in components including chassis, motors, ESC, receiver, and LiPo battery. TamizhTech offers complete competition-ready kits starting from ₹4,500.' },
      { q: 'What is the most effective combat robot weapon for beginners?', a: 'A lifter or wedge weapon is most practical for beginners. It requires no high-speed spinning (which needs precise balancing) and is very effective at flipping opponents, especially against spinners that can\'t self-right.' },
      { q: 'What programming language is used for combat robots?', a: 'Most beginner combat robots use no programming at all — they operate purely on RC remote control with ESC (Electronic Speed Controller) units. Advanced robots may use Arduino C++ or MicroPython for autonomous features.' },
      { q: 'Are combat robot competitions available for school students in Tamil Nadu?', a: 'Yes. Many college tech fests in Tamil Nadu (including events at PSG Tech, Kumaraguru, and Amrita) have open combat robot categories for school and college teams. TamizhTech\'s Tamil Robotics Club (TRC) also organizes events for beginners.' },
      { q: 'What safety equipment is required for combat robot competitions?', a: 'All competitors must have a removable safety link on their robot. Spectators need eye protection near the arena. Full-body polycarbonate arena walls are standard. Check the specific event\'s rulebook for exact requirements.' },
    ],
    internalLinks: [{ text: 'Browse Competition Robot Kits', href: '/products' }, { text: 'Join Tamil Robotics Club', href: '/robotics-club' }, { text: 'Robotics Engineering Courses', href: '/courses' }],
  },
  {
    slug: 'plc-vs-scada-difference',
    title: 'PLC vs SCADA: What\'s the Difference?',
    category: 'Industrial Automation',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    date: '2026-07-05',
    author: 'Er. K. Tamizharasan',
    authorTitle: 'Founder & Lead Robotics Engineer, TamizhTech Robotics Company',
    readTime: '7 min read',
    summary: 'PLC and SCADA are both used in industrial automation but serve different purposes. This guide explains what each does, how they differ, and when a factory needs one vs both.',
    metaTitle: 'PLC vs SCADA: What\'s the Difference? | TamizhTech',
    metaDescription: 'Clear explanation of PLC vs SCADA systems for industrial automation. Comparison table, use cases, and when factories need both. By TamizhTech Robotics engineers in Coimbatore.',
    content: [
      { type: 'p', text: 'A PLC (Programmable Logic Controller) is a ruggedized digital computer used to control electromechanical processes on the factory floor. A SCADA (Supervisory Control and Data Acquisition) system is software that monitors and controls multiple PLCs, sensors, and machines across an entire facility or multi-site operation from a central point.' },
      { type: 'h2', heading: 'PLC vs SCADA: Key Differences' },
      { type: 'table', headers: ['Feature', 'PLC', 'SCADA'], rows: [['Primary role', 'Control individual machines/processes', 'Monitor & supervise multiple systems'], ['Location', 'On the factory floor, near machinery', 'Control room / remote server'], ['Response time', 'Milliseconds (real-time)', 'Seconds (near real-time)'], ['Scale', 'Single machine or process', 'Entire plant or multi-plant'], ['Programming', 'Ladder logic, FBD, ST', 'HMI software, historian databases'], ['Cost', '₹30,000 – ₹2,00,000 per unit', '₹2,00,000 – ₹20,00,000+ for full system'], ['Example vendors', 'Siemens S7, Allen-Bradley, Delta', 'Wonderware, Ignition, WinCC']] },
      { type: 'h2', heading: 'What Does a PLC Do?' },
      { type: 'p', text: 'A PLC reads inputs from sensors (temperature, pressure, position, speed) and controls outputs (motors, valves, pumps, conveyors) based on a programmed logic. It operates in real-time, executing its program every few milliseconds. PLCs are designed to run 24/7 in harsh industrial environments with extreme temperatures, vibration, and electrical noise.' },
      { type: 'h2', heading: 'What Does SCADA Do?' },
      { type: 'p', text: 'SCADA collects data from PLCs, RTUs (Remote Terminal Units), and sensors across a plant and presents it on a visual dashboard called an HMI (Human-Machine Interface). Operators can monitor production rates, equipment status, alarms, and historical trends. SCADA systems also allow remote control — an engineer in Chennai can monitor a Coimbatore plant in real time.' },
      { type: 'h2', heading: 'When Does a Factory Need Both?' },
      { type: 'p', text: 'Most modern manufacturing plants need both. PLCs control the actual machines at the process level (closing valves, starting conveyors), while SCADA provides the supervisory layer — logging data, alerting operators to faults, and enabling management-level reporting. Think of PLCs as the "hands" and SCADA as the "eyes and brain" of a factory.' },
      { type: 'ul', items: ['Small factory with 1–2 machines: PLC only', 'Medium factory with 5–20 machines: PLC + basic HMI', 'Large plant or multi-site: PLC + full SCADA system', 'Critical infrastructure (water, power): Redundant PLC + SCADA with cybersecurity layers'] },
      { type: 'cta', ctaText: 'Explore Our Industrial Automation Services →', ctaHref: '/services' },
    ],
    faq: [
      { q: 'Can a PLC work without SCADA?', a: 'Yes. A PLC can operate completely independently, controlling a single machine or process without any SCADA system. SCADA is only needed when you want centralized monitoring, historical data logging, or remote supervision across multiple machines or locations.' },
      { q: 'What is the difference between PLC and DCS?', a: 'A DCS (Distributed Control System) is similar to SCADA but integrates control and monitoring into a single tightly-coupled system from one vendor. PLCs + SCADA is a more flexible, multi-vendor approach. DCS is typically used in continuous process industries like chemical plants and oil refineries.' },
      { q: 'How much does a PLC automation system cost in India?', a: 'A basic PLC automation system for a single machine in India typically costs ₹50,000–₹2,00,000 including hardware, programming, and commissioning. Full plant SCADA implementations range from ₹5,00,000 to ₹50,00,000+ depending on scale.' },
      { q: 'Does TamizhTech offer PLC and SCADA courses?', a: 'Yes. TamizhTech\'s ThiranOli Academy offers PLC/SCADA Industrial Automation courses for engineering students and working professionals in Coimbatore. The course covers Siemens S7, Allen-Bradley, ladder logic programming, and HMI design.' },
    ],
    internalLinks: [{ text: 'Industrial Automation Services', href: '/services' }, { text: 'PLC/SCADA Course — ThiranOli Academy', href: '/courses' }, { text: 'Request an Automation Project Quote', href: '/contact' }],
  },
  {
    slug: 'best-robotics-kits-engineering-students-india',
    title: 'Best Robotics Kits for Engineering Students in India (2026)',
    category: 'Education',
    img: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&w=1200&q=80',
    date: '2026-06-28',
    author: 'Er. K. Tamizharasan',
    authorTitle: 'Founder & Lead Robotics Engineer, TamizhTech Robotics Company',
    readTime: '8 min read',
    summary: 'A curated guide to the best robotics kits for engineering students in India in 2026 — sorted by skill level, budget, and competition category.',
    metaTitle: 'Best Robotics Kits for Engineering Students India 2026 | TamizhTech',
    metaDescription: 'Top robotics kits for engineering students in India 2026. Beginner to competition-grade. RC combat bots, line followers, drones, STEM kits — reviewed by TamizhTech engineers.',
    content: [
      { type: 'p', text: 'The best robotics kit for an engineering student in India depends on three factors: your current skill level, your budget, and whether you want to compete or just learn. This guide covers the top options for each category in 2026, focusing on kits that teach real engineering skills rather than toy-grade play sets.' },
      { type: 'h2', heading: 'How to Choose a Robotics Kit' },
      { type: 'ul', items: ['Skill level: Choose beginner kits if you\'ve never soldered. Competition-grade kits require CAD and circuit knowledge.', 'Budget: Entry-level kits cost ₹1,500–₹5,000. Mid-range ₹5,000–₹20,000. Competition-grade ₹20,000+.', 'Goal: Learning → go for Arduino/Raspberry Pi kits. Competing → go for specialized competition platforms. Industry → go for PLC/sensor integration kits.', 'After-sales support: Prefer kits from Indian suppliers with documentation in Tamil/Hindi.'] },
      { type: 'h2', heading: 'Beginner Level (₹1,500–₹5,000)' },
      { type: 'ul', items: ['Line Follower Robot Kit — Uses IR sensors and Arduino UNO to follow a black line on white surface. Teaches sensor interfacing, PID control basics.', 'STEM Starter Kit (Arduino-based) — Covers LED blinking, servo control, ultrasonic sensors. Best introduction for first-year students.', 'Basic Sumo Robot Kit — 1 kg weight class. Simple chassis, DC motors, IR sensors. Good for college tech fest participation.'] },
      { type: 'h2', heading: 'Intermediate Level (₹5,000–₹20,000)' },
      { type: 'ul', items: ['RC Robo Race Platform — High-RPM metal gear motors, drift chassis, 2.4 GHz RC control. Used in college-level robot racing events.', 'Maze Solver Robot — Flood-fill algorithm implementation, encoder motors, OLED display. Excellent for learning embedded software.', 'Quadcopter Drone Kit (F450 frame) — Teaches flight dynamics, ESC calibration, PX4/ArduPilot configuration.'] },
      { type: 'h2', heading: 'Competition Grade (₹20,000+)' },
      { type: 'ul', items: ['Combat Robot (3 kg Featherweight) — Hardened steel chassis, brushless weapon motor, LiPo 4S system. Competition-ready for national events.', 'Autonomous Navigation Robot — ROS2, LiDAR, Raspberry Pi 4, DC encoders. Suitable for autonomous robotics competitions.', 'Agricultural Drone (hexacopter) — Pixhawk Cube Orange, carbon fibre frame, FPV camera, 15-minute flight time. College research-grade.'] },
      { type: 'cta', ctaText: 'Shop All Robotics Kits →', ctaHref: '/products' },
    ],
    faq: [
      { q: 'Which robotics kit is best for a first-year engineering student in India?', a: 'A Line Follower Robot kit (₹1,500–₹2,500) is ideal for first-year engineering students. It teaches sensor interfacing, basic microcontroller programming, and PID control — foundational skills for robotics. TamizhTech offers complete kits with documentation.' },
      { q: 'Can I use a robotics kit to participate in college tech fests?', a: 'Yes. Most college tech fests in Tamil Nadu and across India have open robot categories for line followers, combat robots, sumo bots, and maze solvers. TamizhTech\'s competition-grade kits are specifically designed for these events.' },
      { q: 'What is the best robotics kit under ₹5,000 in India?', a: 'The TamizhTech RC Sumo Robot Kit (1 kg class) or Line Follower Kit are among the best options under ₹5,000. Both include motors, chassis, sensors, and controller — everything needed to participate in a college-level competition.' },
      { q: 'Do robotics kits come with instructions in Tamil?', a: 'Yes. TamizhTech provides documentation and video tutorials in Tamil, English, and Hindi for all its robotics kits, making them accessible to students across Tamil Nadu who prefer learning in their native language.' },
    ],
    internalLinks: [{ text: 'Browse All Robotics Products', href: '/products' }, { text: 'Robotics Courses for Students', href: '/courses' }, { text: 'Tamil Robotics Club — Join Free', href: '/robotics-club' }],
  },
  {
    slug: 'what-is-agv-automated-guided-vehicle',
    title: 'What Is an AGV? Automated Guided Vehicles Explained Simply',
    category: 'Industrial Automation',
    img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
    date: '2026-06-20',
    author: 'Er. K. Tamizharasan',
    authorTitle: 'Founder & Lead Robotics Engineer, TamizhTech Robotics Company',
    readTime: '7 min read',
    summary: 'An AGV (Automated Guided Vehicle) is a mobile robot used in factories and warehouses to transport materials without a human driver. This guide explains how AGVs work, how they differ from AMRs, and real-world use cases.',
    metaTitle: 'What Is an AGV (Automated Guided Vehicle)? | TamizhTech',
    metaDescription: 'Simple explanation of AGVs (Automated Guided Vehicles) — how they navigate factories, AGV vs AMR comparison, Indian manufacturing use cases. By TamizhTech automation engineers.',
    content: [
      { type: 'p', text: 'An AGV (Automated Guided Vehicle) is a mobile robot that transports materials, parts, or finished goods through a factory or warehouse without a human driver. AGVs follow fixed routes defined by magnetic tape on the floor, embedded wires, optical targets, or laser reflectors. They are a key component of modern industrial automation, replacing manual forklifts and trolleys in repetitive material handling tasks.' },
      { type: 'h2', heading: 'How Do AGVs Navigate?' },
      { type: 'ul', items: ['Magnetic tape guidance — AGV follows a magnetic strip on the floor. Simple and low-cost. Route is fixed.', 'Wire guidance — Inductive wire embedded in floor sends signal. Robust but expensive to modify.', 'Laser/reflector guidance — AGV uses a rotating laser scanner and reflective targets on walls to triangulate position. Flexible routing.', 'Vision guidance — Camera-based systems read floor markings or natural landmarks. Increasingly common.', 'LiDAR + SLAM — Used in AMRs (not traditional AGVs). Maps the environment dynamically.'] },
      { type: 'h2', heading: 'AGV vs AMR: Key Differences' },
      { type: 'table', headers: ['Feature', 'AGV', 'AMR (Autonomous Mobile Robot)'], rows: [['Navigation', 'Fixed route (tape, wire, laser)', 'Dynamic mapping (LiDAR, SLAM)'], ['Obstacle handling', 'Stops and waits', 'Navigates around obstacles'], ['Flexibility', 'Low — route changes are costly', 'High — re-routes in software'], ['Cost', '₹5,00,000 – ₹20,00,000', '₹15,00,000 – ₹60,00,000+'], ['Best for', 'Predictable, repetitive routes', 'Dynamic, changing environments'], ['Maintenance', 'Simple — mechanical', 'Complex — software + hardware']] },
      { type: 'h2', heading: 'Real-World Use Cases in Indian Manufacturing' },
      { type: 'ol', items: ['Textile mills — AGVs carry yarn cones from storage to spinning machines, reducing manual labour by 60–80%.', 'Automotive plants — Material delivery from component stores to assembly line stations on a fixed cycle.', 'Pharmaceutical factories — Temperature-controlled AGVs transport medical inventory in cleanroom environments.', 'Warehouses (e-commerce) — High-speed order picking and bin transportation (Amazon, Flipkart logistics centres).'] },
      { type: 'cta', ctaText: 'Request an AGV/AMR System Quote →', ctaHref: '/contact' },
    ],
    faq: [
      { q: 'What is the difference between an AGV and an AMR?', a: 'An AGV (Automated Guided Vehicle) follows a fixed, pre-defined route using magnetic tape, laser reflectors, or embedded wires. An AMR (Autonomous Mobile Robot) uses LiDAR and SLAM to map its environment dynamically and navigate around obstacles in real time. AMRs are more flexible but cost significantly more.' },
      { q: 'How much does an AGV system cost in India?', a: 'An AGV system for an Indian factory typically costs ₹5,00,000–₹20,00,000 per unit including the vehicle, guidance infrastructure, fleet management software, and installation. Total project cost depends on the number of routes, units, and integration complexity.' },
      { q: 'Does TamizhTech design custom AGV systems?', a: 'Yes. TamizhTech Robotics Company designs and builds custom AGV and AMR systems for manufacturing, textile, pharmaceutical, and logistics clients across India. We handle everything from route planning and mechanical design to embedded systems programming and fleet management software.' },
      { q: 'Can an AGV replace a forklift in a factory?', a: 'An AGV can replace forklifts for predictable, repetitive material transport tasks (same route, same payload, same timing). They cannot replace forklifts for variable-height lifting, unstructured environments, or emergency material handling. Many factories use a hybrid: AGVs for routine routes, forklifts for exceptions.' },
    ],
    internalLinks: [{ text: 'Industrial Automation Services', href: '/services' }, { text: 'View Robotics Projects', href: '/projects' }, { text: 'Get an Automation Quote', href: '/contact' }],
  },
  {
    slug: 'robotics-workshop-cost-coimbatore',
    title: 'How Much Does a Robotics Workshop Cost in Coimbatore?',
    category: 'Education',
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    date: '2026-06-15',
    author: 'Er. K. Tamizharasan',
    authorTitle: 'Founder & Lead Robotics Engineer, TamizhTech Robotics Company',
    readTime: '6 min read',
    summary: 'A transparent breakdown of robotics workshop costs in Coimbatore — what\'s included, what affects the price, and how to get the best value for your institution.',
    metaTitle: 'Robotics Workshop Cost in Coimbatore 2026 | TamizhTech',
    metaDescription: 'Honest pricing guide for robotics workshops in Coimbatore. What\'s included, what affects cost, and how to book a workshop for your school or college. By TamizhTech.',
    content: [
      { type: 'p', text: 'A single-day robotics workshop in Coimbatore typically costs between ₹500 and ₹2,500 per student, depending on the topic, duration, kit inclusion, group size, and whether it is held at the institution or at TamizhTech\'s facility. This range covers beginner through advanced levels.' },
      { type: 'h2', heading: 'What Is Typically Included in a Robotics Workshop?' },
      { type: 'ul', items: ['Hands-on kit (Line Follower, Arduino Starter, or Combat Robot chassis)', 'Printed or digital course material / lab manual', 'Instructor-led sessions (theory + practical)', 'Participation certificate', 'Basic tools (soldering iron, multimeter access)', 'Post-workshop doubt-clearing support (usually via WhatsApp for 7–15 days)'] },
      { type: 'h2', heading: 'Factors That Affect Workshop Pricing' },
      { type: 'table', headers: ['Factor', 'Lower Cost', 'Higher Cost'], rows: [['Duration', '1 day', '2–5 days'], ['Location', 'At TamizhTech facility', 'At your institution (travel cost)'], ['Group size', '30–60 students', 'Under 15 or over 100'], ['Topic', 'Intro to Arduino', 'Drone building, Combat robots'], ['Kit', 'Shared demo kits', 'Each student keeps their kit'], ['Certificate', 'Participation only', 'NSDC/industry-recognized']] },
      { type: 'h2', heading: 'Typical Workshop Packages' },
      { type: 'ol', items: ['Intro to Robotics (1 day, shared kits) — ₹300–₹600 per student', 'Line Follower Robot Build (1 day, own kit) — ₹1,200–₹1,800 per student', 'Arduino & IoT Workshop (2 days) — ₹2,000–₹3,500 per student', 'Combat Robot Design Camp (3 days) — ₹4,000–₹7,000 per student', 'STEM Lab Setup + Teacher Training — Quoted per institution based on scope'] },
      { type: 'h2', heading: 'How to Book a Workshop for Your School or College' },
      { type: 'ol', items: ['Fill the workshop inquiry form on our contact page', 'We send a customized proposal within 24 hours', 'Review and approve the proposal with your institution', 'Workshop scheduled at your preferred date (minimum 2 weeks notice)'] },
      { type: 'cta', ctaText: 'Request a Workshop Quote →', ctaHref: '/contact' },
    ],
    faq: [
      { q: 'How much does a robotics workshop cost in Coimbatore?', a: 'A single-day robotics workshop in Coimbatore costs ₹300–₹2,500 per student, depending on the topic, duration, whether each student gets their own kit, and group size. TamizhTech offers customized workshop proposals for schools and colleges at no obligation.' },
      { q: 'What is included in a TamizhTech robotics workshop?', a: 'TamizhTech workshops include hands-on robot building (not just theory), all required components and tools, printed lab manual, participation certificate, and 7-day post-workshop support via WhatsApp. Custom workshops can include NSDC-aligned certifications.' },
      { q: 'Does TamizhTech conduct robotics workshops at schools and colleges?', a: 'Yes. TamizhTech sends instructors directly to your institution across Tamil Nadu. We handle the entire logistics including kit transportation, setup, and cleanup. Minimum group size is typically 20 students for on-site workshops.' },
      { q: 'How long is a typical robotics workshop?', a: 'Most introductory robotics workshops run for 1 full day (6–7 hours). Intermediate workshops covering Arduino + IoT or drone building are typically 2–3 days. STEM lab setup programs include multi-day teacher training and curriculum alignment sessions.' },
    ],
    internalLinks: [{ text: 'View Upcoming Events & Workshops', href: '/events' }, { text: 'Robotics Courses — ThiranOli Academy', href: '/courses' }, { text: 'Contact Us for a Workshop Quote', href: '/contact' }],
  },
  {
    slug: 'opencv-for-beginners',
    title: 'OpenCV for Beginners: Getting Started with Computer Vision',
    category: 'Artificial Intelligence',
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    date: '2026-06-08',
    author: 'Er. K. Tamizharasan',
    authorTitle: 'Founder & Lead Robotics Engineer, TamizhTech Robotics Company',
    readTime: '9 min read',
    summary: 'OpenCV is the world\'s most widely used computer vision library. This beginner\'s guide explains what it is, what it\'s used for in robotics and AI, and how to start using it without deep maths knowledge.',
    metaTitle: 'OpenCV for Beginners: Computer Vision Guide | TamizhTech',
    metaDescription: 'Beginner\'s guide to OpenCV and computer vision. What OpenCV does, how it\'s used in robotics and AI, key concepts, and how to learn it in Tamil/English. By TamizhTech engineers.',
    content: [
      { type: 'p', text: 'OpenCV (Open Source Computer Vision Library) is a free, open-source library of over 2,500 algorithms for real-time image and video processing. It is the most widely used computer vision library in the world, running in everything from smartphone apps to industrial quality inspection systems and self-driving robots.' },
      { type: 'h2', heading: 'What Is OpenCV Used For?' },
      { type: 'ul', items: ['Object detection — identifying and locating specific objects in a camera feed (e.g. detecting a product defect on a conveyor)', 'Face recognition — detecting and identifying human faces for access control or attendance', 'Color tracking — following an object by its color (commonly used in beginner robotics projects)', 'Motion detection — identifying movement in a security camera stream', 'Optical character recognition (OCR) — reading text from images', 'Lane detection — identifying road boundaries in autonomous vehicle navigation', 'Quality inspection — finding surface defects on manufactured parts at high speed'] },
      { type: 'h2', heading: 'Key Concepts You Need to Know First' },
      { type: 'ol', items: ['Pixel — the smallest unit of a digital image. A Full HD image has 1920 × 1080 = 2,073,600 pixels.', 'Color spaces — OpenCV uses BGR (Blue-Green-Red) instead of standard RGB. You convert between them using cvtColor().', 'Contours — outlines of shapes in an image. Used to detect the boundary of objects.', 'Thresholding — converting a grayscale image to pure black and white. Essential for isolating objects.', 'Morphological operations — dilate, erode, open, close — used to clean up noisy binary images.'] },
      { type: 'h2', heading: 'A Simple OpenCV Example — Color Tracking' },
      { type: 'p', text: 'The classic beginner OpenCV project is tracking a colored ball. The steps are: (1) Capture video from webcam, (2) Convert frame from BGR to HSV color space, (3) Apply a color mask to isolate the target color range, (4) Find contours of the masked region, (5) Draw a circle around the largest contour. This same principle powers the color-following robots seen in college tech fests.' },
      { type: 'h2', heading: 'How to Learn OpenCV in Tamil or English' },
      { type: 'p', text: 'TamizhTech\'s ThiranOli Academy offers a structured OpenCV and Vision AI course taught in Tamil and English. The course covers installation (Python + Pip), image processing fundamentals, object detection with YOLO, and deployment on Raspberry Pi for embedded vision applications.' },
      { type: 'cta', ctaText: 'Enrol in OpenCV/Vision AI Course →', ctaHref: '/courses' },
    ],
    faq: [
      { q: 'What programming language is OpenCV used with?', a: 'OpenCV supports Python, C++, Java, and MATLAB. For beginners, Python (pip install opencv-python) is recommended due to its simpler syntax and the availability of companion libraries like NumPy and Matplotlib for visualization.' },
      { q: 'Is OpenCV free to use?', a: 'Yes. OpenCV is completely free and open-source under the Apache 2 License. It can be used for commercial and non-commercial projects without any licensing fees.' },
      { q: 'Can OpenCV run on Raspberry Pi?', a: 'Yes. OpenCV runs on Raspberry Pi 3 and 4 (and Zero 2W for light tasks). The Raspberry Pi Camera Module 3 works natively with OpenCV via the Picamera2 library. TamizhTech\'s Vision AI course includes Raspberry Pi deployment training.' },
      { q: 'How long does it take to learn OpenCV?', a: 'A beginner with basic Python knowledge can complete core OpenCV concepts (image loading, color spaces, object detection, contours) in 2–4 weeks of part-time study. TamizhTech\'s structured course covers this in 30 hours of guided classroom + hands-on sessions.' },
      { q: 'What is the difference between OpenCV and a deep learning framework like TensorFlow?', a: 'OpenCV is a classical computer vision library — it uses algorithms like edge detection, color thresholding, and contour finding. TensorFlow and PyTorch are deep learning frameworks used to train neural networks. Modern vision AI systems often use both: OpenCV for image pre-processing and a deep learning model for classification or detection.' },
    ],
    internalLinks: [{ text: 'Vision AI & OpenCV Course', href: '/courses' }, { text: 'AI & Robotics Projects', href: '/projects' }, { text: 'Industrial Vision AI Services', href: '/services' }],
  },
  {
    slug: 'stem-tinkering-lab-setup-schools',
    title: 'STEM Tinkering Lab Setup for Schools: What\'s Included and How It Works',
    category: 'Education',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    date: '2026-05-30',
    author: 'Er. K. Tamizharasan',
    authorTitle: 'Founder & Lead Robotics Engineer, TamizhTech Robotics Company',
    readTime: '7 min read',
    summary: 'A STEM tinkering lab is a dedicated space in schools where students learn engineering by building and experimenting. This guide explains what a tinkering lab contains, how TamizhTech sets one up, and what it costs.',
    metaTitle: 'STEM Tinkering Lab Setup for Schools — What\'s Included | TamizhTech',
    metaDescription: 'Everything included in a STEM tinkering lab for schools — hardware, curriculum, teacher training & cost. Turnkey lab setup by TamizhTech Robotics in Coimbatore, Tamil Nadu.',
    content: [
      { type: 'p', text: 'A STEM tinkering lab is a dedicated space in a school where students learn science, technology, engineering, and mathematics by doing — not just by reading. Students build robots, program microcontrollers, design circuits, and solve real-world engineering challenges. It replaces passive textbook learning with active, project-based experimentation.' },
      { type: 'h2', heading: 'What Is Included in a TamizhTech STEM Tinkering Lab?' },
      { type: 'ul', items: ['Furniture — Anti-static workbenches, tool pegboards, student seating (8–24 workstations depending on lab size)', 'Electronics kit set — Arduino UNO/Nano kits, Raspberry Pi units, breadboards, component trays, power supplies', 'Robotics platforms — Pre-assembled robot chassis (line follower, sumo, obstacle avoider) for demonstration and competitive use', 'Fabrication tools — 3D printer, basic hand tools, soldering stations with fume extractors', 'Sensors and actuators — Ultrasonic, IR, temperature, humidity, servo motors, stepper motors, relay modules', 'Software — Arduino IDE, MIT App Inventor, Tinkercad (all free), pre-loaded lesson files', 'Curriculum materials — 40-week lesson plan aligned with NEP 2020 and Tamil Nadu school syllabus', 'Teacher training — 2-day intensive training for 2–4 teachers including hands-on lab sessions'] },
      { type: 'h2', heading: 'How TamizhTech Sets Up Your Lab' },
      { type: 'ol', items: ['Site visit — TamizhTech engineer visits your school to assess the designated room (size, power outlets, ventilation)', 'Proposal — Customized lab design proposal with itemized cost within 5 working days', 'Procurement — TamizhTech sources, tests, and delivers all components (typically 3–6 weeks)', 'Installation — Full physical setup including furniture, wiring, and equipment testing (2–3 days on-site)', 'Teacher training — 2-day workshop with your teachers covering all equipment and the curriculum plan', 'Handover — Lab documentation, equipment manual, and 6-month support WhatsApp group'] },
      { type: 'h2', heading: 'Who Is a STEM Tinkering Lab For?' },
      { type: 'p', text: 'STEM tinkering labs are ideal for government schools receiving ATL (Atal Tinkering Lab) grants, CBSE/ICSE private schools looking to upgrade their ICT curriculum, and engineering colleges wanting a dedicated student project space. TamizhTech has set up labs for institutions in Coimbatore, Salem, Tirupur, and Chennai.' },
      { type: 'cta', ctaText: 'Request a STEM Lab Proposal for Your School →', ctaHref: '/schools' },
    ],
    faq: [
      { q: 'What is included in a STEM tinkering lab setup?', a: 'A complete STEM tinkering lab includes anti-static workbenches, Arduino/Raspberry Pi kits, robotics platforms, a 3D printer, soldering stations, sensors/actuators, a 40-week curriculum plan aligned with NEP 2020, and teacher training. TamizhTech provides the full turnkey setup.' },
      { q: 'How much does a STEM tinkering lab cost for a school in India?', a: 'A basic STEM tinkering lab (8 workstations) costs approximately ₹3,50,000–₹6,00,000. A mid-scale lab (16 workstations with 3D printer and advanced robotics) costs ₹7,00,000–₹12,00,000. Government schools can apply for ATL grants of up to ₹20,00,000 from NITI Aayog.' },
      { q: 'Does TamizhTech train teachers for tinkering labs?', a: 'Yes. Every TamizhTech STEM lab installation includes a 2-day teacher training workshop. Teachers learn to operate all equipment, deliver the curriculum plan, manage student projects, and safely handle soldering and electronics tools. Ongoing support is provided for 6 months.' },
      { q: 'How long does it take to set up a STEM tinkering lab?', a: 'From initial site visit to lab handover typically takes 4–8 weeks. This includes the proposal phase (1 week), procurement (3–5 weeks), physical installation (2–3 days), and teacher training (2 days).' },
    ],
    internalLinks: [{ text: 'STEM Lab Solutions for Schools', href: '/schools' }, { text: 'School Robotics Products', href: '/products' }, { text: 'Contact for Lab Proposal', href: '/contact' }],
  },
  {
    slug: 'robotics-course-tamil-vs-english',
    title: 'Tamil vs English: Choosing the Right Language for Your Robotics Course',
    category: 'Education',
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    date: '2026-05-20',
    author: 'Er. K. Tamizharasan',
    authorTitle: 'Founder & Lead Robotics Engineer, TamizhTech Robotics Company',
    readTime: '5 min read',
    summary: 'Should you learn robotics and embedded systems in Tamil or English? This guide explains why language matters for technical comprehension and what ThiranOli Academy offers in each language.',
    metaTitle: 'Robotics Course in Tamil vs English — ThiranOli Academy | TamizhTech',
    metaDescription: 'Should you study robotics in Tamil or English? Honest guide covering comprehension, career impact, and what ThiranOli Academy at TamizhTech offers in Tamil, English & Hindi.',
    content: [
      { type: 'p', text: 'For a student whose primary language is Tamil, learning robotics and embedded systems in Tamil leads to faster conceptual understanding — especially for complex topics like microcontroller memory architecture, PID control tuning, or power electronics. English proficiency can be built alongside technical skills rather than as a prerequisite.' },
      { type: 'h2', heading: 'Why Language Matters in Technical Education' },
      { type: 'p', text: 'Research consistently shows that students learn technical subjects faster when taught in their mother tongue for the conceptual foundation. Engineering terms like "interrupt service routine," "PWM duty cycle," and "I²C bus arbitration" are difficult enough without also wrestling with a second language. Once the concept is understood in Tamil, English terminology becomes a simple translation step.' },
      { type: 'h2', heading: 'What ThiranOli Academy Offers' },
      { type: 'table', headers: ['Course', 'Tamil', 'English', 'Hindi'], rows: [['Embedded Systems & RTOS', '✓', '✓', '✓'], ['AI/ML for Engineers', '✓', '✓', '✗'], ['Drone Design & Flight Control', '✗', '✓', '✗'], ['PLC/SCADA Automation', '✓', '✓', '✗'], ['OpenCV/Vision AI', '✓', '✓', '✗'], ['Summer Robotics Camp', '✓', '✓', '✓']] },
      { type: 'h2', heading: 'Will Learning in Tamil Hurt My Career?' },
      { type: 'p', text: 'No. Technical skills are language-agnostic. A student who deeply understands microcontroller programming in Tamil will outperform a student who has surface-level English knowledge with shallow conceptual understanding. Job interviews in Coimbatore\'s manufacturing sector often happen in Tamil. MNCs and startups in Bangalore and Chennai focus on problem-solving ability, not the language in which you learned.' },
      { type: 'h2', heading: 'Our Recommendation' },
      { type: 'ul', items: ['School students and first-year college students: Start in Tamil for foundational concepts', 'Working professionals targeting global roles: Choose English-medium for documentation habits', 'Government/PSU aspirants: Tamil-medium aligns better with regional recruitment patterns', 'Students from outside Tamil Nadu: English or Hindi medium available'] },
      { type: 'cta', ctaText: 'Browse All Courses — Tamil, English & Hindi →', ctaHref: '/courses' },
    ],
    faq: [
      { q: 'Does TamizhTech offer robotics courses in Tamil?', a: 'Yes. TamizhTech\'s ThiranOli Academy offers Embedded Systems, AI/ML, PLC/SCADA, OpenCV, and Summer Robotics Camp courses in Tamil. All courses include Tamil-language instruction, printed lab manuals, and video tutorials in Tamil.' },
      { q: 'Are there robotics courses in Tamil Nadu taught in Tamil?', a: 'TamizhTech (ThiranOli Academy) is one of the few institutes in Tamil Nadu offering structured robotics and embedded systems courses taught entirely in Tamil. Most other institutes teach exclusively in English.' },
      { q: 'Can I get a job in robotics if I learned in Tamil?', a: 'Yes. Technical skills — coding, circuit design, system integration — are completely language-agnostic. Many successful robotics and automation engineers in Coimbatore learned their core skills in Tamil and have gone on to work at Tier-1 automotive suppliers, defense contractors, and robotics startups.' },
      { q: 'Does ThiranOli Academy issue certificates for Tamil-medium courses?', a: 'Yes. All ThiranOli Academy courses issue completion certificates regardless of the instruction language. The certificate states the course name and skills in English, which is the standard for professional use.' },
    ],
    internalLinks: [{ text: 'Browse ThiranOli Academy Courses', href: '/courses' }, { text: 'About TamizhTech & ThiranOli Academy', href: '/about' }, { text: 'Contact for Course Enrollment', href: '/contact' }],
  },
];

export const blogCategorySlugMap: Record<string, string> = {
  'Robotics': 'robotics',
  'Industrial Automation': 'industrial-automation',
  'Education': 'education',
  'Artificial Intelligence': 'artificial-intelligence',
};

export function getBlogCategorySlug(categoryName: string): string {
  return blogCategorySlugMap[categoryName] || categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostByCategoryAndSlug(categorySlug: string, slug: string): BlogPost | undefined {
  const post = getBlogPostBySlug(slug);
  if (!post) return undefined;
  const postCatSlug = post.categorySlug || getBlogCategorySlug(post.category);
  if (postCatSlug !== categorySlug) return undefined;
  return post;
}

export function getBlogPostsByCategorySlug(categorySlug: string): BlogPost[] {
  return blogPosts.filter((p) => (p.categorySlug || getBlogCategorySlug(p.category)) === categorySlug);
}

