import { site } from '@/content/site'
import { Reveal } from '@/components/motion/Reveal'
import { buttonStyles } from '@/components/ui/button-styles'
import { SmartLink } from '@/components/ui/SmartLink'
import { Container } from './Container'

export function Footer() {
  // Pages are prerendered, so this is the year of the latest deploy.
  const year = new Date().getFullYear()

  return (
    <footer>
      <Container>
        <Reveal amount={0.5} transition="base" className="pt-50 pb-10">
          <div className="flex h-20 items-start justify-between desktop:items-center">
            <ul className="flex flex-col gap-1.5 desktop:flex-row desktop:gap-6">
              {site.socials.map((social) => (
                <li key={social.href}>
                  <SmartLink
                    href={social.href}
                    className="type-body whitespace-pre transition-colors duration-400 ease-framer hover:text-fg-subtle"
                  >
                    {`${social.label} • `}
                  </SmartLink>
                </li>
              ))}
            </ul>
            <SmartLink href={site.footer.cta.href} className={buttonStyles.primary}>
              {site.footer.cta.label}
            </SmartLink>
          </div>
          <div className="mt-6 flex justify-between gap-2.5 type-body">
            <p className="font-bold whitespace-pre">
              {site.name}
              <span className="hidden desktop:inline">{`  •  ${year}`}</span>
            </p>
            <p className="text-right">{site.footer.location}</p>
          </div>
        </Reveal>
      </Container>
    </footer>
  )
}
