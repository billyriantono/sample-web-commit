import { useEffect, useMemo, useState } from 'react'

type CountUpOptions = {
  duration?: number
  decimals?: number
}

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

export function useCountUp(target: number, active: boolean, options: CountUpOptions = {}) {
  const { duration = 2000, decimals = 0 } = options
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return

    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) {
      setValue(target)
      return
    }

    let frame = 0
    let startTime = 0

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(target * eased)

      if (progress < 1) {
        frame = window.requestAnimationFrame(step)
      }
    }

    frame = window.requestAnimationFrame(step)

    return () => window.cancelAnimationFrame(frame)
  }, [active, duration, target])

  return useMemo(() => value.toFixed(decimals), [decimals, value])
}
