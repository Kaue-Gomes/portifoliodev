'use client'

import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useOptionalLenis } from '@/components/MotionProviders'
import { staggerContainer, staggerItem, fadeUp, sectionViewport } from '@/lib/motion'

export default function Footer() {
  const lenis = useOptionalLenis()

  const scrollToTop = () => {
    if (typeof window === 'undefined') return
    if (lenis) {
      lenis.scrollTo(0, { immediate: false })
      return
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-mutedfg/15 bg-[color:var(--surface)] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          className="grid md:grid-cols-4 gap-10 mb-10"
        >
          <div className="md:col-span-2">
            <motion.div variants={staggerItem}>
              <div className="flex items-center gap-2 mb-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[color:var(--accent)] text-white font-display font-bold text-sm">
                  K
                </span>
                <span className="font-display text-xl font-bold text-[color:var(--text)]">
                  kauegomes
                </span>
              </div>
              <p className="text-mutedfg max-w-md leading-relaxed">
                Full stack + dados — aplicações web e pipelines que transformam informação em produto.
              </p>
            </motion.div>
          </div>

          <motion.div variants={staggerItem}>
            <h3 className="font-display text-lg font-semibold mb-4 text-[color:var(--text)]">
              Links rápidos
            </h3>
            <ul className="space-y-2">
              {[
                { href: '#home', label: 'Início' },
                { href: '#about', label: 'Sobre' },
                { href: '#skills', label: 'Habilidades' },
                { href: '#projects', label: 'Projetos' },
                { href: '#contact', label: 'Contato' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-mutedfg hover:text-[color:var(--accent)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h3 className="font-display text-lg font-semibold mb-4 text-[color:var(--text)]">
              Contato
            </h3>
            <ul className="space-y-2 text-mutedfg">
              <li>
                <a
                  href="mailto:kauegomessales189@gmail.com"
                  className="hover:text-[color:var(--accent)] transition-colors"
                >
                  kauegomessales189@gmail.com
                </a>
              </li>
              <li>Fortaleza, CE — Brasil</li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="border-t border-mutedfg/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            className="text-mutedfg text-sm text-center md:text-left"
          >
            © {currentYear} Kauê Gomes. Todos os direitos reservados.
          </motion.span>

          <Button variant="ghost" size="sm" onClick={scrollToTop} type="button">
            <ArrowUp size={20} aria-hidden />
          </Button>
        </div>
      </div>
    </footer>
  )
}
