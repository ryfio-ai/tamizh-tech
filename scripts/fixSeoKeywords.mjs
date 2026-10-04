import fs from 'fs';

const filePath = 'src/data/seoKeywordMaster.ts';
let content = fs.readFileSync(filePath, 'utf8');

const replacements = [
  ['"primaryUrl": "/learn/school-students"', '"primaryUrl": "/solutions/schools"'],
  ['"primaryUrl": "/learn/engineering-students"', '"primaryUrl": "/solutions/students-makers"'],
  ['"primaryUrl": "/learn/industrial-training"', '"primaryUrl": "/courses/professionals/industrial-iot"'],
  ['"primaryUrl": "/services/engineering-rd"', '"primaryUrl": "/services/robotics-automation"'],
  ['"primaryUrl": "/services/pcb-design"', '"primaryUrl": "/services/pcb-design-fabrication-assembly"'],
  ['"primaryUrl": "/services/embedded-iot"', '"primaryUrl": "/services/robotics-automation"'],
  ['"primaryUrl": "/services/ai-vision"', '"primaryUrl": "/services/industrial-automation"'],
  ['"primaryUrl": "/services/stem-lab-setup"', '"primaryUrl": "/solutions/schools"'],
];

let totalReplaced = 0;
for (const [from, to] of replacements) {
  let count = 0;
  while (content.includes(from)) {
    content = content.replace(from, to);
    count++;
  }
  console.log(`${from} -> ${to} (${count} occurrences)`);
  totalReplaced += count;
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`Successfully replaced ${totalReplaced} non-canonical keyword URLs.`);
