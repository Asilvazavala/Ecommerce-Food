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
import getProducts from '@/actions/get-products';

export const metadata: Metadata = {
  title: 'Arrachera burger',
  description: 'Arrachera burger',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const products = await getProducts({ isFeatured: true });
  
  return (
    <html lang="es">
      <body className={`dark ${montserrat.className} lg:overflow-x-hidden max-w-[1400px]`}>
        <FoodProvider initialProducts={products}>
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
