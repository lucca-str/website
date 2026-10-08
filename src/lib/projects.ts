import 'server-only'
import { projects, projectSlugs, type ProjectSlug } from '@/content/projects'

export { projectSlugs, type ProjectSlug }

// Case studies live at the site root, so a slug must never shadow a page.
const reservedSlugs: readonly string[] = ['work', 'about', 'contact']
for (const slug of projectSlugs) {
  if (reservedSlugs.includes(slug)) throw new Error(`Project slug "${slug}" collides with a page`)
}

export const isProjectSlug = (value: string): value is ProjectSlug =>
  (projectSlugs as readonly string[]).includes(value)

export const getProject = (slug: ProjectSlug) => projects[slug]

export const getProjects = () => projectSlugs.map((slug) => ({ slug, ...projects[slug] }))

/** The project after this one in Work order; undefined for the last. */
export const getNextSlug = (slug: ProjectSlug): ProjectSlug | undefined =>
  projectSlugs[projectSlugs.indexOf(slug) + 1]
