import { Apple, ChefHat, CookingPot, MonitorCog, Pill } from 'lucide-react'

import { ISidebarMenuAccordionItem } from '@/shared/components/custom-ui/sidebar-menu-accordion/sidebar-menu-accordion.types'

export const recipesSidebarMenuData: ISidebarMenuAccordionItem[] = [
  {
    isInitialOpen: true,
    Icon: CookingPot,
    name: 'Meal Type',
    items: [
      { label: 'Breakfast', value: 'breakfast' },
      { label: 'Lunch', value: 'lunch', badgeValue: '+1' },
      { label: 'Dinner', value: 'dinner' },
      { label: 'Snack', value: 'snack' },
      { label: 'Dessert', value: 'dessert' },
      { label: 'Drinks', value: 'drinks' }
    ]
  },
  {
    isInitialOpen: true,
    Icon: Apple,
    name: 'Dietary Preferences',
    items: [
      { label: 'Vegetarian', value: 'vegetarian' },
      { label: 'Low-Carb', value: 'low-carb', badgeValue: '+2' },
      { label: 'Gluten-Free', value: 'gluten-free' },
      { label: 'Keto', value: 'keto' },
      { label: 'Dairy-Free', value: 'dairy-free' }
    ]
  },
  {
    Icon: Pill,
    name: 'Health Goals',
    items: [
      { label: 'Weight Loss', value: 'weight-loss' },
      { label: 'Muscle Gain', value: 'muscle-gain' },
      { label: 'Heart Health', value: 'heart-health' }
    ]
  },
  {
    Icon: ChefHat,
    name: 'Cuisine',
    items: [
      { label: 'Russian', value: 'russian' },
      { label: 'Italian', value: 'italian' },
      { label: 'Chinese', value: 'chinese' },
      { label: 'Mexican', value: 'mexican' },
      { label: 'Indian', value: 'indian' },
      { label: 'French', value: 'french' }
    ]
  },
  {
    Icon: MonitorCog,
    name: 'Special Occasions',
    items: [
      { label: 'Holiday', value: 'holiday' },
      { label: 'Birthday', value: 'birthday' },
      { label: 'Anniversary', value: 'anniversary' },
      { label: 'Party', value: 'party' }
    ]
  }
]
