'use client'

import { motion } from 'framer-motion'
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiNodedotjs, 
  SiPython, SiMongodb, SiPostgresql, SiDocker, SiAmazonaws, SiGit, 
  SiTailwindcss, SiBootstrap, SiPhp, SiMysql, SiWordpress, SiFigma,
  SiPandas, SiNumpy, SiJupyter, SiTableau, SiPowerbi, SiGoogleanalytics
} from 'react-icons/si'
import Card from '@/components/ui/Card'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: SiReact, level: 95, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, level: 90, color: '#000000' },
        { name: 'TypeScript', icon: SiTypescript, level: 88, color: '#3178C6' },
        { name: 'JavaScript', icon: SiJavascript, level: 92, color: '#F7DF1E' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85, color: '#06B6D4' },
        { name: 'Bootstrap', icon: SiBootstrap, level: 80, color: '#7952B3' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, level: 88, color: '#339933' },
        { name: 'PHP', icon: SiPhp, level: 75, color: '#777BB4' },
        { name: 'MongoDB', icon: SiMongodb, level: 80, color: '#47A248' },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 78, color: '#336791' },
        { name: 'MySQL', icon: SiMysql, level: 75, color: '#4479A1' },
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', icon: SiDocker, level: 70, color: '#2496ED' },
        { name: 'AWS', icon: SiAmazonaws, level: 65, color: '#FF9900' },
        { name: 'Git', icon: SiGit, level: 85, color: '#F05032' },
      ]
    },
    {
      title: 'Engenharia de Dados',
      skills: [
        { name: 'Python', icon: SiPython, level: 80, color: '#3776AB' },
        { name: 'Pandas', icon: SiPandas, level: 75, color: '#150458' },
        { name: 'NumPy', icon: SiNumpy, level: 70, color: '#013243' },
        { name: 'Jupyter', icon: SiJupyter, level: 75, color: '#F37626' },
        { name: 'Tableau', icon: SiTableau, level: 65, color: '#E97627' },
        { name: 'Power BI', icon: SiPowerbi, level: 70, color: '#F2C811' },
      ]
    },
    {
      title: 'Design & Collaboration',
      skills: [
        { name: 'Figma', icon: SiFigma, level: 75, color: '#F24E1E' },
        { name: 'WordPress', icon: SiWordpress, level: 70, color: '#21759B' },
      ]
    }
  ]

  const softSkills = [
    { name: 'Comunicação', level: 90 },
    { name: 'Trabalho em Equipe', level: 95 },
    { name: 'Resolução de Problemas', level: 88 },
    { name: 'Gestão de Tempo', level: 85 },
    { name: 'Aprendizado Contínuo', level: 92 },
    { name: 'Liderança', level: 75 },
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Minhas <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para criar soluções inovadoras e de alta qualidade.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card variant="elevated" className="h-full">
                <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <skill.icon 
                            size={24} 
                            style={{ color: skill.color }}
                            className="flex-shrink-0"
                          />
                          <span className="font-medium text-dark-900 dark:text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-dark-500 dark:text-dark-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-dark-200 dark:bg-dark-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-600"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Habilidades Interpessoais</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card variant="glass" className="text-center p-6">
                  <div className="text-2xl font-bold text-primary-600 mb-2">
                    {skill.level}%
                  </div>
                  <div className="text-dark-900 dark:text-white font-medium">
                    {skill.name}
                  </div>
                  <div className="w-full bg-dark-200 dark:bg-dark-700 rounded-full h-2 mt-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-600"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card variant="glass" className="p-8">
            <h3 className="text-xl font-bold mb-4">Por que escolher minhas habilidades?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-dark-600 dark:text-dark-400">
              <div>
                <h4 className="font-semibold text-dark-900 dark:text-white mb-2">Experiência Prática</h4>
                <p>Mais de 3 anos desenvolvendo aplicações reais em produção</p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-900 dark:text-white mb-2">Atualização Constante</h4>
                <p>Sempre aprendendo as tecnologias mais recentes do mercado</p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-900 dark:text-white mb-2">Qualidade Garantida</h4>
                <p>Foco em código limpo, performance e boas práticas</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
