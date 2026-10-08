import { Container } from '@/components/layout/Container'
import { buttonStyles } from '@/components/ui/button-styles'
import { PageTitle } from '@/components/ui/PageTitle'
import { SmartLink } from '@/components/ui/SmartLink'
import { site } from '@/content/site'

export const metadata = { title: site.notFound.title }

export default function NotFound() {
  return (
    <>
      <PageTitle>{site.notFound.title}</PageTitle>
      <Container className="flex flex-col items-center gap-10 pb-25 text-center">
        <p className="type-body">{site.notFound.text}</p>
        <SmartLink href={site.notFound.cta.href} className={buttonStyles.primary}>
          {site.notFound.cta.label}
        </SmartLink>
      </Container>
    </>
  )
}
