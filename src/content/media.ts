import type { StaticImageData } from 'next/image'
import type { ImageMedia, VideoMedia } from './types'

/** Shorthands that keep the project files readable. */
export const image = (src: StaticImageData, alt: string): ImageMedia => ({
  kind: 'image',
  src,
  alt,
})

export const video = (
  src: VideoMedia['src'],
  width: number,
  height: number,
  label: string,
): VideoMedia => ({ kind: 'video', src, width, height, label })
