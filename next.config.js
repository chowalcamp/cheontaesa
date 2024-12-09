/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // 권장: Strict Mode 활성화
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: ["mailtree.s3.ap-northeast-2.amazonaws.com"],
    formats: ["image/avif", "image/webp"],
    unoptimized: false, // 필요 시 이미지 최적화 비활성화 가능
  },
  async rewrites() {
    return [
      {
        source: "/auth/api/:path*",
        destination: process.env.API_URL || "http://localhost:3000/:path*", // 환경 변수 사용
      },
    ];
  },

  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://yourdomain.com",
          }, // 보안 강화
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
