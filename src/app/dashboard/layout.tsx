import type { PropsWithChildren } from 'react'

import { Header } from '@/features/layout/header/Header'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className='py-5 px-6'>
      <Header />
      <div className='mt-10'>{children}</div>
    </div>
  )
}
