/**
 * `sizes` attributes for next/image, matching the real rendered widths so the
 * browser never downloads a bigger variant than it shows.
 * Content width: 100vw − 32px (phone), − 96px (tablet), min(100vw − 200px, 1600px) (desktop).
 */
const content = {
  phone: 'calc(100vw - 32px)',
  tablet: 'calc(100vw - 96px)',
  desktop: 'min(calc(100vw - 200px), 1600px)',
}

/** Width of one of `n` equal columns with 16px gaps. */
function columns(n: number, width: string) {
  return n === 1 ? width : `calc((${width} - ${16 * (n - 1)}px) / ${n})`
}

export function gridSizes(desktopColumns: number, tabletColumns = desktopColumns) {
  return [
    `(min-width: 1200px) ${columns(desktopColumns, content.desktop)}`,
    `(min-width: 810px) ${columns(tabletColumns, content.tablet)}`,
    content.phone,
  ].join(', ')
}

export const fullSizes = gridSizes(1)

/** Bento tiles: the large one is 66% of the content width; the small ones fill the rest. */
export const bentoSizes = {
  large: [
    `(min-width: 1200px) calc(${content.desktop} * 0.66)`,
    `(min-width: 810px) calc(${content.tablet} * 0.66)`,
    content.phone,
  ].join(', '),
  small: [
    `(min-width: 1200px) calc(${content.desktop} * 0.34 - 16px)`,
    `(min-width: 810px) calc(${content.tablet} * 0.34 - 16px)`,
    content.phone,
  ].join(', '),
}
