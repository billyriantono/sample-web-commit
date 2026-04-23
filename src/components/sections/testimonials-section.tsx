import { Quote } from 'lucide-react'

import { Container } from '@/components/layout/container'
import { SectionHeader } from '@/components/layout/section-header'
import { testimonials } from '@/data/site-content'
import { useRevealOnScroll } from '@/hooks/use-reveal-on-scroll'
import { cn } from '@/lib/utils'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-shell">
      <Container>
        <SectionHeader
          eyebrow="Testimonials"
          title="Early feedback confirms the visual direction and product tone"
          description="To keep implementation scope focused, the migration uses a responsive testimonial grid first instead of recreating a more complex carousel."
        />

        <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </Container>
    </section>
  )
}

type TestimonialCardProps = (typeof testimonials)[number]

function TestimonialCard({ name, role, quote }: TestimonialCardProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>()

  return (
    <article
      ref={ref}
      className={cn(
        'reveal-base glass-panel rounded-[1.9rem] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-glow-intense',
        isVisible && 'reveal-visible',
      )}
    >
      <Quote className="size-8 text-violet-200/80" />
      <p className="mt-6 text-base leading-8 text-slate-200">“{quote}”</p>
      <div className="mt-8 border-t border-white/10 pt-5">
        <p className="font-semibold text-white">{name}</p>
        <p className="mt-1 text-sm text-slate-400">{role}</p>
      </div>
    </article>
  )
}
