import { Metadata } from "next";
import HomeClient from "@/components/HomeClient";
import { FAQSchema } from "@/components/JsonLd";

const faqs = [
  { q: "What industries do you build automation solutions for?", a: "We primarily work with manufacturing, automotive, agriculture, defense, and education industries, designing custom autonomous machinery, robotic arms, IoT systems, and quality control vision AI models." },
  { q: "Do you design custom competition robots?", a: "Yes, TamizhTech has a dedicated division that engineers custom combat robots, RC race cars, and student competition platforms." },
  { q: "How can schools set up STEM tinkering labs?", a: "We provide complete turnkey STEM and robotics tinkering labs. This includes structural hardware setup, procurement of learning kits, curriculum alignment, and comprehensive teacher training." },
];

export const metadata: Metadata = {
  title: "Tamizh Tech Robotics | Robotics, STEM & Competition Robots India",
  description: "Explore Tamizh Tech Robotics for robotics education, STEM programs, competition robots, robotics kits, components and custom robotics solutions for students, schools, colleges and innovators.",
  keywords: [
    // 1. Core brand keywords
    "Tamizh Tech Robotics",
    "Tamizh Tech Robotics Company",
    "Tamizh Tech",
    "Tamizh Tech Robotics Coimbatore",
    "Tamizh Tech Robotics Tamil Nadu",
    "Tamizh Tech Robotics India",
    "Robotics Company Coimbatore",
    "Robotics Company Tamil Nadu",
    "Robotics Company India",
    "Robotics Solutions Coimbatore",
    "Robotics Innovation Company India",
    // 2. Gamified robotics / learning
    "Gamified Robotics Learning",
    "Gamified Robotics Education",
    "Robotics Learning Platform",
    "Robotics Education for Students",
    "Hands-on Robotics Learning",
    "Hands-on Robotics Education",
    "Interactive Robotics Learning",
    "Practical Robotics Learning",
    "Learn Robotics Through Projects",
    "Robotics Project Based Learning",
    "Robotics STEM Learning",
    "STEM Robotics Education",
    "Robotics Skill Development",
    "Future Ready Robotics Skills",
    "Robotics Training for Students",
    // 3. Competition robotics
    "Robot Competition Robots",
    "Robotics Competition Kits",
    "Robot Competition Kit India",
    "Robotics Competition Robot",
    "Competition Robot Kit",
    "Robot Soccer Kit",
    "Robo Soccer Robot",
    "Robo Race Robot",
    "Line Follower Competition Robot",
    "Line Follower Robot Kit",
    "Robo War Robot",
    "Robo Sumo Robot",
    "Maze Solver Robot",
    "Drone Competition Kit",
    "Robot Competition Training",
    "Robotics Competition Hardware",
    "Robotics Competition Solutions",
    // 4. Schools and colleges
    "Robotics for Schools",
    "Robotics Program for Schools",
    "Robotics Classes for Schools",
    "STEM Robotics for Schools",
    "Robotics Lab for Schools",
    "Robotics Lab Setup",
    "School Robotics Program",
    "School STEM Program",
    "School Robotics Competition",
    "Robotics Workshop for Schools",
    "Robotics Program for Colleges",
    "College Robotics Lab",
    "College Robotics Training",
    "College Robotics Competition",
    // 5. Students / makers
    "Robotics Kits for Students",
    "Robotics Kits for Beginners",
    "Robotics Kit India",
    "Robotics Projects for Students",
    "Robotics Project Ideas",
    "Engineering Robotics Projects",
    "DIY Robotics Kits",
    "Robotics Kits for Engineering Students",
    "Arduino Robotics Kits",
    "Robotics Maker Kits",
    // 6. Products
    "Line Follower Robot Kit India",
    "Robot Soccer Kit India",
    "Robo Race Kit India",
    "Robo War Robot Kit India",
    "Robot Sumo Kit India",
    "Buggy Wheel for Robot",
    "Robot Chassis India",
    "Robotics Components India",
    "Robotics Components Coimbatore",
    "Robot Parts India",
    // 7. Custom robotics / engineering
    "Custom Robotics Solutions",
    "Custom Robot Development",
    "Robotics Product Development",
    "Robot Prototype Development",
    "Robotics Engineering Services",
    "Robot Design and Development",
    "Robotics Automation Company",
    "Custom Robot Solutions India",
    "Industrial Robotics Solutions",
    "Robotics Integration Services",
    "Robotics R&D Company",
    "Robotics Innovation Company"
  ],
  openGraph: {
    title: "Tamizh Tech Robotics | Robotics, STEM & Competition Robots India",
    description: "Explore Tamizh Tech Robotics for robotics education, STEM programs, competition robots, robotics kits, components and custom robotics solutions for students, schools, colleges and innovators.",
    url: "https://www.tamizhtech.in",
    siteName: "Tamizh Tech Robotics",
    type: "website",
  }
};

export default function Home() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <HomeClient />
    </>
  );
}
