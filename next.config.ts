import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  version: 2,
  builds: [
    {
      src: "package.json",
      use: "@vercel/next",
    },
  ],
};

export default nextConfig;
