'use client'

import { ApolloProvider } from '@apollo/client/react'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import type { PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'

import { getApolloClient } from '@/shared/lib/apollo/apollo-client'

export function Provider({ children }: PropsWithChildren) {
  const apollo = getApolloClient()

  return (
    <NuqsAdapter>
      <ApolloProvider client={apollo}>
        {children}

        <Toaster
          position="top-center"
          containerClassName="mt-16 font-mono text-sm"
        />
      </ApolloProvider>
    </NuqsAdapter>
  )
}
