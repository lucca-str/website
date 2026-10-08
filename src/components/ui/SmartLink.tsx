import Link from 'next/link'
import type { Route } from 'next'
import type { ComponentProps } from 'react'

export type Href = Route | `https://${string}` | `mailto:${string}`

type SmartLinkProps = Omit<ComponentProps<'a'>, 'href'> & { href: Href }

/** Internal routes use next/link (type-checked); external links open in a new tab, like the original. */
export function SmartLink({ href, ...props }: SmartLinkProps) {
  if (href.startsWith('https://') || href.startsWith('mailto:')) {
    return <a href={href} target="_blank" rel="noopener" {...props} />
  }
  return <Link href={href as Route} {...props} />
}
