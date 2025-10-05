import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picx.zhimg.com',
      },
    ],
  },
};

export default nextConfig;
