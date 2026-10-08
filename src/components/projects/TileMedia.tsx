import Image, { type StaticImageData } from 'next/image'
import { cx } from '@/lib/cx'

/** A project tile's image: 1.1:1, rounded, zooming to 1.1× while its group is hovered. */
export function TileMedia({
  src,
  alt,
  sizes,
  className,
}: {
  src: StaticImageData
  alt: string
  sizes: string
  className?: string
}) {
  return (
    <div
      className={cx(
        'relative isolate aspect-[1.1] overflow-hidden rounded-tile shadow-tile',
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform spring-snappy group-hover:scale-110"
      />
    </div>
  )
}
