import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.yandexcloud.net",
        port: "",
        pathname: "/project-isolation/**",
      },
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
