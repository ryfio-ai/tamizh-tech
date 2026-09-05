export interface ProjectCategory {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  iconName: string;
  topicsCount: number;
}

export const projectCategories: ProjectCategory[] = [
  {
    id: "cat-industrial-manufacturing",
    slug: "industrial-manufacturing",
    name: "Advanced Manufacturing & Industrial IoT",
    shortName: "Industrial & IIoT",
    description: "Cyber-physical production lines, digital twin telemetry, predictive maintenance instrumentation, and automated material transfer systems for modern manufacturing floors.",
    seoTitle: "Advanced Manufacturing & Industrial IoT Project Concepts | Tamizh Tech",
    seoDescription: "Explore engineering concepts and system architectures for digital twin synchronization, automated tugger trains, and industrial IoT automation.",
    iconName: "Factory",
    topicsCount: 10,
  },
  {
    id: "cat-ev-smart-mobility",
    slug: "ev-smart-mobility",
    name: "EV Charging, Batteries & Clean Energy",
    shortName: "EV & Clean Energy",
    description: "Automated dynamic charging alignment, modular battery swapping mechanisms, thermal imaging scanners, and clean energy maintenance systems.",
    seoTitle: "EV Charging, Battery & Clean Energy Robotics Projects | Tamizh Tech",
    seoDescription: "System concepts and mechatronic architectures for autonomous battery swapping, solar panel cleaning gantries, and dynamic EV dock alignment.",
    iconName: "Zap",
    topicsCount: 10,
  },
  {
    id: "cat-computer-vision-edge-ai",
    slug: "computer-vision-edge-ai",
    name: "Computer Vision & Embedded AI",
    shortName: "Vision & Edge AI",
    description: "High-speed optical defect sorting, spatial SLAM navigation, semantic segmentation grippers, and real-time edge neural inference architectures.",
    seoTitle: "Computer Vision & Embedded AI Robotics Projects | Tamizh Tech",
    seoDescription: "Explore engineering project concepts combining real-time spatial SLAM, embedded edge AI vision, and high-speed delta sorting robotics.",
    iconName: "Eye",
    topicsCount: 10,
  },
  {
    id: "cat-agri-tech",
    slug: "agri-tech",
    name: "Agri-Tech, Environment & Biotech",
    shortName: "Agri-Tech & Biotech",
    description: "Precision automated seed drills, compliant soft-gripper fruit harvesters, vertical hydroponic gantries, and autonomous ecological monitoring rovers.",
    seoTitle: "Agri-Tech & Environmental Robotics Project Topics | Tamizh Tech",
    seoDescription: "Engineering architectures for soft-gripper agricultural harvesting, hydroponic automation gantries, and soil telemetry rovers.",
    iconName: "Sprout",
    topicsCount: 10,
  },
  {
    id: "cat-healthcare-assistive",
    slug: "healthcare-assistive",
    name: "Healthcare, Assistive & Bio-Mechatronics",
    shortName: "Healthcare & Assistive",
    description: "Active rehabilitation exoskeletons, teleoperated haptic arms, non-contact vital sign monitors, and automated laboratory sample preparation gantries.",
    seoTitle: "Healthcare & Assistive Mechatronics Project Concepts | Tamizh Tech",
    seoDescription: "Conceptual engineering architectures for active limb rehabilitation, automated lab liquid handling, and smart assistive mobility platforms.",
    iconName: "HeartPulse",
    topicsCount: 10,
  },
  {
    id: "cat-logistics-retail",
    slug: "logistics-retail",
    name: "Logistics, Warehousing & Smart Retail",
    shortName: "Logistics & Retail",
    description: "Collaborative multi-agent fleet dispatch, high-throughput cross-dock sorting arrays, autonomous stock audit rovers, and omnidirectional forklifts.",
    seoTitle: "Logistics & Automated Warehousing Robotics Projects | Tamizh Tech",
    seoDescription: "Explore engineering architectures for multi-agent warehouse AGV fleets, omnidirectional material handlers, and autonomous inventory scanners.",
    iconName: "Boxes",
    topicsCount: 10,
  },
  {
    id: "cat-infrastructure-maintenance",
    slug: "infrastructure-maintenance",
    name: "Construction, Infrastructure & Maintenance",
    shortName: "Infrastructure & Civil",
    description: "3D concrete deposition gantries, facade climbing rigs, pipeline crack sealing crawlers, and bridge cable structural inspection units.",
    seoTitle: "Construction & Infrastructure Robotics Project Concepts | Tamizh Tech",
    seoDescription: "Mechatronics concepts for automated 3D mortar deposition, vertical surface cleaning crawlers, and structural integrity scanning robots.",
    iconName: "HardHat",
    topicsCount: 10,
  },
  {
    id: "cat-security-emergency",
    slug: "security-emergency",
    name: "Security, Defense & Emergency Response",
    shortName: "Emergency & Inspection",
    description: "All-terrain disaster search-and-rescue rovers, hazardous environment manipulator arms, confined-space inspection drones, and perimeter rovers.",
    seoTitle: "Search, Rescue & Emergency Robotics Project Topics | Tamizh Tech",
    seoDescription: "High-level engineering architectures for all-terrain search-and-rescue rovers, hazardous area telemetry, and confined space inspection.",
    iconName: "ShieldAlert",
    topicsCount: 10,
  },
  {
    id: "cat-commercial-automation",
    slug: "commercial-automation",
    name: "Commercial Services & Consumer Systems",
    shortName: "Commercial Automation",
    description: "Automated food service preparation cells, autonomous industrial floor scrubbers, intelligent waste separation bins, and smart transit platforms.",
    seoTitle: "Commercial Services & Automation Project Ideas | Tamizh Tech",
    seoDescription: "Explore mechatronic architectures for commercial kitchen prep cells, autonomous floor maintenance units, and smart facility sorting.",
    iconName: "Store",
    topicsCount: 10,
  },
  {
    id: "cat-advanced-kinematics",
    slug: "advanced-kinematics",
    name: "Research Frontiers & Advanced Kinematics",
    shortName: "Advanced Kinematics",
    description: "Biomimetic quadruped dynamic balance rigs, flexible continuum manipulators, compliant joint testbeds, and cable-driven parallel workspace robots.",
    seoTitle: "Advanced Kinematics & Bio-Robotics Project Topics | Tamizh Tech",
    seoDescription: "Research-level engineering architectures exploring dynamic legged balance, flexible continuum manipulators, and compliant actuation testbeds.",
    iconName: "Binary",
    topicsCount: 15,
  },
];

export function getProjectCategoryBySlug(slug: string): ProjectCategory | undefined {
  return projectCategories.find((c) => c.slug === slug);
}
