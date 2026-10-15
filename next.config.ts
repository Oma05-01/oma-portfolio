import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Local Django server
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/media/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/media/**",
      },
      // Production Cloudinary Media Storage
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      // Production Render Backend (if serving media directly)
      {
        protocol: "https",
        hostname: "*.onrender.com",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;