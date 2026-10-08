'use client'

import Image, { type StaticImageData } from 'next/image'
import { useState } from 'react'
import { fullSizes } from '@/lib/image-sizes'

/** A poster with YouTube's play button; the real player only loads on click. */
export function YouTubeFacade({
  videoId,
  poster,
  title,
}: {
  videoId: string
  poster: StaticImageData
  title: string
}) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        className="absolute inset-0 size-full"
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className="group absolute inset-0 size-full cursor-pointer"
    >
      <Image src={poster} alt="" fill sizes={fullSizes} className="object-cover" />
      <svg
        viewBox="0 0 68 48"
        aria-hidden
        className="absolute top-1/2 left-1/2 h-12 w-[68px] -translate-x-1/2 -translate-y-1/2"
      >
        <path
          d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
          className="fill-[#212121] opacity-80 transition-[fill,opacity] duration-100 ease-[cubic-bezier(0.4,0,1,1)] group-hover:fill-[#ff0000] group-hover:opacity-100"
        />
        <path d="M 45,24 27,14 27,34" fill="#fff" />
      </svg>
    </button>
  )
}
