import type { ComponentType } from 'react'
import { Layers3, Rocket, Shield, Terminal, Workflow, Zap } from 'lucide-react'

import { Container } from '@/components/layout/container'
import { SectionHeader } from '@/components/layout/section-header'
import { Card } from '@/components/ui/card'
import { features } from '@/data/site-content'
import { useRevealOnScroll } from '@/hooks/use-reveal-on-scroll'
import { cn } from '@/lib/utils'

const iconMap = {
  Zap,
  Shield,
  Layers3,
  Workflow,
  Terminal,
  Rocket,
}

export function FeaturesSection() {
  return (
    <section id="features" className="section-shell">
      <Container>
        <SectionHeader
          eyebrow="Features"
          title="Designed for a more deliberate desktop experience"
          description="The new React migration breaks large legacy markup into reusable cards, content arrays, and hooks without losing the original premium atmosphere."
        />

        <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon]
            return <FeatureCard key={feature.title} title={feature.title} description={feature.description} Icon={Icon} />
          })}
        </div>
      </Container>
    </section>
  )
}

type FeatureCardProps = {
  title: string
  description: string
  Icon: ComponentType<{ className?: string }>
}

function FeatureCard({ title, description, Icon }: FeatureCardProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>()

  return (
    <Card
      ref={ref}
      className={cn(
        'reveal-base relative overflow-hidden rounded-[1.85rem] border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:shadow-glow-intense',
        isVisible && 'reveal-visible',
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.12),transparent_30%)]" />
      <div className="relative">
        <div className="inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-100">
          <Icon className="size-5" />
        </div>
        <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
      </div>
    </Card>
  )
}
