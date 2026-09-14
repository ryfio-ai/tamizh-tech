export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface ProductConfiguration {
  id: string;
  name: string;
  price: number;
  sellingPrice?: number;
  regularPrice?: number;
  mrp?: number;
  currency?: "INR";
  sku?: string;
  isDefault?: boolean;
  includedItems?: string[];
  highlights?: string[];
}

export type ProductAvailability = 
  | "in_stock"
  | "out_of_stock"
  | "preorder"
  | "backorder"
  | "InStock" 
  | "OutOfStock" 
  | "PreOrder" 
  | "BackOrder" 
  | "InStoreOnly";

export interface Product {
  id: string;
  slug: string;
  category: string;
  categorySlug: string;
  brand?: string;
  sku?: string;
  availability?: ProductAvailability;
  name: string;
  metaTitle?: string;
  metaDescription?: string;
  shortDescription?: string;
  price?: number;
  sellingPrice?: number;
  regularPrice?: number;
  mrp?: number;
  currency?: "INR";
  priceValidFrom?: string;
  priceValidThrough?: string;
  priceUnit?: string;
  pricingNote?: string;
  configurations?: ProductConfiguration[];
  badge?: string;
  image: string;
  images: string[];
  imageAlts?: string[];
  specs: string;
  highlights: string[];
  whyThisProduct?: {
    heading: string;
    points: string[];
    targetAudience: string[];
  };
  quickAnswer?: string;
  specifications?: string[];
  description: string;
  detailedSpecs: string[];
  applications: string[];
  includedItems?: string[];
  relatedServices?: string[];
  relatedCourses?: string[];
  relatedProjects?: string[];
  faqs: ProductFAQ[];
  status?: "published" | "draft";
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export const products: Product[] = [
  {
    id: "ttrc-lf-5-0",
    slug: "ttrc-lf-5-0",
    category: "Competition Robots",
    categorySlug: "competition",
    brand: "Tamizh Tech",
    sku: "TTRC-C-1",
    availability: "in_stock",
    name: "TTRC LF 5.0",
    metaTitle: "TTRC LF 5.0 Line Follower Robot | Competition Robot | Tamizh Tech",
    metaDescription: "TTRC LF 5.0 autonomous line follower robot with 7-array sensor, TTRC C-Board 5.0 PID controller, and 600 RPM N20 motors. ₹3,799 without battery / ₹4,799 with battery.",
    shortDescription: "TTRC LF 5.0 is a high-speed line follower robot designed for robotics training, STEM education and line follower competition use.",
    quickAnswer: "TTRC LF 5.0 is an autonomous high-speed line follower robot engineered for competitive track navigation using a 7-array sensor, TTRC C-Board 5.0 controller, and 600 RPM high-speed DG N20 motors.",
    price: 3799,
    sellingPrice: 3799,
    currency: "INR",
    configurations: [
      { id: "without-battery", name: "Without Battery", price: 3799, sellingPrice: 3799, currency: "INR", isDefault: true },
      { id: "with-battery", name: "With Battery", price: 4799, sellingPrice: 4799, currency: "INR" }
    ],
    badge: "Competition / Line Follower",
    image: "/product/lfr/1.jpeg",
    images: [
      "/product/lfr/1.jpeg",
      "/product/lfr/2.jpeg",
      "/product/lfr/3.jpeg"
    ],
    imageAlts: [
      "TTRC LF 5.0 line follower robot front view",
      "TTRC LF 5.0 line follower robot side view",
      "TTRC LF 5.0 line follower robot top and component view"
    ],
    specs: "600 RPM DG N20 High-Speed Motors, 40 × 10 × 4 mm HD Wheels, 7-Array Line Sensor, TTRC C-Board 5.0, High-Speed PID-Based Line Tracking.",
    highlights: [
      "600 RPM DG N20 High-Speed Motors",
      "7-Array Line Sensor",
      "TTRC C-Board 5.0",
      "High-Speed PID-Based Line Tracking",
      "155 × 170 × 40 mm Form Factor",
      "Available With or Without Battery"
    ],
    whyThisProduct: {
      heading: "High-Speed Line Tracking Architecture",
      points: [
        "High-speed 600 RPM DG N20 motors for responsive competition pacing.",
        "7-array line sensor provides precision line acquisition.",
        "TTRC C-Board 5.0 controller optimized for PID-based tracking loops.",
        "Compact 155 × 170 × 40 mm form factor with 40 × 10 × 4 mm HD wheels.",
        "Available with or without battery to match team power preferences."
      ],
      targetAudience: ["Robotics Training", "STEM Education", "Line Follower Competitions"]
    },
    includedItems: [
      "TTRC LF 5.0 Robot Chassis & Structural Frame",
      "2x 600 RPM DG N20 High-Speed Motors",
      "2x 40 × 10 × 4 mm HD Wheels",
      "7-Array Line Sensor Module",
      "TTRC C-Board 5.0 High-Speed Controller Board",
      "Optional 350 mAh 11.1V Li-Po Battery (in With Battery Configuration)"
    ],
    relatedServices: ["robotics-automation", "3d-printing", "pcb-design-fabrication-assembly", "laser-cutting"],
    description: "TTRC LF 5.0 is a high-speed line follower robot designed for robotics training, STEM education and line follower competition use.",
    detailedSpecs: [
      "Motor: 600 RPM DG N20 High-Speed Motors",
      "Wheels: 40 × 10 × 4 mm HD Wheels",
      "Sensor: 7-Array Line Sensor",
      "Controller: TTRC C-Board 5.0",
      "Dimensions: 155 × 170 × 40 mm",
      "Control: High-Speed PID-Based Line Tracking",
      "Applications: Robotics Training, STEM Education & Line Follower Competitions"
    ],
    specifications: [
      "Motor: 600 RPM DG N20 High-Speed Motors",
      "Wheels: 40 × 10 × 4 mm HD Wheels",
      "Sensor: 7-Array Line Sensor",
      "Controller: TTRC C-Board 5.0",
      "Dimensions: 155 × 170 × 40 mm",
      "Control: High-Speed PID-Based Line Tracking",
      "Applications: Robotics Training, STEM Education & Line Follower Competitions"
    ],
    applications: [
      "Robotics Training",
      "STEM Education",
      "Line Follower Competitions"
    ],
    relatedCourses: ["robotics-iot-embedded", "arduino-robotics"],
    relatedProjects: ["advanced-kinematics", "computer-vision-edge-ai"],
    faqs: [
      {
        question: "What is the TTRC LF 5.0?",
        answer: "TTRC LF 5.0 is a high-speed line follower robot designed for robotics training, STEM education and line follower competition use."
      },
      {
        question: "What motor does the TTRC LF 5.0 use?",
        answer: "The TTRC LF 5.0 is powered by 600 RPM DG N20 High-Speed Motors."
      },
      {
        question: "What wheels are fitted on the robot?",
        answer: "It is fitted with 40 × 10 × 4 mm HD Wheels for precision surface grip and steering response."
      },
      {
        question: "What sensor array is included?",
        answer: "It includes a 7-Array Line Sensor module for high-accuracy line tracking."
      },
      {
        question: "What controller board powers the robot?",
        answer: "The robot runs on the proprietary TTRC C-Board 5.0 controller with high-speed PID tracking."
      },
      {
        question: "What are the dimensions of the robot?",
        answer: "The robot measures 155 × 170 × 40 mm."
      },
      {
        question: "What are the available configurations and pricing?",
        answer: "The TTRC LF 5.0 is available in two configurations: Without Battery at ₹3,799, and With Battery at ₹4,799."
      },
      {
        question: "How can I enquire about the TTRC LF 5.0?",
        answer: "Click 'ENQUIRE ABOUT THIS PRODUCT' on this page or contact our Coimbatore team via WhatsApp. An official quotation with reference tracking ID will be generated."
      }
    ],
    status: "published",
    published: true,
    createdAt: "2026-03-01T00:00:00.000Z",
    updatedAt: "2026-03-01T00:00:00.000Z"
  },
  {
    id: "rc-robo-race",
    slug: "rc-robo-race",
    category: "Competition Robots",
    categorySlug: "competition",
    brand: "Tamizh Tech",
    sku: "TTRC-C-2",
    availability: "in_stock",
    name: "TTRC RR-5.0",
    metaTitle: "TTRC RR-5.0 Robo Race Robot | Competition Robot | Tamizh Tech",
    metaDescription: "TTRC RR-5.0 tournament robo race robot with 4WD chassis, 600RPM motors, high-torque gearboxes, and 112MM buggy wheels. ₹7,999 Only Bot / ₹20,999 Full Kit.",
    shortDescription: "TTRC RR-5.0 is a competition-oriented robo race platform with a 4-wheel robotic chassis, 600RPM motors and TTRC high-torque gearboxes, available as an Only Bot or Full Kit configuration.",
    quickAnswer: "TTRC RR-5.0 is a tournament-grade 4-wheel drive Robo Race platform equipped with 600 RPM graded diamond motors, TTRC high-torque gearboxes, and 112MM high-traction buggy wheels for extreme track agility.",
    price: 7999,
    sellingPrice: 7999,
    currency: "INR",
    configurations: [
      {
        id: "only-bot",
        name: "Only Bot",
        price: 7999,
        sellingPrice: 7999,
        currency: "INR",
        sku: "TTRC-C-2-A",
        isDefault: true,
        includedItems: [
          "600RPM Graded Diamond Motor × 4",
          "TTRC High-Torque Gearbox × 4",
          "TTRC 112MM Buggy Wheels × 4",
          "TTRC Robo Race Chassis × 1",
          "Extra Screws, Connectors & Wires"
        ],
        highlights: [
          "600RPM Graded Diamond Motors × 4",
          "TTRC High-Torque Gearboxes × 4",
          "112MM Buggy Wheels × 4",
          "TTRC Robo Race Chassis",
          "210 × 250 × 112 mm Approx. Dimensions",
          "4-Wheel Competition Platform"
        ]
      },
      {
        id: "full-kit",
        name: "Full Kit",
        price: 20999,
        sellingPrice: 20999,
        currency: "INR",
        sku: "TTRC-C-2-B",
        includedItems: [
          "600RPM Graded Diamond Motor × 4",
          "TTRC High-Torque Gearbox × 4",
          "TTRC 112MM Buggy Wheels × 4",
          "20D ESC × 1",
          "Dual-Channel Motor Control",
          "1000mAh LiPo Battery + Charger × 1",
          "FlySky FS-i6 × 1",
          "TTRC Robo Race Chassis × 1",
          "Extra Screws, Connectors & Wires"
        ],
        highlights: [
          "600RPM Graded Diamond Motors × 4",
          "TTRC High-Torque Gearboxes × 4",
          "112MM Buggy Wheels × 4",
          "20D ESC & Dual-Channel Motor Control",
          "1000mAh LiPo Battery + Charger",
          "FlySky FS-i6 Transmitter"
        ]
      }
    ],
    badge: "Competition / Robo Race",
    image: "/product/race/race1.png",
    images: [
      "/product/race/race1.png"
    ],
    imageAlts: [
      "TTRC RR-5.0 Robo Race robot"
    ],
    specs: "600RPM Graded Diamond Motor × 4, TTRC High-Torque Gearbox × 4, TTRC 112MM Buggy Wheels × 4, TTRC Robo Race Chassis, 210 × 250 × 112 mm.",
    highlights: [
      "600RPM Graded Diamond Motors × 4",
      "TTRC High-Torque Gearboxes × 4",
      "112MM Buggy Wheels × 4",
      "TTRC Robo Race Chassis",
      "210 × 250 × 112 mm Approx. Dimensions",
      "4-Wheel Competition Platform"
    ],
    whyThisProduct: {
      heading: "WHY TTRC RR-5.0?",
      points: [
        "600RPM Graded Diamond Motors × 4",
        "TTRC High-Torque Gearboxes × 4",
        "112MM Buggy Wheels × 4",
        "Robo Race Chassis",
        "Two configuration choices",
        "Full Kit includes controller electronics, battery and transmitter"
      ],
      targetAudience: [
        "Robotics Teams",
        "Students",
        "Makers",
        "Educational Institutions",
        "Robotics Competition Participants"
      ]
    },
    includedItems: [
      "600RPM Graded Diamond Motor × 4",
      "TTRC High-Torque Gearbox × 4",
      "TTRC 112MM Buggy Wheels × 4",
      "TTRC Robo Race Chassis × 1",
      "Extra Screws, Connectors & Wires"
    ],
    relatedServices: ["robotics-automation", "3d-printing", "laser-cutting", "pcb-design-fabrication-assembly"],
    relatedCourses: ["robotics-iot-embedded", "cad-3d-printing"],
    relatedProjects: ["advanced-kinematics", "ev-smart-mobility"],
    description: "TTRC RR-5.0 is a competition-oriented robo race platform with a 4-wheel robotic chassis, 600RPM motors and TTRC high-torque gearboxes, available as an Only Bot or Full Kit configuration.",
    detailedSpecs: [
      "Motor: 600RPM Graded Diamond Motor × 4",
      "Gearbox: TTRC High-Torque Gearbox × 4",
      "Wheels: TTRC 112MM Buggy Wheels × 4",
      "Chassis: TTRC Robo Race Chassis × 1",
      "ESC: 20D ESC × 1 (Full Kit)",
      "Motor Control: Dual-Channel Motor Control (Full Kit)",
      "Battery: 1000mAh LiPo Battery + Charger × 1 (Full Kit)",
      "Transmitter: FlySky FS-i6 × 1 (Full Kit)",
      "Additional Hardware: Extra Screws, Connectors & Wires",
      "Dimensions: Approx. 210 × 250 × 112 mm"
    ],
    specifications: [
      "Motor: 600RPM Graded Diamond Motor × 4",
      "Gearbox: TTRC High-Torque Gearbox × 4",
      "Wheels: TTRC 112MM Buggy Wheels × 4",
      "Chassis: TTRC Robo Race Chassis × 1",
      "ESC: 20D ESC × 1 (Full Kit)",
      "Motor Control: Dual-Channel Motor Control (Full Kit)",
      "Battery: 1000mAh LiPo Battery + Charger × 1 (Full Kit)",
      "Transmitter: FlySky FS-i6 × 1 (Full Kit)",
      "Additional Hardware: Extra Screws, Connectors & Wires",
      "Dimensions: Approx. 210 × 250 × 112 mm"
    ],
    applications: [
      "Robo Race Competitions",
      "Robotics Training",
      "STEM Education",
      "Robotics Practice"
    ],
    faqs: [
      {
        question: "What is the TTRC RR-5.0?",
        answer: "TTRC RR-5.0 is a competition-oriented robo race platform with a 4-wheel robotic chassis, 600RPM motors and TTRC high-torque gearboxes, available as an Only Bot or Full Kit configuration."
      },
      {
        question: "What configurations are available?",
        answer: "The TTRC RR-5.0 is available in two configurations: Only Bot (SKU: TT0006) at ₹7,999 and Full Kit (SKU: TT0007) at ₹20,999."
      },
      {
        question: "What is included in the Only Bot configuration?",
        answer: "The Only Bot configuration includes: 600RPM Graded Diamond Motor × 4, TTRC High-Torque Gearbox × 4, TTRC 112MM Buggy Wheels × 4, TTRC Robo Race Chassis × 1, and Extra Screws, Connectors & Wires."
      },
      {
        question: "What is included in the Full Kit?",
        answer: "The Full Kit includes: 600RPM Graded Diamond Motor × 4, TTRC High-Torque Gearbox × 4, TTRC 112MM Buggy Wheels × 4, 20D ESC × 1, Dual-Channel Motor Control, 1000mAh LiPo Battery + Charger × 1, FlySky FS-i6 × 1, TTRC Robo Race Chassis × 1, and Extra Screws, Connectors & Wires."
      },
      {
        question: "What motors are used?",
        answer: "The robot utilizes 600RPM Graded Diamond Motor × 4 paired with TTRC High-Torque Gearbox × 4."
      },
      {
        question: "What wheels are used?",
        answer: "The robot is fitted with TTRC 112MM Buggy Wheels × 4 for reliable competition traction."
      },
      {
        question: "What are the robot dimensions?",
        answer: "The approximate dimensions are 210 × 250 × 112 mm."
      },
      {
        question: "Does the Full Kit include the transmitter?",
        answer: "Yes, the Full Kit includes the FlySky FS-i6 transmitter × 1."
      },
      {
        question: "Does the Full Kit include a battery and charger?",
        answer: "Yes, the Full Kit includes a 1000mAh LiPo Battery + Charger × 1."
      },
      {
        question: "What are the prices for the two configurations?",
        answer: "The Only Bot configuration is priced at ₹7,999 and the Full Kit configuration is priced at ₹20,999."
      },
      {
        question: "How can I enquire about the TTRC RR-5.0?",
        answer: "Click 'ENQUIRE ABOUT THIS PRODUCT' on this page or use 'WHATSAPP US' to connect directly with our engineering team at Coimbatore."
      }
    ],
    status: "published",
    published: true,
    createdAt: "2024-01-15T00:00:00.000Z",
    updatedAt: "2026-03-01T00:00:00.000Z"
  },
  {
    id: "rc-robo-soccer",
    slug: "rc-robo-soccer",
    category: "Competition Robots",
    categorySlug: "competition",
    brand: "Tamizh Tech",
    sku: "TTRC-C-3",
    availability: "in_stock",
    name: "ROBO Soccer bot TTRC SOCCER 5.1",
    metaTitle: "ROBO Soccer bot TTRC SOCCER 5.1 | Competition Robot | Tamizh Tech",
    metaDescription: "ROBO Soccer bot TTRC SOCCER 5.1 tournament robot with four 300 RPM motors, high-torque gearboxes, FlySky transmitter, and soccer wheels. ₹21,499 (Original ₹29,000, 26% OFF).",
    shortDescription: "A competition-oriented robotic soccer platform designed for practical robotics training, STEM learning and robo-soccer competition applications.",
    quickAnswer: "ROBO Soccer bot TTRC SOCCER 5.1 is a competition-proven robotic soccer platform designed with four 300 RPM high-torque motors, reinforced competition chassis, and precision speed control for agile ball-handling and defense.",
    price: 21499,
    sellingPrice: 21499,
    regularPrice: 29000,
    mrp: 29000,
    currency: "INR",
    configurations: [
      {
        id: "full-kit",
        name: "Full Kit",
        price: 21499,
        sellingPrice: 21499,
        regularPrice: 29000,
        mrp: 29000,
        currency: "INR",
        sku: "TTRC-C-3-B",
        isDefault: true,
        includedItems: [
          "300 RPM DGJ / Graded Diamond Motor × 4",
          "TTRC High-Torque Gearbox × 4",
          "80MM / 100MM Soccer Wheels × 4",
          "20D ESC × 1",
          "Dual-Channel Motor Control",
          "2200mAh LiPo Battery + Charger × 1",
          "FlySky FS-i6 × 1",
          "TTRC Robo Soccer Chassis × 1",
          "Extra Screws, Connectors & Wires"
        ],
        highlights: [
          "300 RPM DGJ / Graded Diamond Motors × 4",
          "TTRC High-Torque Gearboxes × 4",
          "20D ESC & Dual-Channel Motor Control",
          "2200mAh LiPo Battery + Charger",
          "FlySky FS-i6 Transmitter"
        ]
      },
      {
        id: "only-bot",
        name: "Only Bot",
        price: 7999,
        sellingPrice: 7999,
        currency: "INR",
        sku: "TTRC-C-3-A",
        includedItems: [
          "300 RPM DGJ / Graded Diamond Motor × 4",
          "TTRC High-Torque Gearbox × 4",
          "80MM / 100MM Soccer Wheels × 4",
          "TTRC Robo Soccer Chassis × 1",
          "Extra Screws, Connectors & Wires"
        ],
        highlights: [
          "300 RPM DGJ / Graded Diamond Motors × 4",
          "TTRC High-Torque Gearboxes × 4",
          "80MM / 100MM Soccer Wheels × 4",
          "TTRC Robo Soccer Chassis",
          "280 × 270 × 80 mm Approx. Dimensions"
        ]
      }
    ],
    badge: "Competition / Robo Soccer",
    image: "/product/soccer/soccer 1.0.png",
    images: [
      "/product/soccer/soccer 1.0.png",
      "/product/soccer/soccer1.1.png",
      "/product/soccer/soccer1.2.png"
    ],
    imageAlts: [
      "ROBO Soccer bot TTRC SOCCER 5.1 robot front angle",
      "ROBO Soccer bot TTRC SOCCER 5.1 chassis and drive assembly",
      "ROBO Soccer bot TTRC SOCCER 5.1 complete platform overview"
    ],
    specs: "300 RPM DGJ / Graded Diamond Motor × 4, TTRC High-Torque Gearbox × 4, 80MM / 100MM Soccer Wheels, 280 × 270 × 80 mm.",
    highlights: [
      "300 RPM DGJ / Graded Diamond Motors × 4",
      "TTRC High-Torque Gearboxes × 4",
      "80MM / 100MM Soccer Wheels × 4",
      "TTRC Robo Soccer Chassis",
      "280 × 270 × 80 mm Approx. Dimensions",
      "4-Wheel Competition Platform"
    ],
    whyThisProduct: {
      heading: "WHY TTRC SOCCER 5.1?",
      points: [
        "300 RPM DGJ / Graded Diamond Motors × 4 for consistent torque and pace.",
        "TTRC High-Torque Gearboxes × 4 engineered for competition arena endurance.",
        "Custom 80MM / 100MM Soccer Wheels provide optimal arena grip.",
        "Robust TTRC Robo Soccer Chassis engineered for collision resilience.",
        "Two configuration choices: Full Kit (Ready-to-Play) and Only Bot."
      ],
      targetAudience: ["Robotics Teams", "Students", "Makers", "Educational Institutions", "Competition Participants"]
    },
    includedItems: [
      "300 RPM DGJ / Graded Diamond Motor × 4",
      "TTRC High-Torque Gearbox × 4",
      "80MM / 100MM Soccer Wheels × 4",
      "TTRC Robo Soccer Chassis × 1",
      "Extra Screws, Connectors & Wires"
    ],
    relatedServices: ["robotics-automation", "laser-cutting", "pcb-design-fabrication-assembly", "3d-printing"],
    relatedCourses: ["robotics-iot-embedded", "industrial-automation-plc"],
    relatedProjects: ["advanced-kinematics", "commercial-automation"],
    description: "A competition-oriented robotic soccer platform designed for practical robotics training, STEM learning and robo-soccer competition applications.",
    detailedSpecs: [
      "Motor: 300 RPM DGJ / Graded Diamond Motor × 4",
      "Gearbox: TTRC High-Torque Gearbox × 4",
      "Wheels: 80MM / 100MM Soccer Wheels × 4",
      "Chassis: TTRC Robo Soccer Chassis × 1",
      "ESC: 20D ESC × 1 (Full Kit)",
      "Motor Control: Dual-Channel Motor Control (Full Kit)",
      "Battery: 2200mAh LiPo Battery + Charger × 1 (Full Kit)",
      "Transmitter: FlySky FS-i6 × 1 (Full Kit)",
      "Additional Hardware: Extra Screws, Connectors & Wires",
      "Dimensions: Approx. 280 × 270 × 80 mm"
    ],
    specifications: [
      "Motor: 300 RPM DGJ / Graded Diamond Motor × 4",
      "Gearbox: TTRC High-Torque Gearbox × 4",
      "Wheels: 80MM / 100MM Soccer Wheels × 4",
      "Chassis: TTRC Robo Soccer Chassis × 1",
      "ESC: 20D ESC × 1 (Full Kit)",
      "Motor Control: Dual-Channel Motor Control (Full Kit)",
      "Battery: 2200mAh LiPo Battery + Charger × 1 (Full Kit)",
      "Transmitter: FlySky FS-i6 × 1 (Full Kit)",
      "Additional Hardware: Extra Screws, Connectors & Wires",
      "Dimensions: Approx. 280 × 270 × 80 mm"
    ],
    applications: [
      "Robo Soccer Competitions",
      "Robotics Training",
      "STEM Education",
      "Robotics Practice"
    ],
    faqs: [
      {
        question: "What is the ROBO Soccer bot TTRC SOCCER 5.1?",
        answer: "ROBO Soccer bot TTRC SOCCER 5.1 is a competition-oriented robotic soccer platform designed for practical robotics training, STEM learning and robo-soccer competition applications."
      },
      {
        question: "What configurations are available?",
        answer: "The ROBO Soccer bot TTRC SOCCER 5.1 is available at a discounted selling price of ₹21,499 (Original price: ₹29,000 for Full Kit), and Only Bot at ₹7,999."
      },
      {
        question: "What is included in the Only Bot configuration?",
        answer: "The Only Bot configuration includes: 300 RPM DGJ / Graded Diamond Motor × 4, TTRC High-Torque Gearbox × 4, 80MM / 100MM Soccer Wheels × 4, TTRC Robo Soccer Chassis × 1, and Extra Screws, Connectors & Wires."
      },
      {
        question: "What is included in the Full Kit?",
        answer: "The Full Kit includes: 300 RPM DGJ / Graded Diamond Motor × 4, TTRC High-Torque Gearbox × 4, 80MM / 100MM Soccer Wheels × 4, 20D ESC × 1, Dual-Channel Motor Control, 2200mAh LiPo Battery + Charger × 1, FlySky FS-i6 × 1, TTRC Robo Soccer Chassis × 1, and Extra Screws, Connectors & Wires."
      },
      {
        question: "What motors are used?",
        answer: "It uses 300 RPM DGJ / Graded Diamond Motor × 4 with TTRC High-Torque Gearbox × 4."
      },
      {
        question: "What wheels are fitted?",
        answer: "It is fitted with 80MM / 100MM Soccer Wheels × 4."
      },
      {
        question: "What are the robot dimensions?",
        answer: "The approximate dimensions are 280 × 270 × 80 mm."
      },
      {
        question: "Does the Full Kit include transmitter and battery?",
        answer: "Yes, the Full Kit configuration includes the FlySky FS-i6 transmitter and a 2200mAh LiPo Battery with charger."
      },
      {
        question: "How can I enquire about the ROBO Soccer bot TTRC SOCCER 5.1?",
        answer: "Click 'ENQUIRE ABOUT THIS PRODUCT' on this page or use 'WHATSAPP US' to contact our Coimbatore engineering team directly."
      }
    ],
    status: "published",
    published: true,
    createdAt: "2024-01-15T00:00:00.000Z",
    updatedAt: "2026-03-01T00:00:00.000Z"
  },
  {
    id: "flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver",
    slug: "flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver",
    category: "Radio Controllers",
    categorySlug: "radio-controllers",
    brand: "FlySky",
    sku: "TTRC-R-1",
    availability: "in_stock",
    name: "Flysky FS-i6X 2.4GHz 10CH AFHDS 2A RC Transmitter With FS-iA10B 2.4GHz 10CH Receiver",
    metaTitle: "Flysky FS-i6X 10CH RC Transmitter | Radio Controller | Tamizh Tech",
    metaDescription: "Flysky FS-i6X 2.4GHz 10CH AFHDS 2A RC transmitter with dual-antenna FS-iA10B receiver, i-BUS telemetry, and 135 frequency-hopping channels. ₹6,398.",
    shortDescription: "10-channel AFHDS 2A digital proportional computerized RC system with high-gain dual antennas and bidirectional telemetry.",
    quickAnswer: "The FlySky FS-i6X is a 10-channel 2.4GHz AFHDS 2A digital proportional RC transmitter bundled with the dual-antenna FS-iA10B receiver, featuring 135 frequency-hopping channels and bidirectional telemetry.",
    price: 6398,
    sellingPrice: 6398,
    currency: "INR",
    badge: "10CH Dual Antenna",
    image: "/product/flysky/flysky-fs-i6x-10ch.jpg",
    images: [
      "/product/flysky/flysky-fs-i6x-10ch.jpg"
    ],
    specs: "Bidirectional Communication, 135-channel Hopping, Omni-directional gain antenna, Unique ID recognition system, Low power consumption.",
    highlights: [
      "10-Channel 2.4GHz AFHDS 2A Digital Frequency Hopping",
      "FS-iA10B 10-Channel Telemetry Receiver with Dual Antennas",
      "Dedicated i-BUS Interface & Data Acquisition Support"
    ],
    whyThisProduct: {
      heading: "Reliable Jamming-Free RF Control",
      points: [
        "Covers the whole 2.4GHz band across 135 channels for zero competition interference.",
        "Bi-directional communication enables telemetry sensor feedback to the transmitter.",
        "Configurable from 6 up to 10 channels for multi-motor and auxiliary mechanism control."
      ],
      targetAudience: ["Competition Combat Bot Builders", "Drone & UAV Pilots", "RC Model Builders", "Robotics Labs"]
    },
    includedItems: [
      "FlySky FS-i6X 2.4GHz Transmitter",
      "FlySky FS-iA10B 10-Channel Receiver",
      "Binding Cable & PS/2 Update Cable",
      "User Manual & Quick Reference Sheet"
    ],
    relatedServices: ["robotics-automation", "pcb-design-fabrication-assembly"],
    relatedCourses: ["robotics-iot-embedded"],
    relatedProjects: ["advanced-kinematics", "security-emergency"],
    description: "The Flysky FS-i6X 2.4GHz 10CH AFHDS 2A RC Transmitter With FS-iA10B 2.4GHz 10CH Receiver is specially developed for all radio control models. Offering superior protection against interference while maintaining lower power consumption and high reliable receiver sensitivity.",
    detailedSpecs: [
      "Item: FS-i6X RC Transmitter",
      "Tx Channels: 6-10 (6 Default)",
      "Model Types: Fixed-Wing / Glider / Helicopter",
      "RF Range: 2.408 - 2.475 GHz",
      "RF Power: < 20dBm",
      "RF Channel: 135 Channels",
      "Bandwidth: 500 KHz",
      "System Type: AFHDS 2A / AFDHS",
      "Modulation: GFSK",
      "Stick Resolution: 4096 Levels",
      "Low Voltage Warning: < 4.2V",
      "DSC Port: PS/2 Port PPM",
      "Antenna Length: 26mm (Dual Antenna)",
      "Transmitter Weight: 392g",
      "Power Input: 6V DC 1.5A",
      "Display: STN Transflective Display, LCD 128x64 Lattice, VA 73x39mm with white backlight",
      "Transmitter Dimensions: 174 x 89 x 190 mm",
      "Online Update: Yes",
      "Certificates: CE0678, FCC",
      "Rx Channels (FS-iA10B): 10 Channels",
      "Rx Frequency Range: 2.4 - 2.48 GHz",
      "Rx Sensitivity: -105dBm",
      "Rx Antenna Length: 26mm x 2 (Dual Antenna)",
      "Rx Weight: 19.3g",
      "Rx Input Power: 4.0 - 6.5V DC",
      "Rx Dimensions: 47 x 33.1 x 14.7 mm",
      "i-BUS Interface: Yes",
      "Data Acquisition Interface: Yes"
    ],
    specifications: [
      "Item: FS-i6X RC Transmitter",
      "Tx Channels: 6-10 (6 Default)",
      "RF Range: 2.408 - 2.475 GHz",
      "System Type: AFHDS 2A / AFDHS",
      "Rx Channels: 10 Channels (FS-iA10B)",
      "Telemetry & i-BUS: Supported"
    ],
    applications: [
      "Fixed-Wing, Glider & Helicopter RC Aircraft Control",
      "Multirotor & Quadcopter Telemetry Command Systems",
      "Custom Competition Combat Bots & Rovers Remote Control",
      "Classroom RF System Communication & Telemetry Labs"
    ],
    faqs: [
      {
        question: "How do I bind the FS-i6X transmitter with the FS-iA10B receiver?",
        answer: "Insert the binding cable into the B/VCC port of the receiver. Power the receiver (4.0-6.5V DC) - the LED will flash rapidly. Press and hold the BIND key on the transmitter and switch it on. The receiver LED will flash slowly, indicating a successful bind. Remove the binding cable, restart both devices, and test."
      },
      {
        question: "Can I configure this transmitter for 10 channels?",
        answer: "Yes, the FS-i6X is configured as a 6-channel transmitter by default. You can change this to 10 channels inside the transmitter's system menu: System -> Aux Channels, and change the channel settings to use up to 10 channels."
      },
      {
        question: "Does the FS-iA10B receiver support i-BUS telemetry?",
        answer: "Yes, it has dedicated i-BUS and data acquisition interfaces, allowing you to connect telemetry sensors like temperature, voltage, and altitude modules."
      }
    ],
    status: "published",
    published: true,
    createdAt: "2024-02-10T00:00:00.000Z",
    updatedAt: "2026-03-01T00:00:00.000Z"
  },
  {
    id: "flysky-fs-i6-2.4g-6ch",
    slug: "flysky-fs-i6-2.4g-6ch",
    category: "Radio Controllers",
    categorySlug: "radio-controllers",
    brand: "FlySky",
    sku: "TTRC-R-2",
    availability: "in_stock",
    name: "FlySky FS-i6 2.4G 6CH AFHDS RC Transmitter With FS-iA6 Receiver",
    metaTitle: "FlySky FS-i6 RC Transmitter | 6CH Radio Controller | Tamizh Tech",
    metaDescription: "FlySky FS-i6 2.4GHz 6CH AFHDS RC transmitter with FS-iA6 receiver, 20-model memory, and backlit LCD. ₹5,459 catalogue price with technical enquiry.",
    shortDescription: "Reliable 6-channel 2.4GHz AFHDS 2A remote control system with 20-model memory and jamming-free range.",
    quickAnswer: "The FlySky FS-i6 is a 6-channel 2.4GHz AFHDS remote control system with a backlit LCD, 20-model internal memory, and interference-free frequency hopping engineered for RC robots and models.",
    price: 5459,
    sellingPrice: 5459,
    currency: "INR",
    badge: "6CH AFHDS 2A",
    image: "/product/flysky/flysky-fs-i6-2.4g-6ch.jpg",
    images: [
      "/product/flysky/flysky-fs-i6-2.4g-6ch.jpg"
    ],
    specs: "6 Channels, AFHDS 2A system, 142 channels, 16 channel hopping, High gain omni-directional antenna, Low power consumption.",
    highlights: [
      "AFHDS 2A 2.4GHz Protocol with 16-Channel Hopping",
      "20 Model Profiles Internal Memory Storage",
      "Includes Compact FS-iA6 6-Channel Receiver"
    ],
    whyThisProduct: {
      heading: "Reliable Standard for Students & Aeromodellers",
      points: [
        "Consistent 2.4GHz anti-jamming protocol with low current draw.",
        "Store up to 20 separate vehicle profiles on one lightweight transmitter.",
        "Backlit LCD screen with clear navigation buttons for field trim adjustments."
      ],
      targetAudience: ["Aeromodelling Students", "Combat Robot Drivers", "STEM Labs", "RC Hobbyists"]
    },
    includedItems: [
      "FlySky FS-i6 6-Channel Transmitter",
      "FlySky FS-iA6 6-Channel Receiver",
      "Bind Plug",
      "Quick Start Documentation"
    ],
    relatedServices: ["robotics-automation", "pcb-design-fabrication-assembly"],
    relatedCourses: ["robotics-iot-embedded"],
    relatedProjects: ["advanced-kinematics"],
    description: "The FlySky FS-i6 2.4G 6CH AFHDS RC Transmitter With FS-iA6 Receiver works in the frequency range of 2.405 to 2.475GHz. Uses a high gain and high-quality multi-directional antenna, covering the whole frequency band for jamming-free long-range transmission.",
    detailedSpecs: [
      "Item: FS-i6 RC Transmitter",
      "Channels: 6 Channels",
      "Model Types: Glider / Heli / Airplane",
      "RF Range: 2.40 - 2.48 GHz",
      "Bandwidth: 500 KHz",
      "Bands: 142 Independent Channels",
      "RF Power: < 20dBm",
      "2.4GHz System: AFHDS 2A and AFHDS",
      "Code Type: GFSK",
      "Sensitivity: 1024 Levels",
      "Low Voltage Warning: < 4.2V",
      "DSC Port: PS2 PPM Output",
      "ANT Length: 26mm * 2 (Dual Antenna)",
      "Transmitter Weight: 392g",
      "Power Input: 6V (1.5V AA * 4)",
      "Display: Transflective STN positive type, 128*64 dot-matrix, VA 73*39mm with white backlight",
      "Transmitter Dimensions: 174 x 89 x 190 mm",
      "On-line Update: Yes",
      "Model Memories: 20 Models",
      "Channel Order: Aileron-CH1, Elevator-CH2, Throttle-CH3, Rudder-CH4, CH5 & CH6 open",
      "Certificates: CE0678, FCC",
      "Rx Model: FS-iA6 (6 Channels)",
      "Rx RF Range: 2.40 - 2.48 GHz",
      "Rx Sensitivity: -105dBm",
      "Rx Weight: 6.4g",
      "Rx Power: 4.0 - 6.5V",
      "Rx Dimensions: 40.4 x 21.1 x 7.35 mm"
    ],
    specifications: [
      "Item: FS-i6 RC Transmitter",
      "Channels: 6 Channels",
      "RF Range: 2.40 - 2.48 GHz",
      "Modulation: AFHDS 2A and AFHDS",
      "Rx Included: FS-iA6 (6CH)",
      "Model Memories: 20"
    ],
    applications: [
      "RC Airplane, Glider & Helicopter remote control setups",
      "Entry-level competition robotics & RC cars",
      "Classroom wireless telemetry experiments"
    ],
    faqs: [
      {
        question: "How many model memories does the FS-i6 support?",
        answer: "The FS-i6 transmitter supports up to 20 distinct model memories, allowing you to configure and store profiles for multiple aircraft or robots."
      },
      {
        question: "What is the operating range?",
        answer: "The AFHDS 2A system provides a reliable, jamming-free range of up to 500m to 1km in open line-of-sight environments."
      }
    ],
    status: "published",
    published: true,
    createdAt: "2024-02-10T00:00:00.000Z",
    updatedAt: "2026-03-01T00:00:00.000Z"
  },
  {
    id: "flysky-fs-i6s-2.4g-10ch-afhds-transmitter-with-fs-ia10b-10ch-receiver",
    slug: "flysky-fs-i6s-2.4g-10ch-afhds-transmitter-with-fs-ia10b-10ch-receiver",
    category: "Radio Controllers",
    categorySlug: "radio-controllers",
    brand: "FlySky",
    sku: "TTRC-R-3",
    availability: "in_stock",
    name: "Flysky FS-i6S 2.4G 10CH AFHDS Transmitter With FS-iA10B 10CH Receiver",
    metaTitle: "Flysky FS-i6S Touchscreen Transmitter | 10CH RC Controller | Tamizh Tech",
    metaDescription: "Flysky FS-i6S 10-channel 2.4GHz AFHDS 2A touchscreen RC transmitter with FS-iA10B receiver, USB charging, and 4096-level gimbals. ₹7,398 with technical support.",
    shortDescription: "10-channel 2.4GHz transmitter featuring a full capacitive touchscreen interface, USB charging, and low-latency response.",
    quickAnswer: "The FlySky FS-i6S is a 10-channel 2.4GHz AFHDS 2A transmitter equipped with a capacitive touchscreen interface, dual high-gain antennas, and 4096-level stick resolution for low-latency robotics control.",
    price: 7398,
    sellingPrice: 7398,
    currency: "INR",
    badge: "Touchscreen 10CH",
    image: "/product/flysky/FS-i6S with FS-iA10B 10CH.jpg",
    images: [
      "/product/flysky/FS-i6S with FS-iA10B 10CH.jpg"
    ],
    specs: "10 Channels, Touchscreen interface, AFHDS 2A system, 140 channels, Bidirectional communication, USB charging port.",
    highlights: [
      "Capacitive Touchscreen for Rapid Settings & Mixing Setup",
      "10-Channel AFHDS 2A Protocol with FS-iA10B Telemetry Receiver",
      "Integrated USB Port for Direct PC Simulators and Charging"
    ],
    whyThisProduct: {
      heading: "Modern Touchscreen Simplicity for Robotics & Drones",
      points: [
        "Intuitive touchscreen avoids awkward multi-button menus during quick pit changes.",
        "Smooth self-centering or ratchet gimbal mechanisms suited for both rovers and drones.",
        "Direct USB connectivity simplifies PC flight simulation and training."
      ],
      targetAudience: ["Drone Pilots", "Advanced Bot Builders", "College Project Teams", "Makers"]
    },
    includedItems: [
      "FlySky FS-i6S Touchscreen Transmitter",
      "FlySky FS-iA10B 10-Channel Receiver",
      "Micro-USB Cable",
      "Mobile Phone Mount Bracket",
      "Quick User Manual"
    ],
    relatedServices: ["robotics-automation", "pcb-design-fabrication-assembly"],
    relatedCourses: ["robotics-iot-embedded"],
    relatedProjects: ["advanced-kinematics", "ev-smart-mobility"],
    description: "The FS-i6S transmitter and FS-iA10B Receiver constitute a 10 channel 2.4GHz AFHDS 2A digital proportional computerized RC system with a full capacitive touchscreen interface. Supports quadcopters, multirotors, fixed-wing aircraft, and advanced competition robotics.",
    detailedSpecs: [
      "Item: FS-i6S RC Transmitter",
      "Channels: 10 Channels",
      "Display: Full Capacitive Touchscreen Interface",
      "Frequency Range: 2.4055 - 2.475 GHz",
      "Bandwidth: 500 KHz",
      "Band Number: 140 Independent Channels",
      "Transmitting Power: < 20dBm",
      "2.4G Mode: AFHDS 2A System",
      "Modulation: GFSK",
      "Joystick Resolution: 4096 Levels",
      "Low-Voltage Alarm: < 4.2V",
      "Charging Port: Yes (USB Port)",
      "Input Voltage: 4.2V - 6.0V",
      "Transmitter Weight: 410g",
      "Dimensions: 179 x 81 x 161 mm",
      "New Firmware Features: Trims, Rate/Exp, Throttle curve, Throttle mode, 5 model groups, Context-aware reset, Low signal alarm",
      "Rx Model: FS-iA10B (10 Channels)",
      "Rx Sensitivity: -105dBm",
      "Rx Input Power: 4.0 - 6.5V DC",
      "Certifications: CE0678, FCC"
    ],
    specifications: [
      "Display: Full Capacitive Touchscreen",
      "Channels: 10 Channels",
      "RF Range: 2.4055 - 2.475 GHz",
      "Interface: USB Port & Low-voltage alert",
      "Rx Included: FS-iA10B (10CH)"
    ],
    applications: [
      "Multirotors, Quadcopters & Drone Control Systems",
      "Fixed-Wing Airplanes, Gliders & RC Helicopters",
      "Touchscreen Wireless Telemetry Robotics Setup"
    ],
    faqs: [
      {
        question: "Does the FS-i6S feature a touchscreen?",
        answer: "Yes! The FS-i6S features a full capacitive touchscreen interface for intuitive channel setup, trims, rate adjustments, and throttle curve configurations."
      },
      {
        question: "Can I charge the transmitter via USB?",
        answer: "Yes, the FS-i6S has an integrated USB charging and data port for firmware updates and charging."
      }
    ],
    status: "published",
    published: true,
    createdAt: "2024-02-10T00:00:00.000Z",
    updatedAt: "2026-03-01T00:00:00.000Z"
  },
  {
    id: "flysky-fs-ct6b-2.4g-6ch-radio-set-system-with-rx-fs-r6b-receiver",
    slug: "flysky-fs-ct6b-2.4g-6ch-radio-set-system-with-rx-fs-r6b-receiver",
    category: "Radio Controllers",
    categorySlug: "radio-controllers",
    brand: "FlySky",
    sku: "TTRC-R-4",
    availability: "in_stock",
    name: "FlySky FS-CT6B 2.4G 6CH Radio Set System with RX FS-R6B receiver",
    metaTitle: "FlySky FS-CT6B PC Programmable Transmitter | 6CH Radio Set | Tamizh Tech",
    metaDescription: "FlySky FS-CT6B 2.4GHz 6CH radio set system with FS-R6B receiver and PC USB programming interface. ₹3,548 budget RC controller with technical enquiry.",
    shortDescription: "Cost-effective 6-channel 2.4GHz radio control system with PC computer programming interface and FS-R6B receiver.",
    quickAnswer: "The FlySky FS-CT6B is a cost-effective 6-channel 2.4GHz GFSK radio control system configured via PC computer interface (T6Config) and bundled with a matching FS-R6B 6-channel receiver.",
    price: 3548,
    sellingPrice: 3548,
    currency: "INR",
    badge: "PC Programmable 6CH",
    image: "/product/flysky/flysky-fs-ct6b-2.4g-6ch-radio-set-system-with-rx-fs-r6b-receiver2-550x550.jpg",
    images: [
      "/product/flysky/flysky-fs-ct6b-2.4g-6ch-radio-set-system-with-rx-fs-r6b-receiver2-550x550.jpg"
    ],
    specs: "6 Channels, 2.4GHz GFSK modulation, 1024 sensitivity, LED Low voltage warning, DSC Port for PC programming.",
    highlights: [
      "Direct PC-Based Calibration & Channel Mixing via USB/DSC Cable",
      "Robust 6-Channel 2.4GHz GFSK Frequency Hopping",
      "Cost-Effective Standard for School & College Robotics Teams"
    ],
    whyThisProduct: {
      heading: "Budget-Friendly Lab & Classroom Workhorse",
      points: [
        "Prevents accidental student setting changes by configuring securely via PC software.",
        "Simple, durable chassis built to withstand rigorous laboratory handling.",
        "Reliable baseline 6-channel control for rovers, hovercraft, and gliders."
      ],
      targetAudience: ["Robotics Classrooms", "School Labs", "First-time Bot Builders", "Budget Projects"]
    },
    includedItems: [
      "FlySky FS-CT6B 6-Channel Transmitter",
      "FlySky FS-R6B 6-Channel Receiver",
      "PC Programming Cable (USB to 3.5mm/DSC)",
      "Bind Plug",
      "User Reference Guide"
    ],
    relatedServices: ["robotics-automation"],
    relatedCourses: ["robotics-iot-embedded"],
    relatedProjects: ["commercial-automation"],
    description: "The FlySky FS-CT6B is a 6-channel 2.4GHz radio control system that includes the FS-R6B receiver. Designed for beginner to intermediate RC hobbyists and student robotics developers building helicopters, airplanes, and gliders.",
    detailedSpecs: [
      "Item: FS-CT6B Radio Transmitter",
      "Channels: 6 Channels",
      "Model Types: Helicopter / Airplane / Glider",
      "RF Power: Less than 20dBm",
      "Modulation: GFSK",
      "Code Type: 2.4GHz No Interference",
      "Sensitivity: 1024 Levels",
      "Low Voltage Warning: LED Indicator",
      "DSC Port: Yes (PC computer programming cable interface)",
      "Rx Model: FS-R6B (6 Channels)",
      "Certifications: CE, FCC"
    ],
    specifications: [
      "Item: FS-CT6B Radio Transmitter",
      "Channels: 6 Channels",
      "Programming: PC Software via DSC Port",
      "Rx Included: FS-R6B (6CH)"
    ],
    applications: [
      "RC Helicopters, Airplanes & Gliders Control",
      "Student Robotics & RC Vehicle Projects",
      "PC-configurable 6-channel radio transmitter labs"
    ],
    faqs: [
      {
        question: "How is the FS-CT6B programmed?",
        answer: "The FS-CT6B is programmed via a PC connection cable through its DSC port, allowing you to configure channel mixing, pitch curves, and dual rates using T6Config software."
      }
    ],
    status: "published",
    published: true,
    createdAt: "2024-02-10T00:00:00.000Z",
    updatedAt: "2026-03-01T00:00:00.000Z"
  },
  {
    id: "boxing-bot",
    slug: "boxing-bot",
    category: "Educational Robotics",
    categorySlug: "educational-robotics",
    brand: "Tamizh Tech",
    sku: "TTRC-E-1",
    availability: "in_stock",
    name: "THE BOXING BOT",
    metaTitle: "The Boxing Bot | Educational Boxing Robot Kit | Tamizh Tech",
    metaDescription: "The Boxing Bot 5-DOF educational robotics kit with ESP32 microcontroller, 5 MG995 servos, 4 BO motors, and wireless control for hands-on STEM learning. ₹14,999.",
    shortDescription: "The Boxing Bots is a hands-on robotics kit that lets you build, program, and control real robots while learning through practical experimentation and competitive gameplay.",
    quickAnswer: "The Boxing Bot is an educational robotics kit featuring 5 degrees of freedom, an ESP32 microcontroller, 5 MG995 metal gear servos, and 4 BO motors designed for hands-on STEM learning and competitive robotics gameplay.",
    price: 14999,
    sellingPrice: 14999,
    currency: "INR",
    badge: "Educational STEM Kit",
    image: "/product/boxingrobot/3.jpeg",
    images: [
      "/product/boxingrobot/3.jpeg",
      "/product/boxingrobot/4.jpeg",
      "/product/boxingrobot/1.jpeg",
      "/product/boxingrobot/2.jpeg"
    ],
    imageAlts: [
      "The Boxing Bot educational robotics kit",
      "The Boxing Bot robotic platform and mechanical assembly",
      "The Boxing Bot frontal view with servos and chassis",
      "The Boxing Bot side angle overview"
    ],
    specs: "7.4V Operating Voltage, ESP32 Dev Kit, 5 × MG995 Metal Gear Servos, 4 × BO Motors, Micro USB, 457 × 306 × 102 mm, 3.1 kg, 5 DOF.",
    highlights: [
      "Easy modular assembly",
      "Wireless control via controller or mobile",
      "Programmable and customizable movements",
      "Designed for hands-on STEM learning",
      "Build. Control. Compete. Learn."
    ],
    whyThisProduct: {
      heading: "WHY THE BOXING BOT?",
      points: [
        "Hands-on robotics learning through practical engineering assembly.",
        "Modular mechanical structure that allows rapid building and customization.",
        "Programmable movement logic powered by the versatile ESP32 Dev Kit.",
        "Wireless control flexibility via dedicated controller or mobile device.",
        "Competitive and gamified learning environment for student engagement."
      ],
      targetAudience: [
        "Students",
        "Makers",
        "STEM learners",
        "Educational institutions",
        "Robotics enthusiasts"
      ]
    },
    includedItems: [
      "Robot assembly kit",
      "4 × BO Motors",
      "5 × MG995 Metal Gear Servos",
      "ESP32 Dev Kit (IoT module)",
      "Motor controller",
      "Battery (7.4V)",
      "Game controller",
      "Charger",
      "Micro USB Programming Cable",
      "Hardware accessories & fasteners"
    ],
    relatedServices: ["robotics-automation", "3d-printing", "pcb-design-fabrication-assembly"],
    relatedCourses: ["arduino-robotics", "robotics-iot-embedded"],
    relatedProjects: ["advanced-kinematics", "healthcare-assistive"],
    description: "The Boxing Bots is a hands-on robotics kit that lets you build, program, and control real robots while learning through practical experimentation and competitive gameplay. It combines hardware, wireless control, and guided learning to develop real engineering and problem-solving skills.",
    detailedSpecs: [
      "Type: Educational Robotics Kit",
      "Operating Voltage: 7.4V",
      "Controller: ESP32 Dev Kit",
      "Servo Motors: 5 × MG995 Metal Gear Servos",
      "Drive Motors: 4 × BO Motors",
      "Communication / Charging: Micro USB Cable",
      "Dimensions: 457 × 306 × 102 mm",
      "Weight: 3.1 kg",
      "Degrees of Freedom: 5 DOF"
    ],
    specifications: [
      "Type: Educational Robotics Kit",
      "Operating Voltage: 7.4V",
      "Controller: ESP32 Dev Kit",
      "Servo Motors: 5 × MG995 Metal Gear Servos",
      "Drive Motors: 4 × BO Motors",
      "Communication / Charging: Micro USB Cable",
      "Dimensions: 457 × 306 × 102 mm",
      "Weight: 3.1 kg",
      "Degrees of Freedom: 5 DOF"
    ],
    applications: [
      "Robotics Training",
      "STEM Education",
      "Hands-on Robotics Learning",
      "Robotics Practice",
      "Competitive / Gamified Robotics"
    ],
    faqs: [
      {
        question: "What is The Boxing Bot?",
        answer: "The Boxing Bot is a hands-on educational robotics kit that lets you build, program, and control real robots while learning through practical experimentation and competitive gameplay."
      },
      {
        question: "Who is The Boxing Bot designed for?",
        answer: "It is designed for students, makers, STEM learners, educational institutions, and robotics enthusiasts seeking practical mechatronics experience."
      },
      {
        question: "What controller does the robot use?",
        answer: "The robot is controlled by an ESP32 Dev Kit microcontroller module supporting wireless control and programmable movement."
      },
      {
        question: "What motors are included?",
        answer: "The kit includes 4 × BO Motors for mobility and 5 × MG995 Metal Gear Servos for articulated boxing mechanisms."
      },
      {
        question: "How many servo motors are included?",
        answer: "There are 5 × MG995 Metal Gear Servos included in the kit."
      },
      {
        question: "What is the operating voltage?",
        answer: "The operating voltage of the robot system is 7.4V."
      },
      {
        question: "What are the robot dimensions?",
        answer: "The dimensions are 457 × 306 × 102 mm with a total weight of approximately 3.1 kg."
      },
      {
        question: "How many degrees of freedom does it have?",
        answer: "The robot features 5 Degrees of Freedom (5 DOF) for multi-axis arm motion and competitive actions."
      },
      {
        question: "Does the kit include a battery and charger?",
        answer: "Yes, the kit includes a 7.4V battery, compatible charger, and micro USB cable for programming and charging."
      },
      {
        question: "How can I enquire about The Boxing Bot?",
        answer: "Click 'ENQUIRE ABOUT THIS PRODUCT' on this page or use 'WHATSAPP US' to connect directly with the Tamizh Tech engineering team in Coimbatore."
      }
    ],
    status: "published",
    published: true,
    createdAt: "2024-03-01T00:00:00.000Z",
    updatedAt: "2026-03-01T00:00:00.000Z"
  },
  {
    id: "112mm-buggy-wheel",
    slug: "112mm-buggy-wheel",
    category: "Robotics Components",
    categorySlug: "robotics-components",
    brand: "Tamizh Tech",
    sku: "TTRC-RC-1",
    availability: "in_stock",
    name: "112MM BUGGY WHEEL",
    metaTitle: "112MM Buggy Wheel | Robotics Competition Wheel | Tamizh Tech",
    metaDescription: "112MM Buggy Wheel for competition robots. 112mm diameter, 45mm width, 6mm hub ID, reinforced rim, high-traction rubber tyre. ₹2,999 set of 4 with quotation.",
    shortDescription: "A 112mm buggy wheel with a plastic wheel body, rubber tyre, 45mm thickness, 6mm hub ID and 92g wheel weight.",
    quickAnswer: "The 112MM Buggy Wheel is a competition-grade robotics wheel featuring a 112mm outer diameter, 45mm rim width, 6mm internal hub diameter, and high-traction rubber tyre with foam insert supplied in a set of 4 pieces.",
    price: 2999,
    sellingPrice: 2999,
    currency: "INR",
    priceUnit: "/ 4 pcs",
    pricingNote: "Need fewer than 4 pcs? Contact our team for availability and pricing.",
    badge: "Competition Wheels",
    image: "/product/wheels/buggy wheel/112mm wheel 1.jpg",
    images: [
      "/product/wheels/buggy wheel/112mm wheel 1.jpg",
      "/product/wheels/buggy wheel/112mm wheel 2.jpg",
      "/product/wheels/buggy wheel/112mm wheel 3.jpg"
    ],
    imageAlts: [
      "112MM Buggy Wheel high-traction robotics wheel",
      "112MM Buggy Wheel side view showing hub diameter",
      "112MM Buggy Wheel tire tread pattern"
    ],
    specs: "Plastic body, rubber tyre, 112mm diameter, 45mm thickness, 6mm hub ID, 92g weight.",
    highlights: [
      "112 mm Outer Diameter with 45 mm Rim Width",
      "High-Traction Rubber Tyre with Foam Insert",
      "Reinforced Plastic Wheel Hub with 6 mm Bore",
      "92 g Lightweight Competition Engineering",
      "Pre-assembled Set of 4 Wheels"
    ],
    whyThisProduct: {
      heading: "Competition-Grade High Traction Wheel",
      points: [
        "112mm diameter delivers optimal linear speed across racing tracks and competition arenas.",
        "High-traction rubber tyre tread grips firmly on wood, vinyl, and composite competition floors.",
        "Direct fit with 6mm motor shafts (standard for high-speed Johnson/DC competition motors)."
      ],
      targetAudience: ["Robo Race Teams", "Combat Bot Builders", "Heavy-Duty Rover Projects", "Robotics Colleges"]
    },
    includedItems: [
      "112MM Buggy Wheels × 4",
      "Pre-mounted Rubber Tyres with Foam Insert × 4",
      "Set Screw / Hub Mounting Hardware"
    ],
    relatedServices: ["robotics-automation", "3d-printing"],
    relatedCourses: ["cad-3d-printing", "robotics-iot-embedded"],
    relatedProjects: ["advanced-kinematics", "ev-smart-mobility"],
    description: "A 112mm buggy wheel with a plastic wheel body, rubber tyre, 45mm thickness, 6mm hub ID and 92g wheel weight.",
    detailedSpecs: [
      "Wheel Diameter: 112 mm",
      "Tyre Width: 45 mm",
      "Hub Inside Diameter (ID): 6 mm",
      "Wheel Weight: 92 g per wheel",
      "Body Material: High-impact reinforced plastic rim",
      "Tyre Material: High-traction synthetic rubber with foam insert",
      "Compatibility: 6mm D-shaft and round shaft geared motors"
    ],
    specifications: [
      "Diameter: 112 mm",
      "Thickness: 45 mm",
      "Hub ID: 6 mm",
      "Weight: 92 g",
      "Pack: Set of 4 Pieces"
    ],
    applications: [
      "National Robo Race competitions",
      "Robo Soccer all-terrain drive platforms",
      "High-speed autonomous mobile robots (AMRs)",
      "Rough-surface indoor and outdoor testing rovers"
    ],
    faqs: [
      {
        question: "Does the 112mm wheel fit standard 6mm Johnson motor shafts?",
        answer: "Yes, the 6mm hub ID is directly compatible with standard 6mm motor shafts including TTRC high-torque geared motors."
      },
      {
        question: "Can I buy fewer than 4 pieces?",
        answer: "The standard catalogue packaging is a set of 4 pieces. If you need single replacement wheels or custom quantities, please contact our team via enquiry."
      }
    ],
    status: "published",
    published: true,
    createdAt: "2024-03-01T00:00:00.000Z",
    updatedAt: "2026-03-01T00:00:00.000Z"
  },
  {
    id: "100mm-buggy-wheel",
    slug: "100mm-buggy-wheel",
    category: "Robotics Components",
    categorySlug: "robotics-components",
    brand: "Tamizh Tech",
    sku: "TTRC-RC-2",
    availability: "in_stock",
    name: "100MM BUGGY WHEEL",
    metaTitle: "100MM Buggy Wheel | Robotics Competition Wheel | Tamizh Tech",
    metaDescription: "100MM Buggy Wheel for robotics racing. 100mm outer diameter, 35mm tyre width, 6mm hub ID, plastic rim, and high-traction rubber tyre. ₹2,999 set of 4 pieces.",
    shortDescription: "A 100mm buggy wheel with a plastic rim and rubber tyre, 35mm tyre width and black tyre/rim finish.",
    quickAnswer: "The 100MM Buggy Wheel is a low-profile competition wheel engineered with a 100mm outer diameter, 35mm tyre width, 6mm hub ID, and high-traction synthetic rubber tread supplied as a balanced set of 4 pieces.",
    price: 2999,
    sellingPrice: 2999,
    currency: "INR",
    priceUnit: "/ 4 pcs",
    pricingNote: "Need fewer than 4 pcs? Contact our team for availability and pricing.",
    badge: "Competition Wheels",
    image: "/product/wheels/buggy wheel/100mm wheel 1.jpg",
    images: [
      "/product/wheels/buggy wheel/100mm wheel 1.jpg",
      "/product/wheels/buggy wheel/100mm wheel 2.jpg",
      "/product/wheels/buggy wheel/100mm wheel 3.jpg"
    ],
    imageAlts: [
      "100MM Buggy Wheel high traction robotics tire",
      "100MM Buggy Wheel rim and tread detail",
      "100MM Buggy Wheel rear view with hub mount"
    ],
    specs: "Plastic rim, rubber tyre, 100mm outer diameter, 35mm tyre width, black finish, pack of 4.",
    highlights: [
      "100 mm Outer Diameter with 35 mm Tyre Width",
      "Plastic Rim with High-Quality Synthetic Rubber Tyre",
      "Black Finish with Reinforced Multi-Spoke Hub",
      "Pre-assembled Set of 4 Competition Wheels"
    ],
    whyThisProduct: {
      heading: "Low-Profile High-Agility Competition Wheel",
      points: [
        "100mm diameter provides quick acceleration and high maneuverability in tight turns.",
        "35mm tyre width minimizes rolling friction while maintaining dependable floor traction.",
        "Ideal replacement wheel for standard collegiate Robo Race and Robo Soccer chassis platforms."
      ],
      targetAudience: ["Robo Race Teams", "Robotics Hobbyists", "University Competition Clubs", "Rover Builders"]
    },
    includedItems: [
      "100MM Buggy Wheels × 4",
      "Pre-mounted High-Traction Rubber Tyres × 4"
    ],
    relatedServices: ["robotics-automation", "3d-printing"],
    relatedCourses: ["cad-3d-printing"],
    relatedProjects: ["advanced-kinematics"],
    description: "A 100mm buggy wheel with a plastic rim and rubber tyre, 35mm tyre width and black tyre/rim finish.",
    detailedSpecs: [
      "Material: Plastic Rim and high-quality Rubber Tyre",
      "Outer Diameter: 100 mm",
      "Tyre Width: 35 mm",
      "Color: Tire: Black; Rim: Black",
      "Standard Packaging: 4 Pieces Set"
    ],
    specifications: [
      "Material: Plastic Rim and high-quality Rubber Tyre",
      "Outer Diameter: 100 mm",
      "Tyre Width: 35 mm",
      "Color: Tire: Black; Rim: Black"
    ],
    applications: [
      "Robo Race Competitions",
      "Robo Soccer Mobile Platforms",
      "Obstacle Navigation Rovers",
      "STEM Educational Robotics"
    ],
    faqs: [
      {
        question: "Is the listed price for one wheel or four wheels?",
        answer: "The listed catalogue prices are for a set of 4 pieces (₹2,999 for 4 pcs)."
      },
      {
        question: "Can I order fewer than 4 pieces?",
        answer: "For quantities below 4 pieces, please contact the Tamizh Tech team for availability and pricing."
      },
      {
        question: "What are the dimensions of this wheel?",
        answer: "The outer diameter is 100 mm with a tyre width of 35 mm."
      },
      {
        question: "What materials are used?",
        answer: "The wheel is constructed with a durable plastic rim and a high-quality rubber tyre."
      },
      {
        question: "How can I enquire about the 100MM Buggy Wheel?",
        answer: "Click 'ENQUIRE ABOUT THIS PRODUCT' on this page or reach our Coimbatore team on WhatsApp."
      }
    ],
    status: "published",
    published: true,
    createdAt: "2024-03-01T00:00:00.000Z",
    updatedAt: "2026-03-01T00:00:00.000Z"
  },
  {
    id: "ttrc-hd-80mm-wheel",
    slug: "ttrc-hd-80mm-wheel",
    category: "Robotics Components",
    categorySlug: "robotics-components",
    brand: "Tamizh Tech",
    sku: "TTRC-RC-3",
    availability: "in_stock",
    name: "TTRC HD 80MM WHEEL",
    metaTitle: "TTRC HD 80MM Wheel | Heavy Duty Nylon Robotics Wheel | Tamizh Tech",
    metaDescription: "TTRC HD 80MM heavy-duty white nylon robotics wheel. 88.9mm diameter, 60mm thickness, 6mm hub ID for combat bots and rovers. ₹1,999 set of 4 pieces on enquiry.",
    shortDescription: "A TTRC HD wheel supplied in white with the stated dimensions, 6mm hub ID and 130 weight value from the source.",
    quickAnswer: "The TTRC HD 80MM Wheel is a heavy-duty white nylon robotics wheel featuring an 88.9mm diameter, 60mm broad thickness, and 6mm hub ID engineered for high-impact combat robots and heavy industrial rovers.",
    price: 1999,
    sellingPrice: 1999,
    currency: "INR",
    priceUnit: "/ 4 pcs",
    pricingNote: "Need fewer than 4 pcs? Contact our team for availability and pricing.",
    badge: "Heavy Duty Wheel",
    image: "/product/wheels/nylon wheel/80mm wheel 1.jpg",
    images: [
      "/product/wheels/nylon wheel/80mm wheel 1.jpg",
      "/product/wheels/nylon wheel/80mm wheel 2.jpg"
    ],
    imageAlts: [
      "TTRC HD 80MM Wheel white heavy duty construction view",
      "TTRC HD 80MM Wheel side profile and hub detail"
    ],
    specs: "Color: White, Sizes: 88.9 × 35 mm, Thickness: 60 mm, Diameter: 88.9 mm, Hub (ID): 6 mm, Weight: 130.",
    highlights: [
      "High-Density Heavy Duty Rigid Construction",
      "Stated Diameter: 88.9 mm with 60 mm Thickness",
      "6 mm Internal Hub Diameter (Hub ID)",
      "High Impact-Resistant White Body",
      "Standard Catalogue Pricing: ₹1,999 for 4 pcs"
    ],
    whyThisProduct: {
      heading: "Heavy-Duty Collision-Resistant Architecture",
      points: [
        "Rigid high-density composite body engineered for high-impact robot battles and combat.",
        "60 mm broad thickness provides extensive ground surface footprint.",
        "6 mm hub ID compatible with standard industrial and competition gear motors.",
        "Supplied as a set of 4 wheels for unified 4-wheel drive power delivery."
      ],
      targetAudience: ["Robo Soccer Teams", "Combat Robotics Competitors", "Industrial Rover Builders", "STEM Labs"]
    },
    includedItems: [
      "TTRC HD 80MM Wheels × 4"
    ],
    relatedServices: ["robotics-automation", "3d-printing", "laser-cutting"],
    relatedCourses: ["cad-3d-printing", "industrial-automation-plc"],
    relatedProjects: ["advanced-kinematics", "industrial-manufacturing"],
    description: "A TTRC HD wheel supplied in white with the stated dimensions, 6mm hub ID and 130 weight value from the source.",
    detailedSpecs: [
      "Color: White",
      "Sizes: 88.9 × 35 mm",
      "Thickness: 60 mm",
      "Diameter: 88.9 mm",
      "Hub (ID): 6 mm",
      "Weight: 130",
      "Standard Packaging: 4 Pieces Set"
    ],
    specifications: [
      "Color: White",
      "Sizes: 88.9 × 35 mm",
      "Thickness: 60 mm",
      "Diameter: 88.9 mm",
      "Hub (ID): 6 mm",
      "Weight: 130"
    ],
    applications: [
      "Robo Soccer Platforms",
      "Heavy-Duty Ground Vehicles",
      "Combat and Defense Robotics Trials",
      "High-load Mobile Platforms"
    ],
    faqs: [
      {
        question: "Is the listed price for one wheel or four wheels?",
        answer: "The listed catalogue prices are for a set of 4 pieces (₹1,999 for 4 pcs)."
      },
      {
        question: "Can I order fewer than 4 pieces?",
        answer: "For quantities below 4 pieces, please contact the Tamizh Tech team for availability and pricing."
      },
      {
        question: "What is the hub ID of the TTRC HD 80MM Wheel?",
        answer: "The internal hub diameter (Hub ID) is 6 mm."
      },
      {
        question: "What is the stated diameter and thickness?",
        answer: "The supplied specifications state a diameter of 88.9 mm and a thickness of 60 mm."
      },
      {
        question: "How can I enquire about the TTRC HD 80MM Wheel?",
        answer: "Click 'ENQUIRE ABOUT THIS PRODUCT' on this page or use 'WHATSAPP US' to speak directly with our team in Coimbatore."
      }
    ],
    status: "published",
    published: true,
    createdAt: "2024-03-01T00:00:00.000Z",
    updatedAt: "2026-03-01T00:00:00.000Z"
  },
  {
    id: "ttrc-dgj-300rpm",
    slug: "ttrc-dgj-300rpm",
    category: "Robotics Components",
    categorySlug: "robotics-components",
    brand: "Tamizh Tech",
    sku: "TTRC-RC-4",
    availability: "in_stock",
    name: "TTRC DGJ 300RPM",
    metaTitle: "TTRC DGJ 300RPM | Geared DC Motor | Tamizh Tech",
    metaDescription: "TTRC DGJ 300RPM geared DC motor for robotics. 18,000 base RPM, 6–18V operating range, 12V rated, 34.2 N-cm rated torque, 300 N-cm stall torque. ₹649 verified unit price.",
    shortDescription: "TTRC DGJ 300RPM is a geared DC motor designed for robotics and engineering applications, with a 6–18V operating range, 12V rated voltage and the supplied torque specifications.",
    quickAnswer: "The TTRC DGJ 300RPM is a high-torque geared DC motor engineered for robotics with an 18,000 base motor RPM, 6–18V operating range (12V rated), 34.2 N-cm rated torque, and 300 N-cm stall torque in a 25 × 37 mm gearbox.",
    price: 649,
    sellingPrice: 649,
    currency: "INR",
    pricingNote: "Verified single unit catalogue price. Official quotation provided on enquiry. No online payment.",
    badge: "Geared DC Motor",
    image: "/product/dc motors/300rpm johnson 1.jpg",
    images: [
      "/product/dc motors/300rpm johnson 1.jpg",
      "/product/dc motors/300rpm johnson 2.jpg"
    ],
    imageAlts: [
      "TTRC DGJ 300RPM geared DC motor",
      "TTRC DGJ 300RPM motor side view"
    ],
    specs: "TTRC DGJ 300 RPM, 300RPM motor. Base Motor RPM: 18000, Operating Voltage: 6–18 V, Rated Voltage: 12 V, Rated Torque: 34.2 N-cm, Stall Torque: 300 N-cm, Gearbox Dimensions: 25 × 37 (L × W) mm.",
    highlights: [
      "Base Motor RPM: 18000",
      "Operating Voltage: 6–18 V (Rated 12 V)",
      "Rated Torque: 34.2 N-cm",
      "Stall Torque: 300 N-cm",
      "Gearbox Dimensions: 25 × 37 (L × W) mm",
      "Catalogue Price: ₹649"
    ],
    whyThisProduct: {
      heading: "Verified Mechatronic Specifications",
      points: [
        "6–18V operating range with 12V rated operating voltage.",
        "34.2 N-cm rated torque output for dependable drive transmission.",
        "300 N-cm stall torque for high load resistance in robotics platforms.",
        "25 × 37 mm gearbox dimensions for compact integration.",
        "18000 base motor RPM engineered for geared reduction applications."
      ],
      targetAudience: ["Robotics", "Mobile Robots", "Educational Robotics", "Prototype Builds", "Custom Engineering"]
    },
    includedItems: [
      "TTRC DGJ 300RPM Geared DC Motor (SKU #TTRC-RC-4)"
    ],
    relatedServices: ["robotics-automation", "3d-printing", "laser-cutting", "pcb-design-fabrication-assembly"],
    relatedCourses: ["robotics-iot-embedded", "arduino-robotics"],
    relatedProjects: ["advanced-kinematics", "commercial-automation"],
    description: "TTRC DGJ 300RPM is a geared DC motor designed for robotics and engineering applications, with a 6–18V operating range, 12V rated voltage and the supplied torque specifications.",
    detailedSpecs: [
      "Base Motor RPM: 18000",
      "Operating Voltage: 6–18 V",
      "Rated Voltage: 12 V",
      "Rated Torque: 34.2 N-cm",
      "Stall Torque: 300 N-cm",
      "Gearbox Dimensions: 25 × 37 (L × W) mm"
    ],
    specifications: [
      "Base Motor RPM: 18000",
      "Operating Voltage: 6–18 V",
      "Rated Voltage: 12 V",
      "Rated Torque: 34.2 N-cm",
      "Stall Torque: 300 N-cm",
      "Gearbox Dimensions: 25 × 37 (L × W) mm"
    ],
    applications: [
      "Robotics",
      "Mobile Robots",
      "Educational Robotics",
      "Prototype Builds",
      "Custom Engineering"
    ],
    faqs: [
      {
        question: "What are the operating and rated voltages for the TTRC DGJ 300RPM motor?",
        answer: "The TTRC DGJ 300RPM operates between 6–18 V with a rated voltage of 12 V."
      },
      {
        question: "What is the torque rating of the TTRC DGJ 300RPM motor?",
        answer: "The motor provides a rated torque of 34.2 N-cm and a stall torque of 300 N-cm."
      },
      {
        question: "What are the gearbox dimensions?",
        answer: "The gearbox dimensions are 25 × 37 (L × W) mm."
      },
      {
        question: "How do I enquire or place an order for the TTRC DGJ 300RPM motor?",
        answer: "Click 'ENQUIRE ABOUT THIS PRODUCT' on this page or use 'WHATSAPP US' to speak directly with our engineering team in Coimbatore."
      }
    ],
    status: "published",
    published: true,
    createdAt: "2024-03-01T00:00:00.000Z",
    updatedAt: "2026-03-01T00:00:00.000Z"
  },
  {
    id: "ttrc-dgj-600rpm",
    slug: "ttrc-dgj-600rpm",
    category: "Robotics Components",
    categorySlug: "robotics-components",
    brand: "Tamizh Tech",
    sku: "TTRC-RC-5",
    availability: "in_stock",
    name: "TTRC DGJ 600RPM",
    metaTitle: "TTRC DGJ 600RPM | Geared DC Motor | Tamizh Tech",
    metaDescription: "TTRC DGJ 600RPM high-speed geared DC motor for robotics. 18,000 base RPM, 6–18V range, 12V rated, 15.1 N-cm rated torque, 122 N-cm stall torque. ₹699 catalogue price.",
    shortDescription: "TTRC DGJ 600RPM is a geared DC motor designed for robotics and engineering applications, with a 6–18V operating range, 12V rated voltage and the supplied torque specifications.",
    quickAnswer: "The TTRC DGJ 600RPM is a high-speed geared DC motor designed for competition robots, offering an 18,000 base motor RPM, 6–18V operating range (12V rated), 15.1 N-cm rated torque, and 122 N-cm stall torque in a 22 × 37 mm gearbox.",
    price: 699,
    sellingPrice: 699,
    currency: "INR",
    pricingNote: "Verified single unit catalogue price. Official quotation provided on enquiry. No online payment.",
    badge: "Geared DC Motor",
    image: "/product/dc motors/600rpm johnson 1.jpg",
    images: [
      "/product/dc motors/600rpm johnson 1.jpg",
      "/product/dc motors/600rpm johnson 2.jpg"
    ],
    imageAlts: [
      "TTRC DGJ 600RPM geared DC motor",
      "TTRC DGJ 600RPM motor side view"
    ],
    specs: "TTRC DGJ 600 RPM, 600RPM motor. Base Motor RPM: 18000, Operating Voltage: 6–18 V, Rated Voltage: 12 V, Rated Torque: 15.1 N-cm, Stall Torque: 122 N-cm, Gearbox Dimensions: 22 × 37 (L × W) mm.",
    highlights: [
      "Base Motor RPM: 18000",
      "Operating Voltage: 6–18 V (Rated 12 V)",
      "Rated Torque: 15.1 N-cm",
      "Stall Torque: 122 N-cm",
      "Gearbox Dimensions: 22 × 37 (L × W) mm",
      "Catalogue Price: ₹699"
    ],
    whyThisProduct: {
      heading: "Verified Mechatronic Specifications",
      points: [
        "6–18V operating range with 12V rated operating voltage.",
        "15.1 N-cm rated torque output for responsive motion dynamics.",
        "122 N-cm stall torque for agile robotics maneuvers.",
        "22 × 37 mm gearbox dimensions for compact integration.",
        "18000 base motor RPM engineered for geared reduction applications."
      ],
      targetAudience: ["Robotics", "Mobile Robots", "Educational Robotics", "Prototype Builds", "Custom Engineering"]
    },
    includedItems: [
      "TTRC DGJ 600RPM Geared DC Motor (SKU #TTRC-RC-5)"
    ],
    relatedServices: ["robotics-automation", "3d-printing", "laser-cutting", "pcb-design-fabrication-assembly"],
    relatedCourses: ["robotics-iot-embedded", "cad-3d-printing"],
    relatedProjects: ["advanced-kinematics", "ev-smart-mobility"],
    description: "TTRC DGJ 600RPM is a geared DC motor designed for robotics and engineering applications, with a 6–18V operating range, 12V rated voltage and the supplied torque specifications.",
    detailedSpecs: [
      "Base Motor RPM: 18000",
      "Operating Voltage: 6–18 V",
      "Rated Voltage: 12 V",
      "Rated Torque: 15.1 N-cm",
      "Stall Torque: 122 N-cm",
      "Gearbox Dimensions: 22 × 37 (L × W) mm"
    ],
    specifications: [
      "Base Motor RPM: 18000",
      "Operating Voltage: 6–18 V",
      "Rated Voltage: 12 V",
      "Rated Torque: 15.1 N-cm",
      "Stall Torque: 122 N-cm",
      "Gearbox Dimensions: 22 × 37 (L × W) mm"
    ],
    applications: [
      "Robotics",
      "Mobile Robots",
      "Educational Robotics",
      "Prototype Builds",
      "Custom Engineering"
    ],
    faqs: [
      {
        question: "What are the operating and rated voltages for the TTRC DGJ 600RPM motor?",
        answer: "The TTRC DGJ 600RPM operates between 6–18 V with a rated voltage of 12 V."
      },
      {
        question: "What is the torque rating of the TTRC DGJ 600RPM motor?",
        answer: "The motor provides a rated torque of 15.1 N-cm and a stall torque of 122 N-cm."
      },
      {
        question: "What are the gearbox dimensions?",
        answer: "The gearbox dimensions are 22 × 37 (L × W) mm."
      },
      {
        question: "How do I enquire or place an order for the TTRC DGJ 600RPM motor?",
        answer: "Click 'ENQUIRE ABOUT THIS PRODUCT' on this page or use 'WHATSAPP US' to speak directly with our engineering team in Coimbatore."
      }
    ],
    status: "published",
    published: true,
    createdAt: "2024-03-01T00:00:00.000Z",
    updatedAt: "2026-03-01T00:00:00.000Z"
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  if (!slug || typeof slug !== "string") return undefined;
  // 1. Exact match
  const exact = products.find(p => p.slug === slug);
  if (exact) return exact;

  // 2. Normalized match (hyphens/dots removed)
  const normalized = slug.replace(/[.-]/g, "").toLowerCase();
  const normMatch = products.find(p => p.slug.replace(/[.-]/g, "").toLowerCase() === normalized);
  if (normMatch) return normMatch;

  // 3. Fallback by ID or lowercase
  return products.find(p => p.id === slug || p.slug.toLowerCase() === slug.toLowerCase());
}

export function getProductByCategoryAndSlug(categorySlug: string, slug: string): Product | undefined {
  if (!categorySlug || !slug) return undefined;
  const product = getProductBySlug(slug);
  if (!product || product.categorySlug !== categorySlug || !product.published) {
    return undefined;
  }
  return product;
}

export function getProductsByCategorySlug(categorySlug: string): Product[] {
  return products.filter(p => p.categorySlug === categorySlug && p.published);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => (p.category === category || p.categorySlug === category) && p.published);
}

/**
 * Standard SKU generator for Tamizh Tech products.
 * Format: TTRC-{Category Initials}-{1 to infinity}
 * Example:
 * - Competition Robots -> TTRC-C-1, TTRC-C-2, ...
 * - Radio Controllers -> TTRC-R-1, TTRC-R-2, ...
 * - Educational Robotics -> TTRC-E-1, TTRC-E-2, ...
 * - Robotics Components -> TTRC-RC-1, TTRC-RC-2, ...
 */
export function getCategorySkuPrefix(categorySlugOrName: string): string {
  const norm = (categorySlugOrName || "").toLowerCase();
  if (norm.includes("component")) return "RC";
  if (norm.includes("competition")) return "C";
  if (norm.includes("radio") || norm.includes("controller")) return "R";
  if (norm.includes("education")) return "E";
  // Fallback: first letter of each significant word
  const words = categorySlugOrName.replace(/[^a-zA-Z0-9 ]/g, " ").trim().split(/\s+/);
  return words.map(w => w[0]?.toUpperCase() || "").join("") || "GEN";
}

export function generateNextProductSku(categorySlugOrName: string): string {
  const prefix = getCategorySkuPrefix(categorySlugOrName);
  const targetPrefix = `TTRC-${prefix}-`;
  const existingNumbers = products
    .filter(p => p.sku && p.sku.startsWith(targetPrefix))
    .map(p => {
      const match = p.sku?.replace(targetPrefix, "").match(/^\d+/);
      return match ? parseInt(match[0], 10) : 0;
    });
  const nextNum = existingNumbers.length > 0 ? Math.max(...existingNumbers) + 1 : 1;
  return `${targetPrefix}${nextNum}`;
}
