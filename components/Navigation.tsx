'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from '@/hooks/useTheme'
import { useOptionalLenis } from '@/components/MotionProviders'

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'contact'] as const

/** Offset do nav fixo (~64px): o item ativo é o último cuja seção passou esse limite ao rolar. */
const NAV_OFFSET = 76

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<(typeof SECTION_IDS)[number]>('home')
  const { isDark, mounted, toggleTheme } = useTheme()
  const lenis = useOptionalLenis()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()

    let lenisUnsub: (() => void) | undefined
    if (lenis) lenisUnsub = lenis.on('scroll', handleScroll)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      lenisUnsub?.()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lenis])

  useEffect(() => {
    const spy = () => {
      const doc = document.documentElement
      const nearBottom = window.innerHeight + window.scrollY >= doc.scrollHeight - 64
      const nearTop = window.scrollY < 40

      let current: (typeof SECTION_IDS)[number] = 'home'

      if (nearBottom) {
        current = 'contact'
      } else if (!nearTop) {
        for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
          const id = SECTION_IDS[i]
          const el = document.getElementById(id)
          if (!el) continue
          const top = el.getBoundingClientRect().top
          if (top <= NAV_OFFSET) {
            current = id
            break
          }
        }
      }

      setActiveSection((prev) => (prev === current ? prev : current))
    }

    spy()

    let lenisScrollUnsub: (() => void) | undefined

    if (lenis) {
      lenisScrollUnsub = lenis.on('scroll', () => {
        spy()
      })
    } else {
      window.addEventListener('scroll', spy, { passive: true })
    }
    window.addEventListener('resize', spy)

    return () => {
      lenisScrollUnsub?.()
      window.removeEventListener('scroll', spy)
      window.removeEventListener('resize', spy)
    }
  }, [lenis])

  const navItems: { href: string; label: string; id: (typeof SECTION_IDS)[number] }[] = [
    { href: '#home', label: 'Início', id: 'home' },
    { href: '#about', label: 'Sobre', id: 'about' },
    { href: '#skills', label: 'Habilidades', id: 'skills' },
    { href: '#projects', label: 'Projetos', id: 'projects' },
    { href: '#contact', label: 'Contato', id: 'contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
        scrolled
          ? 'border-b border-mutedfg/15 bg-[color:var(--surface)]/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="flex items-center gap-2 group">
            <img
              src="/images/logolilas.png"
              alt="Kauê Gomes"
              className="h-9 w-9 rounded-lg object-contain shadow-sm"
            />
            <span className="font-display text-lg font-bold text-[color:var(--text)]">
              kauegomes
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'nav-link text-sm font-medium',
                  activeSection === item.id && 'active'
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-lg border border-mutedfg/20 bg-[color:var(--surface)] p-2.5 text-mutedfg hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-colors"
              aria-label={isDark ? 'Alternar para modo claro' : 'Alternar para modo escuro'}
            >
              {mounted && (isDark ? <Sun size={20} aria-hidden /> : <Moon size={20} aria-hidden />)}
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden rounded-lg border border-mutedfg/20 bg-[color:var(--surface)] p-2 text-[color:var(--text)]"
              aria-expanded={isOpen}
              aria-label="Abrir menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-mutedfg/15 bg-[color:var(--surface)]"
            >
              <div className="flex flex-col py-3 gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'px-3 py-2.5 rounded-lg text-[color:var(--text)] hover:bg-[color:var(--bg)]',
                      activeSection === item.id && 'text-[color:var(--accent)] font-semibold'
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
