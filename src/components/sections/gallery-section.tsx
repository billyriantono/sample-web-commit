import type { ComponentType } from 'react'

import { Monitor, PanelsTopLeft, SlidersHorizontal } from 'lucide-react'

import { Container } from '@/components/layout/container'
import { SectionHeader } from '@/components/layout/section-header'
import { galleryItems } from '@/data/site-content'
import { useRevealOnScroll } from '@/hooks/use-reveal-on-scroll'
import { cn } from '@/lib/utils'

const galleryIcons = [Monitor, SlidersHorizontal, PanelsTopLeft]

export function GallerySection() {
  return (
    <section id="gallery" className="section-shell">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-12">
          <SectionHeader
            eyebrow="Gallery"
            title="Preview the interface language before you ever install it"
            description="The landing page highlights core surfaces from the desktop shell, settings flow, and productivity apps using a clean visual grid."
          />
          <p className="max-w-xl text-sm leading-7 text-slate-400 lg:justify-self-end lg:text-right">
            Each panel below is rebuilt as a React-driven presentation card rather than copied from the old Bootstrap markup, keeping the new codebase easier to extend.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item, index) => {
            const Icon = galleryIcons[index % galleryIcons.length]
            return <GalleryCard key={item.title} {...item} Icon={Icon} />
          })}
        </div>
      </Container>
    </section>
  )
}

type GalleryCardProps = (typeof galleryItems)[number] & {
  Icon: ComponentType<{ className?: string }>
}

function GalleryCard({ title, description, tag, accent, Icon }: GalleryCardProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn(
        'reveal-base glass-panel group overflow-hidden rounded-[1.8rem] p-4 transition duration-300 hover:-translate-y-1 hover:shadow-glow-intense',
        isVisible && 'reveal-visible',
      )}
    >
      <div className={cn('relative overflow-hidden rounded-[1.45rem] border border-white/10 p-5', `bg-gradient-to-br ${accent}`)}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_32%)]" />
        <div className="relative rounded-[1.2rem] border border-white/10 bg-slate-950/80 p-5">
          <div className="flex items-center justify-between text-slate-400">
            <span className="font-mono text-xs uppercase tracking-[0.28em]">{tag}</span>
            <Icon className="size-5" />
          </div>
          <div className="mt-6 space-y-3">
            <div className="h-28 rounded-2xl border border-white/10 bg-white/5" />
            <div className="grid grid-cols-3 gap-3">
              <div className="h-16 rounded-2xl border border-white/10 bg-white/5" />
              <div className="h-16 rounded-2xl border border-white/10 bg-white/10" />
              <div className="h-16 rounded-2xl border border-white/10 bg-white/5" />
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 pb-2 pt-5">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
      </div>
    </div>
  )
}
