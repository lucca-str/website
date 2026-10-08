'use client'

import Image from 'next/image'
import { animate, motion, useMotionValue, type MotionStyle, type PanInfo } from 'motion/react'
import { useEffect, useRef } from 'react'
import { CarouselArrowIcon } from '@/components/ui/icons'
import type { ImageMedia } from '@/content/types'
import { transitions } from '@/lib/motion'

const GAP = 24
const sizes =
  '(min-width: 1200px) calc(min(100vw - 200px, 1600px) * 0.66), (min-width: 810px) calc((100vw - 96px) * 0.66), calc((100vw - 32px) * 0.95)'

/**
 * Endless, draggable slideshow (the original is Framer's Slideshow component).
 * The slides are rendered three times; the middle copy is the "real" one and the
 * track jumps back into it after each move, so the loop never runs out.
 */
export function AboutCarousel({
  slides,
  labels,
}: {
  slides: ImageMedia[]
  labels: { previous: string; next: string }
}) {
  const count = slides.length
  const firstSlide = useRef<HTMLLIElement>(null)
  const x = useMotionValue(0)
  const index = useRef(0) // position within the middle copy
  const step = useRef(0) // slide width + gap, in px

  useEffect(() => {
    const slide = firstSlide.current
    if (!slide) return
    const observer = new ResizeObserver(() => {
      step.current = slide.offsetWidth + GAP
      x.set(-index.current * step.current)
    })
    observer.observe(slide)
    return () => observer.disconnect()
  }, [x])

  function goTo(target: number) {
    index.current = target
    animate(x, -target * step.current, {
      ...transitions.carousel,
      onComplete: () => {
        const wrapped = ((target % count) + count) % count
        if (wrapped !== target) {
          index.current = wrapped
          x.set(-wrapped * step.current)
        }
      },
    })
  }

  // Framer's rule: a fast flick moves at least one slide; a slow drag needs to pass half a slide.
  function handleDragEnd(_: unknown, { offset, velocity }: PanInfo) {
    const distance = Math.abs(offset.x) / step.current
    const moved =
      Math.abs(velocity.x) > 200
        ? Math.max(1, Math.round(distance))
        : distance > 0.5
          ? Math.round(distance)
          : 0
    goTo(index.current + (offset.x < 0 ? moved : -moved))
  }

  return (
    <div className="relative" aria-roledescription="carousel">
      {/* Shifted left by one full copy so the middle copy starts at the edge, even before hydration. */}
      <motion.ul
        className="-ml-[calc(var(--count)*(95%+24px))] flex w-full cursor-grab gap-6 active:cursor-grabbing tablet:-ml-[calc(var(--count)*(66%+24px))]"
        style={{ x, '--count': count } as MotionStyle}
        drag="x"
        dragMomentum={false}
        dragDirectionLock
        onDragEnd={handleDragEnd}
      >
        {[0, 1, 2].flatMap((copy) =>
          slides.map((slide, slideIndex) => (
            <li
              key={`${copy}-${slideIndex}`}
              ref={copy === 1 && slideIndex === 0 ? firstSlide : undefined}
              aria-hidden={copy !== 1}
              className="relative aspect-[1.3736] w-[95%] shrink-0 overflow-hidden rounded-media tablet:w-[66%]"
            >
              <Image
                src={slide.src}
                alt={copy === 1 ? slide.alt : ''}
                fill
                sizes={sizes}
                draggable={false}
                className="pointer-events-none object-cover select-none"
              />
            </li>
          )),
        )}
      </motion.ul>

      <div className="absolute top-[calc(100%+34px)] left-0 flex gap-2.5">
        <ArrowButton
          label={labels.previous}
          direction="left"
          onClick={() => goTo(index.current - 1)}
        />
        <ArrowButton
          label={labels.next}
          direction="right"
          onClick={() => goTo(index.current + 1)}
        />
      </div>
    </div>
  )
}

function ArrowButton({
  label,
  direction,
  onClick,
}: {
  label: string
  direction: 'left' | 'right'
  onClick: () => void
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="size-[30px] cursor-pointer rounded-full bg-line text-white"
    >
      <CarouselArrowIcon direction={direction} className="size-full" />
    </button>
  )
}
