import { Search } from 'lucide-react'

import { SidebarMenuAccordion } from '@/shared/components/custom-ui/sidebar-menu-accordion/SidebarMenuAccordion'
import { InputLabel } from '@/shared/components/custom-ui/with-label/InputLabel'

import { recipesSidebarMenuData } from './recipes-sidebar-menu.data'
import { TRecipeFilters } from './recipes-sidebar-menu.types'

interface Props {
  filters: TRecipeFilters
  setFilters: (filters: Partial<TRecipeFilters>) => void

  searchTerm: string
  setSearchTerm: (value: string) => void
}

export function RecipesSidebar({
  filters,
  setFilters,
  searchTerm,
  setSearchTerm
}: Props) {
  const setActiveFilter = (key: keyof TRecipeFilters, value: string) => setFilters({ [key]: value })

  return (
    <div className="w-full max-w-64 space-y-6 rounded-2xl bg-white p-4">
      <InputLabel
        Icon={Search}
        placeholder="Search by recipes"
        className="bg-gray-100"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <SidebarMenuAccordion
        data={recipesSidebarMenuData}
        values={filters}
        onValueChange={setActiveFilter}
      />
    </div>
  )
}
