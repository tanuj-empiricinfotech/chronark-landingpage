import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chronark',
  description: 'Create, inspect, and apply synthetic surveillance broadly.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
