import { CursorDot } from '@/components/layout/CursorDot'

/** Home, Work, About and Contact share the custom cursor; case studies don't (as on the original). */
export default function SiteLayout({ children }: LayoutProps<'/'>) {
  return (
    <>
      {children}
      <CursorDot />
    </>
  )
}
