import { ISelectItem } from "@/shared/types"
import type { LucideIcon } from "lucide-react"

export interface ISidebarMenuAccordionItem<K extends string = string> {
    isInitialOpen?: boolean
    name: string
    key: K
    Icon: LucideIcon
    items: ISelectItem[]
}