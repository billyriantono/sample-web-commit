import type { ComponentType } from 'react'

import { Activity, Cpu, Gauge, HardDrive } from 'lucide-react'

import { Container } from '@/components/layout/container'
import { SectionHeader } from '@/components/layout/section-header'
import { minimumRequirements, specHighlights, stats } from '@/data/site-content'
import { useCountUp } from '@/hooks/use-count-up'
import { useRevealOnScroll } from '@/hooks/use-reveal-on-scroll'
import { cn } from '@/lib/utils'

const statIcons = [HardDrive, Activity, Gauge, Cpu]

export function SpecsSection() {
  return (
    <section id="specs" className="section-shell">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Specs"
              title="Technical credibility backed by measurable system signals"
              description="The original counter animations are preserved in React with reusable hooks, while the layout shifts to a clearer Tailwind-based split panel."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {stats.map((item, index) => {
                const Icon = statIcons[index % statIcons.length]
                return <StatCard key={item.label} {...item} Icon={Icon} />
              })}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="glass-panel rounded-[1.9rem] p-7">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200/80">System highlights</p>
              <ul className="mt-6 space-y-4">
                {specHighlights.map((item) => (
                  <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-slate-200">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-panel rounded-[1.9rem] p-7">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-violet-200/80">Minimum requirements</p>
              <ul className="mt-6 space-y-4">
                {minimumRequirements.map((item) => (
                  <li key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm leading-6 text-slate-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

type StatCardProps = (typeof stats)[number] & {
  Icon: ComponentType<{ className?: string }>
}

function StatCard({ label, value, suffix, decimals, Icon }: StatCardProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>(0.45)
  const countedValue = useCountUp(value, isVisible, { decimals: decimals ?? 0, duration: 2000 })

  return (
    <div
      ref={ref}
      className={cn(
        'reveal-base glass-panel rounded-[1.6rem] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-glow-intense',
        isVisible && 'reveal-visible',
      )}
    >
      <div className="flex items-center justify-between">
        <div className="inline-flex rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-3 text-cyan-100">
          <Icon className="size-5" />
        </div>
        <span className="font-mono text-xs uppercase tracking-[0.26em] text-slate-500">Live metric</span>
      </div>
      <p className="mt-6 text-4xl font-bold text-white">
        {countedValue}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  )
}
