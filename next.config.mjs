/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: '/test',
  output: "export",
  images: { unoptimized: true },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    return config;
  },
};

export default nextConfig;
