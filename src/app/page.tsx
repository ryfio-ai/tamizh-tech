import { Metadata } from "next";
import HomeClient from "@/components/HomeClient";
import { FAQSchema } from "@/components/JsonLd";

const faqs = [
  { q: "What industries do you build automation solutions for?", a: "We primarily work with manufacturing, automotive, agriculture, defense, and education industries, designing custom autonomous machinery, robotic arms, IoT systems, and quality control vision AI models." },
  { q: "Do you design custom competition robots?", a: "Yes, TamizhTech has a dedicated division that engineers custom combat robots, RC race cars, and student competition platforms." },
  { q: "How can schools set up STEM tinkering labs?", a: "We provide complete turnkey STEM and robotics tinkering labs. This includes structural hardware setup, procurement of learning kits, curriculum alignment, and comprehensive teacher training." },
];

export const metadata: Metadata = {
  title: "TamizhTech Robotics | Future of Engineering Coimbatore",
  description: "Coimbatore's premier robotics company building competition robot kits, school STEM Tinkering labs, and industrial automation solutions across India.",
  keywords: [
    "Tamizh Tech Robotics Company", 
    "Robotics Company Coimbatore", 
    "Tamizh Robotics Club", 
    "ThiranOli Academy", 
    "Educational Robotics Kits India", 
    "Competition Bots Coimbatore", 
    "RC Robo Race", 
    "Robo War Bot Manufacturer", 
    "Industrial Automation Coimbatore", 
    "AGV", 
    "AMR"
  ],
  openGraph: {
    title: "Tamizh Tech Robotics Company | Coimbatore",
    description: "From a student robotics club to a leading robotics, engineering, and technology solutions company. Custom competition bots, educational kits, and industrial automation solutions.",
    url: "https://www.tamizhtech.in",
    siteName: "Tamizh Tech Robotics Company",
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
