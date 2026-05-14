'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

/**
 * Barra fina no topo (~accent) proporcional ao scroll da página.
 */
export function ReadingProgress() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()

  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  if (reduce) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] h-[3px] max-w-full bg-[color:var(--accent)] shadow-[0_0_14px_-2px_var(--accent)] opacity-95"
      style={{ width }}
    />
  )
}
