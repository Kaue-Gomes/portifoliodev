import dynamic from 'next/dynamic'
import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import Footer from '@/components/Footer'

function SectionSkeleton() {
  return (
    <div className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto animate-pulse rounded-2xl border border-mutedfg/15 bg-[color:var(--surface)] h-72 md:h-96" />
    </div>
  )
}

const About = dynamic(() => import('@/components/sections/About'), {
  loading: () => <SectionSkeleton />,
})

const Skills = dynamic(() => import('@/components/sections/Skills'), {
  loading: () => <SectionSkeleton />,
})

const Projects = dynamic(() => import('@/components/sections/Projects'), {
  loading: () => <SectionSkeleton />,
})

const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <SectionSkeleton />,
})

export default function Home() {
  return (
    <main className="min-h-screen bg-[color:var(--bg)]">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
