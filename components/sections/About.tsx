'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase, GraduationCap, Award, Users } from 'lucide-react'
import Card from '@/components/ui/Card'

const About = () => {
  const stats = [
    { icon: Briefcase, value: '3+', label: 'Anos de Experiência' },
    { icon: Award, value: '50+', label: 'Projetos Concluídos' },
    { icon: Users, value: '20+', label: 'Clientes Satisfeitos' },
    { icon: GraduationCap, value: '100%', label: 'Comprometimento' },
  ]

  const experiences = [
    {
      period: '2024/07/07 - 2024/12/07',
      title: 'Estágio Desenvolvedor Júnior',
      company: 'Ultra Energia Brasil LTDA',
      description: 'Desenvolvimento de features aplicações web e manutenção de aplicações web.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-dark-50 dark:from-dark-900 dark:to-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            Desenvolvedor apaixonado por tecnologia e inovação, sempre em busca de novos desafios e aprendizado contínuo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">Quem sou eu?</h3>
            <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
              Sou um desenvolvedor full stack e analista de dados com mais de 3 anos de experiência criando soluções digitais inovadoras. 
              Minha jornada na tecnologia começou com a curiosidade de entender como as coisas funcionam na web, 
              e hoje transformo essa paixão em experiências digitais excepcionais e insights valiosos.
            </p>
            <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
              Especializado em React, Next.js, Node.js, TypeScript e análise de dados, busco sempre as melhores práticas e 
              tecnologias mais recentes para entregar produtos de alta qualidade. Acredito que a tecnologia 
              deve ser acessível, performática, centrada no usuário e orientada por dados.
            </p>

            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-3">
                <Calendar className="text-primary-600" size={20} />
                <span className="text-dark-600 dark:text-dark-400">18 anos</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-primary-600" size={20} />
                <span className="text-dark-600 dark:text-dark-400">Fortaleza, - CE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Briefcase className="text-primary-600" size={20} />
                <span className="text-dark-600 dark:text-dark-400">Full Stack</span>
              </div>
              <div className="flex items-center space-x-3">
                <GraduationCap className="text-primary-600" size={20} />
                <span className="text-dark-600 dark:text-dark-400">Análise e Desenvolvimento de Sistemas</span>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Card variant="elevated" className="p-6">
                  <stat.icon className="text-primary-600 mx-auto mb-3" size={32} />
                  <div className="text-3xl font-bold text-dark-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-dark-600 dark:text-dark-400">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">Experiência Profissional</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card variant="glass" className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-dark-900 dark:text-white mb-1">
                        {exp.title}
                      </h4>
                      <p className="text-primary-600 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-dark-500 dark:text-dark-400 mt-2 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                    {exp.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
