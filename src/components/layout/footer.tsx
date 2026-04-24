import { Github, Globe, MessageCircle, Twitter } from 'lucide-react'

import { Container } from '@/components/layout/container'
import { footerColumns, footerLegalLinks } from '@/data/site-content'

const socialLinks = [
  { label: 'GitHub', href: '#', Icon: Github },
  { label: 'Twitter', href: '#', Icon: Twitter },
  { label: 'Community', href: '#', Icon: MessageCircle },
  { label: 'Website', href: '#', Icon: Globe },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-14">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-violet-200/80">RheaOS</p>
            <h2 className="mt-4 max-w-xl text-2xl font-semibold text-white sm:text-3xl">
              A cleaner React-based foundation for the next version of the landing experience.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
              The new implementation replaces the legacy Bootstrap structure with reusable Tailwind-first sections, local hooks, and Lucide iconography.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-300/30 hover:text-white"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold text-white">{column.title}</h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-slate-400 transition hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <p>© 2025 RheaOS. React migration build.</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              {footerLegalLinks.map((link) => (
                <a key={link.label} href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <p>Tailwind CSS · Lucide React · Vite</p>
        </div>
      </Container>
    </footer>
  )
}
