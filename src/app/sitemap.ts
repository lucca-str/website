import type { MetadataRoute } from 'next'
import { site } from '@/content/site'
import { projectSlugs } from '@/lib/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', '/work', '/about', '/contact', ...projectSlugs.map((slug) => `/${slug}`)]
  return paths.map((path) => ({ url: new URL(path, site.url).href }))
}
