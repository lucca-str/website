import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  typedRoutes: true,
  images: {
    // Kept deliberately small: every (width × quality × format) combination is a
    // separate Vercel image transformation, and the Hobby plan caps them per month.
    formats: ['image/webp'],
    qualities: [75],
    deviceSizes: [640, 828, 1080, 1280, 1920, 2560],
    imageSizes: [256, 384],
    // Static imports are content-hashed, so long caching is safe.
    minimumCacheTTL: 2678400, // 31 days
    // Emergency switch if the optimization quota is ever exhausted.
    unoptimized: process.env.NEXT_IMAGES_UNOPTIMIZED === '1',
  },
}

export default nextConfig
