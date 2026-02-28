'use client'

import { ApolloProvider } from '@apollo/client/react'
import type { PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'

import { getApolloClient } from '@/shared/lib/apollo/apollo-client'

export function Provider({ children }: PropsWithChildren) {
  const apollo = getApolloClient()

  return (
    <ApolloProvider client={apollo}>
      {children}

      <Toaster
        position="top-center"
        containerClassName="mt-16 font-mono text-sm"
      />
    </ApolloProvider>
  )
}
