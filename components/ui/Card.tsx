import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'elevated'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default:
        'bg-[color:var(--surface)] border border-mutedfg/20 shadow-sm hover:shadow-md',
      glass:
        'backdrop-blur-md bg-[color:var(--surface)]/80 border border-mutedfg/20 dark:bg-[color:var(--surface)]/60',
      elevated:
        'bg-[color:var(--surface)] border border-mutedfg/20 shadow-lg hover:shadow-xl',
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
