import type { NextConfig } from "next";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isProjectPage = Boolean(
  process.env.GITHUB_ACTIONS && repository && !repository.endsWith(".github.io"),
);
const basePath = isProjectPage ? `/${repository}` : "";

const nextConfig: NextConfig = {
  output: process.env.GITHUB_ACTIONS ? "export" : undefined,
  typescript: process.env.GITHUB_ACTIONS
    ? { tsconfigPath: "tsconfig.pages.json" }
    : undefined,
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
