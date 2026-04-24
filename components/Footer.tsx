'use client'

import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import Button from '@/components/ui/Button'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-dark-900 text-dark-900 dark:text-white py-12 relative theme-transition">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">K</span>
                </div>
                <span className="text-xl font-bold gradient-text">kauegomes</span>
              </div>
              <p className="text-dark-600 dark:text-dark-300 max-w-md leading-relaxed">
                Desenvolvedor full stack apaixonado por criar experiências digitais excepcionais 
                e soluções inovadoras que fazem a diferença.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { href: '#home', label: 'Início' },
                { href: '#about', label: 'Sobre' },
                { href: '#skills', label: 'Habilidades' },
                { href: '#projects', label: 'Projetos' },
                { href: '#contact', label: 'Contato' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-dark-600 dark:text-dark-300">
              <li>kauegomessales189@gmail.com</li>
              <li>+55 (88) 99709-0674</li>
              <li>Fortaleza, CE - Brasil</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dark-200 dark:border-dark-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-dark-600 dark:text-dark-300"
            >
              <span>© {currentYear} kauegomes. Feito por Kauê Gomes</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                <ArrowUp size={20} />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
