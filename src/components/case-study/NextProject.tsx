import type { Route } from 'next'
import { buttonStyles } from '@/components/ui/button-styles'
import { ArrowRightIcon } from '@/components/ui/icons'
import { SmartLink } from '@/components/ui/SmartLink'
import { site } from '@/content/site'

export function NextProject({ slug }: { slug: string }) {
  return (
    <SmartLink href={`/${slug}` as Route} className={buttonStyles.next}>
      {site.caseStudy.nextProject}
      <ArrowRightIcon className="size-5" />
    </SmartLink>
  )
}
