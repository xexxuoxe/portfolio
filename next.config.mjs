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
    unoptimized: true,
  },
};

export default nextConfig;
