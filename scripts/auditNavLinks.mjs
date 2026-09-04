import fs from 'fs';

const navContent = fs.readFileSync('src/data/navigation.ts', 'utf8');
const footerContent = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');

const hrefMatches = [
  ...navContent.matchAll(/href:\s*["']([^"']+)["']/g),
  ...footerContent.matchAll(/href=["']([^"']+)["']/g)
];

const links = [...new Set(hrefMatches.map(m => m[1]))];
console.log(`Found ${links.length} unique links in Navbar & Footer:`);

const validRoots = [
  '/',
  '/solutions',
  '/products',
  '/products/competition',
  '/products/competition/rc-robo-race',
  '/products/competition/rc-robo-soccer',
  '/products/radio-controllers',
  '/products/radio-controllers/flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver',
  '/services',
  '/services#robotics',
  '/services#industrial-automation',
  '/services#3d-printing',
  '/services#laser-cutting',
  '/services#pcb-services',
  '/services#embedded',
  '/services#iot',
  '/services#ai',
  '/services#drone',
  '/services#stem',
  '/services#research',
  '/services#training',
  '/services#consulting',
  '/industrial-automation-coimbatore',
  '/robotics-company-in-coimbatore',
  '/schools',
  '/colleges',
  '/courses',
  '/courses/school',
  '/courses/college',
  '/courses/professionals',
  '/blog',
  '/blog/robotics',
  '/blog/industrial-automation',
  '/blog/education',
  '/projects',
  '/events',
  '/about',
  '/about#faq',
  '/founder',
  '/careers',
  '/robotics-club/join',
  '/contact',
  '/privacy',
  '/terms',
  '/cookies',
  '/sitemap.xml',
  'https://www.linkedin.com/company/tamizh-tech-robotics-company',
  'https://www.instagram.com/tamizh_tech_robotics_company',
  'https://www.youtube.com/@covaiscientist',
  'https://www.facebook.com',
  'https://wa.me/918148045030',
  'tel:+918148045030',
  'mailto:info@tamizhtech.in'
];

let issues = 0;
for (const link of links) {
  const base = link.split('?')[0];
  if (validRoots.includes(base) || validRoots.includes(link)) {
    console.log(`  ✅ ${link}`);
  } else {
    console.log(`  ⚠️ UNVERIFIED: ${link}`);
    issues++;
  }
}

if (issues === 0) {
  console.log('\n🎉 ALL NAVBAR & FOOTER LINKS FULLY VERIFIED!');
} else {
  console.log(`\n❌ Found ${issues} unverified links.`);
  process.exit(1);
}
