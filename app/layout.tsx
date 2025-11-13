import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Synkro - Event Production Company',
  description: 'Creating unforgettable experiences through innovative event production',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

