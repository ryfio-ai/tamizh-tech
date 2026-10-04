/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: '.',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "assets.aceternity.com" },
    ],
  },
  poweredByHeader: false,
  experimental: {
    workerThreads: false,
    cpus: 1
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'tamizhtech.in',
          },
        ],
        destination: 'https://www.tamizhtech.in/:path*',
        permanent: true,
      },
      // ── Language Alternate Aliases ──
      {
        source: '/en-us',
        destination: '/',
        permanent: true,
      },
      {
        source: '/ta',
        destination: '/',
        permanent: true,
      },
      // ── Legacy Flat Product URLs → Canonical Hierarchical URLs (HTTP 308) ──
      {
        source: '/products/competition/ttrc-lf-5-0',
        destination: '/products/competition/ttrc-lf-6-0',
        permanent: true,
      },
      {
        source: '/products/ttrc-lf-5-0',
        destination: '/products/competition/ttrc-lf-6-0',
        permanent: true,
      },
      {
        source: '/products/rc-robo-race',
        destination: '/products/competition/rc-robo-race',
        permanent: true,
      },
      {
        source: '/products/rc-robo-soccer',
        destination: '/products/competition/rc-robo-soccer',
        permanent: true,
      },
      {
        source: '/products/competition/rc-robo-war',
        destination: '/products/competition',
        permanent: true,
      },
      {
        source: '/products/competition/rc-robo-sumo',
        destination: '/products/competition',
        permanent: true,
      },
      {
        source: '/products/radio-controllers/flysky-fs-i6-transmitter',
        destination: '/products/radio-controllers/flysky-fs-i6-2.4g-6ch',
        permanent: true,
      },
      {
        source: '/products/radio-controllers/flysky-fs-i6x-transmitter',
        destination: '/products/radio-controllers/flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver',
        permanent: true,
      },
      {
        source: '/products/flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver',
        destination: '/products/radio-controllers/flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver',
        permanent: true,
      },
      // ── DC Motors Alternate & Flat URLs → Canonical Hierarchical URLs (HTTP 308) ──
      {
        source: '/products/dc-motors/ttrc-dgj-300rpm',
        destination: '/products/robotics-components/ttrc-dgj-300rpm',
        permanent: true,
      },
      {
        source: '/products/dc-motors/ttrc-dgj-600rpm',
        destination: '/products/robotics-components/ttrc-dgj-600rpm',
        permanent: true,
      },
      {
        source: '/products/ttrc-dgj-300rpm',
        destination: '/products/robotics-components/ttrc-dgj-300rpm',
        permanent: true,
      },
      {
        source: '/products/ttrc-dgj-600rpm',
        destination: '/products/robotics-components/ttrc-dgj-600rpm',
        permanent: true,
      },
      // ── Legacy Flat Course URLs → Canonical Hierarchical URLs (HTTP 308) ──
      {
        source: '/courses/robotics-for-schools',
        destination: '/courses/school/robotics-for-schools',
        permanent: true,
      },
      {
        source: '/courses/stem-basics',
        destination: '/courses/school/stem-basics',
        permanent: true,
      },
      {
        source: '/courses/embedded-systems',
        destination: '/courses/college/embedded-systems',
        permanent: true,
      },
      {
        source: '/courses/drone-design',
        destination: '/courses/college/drone-engineering',
        permanent: true,
      },
      {
        source: '/courses/college/drone-design',
        destination: '/courses/college/drone-engineering',
        permanent: true,
      },
      {
        source: '/courses/industrial-iot',
        destination: '/courses/professionals/industrial-automation-plc',
        permanent: true,
      },
      {
        source: '/courses/professionals/industrial-iot',
        destination: '/courses/professionals/industrial-automation-plc',
        permanent: true,
      },
      {
        source: '/courses/ros-robotics',
        destination: '/courses',
        permanent: true,
      },
      {
        source: '/courses/professionals/ros-robotics',
        destination: '/courses',
        permanent: true,
      },
      // ── Legacy Flat Blog URLs → Canonical Hierarchical URLs (HTTP 308) ──
      {
        source: '/blog/how-to-build-a-combat-robot',
        destination: '/blog/robotics/how-to-build-a-combat-robot',
        permanent: true,
      },
      {
        source: '/blog/plc-vs-scada-difference',
        destination: '/blog/industrial-automation/plc-vs-scada-difference',
        permanent: true,
      },
      {
        source: '/blog/best-robotics-kits-engineering-students-india',
        destination: '/blog/education/best-robotics-kits-engineering-students-india',
        permanent: true,
      },
      {
        source: '/blog/opencv-for-beginners',
        destination: '/blog/artificial-intelligence/opencv-for-beginners',
        permanent: true,
      },
      {
        source: '/blog/stem-tinkering-lab-setup-schools',
        destination: '/blog/education/stem-tinkering-lab-setup-schools',
        permanent: true,
      },
      {
        source: '/blog/robotics-course-tamil-vs-english',
        destination: '/blog/education/robotics-course-tamil-vs-english',
        permanent: true,
      },
      // ── Solutions & Entity Consolidation (HTTP 308) ──
      {
        source: '/schools',
        destination: '/solutions/schools',
        permanent: true,
      },
      {
        source: '/colleges',
        destination: '/solutions/colleges',
        permanent: true,
      },
      {
        source: '/industries',
        destination: '/solutions/industries',
        permanent: true,
      },
      {
        source: '/solutions/stem-lab-setup-schools',
        destination: '/solutions/schools',
        permanent: true,
      },
      {
        source: '/solutions/schools-stem-lab',
        destination: '/solutions/schools',
        permanent: true,
      },
      {
        source: '/solutions/colleges-robotics-coe',
        destination: '/solutions/colleges',
        permanent: true,
      },
      {
        source: '/solutions/colleges-coe',
        destination: '/solutions/colleges',
        permanent: true,
      },
      // ── Services Keyword & Legacy Aliases (HTTP 308) ──
      {
        source: '/services/laser-cutting-coimbatore',
        destination: '/services/laser-cutting',
        permanent: true,
      },
      {
        source: '/services/3d-printing-coimbatore',
        destination: '/services/3d-printing',
        permanent: true,
      },
      {
        source: '/services/pcb-assembly-tamilnadu',
        destination: '/services/pcb-design-fabrication-assembly',
        permanent: true,
      },
      {
        source: '/services/pcb-services',
        destination: '/services/pcb-design-fabrication-assembly',
        permanent: true,
      },
      {
        source: '/services/pcb-design',
        destination: '/services/pcb-design-fabrication-assembly',
        permanent: true,
      },
      {
        source: '/services/engineering-rd',
        destination: '/services/robotics-automation',
        permanent: true,
      },
      {
        source: '/services/embedded-iot',
        destination: '/services/robotics-automation',
        permanent: true,
      },
      {
        source: '/services/ai-vision',
        destination: '/services/industrial-automation',
        permanent: true,
      },
      {
        source: '/services/stem-lab-setup',
        destination: '/solutions/schools',
        permanent: true,
      },
      // ── Products Keyword & Legacy Aliases (HTTP 308) ──
      {
        source: '/products/competition-robots',
        destination: '/products/competition',
        permanent: true,
      },
      {
        source: '/products/competition-kits',
        destination: '/products/competition',
        permanent: true,
      },
      {
        source: '/products/line-follower',
        destination: '/products/competition/ttrc-lf-6-0',
        permanent: true,
      },
      // ── Learn & Blog Aliases (HTTP 308) ──
      {
        source: '/learn',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/learn/:path*',
        destination: '/blog/:path*',
        permanent: true,
      },
      // ── Club, About & Founder Consolidation ──
      {
        source: '/club',
        destination: '/robotics-club',
        permanent: true,
      },
      {
        source: '/about-tamizh-tech',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/founder',
        destination: '/team',
        permanent: true,
      },
      // ── Legacy Project Category 404 Fixes (HTTP 308) ──
      {
        source: '/projects/robotics-logistics',
        destination: '/projects/logistics-retail',
        permanent: true,
      },
      {
        source: '/projects/artificial-intelligence',
        destination: '/projects/computer-vision-edge-ai',
        permanent: true,
      },
      {
        source: '/projects/drone-technology',
        destination: '/projects/agri-tech',
        permanent: true,
      },
      // ── Legacy Flat Project URLs → Canonical Hierarchical URLs (HTTP 308) ──
      {
        source: '/projects/autonomous-navigation-robot',
        destination: '/projects/logistics-retail',
        permanent: true,
      },
      {
        source: '/projects/ai-vision-quality-inspection',
        destination: '/projects/computer-vision-edge-ai',
        permanent: true,
      },
      {
        source: '/projects/agricultural-drone-system',
        destination: '/projects/agri-tech',
        permanent: true,
      },
      // ── Legacy Flat Event URLs → Canonical Hierarchical URLs (HTTP 308) ──
      {
        source: '/events/national-robotics-championship-2026',
        destination: '/events/competition/national-robotics-championship-2026',
        permanent: true,
      },
      {
        source: '/events/autonomous-drones-workshop',
        destination: '/events/workshop/autonomous-drones-workshop',
        permanent: true,
      },
      {
        source: '/events/industrial-iot-edge-ai-bootcamp',
        destination: '/events/bootcamp/industrial-iot-edge-ai-bootcamp',
        permanent: true,
      },
      {
        source: '/events/future-of-industrial-automation',
        destination: '/events/webinar/future-of-industrial-automation',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com https://maps.gstatic.com https://www.googletagmanager.com https://*.googletagmanager.com https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https: http:",
              "frame-src 'self' https://www.google.com https://maps.google.com https://lottie.host https://www.googletagmanager.com https://*.googletagmanager.com",
              "connect-src 'self' https:",
            ].join("; "),
          },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;

