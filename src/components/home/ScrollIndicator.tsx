'use client'

import { motion, useAnimate, useMotionValueEvent, useScroll } from 'motion/react'
import { useEffect, useState } from 'react'
import { cx } from '@/lib/cx'
import { transitions } from '@/lib/motion'

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * The dot that drips down below the Home hero. Same cycle as the original:
 * rest 1s → slide down while fading out (1s) → jump back up unseen (0.3s) → fade in.
 * It also hides while scrolling down and returns when scrolling up.
 */
export function ScrollIndicator({ className }: { className?: string }) {
  const [scope, animate] = useAnimate<HTMLDivElement>()
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = scrollY.getPrevious() ?? current
    if (current !== previous) setHidden(current > previous)
  })

  useEffect(() => {
    let stopped = false
    const dot = scope.current.firstElementChild as HTMLElement
    ;(async () => {
      while (!stopped) {
        await wait(1000)
        if (stopped) return
        animate(dot, { y: 50 }, transitions.tile)
        animate(scope.current, { opacity: 0 }, transitions.tile)
        await wait(1000)
        if (stopped) return
        animate(dot, { y: 0 }, { duration: 0 })
        animate(scope.current, { opacity: 0 }, { duration: 0 })
        await wait(300)
        if (stopped) return
        animate(scope.current, { opacity: 1 }, transitions.fade)
      }
    })()
    return () => {
      stopped = true
    }
  }, [animate, scope])

  return (
    <motion.div
      aria-hidden
      className={cx('h-15 w-3', className)}
      animate={{ opacity: hidden ? 0 : 1 }}
      transition={transitions.base}
    >
      <div ref={scope} className="relative h-full w-full overflow-hidden">
        <div className="absolute top-0 left-px size-2.5 rounded-full bg-fg" />
      </div>
    </motion.div>
  )
}
