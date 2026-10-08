import Link from 'next/link'
import { site } from '@/content/site'
import { Container } from './Container'
import { MobileMenu } from './MobileMenu'
import { ThemeToggle } from './ThemeToggle'

const linkStyle = 'transition-colors duration-400 ease-framer hover:text-fg-subtle'

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-bg">
      {/* Desktop: wordmark · links · toggle, sliding in on load. */}
      <Container className="hidden desktop:block">
        <nav aria-label="Main" className="grid h-20 animate-nav-intro grid-cols-3 items-center">
          <Link href="/" className="justify-self-start type-logo font-bold">
            {site.wordmark}
          </Link>
          <ul className="flex justify-center">
            {site.nav.map((item) => (
              <li key={item.href} className="w-22 text-center">
                <Link href={item.href} className={`type-body ${linkStyle}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle className="justify-self-end" />
        </nav>
      </Container>

      <MobileMenu className="desktop:hidden" />
    </header>
  )
}
