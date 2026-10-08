import type { Metadata } from 'next'
import { site } from '@/content/site'

const ogImage = { url: site.ogImage, width: 1200, height: 630, alt: site.name }

type PageMetadataInput = {
  /** Page name; omitted for the home page, which uses the full site title. */
  title?: string
  description?: string
  path: string
}

/** Per-page title, description and canonical URL, mirrored into Open Graph and Twitter. */
export function pageMetadata({
  title,
  description = site.description,
  path,
}: PageMetadataInput): Metadata {
  const fullTitle = title ? `${title} – ${site.name}` : site.title
  return {
    title: title ?? { absolute: site.title },
    description,
    alternates: { canonical: path },
    openGraph: { type: 'website', url: path, title: fullTitle, description, images: [ogImage] },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [ogImage.url] },
  }
}
