import { FormEvent, useEffect, useRef, useState } from 'react'

import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type FormState = 'idle' | 'loading' | 'success'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<FormState>('idle')
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email.trim()) return

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }

    const prefersReducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches

    if (prefersReducedMotion) {
      setState('success')
      setEmail('')
      return
    }

    setState('loading')

    timeoutRef.current = window.setTimeout(() => {
      setState('success')
      setEmail('')
      timeoutRef.current = null
    }, 1500)
  }

  return (
    <section id="newsletter" className="section-shell pt-4 sm:pt-6">
      <Container>
        <div className="glass-panel overflow-hidden rounded-[2rem] p-8 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-200/80">Newsletter</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Stay close to the migration as the landing page moves to a modern frontend stack.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Subscribe for release notes, interface previews, and implementation progress updates while the React and Tailwind version reaches parity with the legacy page.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[1.8rem] border border-white/10 bg-black/20 p-5 sm:p-6">
              <label htmlFor="newsletter-email" className="text-sm text-slate-300">
                Email address
              </label>
              <Input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="mt-3"
              />
              <Button type="submit" disabled={state === 'loading'} className="mt-4 h-12 w-full rounded-2xl">
                {state === 'loading' ? 'Submitting...' : state === 'success' ? 'Subscribed successfully' : 'Join the newsletter'}
              </Button>
              <p className="mt-4 text-sm text-slate-400">
                {state === 'success'
                  ? 'Thanks for subscribing. We will share the next migration milestone soon.'
                  : 'We only send product and release updates relevant to the RheaOS beta.'}
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
