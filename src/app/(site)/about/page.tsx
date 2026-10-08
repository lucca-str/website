import { Accordion } from '@/components/about/Accordion'
import { AboutCarousel } from '@/components/about/AboutCarousel'
import { Container } from '@/components/layout/Container'
import { PageTitle } from '@/components/ui/PageTitle'
import { about } from '@/content/about'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: 'About',
  description: about.description,
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      <PageTitle tabletHeight="short">{about.title}</PageTitle>

      {/* Clips the carousel's peeking neighbours at the viewport edges. */}
      <section className="overflow-x-clip">
        <Container className="flex flex-col gap-10 pb-20 tablet:gap-6 tablet:pb-0 desktop:gap-10 desktop:py-25">
          <p className="pb-10 type-section tablet:pb-20 tablet:type-title desktop:w-[66%] desktop:pb-6">
            {about.intro}
          </p>
          <div className="pb-10 tablet:pb-20 desktop:pb-0">
            <AboutCarousel slides={about.carousel} labels={about.carouselLabels} />
          </div>
          <div className="grid gap-6 tablet:grid-cols-2 tablet:pb-20 desktop:grid-cols-[33%_1fr_1fr]">
            {about.columns.map((text, index) => (
              <p key={index} className="type-body desktop:first:col-start-2">
                {text}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <Container className="desktop:grid desktop:grid-cols-[33%_1fr] desktop:py-25">
        <h2 className="hidden type-section desktop:block">{about.detailsHeading}</h2>
        <Accordion items={about.details} />
      </Container>
    </>
  )
}
