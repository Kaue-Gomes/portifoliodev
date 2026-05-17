'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import { CloudSun, ExternalLink, Github, Key, Newspaper, Sparkles } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import CredentialsModal from '@/components/ui/CredentialsModal'
import { cn } from '@/lib/utils'

/** Abas disponíveis; "Todas" é sintético (não entra nos dados). */
export type ProjectFilterTab = 'Todas' | 'Frontend' | 'Full stack' | 'Dados'

const enterTransition = { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }

const fadeLayoutTransition = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
}

type FeaturedProject = {
  kind: 'featured'
  title: string
  description: string
  image: string
  technologies: string[]
  filters: Exclude<ProjectFilterTab, 'Todas'>[]
  github?: string
  demo?: string
  hideDemo?: boolean
  hasCredentials?: boolean
}

type CompactProject = {
  kind: 'compact'
  title: string
  headline: string
  description: string
  technologies: string[]
  filters: Exclude<ProjectFilterTab, 'Todas'>[]
  /** Miniatura menor que os projetos em destaque */
  thumbnail: string
  Icon: LucideIcon
  github?: string
  demo?: string
  hideDemo?: boolean
}

type Project = FeaturedProject | CompactProject

const projectsData: readonly Project[] = [
  {
    kind: 'featured',
    title: 'ShopMy',
    description:
      'Checkout completo com Stripe, autenticação JWT, painel admin com estoque e histórico.',
    image: '/projects/shopmy.png',
    technologies: ['React', 'Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
    filters: ['Full stack'],
    github: 'https://github.com/Kaue-Gomes/shopmy',
    demo: undefined,
    hideDemo: true,
    hasCredentials: false,
  },
  {
    kind: 'featured',
    title: 'MyGestor',
    description:
      'Gestão para concessionárias: estoque, vendas por vendedor e dashboard de métricas.',
    image: '/projects/mygestor.png',
    technologies: ['PHP', 'Bootstrap', 'MySQL'],
    filters: ['Full stack'],
    github: 'https://github.com/Kaue-Gomes',
    demo: 'https://mygestorexample.codesky.com.br/',
    hideDemo: false,
    hasCredentials: true,
  },
  {
    kind: 'compact',
    title: 'NexusIA',
    headline: 'Landing para apresentar uma nova IA ao mercado.',
    description:
      'Projeto acadêmico: página única pensada para comunicar valor, posicionamento e história dessa nova solução de IA com visual moderno.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Landing'],
    filters: ['Frontend'],
    thumbnail: '/images/NexusIA.png',
    Icon: Sparkles,
    github: 'https://github.com/Kaue-Gomes/NexusIA',
    demo: 'https://ex.codesky.com.br/',
    hideDemo: false,
  },
  {
    kind: 'compact',
    title: 'Weather Dashboard',
    headline: 'Clima consolidado para leitura rápida.',
    description: 'Gráficos sobre APIs públicas e layout responsivo com CSS Grid.',
    technologies: ['React', 'Chart.js', 'APIs públicas'],
    filters: ['Frontend'],
    thumbnail: '/projects/weather.png',
    Icon: CloudSun,
    github: 'https://github.com/Kaue-Gomes/WeatherMap',
    demo: undefined,
    hideDemo: true,
  },
  {
    kind: 'compact',
    title: 'GomesBlog',
    headline: 'Blog com hashtags e métricas de uso.',
    description: 'CRUD simples + painel de analytics dentro do próprio projeto.',
    technologies: ['React', 'Firebase', 'Material UI'],
    filters: ['Frontend'],
    thumbnail: '/projects/gomesblog.png',
    Icon: Newspaper,
    github: 'https://github.com/Kaue-Gomes/Blog',
    demo: 'https://kaue-gomes.github.io/Blog/',
    hideDemo: false,
  },
] as const

const FILTER_ORDER: Exclude<ProjectFilterTab, 'Todas'>[] = ['Frontend', 'Full stack', 'Dados']

function projectVisibleForTab(tab: ProjectFilterTab, p: Project) {
  if (tab === 'Todas') return true
  return p.filters.includes(tab)
}

type FeaturedProps = FeaturedProject & {
  onCredentials: () => void
}

