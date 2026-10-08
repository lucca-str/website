export const contact = {
  title: "Let's Talk",
  description:
    'Get in touch with Lucca Strecker — product designer for UX, strategy and interaction design, based in Munich.',
  form: {
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Your Mail @',
    messagePlaceholder: 'Your message',
    submit: 'Submit',
    success: 'Thank you',
    error: 'Something went wrong',
    /** Subject line of the email Lucca receives. */
    subject: 'New message from lucca-strecker.com',
  },
}

export type ContactFormCopy = typeof contact.form
