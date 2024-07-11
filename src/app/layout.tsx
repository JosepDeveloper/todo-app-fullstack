import type { Metadata } from 'next'
import React from 'react'
import { Onest as FontSans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

import { cn } from '@/lib/utils'
import { Header } from '@/components/header'
const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'Una aplicacion de Todos (notas) sencilla'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/favicon.svg' sizes='any' />
      </head>
      <body
        className={cn(
          'w-full bg-background font-sans antialiased mt-4',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <main className='w-10/12 container mx-auto flex flex-col gap-6 justify-center'>
            <Header />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
