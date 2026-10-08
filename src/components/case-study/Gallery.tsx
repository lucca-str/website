import type { GalleryRow } from '@/content/types'
import { assertNever } from '@/lib/assert-never'
import { cx } from '@/lib/cx'
import { bentoSizes, fullSizes, gridSizes } from '@/lib/image-sizes'
import { MediaTile } from './MediaTile'

// Written out in full so Tailwind can see the class names.
const desktopColumns = {
  2: 'desktop:grid-cols-2',
  3: 'desktop:grid-cols-3',
  4: 'desktop:grid-cols-4',
}
const tabletColumns = { 2: 'tablet:grid-cols-2', 3: 'tablet:grid-cols-3', 4: 'tablet:grid-cols-4' }

/**
 * Phones stack every row into one column. Like the original, a grid that follows a
 * full-width row sits 8px below it; every other row keeps the usual 16px.
 */
function phoneGap(row: GalleryRow, previous: GalleryRow) {
  return previous.layout === 'full' && row.layout === 'grid' ? 'mt-2' : 'mt-4'
}

/** A stack of media rows, 16px apart (see `phoneGap` for phones). */
export function Gallery({ rows }: { rows: GalleryRow[] }) {
  return (
    <div className="flex flex-col">
      {rows.map((row, index) => {
        const previous = rows[index - 1]
        return (
          <div key={index} className={cx(previous && [phoneGap(row, previous), 'tablet:mt-4'])}>
            <Row row={row} />
          </div>
        )
      })}
    </div>
  )
}

function Row({ row }: { row: GalleryRow }) {
  switch (row.layout) {
    case 'full':
      return <MediaTile media={row.item} sizes={fullSizes} className="aspect-(--media-ratio)" />

    case 'grid': {
      const tablet = row.tabletColumns ?? row.columns
      return (
        <div className={cx('grid gap-4', tabletColumns[tablet], desktopColumns[row.columns])}>
          {row.items.map((item, index) => (
            <MediaTile
              key={index}
              media={item}
              sizes={gridSizes(row.columns, tablet)}
              className="aspect-square"
            />
          ))}
        </div>
      )
    }

    case 'bento': {
      const largeLeft = row.side === 'left'
      // On phones an image bento is a compact stack (8px gaps, 236px-tall large image);
      // a video bento keeps 16px gaps and the video's own ratio — as on the original.
      const imageLarge = row.large.kind === 'image'
      const large = (
        <MediaTile
          media={row.large}
          sizes={bentoSizes.large}
          className={cx(
            'tablet:row-span-2 tablet:aspect-auto tablet:h-auto',
            imageLarge ? 'h-[236px]' : 'aspect-(--media-ratio)',
            !largeLeft && 'tablet:col-start-2 tablet:row-start-1',
          )}
        />
      )
      return (
        <div
          className={cx(
            'grid tablet:gap-4',
            imageLarge ? 'gap-2' : 'gap-4',
            largeLeft ? 'tablet:grid-cols-[66%_1fr]' : 'tablet:grid-cols-[1fr_66%]',
          )}
        >
          {largeLeft && large}
          {row.small.map((item, index) => (
            <MediaTile
              key={index}
              media={item}
              sizes={bentoSizes.small}
              className="aspect-square"
            />
          ))}
          {!largeLeft && large}
        </div>
      )
    }

    default:
      return assertNever(row)
  }
}
