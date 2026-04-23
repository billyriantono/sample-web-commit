type HeroWindowMockProps = {
  x: number
  y: number
}

export function HeroWindowMock({ x, y }: HeroWindowMockProps) {
  return (
    <div className="relative">
      <div className="orb orb-violet" style={{ transform: `translate(${x * -1.2}px, ${y * -1.2}px)` }} />
      <div className="orb orb-cyan" style={{ transform: `translate(${x * 1.1}px, ${y * 1.1}px)` }} />
      <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-5 shadow-glow-intense">
        <div className="rounded-[1.6rem] border border-white/10 bg-slate-950/80 p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <span className="size-3 rounded-full bg-rose-400/80" />
              <span className="size-3 rounded-full bg-amber-300/80" />
              <span className="size-3 rounded-full bg-emerald-400/80" />
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.26em] text-slate-500">RheaOS shell</span>
          </div>

          <div className="mt-6 grid gap-4 xl:grid-cols-[0.7fr_1fr]">
            <div className="space-y-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-cyan-200/80">System focus</p>
                <div className="mt-4 h-24 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-white/5 to-transparent" />
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-300">Daily session stability</p>
                <p className="mt-2 text-3xl font-semibold text-white">99.98%</p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-300">Workspace preview</span>
                <span className="rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1 text-xs text-violet-100">Beta</span>
              </div>
              <div className="mt-4 grid gap-4">
                <div className="h-36 rounded-[1.6rem] bg-gradient-to-br from-violet-500/25 via-slate-900 to-slate-950" />
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-20 rounded-2xl bg-white/5" />
                  <div className="h-20 rounded-2xl bg-white/10" />
                  <div className="h-20 rounded-2xl bg-white/5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
