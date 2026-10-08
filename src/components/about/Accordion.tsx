'use client'

import { motion } from 'motion/react'
import { useId, useState, type ReactNode } from 'react'
import { cx } from '@/lib/cx'
import { transitions } from '@/lib/motion'

type AccordionItem = { title: string; body: ReactNode }

/** Independent rows with a dot indicator; bodies are rendered on the server and passed in. */
export function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <div>
      {items.map((item, index) => (
        <Row key={item.title} item={item} last={index === items.length - 1} />
      ))}
    </div>
  )
}

function Row({ item, last }: { item: AccordionItem; last: boolean }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    // The divider lines are inset shadows so they don't add height, like Framer's.
    <div
      className={cx(
        'pr-1',
        last
          ? 'shadow-[inset_0_2px_0_var(--line),inset_0_-2px_0_var(--line)]'
          : 'shadow-[inset_0_2px_0_var(--line)]',
      )}
    >
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
          className="group flex h-15 w-full cursor-pointer items-center justify-between gap-4 px-3 text-left"
        >
          <span className="type-accordion">{item.title}</span>
          <span className="grid size-4 shrink-0 place-items-center">
            <span
              className={cx(
                'size-3 rounded-full transition-colors spring-base',
                open ? 'bg-fg' : 'bg-fg-subtle group-hover:bg-fg',
              )}
            />
          </span>
        </button>
      </h3>
      <motion.div
        id={panelId}
        role="region"
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={transitions.base}
        className="overflow-hidden"
      >
        <div className="rich-text pt-6 pr-3 pb-8 pl-4 type-body">{item.body}</div>
      </motion.div>
    </div>
  )
}
