export interface Category {
  id: string;
  slug: string;
  name: string;
  contentType: 'products' | 'courses' | 'blog' | 'projects' | 'events' | 'careers' | 'newsletters';
  description: string;
  image?: string;
  seoTitle: string;
  seoDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  applications?: string[];
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export const categories: Category[] = [
  // ── Products Categories ─────────────────────────────────────────────────────
  {
    id: 'prod-competition',
    slug: 'competition',
    name: 'Competition Robots',
    contentType: 'products',
    description: 'Competition-grade RC Robo Race and Robo Soccer platforms engineered for speed, high-traction maneuvers, and national robotics tournaments.',
    image: '/product/race/race1.png',
    seoTitle: 'Competition Robots & Racing Bot Kits | Tamizh Tech Coimbatore',
    seoDescription: 'High-performance competition robots, RC Robo Race platforms, and Robo Soccer bots engineered in Coimbatore by Tamizh Tech Robotics Company.',
    primaryKeyword: 'robotics competition kits India',
    secondaryKeywords: [
      'competition robots India',
      'RC robo race bot',
      'robo soccer robot',
      'robotics competition robot',
      'combat robot chassis Coimbatore'
    ],
    applications: [
      'National and International Robo Race tournaments',
      'Inter-collegiate Robo Soccer championships',
      'University robotics club racing and agility trials',
      'Advanced motor-driver and chassis tuning workshops'
    ],
    published: true,
    createdAt: '2024-01-15T00:00:00.000Z',
    updatedAt: '2026-03-01T00:00:00.000Z'
  },
  {
    id: 'prod-radio-controllers',
    slug: 'radio-controllers',
    name: 'Radio Controllers',
    contentType: 'products',
    description: 'Precision 2.4GHz AFHDS transmitters and receivers from FlySky with multi-channel telemetry for UAVs, aircraft, and competition robots.',
    image: '/product/flysky/flysky-fs-i6x-10ch.jpg',
    seoTitle: 'Radio Controllers & RC Transmitters | Tamizh Tech Coimbatore',
    seoDescription: 'Shop FlySky 2.4GHz 6CH and 10CH RC transmitters, receivers, and telemetry controllers with GST invoice and technical support in India.',
    primaryKeyword: 'radio controllers India',
    secondaryKeywords: [
      'FlySky transmitter India',
      'FS-i6X 10CH receiver',
      'RC transmitter Coimbatore',
      'robotics remote controller',
      'drone transmitter receiver set'
    ],
    applications: [
      'Fixed-wing, glider, and multirotor drone telemetry',
      'Combat bot and high-torque ground rover control',
      'Engineering classroom wireless RF communication labs',
      'Autonomous fail-safe manual override setups'
    ],
    published: true,
    createdAt: '2024-02-10T00:00:00.000Z',
    updatedAt: '2026-03-01T00:00:00.000Z'
  },

  // ── Courses Categories ──────────────────────────────────────────────────────
  {
    id: 'course-school',
    slug: 'school',
    name: 'School STEM & Robotics',
    contentType: 'courses',
    description: 'Hands-on robotics, electronics, and coding programs designed for school students (Grades 6–12) to foster scientific creativity and problem-solving.',
    seoTitle: 'School Robotics & STEM Courses | Tamizh Tech Coimbatore',
    seoDescription: 'Hands-on STEM and robotics courses for school students in Coimbatore and Tamil Nadu. Learn electronics, Scratch, and robot building.',
    primaryKeyword: 'robotics training for schools',
    secondaryKeywords: [
      'school robotics program India',
      'STEM basics course Coimbatore',
      'robotics classes for kids Tamil Nadu',
      'hands-on science tinkering'
    ],
    published: true,
    createdAt: '2024-03-01T00:00:00.000Z',
    updatedAt: '2026-03-01T00:00:00.000Z'
  },
  {
    id: 'course-college',
    slug: 'college',
    name: 'College Engineering & Advanced Tech',
    contentType: 'courses',
    description: 'Deep-dive embedded systems, IoT firmware, AI & machine learning, and UAV drone engineering courses for engineering students.',
    seoTitle: 'College Engineering Robotics Courses | Tamizh Tech Coimbatore',
    seoDescription: 'Industry-oriented embedded systems, AI/ML, and drone engineering courses for engineering students in Coimbatore. Hands-on practical mentoring.',
    primaryKeyword: 'robotics courses for engineering students',
    secondaryKeywords: [
      'embedded systems course Coimbatore',
      'drone engineering training India',
      'AI machine learning robotics course',
      'final year engineering project training'
    ],
    published: true,
    createdAt: '2024-03-01T00:00:00.000Z',
    updatedAt: '2026-03-01T00:00:00.000Z'
  },
  {
    id: 'course-professionals',
    slug: 'professionals',
    name: 'Professional Automation & Industry Training',
    contentType: 'courses',
    description: 'Industrial-grade PLC, SCADA, HMI, and factory automation training for practicing technicians, plant engineers, and working professionals.',
    seoTitle: 'Industrial Automation PLC SCADA Courses | Tamizh Tech',
    seoDescription: 'Professional PLC and SCADA industrial automation courses in Coimbatore. Siemens and Delta hardware wiring, ladder logic, and commissioning.',
    primaryKeyword: 'PLC automation training Coimbatore',
    secondaryKeywords: [
      'industrial automation course Tamil Nadu',
      'SCADA training for professionals',
      'Siemens PLC programming classes',
      'factory automation certification'
    ],
    published: true,
    createdAt: '2024-03-01T00:00:00.000Z',
    updatedAt: '2026-03-01T00:00:00.000Z'
  },

  // ── Blog Categories ─────────────────────────────────────────────────────────
  {
    id: 'blog-robotics',
    slug: 'robotics',
    name: 'Robotics Engineering',
    contentType: 'blog',
    description: 'Practical guides and engineering breakdowns on combat bots, line followers, sensor integration, and competition hardware.',
    seoTitle: 'Robotics Engineering Guides & Tutorials | Tamizh Tech Blog',
    seoDescription: 'Step-by-step robotics guides, combat robot build tutorials, and hardware tips from the engineering team at Tamizh Tech Robotics Company.',
    primaryKeyword: 'robotics engineering tutorials',
    secondaryKeywords: [
      'how to build combat robot India',
      'robotics competition tips',
      'line follower sensor tuning',
      'robotics chassis materials'
    ],
    published: true,
    createdAt: '2024-05-01T00:00:00.000Z',
    updatedAt: '2026-03-01T00:00:00.000Z'
  },
  {
    id: 'blog-industrial-automation',
    slug: 'industrial-automation',
    name: 'Industrial Automation',
    contentType: 'blog',
    description: 'In-depth articles covering PLC vs SCADA systems, AGVs, AMRs, factory robotics, and Industry 4.0 implementations in Indian manufacturing.',
    seoTitle: 'Industrial Automation & AGV Guides | Tamizh Tech Blog',
    seoDescription: 'Learn about PLC vs SCADA, automated guided vehicles (AGVs), and smart factory automation from Tamizh Tech engineers in Coimbatore.',
    primaryKeyword: 'industrial automation insights India',
    secondaryKeywords: [
      'PLC vs SCADA difference',
      'what is AGV automated guided vehicle',
      'factory automation Coimbatore',
      'industrial robotics case studies'
    ],
    published: true,
    createdAt: '2024-05-01T00:00:00.000Z',
    updatedAt: '2026-03-01T00:00:00.000Z'
  },
  {
    id: 'blog-education',
    slug: 'education',
    name: 'STEM Education & Lab Setup',
    contentType: 'blog',
    description: 'Guides on robotics kits selection, STEM tinkering lab setups for schools, workshop costing, and bilingual technical education.',
    seoTitle: 'STEM Education & School Tinkering Labs | Tamizh Tech Blog',
    seoDescription: 'Articles on setting up school STEM tinkering labs, selecting student robotics kits, and engineering education in Tamil Nadu.',
    primaryKeyword: 'STEM education India insights',
    secondaryKeywords: [
      'STEM tinkering lab setup schools',
      'best robotics kits engineering students',
      'robotics workshop cost Coimbatore',
      'robotics course Tamil vs English'
    ],
    published: true,
    createdAt: '2024-05-01T00:00:00.000Z',
    updatedAt: '2026-03-01T00:00:00.000Z'
  },
  {
    id: 'blog-artificial-intelligence',
    slug: 'artificial-intelligence',
    name: 'Artificial Intelligence & Vision',
    contentType: 'blog',
    description: 'Beginner-friendly and applied guides to OpenCV, Edge AI, deep learning models, and computer vision systems for robotics.',
    seoTitle: 'AI & Computer Vision Guides | Tamizh Tech Blog',
    seoDescription: 'Explore OpenCV, computer vision, and edge artificial intelligence tutorials designed for students and robotics developers.',
    primaryKeyword: 'OpenCV computer vision tutorials',
    secondaryKeywords: [
      'OpenCV for beginners',
      'vision AI in robotics',
      'industrial computer vision inspection',
      'YOLO edge AI deployment'
    ],
    published: true,
    createdAt: '2024-05-01T00:00:00.000Z',
    updatedAt: '2026-03-01T00:00:00.000Z'
  },

  // ── Projects Categories ─────────────────────────────────────────────────────
  {
    id: 'proj-robotics-logistics',
    slug: 'robotics-logistics',
    name: 'Robotics & Logistics',
    contentType: 'projects',
    description: 'Autonomous mobile robots and automated guided vehicles engineered for warehouse distribution and industrial material handling.',
    seoTitle: 'Robotics & Logistics Projects | Tamizh Tech Coimbatore',
    seoDescription: 'Custom autonomous navigation AGV projects designed and manufactured for manufacturing assembly plants in Tamil Nadu.',
    primaryKeyword: 'autonomous AGV project India',
    secondaryKeywords: [
      'autonomous navigation robot',
      'industrial AGV logistics Coimbatore',
      'ROS LiDAR SLAM mobile robot'
    ],
    published: true,
    createdAt: '2024-04-01T00:00:00.000Z',
    updatedAt: '2026-03-01T00:00:00.000Z'
  },
  {
    id: 'proj-artificial-intelligence',
    slug: 'artificial-intelligence',
    name: 'Artificial Intelligence & Vision',
    contentType: 'projects',
    description: 'Industrial machine vision inspection systems powered by edge deep learning models and high-speed GigE cameras.',
    seoTitle: 'AI Vision Quality Inspection Projects | Tamizh Tech',
    seoDescription: 'High-speed AI vision inspection system deployed on casting engine block production lines for real-time micro-defect identification.',
    primaryKeyword: 'AI vision quality inspection system',
    secondaryKeywords: [
      'industrial machine vision project',
      'YOLOv8 edge defect detection',
      'Nvidia Jetson industrial vision'
    ],
    published: true,
    createdAt: '2024-04-01T00:00:00.000Z',
    updatedAt: '2026-03-01T00:00:00.000Z'
  },
  {
    id: 'proj-drone-technology',
    slug: 'drone-technology',
    name: 'Drone Technology',
    contentType: 'projects',
    description: 'Autonomous agricultural hexacopters and specialized aerial platforms with electrostatic liquid spray payloads.',
    seoTitle: 'Agricultural Drone Projects | Tamizh Tech Coimbatore',
    seoDescription: 'Autonomous crop spraying hexacopter drone project with precision electrostatic nozzles and Pixhawk flight control.',
    primaryKeyword: 'agricultural crop spraying drone India',
    secondaryKeywords: [
      'autonomous hexacopter project',
      'precision agriculture UAV Coimbatore',
      'Pixhawk drone development'
    ],
    published: true,
    createdAt: '2024-04-01T00:00:00.000Z',
    updatedAt: '2026-03-01T00:00:00.000Z'
  },

  // ── Events Categories ───────────────────────────────────────────────────────
  {
    id: 'event-competition',
    slug: 'competition',
    name: 'Championships & Competitions',
    contentType: 'events',
    description: 'Regional and national robotics tournaments, hackathons, and multi-track arena competitions for student innovators.',
    seoTitle: 'Robotics Competitions & Championships | Tamizh Tech',
    seoDescription: 'Join national robotics championships, line follower contests, and robo soccer showdowns organized by Tamizh Tech.',
    primaryKeyword: 'robotics championship Coimbatore',
    secondaryKeywords: ['national robotics competition India', 'robo soccer tournament', 'combat bot battle fest'],
    published: true,
    createdAt: '2024-06-01T00:00:00.000Z',
    updatedAt: '2026-03-01T00:00:00.000Z'
  },
  {
    id: 'event-workshop',
    slug: 'workshop',
    name: 'Workshops & Hands-on Camps',
    contentType: 'events',
    description: 'Interactive, in-person engineering workshops covering ROS flight stacks, custom drone hardware, and sensor tuning.',
    seoTitle: 'Robotics & Drone Workshops | Tamizh Tech Coimbatore',
    seoDescription: 'Hands-on autonomous drone and ROS workshops conducted at Tamizh Tech Lab in Coimbatore. Practical hardware sessions.',
    primaryKeyword: 'robotics workshop Coimbatore',
    secondaryKeywords: ['drone workshop Tamil Nadu', 'ROS robotics training session', 'hands-on hardware camp'],
    published: true,
    createdAt: '2024-06-01T00:00:00.000Z',
    updatedAt: '2026-03-01T00:00:00.000Z'
  },
  {
    id: 'event-bootcamp',
    slug: 'bootcamp',
    name: 'Bootcamps & Tech Immersions',
    contentType: 'events',
    description: 'Intensive multi-day training bootcamps exploring Industrial IoT, edge machine learning (TinyML), and cloud protocols.',
    seoTitle: 'Industrial IoT & Edge AI Bootcamps | Tamizh Tech',
    seoDescription: 'Intensive Industrial IoT and Edge AI bootcamp in Coimbatore. Connect sensors, MQTT brokers, and deploy micro-models.',
    primaryKeyword: 'industrial IoT bootcamp India',
    secondaryKeywords: ['Edge AI bootcamp Coimbatore', 'TinyML workshop Tamil Nadu', 'MQTT factory sensors training'],
    published: true,
    createdAt: '2024-06-01T00:00:00.000Z',
    updatedAt: '2026-03-01T00:00:00.000Z'
  },
  {
    id: 'event-webinar',
    slug: 'webinar',
    name: 'Webinars & Expert Sessions',
    contentType: 'events',
    description: 'Free interactive online webinars discussing the future of factory automation, SCADA integration, and robotics careers.',
    seoTitle: 'Industrial Automation Webinars | Tamizh Tech',
    seoDescription: 'Attend live online webinars on SCADA, PLC architecture, and factory automation trends with Tamizh Tech engineers.',
    primaryKeyword: 'industrial automation webinar India',
    secondaryKeywords: ['free robotics webinar', 'SCADA online seminar', 'PLC future trends discussion'],
    published: true,
    createdAt: '2024-06-01T00:00:00.000Z',
    updatedAt: '2026-03-01T00:00:00.000Z'
  }
];

export function getCategoriesByContentType(contentType: Category['contentType']): Category[] {
  return categories.filter((c) => c.contentType === contentType && c.published);
}

export function getCategoryBySlug(contentType: Category['contentType'], slug: string): Category | undefined {
  return categories.find((c) => c.contentType === contentType && c.slug === slug && c.published);
}
