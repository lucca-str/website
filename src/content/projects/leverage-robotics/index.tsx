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
import media18 from './media/18.jpg'

export const leverageRobotics = {
  title: 'RoboHive – Making Industrial Robotics Intuitive',
  tag: 'UX/UI',
  description:
    'RoboHive UI for Leverage Robotics: a timeline-based interface that makes programming industrial robot workflows accessible without coding experience.',
  cover: image(
    cover,
    'Tablet on a desk showing the RoboHive multilane timeline editor for three machines',
  ),
  intro: {
    body: (
      <p>
        At Interaktionswerk, I led the design of RoboHive UI for Leverage Robotics—a next-generation
        interface for programming robotic workflows. In close collaboration with the client’s
        engineering team, I was responsible for strategy, design direction, and execution. The goal:
        transform a highly technical, code-heavy process into a system that feels intuitive—even to
        those without programming experience.
      </p>
    ),
    link: { label: 'Link to Project', href: 'https://leverage-robotics.com/en/' },
  },
  meta: {
    client: 'Leverage Robotics',
    duration: '7 months (2024)',
    deliverables: 'Design System, Design Concept, Prototype',
    role: 'Design Lead',
  },
  sections: [
    {
      type: 'gallery',
      rows: [
        {
          layout: 'bento',
          side: 'right',
          large: image(
            media03,
            'User at a desktop monitor working in the RoboHive multilane timeline',
          ),
          small: [
            image(
              media01,
              'Two collaborative robot arms with grippers above parts trays in a test cell',
            ),
            image(
              media02,
              'Person holding a tablet with RoboHive in front of a two-arm robot cell',
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
          Most robotics software is built for experts—complex, rigid, and hard to scale. Leverage
          Robotics wanted to lower that barrier, making automation accessible without losing the
          precision required in industrial settings. The challenge was to strike a balance between
          power and simplicity: could we build a programming tool that was both technically robust
          and visually approachable?
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
              media04,
              'Competitor audit board comparing robot programming interfaces from Universal Robots, KUKA and others',
            ),
            image(
              media05,
              'Moodboards exploring light and open-canvas directions with UI references, colors and type',
            ),
          ],
        },
      ],
    },
    {
      type: 'text',
      variant: 'centered',
      heading: 'Research & Strategy',
      body: (
        <p>
          I kicked off the project with a deep dive into existing solutions, competitor audits, and
          internal interviews with roboticists. This early research revealed key friction points:
          lack of workflow visibility, poor modularity, and limited interaction logic. Based on
          those insights, I defined a new interaction model built around clarity, feedback, and
          control.
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
            'Information architecture diagram linking composition area, machines, toolbox and action flow',
          ),
        },
        {
          layout: 'grid',
          columns: 3,
          items: [
            image(
              media07,
              'Screen overview grouped into navigation, run mode, lane view, toolbox and robot control',
            ),
            image(
              media08,
              'Block logic sketches, actual-scale iPad preview, block type overview and layout grids',
            ),
            image(
              media09,
              'Wireframes comparing three layout concepts: Gantt chart, master-detail and open canvas',
            ),
          ],
        },
      ],
    },
    {
      type: 'text',
      variant: 'split',
      heading: 'A Visual Approach to Programming',
      body: (
        <p>
          We replaced traditional coding views with a timeline-based system that uses visual
          blocks—allowing users to build and edit workflows like in a video editor. I introduced
          multi-lane structures for managing parallel processes, a dedicated manipulation view for
          different robot modes, and an embedded fallback layer for quick error-handling—all within
          the same visual flow.
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
            image(media10, 'Line icon set for playback, editing, logic blocks and robot control'),
            image(
              media11,
              'Color palette: grey and blue-grey scales with magenta, green, purple and turquoise accents',
            ),
            image(media12, '3D rotation gizmo with red, green and blue rings around a cube'),
          ],
        },
        {
          layout: 'grid',
          columns: 2,
          items: [
            image(
              media13,
              'Typography system: Roboto weights and type scale for titles, labels and body text',
            ),
            image(
              media14,
              'Close-up of the tablet controls for robot position, reference frame and joints',
            ),
          ],
        },
      ],
    },
    {
      type: 'text',
      variant: 'centered',
      heading: 'Design System & Development Handoff',
      body: (
        <p>
          To ensure smooth implementation, I developed a modular design system with reusable UI
          components, interaction patterns, and documentation. This gave Leverage Robotics a solid
          foundation for scaling the interface and aligned closely with their frontend dev team for
          handoff and implementation.
        </p>
      ),
    },
    {
      type: 'gallery',
      rows: [
        {
          layout: 'bento',
          side: 'left',
          large: video(
            '/videos/leverage-robotics/01.mp4',
            1514,
            1080,
            'RoboHive timeline on a tablet, building a workflow from Group, If and Wait blocks',
          ),
          small: [
            image(media15, '3D translation gizmo with red, green and blue axis arrows on a cube'),
            image(
              media16,
              'Timeline blocks for Move Robot, Group, If, While, Wait and Lock, expanded and collapsed',
            ),
          ],
        },
      ],
    },
    {
      type: 'text',
      variant: 'split',
      heading: 'From Idea to Deployment',
      body: (
        <p>
          Through iterative prototyping and continuous feedback loops, we moved from concept to
          production in under seven months. RoboHive UI is now live—offering a clean, scalable, and
          future-ready interface that redefines how industrial workflows are built and managed.
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
              media17,
              'Tablet manipulation view with a 3D robot arm and position, joint and orientation controls',
            ),
            image(
              media18,
              'Tablet in Move Linear mode, setting a robot target pose directly in 3D',
            ),
          ],
        },
      ],
    },
    {
      type: 'text',
      variant: 'split',
      heading: 'Successful Implementation & Deployment',
      body: (
        <p>
          Following the design and development phase, RoboHive UI was successfully deployed. The
          result: an intuitive and scalable system that makes robotic workflow programming more
          accessible, structured, and visually clear.
        </p>
      ),
      link: { label: 'Link to Project', href: 'https://leverage-robotics.com/en/' },
    },
  ],
} satisfies Project
