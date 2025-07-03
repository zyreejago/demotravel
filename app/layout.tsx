import type { Metadata } from 'next'
import './globals.css'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Zee Demo',
  description: 'Platform travel terpercaya untuk jelajahi Indonesia',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
