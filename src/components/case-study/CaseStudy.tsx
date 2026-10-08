import { Container } from '@/components/layout/Container'
import { YouTubeFacade } from '@/components/ui/YouTubeFacade'
import type { Project, Section } from '@/content/types'
import { assertNever } from '@/lib/assert-never'
import { fullSizes } from '@/lib/image-sizes'
import { Gallery } from './Gallery'
import { Intro } from './Intro'
import { MediaTile } from './MediaTile'
import { NextProject } from './NextProject'
import { TextSection } from './TextSection'

/** The one template behind every case study. Blocks are 56 / 80 / 120px apart (phone / tablet / desktop). */
export function CaseStudy({ project, nextSlug }: { project: Project; nextSlug?: string }) {
  return (
    <article>
      <Container className="pt-2.5 tablet:pt-0 desktop:pt-[110px]">
        {/* The title sits at the bottom of a 60vh band, just above the hero. */}
        <div className="flex h-[60vh] items-end pb-10 tablet:pb-15">
          <h1 className="type-title tablet:type-statement">{project.title}</h1>
        </div>
      </Container>

      <Container className="flex flex-col gap-14 pb-[110px] tablet:gap-20 tablet:pb-25 desktop:gap-30 desktop:pb-[110px]">
        <MediaTile
          media={project.cover}
          sizes={fullSizes}
          className="aspect-(--media-ratio)"
          priority
        />
        <Intro intro={project.intro} meta={project.meta} />
        {project.sections.map((section, index) => (
          <SectionBlock key={index} section={section} />
        ))}
        {nextSlug ? (
          <div className="flex justify-center pt-30">
            <NextProject slug={nextSlug} />
          </div>
        ) : (
          // Keeps the same spacing before the footer as on the original.
          <div />
        )}
      </Container>
    </article>
  )
}

function SectionBlock({ section }: { section: Section }) {
  switch (section.type) {
    case 'text':
      return <TextSection section={section} />
    case 'gallery':
      return <Gallery rows={section.rows} />
    case 'youtube':
      return (
        <div className="relative aspect-[25/14] overflow-hidden bg-black">
          <YouTubeFacade videoId={section.videoId} poster={section.poster} title={section.title} />
        </div>
      )
    default:
      return assertNever(section)
  }
}
