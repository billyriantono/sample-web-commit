import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn, ui } from '@/lib/utils'

const badgeVariants = cva(
  cn(
    'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400/25 focus:ring-offset-2 focus:ring-offset-transparent',
    ui.eyebrow,
  ),
  {
    variants: {
      variant: {
        default: 'border-violet-400/30 bg-violet-500/10 text-violet-100',
        secondary: 'surface-subtle border-cyan-400/25 text-cyan-100',
        outline: 'border-white/20 bg-transparent text-slate-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(({ className, variant, ...props }, ref) => (
  <span ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />
))
Badge.displayName = 'Badge'

export { Badge }
