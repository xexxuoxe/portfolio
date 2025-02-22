// next.config.mjs
/** @type {import('next').NextConfig} */
import path from 'path';

const __dirname = path.resolve();
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/public')],
  },
  webpack: (config) => {
    config.resolve.alias['@styles'] = path.join(__dirname, 'src/styles');
    // locomotive-scroll은 클라이언트에서만 사용되도록 설정
    config.resolve.alias['locomotive-scroll'] = path.join(__dirname, 'node_modules/locomotive-scroll/dist/locomotive-scroll.js');
    return config;
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;