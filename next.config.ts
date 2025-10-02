import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://kwgon0212.github.io/portfolio"
      : "",
  images: {
    domains: ["i.namu.wiki", "firebasestorage.googleapis.com"],
  },
};

export default nextConfig;
