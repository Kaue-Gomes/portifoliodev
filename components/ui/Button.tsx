import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = 'primary', size = 'md', children, disabled, ...props },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg)] disabled:pointer-events-none disabled:opacity-50 relative whitespace-nowrap'

    const variants = {
      primary:
        'rounded-lg tracking-wide text-white bg-[color:var(--accent)] hover:opacity-90 shadow-sm',
      secondary:
        'rounded-lg border border-[color:var(--muted)] bg-transparent text-[color:var(--text)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]',
      outline:
        'rounded-lg border border-mutedfg/40 bg-transparent text-[color:var(--text)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]',
      ghost:
        'rounded-lg text-[color:var(--text)] hover:bg-[color:var(--surface)]',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        <span className="relative z-10 button-content">{children}</span>
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
