import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // version: 2,
  // builds: [
  //   {
  //     src: "package.json",
  //     use: "@vercel/next",
  //   },
  // ],
  experimental: {
    turbo: {},
  },
};

export default nextConfig;
