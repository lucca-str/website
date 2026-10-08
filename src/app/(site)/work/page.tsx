import { Container } from '@/components/layout/Container'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { WorkGrid } from '@/components/projects/WorkGrid'
import { PageTitle } from '@/components/ui/PageTitle'
import { work } from '@/content/work'
import { pageMetadata } from '@/lib/metadata'
import { getProjects } from '@/lib/projects'

export const metadata = pageMetadata({
  title: 'Work',
  description: work.description,
  path: '/work',
})

export default function WorkPage() {
  const items = getProjects().map(({ slug, ...project }) => ({
    key: slug,
    tag: project.tag,
    card: <ProjectCard slug={slug} project={project} />,
  }))

  return (
    <>
      <PageTitle tabletHeight="short" phoneHeight="short">
        {work.title}
      </PageTitle>
      <Container className="pb-25 tablet:pb-0 desktop:pb-25">
        <WorkGrid filters={work.filters} items={items} />
      </Container>
    </>
  )
}
