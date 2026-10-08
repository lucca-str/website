import type { SVGProps } from 'react'

// Feather icons, as used by the original site (2px stroke in the current color).
const stroke = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
} as const

export function LinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...stroke} {...props}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...stroke} {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

/** The About carousel's arrows, drawn exactly like the original's. */
export function CarouselArrowIcon({
  direction,
  ...props
}: SVGProps<SVGSVGElement> & { direction: 'left' | 'right' }) {
  return (
    <svg {...stroke} viewBox="0 0 40 40" strokeWidth={3} {...props}>
      <path d={direction === 'left' ? 'M22.5 12.5 15 20l7.5 7.5' : 'm18 27.5 7.5-7.5-7.5-7.5'} />
    </svg>
  )
}
