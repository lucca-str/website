'use client'

import { ReactLenis } from 'lenis/react'
import type { ReactNode } from 'react'

/** Smooth scrolling as on the original (Framer "Smooth Scroll", intensity 10 = Lenis duration 1). */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1,
        autoRaf: true,
        // Let Next.js handle scroll position on navigation (keeps back/forward restoration).
        stopInertiaOnNavigate: true,
        // The original smooth-scrolls regardless of the OS reduced-motion setting.
        respectReducedMotion: false,
      }}
    >
      {children}
    </ReactLenis>
  )
}
