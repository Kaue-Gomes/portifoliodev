import type { MetadataRoute } from 'next'

const base =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portifolio-cyan-psi-61.vercel.app'

export default function robots(): MetadataRoute.Robots {
  const normalized = base.replace(/\/$/, '')
  const host = new URL(normalized).host

  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${normalized}/sitemap.xml`,
    host,
  }
}
