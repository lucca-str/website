import { cx } from '@/lib/cx'

/**
 * Class names for the pill buttons, shared by links and <button>s.
 * Hover states are CSS transitions with Framer's springs (see src/styles/motion.css).
 * Outlines are inset rings, not borders: like Framer's, they don't add to the size.
 */
const pill = 'inline-flex shrink-0 items-center justify-center rounded-full whitespace-nowrap'

export const buttonStyles = {
  /** Black pill: "All Work", "Connect". */
  primary: cx(
    pill,
    'type-button h-10 w-31 bg-fg text-bg shadow-pill',
    'spring-snappy transition-[background-color,color,box-shadow] hover:bg-line hover:text-fg hover:shadow-none',
  ),
  /** Outlined pill with a link icon: "Full Documentation", "Link to Project". */
  link: cx(
    pill,
    'type-label h-10 gap-2 px-4 text-fg ring-1 ring-fg-subtle ring-inset',
    'spring-snappy transition-opacity hover:opacity-75',
  ),
  /** Soft pill with an arrow: "Next Project". */
  next: cx(
    pill,
    'type-button h-14 gap-2 px-4 text-fg opacity-75 shadow-pill ring-1 ring-line ring-inset',
    'spring-snappy transition-opacity hover:opacity-100',
  ),
  /** Work page filter pills. */
  filter: cx(pill, 'type-label h-10 px-4 spring-base transition-[opacity,background-color,color]'),
  filterActive: 'bg-fg text-bg hover:opacity-75',
  filterInactive: 'text-fg opacity-75 ring-1 ring-fg-subtle ring-inset hover:opacity-100',
}
