'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import {
  fadeUp,
  fadeInFromLeft,
  fadeInFromRight,
  sectionViewport,
  staggerContainer,
  staggerItem,
} from '@/lib/motion'

const stats = [
  { value: '3+', label: 'anos de experiência' },
  { value: '2', label: 'empresas' },
  { value: '12', label: 'projetos no Concluídos' },
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
    period: '2024 — 2025',
    title: 'Desenvolvimento freelancer',
    company: 'Autônomo',
    impact:
      'Projetos sob demanda: interfaces web, integrações e apoio em dados para clientes e parcerias.',
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
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Sobre <span className="gradient-text">mim</span>
          </h2>
          <p className="text-lg text-mutedfg mb-12">
            Desenvolvimento web e engenharia de dados conectando produto, experiência e informação confiável.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[minmax(0,55%)_minmax(0,45%)] gap-10 lg:gap-14 items-start">
          <motion.div
            variants={fadeInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            className="space-y-8"
          >
            <div className="space-y-4 text-mutedfg leading-relaxed max-w-xl">
              <p>
                Atuo entre desenvolvimento full stack e engenharia de dados, criando aplicações, APIs e fluxos que transformam informação em soluções utilizáveis.
              </p>

              <p>
                Minha experiência passa tanto pela evolução contínua de produtos web quanto pela construção de pipelines e dados operacionais voltados para tomada de decisão.
              </p>

              <p>
                Ao longo dos últimos anos trabalhei com tecnologias como React, Next.js, PHP, JavaScript, SQL e ferramentas voltadas para processamento e visualização de dados.
              </p>

              <p>
                Tenho facilidade em transitar entre diferentes áreas do desenvolvimento — desde interface e experiência do usuário até estruturação de backend, integrações e organização de dados.
              </p>

              <p>
                Também participo diretamente da priorização de entregas, alinhamento técnico e comunicação com stakeholders, sempre buscando soluções que façam sentido tanto para negócio quanto para manutenção futura.
              </p>

              <p>
                Gosto de construir produtos com identidade visual limpa, arquitetura organizada e foco em clareza, evitando complexidade desnecessária sem abrir mão de performance e escalabilidade.
              </p>

              <p className="text-[color:var(--text)]">
                Hoje, na Veolia, atuo com dados operacionais e pipelines; anteriormente, na Ultra Energia Brasil, trabalhei com desenvolvimento contínuo de aplicações web e soluções internas.
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
            variants={fadeInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
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

            <motion.div
              className="grid grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={staggerItem}
                  className="rounded-xl border border-mutedfg/15 bg-[color:var(--bg)] p-6 text-center transition-all duration-300 hover:border-[color:var(--accent)]"
                >
                  <div className="font-display text-2xl sm:text-3xl font-bold text-[color:var(--text)]">
                    {s.value}
                  </div>

                  <div className="mt-1 text-xs sm:text-sm text-mutedfg capitalize">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}