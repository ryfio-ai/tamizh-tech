export interface ServiceCapability {
  title: string;
  desc: string;
  tags?: string[];
}

export interface ServiceMaterialSpec {
  name: string;
  desc: string;
  badge?: string;
}

export interface ServiceApplication {
  title: string;
  desc: string;
}

export interface ServiceWorkflowStep {
  step: number;
  title: string;
  desc: string;
}

export interface ServiceRequirementItem {
  label: string;
  detail: string;
  example: string;
}

export interface ServiceVisualProof {
  title: string;
  desc: string;
  image: string;
  type?: 'image' | 'video';
  videoSrc?: string;
}

export interface ServiceFaqItem {
  q: string;
  a: string;
}

export interface RelatedServiceItem {
  slug: string;
  title: string;
  desc: string;
  href: string;
  image: string;
}

export interface RelatedProductItem {
  title: string;
  desc: string;
  href: string;
  image: string;
}

export type CommercialService = CommercialServiceDetail;

export interface CommercialServiceDetail {
  slug: string;

  canonicalPath: string;
  quoteServiceId: string;
  badge: string;
  h1: string;
  heroSub: string;
  primaryImage: string;
  overview: {
    heading: string;
    paragraphs: string[];
    highlights: { title: string; desc: string }[];
  };
  capabilities: ServiceCapability[];
  materialsOrSpecs?: {
    sectionTitle: string;
    sectionDesc: string;
    items: ServiceMaterialSpec[];
  };
  applications: ServiceApplication[];
  workflow: ServiceWorkflowStep[];
  whatWeNeed: ServiceRequirementItem[];
  visualProof: ServiceVisualProof[];
  faqs: ServiceFaqItem[];
  relatedServices: RelatedServiceItem[];
  relatedProducts?: RelatedProductItem[];
  whatsappMessage: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const commercialServices: Record<string, CommercialServiceDetail> = {
  "3d-printing": {
    slug: "3d-printing",
    canonicalPath: "/services/3d-printing",
    quoteServiceId: "3d-printing",
    badge: "Additive Manufacturing",
    h1: "High-Precision 3D Printing Services in Coimbatore",
    heroSub: "Affordable rapid prototyping and additive manufacturing for functional prototypes, custom robotic components, drone brackets, enclosures, and miniatures.",
    primaryImage: "/pic/3d printing.jpg",
    overview: {
      heading: "Production-Grade Prototyping & Custom Parts",
      paragraphs: [
        "Tamizh Tech provides high-precision 3D printing services in Coimbatore for engineering teams, student innovators, hardware startups, and commercial clients across India.",
        "Whether you need an urgent concept fitment prototype, replacement drone mounts, durable robotic chassis brackets, or detailed scale miniatures, our in-house additive manufacturing setup delivers smooth surface finishes and accurate dimensional tolerances without high minimum order quantities."
      ],
      highlights: [
        { title: "No Minimum Order Quantity (MOQ)", desc: "From a single prototype iteration to small-batch multi-part runs." },
        { title: "Functional Engineering Materials", desc: "Printing in PLA, tough PETG, and flexible impact-resistant TPU." },
        { title: "Local Coimbatore Delivery & Shipping", desc: "Same-day local pickup in Coimbatore or expedited courier delivery nationwide." }
      ]
    },
    capabilities: [
      {
        title: "3D Design & CAD Optimization",
        desc: "We review your geometry for printability, optimizing wall thicknesses, layer orientations, and mechanical fitments to avoid failure under load.",
        tags: ["CAD Review", "DFAM", "Tolerancing"]
      },
      {
        title: "FDM Precision Printing",
        desc: "High-infill FDM printing for durable structural components, mechanical enclosures, custom robotics brackets, and test fixtures.",
        tags: ["FDM", "High Strength", "Functional"]
      },
      {
        title: "Resin (SLA) High-Resolution Printing",
        desc: "Ultra-fine detail printing for smooth surface finishes, intricate miniature details, aesthetic housings, and presentation prototypes.",
        tags: ["SLA Resin", "Smooth Finish", "Fine Detail"]
      },
      {
        title: "Functional Prototypes & Fitment Validation",
        desc: "Rapid turnaround prototype parts for physical ergonomics testing, snap-fit validation, and assembly verification before mass production.",
        tags: ["Prototypes", "Fitment Test", "Fast Turnaround"]
      },
      {
        title: "Custom Robotic Components & Enclosures",
        desc: "Custom motor mounts, sensor brackets, battery cradles, and electronics enclosures engineered to integrate with our hardware kits.",
        tags: ["Robotics Parts", "Enclosures", "Mounts"]
      },
      {
        title: "Miniatures & Scale Models",
        desc: "High-precision detailed miniatures, architectural scale parts, and promotional hardware replicas printed with smooth, crisp contours.",
        tags: ["Miniatures", "Scale Models", "High Precision"]
      }
    ],
    materialsOrSpecs: {
      sectionTitle: "Supported Printing Materials",
      sectionDesc: "We select and calibrate materials based on your mechanical, thermal, and flexibility requirements:",
      items: [
        {
          name: "PLA (Polylactic Acid)",
          desc: "Excellent dimensional stability, crisp overhangs, and clean aesthetic finishes. Ideal for concept models, visual prototypes, and fitment checks.",
          badge: "Precision & Prototyping"
        },
        {
          name: "PETG (Polyethylene Terephthalate Glycol)",
          desc: "High mechanical toughness, impact resistance, and weather/chemical durability. Ideal for functional robot brackets, drone arms, and moving parts.",
          badge: "High Strength & Functional"
        },
        {
          name: "TPU (Thermoplastic Polyurethane)",
          desc: "Flexible, rubber-like elastomeric material with superior shock absorption. Ideal for protective bumpers, vibration isolators, grips, and flexible gaskets.",
          badge: "Flexible & Shock Absorbing"
        }
      ]
    },
    applications: [
      { title: "Robotics & Competition Bots", desc: "Sensor holders, motor spacers, pulley guards, and battery holders for combat bots and line followers." },
      { title: "Custom Drone & UAV Components", desc: "Vibration-damped flight controller mounts, camera gimbals, and aerodynamic landing skids." },
      { title: "IoT & Electronics Housings", desc: "Custom PCB enclosures, snap-fit lids, DIN-rail clips, and external cable glands." },
      { title: "Engineering Capstones & R&D", desc: "Bespoke proof-of-concept parts, mechanical test jigs, and collegiate project demonstrators." },
      { title: "Miniatures & Custom Figurines", desc: "Smooth-surfaced miniature replicas, scaled prototypes, and specialized collectible models." }
    ],
    workflow: [
      { step: 1, title: "Submit Requirement or 3D File", desc: "Send your 3D CAD file (STL, STEP, OBJ) or a hand sketch with critical dimensions." },
      { step: 2, title: "Design & Printability Review", desc: "Our engineers inspect wall thicknesses, support requirements, and recommend the best material." },
      { step: 3, title: "Quote & Material Confirmation", desc: "You receive a transparent quote based on part volume, material, and required infill density." },
      { step: 4, title: "Precision 3D Printing", desc: "Parts are sliced with calibrated layer heights and printed on industrial-grade equipment." },
      { step: 5, title: "Support Removal & Quality Check", desc: "Supports are removed, surfaces cleaned, and critical mounting holes checked for dimensional fit." },
      { step: 6, title: "Dispatch or Coimbatore Pickup", desc: "Safe, cushioned packaging with fast courier dispatch nationwide or direct pickup at Coimbatore." }
    ],
    whatWeNeed: [
      { label: "3D CAD File", detail: "STL, STEP, STP, OBJ, or clear dimensioned 2D sketch", example: "bracket_v2.step or chassis.stl" },
      { label: "Material Choice", detail: "PLA (prototypes), PETG (structural), or TPU (flexible)", example: "PETG in black, 40% infill" },
      { label: "Quantity Needed", detail: "Number of units or iterations required", example: "2 prototype units, 50 production parts" },
      { label: "Critical Requirement", detail: "Load-bearing, heat exposure, snap-fit, or aesthetic finish", example: "Must withstand 3kg motor vibration" },
      { label: "Delivery Preference", detail: "Direct workshop collection in Coimbatore or courier shipping", example: "Pickup in Coimbatore / Ship to Chennai" }
    ],
    visualProof: [
      {
        title: "Additive Manufacturing Workshop",
        desc: "High-precision 3D printing equipment printing custom engineering parts in our Coimbatore workshop.",
        image: "/pic/3d printing.jpg",
        type: "video",
        videoSrc: "/3d printing.mp4"
      },
      {
        title: "Finished 3D Printed Components",
        desc: "Functional mechanical components, custom robotic brackets, and test prototypes printed with tight tolerances.",
        image: "/pic/3d printing.jpg",
        type: "image"
      },
      {
        title: "Robotics Prototyping Hardware",
        desc: "Integrated 3D printed housings and structural brackets assembled on custom robotics platforms.",
        image: "/gallery/21.jpeg",
        type: "image"
      }
    ],
    faqs: [
      {
        q: "Do you provide 3D CAD design support?",
        a: "Yes. If you have a concept, rough drawing, or broken physical sample, our engineering team can model the part in 3D CAD and optimize it for additive manufacturing."
      },
      {
        q: "What file formats can I send for 3D printing?",
        a: "We accept .STL, .STEP, .STP, .OBJ, and native CAD files from SolidWorks, Fusion 360, and Inventor."
      },
      {
        q: "Can you modify or optimize an existing CAD design?",
        a: "Yes. We frequently inspect customer CAD files to adjust wall thickness, optimize internal ribbing, and adjust hole clearances for screw threads or snap fits."
      },
      {
        q: "What materials do you currently support?",
        a: "We support PLA (for rapid prototyping and smooth models), PETG (for high-strength, heat-tolerant, functional parts), and TPU (for flexible gaskets, bumpers, and shock mounts)."
      },
      {
        q: "Is there a minimum order quantity (MOQ)?",
        a: "No minimum quantity is required. We print single prototype iterations as well as multi-unit production batches."
      },
      {
        q: "Can you print functional, load-bearing mechanical parts?",
        a: "Yes. Using high-infill PETG and optimized slicing parameters (extra perimeters, adaptive infill), our prints withstand mechanical loads for robotics chassis and drone assemblies."
      },
      {
        q: "Do you provide local pickup in Coimbatore and shipping across India?",
        a: "Yes. Clients in Coimbatore can pick up completed parts directly from our workshop, or we ship securely packaged orders to any location across India via courier."
      },
      {
        q: "How quickly can I get a quote for 3D printing?",
        a: "Submit your file through our online Quote Modal or message our engineering line on WhatsApp. We typically respond within 2 to 4 business hours with an engineering review and price quote."
      }
    ],
    relatedServices: [
      {
        slug: "laser-cutting",
        title: "Laser Cutting (Stainless Steel)",
        desc: "Precision stainless steel sheet metal cutting for high-strength robotic chassis and brackets.",
        href: "/services/laser-cutting",
        image: "/pic/laser cutting.jpg"
      },
      {
        slug: "pcb-design-fabrication-assembly",
        title: "PCB Services",
        desc: "Custom schematic design, bare board fabrication, and component assembly (PCBA).",
        href: "/services/pcb-design-fabrication-assembly",
        image: "/pic/pcb design.jpg"
      },
      {
        slug: "robotics-automation",
        title: "Robotics & Automation",
        desc: "Turnkey autonomous systems, manipulator mechanisms, and competition bot builds.",
        href: "/services/robotics-automation",
        image: "/gallery/10.jpg"
      }
    ],
    relatedProducts: [
      {
        title: "RC Robo Race Competition Bot",
        desc: "Custom-engineered racing chassis built using precision 3D printed and metal components.",
        href: "/products/competition/rc-robo-race",
        image: "/gallery/21.jpeg"
      }
    ],
    whatsappMessage: "Hi Tamizh Tech, I am interested in your 3D Printing service for prototypes / custom parts.",
    seo: {
      title: "High-Precision 3D Printing Services in Coimbatore | Tamizh Tech",
      description: "Professional 3D printing services in Coimbatore. Fast turnaround prototyping, custom parts, robotic components, and miniatures in PLA, PETG, and TPU. Get a quote.",
      keywords: ["3d printing coimbatore", "3d printing service coimbatore", "rapid prototyping coimbatore", "PLA PETG TPU 3d printing", "custom robotics 3d printing"]
    }
  },

  "laser-cutting": {
    slug: "laser-cutting",
    canonicalPath: "/services/laser-cutting",
    quoteServiceId: "laser-cutting",
    badge: "Fiber Laser Metal Fabrication",
    h1: "Precision Stainless Steel Laser Cutting Services",
    heroSub: "Industrial fiber laser sheet metal cutting specialized strictly in Stainless Steel (SS 304 & SS 316) and precision sheet metals. Engineered for high-strength metal fabrication — not wood or MDF.",
    primaryImage: "/pic/laser cutting.jpg",
    overview: {
      heading: "Dedicated Stainless Steel & Sheet Metal Laser Cutting",
      paragraphs: [
        "Tamizh Tech provides dedicated fiber laser sheet metal cutting services in Coimbatore, specialized exclusively in Stainless Steel (SS 304, SS 316) and structural sheet metals.",
        "We do not cut wood, MDF, or acrylic materials. By focusing strictly on stainless steel and metals, we prevent machine contamination, preserve edge cleanliness, and deliver tight mechanical tolerances for combat robot chassis, structural brackets, industrial enclosures, and machinery mounting plates."
      ],
      highlights: [
        { title: "Strictly Stainless Steel & Sheet Metal", desc: "No wood or MDF processing. 100% focused on engineering metal parts." },
        { title: "Nesting & Material Optimization", desc: "CAD nesting to minimize scrap and reduce sheet metal costs." },
        { title: "Burr-Free Edge Finishing", desc: "Clean laser edges ready for mechanical assembly, welding, or tap threading." }
      ]
    },
    capabilities: [
      {
        title: "Fiber Laser Sheet Metal Cutting",
        desc: "High-precision fiber laser cutting through stainless steel sheet metal gauges with narrow kerf widths and smooth cut perimeters.",
        tags: ["Fiber Laser", "Sheet Metal", "SS 304 / 316"]
      },
      {
        title: "2D CAD & DXF Vector Validation",
        desc: "Engineering review of DXF, DWG, and 2D vector files to check hole-to-edge ratios, kerf offsets, and slot tolerances.",
        tags: ["DXF", "DWG", "Vector Checking"]
      },
      {
        title: "CAD Nesting Optimization",
        desc: "Multi-part nesting algorithms that arrange parts efficiently across metal sheets to minimize scrap and lower raw material expenses.",
        tags: ["Nesting", "Scrap Reduction", "Cost Efficient"]
      },
      {
        title: "Custom Robot Chassis & Armor Panels",
        desc: "Heavy-duty stainless steel armor, baseplates, and protective wedges engineered to absorb severe tournament impact.",
        tags: ["Robot Armor", "Combat Bots", "Chassis Plates"]
      },
      {
        title: "Mechanical Brackets & Motor Mounts",
        desc: "Precision brackets, flange mounts, bearing holders, and custom hardware brackets fabricated to tight dimensional specs.",
        tags: ["Motor Mounts", "Brackets", "Structural"]
      },
      {
        title: "Tab-and-Slot Mechanical Interlocks",
        desc: "Laser cutting self-aligning slot-and-tab joints for rapid, square structural assembly prior to final mechanical fastening or welding.",
        tags: ["Tab & Slot", "Self-Aligning", "Snap Fit"]
      }
    ],
    materialsOrSpecs: {
      sectionTitle: "Supported Metal Materials",
      sectionDesc: "We specialize strictly in metal cutting. Wood, MDF, and acrylic cutting is not provided.",
      items: [
        {
          name: "Stainless Steel SS 304",
          desc: "Industry-standard structural stainless steel with excellent corrosion resistance, high tensile strength, and clean laser cutability.",
          badge: "Standard Engineering SS"
        },
        {
          name: "Stainless Steel SS 316",
          desc: "Marine-grade stainless steel containing molybdenum for elevated resistance to chlorides, chemicals, and corrosive environments.",
          badge: "Corrosion Resistant SS"
        },
        {
          name: "Sheet Metals for Robotics & Enclosures",
          desc: "Precision structural sheet metal gauges cut for robotics bulkheads, machinery guards, and custom electronic control panels.",
          badge: "Metal Assemblies Only"
        }
      ]
    },
    applications: [
      { title: "Combat Robot Chassis & Armor Plates", desc: "Rigid stainless steel armor wedges and structural frames built to endure national combat robotics battles." },
      { title: "Industrial Machine Enclosures & Faceplates", desc: "Control panel faceplates, cutouts for switches, displays, and industrial cable gland entry plates." },
      { title: "Heavy-Duty Motor Mounts & Brackets", desc: "Custom motor mounting plates with slotted holes for belt tension adjustment and motor alignment." },
      { title: "Conveyor & Automation Structural Panels", desc: "Guide rails, mounting tabs, and structural connecting plates for factory floor automation lines." },
      { title: "Custom Hardware Fixtures & Jigs", desc: "Laser-cut alignment jigs, welding fixtures, and assembly templates for repeatable fabrication." }
    ],
    workflow: [
      { step: 1, title: "Submit 2D CAD Drawing", desc: "Send your 2D DXF or DWG vector file (1:1 scale) or a dimensioned sketch." },
      { step: 2, title: "Vector Validation & Geometry Check", desc: "We check minimum hole diameters, bend allowances, and slot clearances for laser cutting." },
      { step: 3, title: "Nesting Layout & Transparent Quote", desc: "Parts are nested to optimize sheet usage, and a clear quote based on cut length and material gauge is provided." },
      { step: 4, title: "Precision Fiber Laser Cutting", desc: "CNC fiber laser cutting delivers accurate contours with minimal heat-affected zones." },
      { step: 5, title: "Deburring & Quality Inspection", desc: "Cut parts are deburred, cleaned, and verified for dimensional conformance against your CAD drawing." },
      { step: 6, title: "Dispatch or Coimbatore Pickup", desc: "Packed safely to avoid surface scratching, dispatched via courier or ready for pickup in Coimbatore." }
    ],
    whatWeNeed: [
      { label: "2D CAD Drawing", detail: "DXF or DWG vector file in 1:1 scale with closed contours", example: "chassis_plate.dxf" },
      { label: "Stainless Steel Grade", detail: "Specify SS 304 or SS 316", example: "Stainless Steel SS 304" },
      { label: "Sheet Thickness", detail: "Required sheet metal thickness in millimeters", example: "1.5 mm, 2.0 mm, or 3.0 mm" },
      { label: "Quantity", detail: "Number of cut pieces per drawing", example: "4 sets (16 total plates)" },
      { label: "Special Requirements", detail: "Tight-tolerance slot fits, countersunk holes, or bend lines", example: "Slots must fit 3mm tabs tightly" }
    ],
    visualProof: [
      {
        title: "Fiber Laser Metal Cutting",
        desc: "High-precision fiber laser cutting stainless steel sheet metal in our Coimbatore manufacturing network.",
        image: "/pic/laser cutting.jpg",
        type: "image"
      },
      {
        title: "Precision Metal Panels & Robot Brackets",
        desc: "Laser-cut stainless steel brackets and chassis structural plates with clean, burr-free edges.",
        image: "/gallery/17.jpeg",
        type: "image"
      },
      {
        title: "Robotic Metal Chassis Fabrication",
        desc: "Completed stainless steel chassis frames assembled with tab-and-slot interlocks for maximum structural rigidity.",
        image: "/gallery/10.jpg",
        type: "image"
      }
    ],
    faqs: [
      {
        q: "Do you cut wood, MDF, or acrylic sheets?",
        a: "No. Our laser cutting service is dedicated strictly to Stainless Steel and sheet metals. We do not cut wood, MDF, or acrylic materials."
      },
      {
        q: "What grades of stainless steel do you cut?",
        a: "We primarily cut Stainless Steel SS 304 (standard engineering grade) and SS 316 (marine/corrosion-resistant grade)."
      },
      {
        q: "What CAD file format should I provide for laser cutting?",
        a: "Please provide 2D vector files in .DXF or .DWG format at 1:1 scale with closed polylines. We also accept 3D .STEP files if 2D drawings need to be extracted."
      },
      {
        q: "Can you create a cutting file from a hand sketch?",
        a: "Yes. If you have a clear drawing with all dimensions (length, width, hole centers, and diameters), our CAD team can create the production DXF for you."
      },
      {
        q: "What is the typical turnaround time for laser cut parts?",
        a: "Standard prototype and small-batch orders are typically cut, deburred, and dispatched within 2 to 4 business days upon drawing confirmation."
      },
      {
        q: "Is there a minimum order requirement?",
        a: "No. We cut single one-off chassis plates for custom bots and research projects, as well as repeat production runs for commercial manufacturers."
      },
      {
        q: "Can you cut slot-and-tab interlocking joints?",
        a: "Yes. Tab-and-slot designs are a core engineering method we use for robotic chassis, allowing plates to self-align and lock together accurately prior to fastening."
      }
    ],
    relatedServices: [
      {
        slug: "3d-printing",
        title: "3D Printing Services",
        desc: "Complement metal laser-cut frames with lightweight 3D printed enclosures, brackets, and sensor mounts.",
        href: "/services/3d-printing",
        image: "/pic/3d printing.jpg"
      },
      {
        slug: "robotics-automation",
        title: "Robotics & Automation",
        desc: "Complete robotic system design, chassis fabrication, and embedded motion control integration.",
        href: "/services/robotics-automation",
        image: "/gallery/10.jpg"
      },
      {
        slug: "industrial-automation",
        title: "Industrial Automation",
        desc: "Custom control panels, PLC logic, and factory line integration in Coimbatore.",
        href: "/services/industrial-automation",
        image: "/gallery/18.jpeg"
      }
    ],
    relatedProducts: [
      {
        title: "RC Robo Soccer Striker Chassis",
        desc: "High-torque tournament robot engineered with precision-cut metal structural bulkheads.",
        href: "/products/competition/rc-robo-soccer",
        image: "/gallery/17.jpeg"
      }
    ],
    whatsappMessage: "Hi Tamizh Tech, I need a Laser Cutting requirement for Stainless Steel parts.",
    seo: {
      title: "Precision Stainless Steel Laser Cutting in Coimbatore | Tamizh Tech",
      description: "Industrial fiber laser cutting specialized strictly in Stainless Steel (SS 304, SS 316) sheet metal. High-accuracy CAD nesting, burr-free edges, no wood/MDF. Get a quote.",
      keywords: ["laser cutting coimbatore", "stainless steel laser cutting coimbatore", "fiber laser cutting", "SS 304 laser cutting", "sheet metal cutting coimbatore"]
    }
  },

  "pcb-design-fabrication-assembly": {
    slug: "pcb-design-fabrication-assembly",
    canonicalPath: "/services/pcb-design-fabrication-assembly",
    quoteServiceId: "pcb-services",
    badge: "Turnkey Electronics Engineering",
    h1: "Turnkey PCB Services: Design, Fabrication & Assembly (PCBA)",
    heroSub: "End-to-end circuit board engineering — from schematic capture and multi-layer layout to rapid prototype fabrication, component assembly (PCBA), and hardware bench testing.",
    primaryImage: "/pic/pcb design.jpg",
    overview: {
      heading: "Complete Hardware Lifecycle: Schematic to Assembled Board",
      paragraphs: [
        "Tamizh Tech provides turnkey Printed Circuit Board (PCB) services tailored for robotics controllers, embedded systems, industrial telemetry, and IoT hardware developers.",
        "Instead of coordinating between separate design houses, board fabricators, and manual assembly technicians, our turnkey workflow covers schematic capture, multi-layer routing, Design for Manufacturing (DFM) verification, bare board fabrication, SMT/THT component assembly, and hardware power rail testing."
      ],
      highlights: [
        { title: "Turnkey PCBA Workflow", desc: "Single-source coordination from circuit schematic to assembled, tested boards." },
        { title: "Prototype to Small-Batch Runs", desc: "Supporting quick-turn 1-10 prototype boards to 100+ unit pilot production." },
        { title: "Hardware Bring-Up & Testing", desc: "Visual inspection, power rail continuity verification, and basic firmware flashing." }
      ]
    },
    capabilities: [
      {
        title: "Schematic Capture & Component Selection",
        desc: "Designing clean circuit schematics, selecting reliable in-production components, and generating verified Bills of Materials (BOM).",
        tags: ["Schematics", "BOM", "Component Selection"]
      },
      {
        title: "Multi-Layer PCB Layout & Routing",
        desc: "1-layer, 2-layer, and 4-layer PCB routing with proper ground planes, trace width calculation for high current, and noise isolation.",
        tags: ["1-4 Layers", "Routing", "Ground Planes"]
      },
      {
        title: "Design Rule Checking (DRC & DFM)",
        desc: "Validating minimum trace clearance, drill hole aspect ratios, annular rings, and solder mask expansion prior to fabrication.",
        tags: ["DRC", "DFM", "Zero Errors"]
      },
      {
        title: "Bare Board Fabrication",
        desc: "High-quality FR-4 glass epoxy fabrication with solder mask, crisp silkscreen legend, and Lead-Free HASL or ENIG gold finishes.",
        tags: ["FR-4", "HASL", "ENIG"]
      },
      {
        title: "Surface Mount & Through-Hole Assembly (PCBA)",
        desc: "SMT solder paste stencil printing, reflow soldering, hand placement of fine-pitch ICs, and durable through-hole terminal soldering.",
        tags: ["SMT Assembly", "THT", "Stencil Reflow"]
      },
      {
        title: "Bench Inspection & Hardware Bring-Up",
        desc: "Microscopic solder joint inspection, short-circuit continuity checks, DC power rail verification, and initial firmware loading.",
        tags: ["Hardware Testing", "Power Check", "Firmware Flash"]
      }
    ],
    materialsOrSpecs: {
      sectionTitle: "PCB Specifications & Capabilities",
      sectionDesc: "Verified manufacturing specifications supported for prototype and small-batch orders:",
      items: [
        {
          name: "Substrate & Layers",
          desc: "Standard FR-4 glass epoxy substrate available in 1-layer, 2-layer, and 4-layer configurations with controlled dielectric thickness.",
          badge: "1, 2 & 4 Layer Boards"
        },
        {
          name: "Surface Finishes",
          desc: "Lead-Free HASL (Hot Air Solder Leveling) for standard boards, and ENIG (Electroless Nickel Immersion Gold) for fine-pitch surface-mount ICs.",
          badge: "Lead-Free HASL / ENIG"
        },
        {
          name: "Solder Mask & Legend",
          desc: "High-contrast solder masks (Standard Green, Matte Black, Blue, Red) with legible component silkscreen reference designators.",
          badge: "Crisp Silkscreen & Colors"
        }
      ]
    },
    applications: [
      { title: "Robotics Motion Controllers & Drivers", desc: "Custom H-bridge motor driver boards, PWM distribution boards, and competition bot power distribution hubs." },
      { title: "Microcontroller Development Boards", desc: "Custom breakout and breakout boards for STM32, ESP32, RP2040, and Arduino architectures." },
      { title: "Industrial IoT & Telemetry Nodes", desc: "Sensor interface boards with RS485, CAN bus, LoRa, or Wi-Fi communication and power regulation." },
      { title: "Power Supply & Battery Management", desc: "Buck/boost DC-DC voltage regulators, Li-Po protection circuits, and high-current relay switching boards." },
      { title: "Sensor Interfacing & Signal Conditioning", desc: "Low-noise analog amplifier circuits, optical encoder breakout boards, and optoisolated I/O interfaces." }
    ],
    workflow: [
      { step: 1, title: "Schematic & Architecture Review", desc: "Review your circuit concept, pin allocations, power requirements, and component footprints." },
      { step: 2, title: "PCB Layout & Multi-Layer Routing", desc: "Component placement, trace routing, power planes, decoupling capacitor placement, and DRC validation." },
      { step: 3, title: "Gerber & Manufacturing File Export", desc: "Generating standard RS-274X Gerber files, Excellon drill files, and Pick-and-Place centroid data." },
      { step: 4, title: "Bare Board Fabrication", desc: "Precision substrate etching, via plating, solder masking, surface finishing, and flying probe testing." },
      { step: 5, title: "Component Assembly (PCBA)", desc: "SMT stencil printing, component placement, reflow soldering, and manual through-hole connector soldering." },
      { step: 6, title: "Hardware Bring-Up & Dispatch", desc: "Microscopic joint inspection, DC power rail validation, safe anti-static packaging, and tracked shipping." }
    ],
    whatWeNeed: [
      { label: "Design Files", detail: "Schematic diagram, netlist, OR existing Gerber files (RS-274X ZIP)", example: "gerber_files.zip or circuit_schematic.pdf" },
      { label: "Bill of Materials (BOM)", detail: "Component list with manufacturer part numbers, packages, and values (for PCBA)", example: "bom_template.xlsx with MPNs" },
      { label: "Board Dimensions & Layers", detail: "Number of layers (1, 2, or 4) and target PCB outline dimensions", example: "2-layer board, 60mm x 45mm" },
      { label: "Component Sourcing Preference", detail: "Full turnkey procurement by Tamizh Tech or client-supplied components", example: "Turnkey procurement of all SMD parts" },
      { label: "Quantity", detail: "Number of bare boards or assembled boards required", example: "5 assembled prototype units" }
    ],
    visualProof: [
      {
        title: "Multi-Layer PCB Design & Routing",
        desc: "High-density multi-layer routing, differential pair impedance matching, and ground plane design.",
        image: "/pic/pcb design.jpg",
        type: "image"
      },
      {
        title: "Assembled Hardware & PCBA Bring-Up",
        desc: "SMT assembled circuit boards with microcontrollers, power regulators, and communication transceivers.",
        image: "/gallery/16.jpeg",
        type: "image"
      },
      {
        title: "Integrated Electronics in Robotic Systems",
        desc: "Custom motor drive and power distribution circuit boards mounted in operational hardware assemblies.",
        image: "/gallery/17.jpeg",
        type: "image"
      }
    ],
    faqs: [
      {
        q: "Can you design a PCB from just a breadboard circuit or schematic drawing?",
        a: "Yes. You can provide a hand-drawn circuit diagram, breadboard prototype photos, or simulation schematic. Our engineers will capture the schematic, select SMD components, and layout the PCB."
      },
      {
        q: "Do you provide component assembly (PCBA) or only bare boards?",
        a: "We provide both options. You can order bare fabricated circuit boards, or choose full turnkey PCBA where we procure components, solder them, and inspect the finished boards."
      },
      {
        q: "Can you source electronic components on the BOM?",
        a: "Yes. We source authentic components from authorized electronic distributors. If you have custom or pre-flashed microcontrollers, you can also ship components to our Coimbatore facility."
      },
      {
        q: "What files do you need if I already have a completed PCB layout?",
        a: "If your layout is ready, please send standard RS-274X Gerber files (copper layers, solder mask, silkscreen, drill file). For PCBA, also include the Bill of Materials (BOM) with manufacturer part numbers and centroid (pick-and-place) data."
      },
      {
        q: "What is the typical turnaround time for prototype PCBA?",
        a: "Turnaround time typically ranges from 5 to 8 working days for bare boards, and 8 to 12 working days for turnkey assembly, depending on component lead times."
      },
      {
        q: "Do you test the boards before delivery?",
        a: "Yes. Every assembled board undergoes visual magnification inspection, short-circuit continuity checks across power rails, and basic voltage regulation verification before shipment."
      }
    ],
    relatedServices: [
      {
        slug: "robotics-automation",
        title: "Robotics & Automation",
        desc: "Integrate your custom PCB into complete robotic chassis and autonomous platforms.",
        href: "/services/robotics-automation",
        image: "/gallery/10.jpg"
      },
      {
        slug: "3d-printing",
        title: "3D Printing Services",
        desc: "Fabricate tailored enclosures, mounting brackets, and standoffs for your custom circuit boards.",
        href: "/services/3d-printing",
        image: "/pic/3d printing.jpg"
      },
      {
        slug: "industrial-automation",
        title: "Industrial Automation",
        desc: "Interfacing custom sensor electronics with PLCs, SCADA dashboards, and 24V industrial controls.",
        href: "/services/industrial-automation",
        image: "/gallery/18.jpeg"
      }
    ],
    whatsappMessage: "Hi Tamizh Tech, I need PCB Design/Fabrication/Assembly support for my hardware project.",
    seo: {
      title: "Turnkey PCB Design, Fabrication & Assembly in Coimbatore | Tamizh Tech",
      description: "End-to-end PCB services in Coimbatore. Schematic design, multi-layer routing, bare board fabrication, and SMT/THT assembly (PCBA). Rapid prototype delivery. Get a quote.",
      keywords: ["pcb design coimbatore", "pcba service coimbatore", "turnkey pcb assembly", "smt assembly coimbatore", "circuit board fabrication"]
    }
  },

  "robotics-automation": {
    slug: "robotics-automation",
    canonicalPath: "/services/robotics-automation",
    quoteServiceId: "robotics",
    badge: "Specialized Engineering",
    h1: "Custom Robotics & Automation Engineering",
    heroSub: "We design, build, and deploy custom robotic systems — from tournament-tested competition combat platforms to autonomous mobile bases and multi-axis manipulator mechanisms.",
    primaryImage: "/gallery/10.jpg",
    overview: {
      heading: "End-to-End Robotics Design, Kinematics & Embedded Control",
      paragraphs: [
        "Tamizh Tech Robotics Company is a homegrown engineering firm in Coimbatore with deep practical roots in national robotics tournaments, autonomous mobile robotics, and educational engineering platforms.",
        "We do not simply assemble off-the-shelf kits — we engineer custom mechanical chassis frames, design dedicated high-current motor drivers, write deterministic embedded firmware, and integrate LiDAR/vision sensors for real-world robotic tasks."
      ],
      highlights: [
        { title: "Ground-Up Hardware Engineering", desc: "Custom laser-cut steel armor, 3D printed components, and CNC structural frames." },
        { title: "Tournament-Grade Reliability", desc: "Battle-tested electrical wiring and power stages engineered to endure extreme shock and vibration." },
        { title: "Complete System Integration", desc: "Mechanical kinematics, real-time motor control, radio telemetry, and autonomous sensor suites." }
      ]
    },
    capabilities: [
      {
        title: "Custom Robot Chassis & Mechanical Kinematics",
        desc: "Designing rigid differential drive, omni-directional, and tracked chassis platforms optimized for weight limits, center of gravity, and impact absorption.",
        tags: ["Chassis Design", "Kinematics", "Impact Absorption"]
      },
      {
        title: "Autonomous Navigation & Sensor Integration",
        desc: "Integrating 2D LiDAR, ultrasonic arrays, optical encoders, and IMUs for obstacle avoidance, line following, and localized mapping.",
        tags: ["LiDAR", "Encoders", "Sensor Fusion"]
      },
      {
        title: "Motor Drivers & Power Electronics",
        desc: "Engineering custom H-bridge motor driver circuits, high-RPM brushed/brushless ESC integration, and safe Li-Po battery power distribution.",
        tags: ["Motor Control", "ESC Integration", "Power Distribution"]
      },
      {
        title: "Combat Bots & Competition Hardware",
        desc: "Full fabrication of tournament combat robots, RC Robo Race platforms, and high-torque RC Robo Soccer machines engineered to national tournament rules.",
        tags: ["Combat Bots", "Robo Race", "Robo Soccer"]
      },
      {
        title: "Multi-Axis Manipulator Mechanisms & Arms",
        desc: "Articulated robotic arm prototypes, servo-driven end-effectors, and pick-and-place gripper mechanisms for education and automated sorting.",
        tags: ["Robotic Arms", "Grippers", "Pick & Place"]
      },
      {
        title: "Embedded Control Firmware",
        desc: "Writing deterministic C++ and Python firmware for STM32, ESP32, and Arduino microcontrollers with fail-safe radio frequency control.",
        tags: ["C++ Firmware", "Radio Telemetry", "Fail-Safe"]
      }
    ],
    applications: [
      { title: "Collegiate & National Robotics Competitions", desc: "Tournament-legal combat robots, high-RPM race cars, and autonomous line followers built to strict weight and safety rules." },
      { title: "Autonomous Mobile Base Platforms", desc: "Indoor autonomous transporter bases for warehouse cart towing, sensor inspection, and mobile research payloads." },
      { title: "Centre of Excellence (CoE) Demonstration Bots", desc: "Advanced robotics platforms deployed in engineering colleges to demonstrate kinematics, sensor fusion, and controls." },
      { title: "Special Purpose Automated Test Rigs", desc: "Custom motorized test fixtures for endurance cycling, linear actuation, and component durability validation." },
      { title: "STEM & Educational Tinkering Hardware", desc: "Hands-on, repairable robotics platforms for training students in mechanical assembly, electronics, and coding." }
    ],
    workflow: [
      { step: 1, title: "Requirement & Constraints Study", desc: "Analyze mission objective, payload capacity, operating surface, weight limits, and control interface." },
      { step: 2, title: "Mechanical 3D CAD & Kinematic Sizing", desc: "Model chassis geometry, center of mass, motor torque requirements, and gear reduction ratios in 3D CAD." },
      { step: 3, title: "In-House Structural Fabrication", desc: "Fabricate chassis plates via fiber laser cutting and 3D print specialized brackets, housings, and wheels." },
      { step: 4, title: "Electrical Architecture & Wire Looming", desc: "Assemble motor controllers, circuit protection, battery safety switches, and neatly loomed control wiring." },
      { step: 5, title: "Firmware Development & Drive Calibration", desc: "Flash microcontrollers, calibrate PID loops, tune radio transmitter telemetry, and set safety fail-safes." },
      { step: 6, title: "Full-Load Testing, Handover & Docs", desc: "Rigorous dynamic testing under full payload, complete with wiring schematics, user manual, and training." }
    ],
    whatWeNeed: [
      { label: "Project Objective", detail: "Purpose of the robot (competition, industrial transport, academic research, or prototype demonstration)", example: "RC Robo Race platform for tournament competition" },
      { label: "Payload & Speed Targets", detail: "Required carrying weight, speed, and continuous battery operating runtime", example: "Carries 5kg payload at 1.5 m/s for 45 minutes" },
      { label: "Physical Constraints", detail: "Maximum outer dimensions, weight limit class, and operating environment (indoor, rough terrain)", example: "Max 30cm x 30cm, under 5kg total weight" },
      { label: "Control Preference", detail: "Radio remote controller (RC), autonomous sensor following, or serial computer link", example: "FlySky 2.4GHz 10-channel RC transmitter" },
      { label: "Timeline", detail: "Target completion milestone or competition registration deadline", example: "Required in 3 weeks for upcoming technical fest" }
    ],
    visualProof: [
      {
        title: "Custom Robotic Systems & Chassis Assembly",
        desc: "Custom multi-axis robotic hardware and competition chassis fabricated and tested in Coimbatore.",
        image: "/gallery/10.jpg",
        type: "image"
      },
      {
        title: "Electronics Integration & Power Hardware",
        desc: "High-torque motor stages, custom wiring harnesses, and battery power modules mounted in test chassis.",
        image: "/gallery/21.jpeg",
        type: "image"
      },
      {
        title: "Precision Metal Structural Framework",
        desc: "Laser-cut high-strength structural metal plates and armor engineered to withstand intense dynamic loads.",
        image: "/gallery/17.jpeg",
        type: "image"
      }
    ],
    faqs: [
      {
        q: "Do you engineer custom robots from scratch?",
        a: "Yes. We handle the entire engineering lifecycle: mechanical CAD design, motor torque sizing, structural fabrication, embedded electronics, and firmware programming."
      },
      {
        q: "What control systems and microcontrollers do you use?",
        a: "We work with real-time microcontrollers (STM32, ESP32, Arduino), 2.4GHz radio telemetry systems (FlySky controllers), and embedded single-board computers for sensor-driven automation."
      },
      {
        q: "Can you build competition-ready robots for college tournaments?",
        a: "Yes. Tamizh Tech has engineered national tournament-winning combat bots, RC Robo Race cars, and RC Robo Soccer bots fully compliant with standard competition rulebooks."
      },
      {
        q: "Do you supply documentation and wiring schematics with the robot?",
        a: "Yes. Every custom robotics build is delivered with complete wiring pinout diagrams, power distribution schematics, bill of materials, and operational guidelines."
      },
      {
        q: "How long does a custom robotics build typically take?",
        a: "Timeline depends on project scope. Standard competition chassis and learning platforms typically take 2 to 3 weeks, while bespoke autonomous platforms take 4 to 8 weeks."
      },
      {
        q: "Do you provide on-site technical training and demonstration?",
        a: "Yes. We offer training sessions for students, faculties, and engineering teams to learn maintenance, battery safety, and programming modifications."
      }
    ],
    relatedServices: [
      {
        slug: "3d-printing",
        title: "3D Printing Services",
        desc: "Rapid prototyping of robotic sensor covers, brackets, and custom wheel hubs in PLA, PETG, and TPU.",
        href: "/services/3d-printing",
        image: "/pic/3d printing.jpg"
      },
      {
        slug: "laser-cutting",
        title: "Laser Cutting (Stainless Steel)",
        desc: "Precision stainless steel sheet cutting for robot armor, chassis baseplates, and structural gussets.",
        href: "/services/laser-cutting",
        image: "/pic/laser cutting.jpg"
      },
      {
        slug: "pcb-design-fabrication-assembly",
        title: "PCB Services",
        desc: "Turnkey circuit board design and assembly for custom motor drivers and power management.",
        href: "/services/pcb-design-fabrication-assembly",
        image: "/pic/pcb design.jpg"
      }
    ],
    relatedProducts: [
      {
        title: "RC Robo Race Competition Bot",
        desc: "National championship racing platform with dual high-RPM drive motors and low-profile aluminum chassis.",
        href: "/products/competition/rc-robo-race",
        image: "/gallery/21.jpeg"
      },
      {
        title: "FlySky FS-i6X 10CH Transmitter",
        desc: "Reliable 2.4GHz 10-channel telemetry transmitter used across our competition robotics platforms.",
        href: "/products/radio-controllers/flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver",
        image: "/product/fs-i6x.jpg"
      }
    ],
    whatsappMessage: "Hi Tamizh Tech, I have a Robotics & Automation requirement.",
    seo: {
      title: "Custom Robotics & Automation Engineering | Tamizh Tech Coimbatore",
      description: "Custom robotics engineering in Coimbatore. Competition combat robots, autonomous mobile platforms, robotic arms, and embedded motion control. Get a consultation.",
      keywords: ["robotics company coimbatore", "custom robotics engineering", "competition robots india", "autonomous mobile robots coimbatore", "combat bot manufacturer"]
    }
  },

  "industrial-automation": {
    slug: "industrial-automation",
    canonicalPath: "/services/industrial-automation",
    quoteServiceId: "industrial-automation",
    badge: "B2B Factory Engineering",
    h1: "Industrial Automation Solutions: PLC, SCADA & Machine Integration",
    heroSub: "End-to-end industrial automation and machine retrofitting in Coimbatore and Tamil Nadu — bridging industrial control hardware, PLCs, SCADA dashboards, and field sensors for maximum factory uptime.",
    primaryImage: "/gallery/18.jpeg",
    overview: {
      heading: "Practical Industrial Automation for Coimbatore & Tamil Nadu Manufacturers",
      paragraphs: [
        "Tamizh Tech provides B2B industrial automation services designed to modernize production floors, eliminate cycle time bottlenecks, and improve quality consistency across manufacturing plants in Coimbatore and surrounding industrial hubs.",
        "From retrofitting legacy manual machinery with modern programmable logic controllers (PLCs) and HMI touchscreens, to fabricating custom control panels and deploying computer vision defect inspection rigs, we deliver reliable, field-tested engineering solutions without unnecessary complexity."
      ],
      highlights: [
        { title: "Legacy Machine Retrofitting", desc: "Upgrading relay logic to modern PLCs without discarding your proven mechanical frames." },
        { title: "Multi-Brand PLC & HMI Programming", desc: "Commissioning ladder logic and touch panels for Siemens, Delta, Mitsubishi, and Schneider." },
        { title: "Local Coimbatore On-Site Commissioning", desc: "Fast on-site wiring, trial production monitoring, and direct engineering response in Tamil Nadu." }
      ]
    },
    capabilities: [
      {
        title: "PLC Programming & Ladder Logic",
        desc: "Developing structured, modular ladder logic and function block programs with comprehensive error trapping and safety interlocks.",
        tags: ["Siemens", "Delta", "Mitsubishi", "Ladder Logic"]
      },
      {
        title: "SCADA & HMI Touchscreen Development",
        desc: "Designing intuitive operator touchscreens (HMI) and plant-wide SCADA dashboards for real-time cycle tracking, recipe selection, and alarm logs.",
        tags: ["HMI Design", "SCADA Dashboards", "Telemetry"]
      },
      {
        title: "Custom Control Panel Fabrication",
        desc: "Building clean, organized electrical control cabinets with properly sized circuit breakers, VFD motor drives, safety relays, and numbered terminal wiring.",
        tags: ["Panel Wiring", "VFD Drives", "Safety Relays"]
      },
      {
        title: "Sensors & Actuator Integration",
        desc: "Deploying photoelectric sensors, inductive proximity switches, rotary encoders, pneumatic solenoid valves, and servo actuators.",
        tags: ["Sensors", "Pneumatics", "Servo Motion"]
      },
      {
        title: "Machine Vision Defect Inspection",
        desc: "Integrating industrial cameras and OpenCV vision algorithms for real-time dimension validation, defect detection, and missing component rejection.",
        tags: ["Machine Vision", "QC Inspection", "OpenCV"]
      },
      {
        title: "Cycle Time Optimization & Auditing",
        desc: "Analyzing line bottlenecks, calculating step-by-step cycle times, and streamlining automated sequence transitions to boost hourly throughput.",
        tags: ["Cycle Time Audit", "Throughput", "Line Optimization"]
      }
    ],
    materialsOrSpecs: {
      sectionTitle: "Supported Control Systems & Hardware",
      sectionDesc: "We work with industry-standard, readily available automation hardware:",
      items: [
        {
          name: "PLC Platforms",
          desc: "Siemens (S7-1200 / TIA Portal), Delta (DVP / AS Series), Mitsubishi (FX Series), Schneider Electric, and Allen-Bradley micro PLCs.",
          badge: "Industrial Standard PLCs"
        },
        {
          name: "HMI & Visualization",
          desc: "Touch panels from 4.3\" to 15\" (Delta, Siemens Weintek, Schneider) with multi-language operator prompts, alarm banners, and cycle timers.",
          badge: "Touch HMI & SCADA"
        },
        {
          name: "Drives & Motor Controls",
          desc: "Variable Frequency Drives (VFDs) for pump/conveyor speed regulation, AC servo drives for precise multi-axis positioning, and soft starters.",
          badge: "VFD & Servo Motion"
        }
      ]
    },
    applications: [
      { title: "Textile Machinery & Auxiliary Automation", desc: "Automated tension controllers, spinning mill monitoring, and retrofitted pneumatic sequence controls." },
      { title: "Pump & Motor Testing Automation", desc: "Automated performance test rigs, flow sensor logging, and automated pass/fail electrical parameter check benches." },
      { title: "Foundry & Core-Making Machinery", desc: "Sequence automation for hydraulic presses, sand core baking cycles, and conveyor transfer interlocks." },
      { title: "Automotive Ancillary Assembly Lines", desc: "Pneumatic pressing jigs, screw-driving torque verification, and part presence optical sensing stations." },
      { title: "Packaging & Material Sorting Conveyors", desc: "High-speed diverter conveyors, automated batch counting, and box sealing synchronization." }
    ],
    workflow: [
      { step: 1, title: "On-Site Factory Floor Audit", desc: "We visit your manufacturing facility in Coimbatore/Tamil Nadu to inspect existing machinery and understand sequence requirements." },
      { step: 2, title: "Electrical Architecture & BOM Design", desc: "Drafting schematic drawings, selecting appropriate PLC models, sizing VFDs, and selecting field sensor types." },
      { step: 3, title: "Panel Fabrication & Shop Wiring", desc: "Assembling control panels in our workshop with tidy wire ferrule labeling, safety disconnects, and cable ducts." },
      { step: 4, title: "PLC Logic & HMI Software Programming", desc: "Writing structured control programs with auto/manual modes, emergency stop routines, and diagnostic alarm screens." },
      { step: 5, title: "Factory Acceptance Testing (FAT)", desc: "Simulated I/O testing in our lab to verify sequence logic, interlock protections, and timer parameters prior to delivery." },
      { step: 6, title: "On-Site Commissioning & Handover", desc: "Field sensor wiring, dry runs, trial production monitoring on your live line, complete with training and backup files." }
    ],
    whatWeNeed: [
      { label: "Machine / Process Overview", detail: "Description of the machinery, manual process, or production sequence to automate", example: "Semi-automatic hydraulic press cycle for pump components" },
      { label: "Existing Control Setup", detail: "Relay logic, manual pushbuttons, or brand of existing PLC currently installed", example: "Old relay contactor panel with frequent breakdown" },
      { label: "Input / Output Estimates", detail: "Approximate number of sensors, cylinder switches, motors, or safety gates", example: "8 digital inputs, 6 solenoid outputs, 2 VFDs" },
      { label: "Primary Objective", detail: "Cycle time reduction, defect elimination, automated data logging, or operator safety", example: "Reduce cycle time from 45s to 25s per piece" },
      { label: "Plant Location", detail: "Factory location for scheduling an on-site engineering site assessment", example: "Peelamedu / Thudiyalur Industrial Area, Coimbatore" }
    ],
    visualProof: [
      {
        title: "Industrial Automation Control Panel",
        desc: "Custom control cabinet wiring with Siemens PLC, VFD motor controllers, and safety interlocks.",
        image: "/gallery/18.jpeg",
        type: "image"
      },
      {
        title: "Embedded Controller & Sensor Interfacing",
        desc: "Field sensor wiring, optoisolated I/O terminal blocks, and communication transceivers under factory testing.",
        image: "/gallery/16.jpeg",
        type: "image"
      },
      {
        title: "Structural Mounting Frames & Panels",
        desc: "Laser-cut metal brackets and structural enclosure plates fabricated for automated production machinery.",
        image: "/gallery/17.jpeg",
        type: "image"
      }
    ],
    faqs: [
      {
        q: "Can you retrofit our existing manual or older relay-based machines?",
        a: "Yes. Machine retrofitting is one of our primary services. We replace failing mechanical relays with modern PLCs, wire new sensors, and add an HMI touchscreen without requiring you to replace expensive mechanical frames."
      },
      {
        q: "Which PLC and HMI brands do you support?",
        a: "We support Siemens (TIA Portal / S7-1200), Delta (DVP / AS Series), Mitsubishi (GX Works), Schneider Electric, and Omron automation platforms."
      },
      {
        q: "Do you provide on-site installation and commissioning in Coimbatore?",
        a: "Yes. Our engineering team handles complete on-site panel installation, field sensor cabling, machine calibration, and trial production runs across Coimbatore, Tiruppur, and Tamil Nadu."
      },
      {
        q: "Can you integrate computer vision for automated quality inspection?",
        a: "Yes. We deploy industrial camera systems running OpenCV models to inspect parts on moving conveyors for dimensional compliance, surface defects, and missing features."
      },
      {
        q: "How do you handle maintenance and emergency support after commissioning?",
        a: "We provide complete laminated electrical schematics, labeled wiring terminal charts, unlocked PLC program backups, and rapid on-site engineering support for contracted clients."
      },
      {
        q: "How do we get started with an industrial automation project?",
        a: "Contact us via our Quote Form or WhatsApp with details about your machinery. We can arrange an on-site plant walkthrough in the Coimbatore region to inspect your line and prepare an engineering proposal."
      }
    ],
    relatedServices: [
      {
        slug: "robotics-automation",
        title: "Robotics & Automation",
        desc: "Custom autonomous mobile robots and multi-axis manipulators for factory material handling.",
        href: "/services/robotics-automation",
        image: "/gallery/10.jpg"
      },
      {
        slug: "laser-cutting",
        title: "Laser Cutting (Stainless Steel)",
        desc: "Precision stainless steel sheet cutting for control panel faceplates, brackets, and machine guards.",
        href: "/services/laser-cutting",
        image: "/pic/laser cutting.jpg"
      },
      {
        slug: "pcb-design-fabrication-assembly",
        title: "PCB Services",
        desc: "Custom embedded sensor boards and communication nodes integrated with industrial controllers.",
        href: "/services/pcb-design-fabrication-assembly",
        image: "/pic/pcb design.jpg"
      }
    ],
    whatsappMessage: "Hi Tamizh Tech, I have an Industrial Automation requirement.",
    seo: {
      title: "Industrial Automation Solutions in Coimbatore | PLC & SCADA | Tamizh Tech",
      description: "B2B industrial automation in Coimbatore & Tamil Nadu. PLC programming (Siemens, Delta), SCADA/HMI dashboards, control panel fabrication, and machine retrofits. Request a quote.",
      keywords: ["industrial automation coimbatore", "PLC programming coimbatore", "SCADA panel coimbatore", "machine retrofit coimbatore", "factory automation tamil nadu"]
    }
  }
};
