import { LucideIcon } from 'lucide-react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel as SelectInsideLabel,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../../ui/select'
import { LabelIcon } from './LabelIcon'

interface Props {
  label: string
  Icon: LucideIcon
  options?: { value: string; label: string }[]
  value?: string | null
  onChange?: (value: string | null) => void
}

export function SelectLabel({
  label,
  Icon,
  options = [],
  value,
  onChange
}: Props) {
  return (
    <label className="relative block">
      <LabelIcon
        label={label}
        Icon={Icon}
      />

      <Select
        value={value || undefined}
        onValueChange={onChange}
      >
        <SelectTrigger className="rounded-xl bg-[#ececec] w-full pl-8">
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent  className='top-18'>
          <SelectGroup>
            <SelectInsideLabel>{label}</SelectInsideLabel>
            {options.map(option => (
              <SelectItem
                key={option.value}
                value={option.value}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </label>
  )
}
