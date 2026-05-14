'use client'

import type { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { Cloud, LayoutTemplate, LineChart, Server } from 'lucide-react'

type SkillCategory = {
  category: string
  CategoryIcon: LucideIcon
  skills: readonly string[]
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    CategoryIcon: LayoutTemplate,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
  },
  {
    category: 'Backend',
    CategoryIcon: Server,
    skills: ['Node.js', 'PHP', 'PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    category: 'Dados',
    CategoryIcon: LineChart,
    skills: ['Python', 'Pandas', 'NumPy', 'Power BI', 'Tableau'],
  },
  {
    category: 'DevOps',
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
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
}

const tagParentVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04 },
  },
}

const tagVariants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding bg-[color:var(--bg)] border-t border-mutedfg/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Minhas <span className="gradient-text">habilidades</span>
          </h2>
          <p className="text-lg text-mutedfg mb-12">
            Quatro pilares da stack · tags objetivas · sem número inventado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((group) => (
            <motion.article
              key={group.category}
              variants={blockVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              className="flex flex-col rounded-2xl bg-[color:var(--surface)] p-6 md:p-7 ring-1 ring-inset ring-black/10 dark:ring-white/10 shadow-sm"
            >
              <group.CategoryIcon
                size={34}
                className="mx-auto mb-5 text-[color:var(--accent)]"
                strokeWidth={2}
                aria-hidden
              />
              <h3 className="font-display text-center text-lg font-bold text-[color:var(--text)] mb-6">
                {group.category}
              </h3>
              <motion.div
                className="flex flex-wrap justify-center gap-2"
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
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="inline-flex items-center rounded-full border border-accent/35 bg-[color:var(--bg)] px-3 py-1.5 text-xs font-medium text-[color:var(--text)] shadow-[0_0_0_1px_rgba(99,102,241,0.08)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] cursor-default select-none"
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
          viewport={{ once: true, margin: '-40px' }}
          className="mt-10 lg:mt-12 rounded-2xl border border-mutedfg/10 bg-[color:var(--bg)] px-6 py-8 md:px-8 md:py-9 ring-1 ring-inset ring-black/5 dark:ring-white/5"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-[color:var(--text)]">
                Soft skills
              </h3>
              <p className="text-sm text-mutedfg mt-1 max-w-xl">
                Comportamentos que uso no dia a dia — sem pontuação, só consistência na entrega.
              </p>
            </div>
          </div>

          <motion.div
            className="flex flex-wrap gap-2 md:gap-2.5"
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
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="inline-flex items-center rounded-full border border-mutedfg/14 bg-[color:var(--surface)]/60 px-3 py-1.5 text-xs font-medium text-mutedfg backdrop-blur-sm hover:bg-[color:var(--surface)]/90"
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
