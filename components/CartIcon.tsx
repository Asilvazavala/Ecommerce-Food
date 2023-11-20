"use client";

import useCart from '@/hooks/use-cart';
import { ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import SidebarCart from './shared/SidebarCart';

const CartIcon: React.FC = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const cart = useCart();

  return (
    <section className='relative'>
      <button 
        onClick={() => setOpenSidebar(!openSidebar)}
        className='hidden md:flex items-center bg-Primary dark:bg-DarkPrimary 
        rounded-full px-4 py-2 hover:outline hover:outline-Accent
        fixed right-7 top-8 z-10'>
        <ShoppingBag
          size={20}
          className='text-Accent font-bold'
        />
        <span className='ml-1 md:ml-2 text-sm text-Accent font-bold'>
          {cart.items.length}
        </span>
      </button>
      <SidebarCart 
        onOpen={openSidebar} 
        onClose={setOpenSidebar} 
      />
    </section>
  )
};

export default CartIcon;