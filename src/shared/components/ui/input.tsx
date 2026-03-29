import * as React from 'react'

import { cn } from '@/shared/utils/index'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-foreground/60 selection:bg-primary selection:text-foreground dark:bg-input/30 text-foreground placeholder:text-foreground/50 h-9 w-full min-w-0 rounded-md border border-transparent bg-white/85 px-3 py-1 font-mono text-base transition-[color, box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-white/80',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className
      )}
      {...props}
    />
  )
}

export { Input }
