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
  slug: string;
  category: string;
  name: string;
  badge: string;
  image: string;
  specs: string;
  description: string;
  detailedSpecs: string[];
  applications: string[];
  faqs: ProductFAQ[];
  downloads: ProductDownload[];
}

export const products: Product[] = [
  {
    slug: "apex-race-bot-v2",
    category: "Robo Race Bots",
    name: "Apex Race Bot V2",
    badge: "Best Seller",
    image: "/events/robo-race.png",
    specs: "High-RPM motors, high-traction rubber wheels, lightweight carbon fiber chassis.",
    description: "The Apex Race Bot V2 is engineered for maximum speed and structural durability in national and international Robo Race arenas. Built with an aerospace-grade carbon fiber chassis and driven by high-RPM metal gear motors, this platform delivers unmatched cornering precision and track reliability.",
    detailedSpecs: [
      "12V DC Metal Gear Motors (500 RPM)",
      "High-Traction Silicon Rubber Wheels (80mm)",
      "Lightweight Carbon Fiber Main Chassis",
      "LiPo Battery Pack Compatible (3S 11.1V Recommended)",
      "Onboard Power Switch & LED Indicator",
      "Pre-Assembled and Track Tested"
    ],
    applications: [
      "Technical Robo Race Arena Competitions",
      "RC High-Speed Agility Racing",
      "Autonomous Speed Prototyping Projects"
    ],
    faqs: [
      {
        question: "Is this bot ready to run out of the box?",
        answer: "Yes, the Apex Race Bot V2 is pre-assembled and track-tested. You only need to plug in a charged battery and your RC receiver to begin racing."
      },
      {
        question: "Can I upgrade the motors for higher speed?",
        answer: "Absolutely. The modular chassis design accepts standard 25mm diameter DC gear motors, allowing you to swap them out for 1000 RPM or custom gear ratios."
      }
    ],
    downloads: [
      { label: "Assembly & User Manual", href: "#", type: "pdf" },
      { label: "Arduino RC Control Sketch", href: "#", type: "code" },
      { label: "3D CAD Chassis Files (STEP)", href: "#", type: "cad" }
    ]
  },
  {
    slug: "hyper-drift-bot-x1",
    category: "Robo Race Bots",
    name: "Hyper Drift Bot X1",
    badge: "New Arrival",
    image: "/events/robo-race.png",
    specs: "Drift-tuned chassis, wireless controller, lithium-polymer power cells.",
    description: "Designed for track maneuvers requiring sideways slip angles and fast acceleration, the Hyper Drift Bot X1 features drift wheels, an aluminum alloy shock-absorbing chassis, and high-frequency RC remote controllers for responsive drifting.",
    detailedSpecs: [
      "4x Drift Wheels with slick plastic outer-rings",
      "High-Frequency 2.4GHz 4-Channel Remote Controller",
      "Rechargeable Li-Po Battery Pack (7.4V 2200mAh)",
      "Aluminum Alloy Base Plate & Spacers",
      "High-Speed Steering Servo (9g)"
    ],
    applications: [
      "Drift Challenge Technical Events",
      "Wireless Control Obstacle Courses",
      "Hobbyist Remote Control Projects"
    ],
    faqs: [
      {
        question: "What is the range of the remote controller?",
        answer: "The standard 2.4GHz remote controller has a line-of-sight range of up to 100 meters, which is plenty for competition arenas."
      }
    ],
    downloads: [
      { label: "Drift Bot Setup Guide", href: "#", type: "pdf" },
      { label: "3D CAD Wheel Dimensions", href: "#", type: "cad" }
    ]
  },
  {
    slug: "striker-pneumatic-soccer-bot",
    category: "Robo Soccer Bots",
    name: "Striker Pneumatic Soccer Bot",
    badge: "Championship Winner",
    image: "/product/soccer rc.jpg",
    specs: "Pneumatic striker mechanism, omni-directional wheels, customized RC remote.",
    description: "The Striker Pneumatic Soccer Bot is the ultimate offensive platform in student Robo Soccer arenas. Utilizing high-torque drive systems and a fast-actuating pneumatic kicking cylinder, this bot allows you to pass, dribble, and strike with force and accuracy.",
    detailedSpecs: [
      "Custom Pneumatic Striker Cylinder",
      "Omni-Directional Drive Wheels for 360 Rotation",
      "12V High-Torque Gear Drive Motors",
      "Pneumatic Solenoid Control Valves",
      "Custom 6-Channel Wireless Remote Control Hub"
    ],
    applications: [
      "Robo Soccer Student Championships",
      "Omni-directional Drive Research",
      "Pneumatics & Solenoid Control Education"
    ],
    faqs: [
      {
        question: "Does the kit include a compressed air tank?",
        answer: "The kit includes an onboard pressurized reservoir tube, which can be filled using a standard bicycle pump or electric inflator before matches."
      },
      {
        question: "Can this bot do a spin kick?",
        answer: "Yes, the omni-directional wheel configuration allows the robot to rotate about its center axis while kicking, creating a dynamic spin-kick effect."
      }
    ],
    downloads: [
      { label: "Pneumatic System Diagram", href: "#", type: "pdf" },
      { label: "Robo Soccer RC Setup Code", href: "#", type: "code" }
    ]
  },
  {
    slug: "defender-soccer-bot",
    category: "Robo Soccer Bots",
    name: "Defender Soccer Bot",
    badge: "Value Pick",
    image: "/product/soccer rc.jpg",
    specs: "High-torque push motors, robust steel chassis, basic controller.",
    description: "Built to stand firm, block attacks, and clear the goal line. The Defender Soccer Bot is a heavy, steel-armored push bot designed to withstand heavy impacts while clearing balls with its wide curved push-blade.",
    detailedSpecs: [
      "Robust Carbon Steel Push-Blade",
      "Dual High-Torque DC Gear Motors (150 RPM)",
      "Wide Rubber-Tread Gripping Wheels",
      "4-Channel Wireless Remote Control System",
      "Requires 4x AA Batteries (Not Included)"
    ],
    applications: [
      "Defense and Goalkeeping in Robo Soccer",
      "Basic Mechanics & High-Torque Drive Labs",
      "School Robotics Club Activities"
    ],
    faqs: [
      {
        question: "How heavy is the defender bot?",
        answer: "The robot weighs approximately 1.5kg, providing a solid, stable base that is difficult for opposing striker bots to push away."
      }
    ],
    downloads: [
      { label: "User Manual & Assembly Details", href: "#", type: "pdf" }
    ]
  },
  {
    slug: "viper-spinner-war-bot",
    category: "Robo War Bots",
    name: "Viper Spinner War Bot",
    badge: "Combat Ready",
    image: "/events/robo-war.png",
    specs: "High-RPM brushless spinner weapon, armored chassis, dual drive motors.",
    description: "The Viper Spinner War Bot is designed to fight and dominate in combat robotics arenas (Robo War). Equipped with a CNC-machined steel disc spinner weapon driven by a high-power brushless motor, this robot is built to absorb impacts and deliver heavy blows.",
    detailedSpecs: [
      "10,000 RPM Brushless Outrunner Weapon Motor",
      "CNC-Machined Tempered Steel Spinner Disk (1.2kg)",
      "High-Impact Polycarbonate and Hardened Steel Shielding",
      "Dual 12V High-Torque Metal Drive Gearboxes",
      "40A Electronic Speed Controllers (ESCs)",
      "Requires 4S LiPo Battery (Not Included)"
    ],
    applications: [
      "Featherweight (under 15kg) Robo War Combat Events",
      "High-Energy Mechanical Energy Dissipation Research",
      "ESC Speed Controller and Brushless Motor Labs"
    ],
    faqs: [
      {
        question: "Is this bot safe to operate in a classroom?",
        answer: "No. The weapon spinner spin speed is extremely high and can cause severe injury. This robot MUST ONLY be activated inside a safety-certified polycarbonate combat cage."
      }
    ],
    downloads: [
      { label: "Combat Bot Safety Protocol", href: "#", type: "pdf" },
      { label: "ESC & Outrunner Tuning Code", href: "#", type: "code" }
    ]
  },
  {
    slug: "titan-drum-spinner-war-bot",
    category: "Robo War Bots",
    name: "Titan Drum Spinner War Bot",
    badge: "Championship Grade",
    image: "/events/robo-war.png",
    specs: "High-inertia vertical drum spinner, alloy armor plates, high-discharge battery circuit.",
    description: "The Titan Drum Spinner War Bot is a professional-grade battle bot that utilizes a vertical drum spinner to throw opponents into the air. Built to absorb high impacts, it features a thick steel chassis and specialized shock mounts to protect internal electronics.",
    detailedSpecs: [
      "Vertical High-Inertia Drum Spinner (1.5kg)",
      "6S LiPo Battery Ready Power Architecture",
      "Precision CNC Hardened Steel Weapon Shaft",
      "Dual-Motor High-Speed Drive with Custom Rubber Treads",
      "Heavy Alloy Armor Body Plates"
    ],
    applications: [
      "National Robo War Combat Competitions",
      "Kinetic Energy Impact Testing",
      "Advanced Wireless Telemetry System Setup"
    ],
    faqs: [
      {
        question: "Does it come with battery and charger?",
        answer: "Due to shipping regulations, LiPo batteries are not included with the standard kit. We can supply them separately via our custom coordinates."
      }
    ],
    downloads: [
      { label: "Titan Drum Combat Manual", href: "#", type: "pdf" },
      { label: "3D CAD Titan Assembly", href: "#", type: "cad" }
    ]
  },
  {
    slug: "rhino-magnet-sumo-bot",
    category: "Robo Sumo Bots",
    name: "Rhino Magnet Sumo Bot",
    badge: "Pro Grade",
    image: "/product/sumo rc.jpg",
    specs: "High-torque gear motors, neodymium magnetic base ring, opponent detection sensors.",
    description: "Engineered specifically for the rules of Sumo Arenas (Dohyo), the Rhino Magnet Sumo Bot features powerful neodymium magnets on its underbelly to hold the metal ring with force, preventing eviction by opponents. Driven by dual high-torque motors, it delivers extreme push capabilities.",
    detailedSpecs: [
      "4x Neodymium Magnet Ring Assemblies (Pre-installed)",
      "High-Torque Dual Micro-Gear Motors (12V)",
      "Opponent Detection Infrared Distance Sensors (Front-Facing)",
      "Line/Ring Detection Border Sensors (Underneath)",
      "CNC-Machined Heavy Steel Blade for scraping Dohyo floor"
    ],
    applications: [
      "Autonomous and RC Sumo Bot Competitions",
      "PID Push Controller Testing",
      "Magnetic Ground Traction Research"
    ],
    faqs: [
      {
        question: "How do the magnets work in a sumo ring?",
        answer: "Standard sumo competition rings (Dohyo) are made of steel. The neodymium magnets under the chassis pull the robot down against the plate, increasing effective traction without exceeding weight limits."
      }
    ],
    downloads: [
      { label: "Sumo Bot Autonomous Logic Map", href: "#", type: "pdf" },
      { label: "Sumo Bot Arduino Search Loop", href: "#", type: "code" }
    ]
  },
  {
    slug: "gladiator-sumo-bot",
    category: "Robo Sumo Bots",
    name: "Gladiator Sumo Bot",
    badge: "Heavy Armor",
    image: "/product/sumo rc.jpg",
    specs: "Steel armor body, high-torque dual motors, autonomous ring search code.",
    description: "The Gladiator Sumo Bot is an autonomous and RC capable sumo robot. Wrapped in a rugged steel shroud, it includes ultrasonic sensors for detecting opponents and underbelly light sensors to detect the white border of the black Dohyo ring, keeping it in play.",
    detailedSpecs: [
      "Rugged Steel Armor Shroud",
      "Arduino-Compatible Controller Preloaded with Search Logic",
      "Dual Ultrasonic HC-SR04 Rangefinders",
      "Dual Bottom Edge Reflectance Sensors",
      "Li-Ion Rechargeable Battery Module"
    ],
    applications: [
      "Robo Sumo Competitions",
      "Beginner Autonomous Logic Learning",
      "Sensor Integration & Fusion Laboratories"
    ],
    faqs: [
      {
        question: "Can I program it in scratch?",
        answer: "Yes, since it uses an Arduino-compatible board, you can use mBlock or Scratch for visual block programming."
      }
    ],
    downloads: [
      { label: "Gladiator Assembly Instructions", href: "#", type: "pdf" },
      { label: "Autonomous Search & Destroy Code", href: "#", type: "code" }
    ]
  },
  {
    slug: "aero-pid-line-follower",
    category: "Line Follower Robots",
    name: "Aero PID Line Follower",
    badge: "Top Speed",
    image: "/events/line-follower.png",
    specs: "High-speed 8-sensor array, STM32 MCU, PID loop motor control software preloaded.",
    description: "The Aero PID Line Follower is a precision speed machine. Powered by an STM32 32-bit ARM Cortex microcontroller and a high-density 8-sensor infrared optical array, it tracks black or white lines with microsecond response times using advanced Proportional-Integral-Derivative (PID) control algorithms.",
    detailedSpecs: [
      "32-bit STM32 ARM Cortex Microcontroller Board",
      "8-Channel Optical Line Sensor Array (Analog Output)",
      "High-Speed Coreless Drive Motors (1000 RPM)",
      "PID Loop Software Preloaded with Auto-Calibration",
      "Micro-OLED Display for Tuning Variables On-site"
    ],
    applications: [
      "High-speed Line Follower Arenas",
      "PID Tuning & Digital Control Lectures",
      "Advanced Microcontroller & Embedded Firmware Projects"
    ],
    faqs: [
      {
        question: "How do I tune the PID variables?",
        answer: "The robot has onboard navigation buttons and a micro-oled screen. You can adjust Kp, Ki, and Kd values directly on the track without connecting a laptop."
      },
      {
        question: "What is the maximum speed?",
        answer: "With standard wheels and gear ratio, it can track lines at speeds up to 2.5 meters per second."
      }
    ],
    downloads: [
      { label: "PID Tuning User Guide", href: "#", type: "pdf" },
      { label: "High-Speed STM32 Tracking Source Code", href: "#", type: "code" },
      { label: "3D CAD Aero Chassis", href: "#", type: "cad" }
    ]
  },
  {
    slug: "starter-line-follower",
    category: "Line Follower Robots",
    name: "Starter Line Follower",
    badge: "Easy Build",
    image: "/events/line-follower.png",
    specs: "Dual phototransistor sensor, analog comparator board, AA battery driver.",
    description: "Perfect for young students and beginners, the Starter Line Follower utilizes a simple analog circuit with dual phototransistors. It requires no programming, making it a great introduction to sensor feedback loops and basic gear ratios.",
    detailedSpecs: [
      "Dual Infrared Transmitter-Receiver Sensor Board",
      "LM393 Dual Analog Voltage Comparator Circuit",
      "Adjustable Potentiometers for Sensor Sensitivity",
      "Dual 150:1 Plastic Gear Motors",
      "Requires 4x AA Batteries (Not Included)"
    ],
    applications: [
      "Introductory School STEM Projects",
      "Solderless breadboard or simple soldering labs",
      "Analog Feedback Loop demonstrations"
    ],
    faqs: [
      {
        question: "Does this robot require programming?",
        answer: "No, this is a purely hardware-based analog robot. It compares sensor signals directly to drive the left and right motors, which is great for understanding feedback loops without writing code."
      }
    ],
    downloads: [
      { label: "Schematic & Assembly Diagram", href: "#", type: "pdf" }
    ]
  },
  {
    slug: "micromouse-grid-solver",
    category: "Maze Solver Robots",
    name: "MicroMouse Grid Solver",
    badge: "Smart Bot",
    image: "/events/maze-solver.png",
    specs: "Ultrasonic rangefinders, digital gyroscope, optimized flood-fill routing software.",
    description: "The MicroMouse Grid Solver is built for maze navigation. Driven by a digital gyroscope and three high-precision ultrasonic sensors, this robot explores a labyrinth, maps coordinates, and solves the shortest path to the center using its preloaded Flood-Fill routing algorithm.",
    detailedSpecs: [
      "3x Precision Ultrasonic Ranging Sonar Modules",
      "6-Axis MPU6050 Gyroscope & Accelerometer Core",
      "Arduino-Compatible ATMega328P Control Board",
      "Flood-Fill Navigation Algorithm Library Included",
      "Encoders on Both Motors for Precise Distance Tracking"
    ],
    applications: [
      "MicroMouse and Maze Solver Competitions",
      "Path Planning & Navigation Algorithm Research",
      "Dead Reckoning & Odometry Engineering Labs"
    ],
    faqs: [
      {
        question: "Does it remember the maze?",
        answer: "Yes, during the first run (exploration mode), it saves the grid layout in the EEPROM. In the second run (speed run), it calculates the shortest path and runs at max speed."
      }
    ],
    downloads: [
      { label: "Flood-Fill Algorithm Overview", href: "#", type: "pdf" },
      { label: "Arduino Maze Solving Source Code", href: "#", type: "code" }
    ]
  },
  {
    slug: "ares-carbon-quadcopter",
    category: "Drone Kits",
    name: "Ares Carbon Quadcopter",
    badge: "Premium Kit",
    image: "/pic/drone.png",
    specs: "Brushless high-KV motors, ESC speed controllers, carbon fiber frame, flight controller.",
    description: "The Ares Carbon Quadcopter is a comprehensive, high-spec DIY drone kit. Utilizing high-strength carbon fiber frame elements, 2212 brushless outrunner motors, 20A electronic speed controllers, and a programmable flight controller, it provides stable flight controls and customizable firmware paths.",
    detailedSpecs: [
      "250mm Diagonal Carbon Fiber Quadcopter Frame",
      "4x 2212 920KV Brushless Outrunner Motors",
      "4x 20A Electronic Speed Controllers (ESCs)",
      "APM 2.8 or Pixhawk-compatible Flight Controller Hub",
      "1045 Balanced Propellers (2 Pairs CW, 2 Pairs CCW)",
      "Includes Power Distribution Board (PDB)"
    ],
    applications: [
      "High-Altitude Agility Flight Arenas",
      "DIY Drone Assembly & Calibration Education",
      "Autonomous Waypoint Mission Prototyping"
    ],
    faqs: [
      {
        question: "Does it support GPS flight mapping?",
        answer: "Yes, the flight controller has dedicated ports to connect an external GPS module, enabling return-to-home and autonomous waypoint missions."
      }
    ],
    downloads: [
      { label: "Flight Controller Configuration Manual", href: "#", type: "pdf" },
      { label: "ArduPilot Firmware Setup Guide", href: "#", type: "code" }
    ]
  },
  {
    slug: "mini-fpv-drone-kit",
    category: "Drone Kits",
    name: "Mini FPV Drone Kit",
    badge: "Indoor Fun",
    image: "/pic/drone.png",
    specs: "Micro brushless motors, camera, flight board, carbon frame.",
    description: "An indoor-oriented micro quadcopter kit with integrated First-Person View (FPV) video transmission. Learn how high-frequency radio bands and flight controllers combine to provide real-time pilot vision feeds.",
    detailedSpecs: [
      "Micro carbon fiber frame with protective prop guards",
      "1200TVL FPV Micro Camera with 25mW Transmitter",
      "Micro F4 Flight Controller Board",
      "Brushless micro motors and 3-blade props",
      "1S Li-Po batteries and USB charger included"
    ],
    applications: [
      "Indoor FPV Obstacle Racing",
      "Analog Video RF Transmission Labs",
      "PID Aerodynamic Stabilization Education"
    ],
    faqs: [
      {
        question: "Do I need FPV goggles?",
        answer: "Yes, you need standard 5.8GHz FPV goggles or an FPV screen to view the live video feed. This kit includes the onboard transmitter camera, but the goggles are sold separately."
      }
    ],
    downloads: [
      { label: "Micro F4 Betaflight Setup Guide", href: "#", type: "pdf" }
    ]
  },
  {
    slug: "hydro-racer-rc-boat-kit",
    category: "RC Boat Kits",
    name: "Hydro Racer RC Boat Kit",
    badge: "Waterproof",
    image: "/events/water-rocket.png",
    specs: "Waterproof hull, high-speed brushless water-cooled motor, rudder servo.",
    description: "The Hydro Racer is designed for aquatic racing tracks. It features an ABS plastic double-sealed hull for absolute water protection, a high-RPM water-cooled brushless motor system, and an aluminum alloy water-pickup rudder for optimal control and cooling.",
    detailedSpecs: [
      "ABS Blow-Molded Double-Sealed Hull",
      "Water-Cooled Brushless Motor (2800KV)",
      "30A Marine Water-Cooled ESC",
      "High-Torque Metal Gear Rudder Servo",
      "Flex Shaft Drive System with metal propeller"
    ],
    applications: [
      "Robo Boat Aquatic Agility Contests",
      "Marine Propulsion and Fluid Dynamics Labs",
      "Waterproof Electronics Encapsulation Demos"
    ],
    faqs: [
      {
        question: "How does the water cooling system work?",
        answer: "A small inlet on the rudder picks up water as the boat moves forward. The water flows through silicone tubes wrapped around the motor and ESC, then exits out of a side port, keeping the high-power parts cool."
      }
    ],
    downloads: [
      { label: "Marine ESC Programming Guide", href: "#", type: "pdf" },
      { label: "Hull Sealing & Maintenance Protocol", href: "#", type: "pdf" }
    ]
  },
  {
    slug: "wave-runner-rc-boat-kit",
    category: "RC Boat Kits",
    name: "Wave Runner RC Boat Kit",
    badge: "Professional Grade",
    image: "/events/water-rocket.png",
    specs: "Glass-fiber catamaran hull, high-power dual jet-drives, marine remote.",
    description: "A catamaran hull RC boat kit utilizing dual water jet pumps for extreme maneuverability and high speed in rivers, lakes, and technical pools. High performance fiberglass finish.",
    detailedSpecs: [
      "Premium Glass-Fiber Catamaran Hull",
      "Dual Direct-Drive Water Jet Pumps",
      "Dual Water-Cooled ESC Speed Controllers",
      "Dual 2840 Brushless Motors",
      "2.4GHz 6-Channel Marine Transmitter"
    ],
    applications: [
      "Robo Boat Speed Races",
      "Jet Propulsion Design Research",
      "Water-Jet Steering Controls Study"
    ],
    faqs: [
      {
        question: "What happens if the boat flips over?",
        answer: "The catamaran hull is designed with a self-righting geometry. If it flips, applying quick throttle shifts will self-right the boat in the water."
      }
    ],
    downloads: [
      { label: "Catamaran Jet Drive Assembly Files", href: "#", type: "cad" }
    ]
  },
  {
    slug: "esp32-iot-development-kit",
    category: "Embedded Development Kits",
    name: "ESP32 IoT Development Kit",
    badge: "IoT Standard",
    image: "/events/water-rocket.png",
    specs: "Wi-Fi & Bluetooth microcontroller node, OLED display, relay modules, sensor shields.",
    description: "The ESP32 IoT Development Kit is the definitive platform for training students in Internet of Things (IoT) engineering. Utilizing the dual-core ESP32 chip with built-in Wi-Fi and Bluetooth, it includes a variety of actuators, relays, and environmental sensors to interface with cloud dashboards.",
    detailedSpecs: [
      "ESP32 NodeMCU Module (Dual-core, Wi-Fi + BLE)",
      "0.96 inch I2C OLED Display Panel",
      "DHT11 Temperature & Humidity Sensor Node",
      "2-Channel Optical-Isolated Relay Control Module",
      "Active Environmental & Soil Sensors Package",
      "IoT Cloud Dashboard Setup Templates (Blynk, Adafruit IO)"
    ],
    applications: [
      "Smart Home Automation Prototypes",
      "Environmental Monitoring Stations",
      "B2B Industrial IoT Telemetry Labs"
    ],
    faqs: [
      {
        question: "Does it support MicroPython?",
        answer: "Yes, the ESP32 can be programmed in Arduino C, MicroPython, or JavaScript. Our firmware sample library supports all three."
      }
    ],
    downloads: [
      { label: "IoT Smart Home Lab Guide", href: "#", type: "pdf" },
      { label: "ESP32 Cloud Telemetry Code", href: "#", type: "code" }
    ]
  },
  {
    slug: "modular-sensor-starter-kit",
    category: "Electronics Kits",
    name: "Modular Sensor Starter Kit",
    badge: "Beginner Friendly",
    image: "/events/water-rocket.png",
    specs: "30+ high-precision sensors, Arduino Uno compatible microcontroller, breadboard, guide.",
    description: "A comprehensive electronics experimenter kit containing a high-grade Arduino Uno R3 clone board, solderless breadboards, jumper wires, and over 30 modular sensor units (sound, gas, ultrasonic, flame, tilt, light) to teach the basics of physical computing.",
    detailedSpecs: [
      "Arduino Uno R3 Compatible Microcontroller",
      "30+ Key Sensor Modules (Ultrasonic, PIR, Sound, Gas, etc.)",
      "830-point Solderless Breadboard & Power Shield",
      "65x High-Quality Male-Male & Male-Female Jumper Wires",
      "USB Cable & 9V Battery Snap Connector",
      "120-page Experiment Project Guide Book"
    ],
    applications: [
      "School Science & Physics Labs",
      "Beginner Coding & Electronics Workshops",
      "Rapid Prototyping Sandbox"
    ],
    faqs: [
      {
        question: "Are soldering skills required?",
        answer: "No, all components in this kit connect via solderless breadboards and jumper wires, making it 100% safe for young students."
      }
    ],
    downloads: [
      { label: "30-in-1 Sensor Experiment Book", href: "#", type: "pdf" },
      { label: "Arduino Sensor Library Pack", href: "#", type: "code" }
    ]
  },
  {
    slug: "tinkering-robotics-stem-kit",
    category: "STEM Learning Kits",
    name: "Tinkering Robotics STEM Kit",
    badge: "K-12 Choice",
    image: "/events/water-rocket.png",
    specs: "Introduction to simple motor control, gears, and structural assemblies. Perfect for schools.",
    description: "The Tinkering Robotics STEM Kit is designed to spark engineering interest in young K-12 students. Incorporating modular structural beams, simple toy motors, gear assemblies, and battery holders, it teaches mechanical linkages, gear ratios, and fundamental kinematics without coding.",
    detailedSpecs: [
      "Modular Plastic Engineering Beam Blocks",
      "Dual 3V Toy Hobby DC Motors",
      "Assembled Multi-Ratio Spur Gear Pack",
      "Dual-Battery Holder with Leads",
      "All-Terrain Plastic Wheels (4x)",
      "Educational STEM Activity Booklet"
    ],
    applications: [
      "K-12 STEM Tinkering Classes",
      "Primary School Mechanical Science Labs",
      "Creativity & Motor Skills Development Workshops"
    ],
    faqs: [
      {
        question: "What age range is this suitable for?",
        answer: "This kit is designed for ages 8 to 14. Younger children can use it under parent or teacher supervision."
      }
    ],
    downloads: [
      { label: "STEM Teacher Guide & Project Plan", href: "#", type: "pdf" }
    ]
  },
  {
    slug: "tinkering-lab-setup-pack",
    category: "School Robotics Lab Kits",
    name: "Tinkering Lab Setup Pack",
    badge: "Institutional",
    image: "/events/water-rocket.png",
    specs: "Complete multi-pack containing 20+ modular learning kits, chargers, spares, and syllabus.",
    description: "A institutional-grade package to establish or upgrade a school's science and robotics laboratory. This pack includes 20 individual tinkering sets, storage boxes, battery charging docks, a complete spare parts drawer, and a printed curriculum syllabus mapped to standard educational boards.",
    detailedSpecs: [
      "20x Modular STEM & Robotics Learning Kits",
      "Multi-Port USB & Battery Smart Charger Station",
      "Cabinet Storage Organizer with Spare Resistors, Motors, Wires",
      "Teacher Training Slides & Student Worksheets (Printed)",
      "1-Year School Lab Registration & Competition Access Pass"
    ],
    applications: [
      "Institutional School Robotics Lab Setup",
      "After-school Robotics Club Hub Packages",
      "Comprehensive STEM Practical Examinations"
    ],
    faqs: [
      {
        question: "Does it come with teacher training?",
        answer: "Yes, this lab pack includes a full-day online onboarding workshop and syllabus materials for up to 3 teachers at your school."
      }
    ],
    downloads: [
      { label: "Lab Installation & Syllabus Map", href: "#", type: "pdf" },
      { label: "Sample School Lab Curriculum Brochure", href: "#", type: "pdf" }
    ]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}
