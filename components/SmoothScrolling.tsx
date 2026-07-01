'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export function SmoothScrolling({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Synchronously check on mount to prevent any TBT leak on mobile
    if (window.innerWidth < 768) return

    const lenis = new Lenis({
      duration: 1.2, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1, 
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
