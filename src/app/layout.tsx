import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Footer } from '@/components/layout/Footer'
import { Nav } from '@/components/layout/Nav'
import { Providers } from '@/components/layout/Providers'
import { site } from '@/content/site'
import { themeScript } from '@/lib/theme'
import { fontVariables } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s – ${site.name}` },
  description: site.description,
  icons: {
    icon: [
      { url: '/favicon-light.png', media: '(prefers-color-scheme: light)' },
      { url: '/favicon-dark.png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/apple-touch-icon.png',
  },
  robots: { 'max-image-preview': 'large' },
}

// Scroll-revealed elements start invisible; without JavaScript they must simply show.
const noscriptStyles = `<style>[data-reveal],[data-word]{opacity:1!important;transform:none!important}</style>`

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript dangerouslySetInnerHTML={{ __html: noscriptStyles }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <Providers>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
