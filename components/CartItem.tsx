"use client";

import Image from 'next/image';
import { FaRegTrashAlt } from "react-icons/fa";

import useCart from '@/hooks/use-cart';
import { APIArracheraBurger } from '@/types/types';
import { formatter } from '../lib/utils';

interface CartItemsProps {
  data: APIArracheraBurger;
};

const CartItem: React.FC<CartItemsProps> = ({
  data
}) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(String(data.id))
  }

  const handleAddQuantity = (producto: APIArracheraBurger) => {
    cart.addQuantity(producto);
  }
  
  const handleRemoveQuantity = (quantity: number, producto: APIArracheraBurger) => {
    if (quantity < 2) return;
    cart.removeQuantity(producto);
  }

  return (
    <li className='flex py-4 border-b border-gray-500'>
      <figure className='relative h-16 w-20 rounded-md overflow-hidden sm:h-24 sm:w-28'>
        <Image 
          fill
          src={data.imagen}
          alt={data.nombre}
          className='object-cover object-center'
        />
      </figure>

      <aside className='relative ml-4 flex flex-1 flex-col justify-between sm:ml-6'>
        <div className='absolute z-10 right-0 top-0'>
          <FaRegTrashAlt 
            className='cursor-pointer text-gray-500 hover:text-Accent h-5 w-5'
            onClick={onRemove}
          />
        </div>
        
        <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
          <div className='flex justify-between'>
            <p className='text-xl font-semibold'>
              {data.nombre}
            </p>
          </div>

          <aside className="flex h-fit my-2 md:my-0">
            <button 
              onClick={() => handleRemoveQuantity(data.cantidad, data)}
              className="dark:bg-DarkPrimary bg-Primary py-1 px-3 md:py-2 md:px-4 lg:hover:outline lg:hover:outline-Accent">
              -
            </button>
            <div className="py-1 px-3 md:py-2 md:px-4 border-y-2 dark:border-DarkPrimary border-Primary">{data.cantidad}</div>
            <button 
              onClick={() => handleAddQuantity(data)}
              className="dark:bg-DarkPrimary bg-Primary py-1 px-3 md:py-2 md:px-4 lg:hover:outline lg:hover:outline-Accent">
              +
            </button>
          </aside>

          <span className='text-Accent font-semibold text-lg mt-2'>
            {formatter.format(data.precio)}
          </span>
        </div>
      </aside>
    </li>
  )
};

export default CartItem;