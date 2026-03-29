import { ISelectItem } from "@/shared/types"
import type { LucideIcon } from "lucide-react"

export interface ISidebarMenuAccordionItem {
    isInitialOpen?: boolean
    name: string
    Icon: LucideIcon
    items: ISelectItem[]
}