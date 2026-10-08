import type { Route } from 'next'
import Link from 'next/link'
import { Reveal } from '@/components/motion/Reveal'
import type { Project } from '@/content/types'
import { TileMedia } from './TileMedia'

const cardSizes =
  '(min-width: 1200px) calc((min(100vw - 200px, 1600px) - 80px) / 3), (min-width: 810px) calc(100vw - 96px), calc(100vw - 32px)'

/** Work-page card: image, title, tag. */
export function ProjectCard({ slug, project }: { slug: string; project: Project }) {
  return (
    <Reveal transition="tile">
      <Link href={`/${slug}` as Route} className="group flex flex-col">
        <TileMedia src={project.cover.src} alt={project.cover.alt} sizes={cardSizes} />
        <h2 className="mt-4 type-card">{project.title}</h2>
        <p className="mt-2 type-label text-fg-subtle">{project.tag}</p>
      </Link>
    </Reveal>
  )
}
