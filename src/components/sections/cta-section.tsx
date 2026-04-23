import { ArrowRight } from 'lucide-react'

import { Container } from '@/components/layout/container'
import { ctaContent } from '@/data/site-content'

export function CtaSection() {
  return (
    <section id="cta" className="section-shell pt-4 sm:pt-6">
      <Container>
        <div className="glass-panel rounded-[2rem] p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-violet-200/80">{ctaContent.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">{ctaContent.title}</h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">{ctaContent.description}</p>
            </div>

            <a
              href={ctaContent.buttonHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-200 sm:w-auto"
            >
              {ctaContent.buttonLabel}
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
