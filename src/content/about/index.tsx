import { image } from '@/content/media'
import type { RichText } from '@/content/types'
import carousel01 from './carousel/01.jpg'
import carousel02 from './carousel/02.png'
import carousel03 from './carousel/03.jpg'
import carousel04 from './carousel/04.jpg'
import carousel05 from './carousel/05.png'
import carousel06 from './carousel/06.jpg'

export type AboutDetail = { title: string; body: RichText }

export const about = {
  title: 'Hey there!',
  description:
    'Lucca Strecker bridges UX/UI design and product strategy, with 4+ years of experience in robotics, SaaS, smart systems and AI-driven products.',
  intro:
    'With 4+ years of experience crafting intuitive digital experiences, a background in Interaction and Strategic Design, I bridge UX/UI design with product strategy • translating complex challenges into clear, usable solutions.',
  carousel: [
    image(carousel01, 'Two designers discussing work at a laptop in a meeting room'),
    image(carousel02, 'Colleagues at work in a bright studio office full of plants'),
    image(carousel03, 'Working on a laptop at a sunny rooftop terrace table'),
    image(carousel04, 'Working on a laptop in a leather armchair with guitars on the wall'),
    image(carousel05, 'Controlling two collaborative robot arms from a tablet'),
    image(carousel06, 'Unpacking a kite for kitesurfing on a sandy beach'),
  ],
  carouselLabels: { previous: 'Previous image', next: 'Next image' },
  columns: [
    'Over the last years I’ve worked with clients like Agile Robots, Allplan, DG Nexolution, Addium, Leverage Robotics, Deichmann Fuchs, and IHK—designing products across SaaS, Robotics, Smart Systems, and AI-driven applications. My focus is never just on looks—good design is about clarity, usability, and empathy. It’s about understanding people and building what truly helps them.',
    'Outside of work, I’m most at home in motion—kitesurfing, climbing, or off on a road trip. I also play guitar, and music has long been a space for creativity and focus that feeds back into how I design.',
  ],
  detailsHeading: 'About me',
  details: [
    {
      title: 'Experience',
      body: (
        <ul>
          <li>
            <strong>4.5+ years in UX & Product Design</strong> <br />
            Full-time role (1.5 years)
            <br />
            Previously: Internship & Working Student (3 years combined)
            <br />
            <br />
          </li>
          <li>
            <strong>
              Education
              <br />
            </strong>
            B.A. Interaction Design (HfG Schwäbisch Gmünd)
            <br />
            M.A. Strategic Design (HfG Schwäbisch Gmünd)
          </li>
        </ul>
      ),
    },
    {
      title: 'Collaborations',
      body: (
        <>
          <p>
            I’ve worked with a wide range of clients, from startups to established companies:
            <br />
            <br />
          </p>
          <ul>
            <li>
              <strong>Leverage Robotics, </strong>
            </li>
            <li>
              <strong>Allplan, </strong>
            </li>
            <li>
              <strong>DG Nexolution, </strong>
            </li>
            <li>
              <strong>Addium, </strong>
            </li>
            <li>
              <strong>Deichmann Fuchs, </strong>
            </li>
            <li>
              <strong>IHK</strong>
            </li>
            <li>
              and more.
              <br />
              <br />
              These projects spanned{' '}
              <strong>robotics, industrial software, smart systems, and measuring tools</strong>,
              focusing on making complex technology more intuitive.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: 'Skills',
      body: (
        <ul>
          <li>
            <strong>UX/UI Design</strong> – Interaction models, usability, design systems
          </li>
          <li>
            <strong>Product Strategy</strong> – Bridging business & user needs
          </li>
          <li>
            <strong>User Research & Testing</strong> – Interviews, usability tests, workshops
          </li>
          <li>
            <strong>Design & Prototyping</strong> – Figma, Framer, Protopie
          </li>
          <li>
            <strong>Technical Collaboration</strong> – Frontend principles, AI-enhanced workflows
          </li>
          <li>
            <strong>Facilitation</strong> – Stakeholder alignment, workshop moderation
          </li>
          <li>
            <strong>AI-Driven Design</strong> – Leveraging tools like ChatGPT, MidJourney, Claude &
            Cline to accelerate ideation, prototyping & workflow; hands-on experience with ML models
            and autonomous agents
          </li>
        </ul>
      ),
    },
    {
      title: 'Tools',
      body: (
        <ul>
          <li>
            <strong>Adobe Suite</strong> (Photoshop, Illustrator, After Effects)
          </li>
          <li>
            <strong>Figma, Spline, Framer</strong>
          </li>
          <li>
            <strong>AI-First Environments </strong>(Claude, MidJourney, ChatGPT, Cline, …)
          </li>
          <li>
            <strong>HTML, CSS, JavaScript, Swift</strong>
          </li>
        </ul>
      ),
    },
  ] satisfies AboutDetail[],
}
