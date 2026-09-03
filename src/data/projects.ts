export interface Project {
  id: string;
  slug: string;
  categorySlug: string;
  title: string;
  category: string;
  description: string;
  coverImage: string;
  gallery: string[];
  images?: string[];
  problem: string;
  challenge?: string;
  solution: string;
  technology?: string[];
  outcome?: string;
  techStack: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export const projects: Project[] = [
  {
    id: "autonomous-navigation-robot",
    slug: "autonomous-navigation-robot",
    categorySlug: "robotics-logistics",
    title: "Autonomous Navigation Robot (AGV)",
    category: "Robotics & Logistics",
    description: "Designed and manufactured a custom Automated Guided Vehicle (AGV) for parts distribution inside assembly plants.",
    coverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=450&fit=crop"
    ],
    images: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=450&fit=crop"
    ],
    problem: "A major local automotive parts supplier faced delays and labor shortages in transferring heavy parts across their 50,000 sq ft production floor.",
    challenge: "A major local automotive parts supplier faced delays and labor shortages in transferring heavy parts across their 50,000 sq ft production floor.",
    solution: "We engineered a 150kg payload capacity differential drive AGV powered by ROS, LiDAR for 2D mapping and SLAM, and magnetic strip fallback guidance to ensure 99.9% operational uptime.",
    outcome: "Achieved 35% reduction in transfer times with zero safety incidents across 50,000 sq ft.",
    techStack: ["ROS (Noetic)", "C++", "Python", "LiDAR SLAM", "Raspberry Pi 4", "Arduino Mega", "Motor Controllers"],
    technology: ["ROS (Noetic)", "C++", "Python", "LiDAR SLAM", "Raspberry Pi 4", "Arduino Mega", "Motor Controllers"],
    metrics: [
      { label: "Transfer Time Reduction", value: "35%" },
      { label: "Safety Incidents", value: "0" },
      { label: "Payload Capacity", value: "150kg" }
    ],
    published: true,
    createdAt: "2024-04-01T00:00:00.000Z",
    updatedAt: "2026-03-01T00:00:00.000Z"
  },
  {
    id: "ai-vision-quality-inspection",
    slug: "ai-vision-quality-inspection",
    categorySlug: "artificial-intelligence",
    title: "AI Vision Quality Inspection System",
    category: "Artificial Intelligence",
    description: "Deployed custom industrial cameras and edge deep learning models to identify micro-defects in cast iron engine blocks.",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=450&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&h=450&fit=crop"
    ],
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&h=450&fit=crop"
    ],
    problem: "Manual inspections missed hairline cracks and surface defects in engine casting blocks, leading to expensive product recalls and warranty claims.",
    challenge: "Manual inspections missed hairline cracks and surface defects in engine casting blocks, leading to expensive product recalls and warranty claims.",
    solution: "We deployed high-speed industrial smart cameras on the production line, paired with custom-trained YOLOv8 object detection models running on Nvidia Jetson modules, to scan and flag blocks in real-time.",
    outcome: "Reached 99.4% inspection accuracy with 150ms scan speed per block.",
    techStack: ["Python", "PyTorch", "YOLOv8", "OpenCV", "Nvidia Jetson Orin Nano", "Industrial GigE Cameras"],
    technology: ["Python", "PyTorch", "YOLOv8", "OpenCV", "Nvidia Jetson Orin Nano", "Industrial GigE Cameras"],
    metrics: [
      { label: "Inspection Accuracy", value: "99.4%" },
      { label: "Scan Time per Part", value: "150ms" },
      { label: "Defect Recall Rate Drop", value: "98%" }
    ],
    published: true,
    createdAt: "2024-04-01T00:00:00.000Z",
    updatedAt: "2026-03-01T00:00:00.000Z"
  },
  {
    id: "agricultural-drone-system",
    slug: "agricultural-drone-system",
    categorySlug: "drone-technology",
    title: "Agricultural Crop Spraying Drone",
    category: "Drone Technology",
    description: "Developed an autonomous hexacopter drone with liquid spray payloads for precision pesticide and fertilizer application.",
    coverImage: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&h=450&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop"
    ],
    images: [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop"
    ],
    problem: "Conventional manual pesticide spraying was slow, consumed massive water volumes, and exposed workers to toxic agrochemicals.",
    challenge: "Conventional manual pesticide spraying was slow, consumed massive water volumes, and exposed workers to toxic agrochemicals.",
    solution: "We built a 10-liter carbon fiber hexacopter utilizing a Pixhawk flight controller, custom flight planning software with obstacle avoidance sonar, and specialized electrostatic nozzles.",
    outcome: "Saved 90% water and increased spraying speed 10x over manual labor.",
    techStack: ["Pixhawk Cube Orange", "ArduPilot", "QGroundControl", "C++", "Electrostatic Spray Nozzles", "Carbon Fiber Chassis"],
    technology: ["Pixhawk Cube Orange", "ArduPilot", "QGroundControl", "C++", "Electrostatic Spray Nozzles", "Carbon Fiber Chassis"],
    metrics: [
      { label: "Water Savings", value: "90%" },
      { label: "Area Covered per Battery Charge", value: "2.5 Acres" },
      { label: "Spray Speed vs Manual", value: "10x Faster" }
    ],
    published: true,
    createdAt: "2024-04-01T00:00:00.000Z",
    updatedAt: "2026-03-01T00:00:00.000Z"
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => (p.id === slug || p.slug === slug) && p.published);
}

export function getProjectByCategoryAndSlug(categorySlug: string, slug: string): Project | undefined {
  return projects.find(
    (p) => (p.id === slug || p.slug === slug) && p.categorySlug === categorySlug && p.published
  );
}

export function getProjectsByCategorySlug(categorySlug: string): Project[] {
  return projects.filter((p) => p.categorySlug === categorySlug && p.published);
}
