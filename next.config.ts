import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bavjv2s0wh8dm7lx.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
