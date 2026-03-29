import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { RecipesDashboard } from '@/features/recipes/RecipesDashboard'

export const metadata: Metadata = {
    title: 'Recipes',
    ...NO_INDEX_PAGE
}

export default function Page() {
    return <RecipesDashboard />
}
