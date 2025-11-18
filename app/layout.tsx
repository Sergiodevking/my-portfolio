import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sergio Miranda | Senior Full Stack Engineer',
  description: 'Senior Full Stack Engineer with 10+ years of experience in JavaScript/TypeScript, React, Vue, Node.js, AWS, NetSuite, and microservices architecture. Based in Quito, Ecuador.',
  keywords: ['Sergio Miranda', 'Full Stack Engineer', 'Senior Developer', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Node.js', 'Nest.js', 'AWS', 'NetSuite', 'microservices', 'Quito', 'Ecuador'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

