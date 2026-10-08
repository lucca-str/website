'use client'

import { useState, type FormEvent } from 'react'
import type { ContactFormCopy } from '@/content/contact'
import { cx } from '@/lib/cx'

type Status = 'idle' | 'loading' | 'success' | 'error'

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

const field = cx(
  'type-input w-full rounded-field bg-line p-3 text-fg placeholder:text-fg-subtle',
  'tween-fast transition-shadow focus:ring-1 focus:ring-[#0099ff] focus:outline-none focus:ring-inset',
)

/** The contact form. Submissions go to Web3Forms, which emails them to Lucca. */
export function ContactForm({ copy }: { copy: ContactFormCopy }) {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('loading')
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: copy.subject,
          from_name: 'lucca-strecker.com',
          ...Object.fromEntries(new FormData(form)),
        }),
      })
      const result: { success?: boolean } = await response.json()
      if (!response.ok || !result.success) throw new Error('Submission failed')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  // Editing the form again clears a previous success/error message.
  const resetStatus = () => (status === 'success' || status === 'error') && setStatus('idle')

  return (
    <form
      onSubmit={handleSubmit}
      onChange={resetStatus}
      className="mx-auto flex w-full flex-col gap-4 desktop:w-3/5"
    >
      <label>
        <span className="sr-only">Name</span>
        <input
          name="name"
          required
          autoComplete="name"
          placeholder={copy.namePlaceholder}
          className={cx(field, 'h-12 font-ui')}
        />
      </label>
      <label>
        <span className="sr-only">Email</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={copy.emailPlaceholder}
          className={cx(field, 'h-12 font-ui')}
        />
      </label>
      <label>
        <span className="sr-only">Message</span>
        <textarea
          name="message"
          required
          placeholder={copy.messagePlaceholder}
          className={cx(field, 'block h-40 resize-y font-sans')}
        />
      </label>
      {/* Honeypot for bots — Web3Forms rejects submissions that tick it. */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" />

      <SubmitButton status={status} copy={copy} />
    </form>
  )
}

function SubmitButton({ status, copy }: { status: Status; copy: ContactFormCopy }) {
  return (
    <button
      type="submit"
      disabled={status === 'loading'}
      aria-live="polite"
      className={cx(
        'mx-auto mt-3 flex h-10 w-full cursor-pointer items-center justify-center rounded-full type-button shadow-submit',
        'transition-[background-color,color,opacity] tween-fast disabled:cursor-default tablet:w-[30%]',
        status === 'idle' &&
          'bg-fg text-bg hover:bg-[#333333] hover:text-white active:bg-[#111111e6]',
        status === 'loading' && 'bg-fg-subtle',
        status === 'success' && 'bg-fg text-bg',
        status === 'error' && 'bg-[#ff224426] text-[#ff2244]',
      )}
    >
      {status === 'idle' && copy.submit}
      {status === 'loading' && <Spinner />}
      {status === 'success' && (
        <span className="font-sans text-[14px] font-semibold">{copy.success}</span>
      )}
      {status === 'error' && (
        <span className="font-sans text-[14px] font-semibold">{copy.error}</span>
      )}
    </button>
  )
}

/** A white comet spinning once a second inside a 2px ring, like the original. */
function Spinner() {
  return (
    <span
      aria-label="Sending"
      className="block size-5 animate-spin rounded-full bg-[conic-gradient(from_0deg,transparent_7deg,#fff_360deg)] [mask:radial-gradient(farthest-side,transparent_calc(100%-2px),#000_calc(100%-2px))]"
    />
  )
}
