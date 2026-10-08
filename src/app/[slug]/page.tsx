import { notFound } from 'next/navigation'
import { CaseStudy } from '@/components/case-study/CaseStudy'
import { pageMetadata } from '@/lib/metadata'
import { getNextSlug, getProject, isProjectSlug, projectSlugs } from '@/lib/projects'

// Only the known case studies exist; anything else is a 404.
export const dynamicParams = false

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps<'/[slug]'>) {
  const { slug } = await params
  if (!isProjectSlug(slug)) return {}
  const { title, description } = getProject(slug)
  return pageMetadata({ title, description, path: `/${slug}` })
}

export default async function CaseStudyPage({ params }: PageProps<'/[slug]'>) {
  const { slug } = await params
  if (!isProjectSlug(slug)) notFound()
  return <CaseStudy project={getProject(slug)} nextSlug={getNextSlug(slug)} />
}
