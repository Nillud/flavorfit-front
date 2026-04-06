import { BookHeart, Star } from 'lucide-react'

import { RecipeCarousel } from '@/features/recipe-carousel/RecipeCarousel'

import { popular, recommended } from './recipes-catalog.mock'

export function RecipesCatalog() {
  return (
    <div>
      <RecipeCarousel
        Icon={BookHeart}
        title="Recommended"
        size="default"
        recipes={recommended}
      />

      <RecipeCarousel
        Icon={Star}
        title="Popular"
        size="sm"
        recipes={popular}
      />
    </div>
  )
}
