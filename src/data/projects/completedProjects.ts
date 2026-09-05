import { Project } from "@/types/project";

export const completedProjects: Project[] = [
  {
    id: "rc-robo-race-chassis-system",
    slug: "rc-robo-race-chassis-system",
    name: "High-Speed Competition Racing Robot Chassis",
    category: "Advanced Manufacturing & Industrial IoT",
    categorySlug: "industrial-manufacturing",
    projectType: "completed",
    badge: "Verified Tamizh Tech Build",
    shortDescription: "Custom fabricated high-speed competition racing bot platform with laser-cut 2mm aluminum chassis, planetary gear drive, and low-latency RF telemetry.",
    description: "Tamizh Tech engineered and manufactured a competition-ready racing robot platform designed for agility, rapid acceleration, and structural rigidity. Featuring custom CNC laser-cut aluminum brackets, planetary gearboxes, and high-traction rubber wheels.",
    objective: "Develop a rigid, low-center-of-gravity mobile platform capable of navigating obstacle courses with zero chassis deflection under heavy lateral loads.",
    problem: "Commercial plastic chassis flex under rapid directional changes and lack modularity for custom motor mounts and battery balance.",
    concept: "Modular dual-tier aluminum chassis integrating isolated battery trays, planetary gear hubs, and custom power distribution wiring.",
    whyThisProject: {
      heading: "Engineered for Tournament Performance & Rigidity",
      points: [
        "In-house precision fiber laser cut from 2mm SS/Aluminum sheet metal.",
        "Planetary gear reduction provides immediate torque transfer without belt slip.",
        "Integrated mounting points for telemetry sensors, custom PCBs, and bumper guards."
      ]
    },
    architectureModules: [
      "Rigid Laser-Cut Metal Chassis Substructure",
      "High-Torque Planetary Gear Drive Assemblies",
      "Custom Power Distribution & Low-Loss Wiring Harness",
      "2.4GHz AFHDS 2A Radio Command Receiver Module"
    ],
    technologies: ["Laser Cutting (Stainless Steel)", "Planetary Gear Drivetrains", "2.4GHz RF Telemetry", "Power Distribution"],
    hardware: ["2mm Aluminum Alloy Chassis", "4x High-Torque Planetary Motors", "High-Grip Racing Tires", "FlySky 2.4GHz Receiver"],
    software: ["Microcontroller Motor PWM Driver Firmware"],
    applications: [
      "Inter-collegiate Robo Race competitions",
      "Mobile kinematics and obstacle navigation research",
      "Student robotics engineering and telemetry workshops"
    ],
    engineeringConsiderations: [
      "Center-of-gravity positioning to prevent roll during high-speed banked turns",
      "Motor driver heat dissipation during continuous stall bursts"
    ],
    coverImage: "/product/race/race1.png",
    images: ["/product/race/race1.png", "/product/race/race2.png"],
    relatedServices: ["robotics-automation", "laser-cutting", "pcb-design-fabrication-assembly", "3d-printing"],
    relatedProducts: ["rc-robo-race"],
    verifiedEvidence: {
      clientType: "Engineering Competition Teams & Labs",
      deliverables: ["Precision laser-cut chassis", "Planetary motor drive system", "Wiring harness and test documentation"]
    },
    published: true,
    indexable: true,
    createdAt: "2024-03-15T00:00:00.000Z",
    updatedAt: "2026-03-01T00:00:00.000Z"
  },
  {
    id: "rc-robo-soccer-pneumatic-bot",
    slug: "rc-robo-soccer-pneumatic-bot",
    name: "Pneumatic Striker Holonomic Soccer Robot",
    category: "Advanced Manufacturing & Industrial IoT",
    categorySlug: "industrial-manufacturing",
    projectType: "completed",
    badge: "Verified Tamizh Tech Build",
    shortDescription: "360-degree omnidirectional mobile platform with high-pressure fast-actuating pneumatic striker for precision ball delivery.",
    description: "Engineered by Tamizh Tech, this mobile robotic platform utilizes 4-wheel omnidirectional motion planning paired with a fast-actuating pneumatic kicking piston operating at up to 8 bar for rapid dribbling and high-velocity strikes.",
    objective: "Achieve instantaneous multi-directional crabbing without rotating the vehicle frame while delivering repeatable high-impulse kicking force.",
    problem: "Differential drive robots require turning before moving laterally, making rapid ball interception difficult during high-speed tournament play.",
    concept: "Holonomic kinematics using 4 independent omni-wheels paired with an onboard pneumatic tank and high-flow solenoid valve.",
    whyThisProject: {
      heading: "Instant Holonomic Maneuverability & Pneumatic Strike",
      points: [
        "4-wheel omnidirectional drivetrain enables instantaneous lateral crabbing.",
        "Fast-actuating pneumatic piston delivers repeatable strike force up to 8 bar.",
        "Enclosed 2mm aluminum body protects sensitive pressure gauges and solenoid circuits."
      ]
    },
    architectureModules: [
      "4-Wheel Holonomic Omni-Directional Kinematic Base",
      "High-Pressure Compressed Air Tank & Fast-Acting Solenoid",
      "Microcontroller Solenoid Timing Circuit",
      "Heavy-Duty Impact-Resistant Armor Casing"
    ],
    technologies: ["Omnidirectional Kinematics", "Pneumatic Actuation", "Laser Cutting", "Embedded Solenoid Control"],
    hardware: ["4x Omni-Directional Wheels", "High-Flow 12V DC Solenoid Valve", "Pneumatic Cylinder (8 Bar)", "Laser-Cut Armor Body"],
    software: ["Holonomic Velocity Vector Mixer Firmware"],
    applications: [
      "Robo Soccer college tournaments and championships",
      "Multi-directional vehicle kinematics demonstration",
      "Fluid power and pneumatic actuator experimental rigs"
    ],
    engineeringConsiderations: [
      "Rapid pressure recovery between successive kicks",
      "Omni-wheel traction balance across high-gloss tournament surfaces"
    ],
    coverImage: "/product/soccer/soccer 1.0.png",
    images: ["/product/soccer/soccer 1.0.png", "/product/soccer/soccer1.1.png"],
    relatedServices: ["robotics-automation", "laser-cutting", "pcb-design-fabrication-assembly", "3d-printing"],
    relatedProducts: ["rc-robo-soccer"],
    verifiedEvidence: {
      clientType: "Robo Soccer Tournament Teams",
      deliverables: ["Pneumatic system assembly", "4-wheel omni drive base", "Tested solenoid driver board"]
    },
    published: true,
    indexable: true,
    createdAt: "2024-03-20T00:00:00.000Z",
    updatedAt: "2026-03-01T00:00:00.000Z"
  }
];
