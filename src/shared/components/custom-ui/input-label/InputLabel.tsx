import { cn } from '@/shared/utils'
import { LucideIcon } from 'lucide-react'
import { ComponentProps } from 'react'

import { Input } from '../../ui/input'

interface Props extends ComponentProps<'input'> {
  label?: string
  Icon: LucideIcon
}

export function InputLabel({ label, Icon, className, type, ...props }: Props) {
  return (
    <label className='relative block'>
      {label && <span className="mb-1 block text-sm opacity-50">{label}</span>}
      <Icon
        size={17}
        className="absolute bottom-3 left-3 opacity-50"
      />
      <Input
        className={cn(className, 'bg-[#ececec] pl-9')}
        type={type}
        {...props}
      />
    </label>
  )
}
