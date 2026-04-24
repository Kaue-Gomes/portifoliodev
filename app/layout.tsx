import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ConsoleFilter from '@/components/ConsoleFilter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'kauegomes - Desenvolvedor Full Stack & Engenheiro de Dados',
  description: 'Portfólio profissional de um desenvolvedor full stack e engenheiro de dados apaixonado por criar soluções inovadoras e experiências digitais excepcionais.',
  keywords: ['desenvolvedor', 'full stack', 'engenheiro de dados', 'react', 'next.js', 'typescript', 'python', 'portfólio'],
  authors: [{ name: 'Kauê Gomes' }],
  creator: 'Kauê Gomes',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://seu-portfolio.com',
    title: 'kauegomes - Desenvolvedor Full Stack & Engenheiro de Dados',
    description: 'Portfólio profissional de um desenvolvedor full stack e engenheiro de dados apaixonado por criar soluções inovadoras.',
    siteName: 'kauegomes',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'kauegomes - Desenvolvedor Full Stack & Engenheiro de Dados',
    description: 'Portfólio profissional de um desenvolvedor full stack e engenheiro de dados apaixonado por criar soluções inovadoras.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Aguarda o DOM estar pronto
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
                    
                    // Remove classes existentes para evitar duplicação
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
      <body className={`${inter.className} antialiased`}>
        <ConsoleFilter />
        {children}
      </body>
    </html>
  )
}
