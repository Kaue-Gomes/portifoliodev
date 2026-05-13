import type { MetadataRoute } from 'next'

const base =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portifolio-cyan-psi-61.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const root = base.replace(/\/$/, '')
  return [
    {
      url: root,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
