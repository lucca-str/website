import 'server-only'
import type { Project } from '@/content/types'
import { aroya } from './aroya'
import { dg } from './dg'
import { leverageRobotics } from './leverage-robotics'
import { mara } from './mara'
import { parcitypate } from './parcitypate'
import { sana } from './sana'
import { vsInterface } from './vs-interface'

/**
 * Every project, in Work-page order. The order is also the "Next Project" chain
 * (the last project has no next one). Slugs are the URLs: lucca-strecker.com/<slug>.
 */
export const projectSlugs = [
  'sana',
  'mara',
  'leverage-robotics',
  'dg',
  'aroya',
  'parcitypate',
  'vs-interface',
] as const

export type ProjectSlug = (typeof projectSlugs)[number]

export const projects = {
  sana,
  mara,
  'leverage-robotics': leverageRobotics,
  dg,
  aroya,
  parcitypate,
  'vs-interface': vsInterface,
} satisfies Record<ProjectSlug, Project>
