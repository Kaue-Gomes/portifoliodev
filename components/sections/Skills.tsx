'use client'

import type { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { Cloud, LayoutTemplate, LineChart, Server } from 'lucide-react'

type SkillCategory = {
  category: string
  subtitle: string
  CategoryIcon: LucideIcon
  skills: readonly string[]
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    subtitle: 'Interfaces e UX web',
    CategoryIcon: LayoutTemplate,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
  },
  {
    category: 'Backend',
    subtitle: 'APIs, dados e servidor',
    CategoryIcon: Server,
    skills: ['Node.js', 'PHP', 'PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    category: 'Dados',
    subtitle: 'Análise e visualização',
    CategoryIcon: LineChart,
    skills: ['Python', 'Pandas', 'NumPy', 'Power BI', 'Tableau'],
  },
  {
    category: 'DevOps',
    subtitle: 'Entrega contínua e cloud',
    CategoryIcon: Cloud,
    skills: ['Docker', 'AWS', 'Git'],
  },
]

const softSkills: readonly string[] = [
  'Comunicação',
  'Trabalho em equipe',
  'Priorização',
  'Autonomia',
  'Resolução de problemas',
  'Aprendizado contínuo',
]

const blockVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

const tagParentVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04 },
  },
}

const tagVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.32, ease: 'easeOut' },
  },
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding scroll-mt-24 bg-[color:var(--bg)] border-t border-mutedfg/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[color:var(--accent)]">
            Stack declarada por área
          </p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-[color:var(--text)] sm:text-5xl">
            Minhas{' '}
            <span className="gradient-text">habilidades</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mutedfg sm:text-lg">
            Tecnologias que uso para construir produto de ponta a ponta 
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {skillCategories.map((group, index) => (
            <motion.article
              key={group.category}
              variants={blockVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px 0px' }}
              whileHover={{ y: -4, transition: { duration: 0.22 } }}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-[color:var(--surface)] p-6 shadow-[0_28px_60px_-40px_rgba(15,23,42,0.45)] ring-1 ring-inset ring-black/[0.06] transition-shadow duration-300 hover:shadow-[0_32px_80px_-42px_rgba(99,102,241,0.35)] dark:ring-white/10 dark:shadow-[0_28px_60px_-40px_rgba(0,0,0,0.55)]"
            >
              <div
                className="absolute left-0 right-0 top-0 h-1 bg-[color:var(--accent)] opacity-95"
                aria-hidden
              />

              <div className="mb-6 flex flex-col items-center gap-4 text-center sm:gap-5">
                <div className="flex w-full items-center justify-between gap-3 px-1">
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-mutedfg/80">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent)]/13 text-[color:var(--accent)] ring-1 ring-inset ring-[color:var(--accent)]/25 transition-transform duration-300 group-hover:scale-105">
                    <group.CategoryIcon size={26} aria-hidden strokeWidth={2} />
                  </span>
                  <span className="hidden w-14 sm:block" aria-hidden />
                </div>
                <div className="space-y-1.5 px-2">
                  <h3 className="font-display text-xl font-black tracking-tight text-[color:var(--text)] sm:text-[1.35rem]">
                    {group.category}
                  </h3>
                  <p className="text-sm font-medium leading-snug text-mutedfg">{group.subtitle}</p>
                </div>
              </div>

              <motion.div
                className="mt-auto grid grid-cols-2 gap-x-3 gap-y-2.5"
                variants={tagParentVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={tagVariants}
                    whileHover={{ y: -2, scale: 1.03 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="relative flex items-center justify-center rounded-2xl border border-mutedfg/12 bg-[color:var(--bg)] px-2.5 py-2 text-center text-sm font-semibold leading-tight text-[color:var(--text)] shadow-sm ring-1 ring-inset ring-white/5 transition-colors hover:border-[color:var(--accent)]/45 hover:bg-[color:var(--surface)] hover:text-[color:var(--accent)] cursor-default select-none dark:ring-white/5"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={blockVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 lg:mt-14 overflow-hidden rounded-3xl border border-mutedfg/14 p-8 shadow-inner ring-1 ring-inset ring-black/5 dark:border-mutedfg/10 dark:ring-white/10"
          style={{
            background:
              'linear-gradient(155deg, color-mix(in srgb, var(--surface) 94%, transparent) 0%, var(--bg) 100%)',
          }}
        >
          <div className="flex flex-col gap-3 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mutedfg">
                Ao lado técnico
              </p>
              <h3 className="mt-3 font-display text-2xl font-black tracking-tight text-[color:var(--text)] sm:text-[1.8rem]">
                Soft skills
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mutedfg sm:text-base">
                Mais do que desenvolver funcionalidades, foco em entender contexto, reduzir complexidade e manter entregas sustentáveis no longo prazo.
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-mutedfg/10" />

          <motion.div
            className="mt-8 flex flex-wrap gap-2.5 md:gap-3"
            variants={tagParentVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {softSkills.map((s) => (
              <motion.span
                key={s}
                variants={tagVariants}
                whileHover={{ y: -2, scale: 1.03 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="rounded-full border border-mutedfg/12 bg-[color:var(--bg)] px-4 py-2 text-sm font-semibold text-mutedfg shadow-inner ring-1 ring-inset ring-white/5 backdrop-blur-sm transition-colors hover:bg-[color:var(--surface)]/95 hover:text-[color:var(--text)] dark:ring-white/5"
              >
                {s}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
