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
    minimumCacheTTL: 60,
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
    ];
  },

  async redirects() {
    return [
      // Redirect root to default locale
      {
        source: '/',
        destination: '/ru',
        permanent: true, // 301 redirect
      },
      // Redirect /blog/* to /ru/blog/* (default locale)
      {
        source: '/blog',
        destination: '/ru/blog',
        permanent: true,
      },
      {
        source: '/blog/:slug*',
        destination: '/ru/blog/:slug*',
        permanent: true,
      },
      // Redirect /solutions/* to /ru/solutions/*
      {
        source: '/solutions',
        destination: '/ru/solutions',
        permanent: true,
      },
      {
        source: '/solutions/:slug*',
        destination: '/ru/solutions/:slug*',
        permanent: true,
      },
      // Redirect /cases/* to /ru/cases/*
      {
        source: '/cases',
        destination: '/ru/cases',
        permanent: true,
      },
      {
        source: '/cases/:slug*',
        destination: '/ru/cases/:slug*',
        permanent: true,
      },
      // Redirect /platform/* to /ru/platform/*
      {
        source: '/platform',
        destination: '/ru/platform',
        permanent: true,
      },
      {
        source: '/platform/:slug*',
        destination: '/ru/platform/:slug*',
        permanent: true,
      },
      // Other main pages
      {
        source: '/about',
        destination: '/ru/about',
        permanent: true,
      },
      {
        source: '/contacts',
        destination: '/ru/contacts',
        permanent: true,
      },
      {
        source: '/faq',
        destination: '/ru/faq',
        permanent: true,
      },
      {
        source: '/partners',
        destination: '/ru/partners',
        permanent: true,
      },
      {
        source: '/careers',
        destination: '/ru/careers',
        permanent: true,
      },
      {
        source: '/docs',
        destination: '/ru/docs',
        permanent: true,
      },
      {
        source: '/support',
        destination: '/ru/support',
        permanent: true,
      },
      {
        source: '/login',
        destination: '/ru/login',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/ru/privacy',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/ru/terms',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
