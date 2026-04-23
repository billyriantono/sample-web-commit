import type { RefObject } from 'react'
import { useEffect, useState } from 'react'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

export function useParallax<T extends HTMLElement>(ref: RefObject<T | null>, strength = 12) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) {
      setPosition({ x: 0, y: 0 })
      return
    }

    let frame = 0

    const handleMove = (event: MouseEvent) => {
      if (frame) window.cancelAnimationFrame(frame)

      frame = window.requestAnimationFrame(() => {
        const x = event.clientX / window.innerWidth - 0.5
        const y = event.clientY / window.innerHeight - 0.5

        setPosition({
          x: x * strength,
          y: y * strength,
        })
      })
    }

    const handleLeave = () => setPosition({ x: 0, y: 0 })

    window.addEventListener('mousemove', handleMove, { passive: true })
    element.addEventListener('mouseleave', handleLeave)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', handleMove)
      element.removeEventListener('mouseleave', handleLeave)
    }
  }, [ref, strength])

  return position
}
