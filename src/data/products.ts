export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface ProductDownload {
  label: string;
  href: string;
  type: "pdf" | "code" | "cad";
}

export interface Product {
  id: string;
  slug: string;
  category: string;
  categorySlug: string;
  brand?: string;
  sku?: string;
  name: string;
  shortDescription?: string;
  price?: number;
  badge?: string;
  image: string;
  images: string[];
  specs: string;
  highlights: string[];
  whyThisProduct?: {
    heading: string;
    points: string[];
    targetAudience: string[];
  };
  specifications?: string[];
  description: string;
  detailedSpecs: string[];
  applications: string[];
  includedItems?: string[];
  relatedServices?: string[];
  faqs: ProductFAQ[];
  downloads?: ProductDownload[];
  documents?: ProductDownload[];
  status?: "published" | "draft";
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export const products: Product[] = [
  {
    id: "rc-robo-race",
    slug: "rc-robo-race",
    category: "Competition Robots",
    categorySlug: "competition",
    brand: "Tamizh Tech",
    sku: "TT-RACE-01",
    name: "RC Robo Race",
    shortDescription: "Engineered for maximum speed, drift control, and structural durability in national and international Robo Race arenas.",
    price: 12499,
    badge: "National Arena Ready",
    image: "/product/race/race1.png",
    images: [
      "/product/race/race1.png"
    ],
    specs: "High-RPM motors, high-traction rubber wheels, lightweight carbon fiber chassis.",
    highlights: [
      "3mm Aerospace-grade Carbon Fiber Chassis",
      "4x 12V 1000 RPM Metal Gear Motors",
      "80mm High-traction Silicone Rubber Wheels"
    ],
    whyThisProduct: {
      heading: "Engineered for Competitive Advantage",
      points: [
        "Rigid carbon fiber frame eliminates body flex during high-speed cornering.",
        "Precision gear mesh delivers instant acceleration out of hairpin turns.",
        "Pre-drilled mounting slots for sensor and controller upgrades."
      ],
      targetAudience: ["College Robotics Teams", "Student Competitors", "Robotics Hobbyists", "STEM Labs"]
    },
    includedItems: [
      "Pre-assembled 3mm Carbon Fiber Chassis",
      "4x 12V 1000 RPM Metal Gear Motors",
      "4x 80mm Silicone Rubber Drive Wheels",
      "Dual-channel High-current Motor Driver Board",
      "Wiring Harness and Fasteners"
    ],
    relatedServices: ["robotics-automation", "3d-printing", "pcb-design-fabrication-assembly", "laser-cutting"],
    description: "Engineered for maximum speed and structural durability in national and international Robo Race arenas. Built with an aerospace-grade carbon fiber chassis and driven by high-RPM metal gear motors, this platform delivers unmatched cornering precision.",
    detailedSpecs: [
      "Dimensions: 280 x 240 x 120 mm",
      "Chassis: 3mm Carbon Fiber Composite",
      "Motors: 4x 12V 1000 RPM Metal Gear Motors",
      "Wheels: High-traction Silicon Rubber (80mm)",
      "Power System: 11.1V 2200mAh LiPo Battery Compatible",
      "Control: Dual-channel high-current motor drivers"
    ],
    specifications: [
      "Dimensions: 280 x 240 x 120 mm",
      "Chassis: 3mm Carbon Fiber Composite",
      "Motors: 4x 12V 1000 RPM Metal Gear Motors",
      "Wheels: High-traction Silicon Rubber (80mm)",
      "Power System: 11.1V 2200mAh LiPo Battery Compatible",
      "Control: Dual-channel high-current motor drivers"
    ],
    applications: [
      "National and International Robo Race competitions",
      "STEM robotics training labs for advanced students",
      "Testing and evaluation of custom speed control algorithms"
    ],
    faqs: [
      {
        question: "Is the battery included in the package?",
        answer: "No, standard packages do not include LiPo batteries due to shipping regulations. You can order compatible 11.1V batteries separately from our accessories catalog."
      },
      {
        question: "Does it support autonomous upgrades?",
        answer: "Yes! The carbon fiber chassis has pre-drilled mounting holes for Arduino, Raspberry Pi, LIDAR, and ultrasonic sensors for autonomous racing tasks."
      }
    ],
    downloads: [
      { label: "Assembly Guide PDF", href: "#assembly", type: "pdf" },
      { label: "CAD Chassis STEP File", href: "#cad", type: "cad" }
    ],
    documents: [
      { label: "Assembly Guide PDF", href: "#assembly", type: "pdf" },
      { label: "CAD Chassis STEP File", href: "#cad", type: "cad" }
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
    sku: "TT-SOCCER-02",
    name: "RC Robo Soccer",
    shortDescription: "Offensive holonomic soccer platform with omni-directional drive wheels and high-pressure pneumatic kicking mechanism.",
    price: 14999,
    badge: "Pneumatic Striker Ready",
    image: "/product/soccer/soccer 1.0.png",
    images: [
      "/product/soccer/soccer 1.0.png",
      "/product/soccer/soccer1.1.png",
      "/product/soccer/soccer1.2.png"
    ],
    specs: "Pneumatic striker mechanism, omni-directional wheels, customized RC remote.",
    highlights: [
      "High-pressure Fast-actuating Pneumatic Striker (up to 8 bar)",
      "4x Omni-directional Wheels for 360° Holonomic Motion",
      "2mm Armored Aluminum Alloy Protective Body"
    ],
    whyThisProduct: {
      heading: "Engineered for Rapid Strike & Agility",
      points: [
        "Instant multi-directional crabbing without rotating the chassis.",
        "High-pressure pneumatic solenoid produces powerful, consistent kicks.",
        "Armored aluminum casing protects electronics during intensive collisions."
      ],
      targetAudience: ["Robo Soccer Tournament Teams", "Mechatronics Students", "Robotics Clubs"]
    },
    includedItems: [
      "2mm Armored Aluminum Chassis with Omni-wheel Mounts",
      "4x High-torque Planetary Gear Motors with Omni Wheels",
      "Fast-actuating Pneumatic Cylinder & Solenoid Valve",
      "Onboard Pressure Reservoir Tank and Tubing",
      "Motor & Solenoid Control Circuit Board"
    ],
    relatedServices: ["robotics-automation", "laser-cutting", "pcb-design-fabrication-assembly", "3d-printing"],
    description: "The ultimate offensive platform in student Robo Soccer arenas. Utilizing high-torque drive systems and a fast-actuating pneumatic kicking cylinder, this bot allows you to pass, dribble, and strike with force and accuracy.",
    detailedSpecs: [
      "Striker: Fast-actuating pneumatic cylinder (up to 8 bar)",
      "Drive: 4x Omni-directional wheels for 360° motion",
      "Motors: 4x High-torque planetary gear motors",
      "Body: 2mm Armored Aluminum Alloy",
      "Frequency: 2.4GHz 6-channel control",
      "Weight: 4.8 kg"
    ],
    specifications: [
      "Striker: Fast-actuating pneumatic cylinder (up to 8 bar)",
      "Drive: 4x Omni-directional wheels for 360° motion",
      "Motors: 4x High-torque planetary gear motors",
      "Body: 2mm Armored Aluminum Alloy",
      "Frequency: 2.4GHz 6-channel control",
      "Weight: 4.8 kg"
    ],
    applications: [
      "Robo Soccer college championships and school tournaments",
      "Kinematics and multi-directional motion planning research",
      "Pneumatic systems and high-pressure actuator experiments"
    ],
    faqs: [
      {
        question: "What type of compressor is needed?",
        answer: "The soccer bot includes an onboard pressure tank. You can refill it using any standard foot-pump or mini 12V air compressor."
      },
      {
        question: "Can it move sideways without turning?",
        answer: "Yes, the omni-directional wheel drive system enables complete holonomic movement, including direct sideways crabbing."
      }
    ],
    downloads: [
      { label: "Pneumatics Schematic", href: "#pneumatic", type: "pdf" },
      { label: "STEP CAD Model", href: "#cad", type: "cad" }
    ],
    documents: [
      { label: "Pneumatics Schematic", href: "#pneumatic", type: "pdf" },
      { label: "STEP CAD Model", href: "#cad", type: "cad" }
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
    sku: "653",
    name: "Flysky FS-i6X 2.4GHz 10CH AFHDS 2A RC Transmitter With FS-iA10B 2.4GHz 10CH Receiver",
    shortDescription: "10-channel AFHDS 2A digital proportional computerized RC system with high-gain dual antennas and bidirectional telemetry.",
    price: 6398,
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
    downloads: [
      { label: "FS-i6X User Manual", href: "#manual", type: "pdf" },
      { label: "FS-iA10B Pinout Datasheet", href: "#datasheet", type: "pdf" }
    ],
    documents: [
      { label: "FS-i6X User Manual", href: "#manual", type: "pdf" },
      { label: "FS-iA10B Pinout Datasheet", href: "#datasheet", type: "pdf" }
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
    sku: "78",
    name: "FlySky FS-i6 2.4G 6CH AFHDS RC Transmitter With FS-iA6 Receiver",
    shortDescription: "Reliable 6-channel 2.4GHz AFHDS 2A remote control system with 20-model memory and jamming-free range.",
    price: 5459,
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
    downloads: [
      { label: "FS-i6 User Manual", href: "#manual", type: "pdf" }
    ],
    documents: [
      { label: "FS-i6 User Manual", href: "#manual", type: "pdf" }
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
    sku: "79",
    name: "Flysky FS-i6S 2.4G 10CH AFHDS Transmitter With FS-iA10B 10CH Receiver",
    shortDescription: "10-channel 2.4GHz transmitter featuring a full capacitive touchscreen interface, USB charging, and low-latency response.",
    price: 7398,
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
    downloads: [
      { label: "FS-i6S English User Manual", href: "#manual", type: "pdf" }
    ],
    documents: [
      { label: "FS-i6S English User Manual", href: "#manual", type: "pdf" }
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
    sku: "160",
    name: "FlySky FS-CT6B 2.4G 6CH Radio Set System with RX FS-R6B receiver",
    shortDescription: "Cost-effective 6-channel 2.4GHz radio control system with PC computer programming interface and FS-R6B receiver.",
    price: 3548,
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
    relatedServices: ["robotics-automation", "pcb-design-fabrication-assembly"],
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
    downloads: [
      { label: "FS-CT6B T6Config Software & Manual", href: "#manual", type: "pdf" }
    ],
    documents: [
      { label: "FS-CT6B T6Config Software & Manual", href: "#manual", type: "pdf" }
    ],
    status: "published",
    published: true,
    createdAt: "2024-02-10T00:00:00.000Z",
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
