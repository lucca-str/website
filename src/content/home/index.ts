import type { ProjectSlug } from '@/content/projects'
import { image } from '@/content/media'
import portrait from './portrait.png'

export type FeaturedProject = {
  slug: ProjectSlug
  /** Home has its own, shorter title and summary for each featured project. */
  title: string
  summary: string
}

export const home = {
  portrait: image(portrait, 'Portrait of Lucca Strecker'),
  name: 'Lucca Strecker',
  subtitle: ['Product Design, Strategy & Interaction', 'UX/UI Designer @ Bergzeit'],
  /** Each entry starts on a new line; the words reveal one by one on load. */
  statement: [
    'I’m Lucca • a Product Designer focused on UX, strategy, and making complexity feel simple. I design thoughtful digital products that are both intuitive and effective.',
    'Explore some of my project highlights just below, or dive deeper on the work page • and feel free to reach out anytime.',
  ],
  featured: [
    {
      slug: 'leverage-robotics',
      title: 'RoboHive – Making Industrial Robotics Intuitive',
      summary:
        'A powerful yet intuitive interface for creating robotic workflows—designed for both experts and beginners, with a visual programming model that simplifies complexity.',
    },
    {
      slug: 'aroya',
      title: 'Aroya – Smart Irrigation for Precision Cultivation',
      summary:
        'A new feature for intelligent irrigation scheduling—helping growers automate plant care through a clean, data-driven interface integrated into AROYA’s platform.',
    },
    {
      slug: 'mara',
      title: 'māra – Community Platform for Urban Gardens',
      summary:
        'An inclusive mobile app designed to connect urban garden communities across language and tech barriers—empowering collaboration through visual-first interaction.',
    },
  ] satisfies FeaturedProject[],
  allWork: { label: 'All Work', href: '/work' },
} as const
