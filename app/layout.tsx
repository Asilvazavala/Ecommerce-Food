import type { Metadata } from 'next'
import './globals.css'
import { montserrat } from '../fonts';
import Sidebar from '@/components/shared/Sidebar'
import MobileSidebar from '@/components/shared/MobileSidebar'
import MobileNavbar from '@/components/shared/MobileNavbar'
import { FoodProvider } from '../hooks/FoodContext'

export const metadata: Metadata = {
  title: 'Arrachera burger',
  description: 'Arrachera burger',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`dark antialiased ${montserrat.className}`}>
        <FoodProvider>
          <Sidebar />
          <MobileNavbar />
          {children}
          <MobileSidebar />
        </FoodProvider>
      </body>
    </html>
  )
}
