'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye, Key } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import CredentialsModal from '@/components/ui/CredentialsModal'

const Projects = () => {
  const [isCredentialsModalOpen, setIsCredentialsModalOpen] = useState(false)

  const projects = [
    {
      title: 'ShopMy',
      description: 'Plataforma completa de e-commerce com React, Next.js e Stripe. Inclui sistema de pagamentos, gestão de produtos e painel administrativo.',
      image: '/projects/shopmy.png',
      technologies: ['React', 'Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
      github: 'https://github.com/Kaue-Gomes/shopmy',
      demo: 'https://demo.com',
      featured: true,
      hideDemo: true,
    },
    {
      title: 'MyGestor',
      description: 'Aplicação de gestão de completa para concessionárias de veículos com dashboards e relatórios.',
      image: '/projects/mygestor.png',
      technologies: ['PHP', 'Bootstrap', 'MySQL'],
      github: 'https://github.com',
      demo: 'https://mygestorexample.codesky.com.br/',
      featured: true,
      hasCredentials: true,
    },
    {
      title: 'Nexus Ia',
      description: 'Landing page moderna e responsiva com animações suaves e design elegante.',
      image: '/projects/nexus.png',
      technologies: ['HTML:5', 'CSS3','JavaScript'],
      github: 'https://github.com/Kaue-Gomes/landingpagecompartilhada',
      demo: 'https://ex.codesky.com.br/',
      featured: false,
    },
    {
      title: 'Weather Dashboard',
      description: 'Dashboard de previsão do tempo com gráficos interativos e dados em tempo real de múltiplas APIs.',
      image: '/projects/weather.png',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS Grid'],
      github: 'https://github.com/Kaue-Gomes/WeatherMap',
      demo: 'https://demo.com',
      featured: false,
      hideDemo: true,
    },
    {
      title: 'GomesBlog',
      description: 'Clone de blog com funcionalidades de post, Hashtags e Dasboard de analitica',
      image: '/projects/gomesblog.png',
      technologies: ['React', 'Firebase', 'Material-UI'],
      github: 'https://github.com/Kaue-Gomes/Blog',
      demo: 'https://kaue-gomes.github.io/Blog/',
      featured: false,
    },
    {
      title: 'AI Chat Application',
      description: 'Aplicação de chat com integração de IA usando OpenAI API e interface moderna.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'OpenAI API', 'Node.js', 'WebSocket'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      hideDemo: true,
      inProduction: true,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-dark-50 to-white dark:from-dark-800 dark:to-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            Uma seleção dos meus projetos mais recentes e relevantes, demonstrando minhas habilidades e experiência.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Projetos em Destaque</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card variant="elevated" className="overflow-hidden h-full">
                  <div className="relative overflow-hidden rounded-t-xl">
                    {project.image && project.image !== '/api/placeholder/600/400' ? (
                      <div className="aspect-video relative">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>
                      </div>
                    ) : (
                      <div className="aspect-video bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white text-lg font-medium">{project.title}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      {project.inProduction ? (
                        <div className="text-center">
                          <div className="text-white text-lg font-semibold">Em Produção</div>
                        </div>
                      ) : (
                        <>
                          {!project.hideDemo && (
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() => window.open(project.demo, '_blank')}
                              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                            >
                              <Eye size={16} className="mr-2" />
                              Demo
                            </Button>
                          )}
                          {project.hasCredentials ? (
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() => setIsCredentialsModalOpen(true)}
                              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                            >
                              <Key size={16} className="mr-2" />
                              Credenciais
                            </Button>
                          ) : (
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() => window.open(project.github, '_blank')}
                              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                            >
                              <Github size={16} className="mr-2" />
                              Código
                            </Button>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-dark-900 dark:text-white mb-3">
                      {project.title}
                    </h4>
                    <p className="text-dark-600 dark:text-dark-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      {project.inProduction ? (
                        <div className="w-full text-center py-2">
                          <span className="text-sm text-dark-500 dark:text-dark-400 font-medium">Em Produção</span>
                        </div>
                      ) : (
                        <>
                          {!project.hideDemo && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open(project.demo, '_blank')}
                              className="flex-1"
                            >
                              Ver Demo
                              <ExternalLink size={16} className="ml-2" />
                            </Button>
                          )}
                          {project.hasCredentials ? (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setIsCredentialsModalOpen(true)}
                              className="flex-1"
                            >
                              Credenciais
                              <Key size={16} className="ml-2" />
                            </Button>
                          ) : (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open(project.github, '_blank')}
                              className="flex-1"
                            >
                              Ver Código
                              <Github size={16} className="ml-2" />
                            </Button>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Todos os Projetos</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card variant="elevated" className="overflow-hidden h-full">
                  <div className="relative overflow-hidden rounded-t-xl">
                    {project.image && project.image !== '/api/placeholder/600/400' ? (
                      <div className="aspect-video relative">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>
                      </div>
                    ) : (
                      <div className="aspect-video bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white text-lg font-medium">{project.title}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      {project.inProduction ? (
                        <div className="text-center">
                          <div className="text-white text-sm font-semibold">Em Produção</div>
                        </div>
                      ) : (
                        <>
                          {!project.hideDemo && (
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() => window.open(project.demo, '_blank')}
                              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                            >
                              Demo
                              <Eye size={16} className="ml-2" />
                            </Button>
                          )}
                          {project.hasCredentials ? (
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() => setIsCredentialsModalOpen(true)}
                              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                            >
                              Credenciais
                              <Key size={16} className="ml-2" />
                            </Button>
                          ) : (
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() => window.open(project.github, '_blank')}
                              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                            >
                              Código
                              <Github size={16} className="ml-2" />
                            </Button>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-dark-900 dark:text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-sm text-dark-600 dark:text-dark-400 mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-400 text-xs rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      {project.inProduction ? (
                        <div className="w-full text-center py-1">
                          <span className="text-xs text-dark-500 dark:text-dark-400 font-medium">Em Produção</span>
                        </div>
                      ) : (
                        <>
                          {!project.hideDemo && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open(project.demo, '_blank')}
                              className="flex-1 text-xs"
                            >
                              Demo
                              <ExternalLink size={14} className="ml-1" />
                            </Button>
                          )}
                          {project.hasCredentials ? (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setIsCredentialsModalOpen(true)}
                              className="flex-1 text-xs"
                            >
                              Credenciais
                              <Key size={14} className="ml-1" />
                            </Button>
                          ) : (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open(project.github, '_blank')}
                              className="flex-1 text-xs"
                            >
                              Código
                              <Github size={14} className="ml-1" />
                            </Button>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card variant="glass" className="p-8">
            <h3 className="text-2xl font-bold mb-4">Interessado em trabalhar juntos?</h3>
            <p className="text-dark-600 dark:text-dark-400 mb-6 max-w-2xl mx-auto">
              Estou sempre aberto a novos projetos e oportunidades. Vamos criar algo incrível juntos!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Vamos Conversar
              </Button>
              <Button variant="secondary" size="lg" onClick={() => window.open('https://github.com', '_blank')}>
                Ver Mais no GitHub
                <Github className="ml-2" size={20} />
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Credentials Modal */}
      <CredentialsModal 
        isOpen={isCredentialsModalOpen} 
        onClose={() => setIsCredentialsModalOpen(false)} 
      />
    </section>
  )
}

export default Projects
