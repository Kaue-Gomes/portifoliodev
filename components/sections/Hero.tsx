'use client'

import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import Button from '@/components/ui/Button'
import { heroItem, heroStaggerContainer } from '@/lib/motion'

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const layerOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.82])

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const downloadCV = () => {
    try {
      const link = document.createElement('a')
      link.href = '/CV-Kaue-Gomes.pdf'
      link.download = 'CV-Kaue-Gomes.pdf'
      link.target = '_blank'
      link.rel = 'noopener noreferrer'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch {
      window.open('/CV-Kaue-Gomes.pdf', '_blank')
    }
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[color:var(--bg)]"
    >
      <motion.div
        aria-hidden
        className="hero-parallax-layer pointer-events-none absolute inset-0 -z-[1]"
        style={
          reduceMotion ? undefined : { y: parallaxY, opacity: layerOpacity }
        }
      />

      <div className="relative z-[1] mx-auto max-w-7xl px-4 pt-24 pb-28 text-center sm:px-6 lg:px-8">
        <motion.div
          variants={heroStaggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.h1
            variants={heroItem}
            className="font-display mx-auto max-w-4xl font-black leading-none tracking-tight text-[color:var(--text)]"
            style={{
              fontSize: 'clamp(2.75rem, 7vw, 7rem)',
            }}
          >
            Full Stack + Dados.
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-mutedfg sm:text-xl"
          >
            Da interface ao processamento de dados, trabalho em soluções que tornam informação utilizável, acessível e estratégica.
          </motion.p>

          <motion.div
            variants={heroItem}
            className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:w-auto"
          >
            <Button
              size="lg"
              variant="primary"
              className="w-full min-w-[180px] sm:w-auto"
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Ver Projetos
              <ArrowDown className="ml-2" size={20} aria-hidden />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="w-full min-w-[180px] sm:w-auto"
              onClick={downloadCV}
            >
              Baixar CV
              <Download className="ml-2" size={20} aria-hidden />
            </Button>
          </motion.div>

          <motion.div
            variants={heroItem}
            className="flex flex-wrap items-center justify-center gap-6 pt-14"
          >
            {[
              { icon: Github, href: 'https://github.com/Kaue-Gomes', label: 'GitHub' },
              {
                icon: Linkedin,
                href: 'https://www.linkedin.com/in/kauegomesdata/',
                label: 'LinkedIn',
              },
              { icon: Mail, href: 'mailto:kauegomessales189@gmail.com', label: 'Email' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label === 'Email' ? undefined : '_blank'}
                rel={
                  social.label === 'Email' ? undefined : 'noopener noreferrer'
                }
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full border border-mutedfg/25 bg-[color:var(--surface)] p-3 text-mutedfg transition-colors duration-200 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                aria-label={social.label}
              >
                <social.icon size={22} aria-hidden />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        type="button"
        onClick={scrollToNext}
        className="absolute bottom-6 left-1/2 z-[2] hidden -translate-x-1/2 rounded-full border border-mutedfg/25 bg-[color:var(--surface)] p-3 text-mutedfg transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] sm:block"
        aria-label="Rolar para baixo"
      >
        {!reduceMotion ? (
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="block"
          >
            <ArrowDown size={22} aria-hidden />
          </motion.span>
        ) : (
          <span className="block">
            <ArrowDown size={22} aria-hidden />
          </span>
        )}
      </motion.button>
    </section>
  )
}
