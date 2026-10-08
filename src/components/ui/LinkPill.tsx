import type { LinkPill as LinkPillData } from '@/content/types'
import { buttonStyles } from './button-styles'
import { LinkIcon } from './icons'
import { SmartLink } from './SmartLink'

export function LinkPill({ link }: { link: LinkPillData }) {
  return (
    <SmartLink href={link.href} className={buttonStyles.link}>
      {link.label}
      <LinkIcon className="size-4" />
    </SmartLink>
  )
}
