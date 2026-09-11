export interface CompetitionGuide {
  slug: string;
  categorySlug: string;
  title: string;
  subtitle: string;
  badge: string;
  metaTitle: string;
  metaDescription: string;
  quickAnswer: string;
  overview: string;
  typicalFormat: {
    heading: string;
    arenaOverview: string;
    roundStructure: string;
    scoringSummary: string;
    organizerNote: string;
  };
  robotArchitecture: {
    heading: string;
    chassis: string;
    drivetrain: string;
    power: string;
    control: string;
    specRanges: {
      dimensionRange: string;
      weightRange: string;
      voltageRange: string;
      channelCount: string;
    };
  };
  preparationStrategy: {
    heading: string;
    steps: string[];
    checklist: string[];
  };
  commonMistakes: string[];
  productSlugs: string[];
  courseSlugs: string[];
  serviceSlugs: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export const competitionGuides: CompetitionGuide[] = [
  // 1. ROBO SOCCER
  {
    slug: "robo-soccer",
    categorySlug: "competition",
    title: "Robo Soccer Competition Guide",
    subtitle: "Complete Engineering Guide: Rules, Drive Platforms, Motor Sizing & Tournament Preparation",
    badge: "Tournament Guide",
    metaTitle: "Robo Soccer Competition Guide | Rules, Kits & Robot Setup | Tamizh Tech",
    metaDescription: "Comprehensive Robo Soccer guide for engineering students: competition formats, typical 4WD chassis specs, 300RPM motor selection, and tournament preparation.",
    quickAnswer: "Robo Soccer is a robotics competition where teams pilot wireless ground robots in a miniature enclosed arena to maneuver a regulation ball into the opponent's goal. Robots rely on high-torque 4-wheel drive systems, responsive dual-motor ESCs, and reinforced front bumper kickers.",
    overview: "Robo Soccer tests mechanical durability, low-latency wireless control, and tactical team coordination. Autonomous and manually piloted robots compete in fast-paced timed halves. Winning teams prioritize high-friction tires, low center of gravity, and reliable motor driver cooling over raw unguided speed.",
    typicalFormat: {
      heading: "Typical Competition Format & Field Setup",
      arenaOverview: "Typical arenas measure roughly 2.4 m × 1.8 m to 3.0 m × 2.0 m with boundary sideboards (10–15 cm high) and miniature goal cages at opposing ends. Surface materials usually consist of smooth plywood, vinyl flex, or non-glossy sports carpet.",
      roundStructure: "Matches typically run for two halves of 3 to 5 minutes each, with a 1 to 2 minute half-time break. Overtime is decided by sudden-death golden goal or penalty shootouts.",
      scoringSummary: "Points are awarded per goal scored into the opposing net. Penalties or resets are issued for pinning an opponent against the boards for more than 5 seconds or lifting opponents off the ground.",
      organizerNote: "Exact field dimensions, ball specifications (golf ball vs. tennis ball), and round durations vary by competition organizer. Always verify the host institution's official rulebook."
    },
    robotArchitecture: {
      heading: "Typical Robot Architecture & Component Selection",
      chassis: "Rigid 2 mm to 3 mm aluminum or laser-cut stainless steel baseplate with front ball-holding scoops (scoop depth typically capped at 10–15 mm to prevent trapping).",
      drivetrain: "4-wheel independent drive powered by 4 × 300 RPM high-torque geared DC motors (such as TTRC DGJ 300RPM) with heavy-duty white nylon or rubber wheels.",
      power: "7.4V (2S) to 11.1V (3S) LiPo battery packs (1000–2200 mAh) with minimum 25C discharge rating to handle heavy stalled-push currents.",
      control: "2.4GHz 6-channel RC transmitter/receiver (such as FlySky FS-i6) interfaced with high-current dual-channel motor drivers (20A+ continuous).",
      specRanges: {
        dimensionRange: "Typically within 250 × 250 × 250 mm to 300 × 300 × 300 mm",
        weightRange: "Typically capped between 3.0 kg and 5.0 kg",
        voltageRange: "Typically limited to 12V to 18V DC maximum",
        channelCount: "2.4GHz FHSS with at least 4 to 6 proportional channels"
      }
    },
    preparationStrategy: {
      heading: "Tournament Preparation & Pit Checklist",
      steps: [
        "Calculate vehicle torque: ensure each drive wheel delivers sufficient push against an opposing 4 kg bot.",
        "Calibrate transmitter channel mixing: configure differential arcade steering on the right joystick for instinctive 1-handed steering.",
        "Stress-test motor driver thermal pads: verify continuous drive for 10 minutes under simulated stall load without thermal shutdown.",
        "Practice ball dribbling drills: verify the robot can retain forward control without the ball bouncing sideways over arena boards."
      ],
      checklist: [
        "Spare 11.1V / 7.4V LiPo batteries and verified balance charger",
        "Backup set of high-torque geared DC motors",
        "Spare 6mm hub motor couplers and wheel set screws",
        "Digital multimeter for battery health and continuity checks",
        "Hex key set, wire strippers, and high-temp electrical tape"
      ]
    },
    commonMistakes: [
      "Using high-RPM, low-torque motors that stall immediately when locked in head-to-head collisions.",
      "Inadequate bumper anchoring causing the front ball scoop to bend upward after the first collision.",
      "Running thin 24 AWG power wires that drop voltage under peak motor acceleration.",
      "Omitting transmitter failsafes, causing the bot to spin out of control if signal drops."
    ],
    productSlugs: [
      "rc-robo-soccer",
      "ttrc-hd-80mm-wheel",
      "ttrc-dgj-300rpm",
      "flysky-fs-i6-2.4g-6ch"
    ],
    courseSlugs: [
      "embedded-systems",
      "industrial-automation-plc"
    ],
    serviceSlugs: [
      "laser-cutting",
      "3d-printing",
      "robotics-automation",
      "pcb-design-fabrication-assembly"
    ],
    faqs: [
      {
        question: "What motors are best suited for a competition robo soccer robot?",
        answer: "Geared DC motors with 300 RPM output and high stall torque (above 200–300 N-cm) are widely considered the benchmark. High torque ensures the bot can push opponents and control the ball without stalling."
      },
      {
        question: "How are robo soccer robots steered wirelessly?",
        answer: "Robots are driven using differential steering (tank drive) controlled via 2.4GHz radio transmitters such as the FlySky FS-i6, with mixer channels configured on the transmitter or motor driver."
      },
      {
        question: "Are ball grippers or suction mechanisms allowed in robo soccer?",
        answer: "Most national collegiate competitions prohibit mechanical grippers or active suction that completely entrap the ball; passive concave bumpers under 10–15 mm depth are typically permitted."
      },
      {
        question: "Can I use lithium-ion cylindrical batteries instead of LiPo?",
        answer: "Yes, 3S or 4S 18650 Li-ion battery packs with high continuous discharge ratings (20A–30A) are suitable alternatives, though LiPo pouches generally offer lower internal resistance and higher peak burst discharge."
      }
    ],
    published: true,
    createdAt: "2026-03-01T00:00:00.000Z",
    updatedAt: "2026-09-11T00:00:00.000Z"
  },

  // 2. ROBO RACE
  {
    slug: "robo-race",
    categorySlug: "competition",
    title: "Robo Race Competition Guide",
    subtitle: "Complete Engineering Guide: Track Dynamics, High-Speed Drivetrains, Wheel Traction & Pit Strategy",
    badge: "Tournament Guide",
    metaTitle: "Robo Race Competition Guide | High-Speed Bots, Wheels & Motors | Tamizh Tech",
    metaDescription: "Essential Robo Race guide for college tech fests: track obstacles, 600RPM motor gearing, 112mm buggy wheel traction, and high-speed chassis stability.",
    quickAnswer: "Robo Race is a competition where high-speed mobile robots race through an obstacle-laden track featuring ramps, bridge crossings, sharp hairpin curves, and rough terrain. Robots emphasize rapid straight-line acceleration, responsive steering balance, and maximum tire floor grip.",
    overview: "Robo Race combines speed trial pacing with obstacle course survival. Winning platforms balance linear velocity with stability over speed bumps and elevated inclines. Chassis low center-of-gravity and wide wheelbase prevent roll-over on banked turns.",
    typicalFormat: {
      heading: "Typical Track Layout & Race Structure",
      arenaOverview: "Track lengths range from 20 to 50 meters, featuring wooden ramps (15°–30° incline), rumble strips, sand/gravel sections, 90° bends, and chicanes.",
      roundStructure: "Teams participate in individual timed laps. Penalties (typically 5–10 second time additions) are imposed for hitting lane boundaries or requiring hand-touches.",
      scoringSummary: "The robot that completes the course with the lowest overall elapsed time (inclusive of obstacle penalties) secures victory.",
      organizerNote: "Obstacle configurations and penalty rules depend strictly on the hosting university. Always inspect the event's obstacle elevation map before finalized gearing."
    },
    robotArchitecture: {
      heading: "High-Speed Robot Architecture & Component Selection",
      chassis: "Lightweight aluminum, polycarbonate, or carbon composite chassis with elevated ground clearance (25–40 mm) to clear ramps and debris.",
      drivetrain: "4WD or rear-wheel-drive with 600 RPM high-speed geared DC motors (such as TTRC DGJ 600RPM) coupled to 100mm–112mm high-traction rubber buggy wheels.",
      power: "11.1V (3S) LiPo battery with 1500–2200 mAh capacity and high C-rating (35C+) for explosive motor acceleration.",
      control: "2.4GHz digital proportional transmitter (FlySky FS-i6 or FS-i6X) with exponential steering rates configured for fine control at top speeds.",
      specRanges: {
        dimensionRange: "Typically within 200 × 200 mm to 300 × 250 mm",
        weightRange: "Typically 1.5 kg to 3.5 kg",
        voltageRange: "Typically 12V to 18V DC",
        channelCount: "Minimum 4 proportional channels"
      }
    },
    preparationStrategy: {
      heading: "Track Preparation & Tuning Strategy",
      steps: [
        "Optimize tire foam density: high-traction rubber tires with firm foam inserts prevent sidewall rolling during high-speed banked turns.",
        "Lower chassis center of gravity: position the heavy battery pack as low and centralized as possible between axles.",
        "Set dual rates on steering: limit maximum steering angle to prevent spin-outs at wide open throttle.",
        "Simulate ramp approaches: confirm the front bumper angle of approach clears steep 30° incline transitions without bottoming out."
      ],
      checklist: [
        "Multiple pre-charged 3S LiPo packs",
        "Spare 112mm / 100mm buggy wheels and set screws",
        "Backup 600RPM motors and motor mounts",
        "Zip ties, quick-bonding adhesive, and spare silicone wiring",
        "Stopwatch for pit practice timing"
      ]
    },
    commonMistakes: [
      "Using thin plastic wheels without foam inserts that spin out or slip on smooth glossy vinyl track surfaces.",
      "Excessive ride height that causes the robot to tumble when hitting rumble strips at high speed.",
      "Inadequate motor heat dissipation leading to torque fade halfway through long 50-meter tracks.",
      "Overly twitchy steering response that causes the pilot to over-correct and crash into track boundaries."
    ],
    productSlugs: [
      "rc-robo-race",
      "112mm-buggy-wheel",
      "100mm-buggy-wheel",
      "ttrc-dgj-600rpm",
      "flysky-fs-i6-2.4g-6ch"
    ],
    courseSlugs: [
      "embedded-systems",
      "cad-3d-printing"
    ],
    serviceSlugs: [
      "laser-cutting",
      "3d-printing",
      "robotics-automation"
    ],
    faqs: [
      {
        question: "What wheel size is recommended for robo race tracks?",
        answer: "100mm to 112mm diameter buggy wheels with rubber treads are standard. Larger diameters increase linear speed per motor revolution while providing obstacle clearance over rumble strips."
      },
      {
        question: "Why are 600RPM motors preferred over 1000RPM motors in robo race?",
        answer: "While 1000RPM motors offer high theoretical speed, they often lack sufficient torque to climb steep 30° ramps quickly. 600RPM motors provide the ideal balance of acceleration and torque under load."
      },
      {
        question: "Can 2-wheel drive bots compete effectively against 4-wheel drive bots?",
        answer: "4WD is vastly superior on competition tracks with ramps, sand, or uneven obstacles because all 4 wheels maintain tractive effort even when one axle loses contact."
      }
    ],
    published: true,
    createdAt: "2026-03-01T00:00:00.000Z",
    updatedAt: "2026-09-11T00:00:00.000Z"
  },

  // 3. LINE FOLLOWER
  {
    slug: "line-follower",
    categorySlug: "competition",
    title: "Line Follower Competition Guide",
    subtitle: "Complete Engineering Guide: PID Algorithms, Sensor Arrays, High-Speed N20 Motors & Calibration",
    badge: "Tournament Guide",
    metaTitle: "Line Follower Competition Guide | PID Tuning & Sensor Setup | Tamizh Tech",
    metaDescription: "Comprehensive Line Follower guide for robotics tournaments: 7-array sensor calibration, PID algorithm tuning, micro-metal gearmotors, and track line tracking.",
    quickAnswer: "A Line Follower is an autonomous mobile robot that detects and tracks a designated path—typically a high-contrast black line on a white surface or vice versa—using optical infrared reflectance sensors and real-time closed-loop PID control.",
    overview: "Competitive line follower events focus on split-second optical response, precise closed-loop motor calibration, and lightweight chassis dynamics. Modern competition bots navigate sharp 90° bends, loop-the-loops, intersections, and broken line gaps without manual pilot intervention.",
    typicalFormat: {
      heading: "Typical Competition Track & Rules",
      arenaOverview: "Tracks consist of white foam-board or matte PVC surfaces with 25–30 mm wide black tracks (or inverted white lines on black). Tracks feature 90° corners, crossover intersections, S-curves, and discontinuous dashed lines.",
      roundStructure: "Robots execute 2 to 3 autonomous runs. The robot must start behind the start line, follow the course automatically, and halt at the finish stop-marker.",
      scoringSummary: "Scoring is determined by course completion time plus penalties for leaving the line, taking false turns, or manual touch penalties.",
      organizerNote: "Track line widths (typically 30 mm), curve radii, and color inversion rules differ per organizer. Confirm if active suction fans or magnetic assists are permitted."
    },
    robotArchitecture: {
      heading: "High-Speed Autonomous Architecture",
      chassis: "Ultra-compact (150 × 150 mm) lightweight PCB chassis (integrated motherboard) or carbon fiber plate under 150–250 grams total weight.",
      drivetrain: "2 × high-RPM micro-metal N20 gear motors (600 to 1000 RPM) paired with precision aluminum rims and high-grip silicone or polyurethane tires.",
      power: "Compact 2S (7.4V) or 3S (11.1V) LiPo battery (300–450 mAh) delivering high power-to-weight ratio.",
      control: "High-speed 32-bit microcontroller (STM32, ESP32, or dedicated C-Board 5.0) executing a 1000Hz PID feedback loop fed by an analog 7-array to 8-array optical IR sensor.",
      specRanges: {
        dimensionRange: "Typically within 150 × 150 mm to 200 × 200 mm",
        weightRange: "Typically 150 g to 400 g",
        voltageRange: "Typically 7.4V to 12V",
        channelCount: "Fully Autonomous (No remote control)"
      }
    },
    preparationStrategy: {
      heading: "Sensor Calibration & PID Tuning Strategy",
      steps: [
        "Calibrate optical thresholds: implement automatic sensor calibration routine during start-up to sample minimum white and maximum black reflectance values.",
        "Tune the proportional gain (Kp): increase Kp until the bot tracks straight lines and responds to gentle turns without sluggishness.",
        "Introduce derivative gain (Kd): increase Kd to dampen sharp oscillations and prevent the robot from wagging off the line on high-speed straights.",
        "Add minimal integral gain (Ki): apply slight Ki only if the bot demonstrates persistent steady-state offset error through long sweeping curves."
      ],
      checklist: [
        "Pre-programmed backup microcontrollers with varying PID gain profiles",
        "Spare optical IR sensor modules",
        "Tire cleaning tape or isopropyl wipes to remove dust from silicone tires",
        "Backup N20 motors and motor mounts",
        "LiPo voltage checker and portable balance charger"
      ]
    },
    commonMistakes: [
      "Relying on simple bang-bang (on/off) logic that causes the robot to violently oscillate and fly off the track at higher speeds.",
      "Failing to account for ambient stadium lighting and sunlight reflections distorting IR sensor readings.",
      "Heavy battery packs that shift inertia forward and prevent sharp cornering.",
      "Dusty tires that slip on smooth vinyl, causing differential steering loss."
    ],
    productSlugs: [
      "ttrc-lf-5-0",
      "boxing-bot"
    ],
    courseSlugs: [
      "embedded-systems",
      "robotics-for-schools"
    ],
    serviceSlugs: [
      "pcb-design-fabrication-assembly",
      "3d-printing",
      "robotics-automation"
    ],
    faqs: [
      {
        question: "What is the primary advantage of a 7-array sensor over a 2-sensor module?",
        answer: "A 7-array or 8-array sensor provides a fine analog position gradient across the line. This allows the PID algorithm to calculate exact positional error, enabling smooth, high-speed cornering without jerking."
      },
      {
        question: "Can an Arduino Uno be used for competition-grade line followers?",
        answer: "While Arduino Uno is suitable for classroom learning, competitive high-speed tournaments typically require faster 32-bit controllers (like STM32 or ESP32) to process high-frequency ADC sampling and tight 1kHz PID loops."
      },
      {
        question: "What tires provide the best grip on line follower tracks?",
        answer: "Custom cast silicone or polyurethane tires over aluminum micro-rims offer superior coefficient of friction compared to standard hard rubber, minimizing drift on tight 90-degree corners."
      }
    ],
    published: true,
    createdAt: "2026-03-01T00:00:00.000Z",
    updatedAt: "2026-09-11T00:00:00.000Z"
  },

  // 4. ROBO WAR
  {
    slug: "robo-war",
    categorySlug: "competition",
    title: "Robo War & Combat Robotics Guide",
    subtitle: "Complete Engineering Guide: Armor Selection, Weapon Electronics, Failsafes & Impact Mechanics",
    badge: "Tournament Guide",
    metaTitle: "Robo War & Combat Robotics Guide | Armor, Motors & Rules | Tamizh Tech",
    metaDescription: "Technical guide to combat robotics and Robo War: structural armor, high-torque drive motors, radio failsafes, and arena safety guidelines.",
    quickAnswer: "Robo War is a combat robotics competition where remote-controlled armored vehicles battle inside an enclosed, impact-resistant polycarbonate arena to disable or immobilize the opposing machine using kinetic weapons, wedges, or pushing dominance.",
    overview: "Combat robotics demands rigorous mechanical engineering, redundant electrical safety, and shock-resistant chassis architecture. Weight categories range from Featherweight (13.6 kg / 30 lbs) to Beetleweight (1.36 kg / 3 lbs) and Antweight (454 g / 1 lb).",
    typicalFormat: {
      heading: "Typical Combat Arena & Match Format",
      arenaOverview: "Battles occur inside a fully sealed enclosure with thick polycarbonate walls (minimum 6–12 mm) and steel blast deflectors. Arenas frequently feature hazards like pit holes, floor flippers, or spinning floor drums.",
      roundStructure: "Matches last 2 to 3 minutes. Victory is declared via knockout (opponent immobilized for 10 seconds) or judge's decision based on aggression, damage, and control.",
      scoringSummary: "If neither robot is knocked out, three judges award points categorized by Damage dealt (active weapon impact), Aggression (continuous engagement), and Control.",
      organizerNote: "Weapon restrictions (flame, projectiles, liquids, entanglement nets) and exact weight classes depend strictly on the tournament sanctioning body. Confirm all safety regulations in advance."
    },
    robotArchitecture: {
      heading: "Combat Mechanical Architecture & Sizing",
      chassis: "Heavy-duty Grade 5 titanium, Hardox 450 steel, or high-density polyethylene (UHMWPE) shock-absorbing armor bolted with high-tensile grade 10.9/12.9 hardware.",
      drivetrain: "Over-volted brushless or high-torque brushed motors paired with hardened steel planetary gearboxes and solid nylon/rubber wheels protected inside chassis wheel wells.",
      power: "Heavy-duty LiPo batteries shielded inside puncture-proof aluminum or fiberglass fireproof enclosures, equipped with a mechanical master power switch (removable link).",
      control: "2.4GHz receiver featuring verifiable signal failsafes that cut all weapon and drive power within 1 second of signal loss.",
      specRanges: {
        dimensionRange: "Typically within 300 × 300 mm to 600 × 600 mm (class dependent)",
        weightRange: "Standard classes: 1 lb, 3 lbs, 15 kg, or 30 kg",
        voltageRange: "Typically 14.8V (4S) to 25.2V (6S) DC",
        channelCount: "Minimum 4 channels with dedicated weapon arming switch"
      }
    },
    preparationStrategy: {
      heading: "Pit Safety & Combat Checklist",
      steps: [
        "Incorporate a physical safety lock: always install a physical weapon locking pin before turning on the robot in the pit area.",
        "Implement independent radio failsafes: verify that turning off the transmitter immediately kills all weapon and drive motor outputs.",
        "Shock-mount electronics: mount the receiver, ESCs, and batteries on silicone gel pads or high-density foam to survive heavy kinetic shockwaves.",
        "Double-check screw thread-locking: apply medium-strength blue threadlocker (Loctite 242/243) on all metal-to-metal chassis and motor fasteners."
      ],
      checklist: [
        "LiPo charging safety bag and fire-extinguishing sand container",
        "Physical weapon safety lock pin / clamp with 'REMOVE BEFORE FLIGHT' banner",
        "Spare drive motors and replacement armor brackets",
        "High-amperage removable power link / master cutoff key",
        "Impact-resistant goggles and mechanic work gloves"
      ]
    },
    commonMistakes: [
      "Rigidly bolting sensitive electronics to structural armor, causing ESC circuit board cracking upon direct hammer or spinner impacts.",
      "Exposed drive wheels that are torn off or sheared during the initial wedge collision.",
      "Underestimating battery current draw during weapon spin-up, triggering ESC low-voltage brownouts.",
      "Omitting mandatory physical weapon safety locks, resulting in immediate safety disqualification at technical inspection."
    ],
    productSlugs: [
      "ttrc-hd-80mm-wheel",
      "ttrc-dgj-300rpm",
      "flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver"
    ],
    courseSlugs: [
      "embedded-systems",
      "cad-3d-printing"
    ],
    serviceSlugs: [
      "laser-cutting",
      "3d-printing",
      "robotics-automation"
    ],
    faqs: [
      {
        question: "What safety requirements are mandatory for combat robot competitions?",
        answer: "Mandatory requirements include a physical weapon lock, a high-amperage removable master link, a verified radio failsafe that cuts power on signal loss, and a LiPo containment enclosure."
      },
      {
        question: "What materials make the best combat robot armor?",
        answer: "UHMWPE (Ultra-High-Molecular-Weight Polyethylene) is popular for energy-absorbing outer shells, while Hardox 450 steel and Grade 5 titanium provide maximum puncture and abrasive resistance against spinning weapons."
      },
      {
        question: "Can brushed DC motors be used for combat robot drive systems?",
        answer: "Yes, high-torque brushed DC motors with robust planetary gearboxes are widely favored for drive systems because of their progressive torque delivery, simple ESC interfacing, and resilience against sudden shock stalls."
      }
    ],
    published: true,
    createdAt: "2026-03-01T00:00:00.000Z",
    updatedAt: "2026-09-11T00:00:00.000Z"
  },

  // 5. ROBO SUMO
  {
    slug: "robo-sumo",
    categorySlug: "competition",
    title: "Robo Sumo Competition Guide",
    subtitle: "Complete Engineering Guide: Ring Edge Detection, High-Friction Tires, Wedge Dynamics & Autonomous Tactics",
    badge: "Tournament Guide",
    metaTitle: "Robo Sumo Competition Guide | Sensors, Wedges & Sumo Bots | Tamizh Tech",
    metaDescription: "Comprehensive Robo Sumo guide: Dohyo arena rules, high-friction silicone tires, IR line border sensors, and competitive wedge physics.",
    quickAnswer: "Robo Sumo is a competitive event where two robots attempt to push each other out of a circular ring (Dohyo) in an autonomous or RC duel, relying on high downward magnetic force, razor-sharp front ground wedges, and ultra-high-friction silicone wheels.",
    overview: "Robo Sumo platforms place premium emphasis on traction physics and wedge mechanics. Because kinetic weapons are prohibited, matches are decided by traction coefficient, forward pushing force, and instant optical ring edge detection.",
    typicalFormat: {
      heading: "Typical Dohyo Ring Specifications & Rules",
      arenaOverview: "The Dohyo is a circular wooden or steel platform (typically 154 cm diameter for standard 3 kg class, or 77 cm for mini sumo) painted matte black with a 5 cm high-contrast white border ring line.",
      roundStructure: "Matches consist of three rounds of up to 3 minutes. The first robot to win two rounds by pushing the opponent out (touching any part of the floor outside the ring) wins the match.",
      scoringSummary: "Yuko points are awarded when the opponent touches the floor outside the ring boundary. If neither robot exits, judges decide based on aggression and center-ring dominance.",
      organizerNote: "Standard weight classes are Mega Sumo (3 kg), Mini Sumo (500 g), and Micro Sumo (100 g). Verify if permanent magnets or vacuum suction fans are permitted on steel rings."
    },
    robotArchitecture: {
      heading: "Sumo Robot Architecture & Wedge Engineering",
      chassis: "Extremely low-profile steel or brass chassis with sharp front scraper wedges machined from spring steel or ground razor blades to get under the opponent's scoop.",
      drivetrain: "Dual high-torque geared DC or brushless motors fitted with custom-molded high-tack silicone rubber wheels designed for maximum friction coefficient (μ > 1.5).",
      power: "High-discharge 3S (11.1V) LiPo battery capable of delivering instant locked-rotor stall current during head-on shoving matches.",
      control: "Autonomous microcontroller board integrated with digital distance sensors (Sharp optical IR or Time-of-Flight LiDAR) and fast downward-facing line edge phototransistors.",
      specRanges: {
        dimensionRange: "Mini Sumo: 100 × 100 mm (unrestricted height); 3kg Sumo: 200 × 200 mm",
        weightRange: "Mini Sumo: 500 g; Standard: 3.0 kg",
        voltageRange: "Typically 7.4V to 14.8V",
        channelCount: "Autonomous (standard) or 2.4GHz RC (human pilot class)"
      }
    },
    preparationStrategy: {
      heading: "Tactics & Dohyo Preparation",
      steps: [
        "Calibrate line sensors to white ring: ensure line sensors detect white boundary edge in under 2 milliseconds and execute instant emergency reverse/spin routine.",
        "Maintain clean tire surfaces: wipe silicone wheels with isopropyl alcohol before each bout to eliminate all dust particles that reduce surface friction.",
        "Sharpen the front wedge: ensure the front wedge contacts the surface with zero gap across its entire width to prevent opponent wedges from getting underneath.",
        "Program variable search tactics: implement randomized or circular sweeps during initial 5-second autonomous countdown to avoid predictable charges."
      ],
      checklist: [
        "Isopropyl wipes for tire maintenance",
        "Spare front replacement scraper blades",
        "Backup downward-looking edge sensors",
        "Pre-charged LiPo batteries and battery tester",
        "Hex drivers for rapid wedge height adjustments"
      ]
    },
    commonMistakes: [
      "Mounting front wedge too high off the surface, allowing opponents to scoop underneath easily.",
      "Slow edge-detection response causing the robot to drive itself out of the ring on its first charge.",
      "Using standard hard rubber tires that spin freely when pushed by high-friction silicone competitors.",
      "Insufficient weight ballasting: failing to build right up to the maximum permitted weight limit."
    ],
    productSlugs: [
      "ttrc-hd-80mm-wheel",
      "ttrc-dgj-300rpm"
    ],
    courseSlugs: [
      "embedded-systems",
      "robotics-for-schools"
    ],
    serviceSlugs: [
      "laser-cutting",
      "3d-printing",
      "pcb-design-fabrication-assembly"
    ],
    faqs: [
      {
        question: "How does a sumo robot detect the ring boundary?",
        answer: "Downwards-facing infrared reflectance sensors positioned at the corners detect the color transition from the black Dohyo surface to the white 5cm boundary line, triggering an immediate reverse rotation."
      },
      {
        question: "Why are razor-sharp wedges so important in robo sumo?",
        answer: "In Robo Sumo physics, whichever robot gets its wedge beneath the other robot lifts the opponent's drive wheels off the surface, instantly eliminating the opponent's traction and making pushing them out effortless."
      },
      {
        question: "What is the standard autonomous startup rule in Robo Sumo?",
        answer: "Rules standardly mandate a 5-second delay after pressing the start button before the robot can move, allowing competitors to step back safely."
      }
    ],
    published: true,
    createdAt: "2026-03-01T00:00:00.000Z",
    updatedAt: "2026-09-11T00:00:00.000Z"
  },

  // 6. DRONE RACE
  {
    slug: "drone-race",
    categorySlug: "competition",
    title: "Drone Race & UAV Competition Guide",
    subtitle: "Complete Engineering Guide: FPV Racing Frames, Brushless Motors, Flight Controllers & Video Transmission",
    badge: "Tournament Guide",
    metaTitle: "Drone Race Competition Guide | FPV Frames, Motors & Setup | Tamizh Tech",
    metaDescription: "Comprehensive FPV Drone Race competition guide for students: brushless motor sizing, 5.8GHz video systems, flight controllers, and obstacle gates.",
    quickAnswer: "Drone Racing is a high-speed sport where pilots pilot nimble multi-rotor unmanned aerial vehicles (UAVs) through 3D obstacle courses using First-Person View (FPV) goggles fed by an onboard zero-latency video transmitter.",
    overview: "Competitive drone racing requires aerodynamically efficient carbon fiber airframes, high-power-to-weight brushless motors, and instant radio link response. Pilots maneuver through lit gates, flags, tunnels, and dive loops at speeds often exceeding 100 km/h.",
    typicalFormat: {
      heading: "Typical Flight Course & Competition Format",
      arenaOverview: "Courses are laid out in outdoor fields, sports arenas, or netted indoor halls with illuminated gates (1.5 m to 2.5 m inner diameter), slalom poles, and vertical dive ladders.",
      roundStructure: "Pilots compete in heats of 3 to 6 drones over 3 to 5 laps. Points are earned based on finishing position or total elapsed lap time recorded via video transponder gates.",
      scoringSummary: "Missing a gate requires an immediate re-attempt (fly-around penalty); uncompleted gates result in lap disqualification.",
      organizerNote: "Maximum frame diagonal (e.g. 5-inch 220mm vs. 3-inch 140mm), maximum battery cell counts (4S vs. 6S), and video transmitter power caps (e.g. 25mW to 200mW) are set by the tournament director."
    },
    robotArchitecture: {
      heading: "UAV Architecture & Component Selection",
      chassis: "Rigid 3K carbon fiber unibody or split-arm frame (4 mm to 5 mm bottom plate thickness) sized for 3-inch or 5-inch propellers.",
      drivetrain: "4 × high-KV brushless motors (e.g. 2207 / 2306 class, 1800KV–2550KV) driven by a 4-in-1 40A–60A BLHeli_32 ESC.",
      power: "4S (14.8V) or 6S (22.2V) high-discharge LiPo battery (1000–1400 mAh) with 100C+ burst capability.",
      control: "F4 or F7 flight controller running Betaflight or INAV, paired with a 2.4GHz low-latency receiver (or ELRS) and analog/digital 5.8GHz video transmitter.",
      specRanges: {
        dimensionRange: "Diagonal wheelbase typically 180 mm to 250 mm (5-inch class)",
        weightRange: "Typically 350 g to 650 g (all-up weight with battery)",
        voltageRange: "Typically 4S (14.8V) or 6S (22.2V)",
        channelCount: "Minimum 6 channels with telemetry feedback"
      }
    },
    preparationStrategy: {
      heading: "Flight Tuning & Field Operations",
      steps: [
        "Practice simulator hours: log at least 15–20 hours in FPV flight simulators (VelociDrone, Liftoff) before flying high-power physical carbon frames.",
        "Calibrate radio sticks and deadbands: eliminate stick drift in Betaflight to maintain dead-steady hover and crisp roll/pitch maneuvers.",
        "Configure video frequencies: assign clear RaceBand channels (R1 to R8) with pit mode enabled to avoid blinding fellow pilots' goggles.",
        "Set failsafe to DROP immediately: verify that signal loss causes immediate motor disarm to prevent fly-aways."
      ],
      checklist: [
        "Multiple 4S/6S LiPo packs and dual-channel field DC balance charger",
        "Abundant spare 5-inch / 3-inch propellers (CW and CCW)",
        "Spare carbon fiber replacement arms and hardware fasteners",
        "FPV video goggles with patch and omni antenna combo",
        "Smoke-stopper current limiter for safe pre-flight pit testing"
      ]
    },
    commonMistakes: [
      "Powering on video transmitters in the pit area without checking assigned channels, interrupting pilots in active flight.",
      "Flying with bent or chipped propellers, which introduces severe motor vibrations and desynchronization.",
      "Improper battery strap securing, resulting in the battery ejecting upon the first gate collision.",
      "Excessive camera uptilt for beginners, making slow-speed maneuvers and gate alignment difficult."
    ],
    productSlugs: [
      "flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver",
      "flysky-fs-i6s-2.4g-10ch-afhds-transmitter-with-fs-ia10b-10ch-receiver"
    ],
    courseSlugs: [
      "drone-engineering",
      "embedded-systems"
    ],
    serviceSlugs: [
      "3d-printing",
      "pcb-design-fabrication-assembly",
      "robotics-automation"
    ],
    faqs: [
      {
        question: "What is the difference between 4S and 6S drone batteries?",
        answer: "6S (22.2V) batteries deliver higher voltage than 4S (14.8V), drawing lower current for equivalent power output. This reduces voltage sag and motor heat during high-speed gate acceleration."
      },
      {
        question: "Is FlySky FS-i6X suitable for drone racing?",
        answer: "Yes, the FlySky FS-i6X supports 10 channels, i-BUS digital protocol, and low-latency AFHDS 2A transmission, making it a dependable transmitter for drone pilots."
      },
      {
        question: "What flight controller firmware is standard in racing competitions?",
        answer: "Betaflight is the worldwide standard firmware for racing drones due to its ultra-responsive PID loops, dynamic notch filtering, and intuitive configuration GUI."
      }
    ],
    published: true,
    createdAt: "2026-03-01T00:00:00.000Z",
    updatedAt: "2026-09-11T00:00:00.000Z"
  },

  // 7. MAZE SOLVER
  {
    slug: "maze-solver",
    categorySlug: "competition",
    title: "Maze Solver & Micromouse Competition Guide",
    subtitle: "Complete Engineering Guide: Flood Fill Algorithms, Wall-Following Sensors, Steppers & Encoders",
    badge: "Tournament Guide",
    metaTitle: "Maze Solver & Micromouse Competition Guide | Algorithms & Kits | Tamizh Tech",
    metaDescription: "Technical guide to Micromouse and Maze Solver robotics: Flood Fill pathfinding algorithms, optical distance sensors, DC encoder motors, and maze navigation.",
    quickAnswer: "A Maze Solver (or Micromouse) is an autonomous robot designed to explore an unfamiliar labyrinth, map its passages using optical distance sensors, compute the shortest path using algorithms like Flood Fill, and execute high-speed speed runs to the center.",
    overview: "Micromouse is one of the oldest and most intellectually challenging academic robotics disciplines. It integrates discrete mathematics, embedded graph traversal, and high-precision motor odometry. Robots must solve the maze without wireless human guidance or overhead cameras.",
    typicalFormat: {
      heading: "Typical Maze Layout & Competition Rules",
      arenaOverview: "Regulation mazes consist of an orthogonal 16 × 16 (or 8 × 8 junior) grid of cells, each measuring roughly 18 × 18 cm with 5 cm high wooden/plastic walls. The floor is painted matte black and wall tops are finished in bright red/orange.",
      roundStructure: "Robots are allocated a total search time (typically 7 to 10 minutes) to perform exploration runs, map wall boundaries, and execute up to 5 individual high-speed speed runs from start to center.",
      scoringSummary: "The official score evaluates the fastest speed run time minus an exploration bonus based on remaining search time and penalty touch counts.",
      organizerNote: "Grid size (8×8 vs. 16×16), cell wall reflectivity, and exploration allowances differ by collegiate event. Always verify the tournament's specific maze standards."
    },
    robotArchitecture: {
      heading: "Micromouse Autonomous Hardware Architecture",
      chassis: "Ultra-compact (under 100 × 100 mm) custom PCB chassis with integrated motor mounts and sensor array brackets.",
      drivetrain: "Twin coreless DC motors with high-resolution magnetic/optical encoders, or precision bi-polar microstepping motors driving thin silicone rubber tires.",
      power: "Compact 2S (7.4V) 300–600 mAh LiPo battery with regulated 3.3V/5V rails to maintain steady analog sensor ADC readings.",
      control: "32-bit ARM Cortex (STM32) microcontroller running real-time wall detection, coordinate mapping (Flood Fill / Dijkstra), and diagonal turn smoothing.",
      specRanges: {
        dimensionRange: "Typically within 80 × 80 mm to 120 × 120 mm",
        weightRange: "Typically 80 g to 250 g",
        voltageRange: "Typically 7.4V to 11.1V",
        channelCount: "100% Fully Autonomous"
      }
    },
    preparationStrategy: {
      heading: "Algorithmic & Hardware Tuning Steps",
      steps: [
        "Implement Flood Fill algorithm: program dynamic cell distance weighting so the robot continuously re-computes optimal path matrices as new walls are mapped.",
        "Calibrate side wall proximity sensors: align angled IR distance sensors to maintain continuous center-lane centering without scraping wall surfaces.",
        "Develop diagonal speed-run capability: program smooth 45° diagonal corner cutting across open corridors rather than executing repetitive 90° stop-and-turns.",
        "Implement encoder odometry verification: verify that tire slip does not cause accumulated grid coordinate misalignment."
      ],
      checklist: [
        "Microcontroller programming dongle (ST-Link / USB-UART)",
        "Spare encoder gearmotors and pinions",
        "Tire cleaning solvent to prevent wheel slip",
        "Backup optical distance sensors",
        "Maze simulator software logs for algorithm debugging"
      ]
    },
    commonMistakes: [
      "Wheel slip distorting encoder counts, causing the robot to believe it is in cell (3,4) when it is actually in cell (2,4).",
      "Optical sensors blinded by uneven ambient lighting or dark reflective wall paints.",
      "Excessive robot width causing side scraping against 18 cm cell walls on sharp turns.",
      "Lack of battery voltage compensation, causing motor speed profiles to slow down as battery discharges."
    ],
    productSlugs: [
      "ttrc-lf-5-0",
      "boxing-bot"
    ],
    courseSlugs: [
      "embedded-systems",
      "ai-machine-learning"
    ],
    serviceSlugs: [
      "pcb-design-fabrication-assembly",
      "3d-printing",
      "robotics-automation"
    ],
    faqs: [
      {
        question: "What algorithm is most effective for solving unknown mazes?",
        answer: "The Flood Fill algorithm is the gold standard for Micromouse competitions because it recalculates the shortest path to the center cell dynamically as new walls are discovered during exploration."
      },
      {
        question: "Why are encoders essential on maze-solving robots?",
        answer: "Encoders measure exact wheel rotations and distance traveled. Combined with gyro data, they allow the robot to maintain precise odometry and know its exact coordinate location in the maze grid."
      },
      {
        question: "Can ultrasonic sensors be used instead of infrared sensors?",
        answer: "While ultrasonic sensors work for large-scale maze rovers, competition Micromice prefer optical infrared or Time-of-Flight (ToF) sensors because of their faster response time, smaller size, and narrower beam angle within narrow 18cm cells."
      }
    ],
    published: true,
    createdAt: "2026-03-01T00:00:00.000Z",
    updatedAt: "2026-09-11T00:00:00.000Z"
  },

  // 8. GENERAL ROBOTICS COMPETITIONS
  {
    slug: "general-robotics",
    categorySlug: "competition",
    title: "Engineering & College Robotics Competitions Guide",
    subtitle: "Complete Student Guide: Selecting Events, Building Competition Teams, Sourcing Kits & Tournament Logistics",
    badge: "Tournament Guide",
    metaTitle: "Robotics Competitions Guide for Colleges & Schools | Tamizh Tech",
    metaDescription: "Master guide to engineering college and school robotics competitions in India: team roles, hardware kit selection, budgeting, and tournament readiness.",
    quickAnswer: "Robotics Competitions are structured academic and maker tournaments where student teams design, build, and deploy autonomous or wireless mobile robots to solve engineering challenges across categories like Robo Soccer, Robo Race, Line Following, and Combat Robotics.",
    overview: "Participating in robotics competitions accelerates practical engineering expertise across mechanical fabrication, embedded firmware, sensor fusion, and rapid prototyping. Successful collegiate teams operate like professional engineering units with designated mechanical, electrical, programming, and piloting responsibilities.",
    typicalFormat: {
      heading: "Typical College Tech Fest Structure",
      arenaOverview: "National and state-level engineering symposiums (such as those hosted across premier colleges in Coimbatore, Chennai, and Bengaluru) typically host multiple concurrent robotics tracks across indoor auditoriums and outdoor arenas.",
      roundStructure: "Events commence with technical inspection (dimension/weight/safety checks), proceed to qualifying rounds, and conclude with bracketed elimination knockout stages.",
      scoringSummary: "Judges score teams based on rule compliance, track completion speed, task accuracy, and adherence to safety protocols.",
      organizerNote: "Rules, registration fees, cash prizes, and technical compliance guidelines vary by collegiate organizer. Always download and study the host college's symposium rulebook."
    },
    robotArchitecture: {
      heading: "Core Multi-Competition Engineering Stack",
      chassis: "Modular aluminum structural frames, laser-cut acrylic/polycarbonate testbeds, or custom 3D-printed brackets engineered for rapid repairs.",
      drivetrain: "Standardized DC gearmotors (300 RPM high-torque or 600 RPM high-speed) with swappable wheel hubs (6mm bore) fitting buggy and high-density wheels.",
      power: "Multi-purpose 11.1V (3S) LiPo battery systems with balanced charging stations and high-current Dean's or XT60 connectors.",
      control: "Universal 2.4GHz transmitters (FlySky FS-i6 / FS-i6X) compatible across diverse ground vehicles and quadcopters.",
      specRanges: {
        dimensionRange: "Varies per event (typically 150 mm to 400 mm bounds)",
        weightRange: "Typically 200 g to 15 kg depending on category",
        voltageRange: "Typically 7.4V to 24V DC",
        channelCount: "Autonomous microcontroller or 4–10 channel 2.4GHz RC"
      }
    },
    preparationStrategy: {
      heading: "Team Organization & Preparation Timeline",
      steps: [
        "Form cross-functional teams: assign dedicated roles for Mechanical Fabricator, Embedded Firmware Developer, and Lead Pilot.",
        "Establish a 6-week build timeline: 2 weeks for CAD design & component sourcing, 2 weeks for fabrication & wiring, 2 weeks for intensive track testing.",
        "Build a standardized pit spares kit: ensure you carry identical backup motors, ESCs, wheels, and transmitters to avoid tournament-ending breakdowns.",
        "Conduct stress-testing on simulated surfaces: replicate tournament ramp angles, vinyl friction, and arena lighting before traveling to the venue."
      ],
      checklist: [
        "Official student ID cards, event registration passes, and rulebook printouts",
        "Hardware tool kit: soldering iron, multimeter, hex keys, wire strippers, zip ties",
        "Spare LiPo battery packs and rapid multi-chemistry balance charger",
        "Backup programmed microcontrollers with verified firmware hex files on USB",
        "First-aid kit and protective safety glasses"
      ]
    },
    commonMistakes: [
      "Building a complex unproven design the night before the symposium without conducting continuous run testing.",
      "Arriving at the technical inspection desk exceeding the weight or dimension bounds by a few millimeters.",
      "Single-point-of-failure wiring without quick-disconnect connectors, making motor swaps between heats slow and stressful.",
      "Neglecting pilot practice: having an exceptional robot piloted by someone who has never practiced on obstacles."
    ],
    productSlugs: [
      "rc-robo-race",
      "rc-robo-soccer",
      "ttrc-lf-5-0",
      "112mm-buggy-wheel",
      "100mm-buggy-wheel",
      "ttrc-hd-80mm-wheel",
      "ttrc-dgj-300rpm",
      "ttrc-dgj-600rpm",
      "flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver"
    ],
    courseSlugs: [
      "robotics-for-schools",
      "embedded-systems",
      "drone-engineering",
      "industrial-automation-plc"
    ],
    serviceSlugs: [
      "robotics-automation",
      "3d-printing",
      "laser-cutting",
      "pcb-design-fabrication-assembly"
    ],
    faqs: [
      {
        question: "How can engineering colleges set up a competitive robotics club?",
        answer: "Colleges typically begin by equipping a dedicated maker space with standardized prototyping kits, 3D printers, PCB prototyping tools, and baseline motor/wheel inventories, backed by hands-on faculty mentoring."
      },
      {
        question: "Where can student teams source genuine competition robotics parts in India?",
        answer: "Tamizh Tech Robotics Company supplies tournament-tested competition robot chassis kits, high-traction buggy wheels, geared DC motors, and FlySky radio transmitters with official technical specifications and direct engineering support."
      },
      {
        question: "What is the best entry-level competition category for beginners?",
        answer: "Line Follower and basic Robo Race are ideal entry points. They introduce core concepts of motor sizing, battery management, and basic closed-loop control before students advance to combat or autonomous vision systems."
      }
    ],
    published: true,
    createdAt: "2026-03-01T00:00:00.000Z",
    updatedAt: "2026-09-11T00:00:00.000Z"
  }
];

export function getCompetitionGuideBySlug(slug: string): CompetitionGuide | undefined {
  if (!slug) return undefined;
  return competitionGuides.find(
    (g) => g.slug === slug || g.slug === slug.toLowerCase()
  );
}

export function getAllCompetitionGuides(): CompetitionGuide[] {
  return competitionGuides.filter((g) => g.published);
}
