import { cn } from '@/shared/utils'
import { LucideIcon } from 'lucide-react'
import { PropsWithChildren } from 'react'

import { recipeCardBadgeVariants } from '../../styles/recipe-card.styles'
import { TRecipeCardSize } from '../../types/recipe-card.types'

interface Props extends PropsWithChildren {
  Icon?: LucideIcon
  size: TRecipeCardSize
  className?: string
}

export function RecipeCardBadge({
  Icon,
  size = 'default',
  className = '',
  children
}: Props) {
  return (
    <div className={cn(recipeCardBadgeVariants({ size }), className)}>
      {Icon && <Icon className={size === 'sm' ? 'size-3.5' : 'size-4'} />}
      {children}
    </div>
  )
}
