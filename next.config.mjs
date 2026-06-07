/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live https://va.vercel-scripts.com https://www.googletagmanager.com https://www.google-analytics.com https://mc.yandex.ru",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https: blob:",
      "font-src 'self' data:",
      "connect-src 'self' https://vercel.live https://va.vercel-scripts.com https://*.blob.vercel-storage.com https://www.google-analytics.com https://analytics.google.com https://mc.yandex.ru https://mc.yandex.com",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  },
];

const nextConfig = {
  output: 'standalone',

  eslint: {
    dirs: ['app', 'components', 'lib'],
    ignoreDuringBuilds: true,
  },

  typescript: {
    tsconfigPath: './tsconfig.json',
    ignoreBuildErrors: true,
  },

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.blob.vercel-storage.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year cache
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  experimental: {
    serverComponentsExternalPackages: ['@formatjs/intl-localematcher'],
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
    optimizeCss: true,
    workerThreads: false,
    cpus: 1,
  },

  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,

  webpack: (config, { isServer }) => {
    if (isServer) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
          },
        },
      };
    }
    return config;
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      // Long cache for static assets
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Cache fonts
      {
        source: '/fonts/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Redirect root to default locale
      {
        source: '/',
        destination: '/es',
        permanent: true, // 301 redirect
      },
      // Redirect /blog/* to /ru/blog/* (default locale)
      {
        source: '/blog',
        destination: '/es/blog',
        permanent: true,
      },
      {
        source: '/blog/:slug*',
        destination: '/es/blog/:slug*',
        permanent: true,
      },
      // Redirect /solutions/* to /ru/solutions/*
      {
        source: '/solutions',
        destination: '/es/solutions',
        permanent: true,
      },
      {
        source: '/solutions/:slug*',
        destination: '/es/solutions/:slug*',
        permanent: true,
      },
      // Redirect /cases/* to /ru/cases/*
      {
        source: '/cases',
        destination: '/es/cases',
        permanent: true,
      },
      {
        source: '/cases/:slug*',
        destination: '/es/cases/:slug*',
        permanent: true,
      },
      // Redirect /platform/* to /ru/platform/*
      {
        source: '/platform',
        destination: '/es/platform',
        permanent: true,
      },
      {
        source: '/platform/:slug*',
        destination: '/es/platform/:slug*',
        permanent: true,
      },
      // Other main pages
      {
        source: '/about',
        destination: '/es/about',
        permanent: true,
      },
      {
        source: '/contacts',
        destination: '/es/contacts',
        permanent: true,
      },
      {
        source: '/faq',
        destination: '/es/faq',
        permanent: true,
      },
      {
        source: '/partners',
        destination: '/es/partners',
        permanent: true,
      },
      {
        source: '/careers',
        destination: '/es/careers',
        permanent: true,
      },
      {
        source: '/docs',
        destination: '/es/docs',
        permanent: true,
      },
      {
        source: '/support',
        destination: '/es/support',
        permanent: true,
      },
      {
        source: '/login',
        destination: '/es/login',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/es/privacy',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/es/terms',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
