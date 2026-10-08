import { LinkPill } from '@/components/ui/LinkPill'
import { site } from '@/content/site'
import type { Project } from '@/content/types'

const labels = site.caseStudy.metaLabels

/** Intro text (+ optional pill) beside the Client / Duration / Deliverables / Role details. */
export function Intro({ intro, meta }: Pick<Project, 'intro' | 'meta'>) {
  return (
    <div className="grid gap-10 pb-[65px] tablet:grid-cols-2 tablet:gap-4 tablet:pb-10">
      <div className="flex flex-col items-start gap-6 tablet:gap-4 desktop:gap-6">
        <div className="rich-text type-body tablet:pr-10">{intro.body}</div>
        {intro.link && <LinkPill link={intro.link} />}
      </div>
      {/* Two independent columns, as on the original. */}
      <div className="grid grid-cols-2 items-start gap-x-10 tablet:gap-x-4">
        <dl className="flex flex-col gap-6 tablet:gap-4">
          <MetaItem label={labels.client} value={meta.client} />
          <MetaItem label={labels.deliverables} value={meta.deliverables} />
        </dl>
        <dl className="flex flex-col gap-6 tablet:gap-4">
          <MetaItem label={labels.duration} value={meta.duration} />
          <MetaItem label={labels.role} value={meta.role} />
        </dl>
      </div>
    </div>
  )
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 tablet:gap-0 desktop:gap-2">
      <dt className="type-body text-fg-subtle">{label}</dt>
      <dd className="type-meta">{value}</dd>
    </div>
  )
}
