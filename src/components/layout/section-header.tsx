import { cn } from '@/lib/utils'

type SectionHeaderProps = {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({ eyebrow, title, description, align = 'left', className }: SectionHeaderProps) {
  return (
    <div className={cn(align === 'center' && 'mx-auto text-center', className)}>
      <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-200/80">{eyebrow}</p>
      <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-pretty text-sm leading-7 text-slate-400 sm:text-base">{description}</p>
    </div>
  )
}
