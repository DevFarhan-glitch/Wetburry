import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Westbury Law | Expert UK Immigration & Business Lawyers',
  description: 'Westbury Law provides expert legal advice on UK Immigration, Family Visas, Work Visas, and Settlement. Over 15 years of experience in UK law.',
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
