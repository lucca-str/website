import { Hero } from '@/components/home/Hero'
import { Statement } from '@/components/home/Statement'
import { Container } from '@/components/layout/Container'
import { FeaturedTile } from '@/components/projects/FeaturedTile'
import { buttonStyles } from '@/components/ui/button-styles'
import { SmartLink } from '@/components/ui/SmartLink'
import { home } from '@/content/home'
import { pageMetadata } from '@/lib/metadata'
import { getProject } from '@/lib/projects'

export const metadata = pageMetadata({ path: '/' })

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="flex min-h-screen items-center pb-30 tablet:pt-12 tablet:pb-31 desktop:py-20">
        <Container className="pt-12 tablet:pt-0">
          <Statement lines={home.statement} className="type-title tablet:type-statement" />
        </Container>
      </section>

      <Container className="flex flex-col gap-20 pt-12 desktop:gap-31 desktop:pt-25">
        {home.featured.map((tile, index) => (
          <FeaturedTile
            key={tile.slug}
            slug={tile.slug}
            title={tile.title}
            summary={tile.summary}
            cover={getProject(tile.slug).cover}
            imageSide={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
        <div className="flex h-12 items-center justify-center">
          <SmartLink href={home.allWork.href} className={buttonStyles.primary}>
            {home.allWork.label}
          </SmartLink>
        </div>
      </Container>
    </>
  )
}
