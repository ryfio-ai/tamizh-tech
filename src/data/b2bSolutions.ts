import { commercialServices, CommercialService } from "./commercialServices";
import { products, Product } from "./products";
import { courses, Course } from "./courses";

export interface SolutionNeed {
  id: string;
  label: string;
  description: string;
  targetSectionId?: string;
  defaultService?: string;
}

export interface SolutionOffering {
  title: string;
  description: string;
  details: string[];
  iconName?: string;
}

export interface SolutionWorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface SolutionProofItem {
  title: string;
  description: string;
  image: string;
  alt: string;
  category: string;
}

export interface SolutionFAQ {
  question: string;
  answer: string;
}

export interface B2BSolution {
  slug: string;
  name: string;
  audience: string;
  badge: string;
  hero: {
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
    primaryCtaText: string;
    secondaryCtaText: string;
  };
  whatWeHelpBuild: {
    heading: string;
    subheading: string;
    pillars: {
      title: string;
      description: string;
    }[];
  };
  needs: SolutionNeed[];
  offerings: {
    heading: string;
    subheading: string;
    items: SolutionOffering[];
  };
  serviceSlugs: string[];
  productSlugs: string[];
  courseSlugs: string[];
  workflow: {
    heading: string;
    subheading: string;
    steps: SolutionWorkflowStep[];
  };
  visualProof: {
    heading: string;
    subheading: string;
    items: SolutionProofItem[];
  };
  faqs: SolutionFAQ[];
  quoteService: string;
  whatsappMessage: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonical: string;
  };
}

