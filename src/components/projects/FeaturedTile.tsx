import type { Route } from 'next'
import Link from 'next/link'
import { Reveal } from '@/components/motion/Reveal'
import type { ImageMedia } from '@/content/types'
import { cx } from '@/lib/cx'
import { TileMedia } from './TileMedia'

const tileSizes =
  '(min-width: 1200px) calc((min(100vw - 200px, 1600px) - 136px) / 2), (min-width: 810px) calc(100vw - 96px), calc(100vw - 32px)'

/** Home featured project: image beside the text on desktop (alternating sides), stacked below. */
export function FeaturedTile({
  slug,
  title,
  summary,
  cover,
  imageSide,
}: {
  slug: string
  title: string
  summary: string
  cover: ImageMedia
  imageSide: 'left' | 'right'
}) {
  const right = imageSide === 'right'
  return (
    <Reveal transition="tile">
      <Link
        href={`/${slug}` as Route}
        data-cursor="hover"
        className={cx(
          'group grid items-center gap-6 desktop:grid-cols-2 desktop:gap-22',
          right ? 'desktop:pl-12' : 'desktop:pr-12',
        )}
      >
        <TileMedia
          src={cover.src}
          alt={cover.alt}
          sizes={tileSizes}
          className={cx(right && 'desktop:order-2')}
        />
        <div className="flex flex-col gap-3">
          <h2 className="type-card desktop:type-title">{title}</h2>
          <p className="type-body opacity-60">{summary}</p>
        </div>
      </Link>
    </Reveal>
  )
}
