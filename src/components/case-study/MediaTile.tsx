import Image from 'next/image'
import type { CSSProperties } from 'react'
import { Reveal } from '@/components/motion/Reveal'
import { LoopVideo } from '@/components/ui/LoopVideo'
import type { Media } from '@/content/types'
import { cx } from '@/lib/cx'

type MediaTileProps = {
  media: Media
  sizes: string
  /**
   * Sizing is up to the caller: `aspect-(--media-ratio)` keeps the file's own ratio,
   * `aspect-square` (or any box) crops to fill.
   */
  className?: string
  /** Above-the-fold images (the hero) load eagerly with high priority. */
  priority?: boolean
}

/** A rounded image or video that fades up into view on its own. */
export function MediaTile({ media, sizes, className, priority }: MediaTileProps) {
  const ratio =
    media.kind === 'image' ? media.src.width / media.src.height : media.width / media.height
  return (
    <Reveal
      className={cx('relative isolate overflow-hidden rounded-media', className)}
      style={{ '--media-ratio': ratio } as CSSProperties}
    >
      {media.kind === 'image' ? (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes={sizes}
          className="object-cover"
          loading={priority ? 'eager' : undefined}
          fetchPriority={priority ? 'high' : undefined}
        />
      ) : (
        <LoopVideo
          src={media.src}
          label={media.label}
          className="absolute inset-0 size-full object-cover"
        />
      )}
    </Reveal>
  )
}
