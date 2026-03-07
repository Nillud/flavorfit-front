import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { ForgotPassword } from '@/features/auth/ui/ForgotPassword'

export const metadata: Metadata = {
    title: 'Forgot password',
    ...NO_INDEX_PAGE
}

export default function Page() {
    return <ForgotPassword />
}
