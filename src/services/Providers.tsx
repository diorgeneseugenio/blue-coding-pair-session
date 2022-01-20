import React, { ReactNode } from 'react'

import { QueryClient, QueryClientProvider } from 'react-query'

interface OwnProps {
  children: ReactNode
}

export const Providers = ({ children }: OwnProps) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
