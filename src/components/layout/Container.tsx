import type { ComponentProps } from 'react'
import { cx } from '@/lib/cx'

/** Page gutter: 100px desktop, 48px tablet, 16px phone; content never wider than 1600px. */
export function Container({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cx('mx-auto w-full max-w-[1800px] px-4 tablet:px-12 desktop:px-25', className)}
      {...props}
    />
  )
}
