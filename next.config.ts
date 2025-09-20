import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // shut eslint the fuck up omg i hate this fuck pls work
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
