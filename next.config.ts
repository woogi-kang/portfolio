import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
