"use client";


import React from 'react'
import { Providers } from '../app/(auth)/providers'
import { Noto_Sans_KR } from 'next/font/google'
import '@/styles/globals.css'

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-kr',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${notoSansKr.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Providers>
          <main className="flex-grow">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}