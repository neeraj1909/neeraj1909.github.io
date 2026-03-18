import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // For user sites like neeraj1909.github.io this should stay empty.
  basePath: isGithubActions && process.env.GITHUB_REPOSITORY !== "neeraj1909/neeraj1909.github.io"
    ? `/${process.env.GITHUB_REPOSITORY?.split("/")[1] ?? ""}`
    : "",
};

export default nextConfig;
