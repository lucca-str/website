'use client'

import { useLayoutEffect } from 'react'
import { cx } from '@/lib/cx'
import { applyTheme, readTheme } from '@/lib/theme'
import styles from './ThemeToggle.module.css'

export function ThemeToggle({ className }: { className?: string }) {
  // React's dev-only Strict Mode remount resets <html> attributes, so re-apply the
  // theme the head script chose. A no-op in production.
  useLayoutEffect(() => applyTheme(readTheme(), false), [])

  function toggle() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
    applyTheme(isDark ? 'light' : 'dark', true)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className={cx('grid size-15 cursor-pointer place-items-center', className)}
    >
      <span className="grid size-[33px] place-items-center transition-transform spring-snappy hover:scale-110">
        <span className={cx(styles.moon, 'size-[13px] rounded-full bg-fg')} />
      </span>
    </button>
  )
}
