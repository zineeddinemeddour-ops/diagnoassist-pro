import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const githubBasePath = isGitHubPages
  ? process.env.NEXT_PUBLIC_BASE_PATH || ""
  : "";

const nextConfig: NextConfig = {
  ...(isGitHubPages ? { output: "export" as const } : {}),
  basePath: githubBasePath,
  assetPrefix: githubBasePath,
  trailingSlash: isGitHubPages,
  images: { unoptimized: true },
  ...(isGitHubPages
    ? { typescript: { ignoreBuildErrors: true } }
    : {}),
};

export default nextConfig;
