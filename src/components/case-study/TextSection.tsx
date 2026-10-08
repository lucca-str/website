import { LinkPill } from '@/components/ui/LinkPill'
import type { Section } from '@/content/types'

type TextSectionData = Extract<Section, { type: 'text' }>

export function TextSection({ section }: { section: TextSectionData }) {
  if (section.variant === 'split') {
    return (
      <div className="grid gap-4 tablet:grid-cols-2">
        <h2 className="self-start type-section">{section.heading}</h2>
        <div className="flex flex-col items-start gap-6">
          <div className="rich-text type-body">{section.body}</div>
          {section.link && <LinkPill link={section.link} />}
        </div>
      </div>
    )
  }

  // Phones show "centered" sections left-aligned, like split ones.
  return (
    <div className="flex flex-col gap-4 tablet:items-center tablet:gap-10 tablet:text-center desktop:px-[25px]">
      <h2 className="type-section">{section.heading}</h2>
      <div className="rich-text type-body tablet:w-[66%] tablet:type-body-center">
        {section.body}
      </div>
    </div>
  )
}
