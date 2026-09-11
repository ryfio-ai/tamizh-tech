import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Helper to sanitize keyword
const norm = (s) => s.trim().toLowerCase().replace(/\s+/g, ' ');

// All valid types according to the user's recommended schema:
// SearchIntent: 'brand' | 'navigational' | 'informational' | 'commercial' | 'transactional' | 'educational' | 'local'
// KeywordType: 'product' | 'service' | 'solution' | 'competition' | 'event' | 'component' | 'project' | 'question' | 'company'

const masterList = [];
const seenKeywords = new Set();

function addKeyword(record) {
  const k = norm(record.keyword);
  if (seenKeywords.has(k)) {
    console.warn(`[DUPLICATE IGNORED]: "${k}"`);
    return false;
  }
  seenKeywords.add(k);
  masterList.push({
    ...record,
    keyword: k
  });
  return true;
}

console.log('Building 500+ SEO Keyword Master dataset for Tamizh Tech...');

// ─────────────────────────────────────────────────────────────
// 1. EVENTS & COMPETITIONS (Target: 50+)
// ─────────────────────────────────────────────────────────────
const eventKeywords = [
  // Robo Soccer
  { keyword: "robo soccer competition", cluster: "robo-soccer", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/robo-soccer" },
  { keyword: "robo soccer competition India", cluster: "robo-soccer", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/robo-soccer", location: "india" },
  { keyword: "college robo soccer competition", cluster: "robo-soccer", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/robo-soccer" },
  { keyword: "engineering college robo soccer", cluster: "robo-soccer", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/robo-soccer" },
  { keyword: "national robo soccer tournament", cluster: "robo-soccer", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/robo-soccer", location: "india" },
  { keyword: "robo soccer rules and regulations", cluster: "robo-soccer", intent: "informational", keywordType: "event", primaryUrl: "/events/competition/robo-soccer" },
  { keyword: "robo soccer arena dimensions", cluster: "robo-soccer", intent: "informational", keywordType: "event", primaryUrl: "/events/competition/robo-soccer" },
  { keyword: "how to prepare for robo soccer", cluster: "robo-soccer", intent: "informational", keywordType: "event", primaryUrl: "/events/competition/robo-soccer" },
  { keyword: "robo soccer match guidelines", cluster: "robo-soccer", intent: "informational", keywordType: "event", primaryUrl: "/events/competition/robo-soccer" },
  { keyword: "RC robo soccer tournament", cluster: "robo-soccer", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/robo-soccer" },

  // Robo Race
  { keyword: "robo race competition", cluster: "robo-race", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/robo-race" },
  { keyword: "robo race competition India", cluster: "robo-race", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/robo-race", location: "india" },
  { keyword: "robot race event", cluster: "robo-race", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/robo-race" },
  { keyword: "college robo race challenge", cluster: "robo-race", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/robo-race" },
  { keyword: "robo race track specifications", cluster: "robo-race", intent: "informational", keywordType: "event", primaryUrl: "/events/competition/robo-race" },
  { keyword: "robo race rules engineering", cluster: "robo-race", intent: "informational", keywordType: "event", primaryUrl: "/events/competition/robo-race" },
  { keyword: "all terrain robo race competition", cluster: "robo-race", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/robo-race" },
  { keyword: "high speed robot race competition", cluster: "robo-race", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/robo-race" },
  { keyword: "robo race technical inspection", cluster: "robo-race", intent: "informational", keywordType: "event", primaryUrl: "/events/competition/robo-race" },

  // Line Follower
  { keyword: "line follower competition", cluster: "line-follower", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/line-follower" },
  { keyword: "line follower competition India", cluster: "line-follower", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/line-follower", location: "india" },
  { keyword: "autonomous line follower event", cluster: "line-follower", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/line-follower" },
  { keyword: "college line follower contest", cluster: "line-follower", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/line-follower" },
  { keyword: "line follower track rules", cluster: "line-follower", intent: "informational", keywordType: "event", primaryUrl: "/events/competition/line-follower" },
  { keyword: "PID line follower competition", cluster: "line-follower", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/line-follower" },
  { keyword: "high speed line follower event", cluster: "line-follower", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/line-follower" },
  { keyword: "line follower arena specifications", cluster: "line-follower", intent: "informational", keywordType: "event", primaryUrl: "/events/competition/line-follower" },

  // Robo War
  { keyword: "robo war competition", cluster: "robo-war", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/robo-war" },
  { keyword: "robo war competition India", cluster: "robo-war", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/robo-war", location: "india" },
  { keyword: "combat robotics competition India", cluster: "robo-war", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/robo-war", location: "india" },
  { keyword: "college robo war tournament", cluster: "robo-war", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/robo-war" },
  { keyword: "robo war arena safety rules", cluster: "robo-war", intent: "informational", keywordType: "event", primaryUrl: "/events/competition/robo-war" },
  { keyword: "weight categories robo war India", cluster: "robo-war", intent: "informational", keywordType: "event", primaryUrl: "/events/competition/robo-war", location: "india" },
  { keyword: "robot combat championship", cluster: "robo-war", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/robo-war" },

  // Robo Sumo
  { keyword: "robo sumo competition", cluster: "robo-sumo", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/robo-sumo" },
  { keyword: "sumo robot tournament", cluster: "robo-sumo", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/robo-sumo" },
  { keyword: "mini sumo robotics competition", cluster: "robo-sumo", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/robo-sumo" },
  { keyword: "dohyo arena rules sumo robot", cluster: "robo-sumo", intent: "informational", keywordType: "event", primaryUrl: "/events/competition/robo-sumo" },
  { keyword: "autonomous sumo robot contest", cluster: "robo-sumo", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/robo-sumo" },

  // Drone Race
  { keyword: "drone race competition", cluster: "drone-race", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/drone-race" },
  { keyword: "drone racing competition India", cluster: "drone-race", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/drone-race", location: "india" },
  { keyword: "FPV drone racing tournament", cluster: "drone-race", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/drone-race" },
  { keyword: "college drone racing league", cluster: "drone-race", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/drone-race" },
  { keyword: "drone race obstacle track rules", cluster: "drone-race", intent: "informational", keywordType: "event", primaryUrl: "/events/competition/drone-race" },

  // Maze Solver
  { keyword: "maze solver competition", cluster: "maze-solver", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/maze-solver" },
  { keyword: "micromouse maze solver competition", cluster: "maze-solver", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/maze-solver" },
  { keyword: "autonomous maze solver event", cluster: "maze-solver", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/maze-solver" },
  { keyword: "maze solving robot contest India", cluster: "maze-solver", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/maze-solver", location: "india" },
  { keyword: "maze solver grid specifications", cluster: "maze-solver", intent: "informational", keywordType: "event", primaryUrl: "/events/competition/maze-solver" },

  // General Robotics Competitions & Events
  { keyword: "robotics competition", cluster: "competitions-general", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/general-robotics" },
  { keyword: "robotics competitions India", cluster: "competitions-general", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/general-robotics", location: "india" },
  { keyword: "robotics events India", cluster: "competitions-general", intent: "competition", keywordType: "event", primaryUrl: "/events" },
  { keyword: "college robotics competition", cluster: "competitions-general", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/general-robotics" },
  { keyword: "school robotics competition", cluster: "competitions-general", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/general-robotics" },
  { keyword: "engineering robotics competition", cluster: "competitions-general", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/general-robotics" },
  { keyword: "national robotics competition India", cluster: "competitions-general", intent: "competition", keywordType: "event", primaryUrl: "/events/competition/general-robotics", location: "india" },
  { keyword: "robotics exhibition India", cluster: "competitions-general", intent: "informational", keywordType: "event", primaryUrl: "/events", location: "india" },
  { keyword: "technical symposium robotics events", cluster: "competitions-general", intent: "competition", keywordType: "event", primaryUrl: "/events" },
  { keyword: "robotics fest India", cluster: "competitions-general", intent: "competition", keywordType: "event", primaryUrl: "/events", location: "india" }
];

eventKeywords.forEach(item => {
  addKeyword({
    keyword: item.keyword,
    cluster: item.cluster,
    intent: item.intent || 'competition',
    keywordType: item.keywordType || 'event',
    audience: 'students-colleges',
    businessValue: 'high',
    priority: 'P1',
    primaryUrl: item.primaryUrl,
    contentType: item.primaryUrl.startsWith('/events/competition') ? 'event-guide' : 'solution',
    location: item.location || 'global',
    commercialIntent: false,
    status: 'mapped',
    scoring: { businessValue: 7, searchIntentStrength: 8, productRelevance: 8, conversionPotential: 7, authorityPotential: 9 }
  });
});

// ─────────────────────────────────────────────────────────────
// 2. COMPETITION ROBOTS & HARDWARE PLATFORMS (Target: 50+)
// ─────────────────────────────────────────────────────────────
const competitionRobotKeywords = [
  { keyword: "competition robot", cluster: "competition-robots", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition" },
  { keyword: "competition robots", cluster: "competition-robots", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition" },
  { keyword: "robot competition kit", cluster: "competition-robots", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition" },
  { keyword: "robotics competition robot", cluster: "competition-robots", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition" },
  { keyword: "RC competition robot", cluster: "competition-robots", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition" },
  { keyword: "autonomous competition robot", cluster: "competition-robots", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition" },
  { keyword: "robot racing platform", cluster: "competition-robots", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition" },
  { keyword: "combat robotics platform", cluster: "competition-robots", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition" },
  { keyword: "educational competition robot", cluster: "competition-robots", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition" },
  { keyword: "college competition robot", cluster: "competition-robots", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition" },
  { keyword: "student competition robot", cluster: "competition-robots", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition" },
  { keyword: "engineering competition robot", cluster: "competition-robots", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition" },
  { keyword: "competition robotics platform", cluster: "competition-robots", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition" },
  { keyword: "competition robot chassis", cluster: "competition-robots", intent: "commercial", keywordType: "component", primaryUrl: "/products/robotics-components" },
  { keyword: "competition robot wheels", cluster: "competition-robots", intent: "commercial", keywordType: "component", primaryUrl: "/products/robotics-components" },
  { keyword: "competition robot motors", cluster: "competition-robots", intent: "commercial", keywordType: "component", primaryUrl: "/products/robotics-components" },
  { keyword: "competition robot India", cluster: "competition-robots", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition", location: "india" },
  { keyword: "robotics competition kit India", cluster: "competition-robots", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition", location: "india" },
  { keyword: "ready to run competition robot", cluster: "competition-robots", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition" },
  { keyword: "pre built competition robot", cluster: "competition-robots", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition" },
  { keyword: "custom competition robot chassis", cluster: "competition-robots", intent: "commercial", keywordType: "component", primaryUrl: "/products/robotics-components" },
  { keyword: "heavy duty competition robot chassis", cluster: "competition-robots", intent: "commercial", keywordType: "component", primaryUrl: "/products/robotics-components" },
  { keyword: "aluminium robot chassis competition", cluster: "competition-robots", intent: "commercial", keywordType: "component", primaryUrl: "/products/robotics-components" },
  { keyword: "competition robot controller board", cluster: "competition-robots", intent: "commercial", keywordType: "component", primaryUrl: "/products/radio-controllers" },
  { keyword: "competition robot speed controller", cluster: "competition-robots", intent: "commercial", keywordType: "component", primaryUrl: "/products/robotics-components" },
  { keyword: "competition robot battery pack", cluster: "competition-robots", intent: "commercial", keywordType: "component", primaryUrl: "/products/robotics-components" },
  { keyword: "wireless robot for competition", cluster: "competition-robots", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition" },
  { keyword: "RF controlled competition robot", cluster: "competition-robots", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition" },
  { keyword: "competition robot supplier India", cluster: "competition-robots", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition", location: "india" },
  { keyword: "competition robot manufacturer Coimbatore", cluster: "competition-robots", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition", location: "coimbatore" },

  // Robo Soccer Bots
  { keyword: "robo soccer robot", cluster: "robo-soccer", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition/rc-robo-soccer" },
  { keyword: "robo soccer robot kit", cluster: "robo-soccer", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition/rc-robo-soccer" },
  { keyword: "robo soccer kit", cluster: "robo-soccer", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition/rc-robo-soccer" },
  { keyword: "robo soccer robot India", cluster: "robo-soccer", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition/rc-robo-soccer", location: "india" },
  { keyword: "robo soccer competition kit", cluster: "robo-soccer", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition/rc-robo-soccer" },
  { keyword: "robo soccer robot for college", cluster: "robo-soccer", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition/rc-robo-soccer" },
  { keyword: "robo soccer kit for students", cluster: "robo-soccer", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition/rc-robo-soccer" },
  { keyword: "RC soccer robot with kicker", cluster: "robo-soccer", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition/rc-robo-soccer" },
  { keyword: "4 wheel drive robo soccer bot", cluster: "robo-soccer", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition/rc-robo-soccer" },
  { keyword: "dribbler mechanism robo soccer robot", cluster: "robo-soccer", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition/rc-robo-soccer" },

  // Robo Race Bots
  { keyword: "robo race robot", cluster: "robo-race", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition/rc-robo-race" },
  { keyword: "robo race robot kit", cluster: "robo-race", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition/rc-robo-race" },
  { keyword: "robo race kit", cluster: "robo-race", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition/rc-robo-race" },
  { keyword: "robo race robot India", cluster: "robo-race", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition/rc-robo-race", location: "india" },
  { keyword: "high speed robo race robot", cluster: "robo-race", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition/rc-robo-race" },
  { keyword: "all terrain robo race robot kit", cluster: "robo-race", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition/rc-robo-race" },
  { keyword: "obstacle track robo race robot", cluster: "robo-race", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition/rc-robo-race" },
  { keyword: "robo race chassis kit", cluster: "robo-race", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition/rc-robo-race" },

  // Line Follower Bots
  { keyword: "line follower robot", cluster: "line-follower", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition/ttrc-lf-5-0" },
  { keyword: "line follower kit", cluster: "line-follower", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition/ttrc-lf-5-0" },
  { keyword: "line follower robot kit", cluster: "line-follower", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition/ttrc-lf-5-0" },
  { keyword: "line follower robot kit India", cluster: "line-follower", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition/ttrc-lf-5-0", location: "india" },
  { keyword: "line follower robot India", cluster: "line-follower", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition/ttrc-lf-5-0", location: "india" },
  { keyword: "PID line follower robot", cluster: "line-follower", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition/ttrc-lf-5-0" },
  { keyword: "PID line follower kit", cluster: "line-follower", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition/ttrc-lf-5-0" },
  { keyword: "fast line follower robot kit", cluster: "line-follower", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition/ttrc-lf-5-0" },
  { keyword: "line tracking robot kit", cluster: "line-follower", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition/ttrc-lf-5-0" },

  // Combat / Sumo / Maze bots
  { keyword: "robo war robot", cluster: "robo-war", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition" },
  { keyword: "robo war kit", cluster: "robo-war", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition" },
  { keyword: "robo war robot kit", cluster: "robo-war", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition" },
  { keyword: "combat robot kit India", cluster: "robo-war", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition", location: "india" },
  { keyword: "robo sumo robot", cluster: "robo-sumo", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition" },
  { keyword: "sumo robot kit", cluster: "robo-sumo", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition" },
  { keyword: "maze solver robot", cluster: "maze-solver", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition" },
  { keyword: "maze solver robot kit", cluster: "maze-solver", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition" }
];

competitionRobotKeywords.forEach(item => {
  addKeyword({
    keyword: item.keyword,
    cluster: item.cluster,
    intent: item.intent || 'commercial',
    keywordType: item.keywordType || 'product',
    audience: 'students-colleges',
    businessValue: 'very-high',
    priority: 'P0',
    primaryUrl: item.primaryUrl,
    contentType: 'product',
    location: item.location || 'global',
    commercialIntent: true,
    status: 'mapped',
    scoring: { businessValue: 10, searchIntentStrength: 9, productRelevance: 10, conversionPotential: 9, authorityPotential: 8 }
  });
});

// ─────────────────────────────────────────────────────────────
// 3. ROBOTICS KITS (Target: 60+)
// ─────────────────────────────────────────────────────────────
const kitKeywords = [
  { keyword: "robotics kit", cluster: "robotics-kits", intent: "commercial", priority: "P0", primaryUrl: "/products" },
  { keyword: "robotics kits", cluster: "robotics-kits", intent: "commercial", priority: "P0", primaryUrl: "/products" },
  { keyword: "robotics kit India", cluster: "robotics-kits", intent: "commercial", priority: "P0", primaryUrl: "/products", location: "india" },
  { keyword: "robotics kits India", cluster: "robotics-kits", intent: "commercial", priority: "P0", primaryUrl: "/products", location: "india" },
  { keyword: "robotics kit for students", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products" },
  { keyword: "robotics kit for school", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products/educational-robotics" },
  { keyword: "robotics kit for schools", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products/educational-robotics" },
  { keyword: "robotics kit for college", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products/competition" },
  { keyword: "robotics kit for college students", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products/competition" },
  { keyword: "engineering robotics kit", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products/competition" },
  { keyword: "STEM robotics kit", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products/educational-robotics" },
  { keyword: "STEM learning kits", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products/educational-robotics" },
  { keyword: "educational robotics kit", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products/educational-robotics" },
  { keyword: "educational robotics kits India", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products/educational-robotics", location: "india" },
  { keyword: "competition robotics kit", cluster: "robotics-kits", intent: "commercial", priority: "P0", primaryUrl: "/products/competition" },
  { keyword: "robotics project kit", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products" },
  { keyword: "robotics project kits for college", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products" },
  { keyword: "robotics training kit", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products" },
  { keyword: "robotics lab kit", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/solutions/schools" },
  { keyword: "robotics experiment kit", cluster: "robotics-kits", intent: "commercial", priority: "P2", primaryUrl: "/products/educational-robotics" },
  { keyword: "robotics development kit", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products" },
  { keyword: "DIY robotics kit", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products" },
  { keyword: "DIY robotics kit India", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products", location: "india" },
  { keyword: "beginner robotics kit", cluster: "robotics-kits", intent: "commercial", priority: "P2", primaryUrl: "/products/educational-robotics" },
  { keyword: "advanced robotics kit", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products/competition" },
  { keyword: "programmable robotics kit", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products" },
  { keyword: "Arduino robotics kit", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products" },
  { keyword: "Arduino robotics kit India", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products", location: "india" },
  { keyword: "ESP32 robotics kit", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products" },
  { keyword: "ESP32 robot kit India", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products", location: "india" },
  { keyword: "Raspberry Pi robotics kit", cluster: "robotics-kits", intent: "commercial", priority: "P2", primaryUrl: "/products" },
  { keyword: "RC robotics kit", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products/competition" },
  { keyword: "wireless robot kit", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products/competition" },
  { keyword: "Bluetooth robotics kit", cluster: "robotics-kits", intent: "commercial", priority: "P2", primaryUrl: "/products" },
  { keyword: "robotics kit Coimbatore", cluster: "robotics-kits", intent: "local", priority: "P1", primaryUrl: "/products", location: "coimbatore" },
  { keyword: "robotics kit supplier Coimbatore", cluster: "robotics-kits", intent: "local", priority: "P0", primaryUrl: "/products", location: "coimbatore" },
  { keyword: "robotics kit manufacturer India", cluster: "robotics-kits", intent: "commercial", priority: "P0", primaryUrl: "/products", location: "india" },
  { keyword: "robotics kit supplier Tamil Nadu", cluster: "robotics-kits", intent: "local", priority: "P1", primaryUrl: "/products", location: "tamil-nadu" },
  { keyword: "robotics learning kit for kids", cluster: "robotics-kits", intent: "commercial", priority: "P2", primaryUrl: "/products/educational-robotics" },
  { keyword: "school STEM robotics kit", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products/educational-robotics" },
  { keyword: "ATL lab robotics kit", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/solutions/schools", location: "india" },
  { keyword: "tinkering lab robotics kit", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/solutions/schools" },
  { keyword: "robotics starter kit", cluster: "robotics-kits", intent: "commercial", priority: "P2", primaryUrl: "/products/educational-robotics" },
  { keyword: "chassis kit for robotics", cluster: "robotics-kits", intent: "commercial", priority: "P2", primaryUrl: "/products/robotics-components" },
  { keyword: "robot building kit India", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products", location: "india" },
  { keyword: "robotics practical kit engineering", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products/competition" },
  { keyword: "mechatronics training kit", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products" },
  { keyword: "robotics sensor kit", cluster: "robotics-kits", intent: "commercial", priority: "P2", primaryUrl: "/products/robotics-components" },
  { keyword: "electronics and robotics kit", cluster: "robotics-kits", intent: "commercial", priority: "P2", primaryUrl: "/products" },
  { keyword: "microcontroller robotics kit", cluster: "robotics-kits", intent: "commercial", priority: "P2", primaryUrl: "/products" },
  { keyword: "STEM DIY kit India", cluster: "robotics-kits", intent: "commercial", priority: "P2", primaryUrl: "/products/educational-robotics", location: "india" },
  { keyword: "affordable robotics kit India", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products", location: "india" },
  { keyword: "robotics hardware kit", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products" },
  { keyword: "robotics prototyping kit", cluster: "robotics-kits", intent: "commercial", priority: "P1", primaryUrl: "/products" },
  { keyword: "smart robot kit", cluster: "robotics-kits", intent: "commercial", priority: "P2", primaryUrl: "/products" },
  { keyword: "obstacle avoiding robot kit", cluster: "robotics-kits", intent: "commercial", priority: "P2", primaryUrl: "/products" },
  { keyword: "humanoid robot kit India", cluster: "robotics-kits", intent: "commercial", priority: "P3", primaryUrl: "/products" },
  { keyword: "quadcopter drone kit India", cluster: "robotics-kits", intent: "commercial", priority: "P2", primaryUrl: "/products/competition", location: "india" },
  { keyword: "robotics equipment supplier India", cluster: "robotics-kits", intent: "commercial", priority: "P0", primaryUrl: "/products", location: "india" },
  { keyword: "robotics hobbyist kit", cluster: "robotics-kits", intent: "commercial", priority: "P2", primaryUrl: "/products" },
  { keyword: "robotics maker kit", cluster: "robotics-kits", intent: "commercial", priority: "P2", primaryUrl: "/products" },
  { keyword: "electronic project kit for engineering", cluster: "robotics-kits", intent: "commercial", priority: "P2", primaryUrl: "/products" }
];

kitKeywords.forEach(item => {
  addKeyword({
    keyword: item.keyword,
    cluster: item.cluster,
    intent: item.intent || 'commercial',
    keywordType: 'product',
    audience: 'students-colleges',
    businessValue: 'high',
    priority: item.priority || 'P1',
    primaryUrl: item.primaryUrl,
    contentType: 'product',
    location: item.location || 'global',
    commercialIntent: true,
    status: 'mapped',
    scoring: { businessValue: 9, searchIntentStrength: 9, productRelevance: 9, conversionPotential: 9, authorityPotential: 8 }
  });
});

// ─────────────────────────────────────────────────────────────
// 4. STEM EDUCATION KEYWORDS (Target: 50+)
// ─────────────────────────────────────────────────────────────
const stemKeywords = [
  { keyword: "STEM education", cluster: "stem-education", intent: "educational", priority: "P1", primaryUrl: "/learn/school-students" },
  { keyword: "STEM robotics", cluster: "stem-education", intent: "educational", priority: "P0", primaryUrl: "/learn/school-students" },
  { keyword: "robotics education", cluster: "stem-education", intent: "educational", priority: "P1", primaryUrl: "/learn/school-students" },
  { keyword: "robotics training", cluster: "stem-education", intent: "commercial", priority: "P0", primaryUrl: "/learn/school-students" },
  { keyword: "robotics classes", cluster: "stem-education", intent: "commercial", priority: "P1", primaryUrl: "/learn/school-students" },
  { keyword: "robotics workshop", cluster: "stem-education", intent: "commercial", priority: "P1", primaryUrl: "/learn/school-students" },
  { keyword: "robotics course", cluster: "stem-education", intent: "commercial", priority: "P1", primaryUrl: "/courses" },
  { keyword: "robotics program", cluster: "stem-education", intent: "educational", priority: "P2", primaryUrl: "/learn/school-students" },
  { keyword: "school robotics program", cluster: "stem-education", intent: "commercial", priority: "P1", primaryUrl: "/solutions/schools" },
  { keyword: "college robotics program", cluster: "stem-education", intent: "commercial", priority: "P1", primaryUrl: "/solutions/colleges" },
  { keyword: "robotics education India", cluster: "stem-education", intent: "educational", priority: "P1", primaryUrl: "/learn/school-students", location: "india" },
  { keyword: "STEM robotics India", cluster: "stem-education", intent: "educational", priority: "P0", primaryUrl: "/learn/school-students", location: "india" },
  { keyword: "robotics training India", cluster: "stem-education", intent: "commercial", priority: "P0", primaryUrl: "/learn/school-students", location: "india" },
  { keyword: "robotics workshop India", cluster: "stem-education", intent: "commercial", priority: "P1", primaryUrl: "/learn/school-students", location: "india" },
  { keyword: "robotics classes for students", cluster: "stem-education", intent: "commercial", priority: "P1", primaryUrl: "/learn/school-students" },
  { keyword: "robotics training for engineering students", cluster: "stem-education", intent: "commercial", priority: "P1", primaryUrl: "/learn/engineering-students" },
  { keyword: "robotics workshop for engineering students", cluster: "stem-education", intent: "commercial", priority: "P1", primaryUrl: "/learn/engineering-students" },
  { keyword: "robotics course for students", cluster: "stem-education", intent: "commercial", priority: "P1", primaryUrl: "/courses" },
  { keyword: "robotics course India", cluster: "stem-education", intent: "commercial", priority: "P1", primaryUrl: "/courses", location: "india" },
  { keyword: "STEM learning curriculum", cluster: "stem-education", intent: "educational", priority: "P2", primaryUrl: "/learn/school-students" },
  { keyword: "robotics coaching classes", cluster: "stem-education", intent: "commercial", priority: "P2", primaryUrl: "/learn/school-students" },
  { keyword: "robotics summer camp", cluster: "stem-education", intent: "commercial", priority: "P2", primaryUrl: "/learn/school-students" },
  { keyword: "robotics bootcamp", cluster: "stem-education", intent: "commercial", priority: "P2", primaryUrl: "/courses" },
  { keyword: "practical robotics training", cluster: "stem-education", intent: "commercial", priority: "P1", primaryUrl: "/learn/engineering-students" },
  { keyword: "hands on robotics workshop", cluster: "stem-education", intent: "commercial", priority: "P1", primaryUrl: "/learn/engineering-students" },
  { keyword: "robotics training institute", cluster: "stem-education", intent: "commercial", priority: "P1", primaryUrl: "/courses" },
  { keyword: "robotics training center", cluster: "stem-education", intent: "commercial", priority: "P1", primaryUrl: "/courses" },
  { keyword: "robotics classes for kids", cluster: "stem-education", intent: "commercial", priority: "P2", primaryUrl: "/learn/school-students" },
  { keyword: "robotics coding classes", cluster: "stem-education", intent: "commercial", priority: "P2", primaryUrl: "/learn/school-students" },
  { keyword: "STEM education company", cluster: "stem-education", intent: "commercial", priority: "P1", primaryUrl: "/solutions/schools" },
  { keyword: "STEM education India", cluster: "stem-education", intent: "educational", priority: "P1", primaryUrl: "/solutions/schools", location: "india" },
  { keyword: "robotics STEM company", cluster: "stem-education", intent: "commercial", priority: "P1", primaryUrl: "/solutions/schools" },
  { keyword: "robotics education company", cluster: "stem-education", intent: "commercial", priority: "P1", primaryUrl: "/solutions/schools" },
  { keyword: "robotics certificate course", cluster: "stem-education", intent: "commercial", priority: "P1", primaryUrl: "/courses" },
  { keyword: "online robotics course India", cluster: "stem-education", intent: "commercial", priority: "P2", primaryUrl: "/courses", location: "india" },
  { keyword: "robotics training Coimbatore", cluster: "stem-education", intent: "local", priority: "P0", primaryUrl: "/learn/engineering-students", location: "coimbatore" },
  { keyword: "robotics classes Coimbatore", cluster: "stem-education", intent: "local", priority: "P1", primaryUrl: "/learn/school-students", location: "coimbatore" },
  { keyword: "robotics workshop Coimbatore", cluster: "stem-education", intent: "local", priority: "P1", primaryUrl: "/learn/engineering-students", location: "coimbatore" },
  { keyword: "robotics internship Coimbatore", cluster: "stem-education", intent: "local", priority: "P1", primaryUrl: "/learn/engineering-students", location: "coimbatore" },
  { keyword: "robotics training Tamil Nadu", cluster: "stem-education", intent: "local", priority: "P1", primaryUrl: "/learn/engineering-students", location: "tamil-nadu" },
  { keyword: "robotics workshop Tamil Nadu", cluster: "stem-education", intent: "local", priority: "P1", primaryUrl: "/learn/engineering-students", location: "tamil-nadu" },
  { keyword: "STEM learning activities", cluster: "stem-education", intent: "educational", priority: "P2", primaryUrl: "/learn/school-students" },
  { keyword: "experiential learning robotics", cluster: "stem-education", intent: "educational", priority: "P2", primaryUrl: "/learn/school-students" },
  { keyword: "robotics skill development", cluster: "stem-education", intent: "educational", priority: "P2", primaryUrl: "/learn/engineering-students" },
  { keyword: "mechatronics course India", cluster: "stem-education", intent: "commercial", priority: "P2", primaryUrl: "/courses", location: "india" },
  { keyword: "embedded systems robotics training", cluster: "stem-education", intent: "commercial", priority: "P1", primaryUrl: "/learn/engineering-students" },
  { keyword: "IoT and robotics workshop", cluster: "stem-education", intent: "commercial", priority: "P2", primaryUrl: "/learn/engineering-students" },
  { keyword: "AI and robotics training for students", cluster: "stem-education", intent: "commercial", priority: "P2", primaryUrl: "/learn/engineering-students" },
  { keyword: "robotics practical course", cluster: "stem-education", intent: "commercial", priority: "P2", primaryUrl: "/courses" },
  { keyword: "robotics mentoring program", cluster: "stem-education", intent: "educational", priority: "P2", primaryUrl: "/learn/engineering-students" },
  { keyword: "robotics competitions training", cluster: "stem-education", intent: "commercial", priority: "P1", primaryUrl: "/learn/engineering-students" }
];

stemKeywords.forEach(item => {
  addKeyword({
    keyword: item.keyword,
    cluster: item.cluster,
    intent: item.intent || 'educational',
    keywordType: 'solution',
    audience: item.keyword.includes('school') || item.keyword.includes('kids') ? 'schools-educators' : 'students-colleges',
    businessValue: item.priority === 'P0' ? 'very-high' : 'high',
    priority: item.priority || 'P1',
    primaryUrl: item.primaryUrl,
    contentType: item.primaryUrl.startsWith('/courses') ? 'course' : 'solution',
    location: item.location || 'global',
    commercialIntent: item.intent === 'commercial' || item.intent === 'local',
    status: 'mapped',
    scoring: { businessValue: 8, searchIntentStrength: 8, productRelevance: 8, conversionPotential: 8, authorityPotential: 9 }
  });
});

// ─────────────────────────────────────────────────────────────
// 5. SCHOOL ROBOTICS KEYWORDS (Target: 35+)
// ─────────────────────────────────────────────────────────────
const schoolKeywords = [
  { keyword: "school robotics", cluster: "school-robotics", intent: "educational", priority: "P1", primaryUrl: "/solutions/schools" },
  { keyword: "school robotics program", cluster: "school-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/schools" },
  { keyword: "robotics for schools", cluster: "school-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/schools" },
  { keyword: "STEM lab school", cluster: "school-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/schools" },
  { keyword: "school STEM lab setup", cluster: "school-robotics", intent: "commercial", priority: "P0", primaryUrl: "/solutions/schools" },
  { keyword: "school robotics lab", cluster: "school-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/schools" },
  { keyword: "robotics lab for schools", cluster: "school-robotics", intent: "commercial", priority: "P0", primaryUrl: "/solutions/schools" },
  { keyword: "robotics workshop for schools", cluster: "school-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/schools" },
  { keyword: "school robotics training", cluster: "school-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/schools" },
  { keyword: "school robotics competition", cluster: "school-robotics", intent: "competition", priority: "P2", primaryUrl: "/events/competition/general-robotics" },
  { keyword: "school STEM activities", cluster: "school-robotics", intent: "educational", priority: "P2", primaryUrl: "/solutions/schools" },
  { keyword: "school robotics kit", cluster: "school-robotics", intent: "commercial", priority: "P1", primaryUrl: "/products/educational-robotics" },
  { keyword: "robotics lab setup for schools", cluster: "school-robotics", intent: "commercial", priority: "P0", primaryUrl: "/solutions/schools" },
  { keyword: "robotics solutions for schools", cluster: "school-robotics", intent: "commercial", priority: "P0", primaryUrl: "/solutions/schools" },
  { keyword: "robotics curriculum for schools", cluster: "school-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/schools" },
  { keyword: "robotics lab setup cost for schools", cluster: "school-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/schools" },
  { keyword: "CBSE robotics curriculum support", cluster: "school-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/schools", location: "india" },
  { keyword: "ICSE robotics lab setup", cluster: "school-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/schools", location: "india" },
  { keyword: "tinkering lab for schools India", cluster: "school-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/schools", location: "india" },
  { keyword: "ATL lab setup company India", cluster: "school-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/schools", location: "india" },
  { keyword: "school robotics teacher training", cluster: "school-robotics", intent: "commercial", priority: "P2", primaryUrl: "/solutions/schools" },
  { keyword: "robotics club setup in schools", cluster: "school-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/schools" },
  { keyword: "K12 robotics program", cluster: "school-robotics", intent: "educational", priority: "P2", primaryUrl: "/solutions/schools" },
  { keyword: "robotics lab setup Tamil Nadu schools", cluster: "school-robotics", intent: "local", priority: "P1", primaryUrl: "/solutions/schools", location: "tamil-nadu" },
  { keyword: "school robotics training Coimbatore", cluster: "school-robotics", intent: "local", priority: "P1", primaryUrl: "/solutions/schools", location: "coimbatore" },
  { keyword: "STEM innovation lab for schools", cluster: "school-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/schools" },
  { keyword: "school robotics expo", cluster: "school-robotics", intent: "educational", priority: "P3", primaryUrl: "/events" },
  { keyword: "robotics summer camp for schools", cluster: "school-robotics", intent: "commercial", priority: "P2", primaryUrl: "/solutions/schools" },
  { keyword: "robotics equipment for schools", cluster: "school-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/schools" },
  { keyword: "school robotics supplier India", cluster: "school-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/schools", location: "india" },
  { keyword: "primary school robotics curriculum", cluster: "school-robotics", intent: "educational", priority: "P2", primaryUrl: "/solutions/schools" },
  { keyword: "high school robotics competition training", cluster: "school-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/schools" },
  { keyword: "school robotics lab design", cluster: "school-robotics", intent: "commercial", priority: "P2", primaryUrl: "/solutions/schools" },
  { keyword: "school science and robotics lab", cluster: "school-robotics", intent: "commercial", priority: "P2", primaryUrl: "/solutions/schools" },
  { keyword: "interactive robotics for schools", cluster: "school-robotics", intent: "commercial", priority: "P2", primaryUrl: "/solutions/schools" },
  { keyword: "turnkey robotics lab for schools", cluster: "school-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/schools" }
];

schoolKeywords.forEach(item => {
  addKeyword({
    keyword: item.keyword,
    cluster: item.cluster,
    intent: item.intent || 'commercial',
    keywordType: 'solution',
    audience: 'schools-educators',
    businessValue: 'very-high',
    priority: item.priority || 'P1',
    primaryUrl: item.primaryUrl,
    contentType: item.primaryUrl.startsWith('/products') ? 'product' : 'solution',
    location: item.location || 'global',
    commercialIntent: item.intent === 'commercial' || item.intent === 'local',
    status: 'mapped',
    scoring: { businessValue: 9, searchIntentStrength: 9, productRelevance: 9, conversionPotential: 9, authorityPotential: 9 }
  });
});

// ─────────────────────────────────────────────────────────────
// 6. COLLEGE ROBOTICS KEYWORDS (Target: 35+)
// ─────────────────────────────────────────────────────────────
const collegeKeywords = [
  { keyword: "college robotics", cluster: "college-robotics", intent: "educational", priority: "P1", primaryUrl: "/solutions/colleges" },
  { keyword: "engineering college robotics", cluster: "college-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/colleges" },
  { keyword: "college robotics lab", cluster: "college-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/colleges" },
  { keyword: "engineering robotics lab", cluster: "college-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/colleges" },
  { keyword: "robotics lab setup for colleges", cluster: "college-robotics", intent: "commercial", priority: "P0", primaryUrl: "/solutions/colleges" },
  { keyword: "college robotics project", cluster: "college-robotics", intent: "educational", priority: "P1", primaryUrl: "/projects" },
  { keyword: "college robotics training", cluster: "college-robotics", intent: "commercial", priority: "P1", primaryUrl: "/learn/engineering-students" },
  { keyword: "college robotics competition", cluster: "college-robotics", intent: "competition", priority: "P1", primaryUrl: "/events/competition/general-robotics" },
  { keyword: "college engineering project robotics", cluster: "college-robotics", intent: "commercial", priority: "P1", primaryUrl: "/projects" },
  { keyword: "robotics workshop college", cluster: "college-robotics", intent: "commercial", priority: "P1", primaryUrl: "/learn/engineering-students" },
  { keyword: "technical robotics training", cluster: "college-robotics", intent: "commercial", priority: "P1", primaryUrl: "/learn/engineering-students" },
  { keyword: "robotics solutions for colleges", cluster: "college-robotics", intent: "commercial", priority: "P0", primaryUrl: "/solutions/colleges" },
  { keyword: "center of excellence robotics college", cluster: "college-robotics", intent: "commercial", priority: "P0", primaryUrl: "/solutions/colleges" },
  { keyword: "robotics lab setup cost for colleges", cluster: "college-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/colleges" },
  { keyword: "college robotics research lab", cluster: "college-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/colleges" },
  { keyword: "mechatronics lab setup college", cluster: "college-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/colleges" },
  { keyword: "automation lab setup for engineering colleges", cluster: "college-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/colleges" },
  { keyword: "engineering college robotics workshop Coimbatore", cluster: "college-robotics", intent: "local", priority: "P1", primaryUrl: "/learn/engineering-students", location: "coimbatore" },
  { keyword: "robotics faculty development program", cluster: "college-robotics", intent: "commercial", priority: "P2", primaryUrl: "/solutions/colleges" },
  { keyword: "college robotics club mentoring", cluster: "college-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/colleges" },
  { keyword: "engineering final year robotics project center", cluster: "college-robotics", intent: "commercial", priority: "P1", primaryUrl: "/projects" },
  { keyword: "robotics symposium sponsorship", cluster: "college-robotics", intent: "commercial", priority: "P3", primaryUrl: "/events" },
  { keyword: "college robotics team sponsorship", cluster: "college-robotics", intent: "commercial", priority: "P2", primaryUrl: "/events/competition/general-robotics" },
  { keyword: "autonomous robotics lab for universities", cluster: "college-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/colleges" },
  { keyword: "industrial robotics training for colleges", cluster: "college-robotics", intent: "commercial", priority: "P1", primaryUrl: "/learn/industrial-training" },
  { keyword: "PLC robotics lab for engineering colleges", cluster: "college-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/colleges" },
  { keyword: "college robotics kits supplier Tamil Nadu", cluster: "college-robotics", intent: "local", priority: "P1", primaryUrl: "/solutions/colleges", location: "tamil-nadu" },
  { keyword: "embedded robotics workshop college students", cluster: "college-robotics", intent: "commercial", priority: "P1", primaryUrl: "/learn/engineering-students" },
  { keyword: "robotics MOU for engineering colleges", cluster: "college-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/colleges" },
  { keyword: "college drone lab setup", cluster: "college-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/colleges" },
  { keyword: "AI robotics lab setup engineering college", cluster: "college-robotics", intent: "commercial", priority: "P1", primaryUrl: "/solutions/colleges" },
  { keyword: "robotics incubation for college startups", cluster: "college-robotics", intent: "commercial", priority: "P2", primaryUrl: "/solutions/startups" },
  { keyword: "engineering college tech fest robotics partner", cluster: "college-robotics", intent: "commercial", priority: "P2", primaryUrl: "/events" },
  { keyword: "robotics hands on training for ECE and EEE", cluster: "college-robotics", intent: "commercial", priority: "P1", primaryUrl: "/learn/engineering-students" },
  { keyword: "mechanical engineering robotics project support", cluster: "college-robotics", intent: "commercial", priority: "P1", primaryUrl: "/projects" },
  { keyword: "turnkey robotics lab for engineering college", cluster: "college-robotics", intent: "commercial", priority: "P0", primaryUrl: "/solutions/colleges" }
];

collegeKeywords.forEach(item => {
  addKeyword({
    keyword: item.keyword,
    cluster: item.cluster,
    intent: item.intent || 'commercial',
    keywordType: 'solution',
    audience: 'students-colleges',
    businessValue: 'very-high',
    priority: item.priority || 'P1',
    primaryUrl: item.primaryUrl,
    contentType: 'solution',
    location: item.location || 'global',
    commercialIntent: item.intent === 'commercial' || item.intent === 'local',
    status: 'mapped',
    scoring: { businessValue: 9, searchIntentStrength: 9, productRelevance: 9, conversionPotential: 9, authorityPotential: 9 }
  });
});

// ─────────────────────────────────────────────────────────────
// 7. ROBOTICS COMPANY / AUTHORITY KEYWORDS (Target: 40+)
// ─────────────────────────────────────────────────────────────
const companyKeywords = [
  { keyword: "robotics company", cluster: "robotics-company", intent: "brand", priority: "P1", primaryUrl: "/" },
  { keyword: "robotics company India", cluster: "robotics-company", intent: "brand", priority: "P0", primaryUrl: "/", location: "india" },
  { keyword: "robotics company Tamil Nadu", cluster: "robotics-company", intent: "local", priority: "P0", primaryUrl: "/", location: "tamil-nadu" },
  { keyword: "robotics company Coimbatore", cluster: "robotics-company", intent: "local", priority: "P0", primaryUrl: "/", location: "coimbatore" },
  { keyword: "robotics solutions company", cluster: "robotics-company", intent: "commercial", priority: "P1", primaryUrl: "/" },
  { keyword: "robotics engineering company", cluster: "robotics-company", intent: "commercial", priority: "P1", primaryUrl: "/" },
  { keyword: "robotics automation company", cluster: "robotics-company", intent: "commercial", priority: "P0", primaryUrl: "/services/robotics-automation" },
  { keyword: "robotics system integrator", cluster: "robotics-company", intent: "commercial", priority: "P1", primaryUrl: "/services/robotics-automation" },
  { keyword: "robotics service company", cluster: "robotics-company", intent: "commercial", priority: "P1", primaryUrl: "/services" },
  { keyword: "custom robotics company", cluster: "robotics-company", intent: "commercial", priority: "P1", primaryUrl: "/services/robotics-automation" },
  { keyword: "robotics development company", cluster: "robotics-company", intent: "commercial", priority: "P1", primaryUrl: "/services/engineering-rd" },
  { keyword: "robotics manufacturer India", cluster: "robotics-company", intent: "commercial", priority: "P0", primaryUrl: "/products", location: "india" },
  { keyword: "robotics supplier India", cluster: "robotics-company", intent: "commercial", priority: "P0", primaryUrl: "/products", location: "india" },
  { keyword: "robotics equipment supplier India", cluster: "robotics-company", intent: "commercial", priority: "P0", primaryUrl: "/products", location: "india" },
  { keyword: "robotics parts supplier", cluster: "robotics-company", intent: "commercial", priority: "P1", primaryUrl: "/products/robotics-components" },
  { keyword: "robotics parts supplier India", cluster: "robotics-company", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components", location: "india" },
  { keyword: "robotics products supplier", cluster: "robotics-company", intent: "commercial", priority: "P1", primaryUrl: "/products" },
  { keyword: "robotics products India", cluster: "robotics-company", intent: "commercial", priority: "P0", primaryUrl: "/products", location: "india" },
  { keyword: "robotics products", cluster: "robotics-company", intent: "commercial", priority: "P1", primaryUrl: "/products" },
  { keyword: "Tamil robotics company", cluster: "robotics-company", intent: "brand", priority: "P0", primaryUrl: "/", location: "tamil-nadu" },
  { keyword: "Tamizh Tech", cluster: "robotics-company", intent: "brand", priority: "P0", primaryUrl: "/" },
  { keyword: "Tamizh Tech Robotics", cluster: "robotics-company", intent: "brand", priority: "P0", primaryUrl: "/" },
  { keyword: "Tamizh Tech Robotics Company", cluster: "robotics-company", intent: "brand", priority: "P0", primaryUrl: "/" },
  { keyword: "Tamizh Tech Coimbatore", cluster: "robotics-company", intent: "brand", priority: "P0", primaryUrl: "/", location: "coimbatore" },
  { keyword: "Tamizh Tech products", cluster: "robotics-company", intent: "brand", priority: "P0", primaryUrl: "/products" },
  { keyword: "Tamizh Tech competition robots", cluster: "robotics-company", intent: "brand", priority: "P0", primaryUrl: "/products/competition" },
  { keyword: "Tamizh Tech services", cluster: "robotics-company", intent: "brand", priority: "P0", primaryUrl: "/services" },
  { keyword: "robotics lab company India", cluster: "robotics-company", intent: "commercial", priority: "P0", primaryUrl: "/solutions/schools", location: "india" },
  { keyword: "robotics startup Coimbatore", cluster: "robotics-company", intent: "local", priority: "P1", primaryUrl: "/", location: "coimbatore" },
  { keyword: "hardware startup Coimbatore", cluster: "robotics-company", intent: "local", priority: "P1", primaryUrl: "/solutions/startups", location: "coimbatore" },
  { keyword: "best robotics company Coimbatore", cluster: "robotics-company", intent: "local", priority: "P1", primaryUrl: "/", location: "coimbatore" },
  { keyword: "leading robotics company Tamil Nadu", cluster: "robotics-company", intent: "local", priority: "P1", primaryUrl: "/", location: "tamil-nadu" },
  { keyword: "top robotics startup India", cluster: "robotics-company", intent: "brand", priority: "P2", primaryUrl: "/", location: "india" },
  { keyword: "robotics technology company India", cluster: "robotics-company", intent: "brand", priority: "P1", primaryUrl: "/", location: "india" },
  { keyword: "robotics consulting company", cluster: "robotics-company", intent: "commercial", priority: "P2", primaryUrl: "/services" },
  { keyword: "robotics hardware manufacturers Coimbatore", cluster: "robotics-company", intent: "local", priority: "P0", primaryUrl: "/products", location: "coimbatore" },
  { keyword: "commercial robotics company", cluster: "robotics-company", intent: "commercial", priority: "P1", primaryUrl: "/" },
  { keyword: "robotics engineering services India", cluster: "robotics-company", intent: "commercial", priority: "P1", primaryUrl: "/services", location: "india" },
  { keyword: "robotics R&D firm Coimbatore", cluster: "robotics-company", intent: "local", priority: "P1", primaryUrl: "/services/engineering-rd", location: "coimbatore" },
  { keyword: "mechatronics engineering company India", cluster: "robotics-company", intent: "commercial", priority: "P1", primaryUrl: "/", location: "india" }
];

companyKeywords.forEach(item => {
  addKeyword({
    keyword: item.keyword,
    cluster: item.cluster,
    intent: item.intent || 'brand',
    keywordType: 'company',
    audience: 'general',
    businessValue: 'very-high',
    priority: item.priority || 'P1',
    primaryUrl: item.primaryUrl,
    contentType: 'homepage',
    location: item.location || 'global',
    commercialIntent: item.intent === 'commercial' || item.intent === 'local' || item.priority === 'P0',
    status: 'mapped',
    scoring: { businessValue: 10, searchIntentStrength: 9, productRelevance: 9, conversionPotential: 9, authorityPotential: 10 }
  });
});

// ─────────────────────────────────────────────────────────────
// 8. COMPONENTS & HARDWARE KEYWORDS (Target: 60+)
// ─────────────────────────────────────────────────────────────
const componentKeywords = [
  { keyword: "robotics components", cluster: "robotics-components", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components" },
  { keyword: "robotics components India", cluster: "robotics-components", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components", location: "india" },
  { keyword: "robotics parts", cluster: "robotics-components", intent: "commercial", priority: "P1", primaryUrl: "/products/robotics-components" },
  { keyword: "robot electronics", cluster: "robotics-components", intent: "commercial", priority: "P1", primaryUrl: "/products/robotics-components" },
  { keyword: "robot motors", cluster: "robot-motors", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components" },
  { keyword: "robotics motors", cluster: "robot-motors", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components" },
  { keyword: "robot motor", cluster: "robot-motors", intent: "commercial", priority: "P1", primaryUrl: "/products/robotics-components" },
  { keyword: "geared DC motor", cluster: "robot-motors", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components" },
  { keyword: "DC geared motor", cluster: "robot-motors", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components" },
  { keyword: "high torque DC geared motor", cluster: "robot-motors", intent: "commercial", priority: "P1", primaryUrl: "/products/robotics-components" },
  { keyword: "12V DC geared motor", cluster: "robot-motors", intent: "commercial", priority: "P1", primaryUrl: "/products/robotics-components" },
  { keyword: "metal gearbox DC motor", cluster: "robot-motors", intent: "commercial", priority: "P1", primaryUrl: "/products/robotics-components" },
  { keyword: "300RPM geared DC motor", cluster: "robot-motors", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components/ttrc-dgj-300rpm" },
  { keyword: "300 rpm geared motor", cluster: "robot-motors", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components/ttrc-dgj-300rpm" },
  { keyword: "300 RPM motor for robot", cluster: "robot-motors", intent: "commercial", priority: "P1", primaryUrl: "/products/robotics-components/ttrc-dgj-300rpm" },
  { keyword: "600RPM geared DC motor", cluster: "robot-motors", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components/ttrc-dgj-600rpm" },
  { keyword: "600 rpm geared motor", cluster: "robot-motors", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components/ttrc-dgj-600rpm" },
  { keyword: "600 RPM high speed motor for robo race", cluster: "robot-motors", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components/ttrc-dgj-600rpm" },
  { keyword: "robot wheels", cluster: "robot-wheels", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components" },
  { keyword: "robotics wheels", cluster: "robot-wheels", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components" },
  { keyword: "buggy wheels", cluster: "robot-wheels", intent: "commercial", priority: "P1", primaryUrl: "/products/robotics-components" },
  { keyword: "robot buggy wheels India", cluster: "robot-wheels", intent: "commercial", priority: "P1", primaryUrl: "/products/robotics-components", location: "india" },
  { keyword: "112mm buggy wheel", cluster: "robot-wheels", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components/112mm-buggy-wheel" },
  { keyword: "112mm robot wheel", cluster: "robot-wheels", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components/112mm-buggy-wheel" },
  { keyword: "100mm buggy wheel", cluster: "robot-wheels", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components/100mm-buggy-wheel" },
  { keyword: "100mm robot wheel", cluster: "robot-wheels", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components/100mm-buggy-wheel" },
  { keyword: "80mm robot wheel", cluster: "robot-wheels", intent: "commercial", priority: "P1", primaryUrl: "/products/robotics-components/ttrc-hd-80mm-wheel" },
  { keyword: "heavy duty robot wheel", cluster: "robot-wheels", intent: "commercial", priority: "P1", primaryUrl: "/products/robotics-components/ttrc-hd-80mm-wheel" },
  { keyword: "high grip rubber tyre for robot", cluster: "robot-wheels", intent: "commercial", priority: "P1", primaryUrl: "/products/robotics-components/112mm-buggy-wheel" },
  { keyword: "robot wheels with hex coupling", cluster: "robot-wheels", intent: "commercial", priority: "P1", primaryUrl: "/products/robotics-components" },
  { keyword: "6mm shaft robot wheel", cluster: "robot-wheels", intent: "commercial", priority: "P1", primaryUrl: "/products/robotics-components" },
  { keyword: "robot chassis", cluster: "robotics-components", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components" },
  { keyword: "metal robot chassis", cluster: "robotics-components", intent: "commercial", priority: "P1", primaryUrl: "/products/robotics-components" },
  { keyword: "4WD robot chassis", cluster: "robotics-components", intent: "commercial", priority: "P1", primaryUrl: "/products/robotics-components" },
  { keyword: "acrylic robot chassis", cluster: "robotics-components", intent: "commercial", priority: "P2", primaryUrl: "/products/robotics-components" },
  { keyword: "robot gearbox", cluster: "robotics-components", intent: "commercial", priority: "P2", primaryUrl: "/products/robotics-components" },
  { keyword: "robot controller", cluster: "radio-controllers", intent: "commercial", priority: "P0", primaryUrl: "/products/radio-controllers" },
  { keyword: "RC transmitter", cluster: "radio-controllers", intent: "commercial", priority: "P0", primaryUrl: "/products/radio-controllers" },
  { keyword: "RC transmitter and receiver", cluster: "radio-controllers", intent: "commercial", priority: "P0", primaryUrl: "/products/radio-controllers" },
  { keyword: "2.4GHz RC transmitter India", cluster: "radio-controllers", intent: "commercial", priority: "P1", primaryUrl: "/products/radio-controllers", location: "india" },
  { keyword: "6 channel RC transmitter", cluster: "radio-controllers", intent: "commercial", priority: "P1", primaryUrl: "/products/radio-controllers/flysky-fs-i6-2.4g-6ch" },
  { keyword: "10 channel RC transmitter", cluster: "radio-controllers", intent: "commercial", priority: "P1", primaryUrl: "/products/radio-controllers/flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver" },
  { keyword: "FlySky transmitter India", cluster: "radio-controllers", intent: "commercial", priority: "P0", primaryUrl: "/products/radio-controllers", location: "india" },
  { keyword: "FlySky receiver India", cluster: "radio-controllers", intent: "commercial", priority: "P1", primaryUrl: "/products/radio-controllers", location: "india" },
  { keyword: "robot sensors", cluster: "robotics-components", intent: "commercial", priority: "P1", primaryUrl: "/products/robotics-components" },
  { keyword: "ultrasonic sensor for robot", cluster: "robotics-components", intent: "commercial", priority: "P2", primaryUrl: "/products/robotics-components" },
  { keyword: "IR sensor array line follower", cluster: "robotics-components", intent: "commercial", priority: "P1", primaryUrl: "/products/competition/ttrc-lf-5-0" },
  { keyword: "QTR 8A line sensor India", cluster: "robotics-components", intent: "commercial", priority: "P1", primaryUrl: "/products/competition/ttrc-lf-5-0", location: "india" },
  { keyword: "motor driver for robotics", cluster: "robotics-components", intent: "commercial", priority: "P1", primaryUrl: "/products/robotics-components" },
  { keyword: "dual DC motor driver 10A", cluster: "robotics-components", intent: "commercial", priority: "P1", primaryUrl: "/products/robotics-components" },
  { keyword: "smart robot controller board", cluster: "robotics-components", intent: "commercial", priority: "P1", primaryUrl: "/products/radio-controllers" },
  { keyword: "LiPo battery for robotics", cluster: "robotics-components", intent: "commercial", priority: "P1", primaryUrl: "/products/robotics-components" },
  { keyword: "robotics hardware shop Coimbatore", cluster: "robotics-components", intent: "local", priority: "P0", primaryUrl: "/products/robotics-components", location: "coimbatore" },
  { keyword: "buy robotics parts online India", cluster: "robotics-components", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components", location: "india" },
  { keyword: "heavy duty geared motor 12V", cluster: "robot-motors", intent: "commercial", priority: "P1", primaryUrl: "/products/robotics-components" },
  { keyword: "encoder motor for robotics", cluster: "robot-motors", intent: "commercial", priority: "P2", primaryUrl: "/products/robotics-components" },
  { keyword: "planetary geared motor for robot", cluster: "robot-motors", intent: "commercial", priority: "P2", primaryUrl: "/products/robotics-components" },
  { keyword: "omni wheels robotics India", cluster: "robot-wheels", intent: "commercial", priority: "P2", primaryUrl: "/products/robotics-components", location: "india" },
  { keyword: "mecanum wheels India", cluster: "robot-wheels", intent: "commercial", priority: "P2", primaryUrl: "/products/robotics-components", location: "india" },
  { keyword: "silicone wheel for line follower", cluster: "robot-wheels", intent: "commercial", priority: "P1", primaryUrl: "/products/robotics-components" },
  { keyword: "robot brass hex coupling 6mm", cluster: "robot-wheels", intent: "commercial", priority: "P1", primaryUrl: "/products/robotics-components" }
];

componentKeywords.forEach(item => {
  addKeyword({
    keyword: item.keyword,
    cluster: item.cluster,
    intent: item.intent || 'commercial',
    keywordType: 'component',
    audience: 'students-colleges',
    businessValue: 'high',
    priority: item.priority || 'P1',
    primaryUrl: item.primaryUrl,
    contentType: item.primaryUrl.includes('/controllers') ? 'product' : 'product',
    location: item.location || 'global',
    commercialIntent: true,
    status: 'mapped',
    scoring: { businessValue: 9, searchIntentStrength: 9, productRelevance: 9, conversionPotential: 8, authorityPotential: 8 }
  });
});

// ─────────────────────────────────────────────────────────────
// 9. 13 PUBLISHED PRODUCTS (Target: 65+ = 5-7 keywords per product)
// ─────────────────────────────────────────────────────────────
const productClusterKeywords = [
  // 1. TTRC LF 5.0
  { keyword: "TTRC LF 5.0", cluster: "ttrc-lf-5-0", intent: "commercial", priority: "P0", primaryUrl: "/products/competition/ttrc-lf-5-0" },
  { keyword: "TTRC LF 5.0 price", cluster: "ttrc-lf-5-0", intent: "transactional", priority: "P0", primaryUrl: "/products/competition/ttrc-lf-5-0" },
  { keyword: "TTRC LF 5.0 line follower", cluster: "ttrc-lf-5-0", intent: "commercial", priority: "P0", primaryUrl: "/products/competition/ttrc-lf-5-0" },
  { keyword: "TTRC LF 5.0 line follower robot kit", cluster: "ttrc-lf-5-0", intent: "commercial", priority: "P0", primaryUrl: "/products/competition/ttrc-lf-5-0" },
  { keyword: "TTRC LF 5.0 specifications", cluster: "ttrc-lf-5-0", intent: "informational", priority: "P1", primaryUrl: "/products/competition/ttrc-lf-5-0" },
  { keyword: "TTRC LF 5.0 India", cluster: "ttrc-lf-5-0", intent: "commercial", priority: "P1", primaryUrl: "/products/competition/ttrc-lf-5-0", location: "india" },
  { keyword: "PID line follower robot TTRC LF 5.0", cluster: "ttrc-lf-5-0", intent: "commercial", priority: "P1", primaryUrl: "/products/competition/ttrc-lf-5-0" },

  // 2. TTRC RR-5.0
  { keyword: "TTRC RR-5.0", cluster: "ttrc-rr-5-0", intent: "commercial", priority: "P0", primaryUrl: "/products/competition/rc-robo-race" },
  { keyword: "TTRC RR-5.0 price", cluster: "ttrc-rr-5-0", intent: "transactional", priority: "P0", primaryUrl: "/products/competition/rc-robo-race" },
  { keyword: "TTRC RR-5.0 robo race robot", cluster: "ttrc-rr-5-0", intent: "commercial", priority: "P0", primaryUrl: "/products/competition/rc-robo-race" },
  { keyword: "TTRC RR-5.0 robo race robot kit", cluster: "ttrc-rr-5-0", intent: "commercial", priority: "P0", primaryUrl: "/products/competition/rc-robo-race" },
  { keyword: "TTRC RR-5.0 specifications", cluster: "ttrc-rr-5-0", intent: "informational", priority: "P1", primaryUrl: "/products/competition/rc-robo-race" },
  { keyword: "TTRC RR-5.0 robo race car India", cluster: "ttrc-rr-5-0", intent: "commercial", priority: "P1", primaryUrl: "/products/competition/rc-robo-race", location: "india" },

  // 3. TTRC RS-5.0
  { keyword: "TTRC RS-5.0", cluster: "ttrc-rs-5-0", intent: "commercial", priority: "P0", primaryUrl: "/products/competition/rc-robo-soccer" },
  { keyword: "TTRC RS-5.0 price", cluster: "ttrc-rs-5-0", intent: "transactional", priority: "P0", primaryUrl: "/products/competition/rc-robo-soccer" },
  { keyword: "TTRC RS-5.0 robo soccer robot", cluster: "ttrc-rs-5-0", intent: "commercial", priority: "P0", primaryUrl: "/products/competition/rc-robo-soccer" },
  { keyword: "TTRC RS-5.0 robo soccer robot kit", cluster: "ttrc-rs-5-0", intent: "commercial", priority: "P0", primaryUrl: "/products/competition/rc-robo-soccer" },
  { keyword: "TTRC RS-5.0 kicker robot", cluster: "ttrc-rs-5-0", intent: "commercial", priority: "P1", primaryUrl: "/products/competition/rc-robo-soccer" },
  { keyword: "TTRC RS-5.0 specifications", cluster: "ttrc-rs-5-0", intent: "informational", priority: "P1", primaryUrl: "/products/competition/rc-robo-soccer" },

  // 4. THE BOXING BOT
  { keyword: "The Boxing Bot", cluster: "boxing-bot", intent: "commercial", priority: "P0", primaryUrl: "/products/educational-robotics/boxing-bot" },
  { keyword: "The Boxing Bot price", cluster: "boxing-bot", intent: "transactional", priority: "P0", primaryUrl: "/products/educational-robotics/boxing-bot" },
  { keyword: "The Boxing Bot educational robot", cluster: "boxing-bot", intent: "commercial", priority: "P0", primaryUrl: "/products/educational-robotics/boxing-bot" },
  { keyword: "The Boxing Bot fighting robot kit", cluster: "boxing-bot", intent: "commercial", priority: "P1", primaryUrl: "/products/educational-robotics/boxing-bot" },
  { keyword: "The Boxing Bot Tamizh Tech", cluster: "boxing-bot", intent: "brand", priority: "P0", primaryUrl: "/products/educational-robotics/boxing-bot" },
  { keyword: "The Boxing Bot STEM kit India", cluster: "boxing-bot", intent: "commercial", priority: "P1", primaryUrl: "/products/educational-robotics/boxing-bot", location: "india" },

  // 5. FlySky FS-i6X
  { keyword: "FlySky FS-i6X", cluster: "flysky-fsi6x", intent: "commercial", priority: "P0", primaryUrl: "/products/radio-controllers/flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver" },
  { keyword: "FlySky FS-i6X price", cluster: "flysky-fsi6x", intent: "transactional", priority: "P0", primaryUrl: "/products/radio-controllers/flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver" },
  { keyword: "FlySky FS-i6X transmitter with FS-iA10B receiver", cluster: "flysky-fsi6x", intent: "commercial", priority: "P0", primaryUrl: "/products/radio-controllers/flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver" },
  { keyword: "FlySky FS-i6X 10 channel RC transmitter", cluster: "flysky-fsi6x", intent: "commercial", priority: "P1", primaryUrl: "/products/radio-controllers/flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver" },
  { keyword: "FlySky FS-i6X India buy", cluster: "flysky-fsi6x", intent: "transactional", priority: "P1", primaryUrl: "/products/radio-controllers/flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver", location: "india" },

  // 6. FlySky FS-i6
  { keyword: "FlySky FS-i6", cluster: "flysky-fsi6", intent: "commercial", priority: "P0", primaryUrl: "/products/radio-controllers/flysky-fs-i6-2.4g-6ch" },
  { keyword: "FlySky FS-i6 price", cluster: "flysky-fsi6", intent: "transactional", priority: "P0", primaryUrl: "/products/radio-controllers/flysky-fs-i6-2.4g-6ch" },
  { keyword: "FlySky FS-i6 with FS-iA6 receiver", cluster: "flysky-fsi6", intent: "commercial", priority: "P0", primaryUrl: "/products/radio-controllers/flysky-fs-i6-2.4g-6ch" },
  { keyword: "FlySky FS-i6 6CH RC transmitter", cluster: "flysky-fsi6", intent: "commercial", priority: "P1", primaryUrl: "/products/radio-controllers/flysky-fs-i6-2.4g-6ch" },
  { keyword: "FlySky FS-i6 India price", cluster: "flysky-fsi6", intent: "transactional", priority: "P1", primaryUrl: "/products/radio-controllers/flysky-fs-i6-2.4g-6ch", location: "india" },

  // 7. FlySky FS-i6S
  { keyword: "FlySky FS-i6S", cluster: "flysky-fsi6s", intent: "commercial", priority: "P0", primaryUrl: "/products/radio-controllers/flysky-fs-i6s-2.4g-10ch-afhds-transmitter-with-fs-ia10b-10ch-receiver" },
  { keyword: "FlySky FS-i6S price", cluster: "flysky-fsi6s", intent: "transactional", priority: "P0", primaryUrl: "/products/radio-controllers/flysky-fs-i6s-2.4g-10ch-afhds-transmitter-with-fs-ia10b-10ch-receiver" },
  { keyword: "FlySky FS-i6S touchscreen transmitter", cluster: "flysky-fsi6s", intent: "commercial", priority: "P1", primaryUrl: "/products/radio-controllers/flysky-fs-i6s-2.4g-10ch-afhds-transmitter-with-fs-ia10b-10ch-receiver" },
  { keyword: "FlySky FS-i6S with FS-iA10B receiver", cluster: "flysky-fsi6s", intent: "commercial", priority: "P0", primaryUrl: "/products/radio-controllers/flysky-fs-i6s-2.4g-10ch-afhds-transmitter-with-fs-ia10b-10ch-receiver" },

  // 8. FlySky FS-CT6B
  { keyword: "FlySky FS-CT6B", cluster: "flysky-fsct6b", intent: "commercial", priority: "P0", primaryUrl: "/products/radio-controllers/flysky-fs-ct6b-2.4g-6ch-radio-set-system-with-rx-fs-r6b-receiver" },
  { keyword: "FlySky FS-CT6B price", cluster: "flysky-fsct6b", intent: "transactional", priority: "P0", primaryUrl: "/products/radio-controllers/flysky-fs-ct6b-2.4g-6ch-radio-set-system-with-rx-fs-r6b-receiver" },
  { keyword: "FlySky FS-CT6B with FS-R6B receiver", cluster: "flysky-fsct6b", intent: "commercial", priority: "P0", primaryUrl: "/products/radio-controllers/flysky-fs-ct6b-2.4g-6ch-radio-set-system-with-rx-fs-r6b-receiver" },
  { keyword: "FlySky FS-CT6B 6 channel radio system", cluster: "flysky-fsct6b", intent: "commercial", priority: "P1", primaryUrl: "/products/radio-controllers/flysky-fs-ct6b-2.4g-6ch-radio-set-system-with-rx-fs-r6b-receiver" },

  // 9. 112MM Buggy Wheel
  { keyword: "112MM Buggy Wheel", cluster: "112mm-wheel", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components/112mm-buggy-wheel" },
  { keyword: "112MM Buggy Wheel price", cluster: "112mm-wheel", intent: "transactional", priority: "P0", primaryUrl: "/products/robotics-components/112mm-buggy-wheel" },
  { keyword: "112mm robot wheel with 6mm coupling", cluster: "112mm-wheel", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components/112mm-buggy-wheel" },
  { keyword: "112mm rubber tyre robot wheel", cluster: "112mm-wheel", intent: "commercial", priority: "P1", primaryUrl: "/products/robotics-components/112mm-buggy-wheel" },
  { keyword: "robo race 112mm buggy wheel India", cluster: "112mm-wheel", intent: "commercial", priority: "P1", primaryUrl: "/products/robotics-components/112mm-buggy-wheel", location: "india" },

  // 10. 100MM Buggy Wheel
  { keyword: "100MM Buggy Wheel", cluster: "100mm-wheel", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components/100mm-buggy-wheel" },
  { keyword: "100MM Buggy Wheel price", cluster: "100mm-wheel", intent: "transactional", priority: "P0", primaryUrl: "/products/robotics-components/100mm-buggy-wheel" },
  { keyword: "100mm robot wheel with hex coupling", cluster: "100mm-wheel", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components/100mm-buggy-wheel" },
  { keyword: "100mm offroad robot wheel", cluster: "100mm-wheel", intent: "commercial", priority: "P1", primaryUrl: "/products/robotics-components/100mm-buggy-wheel" },

  // 11. TTRC HD 80MM Wheel
  { keyword: "TTRC HD 80MM Wheel", cluster: "80mm-wheel", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components/ttrc-hd-80mm-wheel" },
  { keyword: "TTRC HD 80MM Wheel price", cluster: "80mm-wheel", intent: "transactional", priority: "P0", primaryUrl: "/products/robotics-components/ttrc-hd-80mm-wheel" },
  { keyword: "heavy duty 80mm robot wheel", cluster: "80mm-wheel", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components/ttrc-hd-80mm-wheel" },
  { keyword: "TTRC 80mm competition wheel", cluster: "80mm-wheel", intent: "commercial", priority: "P1", primaryUrl: "/products/robotics-components/ttrc-hd-80mm-wheel" },

  // 12. TTRC DGJ 300RPM
  { keyword: "TTRC DGJ 300RPM", cluster: "ttrc-dgj-300rpm", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components/ttrc-dgj-300rpm" },
  { keyword: "TTRC DGJ 300RPM price", cluster: "ttrc-dgj-300rpm", intent: "transactional", priority: "P0", primaryUrl: "/products/robotics-components/ttrc-dgj-300rpm" },
  { keyword: "TTRC DGJ 300RPM DC geared motor", cluster: "ttrc-dgj-300rpm", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components/ttrc-dgj-300rpm" },
  { keyword: "TTRC DGJ 300RPM specifications", cluster: "ttrc-dgj-300rpm", intent: "informational", priority: "P1", primaryUrl: "/products/robotics-components/ttrc-dgj-300rpm" },
  { keyword: "300RPM DC motor ₹650", cluster: "ttrc-dgj-300rpm", intent: "transactional", priority: "P1", primaryUrl: "/products/robotics-components/ttrc-dgj-300rpm", location: "india" },
  { keyword: "high torque 300RPM motor for robo soccer", cluster: "ttrc-dgj-300rpm", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components/ttrc-dgj-300rpm" },

  // 13. TTRC DGJ 600RPM
  { keyword: "TTRC DGJ 600RPM", cluster: "ttrc-dgj-600rpm", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components/ttrc-dgj-600rpm" },
  { keyword: "TTRC DGJ 600RPM price", cluster: "ttrc-dgj-600rpm", intent: "transactional", priority: "P0", primaryUrl: "/products/robotics-components/ttrc-dgj-600rpm" },
  { keyword: "TTRC DGJ 600RPM DC geared motor", cluster: "ttrc-dgj-600rpm", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components/ttrc-dgj-600rpm" },
  { keyword: "TTRC DGJ 600RPM specifications", cluster: "ttrc-dgj-600rpm", intent: "informational", priority: "P1", primaryUrl: "/products/robotics-components/ttrc-dgj-600rpm" },
  { keyword: "600RPM DC motor ₹700", cluster: "ttrc-dgj-600rpm", intent: "transactional", priority: "P1", primaryUrl: "/products/robotics-components/ttrc-dgj-600rpm", location: "india" },
  { keyword: "high speed 600RPM motor for robo race", cluster: "ttrc-dgj-600rpm", intent: "commercial", priority: "P0", primaryUrl: "/products/robotics-components/ttrc-dgj-600rpm" }
];

productClusterKeywords.forEach(item => {
  addKeyword({
    keyword: item.keyword,
    cluster: item.cluster,
    intent: item.intent || 'commercial',
    keywordType: 'product',
    audience: 'students-colleges',
    businessValue: 'very-high',
    priority: item.priority || 'P0',
    primaryUrl: item.primaryUrl,
    contentType: 'product',
    location: item.location || 'global',
    commercialIntent: true,
    status: 'mapped',
    scoring: { businessValue: 10, searchIntentStrength: 10, productRelevance: 10, conversionPotential: 10, authorityPotential: 9 }
  });
});

// ─────────────────────────────────────────────────────────────
// 10. COMMERCIAL SERVICES (Target: 70+)
// ─────────────────────────────────────────────────────────────
const serviceKeywords = [
  // 3D Printing
  { keyword: "3D printing service", cluster: "3d-printing-services", intent: "commercial", priority: "P0", primaryUrl: "/services/3d-printing" },
  { keyword: "3D printing Coimbatore", cluster: "3d-printing-services", intent: "local", priority: "P0", primaryUrl: "/services/3d-printing", location: "coimbatore" },
  { keyword: "3D printing for robotics", cluster: "3d-printing-services", intent: "commercial", priority: "P0", primaryUrl: "/services/3d-printing" },
  { keyword: "3D printed robot parts", cluster: "3d-printing-services", intent: "commercial", priority: "P0", primaryUrl: "/services/3d-printing" },
  { keyword: "3D printing services Tamil Nadu", cluster: "3d-printing-services", intent: "local", priority: "P1", primaryUrl: "/services/3d-printing", location: "tamil-nadu" },
  { keyword: "rapid 3D prototyping Coimbatore", cluster: "3d-printing-services", intent: "local", priority: "P1", primaryUrl: "/services/3d-printing", location: "coimbatore" },
  { keyword: "custom 3D printing service India", cluster: "3d-printing-services", intent: "commercial", priority: "P1", primaryUrl: "/services/3d-printing", location: "india" },
  { keyword: "industrial 3D printing service", cluster: "3d-printing-services", intent: "commercial", priority: "P1", primaryUrl: "/services/3d-printing" },
  { keyword: "FDM 3D printing service Coimbatore", cluster: "3d-printing-services", intent: "local", priority: "P1", primaryUrl: "/services/3d-printing", location: "coimbatore" },
  { keyword: "SLA resin 3D printing Coimbatore", cluster: "3d-printing-services", intent: "local", priority: "P1", primaryUrl: "/services/3d-printing", location: "coimbatore" },

  // Laser Cutting
  { keyword: "laser cutting service", cluster: "laser-cutting-services", intent: "commercial", priority: "P0", primaryUrl: "/services/laser-cutting" },
  { keyword: "laser cutting service Coimbatore", cluster: "laser-cutting-services", intent: "local", priority: "P0", primaryUrl: "/services/laser-cutting", location: "coimbatore" },
  { keyword: "laser cutting for robotics", cluster: "laser-cutting-services", intent: "commercial", priority: "P1", primaryUrl: "/services/laser-cutting" },
  { keyword: "robot chassis laser cutting", cluster: "laser-cutting-services", intent: "commercial", priority: "P0", primaryUrl: "/services/laser-cutting" },
  { keyword: "acrylic laser cutting Coimbatore", cluster: "laser-cutting-services", intent: "local", priority: "P1", primaryUrl: "/services/laser-cutting", location: "coimbatore" },
  { keyword: "sheet metal laser cutting Coimbatore", cluster: "laser-cutting-services", intent: "local", priority: "P1", primaryUrl: "/services/laser-cutting", location: "coimbatore" },
  { keyword: "custom robot chassis cutting", cluster: "laser-cutting-services", intent: "commercial", priority: "P1", primaryUrl: "/services/laser-cutting" },
  { keyword: "laser cutting job work Coimbatore", cluster: "laser-cutting-services", intent: "local", priority: "P1", primaryUrl: "/services/laser-cutting", location: "coimbatore" },

  // PCB Design & Assembly
  { keyword: "PCB design service", cluster: "pcb-services", intent: "commercial", priority: "P0", primaryUrl: "/services/pcb-design" },
  { keyword: "PCB design service Coimbatore", cluster: "pcb-services", intent: "local", priority: "P0", primaryUrl: "/services/pcb-design", location: "coimbatore" },
  { keyword: "PCB fabrication and assembly", cluster: "pcb-services", intent: "commercial", priority: "P0", primaryUrl: "/services/pcb-design" },
  { keyword: "PCB assembly service India", cluster: "pcb-services", intent: "commercial", priority: "P0", primaryUrl: "/services/pcb-design", location: "india" },
  { keyword: "robotics PCB design", cluster: "pcb-services", intent: "commercial", priority: "P1", primaryUrl: "/services/pcb-design" },
  { keyword: "custom circuit board design Coimbatore", cluster: "pcb-services", intent: "local", priority: "P1", primaryUrl: "/services/pcb-design", location: "coimbatore" },
  { keyword: "PCBA prototyping service", cluster: "pcb-services", intent: "commercial", priority: "P1", primaryUrl: "/services/pcb-design" },
  { keyword: "SMD PCB assembly service Coimbatore", cluster: "pcb-services", intent: "local", priority: "P1", primaryUrl: "/services/pcb-design", location: "coimbatore" },
  { keyword: "turnkey PCB assembly India", cluster: "pcb-services", intent: "commercial", priority: "P1", primaryUrl: "/services/pcb-design", location: "india" },
  { keyword: "multilayer PCB design service", cluster: "pcb-services", intent: "commercial", priority: "P1", primaryUrl: "/services/pcb-design" },

  // Robotics & Automation Services
  { keyword: "robotics automation company", cluster: "robotics-automation-services", intent: "commercial", priority: "P0", primaryUrl: "/services/robotics-automation" },
  { keyword: "robotics automation services", cluster: "robotics-automation-services", intent: "commercial", priority: "P0", primaryUrl: "/services/robotics-automation" },
  { keyword: "custom robotics solutions", cluster: "robotics-automation-services", intent: "commercial", priority: "P1", primaryUrl: "/services/robotics-automation" },
  { keyword: "custom robot development company", cluster: "robotics-automation-services", intent: "commercial", priority: "P1", primaryUrl: "/services/robotics-automation" },
  { keyword: "robotics engineering services Coimbatore", cluster: "robotics-automation-services", intent: "local", priority: "P1", primaryUrl: "/services/robotics-automation", location: "coimbatore" },
  { keyword: "robot arm integration service", cluster: "robotics-automation-services", intent: "commercial", priority: "P1", primaryUrl: "/services/robotics-automation" },
  { keyword: "automated guided vehicle AGV development", cluster: "robotics-automation-services", intent: "commercial", priority: "P1", primaryUrl: "/services/robotics-automation" },
  { keyword: "custom gripper design robotics", cluster: "robotics-automation-services", intent: "commercial", priority: "P2", primaryUrl: "/services/robotics-automation" },

  // Industrial Automation
  { keyword: "industrial automation company", cluster: "industrial-automation-services", intent: "commercial", priority: "P0", primaryUrl: "/services/industrial-automation" },
  { keyword: "industrial automation Coimbatore", cluster: "industrial-automation-services", intent: "local", priority: "P0", primaryUrl: "/services/industrial-automation", location: "coimbatore" },
  { keyword: "industrial automation services India", cluster: "industrial-automation-services", intent: "commercial", priority: "P0", primaryUrl: "/services/industrial-automation", location: "india" },
  { keyword: "PLC automation company", cluster: "industrial-automation-services", intent: "commercial", priority: "P1", primaryUrl: "/services/industrial-automation" },
  { keyword: "PLC programming services Coimbatore", cluster: "industrial-automation-services", intent: "local", priority: "P1", primaryUrl: "/services/industrial-automation", location: "coimbatore" },
  { keyword: "SCADA automation company", cluster: "industrial-automation-services", intent: "commercial", priority: "P1", primaryUrl: "/services/industrial-automation" },
  { keyword: "SCADA systems integration Coimbatore", cluster: "industrial-automation-services", intent: "local", priority: "P1", primaryUrl: "/services/industrial-automation", location: "coimbatore" },
  { keyword: "industrial control panel manufacturing Coimbatore", cluster: "industrial-automation-services", intent: "local", priority: "P1", primaryUrl: "/services/industrial-automation", location: "coimbatore" },
  { keyword: "factory automation solutions", cluster: "industrial-automation-services", intent: "commercial", priority: "P1", primaryUrl: "/services/industrial-automation" },
  { keyword: "machine automation services Coimbatore", cluster: "industrial-automation-services", intent: "local", priority: "P1", primaryUrl: "/services/industrial-automation", location: "coimbatore" },

  // Embedded & IoT
  { keyword: "embedded systems development service", cluster: "embedded-iot-services", intent: "commercial", priority: "P1", primaryUrl: "/services/embedded-iot" },
  { keyword: "embedded software development Coimbatore", cluster: "embedded-iot-services", intent: "local", priority: "P1", primaryUrl: "/services/embedded-iot", location: "coimbatore" },
  { keyword: "IoT solutions company", cluster: "embedded-iot-services", intent: "commercial", priority: "P1", primaryUrl: "/services/embedded-iot" },
  { keyword: "IoT hardware prototyping Coimbatore", cluster: "embedded-iot-services", intent: "local", priority: "P1", primaryUrl: "/services/embedded-iot", location: "coimbatore" },
  { keyword: "industrial IoT sensor integration", cluster: "embedded-iot-services", intent: "commercial", priority: "P1", primaryUrl: "/services/embedded-iot" },
  { keyword: "smart telemetry system development", cluster: "embedded-iot-services", intent: "commercial", priority: "P2", primaryUrl: "/services/embedded-iot" },
  { keyword: "firmware development services India", cluster: "embedded-iot-services", intent: "commercial", priority: "P1", primaryUrl: "/services/embedded-iot", location: "india" },

  // AI & Vision
  { keyword: "AI computer vision services", cluster: "ai-vision-services", intent: "commercial", priority: "P1", primaryUrl: "/services/ai-vision" },
  { keyword: "machine vision inspection Coimbatore", cluster: "ai-vision-services", intent: "local", priority: "P1", primaryUrl: "/services/ai-vision", location: "coimbatore" },
  { keyword: "industrial computer vision systems", cluster: "ai-vision-services", intent: "commercial", priority: "P1", primaryUrl: "/services/ai-vision" },
  { keyword: "automated defect detection camera system", cluster: "ai-vision-services", intent: "commercial", priority: "P1", primaryUrl: "/services/ai-vision" },
  { keyword: "robotics AI vision integration", cluster: "ai-vision-services", intent: "commercial", priority: "P1", primaryUrl: "/services/ai-vision" },
  { keyword: "optical sorting automation India", cluster: "ai-vision-services", intent: "commercial", priority: "P2", primaryUrl: "/services/ai-vision", location: "india" },

  // STEM Lab Setup & R&D Services
  { keyword: "STEM lab setup service", cluster: "stem-lab-services", intent: "commercial", priority: "P0", primaryUrl: "/services/stem-lab-setup" },
  { keyword: "STEM lab setup Coimbatore", cluster: "stem-lab-services", intent: "local", priority: "P1", primaryUrl: "/services/stem-lab-setup", location: "coimbatore" },
  { keyword: "robotics lab setup turnkey solutions", cluster: "stem-lab-services", intent: "commercial", priority: "P0", primaryUrl: "/services/stem-lab-setup" },
  { keyword: "robotics lab setup Tamil Nadu", cluster: "stem-lab-services", intent: "local", priority: "P1", primaryUrl: "/services/stem-lab-setup", location: "tamil-nadu" },
  { keyword: "engineering R&D services", cluster: "rd-services", intent: "commercial", priority: "P1", primaryUrl: "/services/engineering-rd" },
  { keyword: "hardware product engineering Coimbatore", cluster: "rd-services", intent: "local", priority: "P1", primaryUrl: "/services/engineering-rd", location: "coimbatore" },
  { keyword: "proof of concept development robotics", cluster: "rd-services", intent: "commercial", priority: "P1", primaryUrl: "/services/engineering-rd" },
  { keyword: "mechatronics prototyping consultancy", cluster: "rd-services", intent: "commercial", priority: "P1", primaryUrl: "/services/engineering-rd" },
  { keyword: "electro mechanical design services India", cluster: "rd-services", intent: "commercial", priority: "P1", primaryUrl: "/services/engineering-rd", location: "india" }
];

serviceKeywords.forEach(item => {
  addKeyword({
    keyword: item.keyword,
    cluster: item.cluster,
    intent: item.intent || 'commercial',
    keywordType: 'service',
    audience: 'b2b-industries',
    businessValue: 'very-high',
    priority: item.priority || 'P1',
    primaryUrl: item.primaryUrl,
    contentType: 'service',
    location: item.location || 'global',
    commercialIntent: true,
    status: 'mapped',
    scoring: { businessValue: 10, searchIntentStrength: 9, productRelevance: 9, conversionPotential: 9, authorityPotential: 9 }
  });
});

// ─────────────────────────────────────────────────────────────
// 11. B2B SOLUTIONS KEYWORDS (Target: 50+)
// ─────────────────────────────────────────────────────────────
const b2bKeywords = [
  { keyword: "industrial robotics", cluster: "b2b-solutions", intent: "commercial", priority: "P1", primaryUrl: "/solutions/industries" },
  { keyword: "robotics solutions for industries", cluster: "b2b-solutions", intent: "commercial", priority: "P0", primaryUrl: "/solutions/industries" },
  { keyword: "robotics system integration Coimbatore", cluster: "b2b-solutions", intent: "local", priority: "P0", primaryUrl: "/solutions/industries", location: "coimbatore" },
  { keyword: "factory automation company Coimbatore", cluster: "b2b-solutions", intent: "local", priority: "P1", primaryUrl: "/solutions/industries", location: "coimbatore" },
  { keyword: "custom machinery automation", cluster: "b2b-solutions", intent: "commercial", priority: "P1", primaryUrl: "/solutions/industries" },
  { keyword: "special purpose machine automation Coimbatore", cluster: "b2b-solutions", intent: "local", priority: "P1", primaryUrl: "/solutions/industries", location: "coimbatore" },
  { keyword: "warehouse automation robotics India", cluster: "b2b-solutions", intent: "commercial", priority: "P1", primaryUrl: "/solutions/industries", location: "india" },
  { keyword: "material handling robotics system", cluster: "b2b-solutions", intent: "commercial", priority: "P1", primaryUrl: "/solutions/industries" },
  { keyword: "assembly line automation robotics", cluster: "b2b-solutions", intent: "commercial", priority: "P1", primaryUrl: "/solutions/industries" },
  { keyword: "packaging automation machine vision", cluster: "b2b-solutions", intent: "commercial", priority: "P1", primaryUrl: "/solutions/industries" },
  { keyword: "B2B robotics solutions India", cluster: "b2b-solutions", intent: "commercial", priority: "P0", primaryUrl: "/solutions/industries", location: "india" },
  { keyword: "robotics system integrator India", cluster: "b2b-solutions", intent: "commercial", priority: "P0", primaryUrl: "/solutions/industries", location: "india" },
  { keyword: "industrial robotics Coimbatore", cluster: "b2b-solutions", intent: "local", priority: "P1", primaryUrl: "/solutions/industries", location: "coimbatore" },
  { keyword: "automation engineering company India", cluster: "b2b-solutions", intent: "commercial", priority: "P1", primaryUrl: "/solutions/industries", location: "india" },
  { keyword: "hardware prototyping for startups", cluster: "b2b-solutions", intent: "commercial", priority: "P0", primaryUrl: "/solutions/startups" },
  { keyword: "startup hardware incubator Coimbatore", cluster: "b2b-solutions", intent: "local", priority: "P1", primaryUrl: "/solutions/startups", location: "coimbatore" },
  { keyword: "hardware product engineering startup support", cluster: "b2b-solutions", intent: "commercial", priority: "P1", primaryUrl: "/solutions/startups" },
  { keyword: "turnkey hardware development for startups", cluster: "b2b-solutions", intent: "commercial", priority: "P1", primaryUrl: "/solutions/startups" },
  { keyword: "rapid prototyping lab for startups", cluster: "b2b-solutions", intent: "commercial", priority: "P1", primaryUrl: "/solutions/startups" },
  { keyword: "makerspace and prototyping lab Coimbatore", cluster: "b2b-solutions", intent: "local", priority: "P1", primaryUrl: "/solutions/students-makers", location: "coimbatore" },
  { keyword: "maker lab robotics solutions", cluster: "b2b-solutions", intent: "commercial", priority: "P2", primaryUrl: "/solutions/students-makers" },
  { keyword: "student hardware prototyping center", cluster: "b2b-solutions", intent: "commercial", priority: "P1", primaryUrl: "/solutions/students-makers" },
  { keyword: "industrial IoT gateway manufacturer India", cluster: "b2b-solutions", intent: "commercial", priority: "P1", primaryUrl: "/solutions/industries", location: "india" },
  { keyword: "textile mill automation Coimbatore", cluster: "b2b-solutions", intent: "local", priority: "P1", primaryUrl: "/solutions/industries", location: "coimbatore" },
  { keyword: "foundry automation robotics Coimbatore", cluster: "b2b-solutions", intent: "local", priority: "P1", primaryUrl: "/solutions/industries", location: "coimbatore" },
  { keyword: "pump manufacturing automated testing Coimbatore", cluster: "b2b-solutions", intent: "local", priority: "P1", primaryUrl: "/solutions/industries", location: "coimbatore" },
  { keyword: "automotive component inspection system Tamil Nadu", cluster: "b2b-solutions", intent: "local", priority: "P1", primaryUrl: "/solutions/industries", location: "tamil-nadu" },
  { keyword: "industrial pick and place robot system", cluster: "b2b-solutions", intent: "commercial", priority: "P1", primaryUrl: "/solutions/industries" },
  { keyword: "automated guided cart AGC supplier India", cluster: "b2b-solutions", intent: "commercial", priority: "P1", primaryUrl: "/solutions/industries", location: "india" },
  { keyword: "collaborative robot cobot integrator Coimbatore", cluster: "b2b-solutions", intent: "local", priority: "P1", primaryUrl: "/solutions/industries", location: "coimbatore" },
  { keyword: "custom test rig development company", cluster: "b2b-solutions", intent: "commercial", priority: "P1", primaryUrl: "/services/engineering-rd" },
  { keyword: "mechatronics contract manufacturing India", cluster: "b2b-solutions", intent: "commercial", priority: "P1", primaryUrl: "/services/engineering-rd", location: "india" },
  { keyword: "industrial automation consultants Tamil Nadu", cluster: "b2b-solutions", intent: "local", priority: "P1", primaryUrl: "/solutions/industries", location: "tamil-nadu" },
  { keyword: "smart factory solutions India", cluster: "b2b-solutions", intent: "commercial", priority: "P1", primaryUrl: "/solutions/industries", location: "india" },
  { keyword: "Industry 4.0 solutions Coimbatore", cluster: "b2b-solutions", intent: "local", priority: "P1", primaryUrl: "/solutions/industries", location: "coimbatore" },
  { keyword: "SCADA integration for manufacturing plants", cluster: "b2b-solutions", intent: "commercial", priority: "P1", primaryUrl: "/solutions/industries" },
  { keyword: "robotics production line retrofit", cluster: "b2b-solutions", intent: "commercial", priority: "P1", primaryUrl: "/solutions/industries" },
  { keyword: "industrial automation panel builders Coimbatore", cluster: "b2b-solutions", intent: "local", priority: "P1", primaryUrl: "/services/industrial-automation", location: "coimbatore" },
  { keyword: "startup hardware MVP development India", cluster: "b2b-solutions", intent: "commercial", priority: "P1", primaryUrl: "/solutions/startups", location: "india" },
  { keyword: "hardware engineering partner for tech startups", cluster: "b2b-solutions", intent: "commercial", priority: "P1", primaryUrl: "/solutions/startups" },
  { keyword: "electronic product commercialization India", cluster: "b2b-solutions", intent: "commercial", priority: "P1", primaryUrl: "/solutions/startups", location: "india" },
  { keyword: "DFM design for manufacturing electronics India", cluster: "b2b-solutions", intent: "commercial", priority: "P1", primaryUrl: "/solutions/startups", location: "india" },
  { keyword: "IoT hardware accelerator Tamil Nadu", cluster: "b2b-solutions", intent: "local", priority: "P2", primaryUrl: "/solutions/startups", location: "tamil-nadu" },
  { keyword: "embedded hardware partner for innovators", cluster: "b2b-solutions", intent: "commercial", priority: "P2", primaryUrl: "/solutions/startups" },
  { keyword: "industrial automation maintenance contract Coimbatore", cluster: "b2b-solutions", intent: "local", priority: "P2", primaryUrl: "/solutions/industries", location: "coimbatore" },
  { keyword: "PLC retrofit and upgrade service", cluster: "b2b-solutions", intent: "commercial", priority: "P2", primaryUrl: "/services/industrial-automation" },
  { keyword: "industrial robotic welding system integrator", cluster: "b2b-solutions", intent: "commercial", priority: "P2", primaryUrl: "/solutions/industries" },
  { keyword: "custom conveyor automation system", cluster: "b2b-solutions", intent: "commercial", priority: "P2", primaryUrl: "/solutions/industries" },
  { keyword: "end of arm tooling EOAT design", cluster: "b2b-solutions", intent: "commercial", priority: "P2", primaryUrl: "/solutions/industries" },
  { keyword: "industrial automation project execution Coimbatore", cluster: "b2b-solutions", intent: "local", priority: "P1", primaryUrl: "/solutions/industries", location: "coimbatore" }
];

b2bKeywords.forEach(item => {
  addKeyword({
    keyword: item.keyword,
    cluster: item.cluster,
    intent: item.intent || 'commercial',
    keywordType: 'solution',
    audience: item.keyword.includes('startup') ? 'b2b-industries' : item.keyword.includes('student') || item.keyword.includes('maker') ? 'students-colleges' : 'b2b-industries',
    businessValue: 'very-high',
    priority: item.priority || 'P1',
    primaryUrl: item.primaryUrl,
    contentType: item.primaryUrl.startsWith('/services') ? 'service' : 'solution',
    location: item.location || 'global',
    commercialIntent: true,
    status: 'mapped',
    scoring: { businessValue: 10, searchIntentStrength: 9, productRelevance: 9, conversionPotential: 9, authorityPotential: 9 }
  });
});

// ─────────────────────────────────────────────────────────────
// 12. ENGINEERING PROJECTS & PROTOTYPING (Target: 40+)
// ─────────────────────────────────────────────────────────────
const projectKeywords = [
  { keyword: "robotics project", cluster: "robotics-projects", intent: "informational", priority: "P1", primaryUrl: "/projects" },
  { keyword: "robotics projects", cluster: "robotics-projects", intent: "informational", priority: "P1", primaryUrl: "/projects" },
  { keyword: "engineering robotics projects", cluster: "robotics-projects", intent: "commercial", priority: "P0", primaryUrl: "/projects" },
  { keyword: "engineering project kits", cluster: "robotics-projects", intent: "commercial", priority: "P1", primaryUrl: "/products" },
  { keyword: "robotics project ideas", cluster: "robotics-projects", intent: "informational", priority: "P1", primaryUrl: "/projects" },
  { keyword: "robotics projects for students", cluster: "robotics-projects", intent: "commercial", priority: "P1", primaryUrl: "/projects" },
  { keyword: "robotics projects for college", cluster: "robotics-projects", intent: "commercial", priority: "P1", primaryUrl: "/projects" },
  { keyword: "automation projects", cluster: "robotics-projects", intent: "informational", priority: "P1", primaryUrl: "/projects" },
  { keyword: "industrial automation projects", cluster: "robotics-projects", intent: "commercial", priority: "P1", primaryUrl: "/projects" },
  { keyword: "AI robotics projects", cluster: "robotics-projects", intent: "informational", priority: "P1", primaryUrl: "/projects" },
  { keyword: "computer vision robotics projects", cluster: "robotics-projects", intent: "informational", priority: "P1", primaryUrl: "/projects" },
  { keyword: "embedded robotics projects", cluster: "robotics-projects", intent: "commercial", priority: "P1", primaryUrl: "/projects" },
  { keyword: "robotics project topics", cluster: "robotics-projects", intent: "informational", priority: "P1", primaryUrl: "/projects" },
  { keyword: "robotics project concepts", cluster: "robotics-projects", intent: "informational", priority: "P2", primaryUrl: "/projects" },
  { keyword: "college robotics projects", cluster: "robotics-projects", intent: "commercial", priority: "P1", primaryUrl: "/projects" },
  { keyword: "school robotics projects", cluster: "robotics-projects", intent: "educational", priority: "P2", primaryUrl: "/projects" },
  { keyword: "engineering project development", cluster: "robotics-projects", intent: "commercial", priority: "P1", primaryUrl: "/services/engineering-rd" },
  { keyword: "final year robotics projects ECE", cluster: "robotics-projects", intent: "commercial", priority: "P1", primaryUrl: "/projects" },
  { keyword: "final year robotics projects Mechanical", cluster: "robotics-projects", intent: "commercial", priority: "P1", primaryUrl: "/projects" },
  { keyword: "final year robotics projects Mechatronics", cluster: "robotics-projects", intent: "commercial", priority: "P0", primaryUrl: "/projects" },
  { keyword: "IoT based robotics project ideas", cluster: "robotics-projects", intent: "informational", priority: "P2", primaryUrl: "/projects" },
  { keyword: "ROS robot operating system projects", cluster: "robotics-projects", intent: "informational", priority: "P2", primaryUrl: "/projects" },
  { keyword: "autonomous mobile robot AMR project", cluster: "robotics-projects", intent: "commercial", priority: "P1", primaryUrl: "/projects" },
  { keyword: "surveillance robot project with camera", cluster: "robotics-projects", intent: "informational", priority: "P2", primaryUrl: "/projects" },
  { keyword: "robotic arm project 4 DOF", cluster: "robotics-projects", intent: "informational", priority: "P2", primaryUrl: "/projects" },
  { keyword: "obstacle avoidance robot project", cluster: "robotics-projects", intent: "educational", priority: "P2", primaryUrl: "/projects" },
  { keyword: "fire fighting robot project", cluster: "robotics-projects", intent: "educational", priority: "P2", primaryUrl: "/projects" },
  { keyword: "Bluetooth controlled robot project", cluster: "robotics-projects", intent: "educational", priority: "P2", primaryUrl: "/projects" },
  { keyword: "voice controlled robot project", cluster: "robotics-projects", intent: "educational", priority: "P2", primaryUrl: "/projects" },
  { keyword: "agricultural robot project India", cluster: "robotics-projects", intent: "informational", priority: "P2", primaryUrl: "/projects", location: "india" },
  { keyword: "drone project for engineering students", cluster: "robotics-projects", intent: "commercial", priority: "P1", primaryUrl: "/projects" },
  { keyword: "biped walking robot project", cluster: "robotics-projects", intent: "informational", priority: "P2", primaryUrl: "/projects" },
  { keyword: "cleaner robot project Arduino", cluster: "robotics-projects", intent: "educational", priority: "P2", primaryUrl: "/projects" },
  { keyword: "mini project in robotics", cluster: "robotics-projects", intent: "educational", priority: "P2", primaryUrl: "/projects" },
  { keyword: "diploma robotics projects", cluster: "robotics-projects", intent: "commercial", priority: "P2", primaryUrl: "/projects" },
  { keyword: "engineering project guidance Coimbatore", cluster: "robotics-projects", intent: "local", priority: "P1", primaryUrl: "/projects", location: "coimbatore" },
  { keyword: "hardware project center Coimbatore", cluster: "robotics-projects", intent: "local", priority: "P1", primaryUrl: "/projects", location: "coimbatore" },
  { keyword: "embedded project training center Coimbatore", cluster: "robotics-projects", intent: "local", priority: "P1", primaryUrl: "/projects", location: "coimbatore" },
  { keyword: "custom robotics project consultancy", cluster: "robotics-projects", intent: "commercial", priority: "P1", primaryUrl: "/services/engineering-rd" },
  { keyword: "mechatronics final year project kits", cluster: "robotics-projects", intent: "commercial", priority: "P1", primaryUrl: "/projects" },
  { keyword: "innovative robotics project topics 2026", cluster: "robotics-projects", intent: "informational", priority: "P2", primaryUrl: "/projects" }
];

projectKeywords.forEach(item => {
  addKeyword({
    keyword: item.keyword,
    cluster: item.cluster,
    intent: item.intent || 'informational',
    keywordType: 'project',
    audience: 'students-colleges',
    businessValue: 'high',
    priority: item.priority || 'P1',
    primaryUrl: item.primaryUrl,
    contentType: item.primaryUrl.startsWith('/services') ? 'service' : 'project',
    location: item.location || 'global',
    commercialIntent: item.intent === 'commercial' || item.intent === 'local',
    status: 'mapped',
    scoring: { businessValue: 8, searchIntentStrength: 8, productRelevance: 8, conversionPotential: 8, authorityPotential: 8 }
  });
});

// ─────────────────────────────────────────────────────────────
// 13. GEOGRAPHIC & REGIONAL INTENT (Target: 30+)
// ─────────────────────────────────────────────────────────────
const geoKeywords = [
  { keyword: "robotics company Coimbatore", cluster: "local-intent", intent: "local", priority: "P0", primaryUrl: "/", location: "coimbatore" },
  { keyword: "robotics training Coimbatore", cluster: "local-intent", intent: "local", priority: "P0", primaryUrl: "/learn/engineering-students", location: "coimbatore" },
  { keyword: "robotics kit supplier Coimbatore", cluster: "local-intent", intent: "local", priority: "P0", primaryUrl: "/products", location: "coimbatore" },
  { keyword: "robotics products Coimbatore", cluster: "local-intent", intent: "local", priority: "P0", primaryUrl: "/products", location: "coimbatore" },
  { keyword: "robotics competition Coimbatore", cluster: "local-intent", intent: "local", priority: "P1", primaryUrl: "/events", location: "coimbatore" },
  { keyword: "3d printing Coimbatore", cluster: "local-intent", intent: "local", priority: "P0", primaryUrl: "/services/3d-printing", location: "coimbatore" },
  { keyword: "laser cutting Coimbatore", cluster: "local-intent", intent: "local", priority: "P0", primaryUrl: "/services/laser-cutting", location: "coimbatore" },
  { keyword: "PCB design Coimbatore", cluster: "local-intent", intent: "local", priority: "P0", primaryUrl: "/services/pcb-design", location: "coimbatore" },
  { keyword: "industrial automation Coimbatore", cluster: "local-intent", intent: "local", priority: "P0", primaryUrl: "/services/industrial-automation", location: "coimbatore" },
  { keyword: "STEM lab Coimbatore", cluster: "local-intent", intent: "local", priority: "P1", primaryUrl: "/solutions/schools", location: "coimbatore" },
  { keyword: "robotics lab setup Coimbatore", cluster: "local-intent", intent: "local", priority: "P1", primaryUrl: "/solutions/schools", location: "coimbatore" },
  { keyword: "robotics classes Coimbatore", cluster: "local-intent", intent: "local", priority: "P1", primaryUrl: "/learn/school-students", location: "coimbatore" },
  { keyword: "robotics workshop Coimbatore", cluster: "local-intent", intent: "local", priority: "P1", primaryUrl: "/learn/engineering-students", location: "coimbatore" },
  { keyword: "robotics events Coimbatore", cluster: "local-intent", intent: "local", priority: "P1", primaryUrl: "/events", location: "coimbatore" },
  { keyword: "robotics events Tamil Nadu", cluster: "local-intent", intent: "local", priority: "P1", primaryUrl: "/events", location: "tamil-nadu" },
  { keyword: "robotics company Tamil Nadu", cluster: "local-intent", intent: "local", priority: "P0", primaryUrl: "/", location: "tamil-nadu" },
  { keyword: "robotics kit supplier Tamil Nadu", cluster: "local-intent", intent: "local", priority: "P1", primaryUrl: "/products", location: "tamil-nadu" },
  { keyword: "robotics training Tamil Nadu", cluster: "local-intent", intent: "local", priority: "P1", primaryUrl: "/learn/engineering-students", location: "tamil-nadu" },
  { keyword: "STEM robotics Tamil Nadu", cluster: "local-intent", intent: "local", priority: "P1", primaryUrl: "/solutions/schools", location: "tamil-nadu" },
  { keyword: "industrial automation Tamil Nadu", cluster: "local-intent", intent: "local", priority: "P1", primaryUrl: "/services/industrial-automation", location: "tamil-nadu" },
  { keyword: "robotics company Chennai", cluster: "local-intent", intent: "local", priority: "P2", primaryUrl: "/", location: "tamil-nadu" },
  { keyword: "robotics kit supplier Chennai", cluster: "local-intent", intent: "local", priority: "P2", primaryUrl: "/products", location: "tamil-nadu" },
  { keyword: "robotics training Chennai", cluster: "local-intent", intent: "local", priority: "P2", primaryUrl: "/learn/engineering-students", location: "tamil-nadu" },
  { keyword: "robotics company Bangalore", cluster: "local-intent", intent: "local", priority: "P2", primaryUrl: "/", location: "india" },
  { keyword: "robotics kit supplier Bangalore", cluster: "local-intent", intent: "local", priority: "P2", primaryUrl: "/products", location: "india" },
  { keyword: "robotics training Bangalore", cluster: "local-intent", intent: "local", priority: "P2", primaryUrl: "/learn/engineering-students", location: "india" },
  { keyword: "robotics company Madurai", cluster: "local-intent", intent: "local", priority: "P2", primaryUrl: "/", location: "tamil-nadu" },
  { keyword: "robotics training Madurai", cluster: "local-intent", intent: "local", priority: "P2", primaryUrl: "/learn/engineering-students", location: "tamil-nadu" },
  { keyword: "robotics company Trichy", cluster: "local-intent", intent: "local", priority: "P2", primaryUrl: "/", location: "tamil-nadu" },
  { keyword: "robotics training Trichy", cluster: "local-intent", intent: "local", priority: "P2", primaryUrl: "/learn/engineering-students", location: "tamil-nadu" },
  { keyword: "robotics company Salem", cluster: "local-intent", intent: "local", priority: "P2", primaryUrl: "/", location: "tamil-nadu" },
  { keyword: "robotics training Salem", cluster: "local-intent", intent: "local", priority: "P2", primaryUrl: "/learn/engineering-students", location: "tamil-nadu" },
  { keyword: "robotics company Hyderabad", cluster: "local-intent", intent: "local", priority: "P2", primaryUrl: "/", location: "india" },
  { keyword: "robotics company Mumbai", cluster: "local-intent", intent: "local", priority: "P2", primaryUrl: "/", location: "india" }
];

geoKeywords.forEach(item => {
  addKeyword({
    keyword: item.keyword,
    cluster: item.cluster,
    intent: 'local',
    keywordType: item.keyword.includes('training') ? 'solution' : item.keyword.includes('company') ? 'company' : item.keyword.includes('kit') || item.keyword.includes('product') ? 'product' : 'service',
    audience: 'general',
    businessValue: item.priority === 'P0' ? 'very-high' : 'high',
    priority: item.priority || 'P1',
    primaryUrl: item.primaryUrl,
    contentType: item.primaryUrl === '/' ? 'homepage' : item.primaryUrl.startsWith('/products') ? 'product' : item.primaryUrl.startsWith('/services') ? 'service' : 'solution',
    location: item.location || 'coimbatore',
    commercialIntent: true,
    status: 'mapped',
    scoring: { businessValue: 9, searchIntentStrength: 9, productRelevance: 9, conversionPotential: 9, authorityPotential: 9 }
  });
});

// ─────────────────────────────────────────────────────────────
// 14. AEO CONVERSATIONAL QUESTIONS (Target: 80+)
// ─────────────────────────────────────────────────────────────
const questionKeywords = [
  {
    keyword: "What is a robo soccer robot?",
    cluster: "aeo-questions",
    primaryUrl: "/events/competition/robo-soccer",
    aeoQuickAnswer: "A robo soccer robot is an RC or autonomous wheeled vehicle engineered for competitive soccer matches, equipped with speed-tuned geared motors, durable high-traction wheels, and active pneumatic or mechanical kicking/dribbling mechanisms."
  },
  {
    keyword: "What is a robo race robot?",
    cluster: "aeo-questions",
    primaryUrl: "/events/competition/robo-race",
    aeoQuickAnswer: "A robo race robot is a high-speed, multi-terrain RC vehicle designed to navigate obstacle-laden tracks, steep ramps, sand pits, and sharp turns at maximum velocity with precision 2.4GHz proportional steering."
  },
  {
    keyword: "How does a line follower robot work?",
    cluster: "aeo-questions",
    primaryUrl: "/events/competition/line-follower",
    aeoQuickAnswer: "A line follower robot detects a contrasting line (typically white on black or black on white) using downward-facing infrared (IR) sensor arrays and uses a PID feedback control algorithm to steer motors smoothly along the trajectory."
  },
  {
    keyword: "What is a robotics competition kit?",
    cluster: "aeo-questions",
    primaryUrl: "/products/competition",
    aeoQuickAnswer: "A robotics competition kit contains high-specification chassis components, tuned geared DC motors, competition-grade wheels, motor drivers, and control systems designed to meet official collegiate tournament technical rules."
  },
  {
    keyword: "What components are needed for a robo race robot?",
    cluster: "aeo-questions",
    primaryUrl: "/events/competition/robo-race",
    aeoQuickAnswer: "Key components for a robo race robot include a durable aluminum or acrylic chassis, four high-RPM geared DC motors (e.g. 600RPM), high-grip buggy wheels (100mm–112mm), a high-current dual motor driver, a 3S LiPo battery, and a multi-channel 2.4GHz transmitter-receiver pair."
  },
  {
    keyword: "What motor is used in a line follower robot?",
    cluster: "aeo-questions",
    primaryUrl: "/products/competition/ttrc-lf-5-0",
    aeoQuickAnswer: "High-performance competition line followers use high-RPM coreless or precision micro-metal geared DC motors (ranging from 600RPM to 1000RPM) paired with lightweight aluminum silicone wheels for lightning-fast responsiveness."
  },
  {
    keyword: "How do you prepare for a robotics competition?",
    cluster: "aeo-questions",
    primaryUrl: "/events/competition/general-robotics",
    aeoQuickAnswer: "Preparation involves thoroughly analyzing the tournament rulebook, designing a CAD model within dimension and weight restrictions, selecting matched motors and batteries, programming robust fail-safes, and extensive track-testing."
  },
  {
    keyword: "What is STEM robotics?",
    cluster: "aeo-questions",
    primaryUrl: "/learn/school-students",
    aeoQuickAnswer: "STEM robotics integrates Science, Technology, Engineering, and Mathematics through hands-on robot construction, electronics wiring, and algorithm coding to foster critical thinking and practical problem-solving skills."
  },
  {
    keyword: "What is a robotics lab?",
    cluster: "aeo-questions",
    primaryUrl: "/solutions/schools",
    aeoQuickAnswer: "A robotics lab is a specialized learning environment equipped with microcontrollers, sensor workstations, modular mechanical kits, rapid prototyping tools (3D printers, laser cutters), and test arenas for robotic experimentation."
  },
  {
    keyword: "What is a PLC automation system?",
    cluster: "aeo-questions",
    primaryUrl: "/services/industrial-automation",
    aeoQuickAnswer: "A Programmable Logic Controller (PLC) automation system is an industrial-grade digital computer designed to reliably automate electro-mechanical manufacturing processes, packaging lines, and machinery under demanding industrial conditions."
  },
  {
    keyword: "How does 3D printing help robotics?",
    cluster: "aeo-questions",
    primaryUrl: "/services/3d-printing",
    aeoQuickAnswer: "3D printing allows robotics engineers to fabricate lightweight, custom robot chassis, complex motor mounts, custom gearboxes, and aerodynamic sensor housings rapidly with zero tooling costs."
  },
  {
    keyword: "What is PCB assembly?",
    cluster: "aeo-questions",
    primaryUrl: "/services/pcb-design",
    aeoQuickAnswer: "Printed Circuit Board Assembly (PCBA) is the process of soldering electronic components (surface mount SMD and through-hole) onto a bare PCB to create a functional robotic controller board."
  },
  {
    keyword: "What is the difference between 300RPM and 600RPM motors?",
    cluster: "aeo-questions",
    primaryUrl: "/products/robotics-components/ttrc-dgj-300rpm",
    aeoQuickAnswer: "A 300RPM motor provides higher stall torque and pulling power ideal for heavy-load robo soccer pushing and climbing, while a 600RPM motor provides greater linear velocity ideal for high-speed robo race track performance."
  },
  {
    keyword: "What is a PID controller in robotics?",
    cluster: "aeo-questions",
    primaryUrl: "/events/competition/line-follower",
    aeoQuickAnswer: "A PID (Proportional-Integral-Derivative) controller continuously calculates an error value between a desired setpoint and a measured variable, applying corrections to motor speeds to ensure smooth, wobble-free line tracking."
  },
  {
    keyword: "What is the best motor driver for a robo soccer robot?",
    cluster: "aeo-questions",
    primaryUrl: "/products/competition/rc-robo-soccer",
    aeoQuickAnswer: "The best motor driver provides at least 10A to 20A continuous current per channel with MOSFET H-bridges, capable of handling peak stall currents during heavy pushing collisions without thermal shutdown."
  },
  {
    keyword: "How much does a line follower robot kit cost in India?",
    cluster: "aeo-questions",
    primaryUrl: "/products/competition/ttrc-lf-5-0",
    aeoQuickAnswer: "Competition-ready line follower kits in India typically range from ₹3,800 for unassembled chassis kits up to ₹4,800+ for pre-calibrated PID competition-grade systems with high-resolution sensor arrays."
  },
  {
    keyword: "What is the price of a robo soccer robot in India?",
    cluster: "aeo-questions",
    primaryUrl: "/products/competition/rc-robo-soccer",
    aeoQuickAnswer: "A ready-to-run competition robo soccer robot in India ranges from ₹7,999 for standard competition chassis configurations up to ₹20,999 for high-power tournament platforms with high-grade controllers and transmitters."
  },
  {
    keyword: "What is the price of a robo race robot kit in India?",
    cluster: "aeo-questions",
    primaryUrl: "/products/competition/rc-robo-race",
    aeoQuickAnswer: "A competition robo race robot kit in India ranges from ₹7,999 for entry competition setups to ₹20,999 for turnkey racing platforms featuring high-speed 600RPM motors and 112mm buggy wheels."
  },
  {
    keyword: "What frequency do competition RC robots use?",
    cluster: "aeo-questions",
    primaryUrl: "/products/radio-controllers",
    aeoQuickAnswer: "Competition RC robots operate on 2.4GHz frequency using frequency-hopping spread spectrum (AFHDS 2A) technology, preventing radio channel clashes when dozens of teams compete simultaneously in the arena."
  },
  {
    keyword: "What battery is best for competition robots?",
    cluster: "aeo-questions",
    primaryUrl: "/products/competition",
    aeoQuickAnswer: "3-cell (3S 11.1V) Lithium Polymer (LiPo) batteries with high discharge C-ratings (25C–45C) are the gold standard for competition robotics, offering unmatched power-to-weight density."
  },
  {
    keyword: "What is robo war combat robotics?",
    cluster: "aeo-questions",
    primaryUrl: "/events/competition/robo-war",
    aeoQuickAnswer: "Robo war is a combat robotics competition where armor-clad, wireless remote-controlled machines utilize active weapons (spinners, lifters, wedges) to immobilize opposing robots inside an enclosed safety arena."
  },
  {
    keyword: "What is robo sumo wrestling?",
    cluster: "aeo-questions",
    primaryUrl: "/events/competition/robo-sumo",
    aeoQuickAnswer: "Robo sumo pits two autonomous or RC robots against each other in a circular raised arena called a dohyo, with the objective of pushing the opponent out of bounds using superior traction and low-profile wedges."
  },
  {
    keyword: "What is a micromouse maze solver robot?",
    cluster: "aeo-questions",
    primaryUrl: "/events/competition/maze-solver",
    aeoQuickAnswer: "A micromouse is a compact autonomous robotic vehicle designed to explore, map, and navigate an unknown 16x16 grid maze from corner to center in the shortest recorded time using flood-fill algorithms."
  },
  {
    keyword: "How does an autonomous drone racing competition work?",
    cluster: "aeo-questions",
    primaryUrl: "/events/competition/drone-race",
    aeoQuickAnswer: "Autonomous drone racing requires unmanned aerial vehicles (UAVs) to fly through complex 3D gates at high speed using onboard vision sensors, optical flow, and flight algorithms without human pilot intervention."
  },
  {
    keyword: "What is ATL lab in schools?",
    cluster: "aeo-questions",
    primaryUrl: "/solutions/schools",
    aeoQuickAnswer: "Atal Tinkering Labs (ATL) are dedicated workspaces established in Indian schools under the Atal Innovation Mission (AIM) to foster scientific temper, tinkering, 3D printing, and robotics among grades 6 to 12."
  },
  {
    keyword: "How to setup a robotics lab in school?",
    cluster: "aeo-questions",
    primaryUrl: "/solutions/schools",
    aeoQuickAnswer: "Setting up a school robotics lab involves allocating a dedicated 800–1200 sq ft room, installing ergonomic workstations, procuring modular robotics and electronics kits, implementing safety protocols, and training instructors."
  },
  {
    keyword: "How much does a school robotics lab setup cost?",
    cluster: "aeo-questions",
    primaryUrl: "/solutions/schools",
    aeoQuickAnswer: "A comprehensive school robotics and STEM lab setup typically costs between ₹3,00,000 to ₹10,00,000+ in India depending on the number of student seats, 3D printing capabilities, and curriculum scope."
  },
  {
    keyword: "Why should engineering students learn robotics?",
    cluster: "aeo-questions",
    primaryUrl: "/learn/engineering-students",
    aeoQuickAnswer: "Learning robotics develops multi-disciplinary engineering competency spanning mechanical design, embedded firmware, PCB layout, control systems, and computer vision—skills critical for modern high-tech industries."
  },
  {
    keyword: "What is industrial robotics automation?",
    cluster: "aeo-questions",
    primaryUrl: "/services/industrial-automation",
    aeoQuickAnswer: "Industrial robotics automation deploys articulated robotic arms, SCARA bots, and automated mobile robots (AMRs) to automate repetitive factory tasks like welding, palletizing, assembly, and inspection with high precision."
  },
  {
    keyword: "What is rapid prototyping in robotics?",
    cluster: "aeo-questions",
    primaryUrl: "/services/engineering-rd",
    aeoQuickAnswer: "Rapid prototyping in robotics uses 3D printing, CNC machining, laser cutting, and fast-turnaround PCB fabrication to quickly iterate physical and electrical designs from concept to functional test unit in days."
  },
  {
    keyword: "What are buggy wheels used for in robotics?",
    cluster: "aeo-questions",
    primaryUrl: "/products/robotics-components/112mm-buggy-wheel",
    aeoQuickAnswer: "Buggy wheels with spiked or treaded rubber tyres provide high grip on rough surfaces, wooden ramps, sand, and smooth vinyl tracks, making them essential for competitive robo race and robo soccer robots."
  },
  {
    keyword: "How to choose wheels for a robo race robot?",
    cluster: "aeo-questions",
    primaryUrl: "/products/robotics-components/112mm-buggy-wheel",
    aeoQuickAnswer: "Choose wheels based on outer diameter (100mm–112mm for speed), tyre grip (soft compound rubber for traction on smooth and inclined surfaces), and sturdy 6mm hex brass shaft coupling to handle sudden accelerations."
  },
  {
    keyword: "What is a 2.4GHz RC transmitter used for?",
    cluster: "aeo-questions",
    primaryUrl: "/products/radio-controllers",
    aeoQuickAnswer: "A 2.4GHz RC transmitter transmits multichannel proportional radio signals to an onboard receiver, controlling motor speed, steering angles, and auxiliary robotic mechanisms with low latency up to 500+ meters."
  },
  {
    keyword: "How many channels are needed for a robo soccer robot?",
    cluster: "aeo-questions",
    primaryUrl: "/products/radio-controllers/flysky-fs-i6-2.4g-6ch",
    aeoQuickAnswer: "A robo soccer robot typically requires 4 to 6 channels: 2 channels for dual-stick forward/reverse and steering, 1 channel for the kicker mechanism, 1 for the dribbler motor, and optional auxiliary fail-safe switches."
  },
  {
    keyword: "Can a beginner build a line follower robot?",
    cluster: "aeo-questions",
    primaryUrl: "/events/competition/line-follower",
    aeoQuickAnswer: "Yes, beginners can start with a basic dual-sensor comparator line follower robot and gradually advance to 8-sensor PID arrays with microcontroller programming as their coding confidence grows."
  },
  {
    keyword: "What is computer vision in industrial automation?",
    cluster: "aeo-questions",
    primaryUrl: "/services/ai-vision",
    aeoQuickAnswer: "Industrial computer vision combines high-speed industrial cameras, optical lensing, and machine learning models to inspect parts for micro-defects, verify assembly tolerances, and guide robotic arms in real time."
  },
  {
    keyword: "What is SCADA used for in manufacturing?",
    cluster: "aeo-questions",
    primaryUrl: "/services/industrial-automation",
    aeoQuickAnswer: "SCADA (Supervisory Control and Data Acquisition) monitors and controls industrial plant operations, gathering real-time sensor data, logging production metrics, and presenting graphical control dashboards to operators."
  },
  {
    keyword: "What is the difference between autonomous and RC robots?",
    cluster: "aeo-questions",
    primaryUrl: "/events/competition/general-robotics",
    aeoQuickAnswer: "Autonomous robots make decisions independently using onboard sensors and programmed algorithms, whereas RC (Radio-Controlled) robots rely on real-time commands transmitted wirelessly by a human pilot."
  },
  {
    keyword: "Where can I buy robotics components in Coimbatore?",
    cluster: "aeo-questions",
    primaryUrl: "/products/robotics-components",
    aeoQuickAnswer: "Tamizh Tech Robotics Company in Coimbatore supplies authentic competition-grade DC motors, buggy wheels, RC transmitters, sensors, and chassis components with direct engineering support."
  },
  {
    keyword: "Where to get laser cutting for robot chassis in Coimbatore?",
    cluster: "aeo-questions",
    primaryUrl: "/services/laser-cutting",
    aeoQuickAnswer: "Tamizh Tech provides precision CNC laser cutting services in Coimbatore for acrylic, sheet metal, and wood with high-accuracy CAD-to-cut turnaround for custom robotic frames."
  },
  {
    keyword: "Where to get 3D printing service in Coimbatore for engineering projects?",
    cluster: "aeo-questions",
    primaryUrl: "/services/3d-printing",
    aeoQuickAnswer: "Tamizh Tech offers commercial FDM and SLA resin 3D printing services in Coimbatore, specializing in engineering-grade robotic parts, prototypes, and durable functional enclosures."
  },
  {
    keyword: "Where to get custom PCB design in Coimbatore?",
    cluster: "aeo-questions",
    primaryUrl: "/services/pcb-design",
    aeoQuickAnswer: "Tamizh Tech provides complete electronic schematic design, multi-layer PCB layout, gerber verification, and PCBA assembly services in Coimbatore for robotics and embedded IoT devices."
  },
  {
    keyword: "What is an AGV automated guided vehicle?",
    cluster: "aeo-questions",
    primaryUrl: "/services/robotics-automation",
    aeoQuickAnswer: "An Automated Guided Vehicle (AGV) is an industrial mobile robot that follows marked lines, magnetic tape, or optical navigation markers to transport heavy materials autonomously across factory floors."
  },
  {
    keyword: "What is an AMR autonomous mobile robot?",
    cluster: "aeo-questions",
    primaryUrl: "/services/robotics-automation",
    aeoQuickAnswer: "An Autonomous Mobile Robot (AMR) uses LiDAR sensors, cameras, and SLAM mapping algorithms to navigate dynamically around obstacles without requiring pre-laid physical magnetic tracks."
  },
  {
    keyword: "What is FlySky FS-i6 transmitter?",
    cluster: "aeo-questions",
    primaryUrl: "/products/radio-controllers/flysky-fs-i6-2.4g-6ch",
    aeoQuickAnswer: "The FlySky FS-i6 is an entry-level 6-channel 2.4GHz AFHDS proportional radio transmitter widely used by robotics teams, RC plane builders, and drone pilots for reliable wireless remote control."
  },
  {
    keyword: "What is FlySky FS-i6X transmitter?",
    cluster: "aeo-questions",
    primaryUrl: "/products/radio-controllers/flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver",
    aeoQuickAnswer: "The FlySky FS-i6X is an upgraded 10-channel 2.4GHz AFHDS 2A transmitter featuring digital proportional control, dual antennas, and advanced mixer options for complex multi-actuator competition robots."
  },
  {
    keyword: "What is The Boxing Bot?",
    cluster: "aeo-questions",
    primaryUrl: "/products/educational-robotics/boxing-bot",
    aeoQuickAnswer: "The Boxing Bot is an interactive educational fighting robotics kit engineered by Tamizh Tech, featuring dual pneumatic/mechanical punching arms for competitive gaming and STEM mechanics training."
  },
  {
    keyword: "What is the weight limit for robo soccer robots?",
    cluster: "aeo-questions",
    primaryUrl: "/events/competition/robo-soccer",
    aeoQuickAnswer: "Most collegiate robo soccer tournaments enforce weight limits typically between 3kg to 5kg, with strict dimensional boundaries (usually within 30cm x 30cm x 30cm) at the starting gate."
  },
  {
    keyword: "What is the weight limit for robo race robots?",
    cluster: "aeo-questions",
    primaryUrl: "/events/competition/robo-race",
    aeoQuickAnswer: "Standard collegiate robo race categories allow robot weights between 2kg and 5kg with maximum chassis widths around 30cm to ensure clearance through narrow obstacle gates and bridges."
  },
  {
    keyword: "What are the rules for line follower competition?",
    cluster: "aeo-questions",
    primaryUrl: "/events/competition/line-follower",
    aeoQuickAnswer: "Rules typically mandate autonomous operation, a maximum starting envelope of 20cm x 20cm x 15cm, no manual track contact during runs, and scoring based on shortest completion time with penalties for line deviations."
  },
  {
    keyword: "How do you program a PID line follower in Arduino?",
    cluster: "aeo-questions",
    primaryUrl: "/events/competition/line-follower",
    aeoQuickAnswer: "Read raw analog sensor values from the array, compute weighted position error from the center line, calculate proportional (Kp*error), integral (Ki*integral), and derivative (Kd*derivative) terms, and adjust PWM motor speeds accordingly."
  },
  {
    keyword: "What is the difference between brushed and brushless DC motors in robotics?",
    cluster: "aeo-questions",
    primaryUrl: "/products/robotics-components",
    aeoQuickAnswer: "Brushed DC motors use mechanical commutators and are inexpensive, simple to drive with basic H-bridges, and high-torque at low cost; brushless (BLDC) motors offer higher efficiency, higher speeds, and longer lifespan but require electronic speed controllers (ESCs)."
  },
  {
    keyword: "What is torque in robotics motors?",
    cluster: "aeo-questions",
    primaryUrl: "/products/robotics-components/ttrc-dgj-300rpm",
    aeoQuickAnswer: "Torque is the rotational force produced by the motor shaft, typically measured in kg-cm or N-m, determining the robot's pushing capacity, payload lifting limit, and ability to climb steep inclines."
  },
  {
    keyword: "What is RPM in robotics motors?",
    cluster: "aeo-questions",
    primaryUrl: "/products/robotics-components/ttrc-dgj-600rpm",
    aeoQuickAnswer: "RPM (Revolutions Per Minute) is the rotational speed of the motor output shaft, directly influencing the maximum linear speed of the robot across the track when combined with wheel diameter."
  },
  {
    keyword: "How to calculate robot speed from motor RPM and wheel diameter?",
    cluster: "aeo-questions",
    primaryUrl: "/events/competition/robo-race",
    aeoQuickAnswer: "Speed (m/s) = (RPM * Pi * Wheel Diameter in meters) / 60. For example, a 600RPM motor with a 112mm (0.112m) wheel gives a theoretical velocity of approximately 3.51 meters per second."
  },
  {
    keyword: "What is an H-bridge in robotics?",
    cluster: "aeo-questions",
    primaryUrl: "/products/robotics-components",
    aeoQuickAnswer: "An H-bridge is an electronic circuit consisting of four switches (typically MOSFETs) that allows DC voltage to be applied across a motor in either direction, enabling bidirectional forward and reverse rotation."
  },
  {
    keyword: "Why do competition robots need high discharge batteries?",
    cluster: "aeo-questions",
    primaryUrl: "/products/competition",
    aeoQuickAnswer: "Sudden motor acceleration, stalling against barriers, and high-speed turns draw instantaneous current spikes exceeding 20A to 40A; high-C discharge batteries prevent voltage drops that could reset onboard microcontrollers."
  },
  {
    keyword: "What is fail safe in RC robotics?",
    cluster: "aeo-questions",
    primaryUrl: "/products/radio-controllers",
    aeoQuickAnswer: "Fail-safe is an essential safety feature that cuts motor power or applies neutral throttle immediately if the radio receiver loses wireless signal connection from the transmitter, preventing runaway hazards."
  },
  {
    keyword: "How to connect FlySky receiver to Arduino?",
    cluster: "aeo-questions",
    primaryUrl: "/products/radio-controllers",
    aeoQuickAnswer: "Connect the receiver's signal pin to an Arduino digital interrupt pin, power with 5V and ground, and decode the PWM pulse width using the `pulseIn()` function or hardware interrupts to read stick position (1000µs to 2000µs)."
  },
  {
    keyword: "What is IBUS in FlySky controllers?",
    cluster: "aeo-questions",
    primaryUrl: "/products/radio-controllers/flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver",
    aeoQuickAnswer: "IBUS is FlySky's high-speed serial protocol that sends data for up to 18 channels over a single 3-wire servo cable to a microcontroller or flight controller, eliminating tangled multi-wire servo harnesses."
  },
  {
    keyword: "What is an omni wheel robot?",
    cluster: "aeo-questions",
    primaryUrl: "/products/competition",
    aeoQuickAnswer: "An omni-wheel robot uses specialized wheels with small perpendicular rollers along the perimeter, allowing the robot to move holonomically in any direction (forward, sideways, diagonally) without turning its chassis."
  },
  {
    keyword: "What is a mecanum wheel drive?",
    cluster: "aeo-questions",
    primaryUrl: "/products/competition",
    aeoQuickAnswer: "A mecanum wheel drive uses four wheels with rollers oriented at 45-degree angles, creating vector forces that allow true omnidirectional translation and zero-radius spinning through variable wheel speed control."
  },
  {
    keyword: "What programming languages are used in robotics?",
    cluster: "aeo-questions",
    primaryUrl: "/learn/engineering-students",
    aeoQuickAnswer: "C and C++ are the industry standards for real-time microcontroller firmware and PID loops; Python is widely used for computer vision, ROS, machine learning, and high-level behavioral scripting."
  },
  {
    keyword: "What is ROS Robot Operating System?",
    cluster: "aeo-questions",
    primaryUrl: "/learn/engineering-students",
    aeoQuickAnswer: "ROS is an open-source middleware framework offering libraries, drivers, visualization tools, and node-to-node message-passing architecture to develop complex autonomous robot applications."
  },
  {
    keyword: "How does laser cutting work for acrylic robot chassis?",
    cluster: "aeo-questions",
    primaryUrl: "/services/laser-cutting",
    aeoQuickAnswer: "A high-powered CO2 laser beam vaporizes acrylic along a programmed CAD vector path, leaving flame-polished, burr-free edges with dimensional tolerances within 0.1mm."
  },
  {
    keyword: "What materials can be laser cut for robotics?",
    cluster: "aeo-questions",
    primaryUrl: "/services/laser-cutting",
    aeoQuickAnswer: "Common laser-cut robotics materials include acrylic (PMMA), Delrin (acetal), birch plywood, MDF, stainless steel sheet, aluminum sheet, and carbon fiber panels."
  },
  {
    keyword: "What is surface mount technology SMT in PCB assembly?",
    cluster: "aeo-questions",
    primaryUrl: "/services/pcb-design",
    aeoQuickAnswer: "SMT is an electronic manufacturing technique where miniature components are mounted directly onto solder pads on the surface of printed circuit boards, enabling compact, vibration-resistant robotic electronics."
  },
  {
    keyword: "What is IoT in industrial automation?",
    cluster: "aeo-questions",
    primaryUrl: "/services/embedded-iot",
    aeoQuickAnswer: "Industrial IoT (IIoT) connects factory machines and environmental sensors to cloud platforms, enabling predictive maintenance, live energy auditing, and remote operational analytics."
  },
  {
    keyword: "What is edge AI in robotics?",
    cluster: "aeo-questions",
    primaryUrl: "/services/ai-vision",
    aeoQuickAnswer: "Edge AI processes computer vision and neural network inference directly on compact onboard microcomputers (like NVIDIA Jetson or Raspberry Pi) with ultra-low latency without requiring an internet connection."
  },
  {
    keyword: "How does Tamizh Tech support college robotics teams?",
    cluster: "aeo-questions",
    primaryUrl: "/solutions/colleges",
    aeoQuickAnswer: "Tamizh Tech provides technical mentoring, competition-grade kits, customized motor and wheel solutions, 3D printing, and rapid PCB prototyping to help collegiate teams excel in national tournaments."
  },
  {
    keyword: "How can schools implement robotics education in Tamil Nadu?",
    cluster: "aeo-questions",
    primaryUrl: "/solutions/schools",
    aeoQuickAnswer: "Schools can partner with Tamizh Tech for turnkey STEM lab setups, structured hands-on curricula, certified trainer workshops, and ongoing maintenance support tailored to CBSE and state boards."
  },
  {
    keyword: "What warranty and engineering support does Tamizh Tech provide?",
    cluster: "aeo-questions",
    primaryUrl: "/contact",
    aeoQuickAnswer: "Tamizh Tech provides factual specifications, pre-dispatch quality testing, replacement support for manufacturing defects, and expert technical guidance for every hardware component."
  },
  {
    keyword: "Can I customize a robot chassis design at Tamizh Tech?",
    cluster: "aeo-questions",
    primaryUrl: "/services/engineering-rd",
    aeoQuickAnswer: "Yes, Tamizh Tech's engineering team collaborates with clients to design, simulate, laser cut, and 3D print custom robotic frames matching exact weight, dimension, and mounting requirements."
  },
  {
    keyword: "How to order products or request a quote from Tamizh Tech?",
    cluster: "aeo-questions",
    primaryUrl: "/contact",
    aeoQuickAnswer: "Clients can explore the catalogue at tamizhtech.in and click 'Enquire' on any product or service page to request a detailed official commercial quotation via email or phone."
  },
  {
    keyword: "Does Tamizh Tech offer onsite robotics workshops?",
    cluster: "aeo-questions",
    primaryUrl: "/learn/engineering-students",
    aeoQuickAnswer: "Yes, Tamizh Tech conducts hands-on technical workshops and bootcamps at engineering colleges and schools across South India, covering competition robot building, embedded C, and IoT."
  },
  {
    keyword: "What are the common mistakes in line follower robot design?",
    cluster: "aeo-questions",
    primaryUrl: "/events/competition/line-follower",
    aeoQuickAnswer: "Common mistakes include mounting sensors too high off the track, inadequate ambient light shielding, poor PID derivative tuning causing oscillatory shaking, and weak battery voltage under load."
  },
  {
    keyword: "What are the common mistakes in robo race robot design?",
    cluster: "aeo-questions",
    primaryUrl: "/events/competition/robo-race",
    aeoQuickAnswer: "Frequent pitfalls include low ground clearance causing chassis high-centering on ramps, poor wheel traction on slippery arena surfaces, and inadequate motor driver thermal dissipation."
  },
  {
    keyword: "What are the common mistakes in robo soccer robot design?",
    cluster: "aeo-questions",
    primaryUrl: "/events/competition/robo-soccer",
    aeoQuickAnswer: "Common issues include insufficient motor torque during shoving matches, vulnerable exposed wiring that snags on opponents, and slow kicker recharging cycles."
  },
  {
    keyword: "What is the role of sensor calibration in competition robots?",
    cluster: "aeo-questions",
    primaryUrl: "/events/competition/general-robotics",
    aeoQuickAnswer: "Sensor calibration maps raw voltage levels across bright and dark arena surfaces under actual venue lighting, ensuring dependable threshold detection regardless of sunlight or spotlight variations."
  },
  {
    keyword: "How do I choose between 100mm and 112mm buggy wheels?",
    cluster: "aeo-questions",
    primaryUrl: "/products/robotics-components/112mm-buggy-wheel",
    aeoQuickAnswer: "Choose 100mm wheels for tighter turning circles, lower center of gravity, and higher acceleration; choose 112mm wheels for maximum top-end velocity and greater obstacle clearance over track hurdles."
  },
  {
    keyword: "What is Tamizh Tech Robotics Company located?",
    cluster: "aeo-questions",
    primaryUrl: "/about",
    aeoQuickAnswer: "Tamizh Tech Robotics Company is headquartered in Coimbatore, Tamil Nadu, India, serving students, colleges, schools, and industrial manufacturing clients nationwide."
  }
];

questionKeywords.forEach(item => {
  addKeyword({
    keyword: item.keyword,
    cluster: item.cluster,
    intent: 'informational',
    keywordType: 'question',
    audience: 'general',
    businessValue: 'high',
    priority: 'P1',
    primaryUrl: item.primaryUrl,
    contentType: item.primaryUrl.startsWith('/events/competition') ? 'event-guide' : item.primaryUrl.startsWith('/products') ? 'product' : item.primaryUrl.startsWith('/services') ? 'service' : 'solution',
    location: item.keyword.includes('India') ? 'india' : item.keyword.includes('Coimbatore') || item.keyword.includes('Tamil Nadu') ? 'coimbatore' : 'global',
    commercialIntent: false,
    status: 'mapped',
    scoring: { businessValue: 8, searchIntentStrength: 9, productRelevance: 9, conversionPotential: 8, authorityPotential: 10 },
    aeoQuickAnswer: item.aeoQuickAnswer
  });
});

// ─────────────────────────────────────────────────────────────
// 15. EXPANSION KEYWORDS TO ENSURE WE COMFORTABLY HIT 600+ RECORDS
// ─────────────────────────────────────────────────────────────
// Let's add carefully targeted technical, commercial, educational, and component long-tails:
const expansionTerms = [
  // Additional Competition & Platform terms
  { keyword: "all terrain combat robot", cluster: "robo-war", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition" },
  { keyword: "flipper mechanism combat robot", cluster: "robo-war", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition" },
  { keyword: "spinning blade combat robot", cluster: "robo-war", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition" },
  { keyword: "dohyo sumo robot sensor placement", cluster: "robo-sumo", intent: "informational", keywordType: "event", primaryUrl: "/events/competition/robo-sumo" },
  { keyword: "micro sumo robot design guide", cluster: "robo-sumo", intent: "informational", keywordType: "event", primaryUrl: "/events/competition/robo-sumo" },
  { keyword: "micromouse floodfill algorithm tutorial", cluster: "maze-solver", intent: "informational", keywordType: "event", primaryUrl: "/events/competition/maze-solver" },
  { keyword: "left hand rule maze solver robot", cluster: "maze-solver", intent: "informational", keywordType: "event", primaryUrl: "/events/competition/maze-solver" },
  { keyword: "ultrasonic maze solving robot", cluster: "maze-solver", intent: "commercial", keywordType: "product", primaryUrl: "/products/competition" },
  { keyword: "drone race obstacle gate dimensions", cluster: "drone-race", intent: "informational", keywordType: "event", primaryUrl: "/events/competition/drone-race" },
  { keyword: "quadcopter flight controller for racing", cluster: "drone-race", intent: "commercial", keywordType: "component", primaryUrl: "/products/competition" },
  { keyword: "brushless motor for racing drone", cluster: "drone-race", intent: "commercial", keywordType: "component", primaryUrl: "/products/competition" },
  { keyword: "FPV camera and video transmitter drone", cluster: "drone-race", intent: "commercial", keywordType: "component", primaryUrl: "/products/competition" },
  { keyword: "line follower pit stop checklist", cluster: "line-follower", intent: "informational", keywordType: "event", primaryUrl: "/events/competition/line-follower" },
  { keyword: "line follower calibration technique", cluster: "line-follower", intent: "informational", keywordType: "event", primaryUrl: "/events/competition/line-follower" },
  { keyword: "line follower inversion track challenge", cluster: "line-follower", intent: "informational", keywordType: "event", primaryUrl: "/events/competition/line-follower" },
  { keyword: "robo race track hurdle navigation", cluster: "robo-race", intent: "informational", keywordType: "event", primaryUrl: "/events/competition/robo-race" },
  { keyword: "robo race chassis suspension system", cluster: "robo-race", intent: "commercial", keywordType: "component", primaryUrl: "/products/robotics-components" },
  { keyword: "robo soccer team coordination tactics", cluster: "robo-soccer", intent: "informational", keywordType: "event", primaryUrl: "/events/competition/robo-soccer" },
  { keyword: "robo soccer wireless communication lag", cluster: "robo-soccer", intent: "informational", keywordType: "event", primaryUrl: "/events/competition/robo-soccer" },
  { keyword: "solenoid kicker for robo soccer", cluster: "robo-soccer", intent: "commercial", keywordType: "component", primaryUrl: "/products/robotics-components" },

  // Additional Component & Technical Hardware terms
  { keyword: "metal gear DC motor for robotics", cluster: "robot-motors", intent: "commercial", keywordType: "component", primaryUrl: "/products/robotics-components" },
  { keyword: "12V 300RPM DC geared motor India", cluster: "robot-motors", intent: "commercial", keywordType: "component", primaryUrl: "/products/robotics-components/ttrc-dgj-300rpm", location: "india" },
  { keyword: "12V 600RPM DC geared motor India", cluster: "robot-motors", intent: "commercial", keywordType: "component", primaryUrl: "/products/robotics-components/ttrc-dgj-600rpm", location: "india" },
  { keyword: "robot motor mounting clamp 37mm", cluster: "robot-motors", intent: "commercial", keywordType: "component", primaryUrl: "/products/robotics-components" },
  { keyword: "L-shaped motor bracket for geared motor", cluster: "robot-motors", intent: "commercial", keywordType: "component", primaryUrl: "/products/robotics-components" },
  { keyword: "rubber wheel for 600RPM motor", cluster: "robot-wheels", intent: "commercial", keywordType: "component", primaryUrl: "/products/robotics-components/112mm-buggy-wheel" },
  { keyword: "high traction offroad robot tyres", cluster: "robot-wheels", intent: "commercial", keywordType: "component", primaryUrl: "/products/robotics-components/112mm-buggy-wheel" },
  { keyword: "silicone coated robot wheels", cluster: "robot-wheels", intent: "commercial", keywordType: "component", primaryUrl: "/products/robotics-components" },
  { keyword: "robot chassis sheet metal fabrication", cluster: "robotics-components", intent: "commercial", keywordType: "service", primaryUrl: "/services/laser-cutting" },
  { keyword: "anodized aluminum robot chassis plate", cluster: "robotics-components", intent: "commercial", keywordType: "component", primaryUrl: "/products/robotics-components" },
  { keyword: "robot power distribution board PDB", cluster: "robotics-components", intent: "commercial", keywordType: "component", primaryUrl: "/products/robotics-components" },
  { keyword: "buck converter 5V for robotics", cluster: "robotics-components", intent: "commercial", keywordType: "component", primaryUrl: "/products/robotics-components" },
  { keyword: "emergency stop switch for combat robot", cluster: "robotics-components", intent: "commercial", keywordType: "component", primaryUrl: "/products/robotics-components" },
  { keyword: "XT60 connectors for robotics", cluster: "robotics-components", intent: "commercial", keywordType: "component", primaryUrl: "/products/robotics-components" },
  { keyword: "silicone wire 14AWG for robot battery", cluster: "robotics-components", intent: "commercial", keywordType: "component", primaryUrl: "/products/robotics-components" },
  { keyword: "FS-iA10B receiver 10 channel", cluster: "radio-controllers", intent: "commercial", keywordType: "component", primaryUrl: "/products/radio-controllers/flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver" },
  { keyword: "FS-iA6B receiver telemetry", cluster: "radio-controllers", intent: "commercial", keywordType: "component", primaryUrl: "/products/radio-controllers" },
  { keyword: "FS-R6B 6 channel receiver", cluster: "radio-controllers", intent: "commercial", keywordType: "component", primaryUrl: "/products/radio-controllers/flysky-fs-ct6b-2.4g-6ch-radio-set-system-with-rx-fs-r6b-receiver" },
  { keyword: "2.4GHz antenna replacement FlySky", cluster: "radio-controllers", intent: "commercial", keywordType: "component", primaryUrl: "/products/radio-controllers" },
  { keyword: "RC transmitter trainer cable FlySky", cluster: "radio-controllers", intent: "commercial", keywordType: "component", primaryUrl: "/products/radio-controllers" },

  // Additional Education & Training terms
  { keyword: "robotics certification for engineers", cluster: "stem-education", intent: "commercial", keywordType: "solution", primaryUrl: "/courses" },
  { keyword: "industrial automation certification course", cluster: "stem-education", intent: "commercial", keywordType: "solution", primaryUrl: "/courses" },
  { keyword: "PLC and SCADA training institute Coimbatore", cluster: "stem-education", intent: "local", keywordType: "solution", primaryUrl: "/learn/industrial-training", location: "coimbatore" },
  { keyword: "embedded systems course with placement Coimbatore", cluster: "stem-education", intent: "local", keywordType: "solution", primaryUrl: "/learn/engineering-students", location: "coimbatore" },
  { keyword: "robotics summer training for college students", cluster: "stem-education", intent: "commercial", keywordType: "solution", primaryUrl: "/learn/engineering-students" },
  { keyword: "winter robotics internship Coimbatore", cluster: "stem-education", intent: "local", keywordType: "solution", primaryUrl: "/learn/engineering-students", location: "coimbatore" },
  { keyword: "robotics club mentorship college", cluster: "college-robotics", intent: "commercial", keywordType: "solution", primaryUrl: "/solutions/colleges" },
  { keyword: "technical symposium project display partner", cluster: "college-robotics", intent: "commercial", keywordType: "solution", primaryUrl: "/solutions/colleges" },
  { keyword: "engineering hackathon robotics hardware kits", cluster: "college-robotics", intent: "commercial", keywordType: "solution", primaryUrl: "/solutions/colleges" },
  { keyword: "school STEM fair project kits", cluster: "school-robotics", intent: "commercial", keywordType: "solution", primaryUrl: "/solutions/schools" },
  { keyword: "school science exhibition robotics model", cluster: "school-robotics", intent: "educational", keywordType: "solution", primaryUrl: "/solutions/schools" },
  { keyword: "hands on STEM activity kits for kids", cluster: "school-robotics", intent: "commercial", keywordType: "product", primaryUrl: "/products/educational-robotics" },
  { keyword: "robotics training syllabus for middle school", cluster: "school-robotics", intent: "educational", keywordType: "solution", primaryUrl: "/solutions/schools" },
  { keyword: "high school robotics club curriculum", cluster: "school-robotics", intent: "educational", keywordType: "solution", primaryUrl: "/solutions/schools" },

  // Additional B2B & Commercial Engineering terms
  { keyword: "industrial robot end effector fabrication", cluster: "robotics-automation-services", intent: "commercial", keywordType: "service", primaryUrl: "/services/robotics-automation" },
  { keyword: "robotic palletizer system integrator India", cluster: "b2b-solutions", intent: "commercial", keywordType: "solution", primaryUrl: "/solutions/industries", location: "india" },
  { keyword: "automated sorting conveyor robotics", cluster: "b2b-solutions", intent: "commercial", keywordType: "solution", primaryUrl: "/solutions/industries" },
  { keyword: "pneumatic automation solutions Coimbatore", cluster: "industrial-automation-services", intent: "local", keywordType: "service", primaryUrl: "/services/industrial-automation", location: "coimbatore" },
  { keyword: "custom electrical control panel wiring Coimbatore", cluster: "industrial-automation-services", intent: "local", keywordType: "service", primaryUrl: "/services/industrial-automation", location: "coimbatore" },
  { keyword: "HMI programming services Coimbatore", cluster: "industrial-automation-services", intent: "local", keywordType: "service", primaryUrl: "/services/industrial-automation", location: "coimbatore" },
  { keyword: "Delta PLC programming Coimbatore", cluster: "industrial-automation-services", intent: "local", keywordType: "service", primaryUrl: "/services/industrial-automation", location: "coimbatore" },
  { keyword: "Siemens PLC automation service Coimbatore", cluster: "industrial-automation-services", intent: "local", keywordType: "service", primaryUrl: "/services/industrial-automation", location: "coimbatore" },
  { keyword: "rapid metal laser cutting job shop Coimbatore", cluster: "laser-cutting-services", intent: "local", keywordType: "service", primaryUrl: "/services/laser-cutting", location: "coimbatore" },
  { keyword: "acrylic display laser cutting Coimbatore", cluster: "laser-cutting-services", intent: "local", keywordType: "service", primaryUrl: "/services/laser-cutting", location: "coimbatore" },
  { keyword: "custom SLA 3D printing engineering prototypes", cluster: "3d-printing-services", intent: "commercial", keywordType: "service", primaryUrl: "/services/3d-printing" },
  { keyword: "ABS 3D printing Coimbatore", cluster: "3d-printing-services", intent: "local", keywordType: "service", primaryUrl: "/services/3d-printing", location: "coimbatore" },
  { keyword: "PETG 3D printing service Coimbatore", cluster: "3d-printing-services", intent: "local", keywordType: "service", primaryUrl: "/services/3d-printing", location: "coimbatore" },
  { keyword: "carbon fiber 3D printing for drones", cluster: "3d-printing-services", intent: "commercial", keywordType: "service", primaryUrl: "/services/3d-printing" },
  { keyword: "SMD stencil fabrication Coimbatore", cluster: "pcb-services", intent: "local", keywordType: "service", primaryUrl: "/services/pcb-design", location: "coimbatore" },
  { keyword: "rapid PCB prototyping within 24 hours India", cluster: "pcb-services", intent: "commercial", keywordType: "service", primaryUrl: "/services/pcb-design", location: "india" },
  { keyword: "hardware engineering consulting Coimbatore", cluster: "rd-services", intent: "local", keywordType: "service", primaryUrl: "/services/engineering-rd", location: "coimbatore" },
  { keyword: "reverse engineering mechanical parts Coimbatore", cluster: "rd-services", intent: "local", keywordType: "service", primaryUrl: "/services/engineering-rd", location: "coimbatore" },
  { keyword: "electro mechanical prototyping services India", cluster: "rd-services", intent: "commercial", keywordType: "service", primaryUrl: "/services/engineering-rd", location: "india" }
];

expansionTerms.forEach(item => {
  addKeyword({
    keyword: item.keyword,
    cluster: item.cluster,
    intent: item.intent || 'commercial',
    keywordType: item.keywordType || 'product',
    audience: item.keyword.includes('school') ? 'schools-educators' : item.keyword.includes('industrial') || item.keyword.includes('PLC') ? 'b2b-industries' : 'students-colleges',
    businessValue: 'high',
    priority: 'P2',
    primaryUrl: item.primaryUrl,
    contentType: item.primaryUrl.startsWith('/events/competition') ? 'event-guide' : item.primaryUrl.startsWith('/products') ? 'product' : item.primaryUrl.startsWith('/services') ? 'service' : item.primaryUrl.startsWith('/courses') ? 'course' : 'solution',
    location: item.location || 'global',
    commercialIntent: item.intent === 'commercial' || item.intent === 'local',
    status: 'mapped',
    scoring: { businessValue: 8, searchIntentStrength: 8, productRelevance: 8, conversionPotential: 8, authorityPotential: 8 }
  });
});

console.log(`Total unique keyword records assembled: ${masterList.length}`);

// ─────────────────────────────────────────────────────────────
// Output Generation
// 1. src/data/seoKeywordMaster.ts
// ─────────────────────────────────────────────────────────────

const tsContent = `/**
 * TAMIZH TECH ROBOTICS COMPANY — 500+ KEYWORD SEO INTELLIGENCE MASTER
 * 
 * Production Canonical: https://www.tamizhtech.in/
 * Total Records: ${masterList.length} Unique Verified Keywords
 * 
 * ARCHITECTURE PRINCIPLES:
 * 1. INTELLIGENCE LAYER: 500+ keywords map search intent to existing focused canonical pages.
 * 2. NO THIN PAGES: Keywords are mapped to high-authority pillar pages rather than 500 low-value pages.
 * 3. NO CANNIBALIZATION: Every keyword has exactly ONE primary destination URL.
 * 4. NO FABRICATED METRICS: Search volume and KD placeholders indicate real GSC/Semrush verification.
 * 5. SEPARATED TAXONOMY: SearchIntent (user query intent) is decoupled from KeywordType (topic classification).
 */

export type SearchIntent = 
  | 'brand'
  | 'navigational'
  | 'informational'
  | 'commercial'
  | 'transactional'
  | 'educational'
  | 'local'
  | 'competition';

export type KeywordType = 
  | 'product'
  | 'service'
  | 'solution'
  | 'competition'
  | 'event'
  | 'component'
  | 'project'
  | 'question'
  | 'company';

export type TargetAudience = 
  | 'students-colleges'
  | 'schools-educators'
  | 'b2b-industries'
  | 'hobbyists-makers'
  | 'general';

export type BusinessValueTier = 'low' | 'medium' | 'high' | 'very-high';

export type PriorityTier = 'P0' | 'P1' | 'P2' | 'P3' | 'P4';

export type ContentType = 
  | 'product'
  | 'service'
  | 'solution'
  | 'event-guide'
  | 'course'
  | 'project'
  | 'blog'
  | 'homepage'
  | 'no-page-needed';

export type GeographicLocation = 'global' | 'india' | 'tamil-nadu' | 'coimbatore';

export type MappingStatus = 'mapped' | 'in-progress' | 'planned' | 'no-page-needed';

export interface InternalScoring {
  businessValue: number;         // 1-10 (commercial relevance to Tamizh Tech core revenue)
  searchIntentStrength: number;  // 1-10 (clarity and specificity of search query)
  productRelevance: number;      // 1-10 (alignment with catalogue and offerings)
  conversionPotential: number;  // 1-10 (likelihood to trigger an official quote or enquiry)
  authorityPotential: number;   // 1-10 (ability to establish engineering/educational topical authority)
}

export interface SEOKeywordRecord {
  keyword: string;
  cluster: string;
  intent: SearchIntent;
  keywordType: KeywordType;
  audience: TargetAudience;
  businessValue: BusinessValueTier;
  priority: PriorityTier;
  primaryUrl: string;
  contentType: ContentType;
  location: GeographicLocation;
  commercialIntent: boolean;
  status: MappingStatus;
  scoring: InternalScoring;
  aeoQuickAnswer?: string;
}

export const CANONICAL_DOMAIN = "https://www.tamizhtech.in";

export const seoKeywordMaster: SEOKeywordRecord[] = ${JSON.stringify(masterList, null, 2)};

// ─────────────────────────────────────────────────────────────
// HELPER UTILITIES & AUDIT QUERIES
// ─────────────────────────────────────────────────────────────

/** Retrieve all keywords assigned to a specific cluster */
export function getKeywordsByCluster(clusterName: string): SEOKeywordRecord[] {
  return seoKeywordMaster.filter(k => k.cluster === clusterName);
}

/** Retrieve all keywords by priority tier (e.g. P0, P1) */
export function getKeywordsByPriority(tier: PriorityTier): SEOKeywordRecord[] {
  return seoKeywordMaster.filter(k => k.priority === tier);
}

/** Retrieve all question-based AEO queries with defined quick answers */
export function getAEOQuestions(): SEOKeywordRecord[] {
  return seoKeywordMaster.filter(k => k.keywordType === 'question' && k.aeoQuickAnswer);
}

/** Retrieve all commercial and transactional keywords */
export function getCommercialKeywords(): SEOKeywordRecord[] {
  return seoKeywordMaster.filter(k => k.commercialIntent);
}

/** Detect any cannibalization conflict where the exact same keyword is assigned to multiple distinct primary URLs */
export function detectCannibalizationConflicts(): { keyword: string; urls: string[] }[] {
  const map = new Map<string, Set<string>>();
  for (const item of seoKeywordMaster) {
    const k = item.keyword.toLowerCase().trim();
    if (!map.has(k)) {
      map.set(k, new Set());
    }
    map.get(k)!.add(item.primaryUrl);
  }
  const conflicts: { keyword: string; urls: string[] }[] = [];
  for (const [kw, urls] of map.entries()) {
    if (urls.size > 1) {
      conflicts.push({ keyword: kw, urls: Array.from(urls) });
    }
  }
  return conflicts;
}

/** Exclusion / Negative keywords list to avoid irrelevant crawl waste and low-intent clicks */
export const negativeKeywordsList = [
  "free download cracked software",
  "toy robots for toddlers",
  "consumer vacuum cleaner robot repair",
  "robot movie songs mp3 download",
  "academic homework cheating service",
  "free drone delivery hacked APK",
  "unrelated video games",
  "used broken washing machine repair"
];
`;

fs.writeFileSync(path.join(rootDir, 'src', 'data', 'seoKeywordMaster.ts'), tsContent, 'utf8');
console.log('Successfully written src/data/seoKeywordMaster.ts');

// ─────────────────────────────────────────────────────────────
// 2. docs/robotics-keywords-500-plus.csv
// Columns: Keyword, Cluster, Intent, Audience, Primary URL, Content Type, Location, Business Value, Conversion Potential, Priority, Status
// ─────────────────────────────────────────────────────────────
const csvHeader = 'Keyword,Cluster,Intent,Audience,Primary URL,Content Type,Location,Business Value,Conversion Potential,Priority,Status\n';
const csvRows = masterList.map(r => {
  const escapeCsv = (str) => `"${String(str).replace(/"/g, '""')}"`;
  return [
    escapeCsv(r.keyword),
    escapeCsv(r.cluster),
    escapeCsv(r.intent),
    escapeCsv(r.audience),
    escapeCsv(r.primaryUrl),
    escapeCsv(r.contentType),
    escapeCsv(r.location),
    escapeCsv(r.businessValue),
    escapeCsv(r.scoring.conversionPotential),
    escapeCsv(r.priority),
    escapeCsv(r.status)
  ].join(',');
}).join('\n');

fs.writeFileSync(path.join(rootDir, 'docs', 'robotics-keywords-500-plus.csv'), csvHeader + csvRows, 'utf8');
console.log('Successfully written docs/robotics-keywords-500-plus.csv');

// ─────────────────────────────────────────────────────────────
// 3. docs/TOP_100_ROBOTICS_KEYWORDS.md
// Section A: Semrush batch input (100 raw strings)
// Section B: Measurement table with empty/REQUIRES SEO TOOL / GSC DATA
// ─────────────────────────────────────────────────────────────
const top100List = [
  "robotics",
  "robotics company",
  "robotics company india",
  "robotics company tamil nadu",
  "robotics company coimbatore",
  "robotics manufacturer india",
  "robotics products",
  "robotics products india",
  "robotics kit",
  "robotics kit india",
  "robotics kit for students",
  "robotics kit for schools",
  "robotics kit for college students",
  "robotics competition kit",
  "robotics competition kit india",
  "robotics training",
  "robotics training india",
  "robotics training coimbatore",
  "robotics workshop",
  "robotics workshop coimbatore",
  "STEM robotics",
  "STEM education",
  "STEM education india",
  "STEM robotics kit",
  "STEM learning kits",
  "school robotics",
  "school robotics lab",
  "robotics lab setup",
  "robotics lab setup for schools",
  "robotics education company",
  "robotics classes",
  "robotics classes coimbatore",
  "robotics course",
  "robotics course for students",
  "robotics course india",
  "line follower robot",
  "line follower robot kit",
  "line follower robot kit india",
  "line follower robot competition",
  "line follower robot competition kit",
  "line tracking robot",
  "robo soccer robot",
  "robo soccer robot kit",
  "robo soccer competition",
  "robo soccer competition kit",
  "robo race robot",
  "robo race robot kit",
  "robo race competition",
  "robo war robot",
  "robo war robot kit",
  "robo war competition",
  "robo sumo robot",
  "robo sumo robot kit",
  "robo sumo competition",
  "drone competition",
  "drone race competition",
  "maze solver robot",
  "maze solver robot kit",
  "robotics competition",
  "robotics competitions india",
  "robotics events india",
  "robotics events tamil nadu",
  "robotics events coimbatore",
  "engineering project kits",
  "engineering robotics projects",
  "robotics project ideas",
  "robotics projects for students",
  "robotics projects for college",
  "Arduino robotics kit",
  "ESP32 robotics kit",
  "robotics components",
  "robotics components india",
  "robot motors",
  "DC geared motor",
  "600 rpm geared motor",
  "300 rpm geared motor",
  "robot wheels",
  "buggy wheels",
  "robot chassis",
  "robot controller",
  "FlySky FS-i6",
  "robotics parts supplier",
  "robotics parts supplier india",
  "robotics products supplier",
  "robotics equipment supplier india",
  "3D printing service coimbatore",
  "3D printing for robotics",
  "3D printed robot parts",
  "laser cutting service coimbatore",
  "PCB design service",
  "PCB fabrication and assembly",
  "robotics automation company",
  "industrial automation company",
  "industrial robotics",
  "robotics automation services",
  "robotics solutions for industries",
  "robotics solutions for schools",
  "robotics solutions for colleges",
  "robotics lab company india",
  "robotics STEM company",
  "Tamil robotics company",
  "Tamizh Tech Robotics"
];

// Deduplicate top100List to exactly 100 unique items if needed
const uniqueTop100 = Array.from(new Set(top100List.map(norm))).slice(0, 100);

let top100Md = `# Top 100 Robotics Keywords — Tamizh Tech SEO Intelligence

Production Canonical: [tamizhtech.in](https://www.tamizhtech.in/)  
Objective: High-value commercial, competition, component, service, and local authority keyword tracking for Google Search & Search Console performance benchmarking.

---

## Section A — Semrush Batch Input

Copy and paste the exact list below directly into **Semrush Keyword Overview / Keyword Strategy Builder**:

\`\`\`text
${uniqueTop100.join('\n')}
\`\`\`

---

## Section B — Keyword Measurement & Ranking Matrix

> [!NOTE]
> In strict compliance with Google Webmaster and SEO accuracy standards, **Search Volume, KD%, CPC, and Trends are marked as \`— (REQUIRES SEO TOOL / GSC DATA)\`**. Values must only be populated from live verified Google Search Console or Semrush exports, never fabricated.

| Keyword | Search Volume | KD % | CPC | Trend | SERP Features | Intent | Primary URL | Priority | Current Ranking | Notes |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :--- | :---: | :---: | :--- |
`;

uniqueTop100.forEach(kw => {
  const match = masterList.find(m => m.keyword === kw);
  const intent = match ? match.intent : 'commercial';
  const url = match ? match.primaryUrl : '/products';
  const priority = match ? match.priority : 'P0';
  top100Md += `| \`${kw}\` | — | — | — | — | — | ${intent} | \`${url}\` | ${priority} | GSC baseline | Core commercial target |\n`;
});

fs.writeFileSync(path.join(rootDir, 'docs', 'TOP_100_ROBOTICS_KEYWORDS.md'), top100Md, 'utf8');
console.log('Successfully written docs/TOP_100_ROBOTICS_KEYWORDS.md');

// ─────────────────────────────────────────────────────────────
// 4. docs/ROBOTICS_KEYWORD_MASTER.md
// Grouped markdown document listing all 500+ keywords by cluster
// ─────────────────────────────────────────────────────────────
let masterMd = `# Tamizh Tech Robotics Company — 500+ Keyword Master Inventory

Production Canonical: [tamizhtech.in](https://www.tamizhtech.in/)  
Total Unique Keywords: **${masterList.length}**  
Target Coverage: Events, Competitions, Kits, Products, Components, Services, B2B Solutions, Education, Local, and AEO Questions.

---

## Architecture Principles

1. **Intelligence Layer, Not Keyword Stuffing**: 
   The database serves as a search intent mapping system. We do **not** dump 500 keywords onto web pages or build programmatic doorway pages.
2. **Strict 1-to-1 Page Ownership**:
   Every keyword maps to exactly **one canonical primary URL** to eliminate internal cannibalization.
3. **Organic Funnel**:
   \`\`\`text
   Search Intent Query
          ↓
     Cluster Topic
          ↓
   Single Canonical URL (Product / Service / Solution / Event Guide)
          ↓
   High-Quality Value & Specifications
          ↓
   Direct Enquiry / Lead
   \`\`\`

---

`;

// Group by cluster
const clusters = {};
masterList.forEach(item => {
  if (!clusters[item.cluster]) {
    clusters[item.cluster] = [];
  }
  clusters[item.cluster].push(item);
});

for (const [clusterName, items] of Object.entries(clusters)) {
  masterMd += `### Cluster: \`${clusterName}\` (${items.length} keywords)\n\n`;
  masterMd += `| Keyword | Intent | Type | Priority | Primary URL | Location | Value |\n`;
  masterMd += `| :--- | :---: | :---: | :---: | :--- | :---: | :---: |\n`;
  items.forEach(it => {
    masterMd += `| \`${it.keyword}\` | ${it.intent} | ${it.keywordType} | ${it.priority} | \`${it.primaryUrl}\` | ${it.location} | ${it.businessValue} |\n`;
  });
  masterMd += `\n---\n\n`;
}

fs.writeFileSync(path.join(rootDir, 'docs', 'ROBOTICS_KEYWORD_MASTER.md'), masterMd, 'utf8');
console.log('Successfully written docs/ROBOTICS_KEYWORD_MASTER.md');

// ─────────────────────────────────────────────────────────────
// 5. docs/ROBOTICS_EVENT_SEO_MAP.md
// ─────────────────────────────────────────────────────────────
const eventMapMd = `# Robotics Event SEO & Topic Funnel Architecture

Production Canonical: [tamizhtech.in](https://www.tamizhtech.in/)  
Strategic Topic Funnels connecting **Competition Information → Hardware Products → Training Courses → Commercial Enquiry**.

---

## 1. The Core Event-to-Lead Ecosystem

Rather than attempting to rank a single generic page for all queries, Tamizh Tech operates focused topic funnels:

\`\`\`text
Event / Rules Search (Top of Funnel)
          ↓
High-Authority Competition Guide (/events/competition/*)
          ↓
Tuned Hardware Product / Kit (/products/*)
          ↓
Engineering Training / Workshop (/learn/* or /courses)
          ↓
Official Technical Enquiry / Quote Request (Lead)
\`\`\`

---

## 2. Pillar Funnel Mappings

### A. Robo Soccer Funnel
* **Search Queries**: \`robo soccer\`, \`robo soccer competition\`, \`robo soccer rules\`, \`robo soccer arena dimensions\`
* **Informational Pillar**: [\`/events/competition/robo-soccer\`](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/competitionGuides.ts)
* **Mapped Hardware Products**:
  * [TTRC RS-5.0 Robo Soccer Robot](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/products.ts) (₹7,999 – ₹20,999)
  * [TTRC DGJ 300RPM Motor](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/products.ts) (₹650)
  * [100MM Buggy Wheel](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/products.ts) (₹320)
  * [FlySky FS-i6 6CH Transmitter](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/products.ts) (₹4,500)
* **Training Upsell**: Hands-on collegiate competition workshops (\`/learn/engineering-students\`).
* **Conversion Action**: "Enquire About Robo Soccer Kit" modal.

### B. Robo Race Funnel
* **Search Queries**: \`robo race\`, \`robo race competition\`, \`robo race track rules\`, \`high speed robot race\`
* **Informational Pillar**: [\`/events/competition/robo-race\`](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/competitionGuides.ts)
* **Mapped Hardware Products**:
  * [TTRC RR-5.0 Robo Race Robot](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/products.ts) (₹7,999 – ₹20,999)
  * [TTRC DGJ 600RPM High Speed Motor](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/products.ts) (₹700)
  * [112MM Buggy Wheel](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/products.ts) (₹350)
* **Training Upsell**: Chassis geometry & high-speed differential steering dynamics.
* **Conversion Action**: "Enquire About Robo Race Platform".

### C. Line Follower Funnel
* **Search Queries**: \`line follower robot\`, \`PID line follower\`, \`line follower competition India\`, \`fast line follower\`
* **Informational Pillar**: [\`/events/competition/line-follower\`](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/competitionGuides.ts)
* **Mapped Hardware Products**:
  * [TTRC LF 5.0 Line Follower Robot](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/products.ts) (₹3,800 – ₹4,800)
  * Custom sensor PCB arrays & micro-metal gear motors.
* **Training Upsell**: PID algorithm tuning and sensor calibration workshops.
* **Conversion Action**: "Enquire About TTRC LF 5.0".

### D. Robo War & Combat Robotics Funnel
* **Search Queries**: \`robo war competition\`, \`combat robotics India\`, \`robot combat championship\`
* **Informational Pillar**: [\`/events/competition/robo-war\`](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/competitionGuides.ts)
* **Mapped Hardware Products**:
  * Heavy-duty competition chassis components, high-current ESCs, hardened armor plates via [Laser Cutting Service](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/commercialServices.ts).
* **Conversion Action**: Custom engineering quotation.

### E. Robo Sumo Funnel
* **Search Queries**: \`robo sumo competition\`, \`sumo robot tournament\`, \`dohyo arena rules\`
* **Informational Pillar**: [\`/events/competition/robo-sumo\`](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/competitionGuides.ts)
* **Mapped Hardware Products**:
  * High-traction silicone wheels, high-torque geared motors (TTRC DGJ 300RPM), low-profile wedge chassis.
* **Conversion Action**: Technical enquiry.

### F. Drone Race Funnel
* **Search Queries**: \`drone race competition\`, \`drone racing India\`, \`FPV drone tournament\`
* **Informational Pillar**: [\`/events/competition/drone-race\`](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/competitionGuides.ts)
* **Mapped Hardware Products**:
  * Carbon fiber frame fabrication via CNC/Laser Cutting, [FlySky FS-i6X 10CH Transmitter](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/products.ts).
* **Conversion Action**: Drone lab / competition enquiry.

### G. Maze Solver Funnel
* **Search Queries**: \`maze solver competition\`, \`micromouse maze solver\`, \`autonomous maze robot\`
* **Informational Pillar**: [\`/events/competition/maze-solver\`](file:///c:/Users/sathish/Desktop/tamizh-tech/src/data/competitionGuides.ts)
* **Mapped Hardware Products**:
  * High-precision sensor kits, micro-chassis, motor encoder feedback units.
* **Conversion Action**: Educational kit enquiry.

---

## 3. Strict Google Compliance Rules
1. **Never use Event Schema for Evergreen Competition Guides**: Competition guides use \`Article\` + \`BreadcrumbList\` schema. \`Event\` schema with startDate/location is strictly reserved for real scheduled events.
2. **No Fictitious Ranking Claims**: All landing pages present factual engineering specifications, real approved prices, and genuine enquiry forms.
`;

fs.writeFileSync(path.join(rootDir, 'docs', 'ROBOTICS_EVENT_SEO_MAP.md'), eventMapMd, 'utf8');
console.log('Successfully written docs/ROBOTICS_EVENT_SEO_MAP.md');

// ─────────────────────────────────────────────────────────────
// 6. docs/SEO_KEYWORD_CHANGELOG.md
// ─────────────────────────────────────────────────────────────
const changelogMd = `# SEO Keyword Changelog — Tamizh Tech

All mapping changes, URL reallocations, and keyword optimizations are logged here with explicit rationale and verified evidence.

| Date | Keyword | Old URL | New URL | Reason | Evidence | Expected Outcome |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- |
| 2026-09-11 | \`robo soccer robot\` | \`/products\` | \`/products/competition/rc-robo-soccer\` | Specific product-model commercial intent assignment | Catalog audit identified dedicated TTRC RS-5.0 page | Direct conversion path to product quote modal |
| 2026-09-11 | \`robo soccer competition\` | \`/events\` | \`/events/competition/robo-soccer\` | Dedicated competition rules and guide pillar established | User intent is informational and event preparation | High dwell time and funnel to RS-5.0 hardware |
| 2026-09-11 | \`robo race robot\` | \`/products\` | \`/products/competition/rc-robo-race\` | Direct mapping to TTRC RR-5.0 platform | Factual high-speed specifications present on target page | Reduced bounce rate and qualified lead capture |
| 2026-09-11 | \`line follower robot kit\` | \`/products\` | \`/products/competition/ttrc-lf-5-0\` | Dedicated PID competition kit destination | Approved pricing (₹3,800/₹4,800) live on canonical | Improved organic visibility for competition seekers |
| 2026-09-11 | \`300 rpm geared motor\` | \`/products/robotics-components\` | \`/products/robotics-components/ttrc-dgj-300rpm\` | Specific component canonical launched (TT000016) | Exact specs and ₹650 pricing live | Captures transactional component intent |
| 2026-09-11 | \`600 rpm geared motor\` | \`/products/robotics-components\` | \`/products/robotics-components/ttrc-dgj-600rpm\` | Specific component canonical launched (TT000017) | Exact specs and ₹700 pricing live | High-intent hardware sales lead generation |
| 2026-09-11 | \`robotics lab setup for schools\` | \`/services\` | \`/solutions/schools\` | B2B educational solution alignment | Solution page covers turnkey lab setups | Institutional school lead generation |
| 2026-09-11 | \`industrial automation Coimbatore\` | \`/services\` | \`/services/industrial-automation\` | Dedicated commercial service page ownership | Direct alignment with regional manufacturing intent | Industrial automation RFQ capture |
`;

fs.writeFileSync(path.join(rootDir, 'docs', 'SEO_KEYWORD_CHANGELOG.md'), changelogMd, 'utf8');
console.log('Successfully written docs/SEO_KEYWORD_CHANGELOG.md');

// ─────────────────────────────────────────────────────────────
// 7. docs/SEO_90_DAY_ROADMAP.md
// ─────────────────────────────────────────────────────────────
const roadmapMd = `# Tamizh Tech SEO 90-Day Execution Roadmap

Objective: Structured organic search growth maximizing qualified technical traffic and B2B/institutional enquiries across India and global markets.

---

## Month 1: Technical Foundation, Indexation & Core Commercial Mapping
* **Milestones**:
  1. Verify Google Search Console site ownership for \`https://www.tamizhtech.in/\`.
  2. Inspect XML sitemap coverage ensuring all 13 products, 8 competition guides, 9 services, and 5 solutions are submitted without crawl errors.
  3. Validate JSON-LD structured data: \`Product\` markup on catalogue pages, \`Article\` + \`BreadcrumbList\` on competition guides, \`Organization\` on homepage.
  4. Benchmark initial Google Search Console query impressions, average ranking positions, and click-through rates (CTR).
  5. Establish internal linking between related products and competition guides (e.g. RS-5.0 from Robo Soccer guide).

---

## Month 2: Competition, STEM & Long-Tail Intent Optimization
* **Milestones**:
  1. Monitor Search Console for competition queries (\`robo soccer robot\`, \`line follower kit\`, \`600 rpm motor\`).
  2. Identify high-impression / low-CTR queries ranking on positions 4 to 15.
  3. Refine on-page H2 subheadings, bulleted technical specifications, and AEO quick answers based on observed user queries.
  4. Launch educational content supporting school and college lab setups (\`/solutions/schools\` and \`/solutions/colleges\`).
  5. Expand non-commercial academic engagement: connect with collegiate robotics symposiums and event organizers for natural editorial link citations.

---

## Month 3: GSC-Driven Content Refinement & Institutional Authority Building
* **Milestones**:
  1. Conduct full Cannibalization & Query-Mismatch Audit using live GSC performance exports.
  2. Reassign target pages where Search Console indicates Google favors a different canonical URL.
  3. Strengthen commercial service pages (\`industrial-automation\`, \`pcb-design\`, \`3d-printing\`) with regional case studies and proof of work.
  4. Track conversion volume: measure quote modal submissions originating from organic search landing pages.
  5. Review Semrush keyword ranking movements for the Top 100 benchmark set.

---

## Core SEO Governance Rules
* **No Doorway Pages**: Reject programmatic location pages (e.g. \`/robotics-coimbatore\`, \`/robotics-chennai\`). Local signals remain integrated on canonical pages.
* **No Fictitious Ecommerce**: Tamizh Tech operates strictly on **Catalogue + Enquiry**. Never add fake cart buttons, prices not verified by management, or fabricated reviews.
* **No Scaled Thin Content**: Content must be authored for human engineers and educators first.
`;

fs.writeFileSync(path.join(rootDir, 'docs', 'SEO_90_DAY_ROADMAP.md'), roadmapMd, 'utf8');
console.log('Successfully written docs/SEO_90_DAY_ROADMAP.md');

console.log('All Phase 7C artifacts generated successfully.');
