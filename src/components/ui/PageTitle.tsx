import type { ReactNode } from 'react'
import { Container } from '@/components/layout/Container'
import { cx } from '@/lib/cx'

type BandHeight = 'tall' | 'short'

/**
 * The big centered page title ("My Work", "Hey there!", "Let's Talk").
 * Desktop: a 60vh band. Tablet and phone: 60vh ("tall") or 40vh ("short"), per page.
 */
export function PageTitle({
  children,
  tabletHeight = 'tall',
  phoneHeight = 'tall',
}: {
  children: ReactNode
  tabletHeight?: BandHeight
  phoneHeight?: BandHeight
}) {
  return (
    <Container
      className={cx(
        'pt-26 pb-10 tablet:py-20 desktop:h-[60vh] desktop:py-25',
        tabletHeight === 'tall' ? 'tablet:h-[60vh]' : 'tablet:h-[40vh]',
      )}
    >
      <div
        className={cx(
          'flex items-center justify-center tablet:h-full',
          phoneHeight === 'tall' ? 'h-[60vh]' : 'h-[40vh]',
        )}
      >
        <h1 className="text-center type-statement tablet:type-display">{children}</h1>
      </div>
    </Container>
  )
}
