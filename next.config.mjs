/** @type {import('next').NextConfig} */
const nextConfig = {
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
      // ── Legacy Flat Product URLs → Canonical Hierarchical URLs (HTTP 308) ──
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
        source: '/products/flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver',
        destination: '/products/radio-controllers/flysky-fs-i6x-2.4ghz-6ch-afhds-2a-rc-transmitter-with-fs-ia10b-2.4ghz-10ch-receiver',
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
        destination: '/courses/college/drone-design',
        permanent: true,
      },
      {
        source: '/courses/industrial-iot',
        destination: '/courses/professionals/industrial-iot',
        permanent: true,
      },
      {
        source: '/courses/ros-robotics',
        destination: '/courses/professionals/ros-robotics',
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
      // ── Legacy Flat Project URLs → Canonical Hierarchical URLs (HTTP 308) ──
      {
        source: '/projects/autonomous-navigation-robot',
        destination: '/projects/robotics-logistics/autonomous-navigation-robot',
        permanent: true,
      },
      {
        source: '/projects/ai-vision-quality-inspection',
        destination: '/projects/artificial-intelligence/ai-vision-quality-inspection',
        permanent: true,
      },
      {
        source: '/projects/agricultural-drone-system',
        destination: '/projects/drone-technology/agricultural-drone-system',
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
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com https://maps.gstatic.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https: http:",
              "frame-src 'self' https://www.google.com https://maps.google.com https://lottie.host",
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

