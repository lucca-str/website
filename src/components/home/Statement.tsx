'use client'

import { stagger, useAnimate } from 'motion/react'
import { Fragment, useEffect } from 'react'
import { transitions } from '@/lib/motion'

/** The Home intro paragraph; its words rise in one after another as the page loads. */
export function Statement({ lines, className }: { lines: readonly string[]; className?: string }) {
  const [scope, animate] = useAnimate<HTMLHeadingElement>()

  useEffect(() => {
    animate(
      scope.current.querySelectorAll('[data-word]'),
      { opacity: 1, y: 0 },
      { ...transitions.word, delay: stagger(0.075) },
    )
  }, [animate, scope])

  return (
    <h2 ref={scope} className={className}>
      {lines.map((line, lineIndex) => (
        <Fragment key={lineIndex}>
          {lineIndex > 0 && <br />}
          {line.split(' ').map((word, wordIndex) => (
            <Fragment key={wordIndex}>
              {wordIndex > 0 && ' '}
              <span
                data-word
                className="inline-block"
                style={{ opacity: 0.001, transform: 'translateY(10px)' }}
              >
                {word}
              </span>
            </Fragment>
          ))}
        </Fragment>
      ))}
    </h2>
  )
}
