export interface Course {
  id: string; // slug
  cat: string;
  title: string;
  desc: string;
  language: string[];
  duration: string;
  price: string;
  mode: "Online" | "Offline" | "Hybrid";
  syllabus: string[];
  instructor: {
    name: string;
    bio: string;
    image?: string;
  };
  seatsLeft: number;
}

export const courses: Course[] = [
  {
    id: "robotics-for-schools",
    cat: "School",
    title: "Robotics for Schools",
    desc: "Hands-on robotics program for school students (Grade 6–12). Build, program, and compete.",
    language: ["English", "Tamil"],
    duration: "3 months",
    price: "₹8,500",
    mode: "Offline",
    syllabus: [
      "Introduction to Electronics & Microcontrollers",
      "Sensor Integration (IR, Ultrasonic, Light)",
      "Motor Drivers & Mobile Robot Chassis Assembly",
      "Scratch & C++ Visual Block Programming",
      "Final Project: Autonomous Line Follower / Obstacle Avoidance Bot"
    ],
    instructor: {
      name: "Er. K. Tamizharasan",
      bio: "Founder of TamizhTech and passionate robotics educator with over 8 years of school training experience."
    },
    seatsLeft: 8
  },
  {
    id: "stem-basics",
    cat: "School",
    title: "STEM Basics",
    desc: "Introduction to STEM concepts through fun activities and mini-projects.",
    language: ["English", "Tamil"],
    duration: "1 month",
    price: "₹3,200",
    mode: "Online",
    syllabus: [
      "Fundamentals of Science & Engineering Design Processes",
      "Basic Electronic Component Sandbox (LEDs, Resistors, Breadboards)",
      "Coding Logic & Algorithms using Scratch",
      "Building Simple Mechanical Toy Contraptions"
    ],
    instructor: {
      name: "Priya Krishnan",
      bio: "Curriculum director at TamizhTech, specialising in early childhood STEM education."
    },
    seatsLeft: 14
  },
  {
    id: "embedded-systems",
    cat: "College",
    title: "Embedded Systems & IoT",
    desc: "Deep dive into microcontrollers, RTOS, and firmware development for engineering students.",
    language: ["English"],
    duration: "2 months",
    price: "₹12,500",
    mode: "Offline",
    syllabus: [
      "AVR, PIC & ARM Architecture Fundamentals",
      "Embedded C Programming & Bare Metal Coding",
      "Serial Protocols (I2C, SPI, UART, CAN)",
      "FreeRTOS Integration and Task Scheduling",
      "Internet of Things: ESP32, MQTT, and Cloud Dashboards"
    ],
    instructor: {
      name: "Arun Selvaraj",
      bio: "Lead Embedded Firmware Engineer with expertise in industrial IoT sensor deployments."
    },
    seatsLeft: 5
  },
  {
    id: "ai-machine-learning",
    cat: "College",
    title: "AI & Machine Learning",
    desc: "From Python basics to deploying ML models — complete AI course for college students.",
    language: ["English"],
    duration: "3 months",
    price: "₹15,000",
    mode: "Hybrid",
    syllabus: [
      "Python Basics, NumPy, Pandas & Matplotlib",
      "Supervised & Unsupervised Machine Learning Algorithms",
      "Deep Learning Foundations: Neural Networks & TensorFlow",
      "Computer Vision & NLP Fundamentals",
      "Capstone Project: End-to-End Model Deployment"
    ],
    instructor: {
      name: "Meera Nair",
      bio: "AI R&D lead at TamizhTech, specialising in edge computing and computer vision solutions."
    },
    seatsLeft: 6
  },
  {
    id: "drone-engineering",
    cat: "College",
    title: "Drone Engineering",
    desc: "Design, build, and fly a custom UAV. Covers aerodynamics, electronics, and flight control.",
    language: ["English", "Tamil"],
    duration: "6 weeks",
    price: "₹18,000",
    mode: "Offline",
    syllabus: [
      "UAV Aerodynamics, Lift, Drag & Frame Mechanics",
      "Quadcopter Avionics: Flight Controllers (Ardupilot/PX4), ESCs, Motors",
      "LiPo Battery Management & Transmitter Calibration",
      "Ground Control Station (GCS) Setup & Waypoint Mission Planning",
      "Hands-on Simulator Training & Real Test Flight Execution"
    ],
    instructor: {
      name: "Er. K. Tamizharasan",
      bio: "UAV expert and certified pilot, trainer of over 200+ students in drone design."
    },
    seatsLeft: 4
  },
  {
    id: "industrial-automation-plc",
    cat: "Professionals",
    title: "Industrial Automation (PLC)",
    desc: "Industry-grade PLC, SCADA, and industrial automation for working professionals.",
    language: ["English"],
    duration: "45 days",
    price: "₹22,000",
    mode: "Offline",
    syllabus: [
      "Siemens / Delta PLC Architecture & Hardware Wiring",
      "Ladder Logic Programming, Timer & Counter Blocks",
      "HMI / SCADA Dashboard Design & Interface Development",
      "VFD Motor Control & Industrial Communication Networks (Modbus/Ethernet)",
      "Troubleshooting PLC Systems & Factory IO Simulation"
    ],
    instructor: {
      name: "Arun Selvaraj",
      bio: "Lead Industrial Automation Engineer, successfully commissioned 20+ factories."
    },
    seatsLeft: 3
  }
];
