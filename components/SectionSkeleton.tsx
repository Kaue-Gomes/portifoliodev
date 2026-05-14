'use client'

import { motion, useReducedMotion } from 'framer-motion'

/**
 * Fallback do `dynamic()` — shimmer leve coerente com o restante do motion do site.
 */
export default function SectionSkeleton() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-mutedfg/15 bg-[color:var(--surface)] h-72 md:h-96">
        {!reduceMotion ? (
          <motion.div
            aria-hidden
            className="absolute inset-y-0 w-[55%] -skew-x-[12deg] bg-gradient-to-r from-transparent via-mutedfg/14 to-transparent"
            initial={{ x: '-110%' }}
            animate={{ x: '220%' }}
            transition={{
              repeat: Infinity,
              duration: 1.72,
              ease: [0.45, 0, 0.55, 1],
              repeatDelay: 0.2,
            }}
          />
        ) : (
          <div
            aria-hidden
            className="absolute inset-0 bg-mutedfg/[0.07]"
          />
        )}
      </div>
    </div>
  )
}
