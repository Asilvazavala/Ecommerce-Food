"use client";

import axios from 'axios';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { formatter } from '../lib/utils';

import useCart from '@/hooks/use-cart';

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Pago realizado 😀");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Algo salió mal.");
    }
  }, [searchParams, removeAll])

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.precio)
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      productIds: items.map((item) => item.id),
    });

    window.location = response.data.url;
  }

  return (
    <>
      {items.length !== 0 && 
      <div className='mt-16 rounded-lg dark:bg-DarkPrimary bg-Primary px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'>
        <h2 className='text-lg font-medium'>Resumen de la orden</h2>
        <article className='mt-6 space-y-4'>
          <aside className='flex items-center justify-between border-t border-gray-200 pt-4'>
            <header className='text-base font-medium'>
              Total de la orden
            </header>
            <span className='text-Accent text-xl font-semibold'>
              {formatter.format(totalPrice)}
            </span>
          </aside>
        </article>
        <button 
          disabled={items.length === 0}
          onClick={onCheckout}
          className='w-full py-3 text-lg rounded-full mt-6 dark:bg-DarkSecondary bg-Secondary 
          hover:outline hover:outline-Accent transition'>
          Comprar ahora
        </button>
      </div>
      }
    </>
  )
};

export default Summary;