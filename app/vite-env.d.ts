// Provides ImportMeta.env typing for Vite src files compiled by Next.js
interface ImportMeta {
  readonly env: Record<string, string | undefined>
}

// Vite returns image imports as string URLs; override Next.js's StaticImageData type
declare module '*.jpg' {
  const src: string
  export default src
}
declare module '*.jpeg' {
  const src: string
  export default src
}
declare module '*.png' {
  const src: string
  export default src
}
declare module '*.webp' {
  const src: string
  export default src
}
declare module '*.svg' {
  const src: string
  export default src
}
