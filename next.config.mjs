// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.coolermaster.com",
      },
      {
        protocol: "https",
        hostname: "**.corsair.com",
      },
      {
        protocol: "https",
        hostname: "**.asus.com",
      },
      {
        protocol: "https",
        hostname: "**.nzxt.com",
      },
      {
        protocol: "https",
        hostname: "**.amazon.com",
      },
    ],
  },
};

export default nextConfig;
