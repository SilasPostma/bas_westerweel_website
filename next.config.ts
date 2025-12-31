import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isGithubPages ? "/bas_westerweel_website" : "",
  assetPrefix: isGithubPages ? "/bas_westerweel_website/" : "",
};

export default nextConfig;