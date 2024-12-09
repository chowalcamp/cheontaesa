'use client'
import React from 'react'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
        queries: {
        staleTime: 1000 * 60 * 1,
        gcTime: 1000 * 60 * 5,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchInterval: false,
        retry: 1,
        },
    },
}))

        return (
            <RecoilRoot>
                <QueryClientProvider client={queryClient}>
                {children}
                </QueryClientProvider>
            </RecoilRoot>
        )
}