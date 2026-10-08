import type { Project } from '@/content/types'
import { image, video } from '@/content/media'
import cover from './media/cover.jpg'
import media01 from './media/01.jpg'
import media02 from './media/02.jpg'
import media03 from './media/03.jpg'
import media04 from './media/04.jpg'
import media05 from './media/05.jpg'
import media06 from './media/06.jpg'
import media07 from './media/07.jpg'
import media08 from './media/08.jpg'
import media09 from './media/09.jpg'
import media10 from './media/10.jpg'
import media11 from './media/11.jpg'
import media12 from './media/12.jpg'
import media13 from './media/13.jpg'
import media14 from './media/14.jpg'
import media15 from './media/15.jpg'
import media16 from './media/16.jpg'
import media17 from './media/17.jpg'

export const dg = {
  title: 'DG Nexolution – Redesigning the Cooperative Publishing Module',
  tag: 'UX/UI',
  description:
    'Redesign of the DG Nexolution cooperative publishing module, a B2B tool for German cooperatives, covering interface, content structure and workflows.',
  cover: image(
    cover,
    'Redesigned DG Genossenschaften module on desktop and phones: home, podcast and news pages',
  ),
  intro: {
    body: (
      <p>
        In a design tandem at Interaktionswerk, I redesigned DG Nexolution’s cooperative publishing
        module—an internal B2B tool used by Germany’s network of cooperative organizations. Together
        with the dev team at SHI and in close collaboration with client stakeholders and end users,
        we overhauled the interface, structure, and workflows to create a more flexible, modern, and
        intuitive experience.
      </p>
    ),
  },
  meta: {
    client: 'DG Nexolution',
    duration: '4 months (2024)',
    deliverables: 'Design System, Design Concept, Prototype',
    role: 'UX/UI Designer',
  },
  sections: [
    {
      type: 'gallery',
      rows: [
        {
          layout: 'grid',
          columns: 2,
          items: [
            image(media01, 'Affinity mapping: two people clustering sticky notes on a whiteboard'),
            image(
              media02,
              'Laptop on a wooden table showing the redesigned DG Genossenschaften homepage',
            ),
          ],
        },
      ],
    },
    {
      type: 'text',
      variant: 'split',
      heading: 'The Challenge',
      body: (
        <p>
          The legacy system had grown outdated—its complex content structure, limited flexibility,
          and outdated interface made it difficult for users to manage and publish content
          efficiently. Our challenge was to modernize the experience while balancing new feature
          integration, brand consistency, and the varied workflows of multiple cooperative clients.
        </p>
      ),
    },
    {
      type: 'gallery',
      rows: [
        {
          layout: 'grid',
          columns: 3,
          items: [
            image(
              media03,
              'Persona sheets for Marc Meier and Laura Müller with demographics, behavior and goals',
            ),
            image(
              media04,
              'Value proposition canvas mapping user jobs, pains and gains to module features',
            ),
            image(
              media05,
              'Hand-drawn wireframes of search results, document preview and saved favorites',
            ),
          ],
        },
      ],
    },
    {
      type: 'text',
      variant: 'centered',
      heading: 'The Process',
      body: (
        <p>
          In two agile sprints, we analyzed the existing system, mapped out key user journeys, and
          developed new interaction flows. I co-led usability testing with real end users,
          synthesizing interview insights and iteratively refining the design based on feedback.
          This also included regular syncs with the development team (SHI), ensuring feasibility and
          buy-in across teams. My role included both stakeholder management and test facilitation,
          helping align the needs of users, clients, and developers alike.
        </p>
      ),
    },
    {
      type: 'gallery',
      rows: [
        {
          layout: 'full',
          item: image(
            media06,
            'Sitemap of the module with Startseite, Inhalte, News, Podcasts and subscription flow',
          ),
        },
        {
          layout: 'grid',
          columns: 4,
          items: [
            image(
              media07,
              'WCAG 2.1 compliant search field states mapped to design tokens and CSS variables',
            ),
            image(
              media08,
              'Atomic design system levels: atoms, molecules, organisms, presets and pages',
            ),
            image(
              media09,
              'Clickable prototype of the logged-in start page, wired up for user testing',
            ),
            image(
              media10,
              'DGX design system overview: atoms, molecules, organisms and master screens',
            ),
          ],
        },
      ],
    },
    {
      type: 'text',
      variant: 'centered',
      heading: 'The Solution',
      body: (
        <p>
          We delivered a fully restructured module that included intuitive content management flows,
          podcast integration, and flexible reading modes—all unified under a robust new design
          system. I created modular components in Figma, built detailed prototypes, and contributed
          to the final delivery and presentation to both development and client stakeholders.
        </p>
      ),
    },
    {
      type: 'gallery',
      rows: [
        {
          layout: 'grid',
          columns: 4,
          items: [
            image(
              media11,
              'DGX color atoms: brand orange, blue and beige plus primary, field and border states',
            ),
            image(
              media12,
              'Line icon set for navigation, contact, login and podcast playback controls',
            ),
            image(media13, 'DGX type scale from Text S to Text 6XL in regular and bold'),
            image(
              media14,
              'Illustrated benefit cards about cooperative law information and up-to-date content',
            ),
          ],
        },
        {
          layout: 'full',
          item: video(
            '/videos/dg/01.mp4',
            1440,
            1080,
            'Redesigned DG Genossenschaften site on a laptop with the Inhalte sidebar open',
          ),
        },
      ],
    },
    {
      type: 'text',
      variant: 'split',
      heading: 'Results',
      body: (
        <p>
          The redesigned module is preparing for launch. Our handoff included a complete system of
          flows, interaction specs, and design assets—ready for implementation. Beyond the UI, our
          work laid the groundwork for future product iterations across DG Nexolution’s platform.
        </p>
      ),
    },
    {
      type: 'gallery',
      rows: [
        {
          layout: 'grid',
          columns: 2,
          items: [
            image(
              media15,
              'Laptop showing the Abo page comparing no subscription, full subscription and free trial',
            ),
            image(
              media16,
              'Laptop and tablet showing the News & Aktuelles page with search and filters',
            ),
            image(
              media17,
              'Angled collage of design system components: podcast card, inputs, buttons and toggles',
            ),
            video(
              '/videos/dg/02.mp4',
              1081,
              1080,
              'DG podcast page on a tablet with episode list and audio player',
            ),
          ],
        },
      ],
    },
  ],
} satisfies Project
