import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { ThemeProvider } from '@/components/shared/theme-provider'

import './globals.css'
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from '@/lib/constants'

const manrope = Manrope({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL)
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${manrope.className} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
