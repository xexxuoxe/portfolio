/** @type {import('next').NextConfig} */
import path from 'path';

const __dirname = path.resolve();
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/public')],
    //prependData: `@import "@styles/abstracts/variables.scss";`,
   // prependData: `@use "public/styles/variables as *";`,
  },
  webpack: (config) => {
    config.resolve.alias['@styles'] = path.join(__dirname, 'src/styles');
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'siwon-cdn.siwonschool.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'data.siwonschool.com',
        pathname: '**',
      },
    ],
    minimumCacheTTL: 60, // 캐시 유지 시간 (초)
  }
};

export default nextConfig;
