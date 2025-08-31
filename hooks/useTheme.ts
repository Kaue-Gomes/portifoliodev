import { useState, useEffect } from 'react'

export function useTheme() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Aguardar um frame para garantir que estamos no cliente
    const timer = setTimeout(() => {
      try {
        // Verificar preferência salva no localStorage
        const savedTheme = localStorage.getItem('darkMode')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        
        // Se não há tema salvo, usar preferência do sistema
        const shouldBeDark = savedTheme !== null 
          ? savedTheme === 'true' 
          : prefersDark
        
        setIsDark(shouldBeDark)
        
        // Aplicar classe no HTML
        const htmlElement = document.documentElement
        if (shouldBeDark) {
          htmlElement.classList.add('dark')
        } else {
          htmlElement.classList.remove('dark')
        }
        
      } catch (error) {
        console.error('Erro ao carregar tema:', error)
      }
    }, 0)

    return () => clearTimeout(timer)
  }, [])

  const toggleTheme = () => {
    try {
      const newDarkMode = !isDark
      setIsDark(newDarkMode)
      
      localStorage.setItem('darkMode', newDarkMode.toString())
      
      // Aplicar classe no HTML
      const htmlElement = document.documentElement
      
      // Adicionar efeito de transição elegante
      htmlElement.classList.add('theme-transitioning')
      
      // Aplicar tema
      if (newDarkMode) {
        htmlElement.classList.add('dark')
      } else {
        htmlElement.classList.remove('dark')
      }
      
      // Adicionar efeitos visuais durante a transição
      const body = document.body
      
      // Efeito de onda de transição
      const waveElements = document.querySelectorAll('.theme-wave')
      waveElements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('active')
          setTimeout(() => el.classList.remove('active'), 1200)
        }, index * 100)
      })
      
      // Efeito de partículas
      const particleElements = document.querySelectorAll('.theme-particles')
      particleElements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('active')
          setTimeout(() => el.classList.remove('active'), 1000)
        }, index * 150)
      })
      
      // Efeito de morphing para cards
      const morphElements = document.querySelectorAll('.theme-morph')
      morphElements.forEach((el, index) => {
        setTimeout(() => {
          const element = el as HTMLElement
          element.style.transform = 'translateY(-10px) rotateX(10deg) scale(1.02)'
          setTimeout(() => {
            element.style.transform = ''
          }, 800)
        }, index * 50)
      })
      
      // Efeito de brilho para elementos importantes
      const shineElements = document.querySelectorAll('.theme-shine')
      shineElements.forEach((el, index) => {
        setTimeout(() => {
          const element = el as HTMLElement
          element.style.transform = 'scale(1.05)'
          element.style.boxShadow = '0 0 30px rgba(59, 130, 246, 0.3)'
          setTimeout(() => {
            element.style.transform = ''
            element.style.boxShadow = ''
          }, 800)
        }, index * 75)
      })
      
      // Remover classe de transição após a animação
      setTimeout(() => {
        htmlElement.classList.remove('theme-transitioning')
      }, 800)
      
    } catch (error) {
      console.error('Erro ao alternar tema:', error)
    }
  }

  return {
    isDark,
    mounted,
    toggleTheme
  }
}