export const b2bSolutions: Record<string, B2BSolution> = {
  schools: {
    slug: "schools",
    name: "Schools & K-12 STEM",
    audience: "Schools, STEM Coordinators & Educators",
    badge: "K-12 Robotics & STEM",
    hero: {
      title: "Robotics & STEM Solutions for Schools",
      subtitle: "Build practical STEM and robotics learning programs with turnkey labs, hands-on workshops, teacher-supported curricula, and national competition training.",
      image: "/gallery/10.jpg",
      imageAlt: "School robotics and STEM learning platform engineered at Tamizh Tech",
      primaryCtaText: "Get a Quote / School Enquiry",
      secondaryCtaText: "Talk to an Engineer",
    },
    whatWeHelpBuild: {
      heading: "What We Help Schools Build & Achieve",
      subheading: "Transitioning students from passive screen consumption to active hardware creators through structured robotics programs.",
      pillars: [
        {
          title: "Experiential Hands-on Learning",
          description: "Classroom-tested kits and modular hardware that turn theoretical physics and math concepts into physical robotics projects."
        },
        {
          title: "Turnkey Lab Infrastructure",
          description: "Complete equipment provisioning including microcontrollers, sensor kits, 3D printing support, and organized storage setups."
        },
        {
          title: "Educator Empowerment",
          description: "Comprehensive teacher-training bootcamps and lesson plans so your faculty can independently guide student lab sessions."
        },
        {
          title: "National Arena Readiness",
          description: "Structured mentorship for student teams entering national robotics events, line follower contests, and tech exhibitions."
        }
      ]
    },
    needs: [
      {
        id: "stem-lab",
        label: "STEM & ATL Lab Setup",
        description: "Turnkey hardware, workstations, electronics kits, and toolsets.",
        targetSectionId: "solutions-offerings",
        defaultService: "stem-labs"
      },
      {
        id: "robotics-curriculum",
        label: "Robotics Programs (Grade 6–12)",
        description: "Structured progressive learning modules from basics to autonomous bots.",
        targetSectionId: "solutions-courses",
        defaultService: "training"
      },
      {
        id: "workshops",
        label: "Hands-on School Workshops",
        description: "Intensive 1-day to 3-day bootcamps for student engagement.",
        targetSectionId: "solutions-offerings",
        defaultService: "training"
      },
      {
        id: "competitions",
        label: "Competition Support & Kits",
        description: "Arena-ready kits, tracks, and tournament coaching.",
        targetSectionId: "solutions-products",
        defaultService: "products"
      }
    ],
    offerings: {
      heading: "Comprehensive School Offerings",
      subheading: "Everything required to operate an active, inspiring robotics department.",
      items: [
        {
          title: "Turnkey STEM & Innovation Labs",
          description: "End-to-end setup of modern robotics labs tailored to your school's space and student count. Includes electronics sandboxes, soldering safety stations, testing tracks, and modular component drawers.",
          details: [
            "Tailored lab layout and workbench sizing",
            "Arduino, sensor arrays, motor drivers, and battery packs",
            "3D printed chassis brackets and mechanical accessories",
            "Safety equipment and modular component organizers"
          ],
          iconName: "FlaskConical"
        },
        {
          title: "Curriculum-Aligned Robotics Programs",
          description: "Progressive, bilingual (English & Tamil) educational curriculum covering basic electronic circuits, block-based visual coding, C++ fundamentals, and autonomous sensor control.",
          details: [
            "Structured term-by-term syllabus (Grades 6 through 12)",
            "Step-by-step student project workbooks",
            "Milestone-based assessments and practical challenges",
            "Capstone robotics projects per grade level"
          ],
          iconName: "BookOpen"
        },
        {
          title: "Hands-on Science & Tech Bootcamps",
          description: "High-energy interactive workshops delivered directly at your school campus. Students build real working bots from raw components and test them in arena tracks.",
          details: [
            "Line-follower robot building sprints",
            "Obstacle-avoidance ultrasonic rover workshops",
            "Introduction to sensor integration and wireless control",
            "Inter-house robotics competitions with certificates"
          ],
          iconName: "Sparkles"
        },
        {
          title: "Teacher Training & Faculty Enablement",
          description: "Hands-on training for science and computer science teachers. We ensure school staff can troubleshoot circuits, guide student projects, and maintain lab equipment.",
          details: [
            "Direct mentorship with practicing robotics engineers",
            "Troubleshooting guides and circuit debugging techniques",
            "Access to engineering support hotline for lab queries",
            "Annual refresher sessions and new project updates"
          ],
          iconName: "GraduationCap"
        }
      ]
    },
    serviceSlugs: ["3d-printing", "robotics-automation"],
    productSlugs: ["rc-robo-race", "rc-robo-soccer"],
    courseSlugs: ["robotics-for-schools", "stem-basics"],
    workflow: {
      heading: "How We Implement School Programs",
      subheading: "A systematic 5-stage roadmap ensuring reliable deployment and sustained learning.",
      steps: [
        {
          step: "01",
          title: "School Consultation & Sizing",
          description: "We understand your student strength, grade distribution, lab space, and academic objectives."
        },
        {
          step: "02",
          title: "Lab Blueprint & Hardware Selection",
          description: "We prepare a transparent hardware BOM, workstation layout, and curriculum mapping without unnecessary equipment."
        },
        {
          step: "03",
          title: "On-Site Setup & Commissioning",
          description: "Our engineering team sets up the physical workstations, tests all hardware, and organizes inventory."
        },
        {
          step: "04",
          title: "Faculty Training & Curriculum Handover",
          description: "We conduct hands-on training sessions with your appointed staff and deliver student workbooks."
        },
        {
          step: "05",
          title: "Student Mentorship & Event Support",
          description: "Ongoing technical guidance, semester project reviews, and preparation for inter-school competitions."
        }
      ]
    },
    visualProof: {
      heading: "Real Workshop & Hardware Proof",
      subheading: "Genuine engineering equipment and educational hardware built at Tamizh Tech.",
      items: [
        {
          title: "Hands-On Robotics Hardware",
          description: "Mobile robot chassis with ultrasonic and infrared sensors engineered for student assembly.",
          image: "/gallery/10.jpg",
          alt: "Robotics hardware built for educational workshops",
          category: "Hardware"
        },
        {
          title: "3D Printed Student Brackets",
          description: "Custom lightweight sensor holders and chassis fixtures produced on our in-house 3D printers.",
          image: "/gallery/21.jpeg",
          alt: "3D printed robotics brackets for school projects",
          category: "Prototyping"
        },
        {
          title: "Circuit Assembly & Testing",
          description: "Bench testing of educational microcontroller boards and sensor breakout shields.",
          image: "/gallery/17.jpeg",
          alt: "Circuit assembly and testing at Tamizh Tech",
          category: "Electronics"
        }
      ]
    },
    faqs: [
      {
        question: "Can Tamizh Tech set up an ATL (Atal Tinkering Lab) compliant lab?",
        answer: "Yes. We configure laboratory packages containing all essential electronics, microcontrollers, 3D printing equipment, prototyping tools, and mechanical kits needed for modern school innovation labs."
      },
      {
        question: "Are your educational programs suitable for beginners?",
        answer: "Yes. Our courses start from foundational concepts using visual block programming and hands-on breadboard circuits, progressively introducing C++ coding, sensor integration, and mobile robotics as students advance."
      },
      {
        question: "Do you train school teachers to handle the lab independently?",
        answer: "Yes. Faculty development is an essential part of our implementation. We conduct dedicated teacher training sessions and supply comprehensive lesson plans and troubleshooting guides."
      },
      {
        question: "Do you provide student kits for take-home projects?",
        answer: "Yes. We supply individual student robotics kits, line-follower kits, and basic electronics packs for classroom use or take-home practice."
      },
      {
        question: "Can Tamizh Tech support our students for external robotics competitions?",
        answer: "Yes. We provide technical mentorship, arena track practice, and hardware optimization for student teams competing in regional and national robotics challenges."
      }
    ],
    quoteService: "stem-labs",
    whatsappMessage: "Hi Tamizh Tech, I am interested in your School Robotics & STEM Lab solutions.",
    seo: {
      title: "Robotics & STEM Solutions for Schools | Coimbatore | Tamizh Tech",
      description: "Turnkey STEM and robotics labs, curriculum-aligned school courses, teacher training, and competition support in Coimbatore and across Tamil Nadu.",
      keywords: [
        "school robotics programs coimbatore",
        "stem lab setup schools tamil nadu",
        "robotics curriculum for schools",
        "atal tinkering lab trainer coimbatore",
        "school robotics workshop"
      ],
      canonical: "https://www.tamizhtech.in/solutions/schools"
    }
  },

  colleges: {
    slug: "colleges",
    name: "Engineering Colleges & Universities",
    audience: "Colleges, Department Heads & Student Teams",
    badge: "Engineering R&D & CoE",
    hero: {
      title: "Robotics & Engineering Solutions for Colleges",
      subtitle: "From advanced robotics labs and engineering capstones to prototyping, technical training, and R&D collaboration.",
      image: "/gallery/16.jpeg",
      imageAlt: "Advanced college robotics and electronics engineering facility",
      primaryCtaText: "Get a Quote / College Enquiry",
      secondaryCtaText: "Talk to an Engineer",
    },
    whatWeHelpBuild: {
      heading: "What We Help Engineering Colleges Achieve",
      subheading: "Bridging the gap between university syllabus and real-world industrial engineering practice.",
      pillars: [
        {
          title: "Centre of Excellence (CoE) Labs",
          description: "State-of-the-art robotics, embedded systems, and automation infrastructure tailored for academic and applied research."
        },
        {
          title: "Industry-Grade Capstones",
          description: "Direct mentorship for final-year projects with hardware fabrication, real circuit design, and firmware validation."
        },
        {
          title: "Advanced Faculty & Student Training",
          description: "Technical upskilling in ARM Cortex, FreeRTOS, ROS2, PCB layout design, and industrial PLC control."
        },
        {
          title: "Hardware Prototyping Access",
          description: "Direct access to our in-house PCB fabrication, stainless steel laser cutting, and 3D printing facilities in Coimbatore."
        }
      ]
    },
    needs: [
      {
        id: "robotics-coe",
        label: "Robotics Centre of Excellence (CoE)",
        description: "Hardware testbeds, autonomous rovers, and sensor arrays for college departments.",
        targetSectionId: "solutions-offerings",
        defaultService: "robotics"
      },
      {
        id: "capstone-projects",
        label: "Engineering Projects & Capstones",
        description: "End-to-end guidance from schematic to fabricated hardware.",
        targetSectionId: "solutions-offerings",
        defaultService: "custom-engineering"
      },
      {
        id: "college-training",
        label: "Embedded, IoT & AI Training",
        description: "Intensive offline and hybrid courses with industry certification.",
        targetSectionId: "solutions-courses",
        defaultService: "training"
      },
      {
        id: "prototyping-access",
        label: "PCB, Laser & 3D Prototyping",
        description: "Fast manufacturing support for student and research projects.",
        targetSectionId: "solutions-services",
        defaultService: "pcb-services"
      }
    ],
    offerings: {
      heading: "College & University Offerings",
      subheading: "Modular engineering infrastructure, hands-on faculty programs, and fabrication services.",
      items: [
        {
          title: "Robotics Centre of Excellence Setup",
          description: "Turnkey planning and commissioning of robotics research and learning centers. We supply autonomous mobile platforms, robotic arm manipulators, LiDAR sensors, and multi-channel motor controllers.",
          details: [
            "Autonomous ground vehicle (AGV/AMR) testbeds",
            "Kinematic arm kits with multi-axis servo controllers",
            "LiDAR, stereo vision, and IMU sensor integration stations",
            "High-current DC bench power supplies and diagnostic tools"
          ],
          iconName: "Bot"
        },
        {
          title: "Final-Year Project & Capstone Support",
          description: "Comprehensive technical mentorship for ECE, EEE, Mechatronics, and Mechanical student projects. We ensure hardware is designed to industry standards with real PCBs and precision fabrication.",
          details: [
            "Circuit schematic review and PCB layout routing",
            "Precision sheet metal and 3D printed mechanical enclosures",
            "Bare-metal C and RTOS firmware architecture support",
            "Hardware debugging, bench validation, and technical documentation"
          ],
          iconName: "Cpu"
        },
        {
          title: "Technical Training & FDP Programs",
          description: "Specialized workshops and Faculty Development Programs (FDP) conducted by practicing engineers on embedded microcontrollers, RTOS, IoT telemetry, and ROS-based robotics.",
          details: [
            "Embedded C and ARM Cortex microcontrollers",
            "FreeRTOS scheduling, task synchronization, and queues",
            "Industrial serial protocols: CAN bus, Modbus, SPI, I2C",
            "Hands-on PCB design using KiCad/EasyEDA"
          ],
          iconName: "GraduationCap"
        },
        {
          title: "R&D Prototyping & Fabrication Services",
          description: "Rapid turnaround fabrication services right here in Coimbatore for departmental research, student formula/combat bots, and patent prototypes.",
          details: [
            "Turnkey 2-layer and 4-layer FR4 PCB fabrication and SMT assembly",
            "Precision stainless steel chassis laser cutting",
            "High-detail 3D printing in functional PLA, PETG, and TPU",
            "Custom mechanical jigs and testing fixtures"
          ],
          iconName: "Wrench"
        }
      ]
    },
    serviceSlugs: ["pcb-design-fabrication-assembly", "laser-cutting", "3d-printing", "robotics-automation"],
    productSlugs: ["rc-robo-race", "rc-robo-soccer"],
    courseSlugs: ["embedded-systems", "ai-machine-learning"],
    workflow: {
      heading: "How We Collaborate with Colleges",
      subheading: "Clear, transparent steps from initial departmental requirement to ongoing support.",
      steps: [
        {
          step: "01",
          title: "Departmental Assessment",
          description: "We review course syllabi, lab floor space, student batch sizes, and research priorities with department heads."
        },
        {
          step: "02",
          title: "Equipment & Course Blueprint",
          description: "We specify genuine hardware lists, testing instruments, project roadmaps, and training schedules."
        },
        {
          step: "03",
          title: "Procurement & On-Site Setup",
          description: "We deliver, assemble, and calibrate all hardware platforms and test equipment in your lab."
        },
        {
          step: "04",
          title: "Hands-on FDP & Student Workshops",
          description: "We conduct hands-on training sessions for faculty and students, ensuring thorough hardware familiarity."
        },
        {
          step: "05",
          title: "Ongoing R&D & Capstone Mentorship",
          description: "Continuous component support, design reviews, and fabrication access throughout the academic year."
        }
      ]
    },
    visualProof: {
      heading: "Real College & Research Hardware Proof",
      subheading: "Hardware developed, tested, and assembled in our engineering workshop.",
      items: [
        {
          title: "Turnkey PCB Assembly",
          description: "Microcontroller boards and sensor breakout shields routed and assembled for college research projects.",
          image: "/gallery/16.jpeg",
          alt: "PCB assembly for college engineering research",
          category: "Electronics"
        },
        {
          title: "Multi-Sensor Robotics Platforms",
          description: "Chassis integration with LiDAR, motor drivers, and high-traction wheels for autonomous navigation.",
          image: "/gallery/10.jpg",
          alt: "Robotics platform engineered for engineering colleges",
          category: "Robotics"
        },
        {
          title: "Component Inspection & Testing",
          description: "Rigorous signal integrity and power testing of student project hardware prior to deployment.",
          image: "/gallery/17.jpeg",
          alt: "Electronics testing and calibration station",
          category: "Validation"
        }
      ]
    },
    faqs: [
      {
        question: "Can colleges order custom equipment packages tailored to specific syllabi?",
        answer: "Yes. We tailor equipment packages to match university autonomous curricula, Anna University regulations, autonomous college syllabi, and specialized mechatronics labs."
      },
      {
        question: "Do you provide hands-on training directly on college campuses?",
        answer: "Yes. Our engineers conduct on-campus Faculty Development Programs (FDP), student hackathons, and multi-day workshops across Tamil Nadu and neighbouring states."
      },
      {
        question: "Can student teams send their CAD and PCB files directly to Tamizh Tech for fabrication?",
        answer: "Yes. Student teams can submit Gerber files for PCB fabrication and DXF/STEP files for laser cutting or 3D printing with fast turnaround in Coimbatore."
      },
      {
        question: "How do you assist with final-year capstone projects?",
        answer: "We offer technical design reviews, component sourcing, PCB fabrication, structural chassis cutting, and firmware debugging to help teams complete functioning hardware projects on schedule."
      }
    ],
    quoteService: "robotics",
    whatsappMessage: "Hi Tamizh Tech, I am interested in your College Robotics Lab & Engineering Project solutions.",
    seo: {
      title: "Robotics & Engineering Solutions for Colleges | Coimbatore | Tamizh Tech",
      description: "Robotics Centre of Excellence lab setup, engineering capstone guidance, embedded training, and rapid prototyping services for colleges in Coimbatore & Tamil Nadu.",
      keywords: [
        "robotics lab setup colleges coimbatore",
        "engineering project center coimbatore",
        "centre of excellence robotics tamil nadu",
        "embedded systems training engineering students",
        "pcb fabrication student projects coimbatore"
      ],
      canonical: "https://www.tamizhtech.in/solutions/colleges"
    }
  },

  industries: {
    slug: "industries",
    name: "Manufacturing & Industrial Plants",
    audience: "Plant Managers, Automation Engineers & OEMs",
    badge: "Factory Automation & Integration",
    hero: {
      title: "Robotics & Industrial Automation Solutions",
      subtitle: "Design and integration support for industrial automation, robotics, PLC/SCADA systems, machine vision, and custom engineering.",
      image: "/gallery/18.jpeg",
      imageAlt: "Industrial automation control panel and machine wiring at Tamizh Tech",
      primaryCtaText: "Request Industrial Consultation",
      secondaryCtaText: "Talk to an Engineer",
    },
    whatWeHelpBuild: {
      heading: "What We Help Industrial Facilities Achieve",
      subheading: "Practical engineering solutions focused on process uptime, reliability, and precision control.",
      pillars: [
        {
          title: "Robust Factory Floor Control",
          description: "Fail-safe PLC architectures, industrial control cabinet wiring, and standards-compliant safety interlocking."
        },
        {
          title: "Robotic Machine Integration",
          description: "Custom end-effectors, multi-axis gantry setups, and material handling systems engineered for production demands."
        },
        {
          title: "Automated Quality Inspection",
          description: "High-speed camera inspection for dimensional verification, assembly confirmation, and defect rejection."
        },
        {
          title: "Operational Visibility",
          description: "HMI panels, SCADA dashboards, and edge IoT telemetry for real-time cycle tracking and alarm logging."
        }
      ]
    },
    needs: [
      {
        id: "plc-scada",
        label: "PLC & SCADA Control Systems",
        description: "Industrial control logic, panel wiring, and supervisory monitoring.",
        targetSectionId: "solutions-offerings",
        defaultService: "industrial-automation"
      },
      {
        id: "robotics-integration",
        label: "Robotics & Material Handling",
        description: "Custom pick-and-place, gantry mechanisms, and autonomous transport.",
        targetSectionId: "solutions-services",
        defaultService: "robotics"
      },
      {
        id: "machine-vision",
        label: "Machine Vision & Inspection",
        description: "Optical defect detection, orientation checks, and sorting systems.",
        targetSectionId: "solutions-offerings",
        defaultService: "industrial-automation"
      },
      {
        id: "retrofit-custom",
        label: "Machine Retrofitting & Jigs",
        description: "Modernizing legacy machinery with digital controls and custom fabrication.",
        targetSectionId: "solutions-services",
        defaultService: "custom-engineering"
      }
    ],
    offerings: {
      heading: "Industrial Automation Capabilities",
      subheading: "Engineered specifically for manufacturing environments in Coimbatore and Tamil Nadu.",
      items: [
        {
          title: "PLC, HMI & SCADA Development",
          description: "Custom ladder logic, structured text programming, and touch HMI interfaces for machine control. We engineer complete electrical enclosures with systematic terminal labelling and wire routing.",
          details: [
            "Logic programming across verified PLC platforms",
            "HMI touchscreen dashboard design and operator alert systems",
            "Control panel assembly, DIN-rail routing, and circuit breaker protection",
            "Variable Frequency Drive (VFD) and servo motor parameter tuning"
          ],
          iconName: "Factory"
        },
        {
          title: "Robotics Integration & Material Handling",
          description: "Integration of robotic manipulators, pneumatic transfer mechanisms, and custom Automated Guided Vehicles (AGVs) designed to streamline material transit between workstations.",
          details: [
            "Custom end-effector and pneumatic gripper design",
            "Automated conveyor integration and parts indexing",
            "Internal logistics rovers and guided transport",
            "Physical safety guards, light curtains, and emergency circuit integration"
          ],
          iconName: "Bot"
        },
        {
          title: "Machine Vision Quality Inspection",
          description: "Deploying camera-based inspection stations directly onto assembly lines to verify part presence, detect missing screws, check surface flaws, and trigger automated pneumatic reject chutes.",
          details: [
            "High-resolution industrial cameras and dedicated LED ring illuminators",
            "Dimensional tolerance checks and label verification",
            "Automated pass/fail signaling integrated into line PLCs",
            "Rejection log archiving for quality audit compliance"
          ],
          iconName: "Cpu"
        },
        {
          title: "Machine Retrofit & Special Purpose Machinery (SPM)",
          description: "Upgrading relay-based legacy machinery with modern digital controls, replacing worn manual linkages with precision actuators, and building custom testing rigs.",
          details: [
            "Legacy control cabinet rewiring and modernisation",
            "Sensor integration (proximity, optical, pressure, load cells)",
            "Precision stainless steel bracket and frame fabrication",
            "Rigorous on-site testing and operator handover training"
          ],
          iconName: "Wrench"
        }
      ]
    },
    serviceSlugs: ["industrial-automation", "robotics-automation", "pcb-design-fabrication-assembly", "laser-cutting"],
    productSlugs: [],
    courseSlugs: [],
    workflow: {
      heading: "Industrial Engineering Process",
      subheading: "A disciplined, step-by-step approach ensuring zero disruption to live operations.",
      steps: [
        {
          step: "01",
          title: "Site Visit & Requirement Audit",
          description: "Our engineers inspect your machine line, cycle times, power inputs, and control constraints on-site."
        },
        {
          step: "02",
          title: "System Architecture & BOM",
          description: "We provide an electrical schematic, mechanical CAD drawings, component datasheets, and fixed-scope quotation."
        },
        {
          step: "03",
          title: "Cabinet Fabrication & Logic Coding",
          description: "Panels are wired and logic is coded at our Coimbatore workshop with point-to-point continuity checks."
        },
        {
          step: "04",
          title: "Factory Acceptance Testing (FAT)",
          description: "You review the completed panel and simulation in our facility prior to plant delivery."
        },
        {
          step: "05",
          title: "On-Site Commissioning & Handover",
          description: "Installation, line calibration, fail-safe testing, and operator training during scheduled plant downtime."
        }
      ]
    },
    visualProof: {
      heading: "Real Industrial Work & Panel Proof",
      subheading: "Actual industrial panels and hardware engineered by our team.",
      items: [
        {
          title: "Industrial Control Panel Wiring",
          description: "Neat, labelled DIN-rail wiring with circuit breakers, contactors, and PLC modules.",
          image: "/gallery/18.jpeg",
          alt: "Industrial automation control panel wired by Tamizh Tech",
          category: "Panels"
        },
        {
          title: "Industrial Electronics Integration",
          description: "Interfacing sensor telemetry and power switching circuits for automated manufacturing machinery.",
          image: "/gallery/17.jpeg",
          alt: "Industrial electronic controller assembly",
          category: "Electronics"
        },
        {
          title: "Robotic Chassis Engineering",
          description: "Heavy-duty chassis fabrication and drive testing for industrial transport and robotic handling.",
          image: "/gallery/10.jpg",
          alt: "Robotic chassis engineered for industrial applications",
          category: "Robotics"
        }
      ]
    },
    faqs: [
      {
        question: "Can Tamizh Tech retrofit older manual machines with modern PLCs?",
        answer: "Yes. We regularly modernize legacy machines by replacing outdated relay logic with programmable PLCs, adding optical/inductive sensors, and installing intuitive touchscreen HMIs."
      },
      {
        question: "Do you provide on-site installation and commissioning in Coimbatore?",
        answer: "Yes. We deliver full on-site installation, field wiring, sensor calibration, and commissioning across Coimbatore, Tirupur, Erode, Salem, and industrial belts throughout Tamil Nadu."
      },
      {
        question: "What information is needed to get an automation proposal?",
        answer: "We typically need your product dimensions, required cycle time or production throughput, current process description, available power supply, and any specific brand preferences for PLCs or pneumatic components."
      },
      {
        question: "Do you build custom control panels from customer drawings?",
        answer: "Yes. If you already have electrical schematics, we can fabricate, wire, label, and bench-test the control panel strictly to your specifications."
      }
    ],
    quoteService: "industrial-automation",
    whatsappMessage: "Hi Tamizh Tech, I am interested in an Industrial Automation & Machine Integration consultation.",
    seo: {
      title: "Robotics & Industrial Automation Solutions | Coimbatore | Tamizh Tech",
      description: "Custom industrial automation, PLC and SCADA programming, control panel fabrication, machine vision inspection, and machine retrofits in Coimbatore.",
      keywords: [
        "industrial automation coimbatore",
        "plc programming company tamil nadu",
        "control panel manufacturer coimbatore",
        "machine vision system coimbatore",
        "factory automation solutions"
      ],
      canonical: "https://www.tamizhtech.in/solutions/industries"
    }
  },

  "students-makers": {
    slug: "students-makers",
    name: "Students & Makers",
    audience: "Robotics Hobbyists, Innovators & Student Competitors",
    badge: "Maker Community & Competitions",
    hero: {
      title: "Build Your Robotics Project From Idea to Hardware",
      subtitle: "Products, fabrication, PCB, robotics and technical support for projects, competitions and prototypes.",
      image: "/gallery/10.jpg",
      imageAlt: "Robotics hardware and competition chassis built for student makers",
      primaryCtaText: "Get a Quote / Project Support",
      secondaryCtaText: "Talk to an Engineer",
    },
    whatWeHelpBuild: {
      heading: "From Concept to Working Hardware",
      subheading: "Everything makers and student builders need to design, assemble, test, and compete.",
      pillars: [
        {
          title: "Arena-Ready Hardware",
          description: "High-torque, high-RPM combat and racing chassis engineered to withstand intense competitive matches."
        },
        {
          title: "In-House Prototyping",
          description: "Fast 3D printing (PLA/PETG/TPU), stainless steel sheet cutting, and custom PCB fabrication in Coimbatore."
        },
        {
          title: "Direct Engineering Help",
          description: "Practical troubleshooting for motor drivers, battery selection, wireless telemetry, and circuit faults."
        },
        {
          title: "Verified RF Telemetry",
          description: "Genuine FlySky transmitters, multi-channel receivers, and telemetry modules for reliable long-range control."
        }
      ]
    },
    needs: [
      {
        id: "competition-bots",
        label: "Robo Race & Soccer Bots",
        description: "National arena-tested chassis, omni-wheels, and drift platforms.",
        targetSectionId: "solutions-products",
        defaultService: "products"
      },
      {
        id: "3d-printing-parts",
        label: "3D Printed Custom Parts",
        description: "PLA, PETG, and TPU motor brackets, wheels, and enclosures.",
        targetSectionId: "solutions-services",
        defaultService: "3d-printing"
      },
      {
        id: "laser-cutting-chassis",
        label: "Laser Cut SS Chassis",
        description: "2mm–3mm stainless steel armor plates and brackets.",
        targetSectionId: "solutions-services",
        defaultService: "laser-cutting"
      },
      {
        id: "pcb-circuits",
        label: "Custom Circuit Boards",
        description: "Turnkey 2-layer PCBs for motor drivers and sensor breakout boards.",
        targetSectionId: "solutions-services",
        defaultService: "pcb-services"
      }
    ],
    offerings: {
      heading: "Student & Maker Support",
      subheading: "Practical hardware capabilities to build working robotics prototypes.",
      items: [
        {
          title: "Competition Robotics Platforms",
          description: "Tested and battle-proven platforms for national student competitions. Designed with rigid carbon fiber or aluminum chassis, high-RPM planetary motors, and high-traction silicone wheels.",
          details: [
            "RC Robo Race chassis with low center of gravity and high cornering grip",
            "RC Robo Soccer offensive platforms with pneumatic/mechanical kicking strikers",
            "Omni-directional holonomic wheel drives for 360-degree maneuverability",
            "Compatibility with standard 11.1V and 7.4V LiPo battery form factors"
          ],
          iconName: "Bot"
        },
        {
          title: "Rapid 3D Printing Prototyping",
          description: "Send your 3D files (STL, STEP) and receive precision-printed brackets, custom wheels, sensor mounts, and protective enclosures in functional engineering plastics.",
          details: [
            "PLA for rigid, lightweight structural prototypes",
            "PETG for high impact resistance and thermal durability",
            "TPU (Flexible) for custom bumpers, wheel treads, and shock absorbers",
            "Quick local pickup in Coimbatore or fast courier across India"
          ],
          iconName: "Printer"
        },
        {
          title: "Stainless Steel Laser Cutting",
          description: "When plastic isn't tough enough for combat or structural frames, we cut precision stainless steel sheet metal parts directly from your 2D DXF or DWG vectors.",
          details: [
            "Specialized strictly in Stainless Steel (SS 304, SS 316)",
            "Precision motor mounting slots, lightening cutouts, and chassis plates",
            "Nesting optimization for material savings",
            "Fast turnaround for student deadlines"
          ],
          iconName: "Scissors"
        },
        {
          title: "Custom PCB Fabrication & Assembly",
          description: "Eliminate messy breadboards and loose jumper wires. We fabricate clean, professional multi-layer PCBs for your robot's mainboard, motor drivers, and sensor distribution.",
          details: [
            "1-layer and 2-layer FR4 PCB fabrication",
            "Component sourcing and hand soldering / reflow assembly",
            "Design Rule Check (DRC) to catch routing errors before fabrication",
            "Silkscreen pin labeling for effortless field wiring"
          ],
          iconName: "Cpu"
        }
      ]
    },
    serviceSlugs: ["3d-printing", "laser-cutting", "pcb-design-fabrication-assembly"],
    productSlugs: [
      "rc-robo-race",
      "rc-robo-soccer",
      "flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver",
      "flysky-fs-i6-2.4g-6ch"
    ],
    courseSlugs: ["embedded-systems", "robotics-for-schools"],
    workflow: {
      heading: "The Maker Journey: Idea to Hardware",
      subheading: "How we help you build working projects step by step.",
      steps: [
        {
          step: "01",
          title: "Idea & Design Verification",
          description: "Send us your CAD file, circuit schematic, or hand sketch for engineering feedback."
        },
        {
          step: "02",
          title: "Material & Specification Choice",
          description: "We help you pick the right material (PLA vs PETG, SS 304 gauge, PCB layers) to balance strength, weight, and budget."
        },
        {
          step: "03",
          title: "Precision In-House Fabrication",
          description: "We 3D print your parts, laser cut sheet metal, and fabricate circuit boards at our Coimbatore facility."
        },
        {
          step: "04",
          title: "Bench Testing & Validation",
          description: "We check dimensions, verify fitment with motors, and inspect circuit continuity."
        },
        {
          step: "05",
          title: "Pickup or Fast Dispatch",
          description: "Collect your parts from our Coimbatore office or receive them via courier with tracking."
        }
      ]
    },
    visualProof: {
      heading: "Real Hardware Built by Makers",
      subheading: "Prototypes and competition platforms assembled at Tamizh Tech.",
      items: [
        {
          title: "RC Robo Race Competition Platform",
          description: "Carbon fiber composite chassis with silicon wheels and dual motor drivers.",
          image: "/product/race/race1.png",
          alt: "RC Robo Race chassis platform built for competition",
          category: "Robots"
        },
        {
          title: "RC Robo Soccer Striker",
          description: "Armored aluminum body with omni-directional wheels and pneumatic striker.",
          image: "/product/soccer/soccer 1.0.png",
          alt: "Robo Soccer tournament bot engineered at Tamizh Tech",
          category: "Robots"
        },
        {
          title: "Custom 3D Printed Parts",
          description: "High-precision brackets and functional mechanical components printed in PLA and PETG.",
          image: "/pic/3d printing.jpg",
          alt: "3D printed robotics brackets and custom parts",
          category: "3D Printing"
        }
      ]
    },
    faqs: [
      {
        question: "Can I bring my own CAD files for 3D printing and laser cutting?",
        answer: "Yes. For 3D printing, you can provide STL, STEP, or OBJ files. For laser cutting, provide 2D DXF or DWG vector files. If you don't have CAD files, our engineering team can help draft them from your dimensional sketch."
      },
      {
        question: "Is there a minimum order quantity (MOQ) for makers?",
        answer: "No. We have zero minimum order quantity for 3D printing and prototype fabrication. You can print a single bracket or cut a single chassis plate."
      },
      {
        question: "What transmitters do you recommend for competition robotics?",
        answer: "We recommend genuine 2.4GHz FlySky systems like the FS-i6 (6-channel) or FS-i6X (up to 10 channels), which provide jamming-free frequency-hopping control in high-interference competition halls."
      },
      {
        question: "Can I pick up my parts directly from your Coimbatore facility?",
        answer: "Yes. You are welcome to pick up your completed parts directly from our workshop in Coimbatore, or we can ship them via courier across India."
      }
    ],
    quoteService: "3d-printing",
    whatsappMessage: "Hi Tamizh Tech, I need support for my Robotics Project / Competition Build.",
    seo: {
      title: "Robotics & Maker Solutions | Students & Innovators | Tamizh Tech",
      description: "Competition robot kits, custom 3D printing (PLA/PETG/TPU), stainless steel laser cutting, PCB fabrication, and technical mentorship in Coimbatore.",
      keywords: [
        "competition robotics kits coimbatore",
        "robo race chassis maker tamil nadu",
        "3d printing student projects coimbatore",
        "student pcb fabrication coimbatore",
        "robotics maker space coimbatore"
      ],
      canonical: "https://www.tamizhtech.in/solutions/students-makers"
    }
  },

  startups: {
    slug: "startups",
    name: "Hardware Startups & Product Teams",
    audience: "Founders, Hardware Engineers & Product Innovators",
    badge: "Rapid Prototyping & Pilot Batches",
    hero: {
      title: "From Hardware Idea to Working Prototype",
      subtitle: "Rapid prototyping, PCB development, fabrication, embedded systems and robotics engineering support.",
      image: "/pic/pcb design.jpg",
      imageAlt: "Turnkey PCB design and hardware engineering for startups at Tamizh Tech",
      primaryCtaText: "Get a Quote / Hardware Consultation",
      secondaryCtaText: "Talk to an Engineer",
    },
    whatWeHelpBuild: {
      heading: "Accelerate Your Hardware Product Cycle",
      subheading: "Turn concepts into testable, investor-ready working prototypes without heavy capital overhead.",
      pillars: [
        {
          title: "Multi-Disciplinary Prototyping",
          description: "Mechanical CAD, electronics design, firmware coding, and physical fabrication under one roof in Coimbatore."
        },
        {
          title: "DFM & Design Optimization",
          description: "Design for Manufacturing (DFM) reviews to ensure your prototype is practical and cost-effective to produce."
        },
        {
          title: "Rapid Iteration Cycles",
          description: "Fast in-house 3D printing and quick-turn PCB fabrication so you can test, iterate, and refine in days rather than weeks."
        },
        {
          title: "Pilot Batch Assembly",
          description: "Short-run production batches (5 to 100 units) for field trials, pilot customer deployments, and investor demonstrations."
        }
      ]
    },
    needs: [
      {
        id: "rapid-prototyping",
        label: "Rapid Mechanical Prototyping",
        description: "Functional enclosures, fixtures, and 3D printed iterations (PLA/PETG/TPU).",
        targetSectionId: "solutions-services",
        defaultService: "3d-printing"
      },
      {
        id: "pcb-development",
        label: "Turnkey PCB Design & Assembly",
        description: "Schematic capture, multi-layer routing, component sourcing, and PCBA.",
        targetSectionId: "solutions-services",
        defaultService: "pcb-services"
      },
      {
        id: "chassis-fabrication",
        label: "Stainless Steel Chassis Cutting",
        description: "Rigid SS 304/316 structural enclosures and mounting plates.",
        targetSectionId: "solutions-services",
        defaultService: "laser-cutting"
      },
      {
        id: "embedded-robotics",
        label: "Embedded Systems & Firmware",
        description: "Microcontroller firmware, motor control algorithms, and IoT telemetry.",
        targetSectionId: "solutions-services",
        defaultService: "custom-engineering"
      }
    ],
    offerings: {
      heading: "Startup & Product Engineering Offerings",
      subheading: "Agile hardware engineering services tailored for emerging product companies.",
      items: [
        {
          title: "Rapid Mechanical Prototyping",
          description: "Transform 3D CAD concepts into functional physical parts. We print high-strength enclosures, snap-fit prototypes, and mechanical test fixtures with tight tolerances.",
          details: [
            "FDM printing in PLA, PETG, and flexible TPU",
            "Dimensional validation and wall thickness optimization",
            "Rapid revision turnarounds to test ergonomic and mechanical fit",
            "Surface post-processing and threaded insert integration"
          ],
          iconName: "Printer"
        },
        {
          title: "Turnkey PCB Design, Fabrication & Assembly",
          description: "Comprehensive electronics engineering from circuit concept to assembled, tested PCBA. We handle schematic capture, component selection with active lifecycle verification, multi-layer routing, and SMT/THT assembly.",
          details: [
            "Schematic capture and detailed Bill of Materials (BOM) creation",
            "High-speed routing, impedance matching, and Design for Manufacturing (DFM)",
            "1-layer, 2-layer, and multi-layer FR4 board fabrication",
            "SMT and through-hole soldering with bench testing"
          ],
          iconName: "Cpu"
        },
        {
          title: "Precision Sheet Metal Laser Cutting",
          description: "When structural rigidity, heat dissipation, or industrial durability is essential, we produce stainless steel chassis plates, mounting brackets, and faceplates.",
          details: [
            "Strictly Stainless Steel (SS 304, SS 316) sheet metal fabrication",
            "Direct processing from 2D DXF/DWG vectors",
            "Nesting optimization for material efficiency",
            "Burr-minimizing finishing and dimensional checks"
          ],
          iconName: "Scissors"
        },
        {
          title: "Embedded Firmware & Pilot Batch Assembly",
          description: "Writing bare-metal and RTOS firmware for ARM, ESP32, and STM32 microcontrollers, plus assembly of short pilot production runs (5 to 100 units) for initial customer testing.",
          details: [
            "Low-power sensor polling and wireless communication (BLE, WiFi, LoRa, cellular)",
            "Motor control, PID tuning, and actuator driver integration",
            "Hardware-in-the-Loop (HIL) testing and diagnostic firmware",
            "Short-run manual assembly with serial tracking"
          ],
          iconName: "Wrench"
        }
      ]
    },
    serviceSlugs: ["3d-printing", "laser-cutting", "pcb-design-fabrication-assembly", "robotics-automation"],
    productSlugs: [],
    courseSlugs: [],
    workflow: {
      heading: "How We Partner with Hardware Startups",
      subheading: "A confidential, milestone-driven development process.",
      steps: [
        {
          step: "01",
          title: "Discovery & Confidentiality",
          description: "We sign an NDA and review your product requirements, target BOM cost, and functional specifications."
        },
        {
          step: "02",
          title: "Engineering Architecture & DFM",
          description: "We review schematics, component availability, mechanical CAD clearances, and fabrication tolerances."
        },
        {
          step: "03",
          title: "Proof-of-Concept Fabrication",
          description: "Fast production of initial PCB iterations, 3D printed mechanical enclosures, and laser cut structural plates."
        },
        {
          step: "04",
          title: "Assembly & Hardware Bring-Up",
          description: "We assemble the boards, flash basic bring-up firmware, and verify power rails and sensor interfaces."
        },
        {
          step: "05",
          title: "Pilot Batch Assembly & Handoff",
          description: "Production of pilot evaluation batches with full manufacturing documentation and design files handed over."
        }
      ]
    },
    visualProof: {
      heading: "Real Hardware Prototyping Proof",
      subheading: "Hardware design, circuit fabrication, and mechanical engineering at Tamizh Tech.",
      items: [
        {
          title: "Custom PCB Design & Assembly",
          description: "Dense multi-layer printed circuit boards designed, fabricated, and assembled for client hardware prototypes.",
          image: "/pic/pcb design.jpg",
          alt: "Custom PCB design and assembly for hardware startups",
          category: "Electronics"
        },
        {
          title: "Precision 3D Printed Enclosures",
          description: "Functional enclosures with accurate mounting bosses and snap-fits printed in engineering filaments.",
          image: "/pic/3d printing.jpg",
          alt: "3D printed prototype enclosures for product teams",
          category: "Mechanical"
        },
        {
          title: "Precision Laser Cut Metal Parts",
          description: "Stainless steel chassis plates cut for industrial durability and rigidity.",
          image: "/pic/laser cutting.jpg",
          alt: "Precision laser cutting for startup chassis brackets",
          category: "Fabrication"
        }
      ]
    },
    faqs: [
      {
        question: "Do you sign Non-Disclosure Agreements (NDAs) before reviewing startup designs?",
        answer: "Yes. We respect intellectual property and can execute a mutual Non-Disclosure Agreement before receiving your proprietary schematics, CAD files, or product specs."
      },
      {
        question: "Can you help with Design for Manufacturing (DFM) before fabrication?",
        answer: "Yes. Our engineers review your CAD drawings for 3D printing/cutting constraints and check your PCB layouts against manufacturing design rules (trace spacing, via sizes, component clearances) to avoid costly errors."
      },
      {
        question: "Do you offer full mass manufacturing?",
        answer: "We specialize in prototyping, design engineering, validation, and pilot production batches (typically 5 to 100 units). For massive volume production, we prepare and hand over complete manufacturing documentation (Gerbers, BOM, pick-and-place, STEP files)."
      },
      {
        question: "What files do you need to start a prototyping quote?",
        answer: "For electronics, send schematics/Gerbers and a preliminary BOM. For mechanical parts, send 3D STEP/STL files or 2D DXF drawings. If you only have conceptual sketches, we can provide design support to draft them."
      }
    ],
    quoteService: "custom-engineering",
    whatsappMessage: "Hi Tamizh Tech, I am looking for Prototyping & Product Engineering support for my startup.",
    seo: {
      title: "Hardware Startup Prototyping & Engineering | Coimbatore | Tamizh Tech",
      description: "Rapid hardware prototyping, turnkey PCB design & assembly, stainless steel laser cutting, and pilot batch engineering for startups in Coimbatore.",
      keywords: [
        "hardware startup prototyping coimbatore",
        "pcb prototyping services tamil nadu",
        "pilot batch manufacturing coimbatore",
        "iot hardware development partner",
        "rapid prototyping coimbatore"
      ],
      canonical: "https://www.tamizhtech.in/solutions/startups"
    }
  }
};

/**
 * Helper to resolve referenced Commercial Services by slug.
 */
export function getSolutionServices(solution: B2BSolution): CommercialService[] {
  return solution.serviceSlugs
    .map(slug => commercialServices[slug])
    .filter(Boolean);
}

/**
 * Helper to resolve referenced Products by slug.
 */
export function getSolutionProducts(solution: B2BSolution): Product[] {
  return solution.productSlugs
    .map(slug => products.find(p => p.slug === slug || p.id === slug))
    .filter((p): p is Product => Boolean(p));
}

/**
 * Helper to resolve referenced Courses by slug.
 */
export function getSolutionCourses(solution: B2BSolution): Course[] {
  return solution.courseSlugs
    .map(slug => courses.find(c => c.slug === slug || c.id === slug))
    .filter((c): c is Course => Boolean(c));
}
