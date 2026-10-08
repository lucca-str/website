import { Hanken_Grotesk, Inter, Roboto } from 'next/font/google'

// All three are variable fonts, so every weight is available.
// `subsets` only controls preloading: latin-ext glyphs (e.g. the "ā" in māra)
// are self-hosted too and load on demand via unicode-range.
const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken-grotesk',
})

const inter = Inter({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-inter',
})

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const fontVariables = [hankenGrotesk.variable, inter.variable, roboto.variable].join(' ')
