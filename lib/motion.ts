import type { Transition, Variants } from 'framer-motion'

/** Curva principal — snappy / moderna */
export const easeSnap = [0.16, 1, 0.3, 1] as const

export const transitionBase: Transition = {
  duration: 0.4,
  ease: easeSnap,
}

export const transitionSlow: Transition = {
  duration: 0.52,
  ease: easeSnap,
}

/** Headers de seção + blocos centrados */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionBase,
  },
}

/** Colunas lado a lado (About, Contact grids) */
export const fadeInFromLeft: Variants = {
  hidden: { opacity: 0, x: -18 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitionBase,
  },
}

export const fadeInFromRight: Variants = {
  hidden: { opacity: 0, x: 18 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitionBase,
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.065,
      delayChildren: 0.05,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionBase,
  },
}

/** Hero — sequência inicial um pouco mais espaçada */
export const heroStaggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.04,
    },
  },
}

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionSlow,
  },
}

/** viewport padrão para whileInView */
export const sectionViewport = {
  once: true as const,
  margin: '-55px 0px 0px 0px' as const,
  amount: 0.2 as const,
}
