import type { Project } from '@/content/types'
import { image, video } from '@/content/media'
import cover from './media/cover.png'
import media01 from './media/01.jpg'
import media02 from './media/02.png'
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
import media19 from './media/19.jpg'
import media20 from './media/20.jpg'
import media21 from './media/21.jpg'
import media22 from './media/22.jpg'
import media23 from './media/23.jpg'
import media24 from './media/24.jpg'
import media25 from './media/25.jpg'

export const parcitypate = {
  title: 'Parcitypate – Designing Participation in Urban Climate Adaptation',
  tag: 'Strategy',
  description:
    'Master thesis at HfG Schwäbisch Gmünd: a framework for citizen participation in urban climate adaptation, using offline methods and a digital platform.',
  cover: image(
    cover,
    'Citizens drawing on the plexiglass-covered city model and placing action tokens',
  ),
  intro: {
    body: (
      <p>
        As part of my Master&apos;s thesis at HfG Schwäbisch Gmünd—developed in collaboration with
        Lukas Brendle—we created <em>Parcitypate</em>: a participatory framework that empowers
        citizens to contribute meaningfully to climate adaptation planning. By combining structured
        offline methods with a digital platform, the project bridges the gap between expert planning
        and local knowledge.
      </p>
    ),
    link: {
      label: 'View/Download full Documentation',
      href: 'https://drive.google.com/file/d/1y7RuvqnPY2wiR0SDAnpDAP9BIDpIqQJB/view?usp=sharing',
    },
  },
  meta: {
    client: 'Master Thesis',
    duration: '7 months (2023)',
    deliverables: 'Strategy Framework, Design Concept',
    role: 'Strategic Designer',
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
              'Laptop on a home dining table showing the Parcitypate project overview',
            ),
            image(
              media02,
              'Two citizens placing tokens and cards on the city model in the showroom',
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
          Traditional urban development processes often rely solely on expert knowledge, overlooking
          the insights of those directly affected—citizens. Yet participation is frequently
          fragmented or symbolic. Our goal was to create a tool that enables inclusive, impactful,
          and transparent participation in shaping resilient urban spaces.
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
              'Value proposition canvas matching participation formats to citizen gains, pains and jobs',
            ),
            image(
              media04,
              'Venn diagram of citizens, Parcitypate and urban climate adaptation with the USP marked',
            ),
          ],
        },
        {
          layout: 'full',
          item: image(
            media05,
            'Three-phase process from research and framework development to testing and validation',
          ),
        },
      ],
    },
    {
      type: 'text',
      variant: 'centered',
      heading: 'Research & Strategy',
      body: (
        <p>
          We began by analyzing the urban planning process through expert interviews and
          quantitative studies. Our goal: identify where public input adds the most value—without
          compromising planning standards. This led us to design a modular participation framework
          tailored for real-world city development.
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
            image(media06, 'Hands building the foam board city model on a plywood base'),
            image(
              media07,
              'Hand sketches exploring city model tables, display boards and showroom setups',
            ),
            image(
              media08,
              'Cutting plotter trimming printed climate action cards such as Dachbegrünung',
            ),
          ],
        },
      ],
    },
    {
      type: 'text',
      variant: 'split',
      heading: 'The Framework',
      body: (
        <>
          <p>
            We developed three participatory methods—each suited to different types of citizen
            engagement:
          </p>
          <ul>
            <li>
              <strong>Making</strong>: Map-based interaction using climate action cards
            </li>
            <li>
              <strong>Telling</strong>: Structured dialogue and feedback collection
            </li>
            <li>
              <strong>Enacting</strong>: Persona-driven reflection on demographic needs
              <br />
              Tested independently or in sequence, these methods offer cities a flexible structure
              to gather local knowledge at scale.
            </li>
          </ul>
        </>
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
              media09,
              'Project timeline from poster campaign to implementation, with the framework at its core',
            ),
            image(
              media10,
              'System diagram linking framework, evaluation and platform to citizens and city planners',
            ),
          ],
        },
        {
          layout: 'full',
          item: image(
            media11,
            'Workshop flow from climate scenarios into the Making, Enacting and Telling methods',
          ),
        },
      ],
    },
    {
      type: 'text',
      variant: 'centered',
      heading: 'From Concept to Field Test',
      body: (
        <p>
          The framework was piloted over two weeks in a dedicated public showroom in Schwäbisch
          Gmünd. Together with over 80 citizens, we tested the methods using real climate scenarios
          like heatwaves and heavy rainfall—mapping concerns, collecting input, and iterating on the
          framework in real time.
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
              media12,
              'Szenario 2040 Extreme Hitze poster on a wooden frame outside the showroom',
            ),
            image(
              media13,
              'Passers-by viewing the showroom window display with a Hitze in der Stadt poster',
            ),
            image(
              media14,
              'Tokens placed on the city model, with action cards and a marker alongside',
            ),
            image(media15, 'Young people gathered around the city model by the showroom window'),
          ],
        },
        {
          layout: 'full',
          item: video(
            '/videos/parcitypate/01.mp4',
            1920,
            1080,
            'Top-down view of participants placing climate action cards and tokens on the city model',
          ),
        },
      ],
    },
    {
      type: 'text',
      variant: 'split',
      heading: 'Digital Platform',
      body: (
        <>
          <p>
            To extend participation beyond the physical space, we designed a complementary digital
            platform that:
          </p>
          <ul>
            <li>Tracks public input over time</li>
            <li>Visualizes long-term climate adaptation strategies</li>
            <li>Promotes transparency and follow-up engagement</li>
          </ul>
          <p>
            This hybrid system ensures continuity and gives citizens visible feedback on how their
            contributions influence city planning.
          </p>
        </>
      ),
    },
    {
      type: 'gallery',
      rows: [
        {
          layout: 'grid',
          columns: 4,
          items: [
            image(media16, 'White circular icon with contour lines on a green construction grid'),
            image(media17, 'Typography scale in SF Pro and SF Pro Rounded, from 20pt to 12pt'),
            image(
              media18,
              'Schmiedgasse project page on a laptop for choosing a participation format and date',
            ),
            image(
              media19,
              'Leaflet titled Machen Sie einen Unterschied für das Stadtklima, with tips against urban heat',
            ),
          ],
        },
        {
          layout: 'grid',
          columns: 2,
          items: [
            image(
              media20,
              'Bocksgasse project page showing 283 participants, a map and decision updates',
            ),
            image(
              media21,
              'Projekte overview on a laptop listing ongoing and planned projects with map previews',
            ),
            image(
              media22,
              'Red Szenario 2040 Extreme Hitze poster on an A-frame stand with color swatches',
            ),
            image(media23, 'Circular tokens with green climate action icons and a purple star'),
            image(
              media24,
              'Fronts and backs of climate action cards such as Dachbegrünung and Urbane Wälder',
            ),
            image(
              media25,
              'Blue Szenario 2040 Sturmflut poster on an A-frame stand with color swatches',
            ),
          ],
        },
      ],
    },
    {
      type: 'text',
      variant: 'split',
      heading: 'Impact',
      body: (
        <p>
          Parcitypate proves that with the right tools, structured participation can be accessible,
          meaningful, and transferable. It offers a replicable model for cities aiming to engage
          communities in climate resilience—blending strategic design, inclusive methods, and
          digital infrastructure.
        </p>
      ),
      link: {
        label: 'View/Download full Documentation',
        href: 'https://drive.google.com/file/d/1y7RuvqnPY2wiR0SDAnpDAP9BIDpIqQJB/view?usp=sharing',
      },
    },
  ],
} satisfies Project
