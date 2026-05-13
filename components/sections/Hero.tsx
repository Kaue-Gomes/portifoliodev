'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import Button from '@/components/ui/Button'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Hero() {
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
      id="home"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden hero-bg"
    >
      <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.h1
            variants={item}
            className="font-display font-black tracking-tight leading-none text-[color:var(--text)] max-w-4xl mx-auto"
            style={{
              fontSize: 'clamp(2.75rem, 7vw, 7rem)',
            }}
          >
            Full Stack + Dados.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-mutedfg leading-relaxed"
          >
            Construo aplicações web e pipelines que transformam informação em produto.
            Engenheiro de Dados na Veolia.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
          >
            <Button
              size="lg"
              variant="primary"
              className="w-full sm:w-auto min-w-[180px]"
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Ver Projetos
              <ArrowDown className="ml-2" size={20} aria-hidden />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto min-w-[180px]"
              onClick={downloadCV}
            >
              Baixar CV
              <Download className="ml-2" size={20} aria-hidden />
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="flex justify-center items-center gap-6 pt-14 flex-wrap"
          >
            {[
              { icon: Github, href: 'https://github.com/Kaue-Gomes', label: 'GitHub' },
              {
                icon: Linkedin,
                href: 'https://www.linkedin.com/in/kau%C3%AA-gomes-6b3433253/',
                label: 'LinkedIn',
              },
              { icon: Mail, href: 'mailto:kauegomessales189@gmail.com', label: 'Email' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label === 'Email' ? undefined : '_blank'}
                rel={social.label === 'Email' ? undefined : 'noopener noreferrer'}
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full border border-mutedfg/25 bg-[color:var(--surface)] p-3 text-mutedfg hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-colors duration-200"
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
        className="absolute bottom-6 left-1/2 z-[2] -translate-x-1/2 rounded-full border border-mutedfg/25 bg-[color:var(--surface)] p-3 text-mutedfg hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-colors hidden sm:block"
        aria-label="Rolar para baixo"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="block"
        >
          <ArrowDown size={22} aria-hidden />
        </motion.span>
      </motion.button>
    </section>
  )
}
