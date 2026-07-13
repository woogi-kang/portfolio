import type { NextConfig } from "next";

import portfolioPublic from "./content/portfolio-public.json";

const nextConfig: NextConfig = {
  async redirects() {
    return portfolioPublic.legacyRedirects.map((redirect) => ({
      ...redirect,
      permanent: true,
    }));
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pktorvtrnyqsxgerdmtb.supabase.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "velog.velcdn.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
