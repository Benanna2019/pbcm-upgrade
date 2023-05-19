'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/src/app/_components/Layouts/Header'
import Footer from '@/src/app/_components/Layouts/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
