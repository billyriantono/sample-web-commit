import { Menu, Sparkles, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/layout/container'
import { navLinks } from '@/data/site-content'
import { useNavbarScroll } from '@/hooks/use-navbar-scroll'
import { cn } from '@/lib/utils'

export function Navbar() {
  const isScrolled = useNavbarScroll()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }

    window.addEventListener('resize', handleResize, { passive: true })

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-transparent transition duration-300',
        isScrolled && 'border-white/10 bg-slate-950/75 backdrop-blur-xl',
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-20 sm:gap-6">
        <a href="#top" className="flex items-center gap-3 text-white" onClick={() => setOpen(false)}>
          <span className="inline-flex size-10 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-400/15 text-violet-100 shadow-glow">
            <Sparkles className="size-5" />
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-wide">RheaOS</span>
            <span className="block font-mono text-[11px] uppercase tracking-[0.28em] text-slate-400">react migration</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-slate-300 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="secondary" className="rounded-full px-5 py-2.5">
            <a href="#download">Download beta</a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {open && (
        <Container className="pb-4 sm:pb-5 lg:hidden">
          <div id="mobile-nav" className="glass-panel rounded-[1.75rem] p-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-2xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <Button asChild className="mt-4 w-full rounded-2xl" onClick={() => setOpen(false)}>
              <a href="#download">Download beta</a>
            </Button>
          </div>
        </Container>
      )}
    </header>
  )
}
