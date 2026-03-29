import { RecipeDetails } from '@/features/recipe/RecipeDetails'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Recipe' }
}

export default function Page() {
  return <RecipeDetails />
}
