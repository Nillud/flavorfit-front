'use client'

import { useQueryState } from 'nuqs'

import { useDebounce } from '@/shared/hooks/useDebounce'

import { RecipesSidebar } from './recipes-sidebar/RecipesSidebar'
import { RecipesBanners } from './recipes-banners/RecipesBanners'
import { RecipesCatalog } from './recipes-catalog/RecipesCatalog'

export function RecipesDashboard() {
  const [searchTerm, setSearchTerm] = useQueryState('q', {
    defaultValue: ''
  })
  const [filter, setFilter] = useQueryState('f', { defaultValue: '' })

  const debouncedSearchTerm = useDebounce(searchTerm, 400)

  return (
    <div className='flex gap-8'>
      <RecipesSidebar
        filter={filter}
        setFilter={setFilter}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <main>
        <RecipesBanners />
        <RecipesCatalog />
      </main>
    </div>
  )
}
