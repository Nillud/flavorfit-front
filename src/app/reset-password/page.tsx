import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { ResetPassword } from '@/features/auth/ui/ResetPassword'

export const metadata: Metadata = {
    title: 'Reset password',
    ...NO_INDEX_PAGE
}

export default function Page() {
    return <ResetPassword />
}
