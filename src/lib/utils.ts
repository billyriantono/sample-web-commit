import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const ui = {
  interactive: 'ui-interactive',
  focusRing: 'ui-focus-ring',
  surfaceSubtle: 'surface-subtle',
  eyebrow: 'eyebrow-label',
  revealBase: 'reveal-base',
  revealVisible: 'reveal-visible',
} as const
