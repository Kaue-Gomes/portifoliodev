import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 ease-out transform hover:scale-102 focus:outline-none focus:ring-2 focus:ring-offset-2 relative overflow-hidden group whitespace-nowrap'
    
    const variants = {
      primary: 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-xl focus:ring-primary-500',
      secondary: 'border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white focus:ring-primary-500 shadow-md hover:shadow-lg',
      outline: 'border-2 border-dark-300 dark:border-dark-600 text-dark-700 dark:text-dark-300 hover:bg-dark-50 dark:hover:bg-dark-800 focus:ring-dark-500',
      ghost: 'text-dark-700 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-800 focus:ring-dark-500'
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm rounded-md',
      md: 'px-6 py-3 text-base rounded-lg',
      lg: 'px-8 py-4 text-lg rounded-xl'
    }
    
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {/* Efeito de brilho */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-400 ease-out"></div>
        
        {/* Conteúdo */}
        <span className="relative z-10 button-content">{children}</span>
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
