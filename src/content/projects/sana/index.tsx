import type { Project } from '@/content/types'
import { image } from '@/content/media'
import cover from './media/cover.jpg'
import youtubePoster from './media/youtube-poster.webp'
import media01 from './media/01.jpg'
import media02 from './media/02.jpg'
import media03 from './media/03.jpg'
import media04 from './media/04.png'
import media05 from './media/05.png'
import media06 from './media/06.png'
import media07 from './media/07.png'
import media08 from './media/08.png'
import media09 from './media/09.png'
import media10 from './media/10.png'
import media11 from './media/11.png'
import media12 from './media/12.png'

export const sana = {
  title: 'sana – Future-Proofing Pharmacies Through Design',
  tag: 'Strategy',
  description:
    'Strategic design M.A. concept for German pharmacies after the e-prescription rollout, combining education, home delivery, mobile health hubs and an app.',
  cover: image(
    cover,
    'Phone showing the sana Bestelloptionen screen with delivery, pickup and consultation',
  ),
  intro: {
    body: (
      <>
        <p>
          How can digitalization make healthcare more accessible—especially for seniors and
          underrepresented communities? In a strategic design project, we tackled the ripple effects
          of Germany’s new e-prescription regulation, envisioning how pharmacies and general
          practitioners might evolve by 2030. Our answer: <em>sana</em>, a phased solution combining
          education, delivery services, and mobile health hubs into one integrated care system.
        </p>
        <p>
          I co-led concept development and UX/UI design for the <em>sana</em> app, prototyping
          features that help patients manage prescriptions, book consultations, and receive care
          where it’s needed most. Beyond screens, I also contributed to physical model-making,
          storytelling, and financial planning—bridging digital and real-world design.
        </p>
      </>
    ),
    link: {
      label: 'Full Documentation',
      href: 'https://drive.google.com/file/d/1tIcxESHVYRLEXgyDd4f5boVE5AQDd4bm/view?usp=sharing',
    },
  },
  meta: {
    client: 'Strategic Design M.A., 1st Semester',
    duration: '7 months (2022)',
    deliverables: 'Process Design, Innovative Design Concept',
    role: 'Strategic Designer – Concept, UX/UI Design, Research, Prototyping, Storytelling, Finance Plan',
  },
  sections: [
    { type: 'youtube', videoId: 'O3DR1z14cM4', poster: youtubePoster, title: 'sana concept video' },
    {
      type: 'text',
      variant: 'split',
      heading: 'The Challenge',
      body: (
        <p>
          With e-prescriptions rolling out across Germany, gaps in digital literacy, service
          accessibility, and healthcare logistics became visible. Pharmacies and GP practices risked
          being left behind. How could we build a system that modernizes care without leaving anyone
          out?
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
              media01,
              'Double-diamond diagram of the sana design process from briefing to result',
            ),
            image(media02, 'Gantt chart of the sana project timeline from March to July'),
          ],
        },
        {
          layout: 'full',
          item: image(
            media03,
            'Patient journey map with pain points from GP visit to medication at home',
          ),
        },
      ],
    },
    {
      type: 'text',
      variant: 'centered',
      heading: 'The Process',
      body: (
        <>
          <p>
            We worked in an interdisciplinary team, combining design thinking with systems and
            future foresight methods. Through field interviews, scenario planning, and iterative
            prototyping, we shaped a 3-phase strategy:
          </p>
          <p>
            <strong>Phase 1:</strong> <br />
            Boost digital literacy among seniors with on-site promoters <br />
            and video explainers at local pharmacies.
          </p>
          <p>
            <strong>Phase 2:</strong> <br />
            Expand pharmacy services with scheduled home deliveries, <br />
            doorstep consultations, and a supporting app.
          </p>
          <p>
            <strong>Phase 3:</strong> <br />
            Launch <em>sana hubs</em>—modular, mobile units offering telehealth, <br />
            medication, and diagnostics in one place.
          </p>
          <p>
            Throughout, we designed the <em>sana</em> app to connect patients to services, <br />
            giving them tools to scan prescriptions, track medications, and schedule hub
            appointments.
          </p>
        </>
      ),
    },
    {
      type: 'gallery',
      rows: [
        {
          layout: 'full',
          item: image(
            media04,
            'Sketches of modular sana hub vehicles for pharmacy, consultation and examination',
          ),
        },
        {
          layout: 'grid',
          columns: 3,
          items: [
            image(
              media05,
              'Sketches of pharmacy home delivery, a health portal app and doorstep handover',
            ),
            image(media06, 'Sketches of pharmacy staff teaching seniors to use the E-Rezept'),
            image(media07, 'Sketch of a therapy update shared between doctor visit and pharmacy'),
          ],
        },
      ],
    },
    {
      type: 'text',
      variant: 'split',
      heading: 'Design Solution',
      body: (
        <>
          <p>
            The <em>sana</em> app serves as a bridge between users and services—especially during
            Phase 2 and 3. We focused on clarity and confidence:
            <br />
            <br />
          </p>
          <ul>
            <li>Medication scanning and ordering</li>
            <li>Appointment scheduling with local hubs</li>
            <li>Simple UI tailored to seniors’ needs</li>
            <li>
              Support for hybrid (in-person + digital) care journeys
              <br />
              <br />
            </li>
          </ul>
          <p>
            Our physical model of the <em>sana hub</em> further visualized the concept’s potential
            in future public health infrastructure.
          </p>
        </>
      ),
    },
    {
      type: 'gallery',
      rows: [
        {
          layout: 'grid',
          columns: 2,
          tabletColumns: 4,
          items: [
            image(
              media08,
              'Three phones showing the sana flow for scanning and adding a medication',
            ),
            image(media09, 'Render of a senior and companion inside the sana mobile health hub'),
            image(media10, 'Phone showing a nearby doctor practice on the sana map (Karte)'),
            image(
              media11,
              'Three phones showing the sana flow for booking a doctor appointment at a hub',
            ),
          ],
        },
        {
          layout: 'full',
          item: image(
            media12,
            'Cutaway render of the sana mobile health hub with counter and medication shelves',
          ),
        },
      ],
    },
    {
      type: 'text',
      variant: 'centered',
      heading: 'Results',
      body: (
        <>
          <p>
            Presented as part of our Strategic Design M.A. program, <em>sana</em> sparked
            discussions on the role of designers in shaping systemic change. The concept combines
            UX, service, and spatial design to imagine a more inclusive healthcare future.
          </p>
          <p>
            While speculative, it demonstrates how thoughtful design can anticipate policy
            shifts—and build real readiness into society.
          </p>
        </>
      ),
    },
  ],
} satisfies Project