function FeaturedProjectCard({ onCredentials, ...project }: FeaturedProps) {
  return (
    <motion.article
      layout
      {...fadeLayoutTransition}
      transition={enterTransition}
      className={cn(
        'group relative aspect-video overflow-hidden rounded-2xl',
        'ring-1 ring-inset ring-black/10 dark:ring-white/10',
        'shadow-[0_22px_50px_-32px_rgba(99,102,241,0.55)] hover:shadow-[0_26px_60px_-34px_rgba(99,102,241,0.65)]',
        'bg-[color:var(--surface)] focus-within:ring-2 focus-within:ring-[color:var(--accent)]/40'
      )}
    >
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} — captura do projeto`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.04] group-focus-within:scale-[1.04]"
          priority={false}
        />

        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 bg-gradient-to-t from-black/90 via-neutral-950/78 to-neutral-950/55 backdrop-blur-[2px]" />

        <div
          className={cn(
            'absolute inset-0 flex flex-col justify-center gap-5 p-8 md:p-10',
            'opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100',
            'text-zinc-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto'
          )}
        >
          <div className="max-w-xl space-y-3">
            <h3 className="font-display text-2xl md:text-[1.75rem] font-bold tracking-tight text-neutral-50">
              {project.title}
            </h3>
            <p className="text-sm md:text-[0.9375rem] leading-relaxed text-zinc-300">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2 justify-start">
            {project.technologies.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/20 bg-black/35 px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-zinc-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            {project.demo && !project.hideDemo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-200/55 bg-neutral-950/66 px-4 py-2.5 text-sm font-semibold text-zinc-50 shadow-sm transition-colors hover:bg-[color:var(--accent)] hover:border-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:ring-[color:var(--accent)]"
              >
                Ver demo <ExternalLink size={16} aria-hidden />
              </a>
            ) : null}
            {project.hasCredentials ? (
              <button
                type="button"
                onClick={onCredentials}
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-200/55 bg-transparent px-4 py-2.5 text-sm font-semibold text-zinc-100 transition-colors hover:border-[color:var(--accent)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
              >
                Credenciais <Key size={16} aria-hidden />
              </button>
            ) : null}
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white/92 px-4 py-2.5 text-sm font-semibold text-neutral-950 transition-colors hover:bg-[color:var(--accent)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
              >
                Código <Github size={16} aria-hidden />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

type CompactProps = CompactProject

function CompactProjectCard(project: CompactProps) {
  const Icon = project.Icon
  return (
    <motion.article
      layout
      {...fadeLayoutTransition}
      transition={enterTransition}
      className={cn(
        'group relative flex flex-col gap-5 overflow-hidden rounded-2xl p-6 md:p-7 min-h-[280px]',
        'bg-[color:var(--surface)] ring-1 ring-inset ring-black/10 dark:ring-white/10',
        'transition-all duration-300',
        'hover:ring-[color:var(--accent)]/42',
        'hover:shadow-[0_0_32px_-12px_rgba(99,102,241,0.55)]',
        'focus-within:ring-2 focus-within:ring-[color:var(--accent)]/50'
      )}
    >
      <div className="relative -mx-6 -mt-6 mb-2 aspect-[16/9] max-h-[180px] w-[calc(100%+3rem)] overflow-hidden border-b border-black/5 bg-[color:var(--bg)] dark:border-white/[0.07] md:aspect-[21/10] md:max-h-[200px]">
        <Image
          src={project.thumbnail}
          alt={`${project.title} — prévia`}
          fill
          sizes="(max-width: 768px) 100vw, 34vw"
          className={cn(
            'object-cover transition-all duration-500 ease-out',
            'brightness-[0.92] saturate-[0.92] opacity-95',
            'group-hover:saturate-100 group-hover:brightness-100 group-hover:opacity-100 group-hover:scale-[1.03]'
          )}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />
        <span className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-950/55 text-[color:var(--accent)] ring-1 ring-white/20 backdrop-blur-sm">
          <Icon size={22} aria-hidden strokeWidth={2} />
        </span>
      </div>

      <div className="min-w-0 space-y-1">
        <h3 className="font-display text-lg font-bold tracking-tight text-[color:var(--text)] md:text-xl">
          {project.title}
        </h3>
        <p className="text-sm font-semibold text-mutedfg">{project.headline}</p>
      </div>

      <p className="text-sm leading-relaxed text-[color:var(--text)]/85 line-clamp-3">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {project.technologies.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-accent/35 bg-[color:var(--bg)] px-2.5 py-1 text-xs font-medium text-[color:var(--text)]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 pt-3">
        {project.demo && !project.hideDemo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] rounded-sm px-0.5"
          >
            Demo <ExternalLink size={15} aria-hidden />
          </a>
        ) : null}
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--text)] hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] rounded-sm px-0.5"
          >
            Código <Github size={15} aria-hidden />
          </a>
        ) : null}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [tab, setTab] = useState<ProjectFilterTab>('Todas')
  const [credentialsOpen, setCredentialsOpen] = useState(false)

  const tabs = useMemo(() => {
    const used = new Set<Exclude<ProjectFilterTab, 'Todas'>>()
    for (const p of projectsData) {
      for (const f of p.filters) used.add(f)
    }
    const ordered = FILTER_ORDER.filter((f) => used.has(f))
    return ['Todas', ...ordered] satisfies ProjectFilterTab[]
  }, [])

  const filtered = useMemo(
    () => projectsData.filter((p) => projectVisibleForTab(tab, p)),
    [tab]
  )

  const featured = filtered.filter((p): p is FeaturedProject => p.kind === 'featured')
  const compact = filtered.filter((p): p is CompactProject => p.kind === 'compact')

  return (
    <section id="projects" className="section-padding bg-[color:var(--bg)] border-t border-mutedfg/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Meus <span className="gradient-text">projetos</span>
          </h2>
          <p className="text-lg text-mutedfg mb-8">
           Projetos pensados para crescer de forma sustentável, sem perder legibilidade e organização.
          </p>
        </motion.div>

        <nav className="mb-14 flex flex-wrap items-center justify-center gap-3" aria-label="Filtro por categoria">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t as ProjectFilterTab)}
              aria-pressed={tab === (t as ProjectFilterTab)}
              aria-label={`Filtrar projetos por ${t}`}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]',
                tab === t
                  ? 'border-transparent bg-[color:var(--accent)] text-white shadow-[0_8px_30px_-12px_rgba(99,102,241,0.55)] scale-[1.02]'
                  : 'border-mutedfg/22 bg-[color:var(--surface)] text-mutedfg hover:border-[color:var(--accent)] hover:text-[color:var(--text)]'
              )}
            >
              {t === 'Full stack' ? 'Full-stack' : t}
            </button>
          ))}
        </nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="space-y-14"
          >
            <div>
              <h3 className="font-display mb-8 text-xl font-semibold text-[color:var(--text)]">
                Projetos em destaque
              </h3>
              <motion.div layout className="grid gap-8 md:grid-cols-2">
                <AnimatePresence>
                  {featured.map((p) => (
                    <FeaturedProjectCard key={p.title} {...p} onCredentials={() => setCredentialsOpen(true)} />
                  ))}
                </AnimatePresence>
              </motion.div>
              {featured.length === 0 ? (
                <p className="text-sm text-mutedfg">Sem projetos nessa categoria por enquanto.</p>
              ) : null}
            </div>

            <div>
              <h3 className="font-display mb-8 text-xl font-semibold text-[color:var(--text)]">
                Outros projetos
              </h3>
              <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence>
                  {compact.map((p) => (
                    <CompactProjectCard key={p.title} {...p} />
                  ))}
                </AnimatePresence>
              </motion.div>
              {compact.length === 0 ? (
                <p className="text-sm text-mutedfg">Sem cards compactos nessa categoria.</p>
              ) : null}
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl bg-[color:var(--surface)] p-8 text-center ring-1 ring-inset ring-black/10 dark:ring-white/10 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)] dark:shadow-[0_26px_60px_-40px_rgba(99,102,241,0.35)]"
        >
          <h3 className="font-display mb-4 text-2xl font-bold text-[color:var(--text)]">
            Vamos tirar algo do papel?
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-mutedfg leading-relaxed">
            De MVPs rápidos a camadas analíticas, posso contribuir onde produto web e dados se encontram.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Abrir conversa
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.open('https://github.com/Kaue-Gomes', '_blank')}
            >
              GitHub principal
              <Github className="ml-2" size={18} aria-hidden />
            </Button>
          </div>
        </motion.div>
      </div>

      <CredentialsModal isOpen={credentialsOpen} onClose={() => setCredentialsOpen(false)} />
    </section>
  )
}
