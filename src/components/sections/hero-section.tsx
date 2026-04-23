import { ArrowRight, Download, Sparkles } from 'lucide-react'
import { useRef } from 'react'

import { Container } from '@/components/layout/container'
import { HeroWindowMock } from '@/components/sections/hero-window-mock'
import { heroMetrics } from '@/data/site-content'
import { useParallax } from '@/hooks/use-parallax'

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { x, y } = useParallax(heroRef)

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20 xl:pt-24">
      <Container>
        <div ref={heroRef} className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.26em] text-violet-100">
              <Sparkles className="size-4" />
              Rebuilt with React 19 + Tailwind
            </span>
            <h1 className="mt-7 max-w-4xl text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
              Cosmic desktop storytelling, now rebuilt with reusable React sections.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-slate-300 sm:text-lg">
              This migration keeps the dark glassmorphism identity of the original landing page while replacing legacy Bootstrap structure with a cleaner component-first architecture.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#download"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-200 sm:w-auto"
              >
                <Download className="size-4" />
                Get beta build
              </a>
              <a
                href="#features"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10 sm:w-auto"
              >
                Explore features
                <ArrowRight className="size-4" />
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {heroMetrics.map((item) => (
                <div key={item.label} className="glass-panel rounded-[1.5rem] p-5">
                  <p className="text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <HeroWindowMock x={x} y={y} />
        </div>
      </Container>
    </section>
  )
}
