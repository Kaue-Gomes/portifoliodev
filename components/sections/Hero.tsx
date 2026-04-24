'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import Button from '@/components/ui/Button'
import Typewriter from 'typewriter-effect'

const Hero = () => {
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
    } catch (error) {
      console.error('Erro ao baixar CV:', error)
      // Fallback: abrir em nova aba
      window.open('/CV-Kaue-Gomes.pdf', '_blank')
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 theme-transition theme-particles">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
                     transition={{ 
             duration: 15,
             repeat: Infinity,
             ease: "easeInOut"
           }}
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-primary-400/30 to-purple-400/30 rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            rotate: [360, 180, 0]
          }}
                     transition={{ 
             duration: 18,
             repeat: Infinity,
             ease: "easeInOut",
             delay: 1
           }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [180, 360, 180]
          }}
                     transition={{ 
             duration: 20,
             repeat: Infinity,
             ease: "easeInOut",
             delay: 2
           }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium"
          >
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
            Disponível para novos projetos
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight theme-fade"
          >
            <span className="block">Olá, eu sou</span>
            <span className="block gradient-text">Kauê Gomes</span>
            <div className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-dark-600 dark:text-dark-400 mt-4 min-h-[3rem] flex items-center justify-center">
              <Typewriter
                options={{
                  strings: [
                    'Desenvolvedor Full Stack',
                    'Engenheiro de Dados'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </div>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-3xl mx-auto text-lg sm:text-xl text-dark-600 dark:text-dark-400 leading-relaxed theme-slide"
          >
            Apaixonado por criar experiências digitais excepcionais e soluções inovadoras. 
            Especializado em desenvolvimento web moderno e engenharia de dados com foco em performance, 
            acessibilidade e insights baseados em dados.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center theme-pulse"
          >
            <Button 
              size="lg" 
              className="group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Projetos
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform duration-200" size={20} />
            </Button>
            <Button variant="secondary" size="lg" className="group" onClick={downloadCV}>
              Baixar CV
              <Download className="ml-2" size={20} />
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center items-center space-x-6 pt-8 pb-20"
          >
            {[
              { icon: Github, href: 'https://github.com/Kaue-Gomes', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/kau%C3%AA-gomes-6b3433253/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:kauegomessales189@gmail.com', label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label === 'Email' ? '_self' : '_blank'}
                rel={social.label === 'Email' ? undefined : 'noopener noreferrer'}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        onClick={scrollToNext}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 -translate-x-8 p-4 rounded-full bg-gradient-to-br from-white/80 to-gray-100/80 dark:from-dark-800/80 dark:to-dark-700/80 text-dark-700 dark:text-dark-300 hover:from-primary-100/90 hover:to-primary-200/90 dark:hover:from-primary-900/50 dark:hover:to-primary-800/50 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-500 ease-out shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/20 dark:border-dark-600/20 group z-10"
        aria-label="Rolar para baixo"
      >
        <motion.div
          animate={{ 
            y: [0, 8, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          <ArrowDown size={24} className="group-hover:drop-shadow-lg transition-all duration-300" />
          {/* Efeito de brilho */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 dark:via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out rounded-full"></div>
        </motion.div>
      </motion.button>
    </section>
  )
}

export default Hero
