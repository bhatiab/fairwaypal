import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    tsconfigPath: './tsconfig.next.json',
  },
  eslint: {
    // Lint errors (e.g. react-hooks/set-state-in-effect) shouldn't fail the build.
    // `next lint` / `bun run lint` still catch them for local dev.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      { source: '/calendar', destination: '/', permanent: true },
      { source: '/index', destination: '/', permanent: true },
      // Merged into the destination guides (Oct 2026): one URL per query.
      { source: '/blog/kiawah-island-golf-trip', destination: '/destinations/kiawah-island', statusCode: 301 },
      { source: '/blog/pebble-beach-golf-trip', destination: '/destinations/pebble-beach', statusCode: 301 },
    ]
  },
}

initOpenNextCloudflareForDev()

export default nextConfig
