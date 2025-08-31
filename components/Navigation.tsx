'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from '@/hooks/useTheme'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { isDark, mounted, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#projects', label: 'Projetos' },
    { href: '#contact', label: 'Contato' },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out theme-wave',
        scrolled 
          ? 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-md border-b border-dark-200/30 dark:border-dark-700/30 shadow-lg' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
                         <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.4, delay: 0.1 }}
                 whileHover={{ 
                   scale: 1.05,
                   rotate: [0, -5, 5, 0],
                   transition: { duration: 0.3 }
                 }}
                 className="flex items-center space-x-2 group cursor-pointer theme-rotate"
               >
            <motion.div 
              className="w-8 h-8 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
              whileHover={{ 
                rotate: 360,
                scale: 1.1,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
              }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white font-bold text-sm">D</span>
            </motion.div>
            <motion.span 
              className="text-xl font-bold gradient-text"
              whileHover={{ 
                textShadow: "0 0 10px rgba(59, 130, 246, 0.5)"
              }}
            >
              DevPortfolio
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                                 transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  textShadow: "0 0 8px rgba(59, 130, 246, 0.5)"
                }}
                                 className="text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-all duration-200 relative group"
              >
                {item.label}
                {/* Linha animada */}
                                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-purple-600 group-hover:w-full transition-all duration-200 ease-out"></span>
              </motion.a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ 
                scale: 1.15,
                rotate: [0, -10, 10, 0],
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)"
              }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="relative p-3 rounded-xl bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-dark-800 dark:via-dark-750 dark:to-dark-700 text-dark-700 dark:text-dark-300 hover:from-gray-50 hover:via-white hover:to-gray-100 dark:hover:from-dark-700 dark:hover:via-dark-750 dark:hover:to-dark-600 transition-all duration-800 cubic-bezier(0.4, 0, 0.2, 1) shadow-lg hover:shadow-2xl border border-gray-200/50 dark:border-dark-600/50 overflow-hidden group theme-wave theme-particles"
              aria-label={isDark ? 'Alternar para modo claro' : 'Alternar para modo escuro'}
            >
              {/* Efeito de brilho dinâmico */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 dark:via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)"></div>
              
              {/* Efeito de glow interno */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-800 cubic-bezier(0.4, 0, 0.2, 1) rounded-xl"></div>
              
              {/* Ícone com animação elegante */}
              <motion.div
                initial={false}
                animate={{ 
                  rotate: isDark ? [0, 180] : [180, 0],
                  scale: isDark ? [1, 1.2, 1.1] : [1, 1.2, 1.1],
                  y: isDark ? [0, -5, 0] : [0, -5, 0]
                }}
                transition={{ 
                  duration: 0.8,
                  ease: "easeInOut",
                  times: [0, 0.5, 1]
                }}
                className="relative z-10"
              >
                {mounted && (
                  isDark ? (
                    <Sun 
                      size={20} 
                      className="text-yellow-500 drop-shadow-lg filter brightness-110"
                    />
                  ) : (
                    <Moon 
                      size={20} 
                      className="text-blue-600 drop-shadow-lg filter brightness-110"
                    />
                  )
                )}
              </motion.div>
              
              {/* Efeito de partículas flutuantes */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-800 cubic-bezier(0.4, 0, 0.2, 1)">
                <motion.div 
                  className="absolute top-1 left-1 w-1.5 h-1.5 bg-blue-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute top-1 right-1 w-1.5 h-1.5 bg-purple-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3
                  }}
                />
                <motion.div 
                  className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-pink-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6
                  }}
                />
                <motion.div 
                  className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-yellow-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.9
                  }}
                />
              </div>
              
              {/* Efeito de onda de transição */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-transparent to-purple-500/20 opacity-0 group-active:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors duration-200"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-dark-800 border-t border-dark-200 dark:border-dark-700"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    whileHover={{ x: 10 }}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-dark-50 dark:hover:bg-dark-700 rounded-md font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation
