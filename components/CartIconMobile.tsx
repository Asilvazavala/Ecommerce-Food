"use client";

import useCart from '@/hooks/use-cart';
import { ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import SidebarCart from './shared/SidebarCart';

const CartIconMobile: React.FC = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const items = useCart((state) => state.items);

  const totalQuantity = items.reduce((total, item) => {
    return total + Number(item.cantidad)
  }, 0);

  return (
    <section className='relative'>
      <button 
        onClick={() => setOpenSidebar(!openSidebar)}
        className='flex items-center bg-Primary dark:bg-DarkPrimary z-10 md:hidden'>
        <ShoppingBag
          size={25}
          className='text-Accent font-bold'
        />
        <span className='ml-1 md:ml-2 text-sm text-Accent font-bold'>
          {totalQuantity}
        </span>
      </button>
      <SidebarCart 
        onOpen={openSidebar} 
        onClose={setOpenSidebar}
      />
    </section>
  )
};

export default CartIconMobile;