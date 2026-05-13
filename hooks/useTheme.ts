import { useState, useEffect } from 'react'

export function useTheme() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const timer = setTimeout(() => {
      try {
        const savedTheme = localStorage.getItem('darkMode')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const shouldBeDark =
          savedTheme !== null ? savedTheme === 'true' : prefersDark

        setIsDark(shouldBeDark)

        const htmlElement = document.documentElement
        if (shouldBeDark) {
          htmlElement.classList.add('dark')
        } else {
          htmlElement.classList.remove('dark')
        }
      } catch {
        /* noop */
      }
    }, 0)

    return () => clearTimeout(timer)
  }, [])

  const toggleTheme = () => {
    try {
      const newDarkMode = !isDark
      setIsDark(newDarkMode)
      localStorage.setItem('darkMode', String(newDarkMode))

      const htmlElement = document.documentElement
      if (newDarkMode) {
        htmlElement.classList.add('dark')
      } else {
        htmlElement.classList.remove('dark')
      }
    } catch {
      /* noop */
    }
  }

  return {
    isDark,
    mounted,
    toggleTheme,
  }
}
