'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const stats = [
  { value: '3+', label: 'anos de experiência' },
  { value: '2', label: 'empresas' },
  { value: '6', label: 'projetos no GitHub' },
  { value: 'Fortaleza', label: 'CE, Brasil' },
]

const timeline = [
  {
    period: '2026 — atual',
    title: 'Engenheiro de Dados',
    company: 'Veolia',
    impact:
      'Pipelines e modelagem de dados em escala corporativa para decisões operacionais.',
  },
  {
    period: '2024',
    title: 'Estágio — Dev Júnior',
    company: 'Ultra Energia Brasil',
    impact:
      'Features e manutenção em aplicações web internas para operações da empresa.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-[color:var(--surface)] border-t border-mutedfg/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Sobre <span className="gradient-text">mim</span>
          </h2>
          <p className="text-lg text-mutedfg mb-12">
            Full stack com forte lado de dados — produto na web e informação virando valor.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[minmax(0,55%)_minmax(0,45%)] gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4 text-mutedfg leading-relaxed max-w-xl">
              <p>
                Atuo entre desenvolvimento web e engenharia de dados: APIs, interfaces e fluxos
                que sustentam decisões com dados confiáveis.
              </p>
              <p>
                Na Veolia foco em dados operacionais e pipelines; antes, na Ultra Energia, em
                entrega contínua de features web.
              </p>
              <p className="text-[color:var(--text)]">
                Comunicação clara com stakeholders e priorização pragmática fazem parte do meu
                dia a dia — sem métricas mascaradas no portfólio.
              </p>
            </div>

            <div className="timeline border-l-[color:color-mix(in_srgb,var(--muted)_35%,transparent)]">
              {timeline.map((row) => (
                <div key={row.company + row.period} className="timeline-item">
                  <p className="text-xs uppercase tracking-wide text-mutedfg">{row.period}</p>
                  <p className="font-display font-bold text-[color:var(--text)] mt-1">
                    {row.company}
                  </p>
                  <p className="text-sm font-medium text-mutedfg">{row.title}</p>
                  <p className="mt-2 text-sm text-mutedfg">{row.impact}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="relative mx-auto w-full max-w-md">
              <div className="aspect-square overflow-hidden rounded-2xl bg-[color:var(--bg)] ring-1 ring-inset ring-black/10 dark:ring-white/10 shadow-[0_0_0_1px_rgba(99,102,241,0.12)] hover:shadow-[0_12px_40px_-18px_rgba(99,102,241,0.35)] transition-shadow duration-300">
                <Image
                  src="/images/portifolio-image.png"
                  alt="Kauê Gomes — foto de perfil"
                  width={640}
                  height={640}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="mt-4 flex items-center justify-center gap-2 text-mutedfg text-sm">
                <MapPin size={18} className="text-[color:var(--accent)] shrink-0" aria-hidden />
                Fortaleza, CE — Brasil
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-mutedfg/15 bg-[color:var(--bg)] p-6 text-center transition-all duration-300 hover:border-[color:var(--accent)]"
                >
                  <div className="font-display text-2xl sm:text-3xl font-bold text-[color:var(--text)]">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-mutedfg capitalize">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
