export interface GalleryItem {
  image: string;
  caption: string;
  category: "Robots" | "Workshops" | "Competitions" | "Industrial";
}

export const galleryItems: GalleryItem[] = [
  {
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    caption: "Students testing custom robot chassis at Coimbatore Championship",
    category: "Competitions"
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    caption: "Assembly plant testing of the Autonomous AGV drivetrain",
    category: "Industrial"
  },
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    caption: "Embedded systems practical hands-on session at college lab",
    category: "Workshops"
  },
  {
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&h=600&fit=crop",
    caption: "Custom carbon fiber agricultural hexacopter pre-flight check",
    category: "Robots"
  },
  {
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop",
    caption: "Commissioning the PLC control panels for heavy industrial rollers",
    category: "Industrial"
  },
  {
    image: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?w=800&h=600&fit=crop",
    caption: "Interactive robotic arms demo for school STEM curriculum",
    category: "Robots"
  },
  {
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
    caption: "Team brainstorm session at TamizhTech Coimbatore office",
    category: "Workshops"
  },
  {
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop",
    caption: "Microchip programmer validation and firmware flashing",
    category: "Industrial"
  }
];
