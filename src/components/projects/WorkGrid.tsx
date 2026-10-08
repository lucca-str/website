'use client'

import { AnimatePresence, LayoutGroup, motion } from 'motion/react'
import { useState, type ReactNode } from 'react'
import { buttonStyles } from '@/components/ui/button-styles'
import type { WorkFilter } from '@/content/work'
import type { Tag } from '@/content/types'
import { cx } from '@/lib/cx'
import { transitions } from '@/lib/motion'

export type WorkGridItem = { key: string; tag: Tag; card: ReactNode }

/** Filter pills + the project grid. Cards are rendered on the server and passed in. */
export function WorkGrid({ filters, items }: { filters: WorkFilter[]; items: WorkGridItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeTag = filters[activeIndex]?.tag
  const visible = activeTag ? items.filter((item) => item.tag === activeTag) : items

  return (
    <LayoutGroup>
      <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-1">
        {filters.map((filter, index) => (
          <button
            key={filter.label}
            type="button"
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
            className={cx(
              buttonStyles.filter,
              'cursor-pointer',
              index === activeIndex ? buttonStyles.filterActive : buttonStyles.filterInactive,
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <ul className="relative mt-12 grid gap-10 desktop:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((item) => (
            <motion.li
              key={item.key}
              layout="position"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transitions.base}
            >
              {item.card}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </LayoutGroup>
  )
}
