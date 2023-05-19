import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/src/app/_components/Layouts/Header'
import Footer from '@/src/app/_components/Layouts/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Peninsula BCM',
  description:
    'Biblical Counseling to Reach Charleston, SC East Side, Peninsula, and beyond.',
}

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
