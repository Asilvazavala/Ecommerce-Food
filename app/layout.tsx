import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/shared/Sidebar'
import MobileSidebar from '@/components/shared/MobileSidebar'
import MobileNavbar from '@/components/shared/MobileNavbar'
import { FoodProvider } from '../hooks/FoodContext'
import { ClerkProvider } from '@clerk/nextjs'

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark'>
        {/* <ClerkProvider> */}
          <FoodProvider>
            <Sidebar />
            <MobileNavbar />
            {children}
            <MobileSidebar />
          </FoodProvider>
        {/* </ClerkProvider> */}
      </body>
    </html>
  )
}
