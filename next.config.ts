import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  assetPrefix:
    process.env.NODE_ENV === "production" ? "https://kwgon0212.github.io" : "",
  images: {
    unoptimized: true,
    domains: ["i.namu.wiki", "firebasestorage.googleapis.com"],
  },
  output: "export",
};

export default nextConfig;
