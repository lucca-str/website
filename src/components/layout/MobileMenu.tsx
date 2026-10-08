'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLenis } from 'lenis/react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { site } from '@/content/site'
import { cx } from '@/lib/cx'
import { transitions } from '@/lib/motion'
import { Container } from './Container'
import { ThemeToggle } from './ThemeToggle'

/** Tablet and phone navigation: toggle · wordmark · hamburger, with a drop-down panel. */
export function MobileMenu({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)
  const lenis = useLenis()

  // Close whenever the route changes (incl. back/forward).
  const pathname = usePathname()
  const [openedOn, setOpenedOn] = useState(pathname)
  if (openedOn !== pathname) {
    setOpenedOn(pathname)
    setOpen(false)
  }

  // Freeze page scrolling while the panel is open, like the original.
  useEffect(() => {
    if (open) lenis?.stop()
    else lenis?.start()
  }, [open, lenis])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <div className={className}>
      <Container className="grid h-16 grid-cols-[60px_1fr_44px] items-center">
        <ThemeToggle />
        <Link href="/" className="justify-self-center type-logo font-bold">
          {site.wordmark}
        </Link>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="relative size-11 cursor-pointer"
        >
          <motion.span
            className="absolute top-[15px] left-3 h-0.5 w-5 bg-fg"
            initial={false}
            animate={open ? { y: 6, rotate: -45 } : { y: 0, rotate: 0 }}
            transition={transitions.menu}
          />
          <motion.span
            className="absolute top-[27px] left-3 h-0.5 w-5 bg-fg"
            initial={false}
            animate={open ? { y: -6, rotate: 45 } : { y: 0, rotate: 0 }}
            transition={transitions.menu}
          />
        </button>
      </Container>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Main"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={transitions.menu}
            className="overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-[25px] pt-6 pb-[25px]">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cx('block py-[3.5px] type-section')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}
