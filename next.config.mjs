/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  poweredByHeader: false,
  experimental: {
    workerThreads: false,
    cpus: 1
  },
};

export default nextConfig;
