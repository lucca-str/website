import type { Project } from '@/content/types'
import { image, video } from '@/content/media'
import cover from './media/cover.jpg'
import media01 from './media/01.png'
import media02 from './media/02.png'
import media03 from './media/03.jpg'
import media04 from './media/04.jpg'
import media05 from './media/05.jpg'
import media06 from './media/06.jpg'
import media07 from './media/07.jpg'
import media08 from './media/08.jpg'
import media09 from './media/09.jpg'

export const aroya = {
  title: 'Aroya – Smart Irrigation for Precision Cultivation',
  tag: 'Strategy',
  description:
    'UX/UI design at Interaktionswerk: a smart irrigation feature for the AROYA cultivation platform that adapts to crop stage and room conditions.',
  cover: image(cover, 'Hands on a laptop showing the AROYA irrigation Planner across rooms'),
  intro: {
    body: (
      <>
        <p>
          Modern cultivation requires more than green thumbs—it needs systems that think ahead.
          While working at Interaktionswerk, I designed a smart irrigation feature for AROYA that
          adapts to changing plant needs—automating complexity and helping growers steer their crops
          with confidence, not guesswork.
        </p>
        <p>
          As the executing UX/UI Designer, I was responsible for the feature’s concept, structure,
          and interaction design. I worked in close collaboration with the Product Owner and
          development team to turn deep cultivation logic into a tool that feels intuitive, visual,
          and actionable in the field.
        </p>
      </>
    ),
    link: {
      label: 'Link to Feature',
      href: 'https://aroya.io/en/solutions/intelligent-irrigation',
    },
  },
  meta: {
    client: 'Addium, Aroya',
    duration: '1,5 months (2024)',
    deliverables: 'Feature Development, Design Concept',
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
            image(media01, 'Fertigation dosing wall with blue injectors and nutrient barrels'),
            image(
              media02,
              'AROYA substrate sensors and wireless devices beside a tablet with data charts',
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
          Growers were manually juggling irrigation across multiple rooms and plant stages—shifting
          strategies between dual-phase veg cycles and precise flowering schedules. It was
          time-sensitive, inconsistent, and error-prone. Our task: make it smart, flexible, and easy
          to control, without overwhelming the user.
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
              media03,
              'Annotated Planner wireframe with sticky notes on filters and hypotheses',
            ),
            image(
              media04,
              'Navigation map with a shortcut from Planner straight into irrigation scheduling',
            ),
          ],
        },
      ],
    },
    {
      type: 'text',
      variant: 'split',
      heading: 'The Process',
      body: (
        <p>
          I built on research and domain insights provided by cultivation experts to identify key
          user needs. From there, I mapped core flows and created early-stage prototypes—iterating
          quickly with the development team and Product Owner to test feasibility, sharpen
          decisions, and simplify interaction where it mattered most.
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
              media05,
              'Figma board with explorations and three Planner concept flow iterations',
            ),
            image(
              media06,
              'Flow concept from the Planner via rooms and zones to setting a schedule',
            ),
          ],
        },
      ],
    },
    {
      type: 'text',
      variant: 'centered',
      heading: 'Design Solution',
      body: (
        <p>
          The feature enables growers to automate irrigation based on crop stage and room
          conditions. I designed an interface that makes system behavior legible at a glance—users
          can zoom into events, review performance, and respond to alerts without losing context.
          It&apos;s precise, visual, and built for real-world complexity.
        </p>
      ),
    },
    {
      type: 'gallery',
      rows: [
        {
          layout: 'full',
          item: video(
            '/videos/aroya/01.mp4',
            1736,
            1080,
            'Screen recording of the AROYA irrigation Planner scheduling events across rooms',
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
          Now live in the AROYA platform, the feature helps cultivators reduce manual work, improve
          consistency, and make smarter, faster decisions. It’s a strong example of how thoughtful
          interface design—developed collaboratively within an interdisciplinary team—can turn
          technical depth into real-world value.
        </p>
      ),
      link: {
        label: 'Link to Feature',
        href: 'https://aroya.io/en/solutions/intelligent-irrigation',
      },
    },
    {
      type: 'gallery',
      rows: [
        {
          layout: 'grid',
          columns: 2,
          items: [
            image(
              media07,
              'Planner timeline with a tooltip flagging overlapping irrigation events',
            ),
            image(
              media08,
              'Planner on a laptop with filters for running, scheduled and overlapping irrigations',
            ),
            image(
              media09,
              'Controller view with Open Sprinkler cards mapping ports to rooms and zones',
            ),
            video(
              '/videos/aroya/02.mp4',
              1081,
              1080,
              'Close-up recording of the Planner sidebar in use',
            ),
          ],
        },
      ],
    },
  ],
} satisfies Project
