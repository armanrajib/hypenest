import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'HypeNest',
  description: 'A modern e-commerce platform built with Next.js for HypeNest.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${manrope.className} antialiased`}>{children}</body>
    </html>
  )
}
