import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.GITHUB_ACTIONS ? "export" : undefined,
  typescript: process.env.GITHUB_ACTIONS
    ? {
        tsconfigPath: "tsconfig.pages.json",
        ignoreBuildErrors: true,
      }
    : undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
