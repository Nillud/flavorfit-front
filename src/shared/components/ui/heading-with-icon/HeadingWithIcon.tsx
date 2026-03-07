import { LucideIcon } from 'lucide-react'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  Icon: LucideIcon
}

export function HeadingWithIcon({ Icon, children }: Props) {
  return (
    <div className="flex items-center">
      <Icon className="mr-1.5 opacity-45" />
      <h2 className="text-xl font-semibold">{children}</h2>
    </div>
  )
}
