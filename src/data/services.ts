export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: 'core' | 'prototyping' | 'technology' | 'education';
  desc: string;
  features: string[];
  image: string;
  color: string;
  href: string;
}

export const services: ServiceItem[] = [
  // ── Core Engineering ──
  {
    id: "robotics",
    slug: "robotics",
    title: "Robotics & Automation",
    subtitle: "Custom Autonomous & Manipulator Systems",
    category: "core",
    image: "/gallery/10.jpg",
    desc: "We design, fabricate, and deploy custom robotic systems for industrial, educational, and research applications.",
    features: [
      "Custom robot design & chassis fabrication",
      "Autonomous navigation & ROS integration",
      "Combat & tournament competition bots",
      "Robotic arms & end-effector mechanisms"
    ],
    color: "blue",
    href: "/services/robotics-automation"
  },
  {
    id: "automation",
    slug: "industrial-automation",
    title: "Industrial Automation",
    subtitle: "PLC, SCADA & Factory Floor Integration",
    category: "core",
    image: "/gallery/18.jpeg",
    desc: "End-to-end factory automation solutions — from PLCs, HMIs, and SCADA to fully synchronized production cells.",
    features: [
      "PLC & SCADA ladder logic & commissioning",
      "Conveyor & automated material handling",
      "Machine vision defect inspection",
      "Factory process optimization & sensors"
    ],
    color: "red",
    href: "/services/industrial-automation"
  },

  // ── Prototyping & Fabrication (Strategic Commercial Services) ──
  {
    id: "3d-printing",
    slug: "3d-printing",
    title: "3D Printing Services",
    subtitle: "High Quality & Affordable (PLA, PETG, TPU)",
    category: "prototyping",
    image: "/pic/3d printing.jpg",
    desc: "High quality 3D printing services at affordable and best prices. We create prototypes, custom parts, robotic components, and miniatures printed with high precision for smooth and accurate results. Fast delivery and reliable service for all your projects.",
    features: [
      "Prototypes, custom parts, robotic components & miniatures",
      "Available in premium PLA, PETG, and TPU materials",
      "Printed with high precision for smooth and accurate results",
      "Affordable and best price with fast delivery & reliable service"
    ],
    color: "orange",
    href: "/services/3d-printing"
  },
  {
    id: "laser-cutting",
    slug: "laser-cutting",
    title: "Laser Cutting (Stainless Steel)",
    subtitle: "Precision Stainless Steel Cutting (Not Wood)",
    category: "prototyping",
    image: "/pic/laser cutting.jpg",
    desc: "High-precision laser cutting specialized strictly in Stainless Steel (SS 304, SS 316) and sheet metals (not wood). Engineered for high-strength robotic chassis, custom brackets, structural panels, and tight-tolerance mechanical assemblies.",
    features: [
      "High-precision Stainless Steel (SS 304 & SS 316) sheet cutting",
      "Specialized in metal laser cutting — not wood or MDF",
      "Custom robot chassis panels, armor plates & structural brackets",
      "Burr-free clean edges with high-tolerance mechanical snap-fits"
    ],
    color: "yellow",
    href: "/services/laser-cutting"
  },
  {
    id: "pcb-services",
    slug: "pcb-services",
    title: "PCB Services",
    subtitle: "Design + Fabrication + Assembly",
    category: "prototyping",
    image: "/pic/pcb design.jpg",
    desc: "Turnkey printed circuit board services from schematic capture and multi-layer layout to rapid prototype assembly and hardware testing.",
    features: [
      "Schematic design & multi-layer PCB layout",
      "Gerber generation & DRC rule validation",
      "SMD & through-hole component assembly (PCBA)",
      "Power regulation & sensor interface boards"
    ],
    color: "teal",
    href: "/services/pcb-design-fabrication-assembly"
  },

  // ── Technology ──
  {
    id: "embedded",
    slug: "embedded-systems",
    title: "Embedded Systems",
    subtitle: "Firmware & Real-Time Hardware",
    category: "technology",
    image: "/gallery/17.jpeg",
    desc: "Low-level firmware and hardware design for microcontrollers, FPGAs, motor drivers, and real-time deterministic systems.",
    features: [
      "Microcontroller programming (STM32, ESP32, AVR)",
      "Firmware architecture & FreeRTOS development",
      "Protocol integration (CAN, SPI, I2C, UART)",
      "Motor driver & power stage circuitry"
    ],
    color: "orange",
    href: "/services#embedded"
  },
  {
    id: "iot",
    slug: "iot-solutions",
    title: "IoT Solutions",
    subtitle: "Connected Ecosystems & Dashboards",
    category: "technology",
    image: "/gallery/16.jpeg",
    desc: "Connected sensor networks bridging physical hardware with cloud analytics, telemetry dashboards, and remote device monitoring.",
    features: [
      "Industrial sensor network deployment",
      "Cloud telemetry & real-time dashboards",
      "Predictive maintenance & remote telemetry",
      "MQTT, HTTP, & LoRaWAN connectivity"
    ],
    color: "teal",
    href: "/services#iot"
  },
  {
    id: "ai",
    slug: "ai-vision",
    title: "AI & Computer Vision",
    subtitle: "Deep Learning & Quality Inspection",
    category: "technology",
    image: "/gallery/12.jpg",
    desc: "Deep learning models, OpenCV computer vision, and edge artificial intelligence for automated quality control and object tracking.",
    features: [
      "Real-time visual defect detection & OCR",
      "OpenCV image processing & feature extraction",
      "Edge AI deployment on Nvidia Jetson & Raspberry Pi",
      "Custom classification & object tracking models"
    ],
    color: "purple",
    href: "/services#ai"
  },
  {
    id: "drone",
    slug: "drone-technology",
    title: "Drone Technology",
    subtitle: "UAV Design & Aerial Telemetry",
    category: "technology",
    image: "/gallery/14.jpg",
    desc: "Custom UAV airframes, autonomous flight controllers, and payload integration for mapping, agriculture, and telemetry.",
    features: [
      "Custom multirotor & hexacopter airframe assembly",
      "Pixhawk & ArduPilot autonomous waypoint navigation",
      "Agricultural electrostatic spraying payloads",
      "Fail-safe RF telemetry & ground control stations"
    ],
    color: "sky",
    href: "/services#drone"
  },

  // ── Education & R&D ──
  {
    id: "stem",
    slug: "stem-labs",
    title: "STEM Labs",
    subtitle: "Turnkey School & College Tinkering Labs",
    category: "education",
    image: "/gallery/20.jpeg",
    desc: "Turnkey STEM, AI, and Robotics lab setups for schools and colleges — including equipment, structured syllabus, and trainer mentoring.",
    features: [
      "Comprehensive ATL & STEM lab equipment supply",
      "Bilingual hands-on curriculum (Grades 6–12)",
      "Teacher training programs & continuous mentoring",
      "Robotics competition arena kits"
    ],
    color: "green",
    href: "/schools"
  },
  {
    id: "research",
    slug: "research-development",
    title: "Research & Development",
    subtitle: "Applied Engineering & Innovation",
    category: "education",
    image: "/gallery/21.jpeg",
    desc: "Collaborative R&D with institutions and engineering teams for novel product design, prototyping, and applied technology research.",
    features: [
      "Concept feasibility studies & rapid prototyping",
      "College Centre of Excellence (CoE) hardware",
      "Patent and technical documentation support",
      "Interdisciplinary engineering research"
    ],
    color: "indigo",
    href: "/colleges"
  },
  {
    id: "training",
    slug: "corporate-training",
    title: "Training & Workshops",
    subtitle: "Hands-on Technical Upskilling",
    category: "education",
    image: "/gallery/22.jpeg",
    desc: "Practical robotics, PLC automation, and embedded systems training programs for students, faculties, and corporate teams.",
    features: [
      "Hands-on robotics & hardware workshops",
      "Industrial PLC & SCADA masterclasses",
      "Engineering student capstone mentoring",
      "Skill certification programs"
    ],
    color: "yellow",
    href: "/courses"
  },
  {
    id: "consulting",
    slug: "consulting",
    title: "Engineering Consulting",
    subtitle: "Architecture & Feasibility",
    category: "education",
    image: "/gallery/23.jpeg",
    desc: "Expert technical guidance on robotics system architecture, vendor selection, BOM optimization, and automation feasibility.",
    features: [
      "System architecture & hardware review",
      "Component sourcing & BOM cost reduction",
      "Automation feasibility & ROI estimation",
      "Project planning & technical advisory"
    ],
    color: "pink",
    href: "/services#consulting"
  }
];
