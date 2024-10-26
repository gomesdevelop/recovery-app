import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  env: {
    NEXT_PUBLIC_MSG: process.env.NEXT_PUBLIC_MSG,
  },
};

export default nextConfig;
