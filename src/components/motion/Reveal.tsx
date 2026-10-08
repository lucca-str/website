'use client'

import { motion, type HTMLMotionProps } from 'motion/react'
import { revealFrom, revealTo, transitions, type TransitionName } from '@/lib/motion'

type RevealProps = Omit<
  HTMLMotionProps<'div'>,
  'initial' | 'whileInView' | 'viewport' | 'transition'
> & {
  /** Share of the element that must be visible before it reveals (Framer's "threshold"). */
  amount?: number
  transition?: TransitionName
  once?: boolean
}

/** Fade + 30px rise when the element scrolls into view — the site's one reveal pattern. */
export function Reveal({
  amount = 0.5,
  transition = 'reveal',
  once = true,
  ...props
}: RevealProps) {
  return (
    <motion.div
      data-reveal
      initial={revealFrom}
      whileInView={revealTo}
      viewport={{ once, amount }}
      transition={transitions[transition]}
      {...props}
    />
  )
}
