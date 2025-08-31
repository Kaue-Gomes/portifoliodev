import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'elevated'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
      const variants = {
    default: 'bg-white/90 dark:bg-dark-800/90 border border-dark-200/50 dark:border-dark-700/50 shadow-sm hover:shadow-md backdrop-blur-sm theme-morph',
    glass: 'backdrop-blur-md bg-white/10 dark:bg-dark-800/10 border border-white/20 dark:border-dark-700/20 shadow-lg hover:shadow-xl theme-shine',
    elevated: 'bg-white/95 dark:bg-dark-800/95 border border-dark-200/50 dark:border-dark-700/50 shadow-lg hover:shadow-2xl backdrop-blur-sm hover:scale-[1.02] theme-morph'
  }
    
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl p-6 transition-all duration-300 ease-out',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card
