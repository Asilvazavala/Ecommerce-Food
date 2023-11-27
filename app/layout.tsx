import type { Metadata } from 'next'
import './globals.css'
import { montserrat } from '../fonts';
import Sidebar from '@/components/shared/Sidebar'
import MobileSidebar from '@/components/shared/MobileSidebar'
import MobileNavbar from '@/components/shared/MobileNavbar'
import { FoodProvider } from '../hooks/FoodContext'
import ToastProvider from '@/providers/toastProvider';
import CartIcon from '@/components/CartIcon';
import Footer from '@/components/Footer';
import Search from '@/components/Search';

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
    <html lang="es">
      <body className={`dark ${montserrat.className} lg:overflow-x-hidden`}>
        <FoodProvider>
          <Sidebar />
          <MobileNavbar />
          <Search />
          <CartIcon />
          <ToastProvider />
          {children}
          <Footer />
          <MobileSidebar />
        </FoodProvider>
      </body>
    </html>
  )
}
