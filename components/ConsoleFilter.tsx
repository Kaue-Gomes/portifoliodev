'use client'

import { useEffect } from 'react'

// Componente para filtrar logs de extensões durante desenvolvimento
export default function ConsoleFilter() {
  useEffect(() => {
    // Só executa em desenvolvimento
    if (process.env.NODE_ENV !== 'development') return

    // Filtra erros de extensões
    const originalError = console.error
    const originalWarn = console.warn

    console.error = function(...args: any[]) {
      const message = args.join(' ')
      if (!message.includes('contentScript') && 
          !message.includes('DefaultConnector') && 
          !message.includes('allowedOriginsToCommunicateWith') &&
          !message.includes('message port closed') &&
          !message.includes('Prop `className` did not match') &&
          !message.includes('suppressHydrationWarning')) {
        originalError.apply(console, args)
      }
    }

    console.warn = function(...args: any[]) {
      const message = args.join(' ')
      if (!message.includes('contentScript') && 
          !message.includes('DefaultConnector') &&
          !message.includes('message port closed')) {
        originalWarn.apply(console, args)
      }
    }

    // Log de confirmação
    console.log('🔧 Console Filter: Erros de extensões filtrados automaticamente')

    // Cleanup
    return () => {
      console.error = originalError
      console.warn = originalWarn
    }
  }, [])

  // Componente não renderiza nada
  return null
}
