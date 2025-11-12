import type { Metadata } from 'next'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Tesseract Knowledge System - Master Claude Code',
  description: 'Self-updating documentation and best practices system for Claude Code. Stay ahead of the curve automatically.',
  keywords: ['Claude Code', 'AI', 'Knowledge Management', 'Documentation', 'Best Practices'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className="font-sans antialiased">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
