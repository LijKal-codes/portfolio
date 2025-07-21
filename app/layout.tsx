import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ThemeProvider from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kalabe Mulugeta Abegaz | Senior Data Analyst & Data Systems Consultant',
  description: 'Portfolio of Kalabe Mulugeta Abegaz, showcasing 14+ years in digital transformation, GIS, AI automation, and strategic data leadership.',
  keywords: 'data analyst, data management, GIS, automation, AI, ICT leadership, Ethiopia',
  authors: [{ name: 'Kalabe Mulugeta Abegaz' }],
  openGraph: {
    title: 'Kalabe Mulugeta Abegaz | Senior Data Analyst & Data Systems Consultant',
    description: 'Portfolio of Kalabe Mulugeta Abegaz, showcasing 14+ years in digital transformation, GIS, AI automation, and strategic data leadership.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-white`}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 