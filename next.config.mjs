const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: '/next-js',
  basePath: '/next-js',
  output: 'export'
};

export default nextConfig;