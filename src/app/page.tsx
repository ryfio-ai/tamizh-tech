import { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Tamizh Tech Robotics Company | The Future of Engineering Starts Here",
  description: "Tamizh Tech Robotics Company, based in Coimbatore, Tamil Nadu, is a premier technology solutions provider specializing in educational robotics kits, custom competition bots, industrial automation (AGVs, AMRs), and technology education.",
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
  return <HomeClient />;
}
