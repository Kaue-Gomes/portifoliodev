'use client'

import type { ReactNode } from 'react'
import { createContext, useContext, useEffect, useState, useMemo } from 'react'
import { MotionConfig } from 'framer-motion'
import Lenis from 'lenis'
import { ReadingProgress } from '@/components/ReadingProgress'

type LenisContextValue = Lenis | null

const LenisContext = createContext<LenisContextValue>(null)

export function useOptionalLenis() {
  return useContext(LenisContext)
}

type MotionProvidersProps = {
  children: ReactNode
}

export function MotionProviders({ children }: MotionProvidersProps) {
  const [lenis, setLenis] = useState<LenisContextValue>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) return

    const root = document.documentElement
    root.classList.add('lenis')

    const instance = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      touchMultiplier: 1.15,
      wheelMultiplier: 0.92,
      syncTouch: true,
    })

    setLenis(instance)

    let frame = 0
    const loop = (time: number) => {
      instance.raf(time)
      frame = requestAnimationFrame(loop)
    }
    frame = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(frame)
      root.classList.remove('lenis')
      instance.destroy()
      setLenis(null)
    }
  }, [])

  const lenisValue = useMemo(() => lenis, [lenis])

  return (
    <MotionConfig
      reducedMotion="user"
      transition={{
        type: 'tween',
        duration: 0.38,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <LenisContext.Provider value={lenisValue}>
        <ReadingProgress />
        {children}
      </LenisContext.Provider>
    </MotionConfig>
  )
}
