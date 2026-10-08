import type { Tag } from './types'

export type WorkFilter = { label: string; tag: Tag | null }

export const work = {
  title: 'My Work',
  description:
    'Selected projects by Lucca Strecker: product strategy, UX/UI design and case studies for robotics, AI and SaaS products.',
  /** Note: the pill says "UI/UX" while the project tag reads "UX/UI" — as on the original. */
  filters: [
    { label: 'Show All', tag: null },
    { label: 'Strategy', tag: 'Strategy' },
    { label: 'UI/UX', tag: 'UX/UI' },
    { label: 'Case Studies', tag: 'Case Study' },
  ] satisfies WorkFilter[],
}
