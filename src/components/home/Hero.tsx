import Image from 'next/image'
import { Reveal } from '@/components/motion/Reveal'
import { home } from '@/content/home'
import { ScrollIndicator } from './ScrollIndicator'

/** Full-height intro: portrait, name, role — and the scroll indicator at the bottom edge. */
export function Hero() {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center gap-10">
        <Reveal
          amount={0}
          className="relative isolate size-60 overflow-hidden rounded-tile tablet:size-50"
        >
          <Image
            src={home.portrait.src}
            alt={home.portrait.alt}
            fill
            sizes="(min-width: 810px) 200px, 240px"
            className="object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </Reveal>
        <div className="flex flex-col items-center gap-2 text-center tablet:gap-4 desktop:gap-2">
          <h1 className="type-statement tablet:type-display">{home.name}</h1>
          <p className="type-body">
            {home.subtitle[0]}
            <br />
            {home.subtitle[1]}
          </p>
        </div>
      </div>
      <ScrollIndicator className="absolute bottom-0 left-1/2 -translate-x-1/2" />
    </section>
  )
}
