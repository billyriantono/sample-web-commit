import { CheckCircle2, Download, LoaderCircle } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/layout/container'
import { SectionHeader } from '@/components/layout/section-header'
import { downloadPlatforms } from '@/data/site-content'

type DownloadState = 'idle' | 'loading' | 'done'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

export function DownloadSection() {
  const [states, setStates] = useState<Record<string, DownloadState>>({})
  const [progressMap, setProgressMap] = useState<Record<string, number>>({})
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const timersRef = useRef<Record<string, number>>({})

  useEffect(() => {
    const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY)
    const syncPreference = () => setPrefersReducedMotion(mediaQuery.matches)

    syncPreference()
    mediaQuery.addEventListener('change', syncPreference)

    return () => {
      mediaQuery.removeEventListener('change', syncPreference)
      Object.values(timersRef.current).forEach((timer) => window.clearInterval(timer))
      timersRef.current = {}
    }
  }, [])

  const handleDownload = (id: string) => {
    if (states[id] === 'loading') return

    const existingTimer = timersRef.current[id]
    if (existingTimer) {
      window.clearInterval(existingTimer)
      delete timersRef.current[id]
    }

    if (prefersReducedMotion) {
      setProgressMap((current) => ({ ...current, [id]: 100 }))
      setStates((current) => ({ ...current, [id]: 'done' }))
      return
    }

    setStates((current) => ({ ...current, [id]: 'loading' }))
    setProgressMap((current) => ({ ...current, [id]: 0 }))

    const timer = window.setInterval(() => {
      let shouldComplete = false

      setProgressMap((current) => {
        const base = current[id] ?? 0
        const next = Math.min(base + Math.floor(Math.random() * 18) + 8, 100)
        shouldComplete = next >= 100
        return { ...current, [id]: next }
      })

      if (shouldComplete) {
        window.clearInterval(timer)
        delete timersRef.current[id]
        setStates((current) => ({ ...current, [id]: 'done' }))
      }
    }, 260)

    timersRef.current[id] = timer
  }

  return (
    <section id="download" className="section-shell">
      <Container>
        <SectionHeader
          eyebrow="Download"
          title="Keep the original download interaction, but make it component-driven"
          description="Each platform card owns its own visual state, replacing the old imperative DOM-based progress simulation with straightforward React state transitions."
        />

        <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 xl:grid-cols-3">
          {downloadPlatforms.map((platform) => {
            const state = states[platform.id] ?? 'idle'
            const progress = progressMap[platform.id] ?? (state === 'done' ? 100 : 12)
            const disabled = state === 'loading'

            return (
              <div key={platform.id} className="glass-panel rounded-[1.9rem] p-6">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200/80">{platform.version}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{platform.name}</h3>
                <p className="mt-3 min-h-14 text-sm leading-7 text-slate-300">{platform.architecture}</p>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>Package size</span>
                    <span>{platform.size}</span>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <Button
                  type="button"
                  disabled={disabled}
                  className="mt-6 w-full rounded-2xl"
                  onClick={() => handleDownload(platform.id)}
                >
                  {state === 'loading' ? (
                    <>
                      <LoaderCircle className="size-4 animate-spin" />
                      Preparing download...
                    </>
                  ) : state === 'done' ? (
                    <>
                      <CheckCircle2 className="size-4" />
                      Ready to download
                    </>
                  ) : (
                    <>
                      <Download className="size-4" />
                      Start download
                    </>
                  )}
                </Button>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
