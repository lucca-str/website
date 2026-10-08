import type { StaticImageData } from 'next/image'
import type { ReactNode } from 'react'

/** Rich text as JSX, limited to <p>, <strong>, <em>, <ul>/<li> and <br />. */
export type RichText = ReactNode

export type Tag = 'Strategy' | 'UX/UI' | 'Case Study'

/** An outlined pill linking out ("Full Documentation", "Link to Project", …). */
export type LinkPill = { label: string; href: `https://${string}` }

export type ImageMedia = { kind: 'image'; src: StaticImageData; alt: string }

/** Looping, muted inline video served from /public/videos. */
export type VideoMedia = {
  kind: 'video'
  src: `/videos/${string}.mp4`
  width: number
  height: number
  /** Describes the video for screen readers. */
  label: string
}

export type Media = ImageMedia | VideoMedia

/** One row of a gallery. Rows stack with a 16px gap; on phones every row becomes one column. */
export type GalleryRow =
  /** Full width, at the media's own aspect ratio. */
  | { layout: 'full'; item: Media }
  /** Square, cover-cropped tiles; extra items wrap (e.g. 2 columns × 4 items = 2×2). */
  | { layout: 'grid'; columns: 2 | 3 | 4; tabletColumns?: 2 | 3 | 4; items: Media[] }
  /** One large tile (66% wide) beside two stacked squares. */
  | { layout: 'bento'; side: 'left' | 'right'; large: Media; small: readonly [Media, Media] }

export type Section =
  /** "split" = heading left, body right; "centered" = both centered. */
  | {
      type: 'text'
      variant: 'split' | 'centered'
      heading: string
      body: RichText
      link?: LinkPill
    }
  | { type: 'gallery'; rows: GalleryRow[] }
  /** Full-width 16:9 YouTube video behind a click-to-play poster. */
  | { type: 'youtube'; videoId: string; poster: StaticImageData; title: string }

export type Project = {
  /** Page heading and Work-card title. */
  title: string
  tag: Tag
  /** Meta description for search engines and link previews. */
  description: string
  /** Hero image (shown at its own aspect ratio); also the Work card and Home tile image. */
  cover: ImageMedia
  intro: { body: RichText; link?: LinkPill }
  meta: { client: string; duration: string; deliverables: string; role: string }
  sections: Section[]
}
