import { ContactForm } from '@/components/contact/ContactForm'
import { Container } from '@/components/layout/Container'
import { PageTitle } from '@/components/ui/PageTitle'
import { contact } from '@/content/contact'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: 'Contact',
  description: contact.description,
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <PageTitle>{contact.title}</PageTitle>
      <Container className="pb-[177px] tablet:pb-28">
        <ContactForm copy={contact.form} />
      </Container>
    </>
  )
}
