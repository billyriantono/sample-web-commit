import { Container } from '@/components/layout/container'
import { SectionHeader } from '@/components/layout/section-header'
import { legalSections } from '@/data/site-content'

export function LegalSection() {
  return (
    <section id="legal" className="section-shell pt-4 sm:pt-6">
      <Container>
        <div className="glass-panel rounded-[2rem] p-8 sm:p-10 lg:p-12">
          <SectionHeader
            eyebrow="Legal"
            title="Privacy Policy & Terms"
            description="Review the placeholder policies governing newsletter submissions, beta downloads, and use of this landing experience."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {legalSections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="rounded-[1.8rem] border border-white/10 bg-black/20 p-6 scroll-mt-28 sm:p-8"
              >
                <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-200/80">Legal</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{section.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{section.description}</p>
                <div className="mt-6 space-y-4 text-sm leading-7 text-slate-400 sm:text-base">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
