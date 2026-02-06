import type { NextConfig } from "next";

// 从环境变量读取 basePath
// 默认为空字符串（用于 Vercel 以及阿里云根路径部署）
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["localhost", "10.8.10.51"],
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
