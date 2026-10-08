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
import media14 from './media/14.png'
import media15 from './media/15.jpg'
import media16 from './media/16.jpg'
import media17 from './media/17.jpg'
import media18 from './media/18.jpg'

export const mara = {
  title: 'māra – Designing Connection Across Barriers in Urban Garden Communities',
  tag: 'UX/UI',
  description:
    'Bachelor thesis app concept for urban garden communities, helping members plan and organize together across language and digital-skill barriers.',
  cover: image(
    cover,
    'Four phones showing māra screens for the garden home, beds and help requests',
  ),
  intro: {
    body: (
      <p>
        As part of my bachelor thesis at HfG Schwäbisch Gmünd, I co-designed <em>māra</em>—a
        mobile-first platform that helps urban gardening communities collaborate more inclusively.
        Working closely with my project partners Diana Hutter and Lukas Brendle, we set out to solve
        a real-world challenge: how can people with different languages and digital skill levels
        still garden, plan, and organize—together?
      </p>
    ),
    link: {
      label: 'Full Documentation',
      href: 'https://drive.google.com/file/d/1GsT2Z-LyalkS-J1fJUfG4JHsYVs1jhiu/view?usp=sharing',
    },
  },
  meta: {
    client: 'Bachelor Thesis',
    duration: '7 months (2021)',
    deliverables: 'App Concept, Design System, Prototype',
    role: 'UX/UI Designer',
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
            'Aerial view of an urban community garden with rows of raised beds',
          ),
          small: [
            image(
              media01,
              'Two people planting herbs in a wooden crate marked with a māra QR code',
            ),
            image(
              media02,
              'Phone showing the māra Setzlinge einpflanzen guide above a seedling tray',
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
          Urban gardens are diverse, social, and grassroots by nature—but they often lack the tools
          to support inclusive collaboration. Many members face barriers around communication:
          language, digital literacy, or unclear responsibilities. Our mission was to create a
          platform that’s welcoming, intuitive, and universally understandable—no tech skills or
          translation needed.
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
            image(media04, 'Sticky notes sorted into rings from core values to low priority'),
            image(media05, 'Stakeholder map of urban gardens, from board and members to suppliers'),
            image(
              media06,
              'Value proposition canvas matching māra features to gardener gains, pains and jobs',
            ),
          ],
        },
      ],
    },
    {
      type: 'text',
      variant: 'centered',
      heading: 'Research & Discovery',
      body: (
        <p>
          Over several months, we conducted interviews, observations, and journey mappings in
          gardens across Germany. We spoke with coordinators, newcomers, and longtime members,
          uncovering friction points like inaccessible WhatsApp groups or information silos. These
          insights shaped our direction: less text, more visual clarity.
        </p>
      ),
    },
    {
      type: 'gallery',
      rows: [
        {
          layout: 'full',
          item: image(
            media07,
            'Usability test map of five tasks with user quotes, effort curve and pains',
          ),
        },
        {
          layout: 'grid',
          columns: 3,
          items: [
            image(
              media08,
              'Information architecture of the māra app, from splash screen to all sections',
            ),
            image(
              media09,
              'Wireframe flow from login to creating a garden and managing members and news',
            ),
            image(
              media10,
              'Grayscale wireframes for joining a garden, the menu, garden list and plot map',
            ),
          ],
        },
      ],
    },
    {
      type: 'text',
      variant: 'split',
      heading: 'Design Process',
      body: (
        <p>
          We ran co-creation workshops with community members to test interaction ideas and UI
          principles early. I led the prototyping and interaction design—developing a symbol-first
          system for navigation, task sharing, and garden updates. We tested and iterated
          frequently, making sure the interface worked just as well for older non-digital users as
          it did for smartphone natives.
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
              media11,
              'māra color palette: Light, Field, Primary green and Dark with hex codes',
            ),
            image(media12, 'māra typography specimen in SF Pro Bold and SF Pro Regular'),
            image(
              media13,
              'Flat illustrations of planting, hedge trimming, an open book and sowing seeds',
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
          <em>māra</em> uses universal iconography and a clean layout to support multilingual
          collaboration and easy onboarding. Each garden gets its own space to share updates,
          organize tasks, and build community. It’s light, modular, and scales to the needs of
          gardens big or small—without overwhelming its users.
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
            '/videos/mara/01.mp4',
            1145,
            1080,
            'Screen recording of the māra map of Schwäbisch Gmünd with the Himmelgarten garden card',
          ),
          small: [
            image(media14, 'Flat illustration of a lawn mower from the māra illustration set'),
            image(media15, 'Grid of twenty white line icons from the māra icon set'),
          ],
        },
      ],
    },
    {
      type: 'text',
      variant: 'split',
      heading: 'Results',
      body: (
        <p>
          <em>māra</em> was presented as a final thesis in Interaction Design, showcasing how
          user-centered thinking can enable real inclusion. The app prototype was fully documented
          and tested across varied user groups—and remains a proof of how design can break down both
          language and technological barriers.
        </p>
      ),
      link: {
        label: 'Full Documentation',
        href: 'https://drive.google.com/file/d/1GsT2Z-LyalkS-J1fJUfG4JHsYVs1jhiu/view?usp=sharing',
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
              media16,
              'Two phones showing the Himmelgarten garden profile and its Gartenplan bed map',
            ),
            image(
              media17,
              'Phone showing the Himmelgarten home screen with event banner and feature tiles',
            ),
            image(media18, 'Phone map of Schwäbisch Gmünd with garden pins and a Rosengarten card'),
            video(
              '/videos/mara/02.mp4',
              1080,
              1080,
              'Phone showing the māra events calendar (Veranstaltungen) on green',
            ),
          ],
        },
      ],
    },
  ],
} satisfies Project
