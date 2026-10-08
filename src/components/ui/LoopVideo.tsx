'use client'

import { useEffect, useRef } from 'react'

/**
 * Muted, looping inline video that only plays while on screen (like the original,
 * which starts videos from JavaScript instead of using `autoplay`).
 */
export function LoopVideo({
  src,
  label,
  className,
}: {
  src: string
  label: string
  className?: string
}) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    // React doesn't render the `muted` attribute on the server; iOS needs it set before play().
    video.muted = true
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting)
        video.play().catch(() => {}) // e.g. iOS Low Power Mode
      else video.pause()
    })
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      src={src}
      aria-label={label}
      className={className}
      loop
      muted
      playsInline
      preload="none"
    />
  )
}
