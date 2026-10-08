'use client'

import { motion, useMotionValue, useSpring } from 'motion/react'
import { useEffect, useState } from 'react'
import { transitions } from '@/lib/motion'

/**
 * The dot that trails the mouse (white + difference blend, so it reads on any background).
 * Like the original it sits just above the pointer and grows to 52px over elements
 * marked `data-cursor="hover"` (the Home project tiles). Hidden on touch screens.
 */
export function CursorDot() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const followX = useSpring(x, transitions.snappy)
  const followY = useSpring(y, transitions.snappy)
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    function handleMove(event: PointerEvent) {
      if (event.pointerType !== 'mouse') return
      const target = event.target instanceof Element ? event.target : null
      setHovering(Boolean(target?.closest('[data-cursor="hover"]')))
      if (!visible) {
        // Start at the pointer instead of flying in from the corner.
        followX.jump(event.clientX)
        followY.jump(event.clientY)
        setVisible(true)
      }
      x.set(event.clientX)
      y.set(event.clientY)
    }
    window.addEventListener('pointermove', handleMove, { passive: true })
    return () => window.removeEventListener('pointermove', handleMove)
  }, [visible, x, y, followX, followY])

  const size = hovering ? 52 : 10
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-50 mix-blend-difference pointer-coarse:hidden"
      style={{ x: followX, y: followY, opacity: visible ? 1 : 0 }}
    >
      <motion.div
        className="rounded-full bg-white"
        initial={false}
        animate={{ width: size, height: size, x: -size / 2, y: -(size + 6) }}
        transition={transitions.base}
      />
    </motion.div>
  )
}
