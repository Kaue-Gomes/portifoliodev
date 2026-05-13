'use client'

import { motion } from 'framer-motion'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiPython,
  SiPandas,
  SiNumpy,
  SiPowerbi,
  SiTableau,
  SiDocker,
  SiAmazonaws,
  SiGit,
} from 'react-icons/si'

const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'JavaScript', icon: SiJavascript },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'PHP', icon: SiPhp },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    category: 'Dados',
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'Pandas', icon: SiPandas },
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Power BI', icon: SiPowerbi },
      { name: 'Tableau', icon: SiTableau },
    ],
  },
  {
    category: 'DevOps',
    skills: [
      { name: 'Docker', icon: SiDocker },
      { name: 'AWS', icon: SiAmazonaws },
      { name: 'Git', icon: SiGit },
    ],
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
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
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Minhas <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="text-lg text-mutedfg mb-12">
            Stack por área — sem números inventados; os projetos mostram o nível na prática.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:gap-10 md:grid-cols-2">
          {skillGroups.map((group) => (
            <motion.article
              key={group.category}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-mutedfg/15 bg-[color:var(--surface)] p-6 md:p-8 shadow-sm"
            >
              <h3 className="font-display text-xl font-bold mb-6 text-[color:var(--text)]">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    className="flex flex-col items-center gap-2 rounded-xl border border-transparent bg-[color:var(--bg)] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]"
                  >
                    <skill.icon
                      size={32}
                      className="text-[color:var(--accent)]"
                      aria-hidden
                    />
                    <span className="text-sm text-mutedfg text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
