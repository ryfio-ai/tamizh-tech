export interface EventItem {
  id: string; // slug
  title: string;
  type: "Workshop" | "Webinar" | "Competition" | "Bootcamp";
  date: string;
  location: string;
  capacity: number;
  price: string;
  description: string;
  banner: string;
}

export const events: EventItem[] = [
  {
    id: "national-robotics-championship-2026",
    title: "National Robotics Championship 2026",
    type: "Competition",
    date: "2026-09-12",
    location: "PSG College of Technology, Coimbatore",
    capacity: 200,
    price: "₹1,500 per team",
    description: "The ultimate showdown of autonomous line-followers, robo-soccer, and custom combat bots. Showcase your innovation and win cash prizes up to ₹1,00,000.",
    banner: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop"
  },
  {
    id: "autonomous-drones-workshop",
    title: "Autonomous Drones & ROS Workshop",
    type: "Workshop",
    date: "2026-07-28",
    location: "TamizhTech Lab, Coimbatore",
    capacity: 30,
    price: "₹2,500",
    description: "Learn to interface Pixhawk flight controllers with ROS (Robot Operating System). Design custom mission paths and perform hardware-in-the-loop autonomous flights.",
    banner: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&h=450&fit=crop"
  },
  {
    id: "industrial-iot-edge-ai-bootcamp",
    title: "Industrial IoT & Edge AI Bootcamp",
    type: "Bootcamp",
    date: "2026-08-15",
    location: "Coimbatore IT Park Conference Hall",
    capacity: 50,
    price: "₹4,000",
    description: "A comprehensive hands-on bootcamp on deploying machine learning models to microcontrollers (TinyML) and connecting factory sensors to cloud databases via MQTT.",
    banner: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=450&fit=crop"
  },
  {
    id: "future-of-industrial-automation",
    title: "The Future of Industrial Automation & SCADA",
    type: "Webinar",
    date: "2026-07-20",
    location: "Online (Zoom)",
    capacity: 500,
    price: "Free",
    description: "Join our industry experts to discuss the integration of cloud databases and PLC networks. Ideal for engineering students and entry-level industrial professionals.",
    banner: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=450&fit=crop"
  }
];
