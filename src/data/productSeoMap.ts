export interface ProductSeoEntry {
  productSlug: string;
  sku: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  longTailKeywords: string[];
  questionKeywords: string[];
  searchIntent: string;
  quickAnswer: string;
  targetAudience: string[];
  relatedServices: string[];
  relatedProducts: string[];
  relatedProjects: string[];
  relatedCourses: string[];
}

export const productSeoMap: Record<string, ProductSeoEntry> = {
  // 1. TTRC LF 5.0
  "ttrc-lf-5-0": {
    productSlug: "ttrc-lf-5-0",
    sku: "TTRC-C-1",
    primaryKeyword: "line follower robot",
    secondaryKeywords: [
      "line follower competition robot",
      "high speed line follower",
      "PID line follower kit",
      "autonomous line tracking bot",
      "robotics competition bot India"
    ],
    longTailKeywords: [
      "high speed line follower robot for national competitions",
      "PID based line follower robot with 7 array sensor",
      "TTRC LF 5.0 line tracking robot specifications",
      "line follower robot kit with high speed N20 motors",
      "line follower robot price in India"
    ],
    questionKeywords: [
      "What is TTRC LF 5.0?",
      "What sensors are used on the TTRC line follower robot?",
      "Can TTRC LF 5.0 be used in college robotics competitions?",
      "Is battery included with TTRC LF 5.0?",
      "What is the top speed of TTRC LF 5.0 line follower?"
    ],
    searchIntent: "Competition Line Follower Platform",
    quickAnswer: "TTRC LF 5.0 is an autonomous high-speed line follower robot engineered for competitive track navigation using a 7-array sensor, TTRC C-Board 5.0 controller, and 600 RPM high-speed DG N20 motors.",
    targetAudience: [
      "Engineering College Robotics Teams",
      "National Robotics Competition Competitors",
      "Robotics Club Racers",
      "Autonomous Systems Students"
    ],
    relatedServices: ["robotics-automation", "pcb-design-fabrication-assembly", "3d-printing"],
    relatedProducts: ["rc-robo-race", "rc-robo-soccer"],
    relatedProjects: ["advanced-kinematics", "computer-vision-edge-ai"],
    relatedCourses: ["robotics-iot-embedded", "arduino-robotics"]
  },

  // 2. TTRC RR-5.0
  "rc-robo-race": {
    productSlug: "rc-robo-race",
    sku: "TTRC-C-2",
    primaryKeyword: "robo race robot",
    secondaryKeywords: [
      "robo race competition robot",
      "RC robo race kit",
      "racing robot platform",
      "competition 4WD chassis kit",
      "robo race bot Coimbatore"
    ],
    longTailKeywords: [
      "robo race competition robot with 600RPM motors and 112mm wheels",
      "high torque robo race chassis kit for college tech fests",
      "TTRC RR-5.0 robo race only bot vs full kit",
      "ready to run robo race robot with FlySky transmitter",
      "robo race robot kit price in India"
    ],
    questionKeywords: [
      "What is TTRC RR-5.0 Robo Race robot?",
      "What is the difference between Only Bot and Full Kit configurations?",
      "What motors and wheels are used on the TTRC RR-5.0?",
      "Can I use FlySky FS-i6 with the TTRC RR-5.0?",
      "What are the dimensions and weight of TTRC RR-5.0?"
    ],
    searchIntent: "Robo Race Tournament Platform",
    quickAnswer: "TTRC RR-5.0 is a tournament-grade 4-wheel drive Robo Race platform equipped with 600 RPM graded diamond motors, TTRC high-torque gearboxes, and 112MM high-traction buggy wheels for extreme track agility.",
    targetAudience: [
      "Robo Race Tournament Competitors",
      "University Tech Fest Racers",
      "Robotics Club Engineers",
      "Mechanical & Mechatronics Students"
    ],
    relatedServices: ["robotics-automation", "laser-cutting", "3d-printing", "pcb-design-fabrication-assembly"],
    relatedProducts: ["112mm-buggy-wheel", "ttrc-dgj-600rpm", "rc-robo-soccer"],
    relatedProjects: ["advanced-kinematics", "ev-smart-mobility"],
    relatedCourses: ["robotics-iot-embedded", "cad-3d-printing"]
  },

  // 3. TTRC SOCCER 5.1
  "rc-robo-soccer": {
    productSlug: "rc-robo-soccer",
    sku: "TTRC-C-3",
    primaryKeyword: "robo soccer robot",
    secondaryKeywords: [
      "robo soccer competition robot",
      "RC soccer robot kit",
      "robotic soccer chassis",
      "intercollegiate robo soccer bot",
      "competition combat soccer bot"
    ],
    longTailKeywords: [
      "robo soccer competition robot with 300RPM motor and dual ESC",
      "TTRC SOCCER 5.1 platform for robotics tournaments",
      "four wheel drive robotic soccer bot kit price India",
      "high torque robo soccer robot with FlySky controller",
      "robo soccer chassis with heavy duty nylon wheels"
    ],
    questionKeywords: [
      "What is TTRC SOCCER 5.1?",
      "What motors power the TTRC Robo Soccer bot?",
      "What wheel sizes fit the TTRC SOCCER 5.1 platform?",
      "What ESC is used in the full kit configuration?",
      "How do I calibrate the controller for robo soccer maneuvers?"
    ],
    searchIntent: "Robo Soccer Competition Platform",
    quickAnswer: "TTRC SOCCER 5.1 is a competition-proven robotic soccer platform designed with four 300 RPM high-torque motors, reinforced competition chassis, and precision speed control for agile ball-handling and defense.",
    targetAudience: [
      "Inter-Collegiate Robo Soccer Teams",
      "Robotics Sports Competitors",
      "STEM & Maker Tournament Teams",
      "Robotics Labs"
    ],
    relatedServices: ["robotics-automation", "laser-cutting", "3d-printing", "pcb-design-fabrication-assembly"],
    relatedProducts: ["ttrc-hd-80mm-wheel", "ttrc-dgj-300rpm", "rc-robo-race"],
    relatedProjects: ["advanced-kinematics", "commercial-automation"],
    relatedCourses: ["robotics-iot-embedded", "industrial-automation-plc"]
  },

  // 4. Flysky FS-i6X
  "flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver": {
    productSlug: "flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver",
    sku: "TTRC-R-1",
    primaryKeyword: "Flysky FS-i6X 10CH RC transmitter",
    secondaryKeywords: [
      "FS-i6X 2.4GHz transmitter",
      "FS-iA10B 10 channel receiver",
      "AFHDS 2A radio controller",
      "FlySky 10CH RC controller India",
      "telemetry radio transmitter"
    ],
    longTailKeywords: [
      "Flysky FS-i6X 2.4GHz 10CH transmitter with FS-iA10B dual antenna receiver",
      "FlySky FS-i6X firmware update and 10 channel configuration",
      "jamming free 2.4GHz AFHDS 2A transmitter for combat robots and drones",
      "FlySky FS-i6X price with genuine GST invoice in India",
      "FlySky FS-i6X binding instructions with FS-iA10B"
    ],
    questionKeywords: [
      "How do I bind FlySky FS-i6X with FS-iA10B receiver?",
      "Can FlySky FS-i6X be upgraded from 6 to 10 channels?",
      "Does the FS-iA10B receiver support i-BUS telemetry?",
      "What is the operating range of FlySky FS-i6X in open air?",
      "Is FlySky FS-i6X suitable for robotics competition bots?"
    ],
    searchIntent: "10-Channel RF Telemetry Controller",
    quickAnswer: "The FlySky FS-i6X is a 10-channel 2.4GHz AFHDS 2A digital proportional RC transmitter bundled with the dual-antenna FS-iA10B receiver, featuring 135 frequency-hopping channels and bidirectional telemetry.",
    targetAudience: [
      "Competition Combat Bot Pilots",
      "Drone and UAV Operators",
      "Fixed-Wing RC Modelers",
      "Engineering Robotics Labs"
    ],
    relatedServices: ["robotics-automation", "pcb-design-fabrication-assembly"],
    relatedProducts: ["flysky-fs-i6-2.4g-6ch", "flysky-fs-i6s-2.4g-10ch-afhds-transmitter-with-fs-ia10b-10ch-receiver"],
    relatedProjects: ["advanced-kinematics", "security-emergency"],
    relatedCourses: ["robotics-iot-embedded"]
  },

  // 5. FlySky FS-i6
  "flysky-fs-i6-2.4g-6ch": {
    productSlug: "flysky-fs-i6-2.4g-6ch",
    sku: "TTRC-R-2",
    primaryKeyword: "FlySky FS-i6 RC transmitter",
    secondaryKeywords: [
      "FS-i6 6CH radio controller",
      "FS-iA6 6 channel receiver",
      "2.4GHz AFHDS RC controller",
      "budget RC transmitter India",
      "FlySky 6 channel remote"
    ],
    longTailKeywords: [
      "FlySky FS-i6 2.4G 6CH AFHDS RC transmitter with FS-iA6 receiver",
      "reliable 6 channel radio control system with 20 model memory",
      "FlySky FS-i6 transmitter for college robo race and robo soccer bots",
      "FlySky FS-i6 price and technical specifications in India",
      "FS-i6 transmitter channel mixing setup for dual motor robots"
    ],
    questionKeywords: [
      "What is the range of FlySky FS-i6 transmitter?",
      "How many model memories does FlySky FS-i6 store?",
      "How do I set up channel mixing on FlySky FS-i6 for differential drive?",
      "Does FS-iA6 receiver come included in the box?",
      "What batteries are required to power FlySky FS-i6?"
    ],
    searchIntent: "6-Channel Jam-Free Controller",
    quickAnswer: "The FlySky FS-i6 is a 6-channel 2.4GHz AFHDS remote control system with a backlit LCD, 20-model internal memory, and interference-free frequency hopping engineered for RC robots and models.",
    targetAudience: [
      "Robo Race & Robo Soccer Competitors",
      "RC Glider & Airplane Builders",
      "STEM Robotics Students",
      "Hobbyists"
    ],
    relatedServices: ["robotics-automation", "pcb-design-fabrication-assembly"],
    relatedProducts: ["flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver", "flysky-fs-ct6b-2.4g-6ch-radio-set-system-with-rx-fs-r6b-receiver"],
    relatedProjects: ["advanced-kinematics"],
    relatedCourses: ["robotics-iot-embedded"]
  },

  // 6. Flysky FS-i6S
  "flysky-fs-i6s-2.4g-10ch-afhds-transmitter-with-fs-ia10b-10ch-receiver": {
    productSlug: "flysky-fs-i6s-2.4g-10ch-afhds-transmitter-with-fs-ia10b-10ch-receiver",
    sku: "TTRC-R-3",
    primaryKeyword: "Flysky FS-i6S touchscreen transmitter",
    secondaryKeywords: [
      "FS-i6S 10CH radio controller",
      "touchscreen RC transmitter",
      "FS-iA10B dual antenna controller",
      "low latency RC transmitter",
      "FlySky FS-i6S India"
    ],
    longTailKeywords: [
      "Flysky FS-i6S 2.4G 10CH AFHDS transmitter with capacitive touchscreen",
      "touchscreen 10 channel RC transmitter with FS-iA10B telemetry receiver",
      "FlySky FS-i6S USB rechargeable controller for quadcopters and rovers",
      "FlySky FS-i6S price and technical features in India",
      "FlySky FS-i6S self centering stick calibration"
    ],
    questionKeywords: [
      "Does FlySky FS-i6S have physical buttons or touchscreen?",
      "Can I charge FlySky FS-i6S batteries through the USB port?",
      "What is the stick resolution of FlySky FS-i6S?",
      "How many channels does the FS-iA10B receiver support?",
      "Is FlySky FS-i6S compatible with flight simulators?"
    ],
    searchIntent: "Capacitive Touchscreen RC Controller",
    quickAnswer: "The FlySky FS-i6S is a 10-channel 2.4GHz AFHDS 2A transmitter equipped with a capacitive touchscreen interface, dual high-gain antennas, and 4096-level stick resolution for low-latency robotics control.",
    targetAudience: [
      "UAV & Drone Pilots",
      "Precision Rover Engineers",
      "Competition Combat Bot Pilots",
      "Robotics Teams"
    ],
    relatedServices: ["robotics-automation", "pcb-design-fabrication-assembly"],
    relatedProducts: ["flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver", "flysky-fs-i6-2.4g-6ch"],
    relatedProjects: ["advanced-kinematics", "ev-smart-mobility"],
    relatedCourses: ["robotics-iot-embedded"]
  },

  // 7. FlySky FS-CT6B
  "flysky-fs-ct6b-2.4g-6ch-radio-set-system-with-rx-fs-r6b-receiver": {
    productSlug: "flysky-fs-ct6b-2.4g-6ch-radio-set-system-with-rx-fs-r6b-receiver",
    sku: "TTRC-R-4",
    primaryKeyword: "FlySky FS-CT6B PC programmable transmitter",
    secondaryKeywords: [
      "FS-CT6B 6CH radio set",
      "FS-R6B 6 channel receiver",
      "PC programmable RC transmitter",
      "entry level 6CH radio system",
      "FlySky FS-CT6B India"
    ],
    longTailKeywords: [
      "FlySky FS-CT6B 2.4G 6CH radio set system with RX FS-R6B receiver",
      "cost effective PC programmable 6 channel radio control system",
      "FlySky FS-CT6B T6Config software setup and cable driver",
      "FlySky FS-CT6B price and package contents in India",
      "FS-CT6B transmitter for student robotics and RC planes"
    ],
    questionKeywords: [
      "How do I program FlySky FS-CT6B using a computer?",
      "What software is needed to configure FlySky FS-CT6B channels?",
      "Does FlySky FS-CT6B include the FS-R6B receiver?",
      "What modulation does FlySky FS-CT6B use?",
      "How do I bind FS-CT6B with the FS-R6B receiver?"
    ],
    searchIntent: "PC Programmable Entry-Level Radio Controller",
    quickAnswer: "The FlySky FS-CT6B is a cost-effective 6-channel 2.4GHz GFSK radio control system configured via PC computer interface (T6Config) and bundled with a matching FS-R6B 6-channel receiver.",
    targetAudience: [
      "STEM Robotics Students",
      "Engineering College Classrooms",
      "Budget RC Plane Builders",
      "Robotics Hobbyists"
    ],
    relatedServices: ["robotics-automation"],
    relatedProducts: ["flysky-fs-i6-2.4g-6ch"],
    relatedProjects: ["commercial-automation"],
    relatedCourses: ["robotics-iot-embedded"]
  },

  // 8. THE BOXING BOT
  "boxing-bot": {
    productSlug: "boxing-bot",
    sku: "TTRC-E-1",
    primaryKeyword: "educational boxing robot kit",
    secondaryKeywords: [
      "boxing robot STEM kit",
      "ESP32 robotics kit",
      "5 DOF humanoid boxing bot",
      "educational robotics India",
      "hands on robotics learning kit"
    ],
    longTailKeywords: [
      "The Boxing Bot educational robotics kit with ESP32 and MG995 servos",
      "5 degrees of freedom programmable humanoid boxing robot for STEM learning",
      "educational boxing robot kit price and assembly guide India",
      "hands-on modular robotics kit for schools and engineering students",
      "wireless Bluetooth controlled boxing robot with metal gear servos"
    ],
    questionKeywords: [
      "What is The Boxing Bot educational robotics kit?",
      "What microcontroller powers The Boxing Bot?",
      "How many servos and degrees of freedom does The Boxing Bot have?",
      "Is programming required to operate The Boxing Bot?",
      "What age group is The Boxing Bot suitable for?"
    ],
    searchIntent: "Hands-On STEM Educational Robotics Kit",
    quickAnswer: "The Boxing Bot is an educational robotics kit featuring 5 degrees of freedom, an ESP32 microcontroller, 5 MG995 metal gear servos, and 4 BO motors designed for hands-on STEM learning and competitive robotics gameplay.",
    targetAudience: [
      "STEM School Students (Grades 6–12)",
      "Engineering College Makers",
      "Tinkering Lab Mentors",
      "Robotics Enthusiasts"
    ],
    relatedServices: ["robotics-automation", "3d-printing", "pcb-design-fabrication-assembly"],
    relatedProducts: ["ttrc-lf-5-0", "rc-robo-race"],
    relatedProjects: ["advanced-kinematics", "healthcare-assistive"],
    relatedCourses: ["arduino-robotics", "robotics-iot-embedded"]
  },

  // 9. 112MM BUGGY WHEEL
  "112mm-buggy-wheel": {
    productSlug: "112mm-buggy-wheel",
    sku: "TTRC-RC-1",
    primaryKeyword: "112mm robotics buggy wheel",
    secondaryKeywords: [
      "112mm competition robot wheel",
      "robotics buggy wheel pack of 4",
      "6mm hub ID robot wheel",
      "high traction rubber robot tire",
      "robo race wheels India"
    ],
    longTailKeywords: [
      "112MM buggy wheel with 45mm thickness and 6mm hub ID for robo race",
      "high traction 112mm rubber tire with foam insert for competition bots",
      "112mm robot buggy wheel set of 4 price in India",
      "direct fit 6mm shaft wheels for high speed Johnson geared DC motors",
      "112mm buggy wheel specifications and weight"
    ],
    questionKeywords: [
      "What is the outer diameter and thickness of the 112mm buggy wheel?",
      "Does the 112mm wheel fit a standard 6mm Johnson motor shaft?",
      "Is the listed ₹3,000 price for one wheel or a set of 4 wheels?",
      "What tyre and rim materials are used in the 112mm buggy wheel?",
      "What is the weight per wheel of the 112mm buggy wheel?"
    ],
    searchIntent: "High-Speed Tournament Track Wheel",
    quickAnswer: "The 112MM Buggy Wheel is a competition-grade robotics wheel featuring a 112mm outer diameter, 45mm rim width, 6mm internal hub diameter, and high-traction rubber tyre with foam insert supplied in a set of 4 pieces.",
    targetAudience: [
      "Robo Race Competition Teams",
      "Combat Robotics Builders",
      "All-Terrain Mobile Rover Projects",
      "University Robotics Clubs"
    ],
    relatedServices: ["robotics-automation", "3d-printing"],
    relatedProducts: ["100mm-buggy-wheel", "ttrc-dgj-600rpm", "rc-robo-race"],
    relatedProjects: ["advanced-kinematics", "ev-smart-mobility"],
    relatedCourses: ["cad-3d-printing", "robotics-iot-embedded"]
  },

  // 10. 100MM BUGGY WHEEL
  "100mm-buggy-wheel": {
    productSlug: "100mm-buggy-wheel",
    sku: "TTRC-RC-2",
    primaryKeyword: "100mm robotics buggy wheel",
    secondaryKeywords: [
      "100mm competition robot wheel",
      "low profile robot wheel set of 4",
      "35mm width buggy tire",
      "robo race 100mm wheel",
      "robotics wheels Coimbatore"
    ],
    longTailKeywords: [
      "100MM buggy wheel with 35mm tyre width and 6mm hub bore for racing bots",
      "low profile 100mm high agility competition wheel pack of 4 price",
      "difference between 100mm and 112mm buggy wheels for robo race",
      "high traction synthetic rubber 100mm wheels for robotics platforms",
      "100mm buggy wheel technical specifications and rim dimensions"
    ],
    questionKeywords: [
      "What are the exact dimensions of the 100mm buggy wheel?",
      "What is the difference between the 100mm and 112mm buggy wheels?",
      "Does the 100mm wheel fit standard 6mm motor D-shafts?",
      "Is the catalogue price ₹3,000 for a set of 4 wheels?",
      "Can I purchase individual replacement 100mm buggy wheels?"
    ],
    searchIntent: "Agility Competition Robotics Wheel",
    quickAnswer: "The 100MM Buggy Wheel is a low-profile competition wheel engineered with a 100mm outer diameter, 35mm tyre width, 6mm hub ID, and high-traction synthetic rubber tread supplied as a balanced set of 4 pieces.",
    targetAudience: [
      "Robo Race & Robo Soccer Teams",
      "Autonomous Mobile Robot Builders",
      "Robotics Tournament Competitors",
      "College Tech Fest Teams"
    ],
    relatedServices: ["robotics-automation", "3d-printing"],
    relatedProducts: ["112mm-buggy-wheel", "ttrc-hd-80mm-wheel", "rc-robo-race"],
    relatedProjects: ["advanced-kinematics"],
    relatedCourses: ["cad-3d-printing"]
  },

  // 11. TTRC HD 80MM WHEEL
  "ttrc-hd-80mm-wheel": {
    productSlug: "ttrc-hd-80mm-wheel",
    sku: "TTRC-RC-3",
    primaryKeyword: "heavy duty nylon robotics wheel",
    secondaryKeywords: [
      "TTRC HD 80mm wheel",
      "nylon combat robot wheel",
      "heavy duty robot wheel set of 4",
      "high impact robotics wheel",
      "88.9mm nylon wheel India"
    ],
    longTailKeywords: [
      "TTRC HD 80MM heavy duty white nylon wheel for combat bots and rovers",
      "rigid high density nylon 88.9mm diameter robot wheel with 60mm thickness",
      "collision resistant heavy duty robotics wheel 4 pcs pack price India",
      "6mm hub ID high impact nylon wheel for robo soccer platforms",
      "TTRC HD wheel specifications weight and dimensions"
    ],
    questionKeywords: [
      "What is the actual diameter and thickness of TTRC HD 80MM wheel?",
      "What material is used to construct the TTRC HD 80MM wheel?",
      "Is the TTRC HD wheel impact-resistant for combat robotics?",
      "Does the TTRC HD wheel mount onto 6mm motor shafts?",
      "What is the price of a 4-piece set of TTRC HD wheels?"
    ],
    searchIntent: "Heavy-Duty Combat & High-Load Wheel",
    quickAnswer: "The TTRC HD 80MM Wheel is a heavy-duty white nylon robotics wheel featuring an 88.9mm diameter, 60mm broad thickness, and 6mm hub ID engineered for high-impact combat robots and heavy industrial rovers.",
    targetAudience: [
      "Combat Robotics Competitors",
      "Robo Soccer Tournament Teams",
      "Industrial Autonomous Rover Builders",
      "Heavy-Payload Platform Engineers"
    ],
    relatedServices: ["robotics-automation", "laser-cutting", "3d-printing"],
    relatedProducts: ["rc-robo-soccer", "ttrc-dgj-300rpm"],
    relatedProjects: ["advanced-kinematics", "industrial-manufacturing"],
    relatedCourses: ["cad-3d-printing", "industrial-automation-plc"]
  },

  // 12. TTRC DGJ 300RPM
  "ttrc-dgj-300rpm": {
    productSlug: "ttrc-dgj-300rpm",
    sku: "TTRC-RC-4",
    primaryKeyword: "300RPM geared DC motor",
    secondaryKeywords: [
      "TTRC DGJ 300RPM motor",
      "high torque DC geared motor",
      "12V 300RPM motor robotics",
      "Johnson grade geared motor India",
      "robotics drive motor Coimbatore"
    ],
    longTailKeywords: [
      "TTRC DGJ 300RPM geared DC motor with 34.2 N-cm rated torque and 12V rated voltage",
      "18000 base motor RPM geared DC motor with 25x37mm gearbox for robotics",
      "300RPM high torque motor for robo soccer and mobile robot platforms price",
      "operating voltage range 6-18V geared DC motor specifications",
      "TTRC DGJ 300RPM motor stall torque 300 N-cm dimensions"
    ],
    questionKeywords: [
      "What are the operating and rated voltages for TTRC DGJ 300RPM motor?",
      "What is the rated and stall torque of TTRC DGJ 300RPM?",
      "What are the gearbox dimensions of the TTRC DGJ 300RPM motor?",
      "What is the base motor RPM before gear reduction?",
      "How does TTRC DGJ 300RPM compare with TTRC DGJ 600RPM?"
    ],
    searchIntent: "High-Torque Robotics Drive Motor",
    quickAnswer: "The TTRC DGJ 300RPM is a high-torque geared DC motor engineered for robotics with an 18,000 base motor RPM, 6–18V operating range (12V rated), 34.2 N-cm rated torque, and 300 N-cm stall torque in a 25 × 37 mm gearbox.",
    targetAudience: [
      "Robo Soccer Competitors",
      "Autonomous Mobile Rover Builders",
      "Mechatronics Engineering Students",
      "Industrial Prototype Developers"
    ],
    relatedServices: ["robotics-automation", "pcb-design-fabrication-assembly", "laser-cutting", "3d-printing"],
    relatedProducts: ["ttrc-dgj-600rpm", "ttrc-hd-80mm-wheel", "rc-robo-soccer"],
    relatedProjects: ["advanced-kinematics", "commercial-automation"],
    relatedCourses: ["robotics-iot-embedded", "arduino-robotics"]
  },

  // 13. TTRC DGJ 600RPM
  "ttrc-dgj-600rpm": {
    productSlug: "ttrc-dgj-600rpm",
    sku: "TTRC-RC-5",
    primaryKeyword: "600RPM geared DC motor",
    secondaryKeywords: [
      "TTRC DGJ 600RPM motor",
      "high speed geared DC motor",
      "12V 600RPM motor robotics",
      "Johnson grade racing motor India",
      "robo race motor Coimbatore"
    ],
    longTailKeywords: [
      "TTRC DGJ 600RPM geared DC motor with 15.1 N-cm rated torque and 12V rated voltage",
      "18000 base motor RPM geared DC motor with 22x37mm gearbox for robo race",
      "600RPM high speed drive motor for competition robots price in India",
      "compact geared DC motor 122 N-cm stall torque 6-18V operating range",
      "TTRC DGJ 600RPM motor side by side comparison with 300RPM"
    ],
    questionKeywords: [
      "What is the base motor RPM and output speed of TTRC DGJ 600RPM?",
      "What are the torque ratings of the TTRC DGJ 600RPM motor?",
      "What are the gearbox dimensions of TTRC DGJ 600RPM?",
      "What is the operating voltage range for TTRC DGJ 600RPM?",
      "Which wheels are recommended with TTRC DGJ 600RPM for robo race?"
    ],
    searchIntent: "High-Speed Robotics Drive Motor",
    quickAnswer: "The TTRC DGJ 600RPM is a high-speed geared DC motor designed for competition robots, offering an 18,000 base motor RPM, 6–18V operating range (12V rated), 15.1 N-cm rated torque, and 122 N-cm stall torque in a 22 × 37 mm gearbox.",
    targetAudience: [
      "Robo Race Competition Teams",
      "High-Speed Mobile Platform Builders",
      "College Robotics Clubs",
      "Custom Automation Developers"
    ],
    relatedServices: ["robotics-automation", "pcb-design-fabrication-assembly", "laser-cutting", "3d-printing"],
    relatedProducts: ["ttrc-dgj-300rpm", "112mm-buggy-wheel", "rc-robo-race"],
    relatedProjects: ["advanced-kinematics", "ev-smart-mobility"],
    relatedCourses: ["robotics-iot-embedded", "cad-3d-printing"]
  }
};

export function getProductSeoEntry(slug: string): ProductSeoEntry | undefined {
  return productSeoMap[slug];
}
