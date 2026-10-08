import type { Project } from '@/content/types'
import { image } from '@/content/media'
import cover from './media/cover.webp'
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

export const vsInterface = {
  title: 'Visual Programming for Robotics – Designing Simplicity into Complexity',
  tag: 'Case Study',
  description:
    'Case study at Interaktionswerk: a drag-and-drop visual programming concept and working prototype that makes industrial robot programming more accessible.',
  cover: image(cover, 'Tablet with keyboard showing the dark visual robot programming editor'),
  intro: {
    body: (
      <p>
        At Interaktionswerk, I explored how visual interfaces could simplify industrial robotics.
        Together with Fabian Gronbach, I designed a programming concept that turns code-heavy
        workflows into an intuitive drag-and-drop editor—making automation more accessible for teams
        without advanced coding skills.
      </p>
    ),
  },
  meta: {
    client: 'Case Study @Interaktionswerk',
    duration: '2 months (2023)',
    deliverables: 'Design System, Design Concept, Working Prototype',
    role: 'Strategic UX/UI Designer',
  },
  sections: [
    {
      type: 'gallery',
      rows: [
        {
          layout: 'grid',
          columns: 2,
          items: [
            image(
              media01,
              'Two people working with the visual editor and a small desktop robot arm',
            ),
            image(
              media02,
              'Desk monitor showing a full robot workflow built from connected action nodes',
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
          Programming industrial robots is powerful—but it’s also slow, complex, and intimidating.
          We wanted to rethink the entire experience: Could a visual canvas reduce complexity
          without compromising control?
        </p>
      ),
    },
    {
      type: 'gallery',
      rows: [
        {
          layout: 'full',
          item: image(
            media03,
            'Three-phase process diagram: research, design system development, testing and validation',
          ),
        },
      ],
    },
    {
      type: 'text',
      variant: 'centered',
      heading: 'Process & Concept',
      body: (
        <p>
          We began by reverse-engineering tools like ROS and Intrinsic, uncovering rigid flows and
          steep learning curves. Inspired by video editing tools, I prototyped a visual block
          system—each action (like “move,” “wait,” or “grab”) became a modular component, connected
          in a horizontal flow. This model mirrors how users think—sequentially, not abstractly.
        </p>
      ),
    },
    {
      type: 'gallery',
      rows: [
        {
          layout: 'full',
          item: image(
            media04,
            'Dark UI component library with chips, inputs, knobs, nodes and a motion editor',
          ),
        },
      ],
    },
    {
      type: 'text',
      variant: 'split',
      heading: 'Testing & Insights',
      body: (
        <p>
          To validate the concept, I built a working prototype and ran tests on a 6-DOF robot. We
          observed how both engineers and non-experts built workflows, identified friction points,
          and refined UI feedback and error visibility. One key takeaway: real-time validation
          during task assembly—not just on execution—is critical to user trust.
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
            image(media05, 'Color palette of Primary Orange, Secondary Blue, Dark and Light'),
            image(media06, 'Typography specimen of Open Sans in bold and regular weights'),
          ],
        },
        {
          layout: 'grid',
          columns: 2,
          tabletColumns: 4,
          items: [
            image(media07, 'Motion Editor node annotated with spacing and sizing values'),
            image(
              media08,
              'Editor canvas linking a physics-based Transition node to a Calibration node',
            ),
            image(media09, 'Editor canvas connecting Move to, Place and Palletize nodes'),
            image(
              media10,
              'Editor canvas with Draw Path, Grip and Gripper Settings nodes for an oil pan',
            ),
          ],
        },
      ],
    },
    {
      type: 'text',
      variant: 'centered',
      heading: 'Results & Takeaways',
      body: (
        <p>
          The prototype showed clear advantages for repetitive or modular tasks. It made robotics
          feel more approachable without sacrificing clarity. That said, it also revealed
          boundaries—timing-sensitive adjustments remain a challenge in visual formats. Still, this
          case proved how good design can unlock complex technology for a broader audience.
        </p>
      ),
    },
  ],
} satisfies Project
