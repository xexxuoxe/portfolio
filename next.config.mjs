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
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(__dirname, 'src'),
      '@app': path.join(__dirname, 'src/app'),
      '@components': path.join(__dirname, 'src/components'),
      '@hooks': path.join(__dirname, 'src/hooks'),
      '@lib': path.join(__dirname, 'src/lib'),
      '@store': path.join(__dirname, 'src/store'),
      '@repositories': path.join(__dirname, 'src/repositories'),
      '@services': path.join(__dirname, 'src/services'),
      '@styles': path.join(__dirname, 'src/styles'),
      '@type': path.join(__dirname, 'src/type'),
      'locomotive-scroll': path.join(__dirname, 'node_modules/locomotive-scroll/dist/locomotive-scroll.js')
    };
    return config;
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;