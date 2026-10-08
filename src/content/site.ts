/** Site-wide copy and links. Everything a visitor reads lives in src/content. */
export const site = {
  name: 'Lucca Strecker',
  wordmark: 'Lucca Strecker.',
  url: 'https://lucca-strecker.com',
  /** Link-preview image (1200×630) in /public. */
  ogImage: '/og.png',
  title: 'Lucca Strecker – Strategic UX/UI Designer',
  description:
    'Digital product design with purpose: 4+ years experience in UX, strategy, and interface design for robotics, AI, and SaaS products.',
  nav: [
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lucca-strecker' },
    { label: 'Instagram', href: 'https://www.instagram.com/design.lucca/' },
    { label: 'Dribbble', href: 'https://dribbble.com/Lucca_Str' },
  ],
  footer: {
    cta: { label: 'Connect', href: '/contact' },
    location: 'Based in Munich',
  },
  notFound: {
    title: 'Page Not Found',
    text: 'The page you are looking for does not exist or may have been moved.',
    cta: { label: 'Back to Home', href: '/' },
  },
  caseStudy: {
    metaLabels: {
      client: 'Client',
      duration: 'Duration',
      deliverables: 'Deliverables',
      role: 'Role',
    },
    nextProject: 'Next Project',
  },
} as const
