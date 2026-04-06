import { cn } from '@/shared/utils'
import { ChevronDown, ChevronUp, CornerDownRight } from 'lucide-react'
import { useState } from 'react'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '../../ui/collapsible'
import { ISidebarMenuAccordionItem } from './sidebar-menu-accordion.types'

interface Props {
  item: ISidebarMenuAccordionItem
  activeValue?: string
  onValueChange?: (value: string) => void
}

export function MenuAccordionItem({ item, activeValue, onValueChange }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(item.isInitialOpen ?? false)

  return (
    <div>
      <Collapsible open={isOpen}>
        <CollapsibleTrigger
          className={cn(
            'flex w-full items-center justify-between rounded-xl p-2 px-2 py-1.5 opacity-80',
            {
              'bg-accent': item.items.some(child => child.value === activeValue)
            }
          )}
          onClick={() => setIsOpen(prev => !prev)}
        >
          <span className="flex items-center gap-2 font-semibold">
            <item.Icon size={20} className='shrink-0' />
            {item.name}
          </span>

          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </CollapsibleTrigger>
        <CollapsibleContent>
          <ul className="space-y-2 pt-1 pl-4">
            {item.items.map(child => (
              <li
                key={child.value}
                className={cn('opacity-50', {
                  'opacity-100': activeValue === child.value
                })}
              >
                <button
                  className="flex w-full items-center justify-between"
                  onClick={() => onValueChange?.(child.value)}
                >
                  <span className="flex items-center gap-1">
                    <CornerDownRight size={18} />
                    <span>{child.label}</span>
                  </span>
                  {child.badgeValue && (
                    <span className="mr-4 block rounded-xl bg-red-200 px-1 py-0.5 text-xs font-semibold text-red-500">
                      {child.badgeValue}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
