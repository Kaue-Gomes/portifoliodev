'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Key } from 'lucide-react'
import Button from '@/components/ui/Button'
import CredentialsModal from '@/components/ui/CredentialsModal'

type Project = {
  title: string
  description: string
  image: string
  technologies: string[]
  github?: string
  demo?: string
  featured?: boolean
  hideDemo?: boolean
  hasCredentials?: boolean
}

const projects: Project[] = [
  {
    title: 'ShopMy',
    description:
      'Checkout completo com Stripe, autenticação JWT, painel admin com controle de estoque e histórico de pedidos.',
    image: '/projects/shopmy.png',
    technologies: ['React', 'Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
    github: 'https://github.com/Kaue-Gomes/shopmy',
    demo: undefined,
    featured: true,
    hideDemo: true,
  },
  {
    title: 'MyGestor',
    description:
      'Sistema de gestão para concessionárias com controle de estoque, vendas por vendedor e relatórios em dashboard.',
    image: '/projects/mygestor.png',
    technologies: ['PHP', 'Bootstrap', 'MySQL'],
    github: 'https://github.com/Kaue-Gomes',
    demo: 'https://mygestorexample.codesky.com.br/',
    featured: true,
    hasCredentials: true,
  },
  {
    title: 'Landing Codesky',
    description:
      'Landing institucional responsiva para campanha/site Codesky — foco em conversão, tipografia legível e animações leves.',
    image: '/projects/nexus.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Kaue-Gomes/landingpagecompartilhada',
    demo: 'https://ex.codesky.com.br/',
    featured: false,
  },
  {
    title: 'Weather Dashboard',
    description:
      'Dashboard de previsão do tempo com gráficos e agregação de dados de APIs públicas para visualização rápida.',
    image: '/projects/weather.png',
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS Grid'],
    github: 'https://github.com/Kaue-Gomes/WeatherMap',
    demo: undefined,
    featured: false,
    hideDemo: true,
  },
  {
    title: 'GomesBlog',
    description:
      'Blog com posts e hashtags, área administrativa simples e painel com métricas de uso para acompanhar engajamento.',
    image: '/projects/gomesblog.png',
    technologies: ['React', 'Firebase', 'Material-UI'],
    github: 'https://github.com/Kaue-Gomes/Blog',
    demo: 'https://kaue-gomes.github.io/Blog/',
    featured: false,
  },
]

export default function Projects() {
  const [isCredentialsModalOpen, setIsCredentialsModalOpen] = useState(false)

  const sorted = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured))

  return (
    <section
      id="projects"
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
            Meus <span className="gradient-text">projetos</span>
          </h2>
          <p className="text-lg text-mutedfg mb-12">
            Problemas reais primeiro — tecnologia aparece onde faz sentido no produto.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {sorted.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-mutedfg/15 aspect-video shadow-sm bg-[color:var(--surface)]"
            >
              <Image
                src={project.image}
                alt={`${project.title} — captura do projeto`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex flex-col justify-end bg-[color:var(--bg)]/95 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto p-6 md:p-8">
                <h3 className="font-display text-xl md:text-2xl font-bold text-[color:var(--text)] mb-2">
                  {project.title}
                </h3>
                <p className="text-mutedfg text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex gap-2 flex-wrap mb-5">
                  {project.technologies.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs rounded-full border border-[color:var(--accent)] px-2 py-1 text-[color:var(--accent)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                  {project.demo && !project.hideDemo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-[color:var(--accent)] hover:underline"
                    >
                      Ver demo <ExternalLink size={16} aria-hidden />
                    </a>
                  ) : null}
                  {project.hasCredentials ? (
                    <button
                      type="button"
                      onClick={() => setIsCredentialsModalOpen(true)}
                      className="inline-flex items-center gap-1 text-sm font-medium text-[color:var(--accent)] hover:underline bg-transparent border-0 p-0 cursor-pointer"
                    >
                      Credenciais <Key size={16} aria-hidden />
                    </button>
                  ) : project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-[color:var(--accent)] hover:underline"
                    >
                      Código <Github size={16} aria-hidden />
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-mutedfg/15 bg-[color:var(--surface)] p-8 text-center shadow-sm"
        >
          <h3 className="font-display text-2xl font-bold mb-3 text-[color:var(--text)]">
            Interessado em trabalhar juntos?
          </h3>
          <p className="text-mutedfg mb-8 max-w-2xl mx-auto leading-relaxed">
            Posso ajudar em produtos web e camadas de dados — da interface ao pipeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="primary"
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Vamos conversar
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.open('https://github.com/Kaue-Gomes', '_blank')}
            >
              GitHub
              <Github className="ml-2" size={20} aria-hidden />
            </Button>
          </div>
        </motion.div>
      </div>

      <CredentialsModal
        isOpen={isCredentialsModalOpen}
        onClose={() => setIsCredentialsModalOpen(false)}
      />
    </section>
  )
}
