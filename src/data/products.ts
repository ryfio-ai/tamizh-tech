export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface ProductDownload {
  label: string;
  href: string;
  type: "pdf" | "code" | "cad";
}

export interface Product {
  slug: string;
  category: string;
  name: string;
  price?: number;
  badge?: string;
  image: string; // single image fallback
  images: string[]; // slideshow images
  specs: string;
  description: string;
  detailedSpecs: string[];
  applications: string[];
  faqs: ProductFAQ[];
  downloads: ProductDownload[];
}

export const products: Product[] = [
  {
    slug: "rc-robo-race",
    category: "Competition Platforms",
    name: "RC Robo Race",
    image: "/product/race bot.jpg",
    images: [
      "/product/race bot.jpg",
      "/product/race bot 1.jpg",
      "/product/race bot 2.jpg",
      "/product/race bot 3.jpg",
      "/product/race bot 4.jpg"
    ],
    specs: "High-RPM motors, high-traction rubber wheels, lightweight carbon fiber chassis.",
    description: "Engineered for maximum speed and structural durability in national and international Robo Race arenas. Built with an aerospace-grade carbon fiber chassis and driven by high-RPM metal gear motors, this platform delivers unmatched cornering precision.",
    detailedSpecs: [],
    applications: [],
    faqs: [],
    downloads: []
  },
  {
    slug: "rc-robo-soccer",
    category: "Competition Platforms",
    name: "RC Robo Soccer",
    image: "/product/soccer bot.jpg",
    images: [
      "/product/soccer bot.jpg",
      "/product/soccer rc.jpg",
      "/product/soccer.jpg",
      "/product/soccerbot.jpg",
      "/product/soccor bot.jpg"
    ],
    specs: "Pneumatic striker mechanism, omni-directional wheels, customized RC remote.",
    description: "The ultimate offensive platform in student Robo Soccer arenas. Utilizing high-torque drive systems and a fast-actuating pneumatic kicking cylinder, this bot allows you to pass, dribble, and strike with force and accuracy.",
    detailedSpecs: [],
    applications: [],
    faqs: [],
    downloads: []
  },
  {
    slug: "rc-robo-sumo",
    category: "Competition Platforms",
    name: "RC Robo Sumo",
    image: "/product/sumo bot.jpg",
    images: [
      "/product/sumo bot.jpg",
      "/product/sumo rc.jpg"
    ],
    specs: "Rare-earth magnets, high-traction tires, heavy armored steel base.",
    description: "A heavy, armored pushing platform designed to stand firm, block attacks, and push opponents out of the sumo ring. Equipped with rare-earth magnets and high-traction tires.",
    detailedSpecs: [],
    applications: [],
    faqs: [],
    downloads: []
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}
