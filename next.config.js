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
    ]
  },
}

initOpenNextCloudflareForDev()

export default nextConfig
