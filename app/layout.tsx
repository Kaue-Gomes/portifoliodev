import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'
import ConsoleFilter from '@/components/ConsoleFilter'
import { MotionProviders } from '@/components/MotionProviders'
import { Analytics } from '@vercel/analytics/react'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portifolio-cyan-psi-61.vercel.app'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Kauê Gomes — Full Stack & Dados',
  description:
    'Desenvolvimento orientado a aplicações úteis, dados confiáveis e arquitetura pensada para evolução. Portfólio de Kauê Gomes — Full Stack e Engenheiro de Dados.',
  keywords: [
    'desenvolvedor',
    'full stack',
    'engenheiro de dados',
    'react',
    'next.js',
    'typescript',
    'python',
    'portfólio',
  ],
  authors: [{ name: 'Kauê Gomes' }],
  creator: 'Kauê Gomes',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    title: 'Kauê Gomes — Full Stack & Dados',
    description:
      'Desenvolvimento orientado a aplicações úteis, dados confiáveis e arquitetura pensada para evolução.',
    siteName: 'Kauê Gomes',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Kauê Gomes — Full Stack & Dados' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kauê Gomes — Full Stack & Dados',
    description:
      'Desenvolvimento orientado a aplicações úteis, dados confiáveis e arquitetura pensada para evolução.',
    images: ['/og-image.png'],
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [{ url: '/icon.png', sizes: '512x512', type: 'image/png' }],
    apple: [{ url: '/icon.png', sizes: '512x512', type: 'image/png' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', applyTheme);
                  } else {
                    applyTheme();
                  }
                  function applyTheme() {
                    const savedTheme = localStorage.getItem('darkMode');
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    const shouldBeDark = savedTheme !== null ? savedTheme === 'true' : prefersDark;
                    const htmlElement = document.documentElement;
                    htmlElement.classList.remove('dark');
                    if (shouldBeDark) {
                      htmlElement.classList.add('dark');
                    }
                  }
                } catch (error) {
                  console.error('Erro ao aplicar tema inicial:', error);
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${syne.variable} ${dmSans.variable} ${dmSans.className} antialiased`}
      >
        <ConsoleFilter />
        <MotionProviders>{children}</MotionProviders>
        <Analytics />
      </body>
    </html>
  )
}
